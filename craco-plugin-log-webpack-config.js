const cssRegex = /\.css$/;

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
    const cssRule = {
        test: cssRegex,
        use: [
          {
            loader: './src/loaders/my-loader'
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
