const webpack = require('webpack');
const webpackHtml = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'app': path.resolve(path.join(__dirname, 'client', 'main.ts'))
  },
  output: {
    path: path.resolve(path.join(__dirname, 'dist', 'client')),
    filename: 'app[hash].js',
    publicPath: ''
  },
  module: {
    rules: [
      { test: /\.tsx?/, loaders: [ 'ts-loader' ], exclude: [ /node_modules/ ] }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.html', '.pug', '.css', '.sass' ]
  },
  plugins: [
    new webpackHtml({
      template: path.resolve(path.join(__dirname, 'client', 'index.html'))
    })
  ]
}