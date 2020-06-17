const path = require('path');

const logWebpackConfigPlugin = require("./craco-plugin-log-webpack-config");

module.exports = {
  webpack: {
    configure: {
      //Doesnt load other loaders because of this
      resolveLoader: {
        modules: [
          path.resolve(__dirname, './src/loaders')
        ]
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: './src/loaders/my-loader'
              }
            ]
          }
        ]
      }
      /*module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: "react-web-component-style-loader",
                options: {
                  importLoaders: 1
                }
              }
            ]
          }
        ]
      }*/
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
