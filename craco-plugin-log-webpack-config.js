const cssRegex = /\.css$/;

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {

    const cssRule = {
      //oneOf: [{
        test: cssRegex,
        use: [
          //'style-loader',
          {
            loader: './src/loaders/my-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false
            }
          },
          // CSS only
          /*{
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                }),
                // Adds PostCSS Normalize as the reset css with default options,
                // so that it honors browserslist config in package.json
                // which in turn let's users customize the target behavior as per their needs.
                require('postcss-normalize')
              ],
              sourceMap: false
            }
          }*/
        ],
        sideEffects: true
      //}]
    };

    const oneOfRule = webpackConfig.module.rules.find(rule => (
      typeof rule.oneOf !== 'undefined'
    ));

    if (oneOfRule) {
      oneOfRule.oneOf = [
        cssRule,
        ...oneOfRule.oneOf
      ];
    }
    else {
      webpackConfig.module.rules = [
        cssRule,
        ...webpackConfig.module.rules,
        //cssRule
      ];
    }

    if (pluginOptions.preText) {
      console.log(pluginOptions.preText);
    }

    //console.log(JSON.stringify(webpackConfig, null, 4));

    // Always return the config object.
    return webpackConfig;
  }
};
