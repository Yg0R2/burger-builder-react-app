const logWebpackConfigPlugin = require("./craco-plugin-log-webpack-config");

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          /*{
            test: /\.css$/,
            use: [
              {
                loader: "react-web-component-style-loader",
                options: {
                  importLoaders: 1
                }
              }
            ]
          }*/
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
