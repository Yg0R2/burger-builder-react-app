const cssRegex = /\.css$/;
const scriptRegex = /\.(js|jsx)$/;

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
    const cssRule = {
      test: cssRegex,
      use: [
        {
          loader: './src/loaders/my-style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              auto: true
            },
            sourceMap: false
          }
        },
      ],
      sideEffects: true
    };

    const scriptRule = {
      test: scriptRegex,
      use: [
        {
          loader: './src/loaders/my-script-loader'
        }
      ]
    };

    const oneOfRules = webpackConfig.module.rules
      .find(rules => (typeof rules.oneOf !== 'undefined'));

    if (oneOfRules) {
      oneOfRules.oneOf = [
        cssRule,
        //scriptRule,
        ...oneOfRules.oneOf
      ];
    }
    else {
      webpackConfig.module.rules = [
        cssRule,
        //scriptRule,
        ...webpackConfig.module.rules,
      ];
    }

    //console.log(JSON.stringify(webpackConfig, null, 4));

    return webpackConfig;
  }
};
