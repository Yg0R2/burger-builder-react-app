const cssRegex = /\.css$/;

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {

    const lessRules = {
      //oneOf: [{
        test: cssRegex,
        use: [
          {
            loader: require.resolve('style-loader'),
            options: {
              insert: 'body'
            }
          },
          /*{
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },*/
          {
            loader: require.resolve('./src/loaders/my-loader'),
            options: {
              importLoaders: 1
            }
          },
          /*{
            loader: require.resolve('postcss-loader'),
            options: {
              ident: "postcss",
              sourceMap: false
            }
          }*/
        ]
      //}]
    };

    const oneOfRule = webpackConfig.module.rules.find(rule => (
      typeof rule.oneOf !== 'undefined'
    ));

    /*const appendTo = oneOfRule ? oneOfRule.oneOf : webpackConfig.module.rules;
    appendTo.push(lessRules);*/
    /*if (oneOfRule) {
      oneOfRule.oneOf = [
        lessRules,
        ...oneOfRule.oneOf
      ];
    }
    else {*/
      webpackConfig.module.rules = [
        lessRules,
        ...webpackConfig.module.rules
      ];
    /*}*/
    //console.log(appendTo);

    /*console.log("before")
    Object.entries(webpackConfig.module.rules)
      .filter(rule => rule[1].oneOf)
      .flatMap(rule => rule[1].oneOf)
      .map(rule => console.log(rule));*/

    /*const oneOf = Object.entries(webpackConfig.module.rules)
      .filter(rule => rule[1].oneOf)
      .flatMap(rule => rule[1].oneOf)
      .filter(rule => rule.test && rule.test.toString().includes(".css$"))
      .map(rule => console.log(rule));*/

    if (pluginOptions.preText) {
      console.log(pluginOptions.preText);
    }

    /*webpackConfig.module.rules = [
      ...webpackConfig.module.rules,
      {
        test: /\.css$/,
        use: [
          {
            loader: "./src/loaders/my-loader",
            options: {
              importLoaders: 4
            }
          }
        ]
      }
    ];*/

    /*console.log("after")
    Object.entries(webpackConfig.module.rules)
      .filter(rule => rule[1].oneOf)
      .flatMap(rule => rule[1].oneOf)
      .map(rule => console.log(rule));*/

    /*webpackConfig.module.rules = [
      ...webpackConfig.module.rules,
      {
        test: /\.css$/,
        use: [
          {
            loader: "react-web-component-style-loader"
          }
        ]
      }
    ];*/

    console.log(JSON.stringify(webpackConfig, null, 4));

    // Always return the config object.
    return webpackConfig;
  }
};
