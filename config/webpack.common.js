const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // automatically generate output HTML based on index.js

module.exports = {
    entry: {
        app: './src/main.ts',
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            './src',
            {}
          )
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    }
};