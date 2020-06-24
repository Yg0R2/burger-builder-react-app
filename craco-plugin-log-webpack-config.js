const cssRegex = /\.css$/;

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

    const oneOfRules = webpackConfig.module.rules
      .find(rules => (typeof rules.oneOf !== 'undefined'));

    if (oneOfRules) {
      oneOfRules.oneOf = [
        cssRule,
        ...oneOfRules.oneOf
      ];
    }
    else {
      webpackConfig.module.rules = [
        cssRule,
        ...webpackConfig.module.rules,
      ];
    }

    //console.log(JSON.stringify(webpackConfig, null, 4));

    return webpackConfig;
  }
};
