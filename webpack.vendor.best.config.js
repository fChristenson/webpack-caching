const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    baz: "./src/libs/baz.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].chunkhash.best.[chunkhash].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime",
      minChunks: Infinity
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: "vendor_best.html"
    })
  ]
};
