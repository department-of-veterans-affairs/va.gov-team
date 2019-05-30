// Staging config. Also the default config that prod and dev are based off of.

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

require('babel-polyfill');

const timestamp = new Date().getTime();

const globalEntryFiles = {
  style: './src/platform/site-wide/sass/style.scss',
  vendor: [
    './src/platform/polyfills',
    'history',
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'redux',
    'redux-thunk',
    'raven-js'
  ]
};

const configGenerator = (options, apps) => {
  const entryFiles = Object.assign({}, apps, globalEntryFiles);
  const baseConfig = {
    mode: 'development',
    entry: entryFiles,
    output: {
      path: path.join(__dirname, `../build/${options.buildtype}/generated`),
      publicPath: '/generated/',
      filename: (options.buildtype === 'development') ? '[name].entry.js' : `[name].entry.[chunkhash]-${timestamp}.js`,
      chunkFilename: (options.buildtype === 'development') ? '[name].entry.js' : `[name].entry.[chunkhash]-${timestamp}.js`
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
          // Modernizr is used in some of the styles
          test: /modernizrrc\.js/,
          use: {
            loader: 'modernizr-loader'
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
            ]
          })
        },
        {
          // if we want to minify these images, we could add img-loader
          // but it currently only would apply to three images from uswds
          test: /\.(jpe?g|png|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
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
        },
        {
          test: /react-jsonschema-form\/lib\/components\/(widgets|fields\/ObjectField|fields\/ArrayField)/,
          exclude: [
            /widgets\/index\.js/,
            /widgets\/TextareaWidget/
          ],
          use: {
            loader: 'null-loader'
          }
        }
      ],
      noParse: [/mapbox\/vendor\/promise.js$/],
    },
    resolve: {
      alias: {
        modernizr$: path.resolve(__dirname, './modernizrrc.js')
      },
      extensions: ['.js', '.jsx']
    },
    optimization: {
      minimizer: [new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            beautify: false,
            comments: false
          },
          compress: { warnings: false }
        },
        // cache: true,
        parallel: 2,
        sourceMap: true,
      })],
      splitChunks: {
        cacheGroups: {
          // this needs to be "vendors" to overwrite a default group
          vendors: {
            chunks: 'all',
            test: 'vendor',
            name: 'vendor',
            enforce: true
          }
        }
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        __BUILDTYPE__: JSON.stringify(options.buildtype),
        'process.env': {
          API_PORT: (process.env.API_PORT || 3000),
          WEB_PORT: (process.env.WEB_PORT || 3333),
          API_URL: process.env.API_URL ? JSON.stringify(process.env.API_URL) : null,
          BASE_URL: process.env.BASE_URL ? JSON.stringify(process.env.BASE_URL) : null,
        }
      }),

      new ExtractTextPlugin({
        filename: (options.buildtype === 'development') ? '[name].css' : `[name].[contenthash]-${timestamp}.css`
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  };

  if (options.buildtype === 'production' || options.buildtype === 'staging') {
    let sourceMap = 'https://s3-us-gov-west-1.amazonaws.com/staging.vets.gov';
    if (options.buildtype === 'production') {
      sourceMap = 'https://s3-us-gov-west-1.amazonaws.com/www.vets.gov';
    }

    baseConfig.plugins.push(new webpack.SourceMapDevToolPlugin({
      append: `\n//# sourceMappingURL=${sourceMap}/generated/[url]`,
      filename: '[file].map',
    }));

    baseConfig.plugins.push(new webpack.HashedModuleIdsPlugin());
    baseConfig.plugins.push(new ManifestPlugin({
      fileName: 'file-manifest.json'
    }));
    baseConfig.mode = 'production';
  } else {
    baseConfig.devtool = '#eval-source-map';
  }

  if (options.analyzer) {
    baseConfig.plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true
    }));
  }

  return baseConfig;
};

module.exports = configGenerator;
