const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // automatically generate output HTML based on index.js

module.exports = {
    entry: {
        app: './src/main.ts',
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
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
                    // {
                    //     loader: '@angularclass/hmr-loader',
                    //     options: {
                    //         pretty: true,
                    //         prod: false
                    //     }
                    // },
                    // {
                    //     loader: 'ng-router-loader',
                    //     options: {
                    //         loader: 'async-import',
                    //         genDir: 'compiled',
                    //     }
                    // },
                    {
                        loader: 'awesome-typescript-loader',
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader'
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