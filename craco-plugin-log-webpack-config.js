module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {

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

    //console.log(JSON.stringify(webpackConfig, null, 4));

    // Always return the config object.
    return webpackConfig;
  }
};
