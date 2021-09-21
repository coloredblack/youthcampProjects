const path = require('path')
const json5 = require('json5')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      }
    ]
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Output HTML",      
    }),
  ]
}