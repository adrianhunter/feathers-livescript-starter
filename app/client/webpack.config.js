var path = require('path')
// webpack.config.js
module.exports = {
//   root: path.resolve('./app'),

  entry: './src/index.ls',
  output: {
      path:'/var/www',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.ls$/, loader: 'livescript-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.es6.js$/,
        include: /node_modules\/mithril.exitable/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  },
  resolve: {
	  root: path.resolve( __dirname),
    // add alias for application code directory
    alias:{
      client: 'src'
    },
    extensions: [ '', '.js','.ls', '.json' ]
  }
};
