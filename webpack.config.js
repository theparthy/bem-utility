/* global __dirname, require, module*/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

let libraryName = pkg.name;
//
let outputFile = libraryName + '.js';
//
// const config = {
//     entry: './src/index.js',
//     output: {
//         path: __dirname + '/lib',
//         filename: outputFile,
//         library: libraryName,
//         libraryTarget: 'umd',
//         libraryExport: "default",
//         umdNamedDefine: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /(\.js)$/,
//                 loader: 'babel-loader',
//                 exclude: /(node_modules)/
//             }
//         ],
//     },
//     optimization: {
//         runtimeChunk: false,
//         minimizer: [
//             new UglifyJsPlugin({
//                 cache: true,
//                 parallel: true,
//                 sourceMap: true
//             })
//         ]
//     },
//     resolve: {
//         modules: [path.resolve('./node_modules'), path.resolve('./src')],
//         extensions: ['.json', '.js']
//     }
// };
//
// module.exports = config;


const webpack = require('webpack');

const { NODE_ENV } = process.env;

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
];

const filename = `${outputFile}${NODE_ENV === 'production' ? '.min' : ''}.js`;

const minimizer = [];

NODE_ENV === 'production' && minimizer.push(
    new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true

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
};
