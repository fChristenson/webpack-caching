const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    baz: "./src/libs/baz.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].chunkhash.better.[chunkhash].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),
    new HtmlWebpackPlugin({
      filename: "vendor_better.html"
    })
  ]
};
