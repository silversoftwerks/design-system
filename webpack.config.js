const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["syntax-dynamic-import"],
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false
              }
            ],
            ["@babel/preset-react"]
          ]
        },

        test: /\.jsx?$/
      }
    ]
  },

  entry: {
    catalogue: "./src/catalogue.js",
    web: "./src/web.js",
    native: "./src/native.js",
    cli: "./src/cli.js"
  },

  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },

  mode: "development",
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "public/index.html")
    })
  ],
  resolve: {
    alias: {
      "react-native$": "react-native-web"
    }
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
};
