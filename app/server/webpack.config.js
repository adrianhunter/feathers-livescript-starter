var path = require('path')
var nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './src/index.ls',
    output: {
        path: 'build/',
        filename: 'app.js'
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            { test: /\.ls$/, loader: 'livescript-loader', exclude: [/node_modules/] },
        ]
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            client: '../client/src'
            server: '../client/src'
        },
        extensions: ['', '.js', '.ls']
    }
};
