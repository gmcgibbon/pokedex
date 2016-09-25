module.exports = {
  entry: {
    polyfill:    './source/javascripts/polyfill.ts',
    vendor:      './source/javascripts/vendor.ts',
    application: './source/javascripts/application.ts'
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
