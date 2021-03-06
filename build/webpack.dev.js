var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var DIST_PATH = path.resolve(ROOT_PATH,'dist');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

  entry: './app/entry.js',

  output: {path: __dirname,filename: 'bundle.js'},

  resolve: {
    extensions: ['','.js','.jsx','.css']
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new OpenBrowserPlugin({url: 'http://localhost:3000'})
    ]
  }
