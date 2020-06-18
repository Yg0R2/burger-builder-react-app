const cssRegex = /\.css$/;

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {

    const lessRules = {
      //oneOf: [{
        test: cssRegex,
        use: [
          {
            loader: './src/loaders/my-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      //}]
    };

    const oneOfRule = webpackConfig.module.rules.find(rule => (
      typeof rule.oneOf !== 'undefined'
    ));

    if (oneOfRule) {
      oneOfRule.oneOf = [
        lessRules,
        ...oneOfRule.oneOf
      ];
    }
    else {
      webpackConfig.module.rules = [
        lessRules,
        ...webpackConfig.module.rules,
        //lessRules
      ];
    }

    if (pluginOptions.preText) {
      console.log(pluginOptions.preText);
    }

    console.log(JSON.stringify(webpackConfig, null, 4));

    // Always return the config object.
    return webpackConfig;
  }
};
