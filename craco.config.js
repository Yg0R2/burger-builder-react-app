const path = require('path');

const logWebpackConfigPlugin = require("./craco-plugin-log-webpack-config");

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: require.resolve('./src/loaders/my-loader')
              }
            ]
          }
        ]
      }
      //Doesnt load other loaders because of this
      /*resolveLoader: {
        modules: [
          path.resolve(__dirname, './src/loaders')
        ]
      },*/
      /*module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: './src/loaders/my-loader',
                options: {
                  importLoaders: 4
                }
              }
            ]
          }
        ]
      }*/
      /*module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: "react-web-component-style-loader",
                options: {
                  importLoaders: 4
                }
              }
            ]
          }
        ]
      }*/
    }
  },
  /*plugins: [
    {
      plugin: logWebpackConfigPlugin,
      options: {
        preText: "Will log the webpack config:"
      }
    }
  ]*/
};
