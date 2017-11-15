const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    foo: "./src/libs/foo.js",
    bar: "./src/libs/bar.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].chunkhash.[chunkhash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "chunk_hash.html"
    })
  ]
};
