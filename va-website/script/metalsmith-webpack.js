/* eslint-disable no-console */
/*
 * This code is taken from https://github.com/christophercliff/metalsmith-webpack and https://github.com/okonet/metalsmith-webpack-dev-server.
 *
 * These modules appear to be dead, so in order to get around their Webpack 2.x deps, I'm copying them here
 */
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const MemoryInputFileSystem = require('enhanced-resolve/lib/MemoryInputFileSystem');
const MemoryOutputFileSystem = require('webpack/lib/MemoryOutputFileSystem');
const tty = require('tty');
const path = require('path');

const defaults = {
  host: 'localhost',
  port: 8081
};

function useColors() {
  return tty.isatty(1 /* stdout */);
}

function normalizePath(fullPath) {
  return fullPath.split(path.sep).filter((p) => {
    return typeof p === 'string' && p.length > 0;
  }).join('/');
}

function getMetalsmithKey(files, p) {
  const normalizedPath = normalizePath(p);
  return Object.keys(files).find(key => normalizePath(key) === normalizedPath);
}

function webpackPlugin(config) {
  const compiler = webpack(config);
  const emptyFiles = {};
  const fs = new MemoryInputFileSystem(emptyFiles);
  compiler.outputFileSystem = new MemoryOutputFileSystem(emptyFiles);
  return (files, metalsmith, done) => {
    compiler.run((err, stats) => {
      if (err) {
        done(err);
        return;
      }
      const info = stats.toString({
        modules: false,
        children: false,
        assets: false,
        chunkOrigins: false,
        chunks: false,
        chunkModules: false,
        colors: useColors()
      });
      if (stats.hasErrors()) {
        done(info);
        return;
      }
      console.log(info);
      fs.readdirSync(config.output.path).forEach((file) => {
        const filePath = path.join(config.output.path, file);
        const key = getMetalsmithKey(files, filePath) || filePath;
        /* eslint-disable no-param-reassign */
        files[key] = {
          contents: fs.readFileSync(filePath)
        };
        /* eslint-enable no-param-reassign */
      });
      done();
    });
  };
}

function webpackDevServerPlugin(config, opts) {
  let server;
  const options = Object.assign(defaults, opts);
  const compiler = webpack(Object.assign({}, config));

  function process(files, metalsmith, done) {
    // Prevent from starting webpack dev server multiple times
    if (server) {
      done();
      return;
    }

    server = new WebpackDevServer(compiler, options);

    server.listen(options.port || 8081, options.host, () => {
      console.log(
        chalk.blue('[metalsmith-webpack-dev-server]: ') +
        chalk.green(`Running webpack dev server at http://${options.host}:${options.port}`)
      );
      done();
    });
  }

  return process;
}

module.exports = {
  webpackPlugin,
  webpackDevServerPlugin
};

