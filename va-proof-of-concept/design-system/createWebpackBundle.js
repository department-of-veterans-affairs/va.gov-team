const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function createWebpackBundle(logger, fractalComponents, watch = true) {
  const components = fractalComponents
    .flatten()
    .toArray()
    .filter(item => item.context.componentSourcePath)
    .map((item, index) => {
      return `
        import component${index} from './${path.relative(__dirname, item.viewPath)}';
        registry['${item.handle}'] = component${index};
      `;
    });

  const output = `const registry = {};
  import React from 'react';
  import ReactDOM from 'react-dom';
  ${components.join('\n')}
  const mountPoint = document.getElementById('reactMount');
  if (mountPoint) {
    const Component = registry[mountPoint.getAttribute('data-tpl')]
    ReactDOM.render(<Component {...window.currentProps}/>, mountPoint);
  }`;

  fs.writeFileSync('./fractalEntry.js', output);

  const componentCSS = new ExtractTextPlugin('[name].css');
  const fractalCSS = new ExtractTextPlugin('[name]-styles.css');

  const compiler = webpack({
    entry: {
      components: './fractalEntry.js',
      styles: './src/sass/site/site.scss',
      fractal: './src/sass/site/style.fractal.scss'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'public/dist')
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Speed up compilation.
              cacheDirectory: '.babelcache'

              // Also see .babelrc
            }
          }
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Speed up compilation.
              cacheDirectory: '.babelcache'

              // Also see .babelrc
            }
          }
        },
        {
          test: /\.njk$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Speed up compilation.
              cacheDirectory: '.babelcache'

              // Also see .babelrc
            }
          }
        },
        {
          test: /\.scss$/,
          exclude: /\.fractal.scss/,
          use: componentCSS.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
            ]
          })
        },
        {
          test: /\.fractal.scss$/,
          use: fractalCSS.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
            ]
          })
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: {
            loader: 'url-loader?limit=10000!img?progressive=true&-minimize'
          }
        },
        {
          test: /\.svg/,
          use: {
            loader: 'svg-url-loader'
          }
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        },
        {
          test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader: 'file-loader'
          }
        }
      ]
    },
    plugins: [
      fractalCSS,
      componentCSS
    ]
  });

  if (watch) {
    logger.log('Starting webpack build...');
    const buildHashes = [];
    compiler.watch({
      progress: true
    }, (err, stats) => {
      if (err || stats.hasErrors()) {
        const info = stats.toJson();
        logger.error(info.errors);
      } else {
        if (!buildHashes.includes(stats.hash)) {
          buildHashes.push(stats.hash);
          logger.log(stats.toString('minimal'));

          if (buildHashes.length > 1) {
            logger.log('\x1b[36mBuild complete');
          }
        }
      }
    });
  } else {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        const info = stats.toJson();
        logger.error(info.errors);
        throw new Error('Webpack compilation error');
      }
      logger.log(stats.toString('minimal'));
    });
  }
}

module.exports = createWebpackBundle;
