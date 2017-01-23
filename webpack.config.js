var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var DebugWebpackPlugin = require('debug-webpack-plugin');
var path = require('path');

let isProduction = process.env.NODE_ENV === 'production';

let extractLESS = new ExtractTextPlugin('[name].less');

let plugins = [
  new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(isProduction)
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
    chunks: ['vendor', 'app']
  }),
  new CopyWebpackPlugin([
    {
      from: 'assets',
      to: 'assets'
    }
  ]),
  extractLESS
];

if (isProduction) {
  // anything needed for production
} else {
  plugins = plugins.concat([
    //new DebugWebpackPlugin({
    //  debug: true
    //})
  ]);
}

module.exports = {
  entry: {
    'vendor': ['./app/polyfills.ts', './app/vendor.ts'],
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
        test: /\.less$/,
        include: [path.resolve(__dirname + '/app')],
        loader: 'raw!less'
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
  plugins: plugins,
  resolve: {
    extensions: ['', '.ts', '.js', '.less'],
    moduleDirectories: ['node_modules'],
    root: path.resolve(__dirname)
  }
};
