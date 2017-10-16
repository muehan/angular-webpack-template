const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // automatically generate output HTML based on index.js

module.exports = {
    entry: {
        app: './src/main.ts', // your code
        vendor: './src/vendor.ts', // third party libraries
        polyfills: './src/polyfills.ts', // polyfills
    },
    resolve: {
        /**
         * This is needed to resolve modules to load
         */
        extensions: ['.ts', '.js', '.json'],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './../dist')
    },
    plugins: [
        /**
         * Dynamically create index files with the hased files names from the output configuration
         * With tha hashes the browser can easaly cache JS files and reload changed. No need to reload big ventor bundle
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Webpack Angular Template'
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