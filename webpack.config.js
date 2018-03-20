/* global __dirname, require, module*/
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const pkg = require('./package.json');
let libraryName = pkg.name;
const { NODE_ENV } = process.env;

const filename = `${libraryName}${NODE_ENV === 'production' ? '.min' : ''}.js`;
const minimizer = [];

NODE_ENV === 'production' && minimizer.push(
    new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
}));

module.exports = {
    module: {
        rules: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        ],
    },
    entry: [
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename,
        library: libraryName,
        libraryTarget: 'umd',
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    },
    optimization: {
        runtimeChunk: false,
        minimizer: minimizer
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        })
    ]
};
