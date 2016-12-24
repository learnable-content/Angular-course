var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var DebugWebpackPlugin = require('debug-webpack-plugin');
var path = require('path');

let isProduction = process.env.NODE_ENV === 'production';

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
  ])
];

if (isProduction) {
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: false
    }),
  ]);
} else {
  plugins = plugins.concat([
    new DebugWebpackPlugin({
      debug: true
    })
  ]);
}

module.exports = {
  devtool: 'cheap-source-map',
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
    extensions: ['', '.ts', '.js'],
    moduleDirectories: ['node_modules'],
    root: path.resolve(__dirname)
  }
};
