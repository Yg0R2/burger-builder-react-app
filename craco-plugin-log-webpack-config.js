module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
    if (pluginOptions.preText) {
      console.log(pluginOptions.preText);
    }

    webpackConfig.module.rules = [
      {
        test: /\.css$/,
        use: [
          {
            loader: "react-web-component-style-loader"
          }
        ]
      }
    ];

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
