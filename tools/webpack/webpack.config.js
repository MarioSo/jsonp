const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const basePath = path.resolve(__dirname, '../../')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: `${basePath}/src`,
  output: {
    path: basePath,
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      use: ['babel-loader'],
      exclude: [`${basePath}/node_modules/`]
    }]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}
