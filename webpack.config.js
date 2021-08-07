const HtmlWebpackPlugin = require('html-webpack-plugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ESLintPlugin = require('eslint-webpack-plugin');

const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: './src/index.jsx',

  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\node_modules/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),

    new webpack.HotModuleReplacementPlugin(),

    new ReactRefreshWebpackPlugin(),

    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      failOnError: true,
      extensions: ['js', 'jsx'],
      overrideConfigFile: './.eslintrc.js',
    }),

    new CleanWebpackPlugin(),
  ],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    quiet: false,
    historyApiFallback: true,
    publicPath: '/',
  },
};
