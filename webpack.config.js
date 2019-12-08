'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require('vue-loader');

const CopyPlugin = require('copy-webpack-plugin');
const UglifyJS = require("uglify-es");

const path = require("path");
const webpack = require('webpack');

module.exports = (env, options) => {

    const isDev = options.mode == 'development' ? true : false;

    let filename = '[name].[contenthash].js';
    if (isDev)
    {
        filename = '[name].js';
    }

    return {
        mode: options.mode,
        entry: [
            './src/app.js'
        ],
        externals: {
            vue: 'Vue'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: 'css-loader', options: {importLoaders: 2}},
                        {loader: 'sass-loader'},
                    ],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }
            ]
        },
        optimization: {
            moduleIds: 'hashed',
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /node_modules/,
                        chunks: "initial",
                        name: "vendor"
                    }
                }
            }
        },
        output: {
            filename: filename,
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist/'
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new VueLoaderPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new CopyPlugin([
                {
                    from: './src/js/tiny-plugins',
                    to: 'tiny/plugins',
                    transform(content, path)
                    {
                        // if the path is a JS file, let's minify it
                        if (path.substr(path.lastIndexOf('.')) == 'js')
                        {
                            return '' + UglifyJS.minify(content.toString()).code;
                        }

                        // if we make it this far, simply return the content
                        return content;
                    }
                }
            ]),
        ]
    }
}