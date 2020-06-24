const logWebpackConfigPlugin = require("./craco-plugin-log-webpack-config");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = require('./src/plugins/MyPlugin');

module.exports = {
  webpack: {
    plugins: [
      new MyPlugin({ options: '' })
    ],
    configure: {
      module: {
        rules: [
        ]
      }
    }
  },
  plugins: [
    {
      plugin: logWebpackConfigPlugin,
      options: {
        preText: "Will log the webpack config:"
      }
    }
  ]
};
