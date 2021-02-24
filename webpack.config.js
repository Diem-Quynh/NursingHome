const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const glob = require('glob')
const npm_package = require('./package.json')
require("@babel/register")
Object.keys(npm_package._moduleAliases).map(a => npm_package._moduleAliases[a] = path.resolve(__dirname, npm_package._moduleAliases[a]))
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        server: [
            './server.js',
            ...glob.sync('./app/**/*.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        libraryTarget: 'umd'
    },
    target: 'node',
    context: __dirname,
    node: {
        __dirname: true,
        __filename: true,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "node": "6.10",
                                        "esmodules": true
                                    }
                                }
                            ]
                        ],
                        "plugins": ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            { 
                test: /\.ts$/, 
                use: 'ts-loader', exclude: /node_modules/ 
            },
        ]
    },
    resolve: {
        alias: npm_package._moduleAliases || {},
        modules: npm_package._moduleDirectories || []
    }
};