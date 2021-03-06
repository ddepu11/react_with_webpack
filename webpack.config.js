const HtmlWebpackPlugin = require('html-webpack-plugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ESLintPlugin = require('eslint-webpack-plugin');

const webpack = require('webpack');

const path = require('path');

const mode = process.env.NODE_ENV;

const plugins = [
  new HtmlWebpackPlugin({ template: './src/index.html' }),
  new MiniCssExtractPlugin(),
];

if (mode === 'development') {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),

    new ReactRefreshWebpackPlugin(),

    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      failOnError: true,
      extensions: ['js', 'jsx'],
      overrideConfigFile: './.eslintrc.js',
    })
  );
}

if (mode === 'production') {
  plugins.push(
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/_redirects'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    })
  );
}

module.exports = {
  entry: './src/index.jsx',

  mode,

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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

  plugins,

  devtool: mode === 'production' ? false : 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    quiet: false,
    historyApiFallback: true,
    publicPath: '/',
  },
};
