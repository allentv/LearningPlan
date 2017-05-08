const path = require('path');

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./index.js",
    html: "./index.html"
  },
  output: {
    filename: "index.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "src/components"), "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      }
    ],
  },
}