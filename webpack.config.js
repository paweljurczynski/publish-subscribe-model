const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
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
            title: 'Events',
            template: './src/index.html',
            hash: isProd
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};