const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval",
  devServer: {
    hot: true,
    compress: true,
    port: 10000
  },
  entry: {
    javascript: "./src/main.js"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, './dist'),
    chunkFilename: "[name].[chunkhash].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [
      path.resolve(__dirname, "src/components"),
      "node_modules"
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin({
      filename: "styles.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      title: "Learning Plan"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery"
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: "file-loader?name=img/[path][name].[ext]"
      },
      {
        test: /\.(eof|woff|woff2|svg)$/,
        loader: "file-loader?name=img/[path][name].[ext]"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 2,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            },
            {
              loader: 'sass-loader',
              query: {
                includePaths: [
                    path.resolve(__dirname, 'node_modules/bootstrap/scss/'),
                ]
              }
            }
          ]
        })
      }
    ]
  }
}