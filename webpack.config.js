var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var DebugWebpackPlugin = require('debug-webpack-plugin');
var path = require('path');

module.exports = {
  //devtool: 'source-map',
  entry: {
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
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: false
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets',
        to: 'assets'
      }
    ])
  ],
  resolve: {
    extensions: ['', '.ts', '.js'],
    moduleDirectories: ['node_modules'],
    root: path.resolve(__dirname)
  }
};
