module.exports = {
  entry: './src/client.jsx',
  output: {
    filename: 'app.js',
    path: './build/static',
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
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs'],
        },
      },
    ],
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
  target: 'web',
}
