require('dotenv').load();
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var path = require('path');

var libraryName = 'fruits-lib';

var plugins = [];
var outputFile;

// if you want to minimize:
// if (env === 'build') {
//     plugins.push(new UglifyJsPlugin({ minimize: true }));
//     outputFile = libraryName + '.min.js';
// } else {
//     outputFile = libraryName + '.js';
// }
outputFile = libraryName + '.js';


var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            // {
            //     test: /(\.js)$/,
            //     loader: "eslint-loader",
            //     exclude: /node_modules/
            // }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    plugins: plugins
};

module.exports = config;
