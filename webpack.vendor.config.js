const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    baz: "./src/libs/baz.js",
    vendor: ["jquery"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].chunkhash.[chunkhash].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new HtmlWebpackPlugin({
      filename: "vendor.html"
    })
  ]
};
