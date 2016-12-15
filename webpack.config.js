var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DebugWebpackPlugin = require('debug-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'app': './app/main.ts'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader?keepUrl=true'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /index.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname + '/app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.(html|css)$/,
        include: path.resolve(__dirname + '/app'),
        loader: 'raw'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: './dist/'
  },
  plugins: [
    /*new DebugWebpackPlugin({
      debug: true
    }),*/
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'app',
        'vendor',
        'polyfills'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: ['', '.ts', '.js'],
    moduleDirectories: ['node_modules'],
    root: [
      path.resolve(__dirname + './app'),
      path.resolve(__dirname + './node_modules')
    ]
  }
};
