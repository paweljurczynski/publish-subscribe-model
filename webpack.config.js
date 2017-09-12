const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader']);

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            { test: /\.scss$/, use: isProd ? cssProd : cssDev },
            { test: /\.js$/, exclude: '/node_modules/', use: 'babel-loader' }
        ]
    },
    devServer: {
        port: 3000,
        stats: 'errors-only',
        open: true,
        hot: true,
        contentBase: [ './src' ],
        watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: './src/index.html',
            hash: isProd
        }),
        new ExtractTextWebpackPlugin({
            filename: 'app.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};