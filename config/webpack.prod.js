const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // delete content from dist folder with each run

const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['./dist/*.*'], { root: process.cwd(), verbose: true, dry: false }),
    ]
});