var webpack = require('webpack');

module.exports = {

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV', 'API_URL'
    ])
  ],

  entry: {
    application: [
      './source/javascripts/polyfill.ts',
      './source/javascripts/vendor.ts',
      './source/javascripts/main.ts'
    ]
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },

  output: {
    path:     './.assets-cache',
    filename: 'javascripts/[name].js'
  },

  module: {
    loaders: [
      {
        test:    /source\/javascripts\/.*\.tsx?$/,
        exclude: /node_modules|\.assets-cache/,
        loader: 'ts'
      }
    ]
  }
};
