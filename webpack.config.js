const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,  
      loaders: 'babel-loader'
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader',
        'resolve-url-loader'
      ]
    }, {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader?sourceMap',
        'resolve-url-loader'
      ]
    }, {
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.svg$/,
      loader: 'svg-sprite-loader'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '127.0.0.1'
  }
};