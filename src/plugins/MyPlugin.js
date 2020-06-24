// If your plugin is direct dependent to the html webpack plugin:
const HtmlWebpackPlugin = require('html-webpack-plugin');
const store = require('../loaders/store');

class MyPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      console.log('The compiler is starting a new compilation...')

      // Static Plugin interface |compilation |HOOK NAME | register listener
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'MyPlugin', // <-- Set a meaningful name here for stacktraces
        (data, callback) => {
          // Manipulate the content
          data.html += 'The Magic Footer'
          // Tell webpack to move on
          callback(null, data)
        }
      )

      HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
        'MyPlugin',
        (data, callback) => {
          Object.entries(data.bodyTags)
            .map(([index, tag]) => {
              if (tag.tagName === 'script') {
                const scriptElement = document.createElement('script');
                scriptElement.setAttribute('src', tag.attributes.src)

                store.scriptElements.push(scriptElement);

                tag = null;
              }
            });

          callback(null, data);
        }
      )

    })
  }
}

module.exports = MyPlugin
