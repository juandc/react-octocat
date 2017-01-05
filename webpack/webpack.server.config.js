const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/server.jsx',
  output: {
    filename: 'server.js',
    path: './build',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules)/,
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react'],
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('../build/static/app.css'),
  ],
  resolve: { extensions: ['', '.js', '.jsx'] },
  target: 'node',
}
