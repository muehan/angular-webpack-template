const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
       contentBase: './../dist',
       watchOptions: {
        ignored: /node_modules/
      },
   },
   plugins: [
       new webpack.HotModuleReplacementPlugin()
   ]
 });