const logWebpackConfigPlugin = require("./craco-plugin-log-webpack-config");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: {
    plugins: [
      new MiniCssExtractPlugin()
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
