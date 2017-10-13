const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // automatically generate output HTML based on index.js
const CleanWebpackPlugin = require('clean-webpack-plugin'); // delete content from dist folder with each run

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './../dist')
    },
    plugins: [
        new CleanWebpackPlugin(['./dist/*.*'], { root: process.cwd(), verbose: true, dry: false }),
        new HtmlWebpackPlugin({
            title: 'Angular-webpack-template'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
};