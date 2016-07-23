var path = require('path')
var nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './server/src/index.ls',
    output: {
        path: './server/build/',
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
            client: 'client/src',
            server: 'server/src'
        },
        extensions: ['', '.js', '.ls']
    }
};
