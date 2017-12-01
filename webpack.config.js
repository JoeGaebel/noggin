const webpack = require('webpack');

module.exports = {
  devServer: { port: process.env.PORT || 8080 },
  entry: './entry.js',
  output: {
    filename: './bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: ['env'] }
    }, {
      exclude: /node_modules/,
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"]
    }, {
      test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      use: [{loader: 'file-loader'}]
    }]
  }
};
