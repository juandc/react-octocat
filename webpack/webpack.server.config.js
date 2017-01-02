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
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        },
      },
    ],
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
  target: 'node',
}
