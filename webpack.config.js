const path = require('path');

module.exports = {
  entry: ['./index.js', './styles.scss'],
  output: {
    filename: 'bundle.js',
    path: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }],
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  devServer: {
    contentBase: "./"
  }
};
