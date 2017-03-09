const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'server': path.resolve(path.join(__dirname, 'server', 'server.ts'))
    },
    output: {
        publicPath: '',
        path: path.resolve(path.join(__dirname, 'dist', 'server')),
        filename: 'server.js'
    },
    module: {
        rules: [
            { test: /\.tsx?/, loaders: [ 'ts-loader' ], exclude: [ /node_modules/ ] }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    target: 'node',
    node: {
        global: true,
        crypto: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: true
    }
}