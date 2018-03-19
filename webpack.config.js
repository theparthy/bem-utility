/* global __dirname, require, module*/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

let libraryName = pkg.name;

let outputFile = libraryName + '.js';

const config = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        libraryExport: "default",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
        ],
    },
    optimization: {
        runtimeChunk: false,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    }
};

module.exports = config;
