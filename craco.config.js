const path = require('path');

const logWebpackConfigPlugin = require("./craco-plugin-log-webpack-config");

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [//'style-loader', 'css-loader'
              /*'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: false
                }
              },*/
              /*{
                loader: path.resolve('./src/loaders/my-loader'),
              },*/
              /*{
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    /*require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    }),
                    // Adds PostCSS Normalize as the reset css with default options,
                    // so that it honors browserslist config in package.json
                    // which in turn let's users customize the target behavior as per their needs.
                    require('postcss-normalize'),*/
                  /*],
                  sourceMap: false
                }
              }*/
            ],
            //sideEffects: true
          }
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
