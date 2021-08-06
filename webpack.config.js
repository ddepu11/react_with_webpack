const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

const path = require("path");

module.exports = {
  entry: "./src/index.js",

  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
    ],
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],

  devtool: "inline-source-map",

  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 3000,
  },
};
