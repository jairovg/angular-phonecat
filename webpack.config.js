const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app', 'app.js'),
  build: path.join(__dirname, 'build'),
  index: path.join(__dirname, 'app', 'index.html'),
  images: path.join(__dirname, 'app', 'img'),
  styles: path.join(__dirname, 'app', 'app.css'),
  mocks: path.join(__dirname, 'app', 'phones')
};

const sourceMapDevTool = 'cheap-module-inline-source-map';

let config = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app,
    styles: PATHS.styles
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  devtool: sourceMapDevTool,
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.index
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CopyWebpackPlugin([
        { from: PATHS.images,
          to: 'img'
        }
      ], {
        ignore: [
          '*.gitkeep'
        ]
      }),
    new CopyWebpackPlugin([
        { from: PATHS.mocks,
          to: 'phones'
        }
      ], {
        ignore: [
          '*.gitkeep'
        ]
      }),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    rules: [
      {
        test: /app\.js$/,
        loader: 'required-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: PATHS.index,
        loader: 'ng-cache-loader',
        options: {
          prefix: '[dir]',
          module: 'phoneTemplates'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap'])
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(?:\?.*|)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  }
};

module.exports = config;