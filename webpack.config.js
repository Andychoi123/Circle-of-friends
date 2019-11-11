var path = require('path');
// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var CopyPlugin = require('copy-webpack-plugin');
// var UglifyJSPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename : 'bundle.js',
    path: path.resolve(__dirname, './dist')
  }
  // plugins: [
  //       new webpack.ProvidePlugin({
  //           $: 'jquery'
  //       })
  //   ]

}