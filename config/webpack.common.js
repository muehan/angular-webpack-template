const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // automatically generate output HTML based on index.js
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin; 

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts', // polyfills
        vendor: './src/vendor.ts', // third party libraries
        app: './src/main.ts', // your code
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
         * Move type checking from awesome-typescript-loader to other process to improve compilation time
         */
        new CheckerPlugin(),
        /**
         * Dynamically create index files with the hased files names from the output configuration
         * With tha hashes the browser can easaly cache JS files and reload changed. No need to reload big ventor bundle
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Webpack Angular Template'
        }),
        new ScriptExtHtmlWebpackPlugin({
            sync: /polyfills|vendor/,
            defaultAttribute: 'async',
            preload: [/polyfills|vendor|main/],
            prefetch: [/chunk/]
        }),
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            './src',
            {}
        ),
        // It identifies common modules and put them into a commons chunk.
        new CommonsChunkPlugin({
            name: 'polyfills',
            chunks: ['polyfills']
        }),
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
                        options: { configFileName: './tsconfig.webpack.json' }
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['to-string-loader', 'style-loader', 'css-loader', 'sass-loader'],
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