const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const styleLoader = require("style-loader");

module.exports.pitch = function (request) {
  console.log("[my-loader]", loaderUtils.stringifyRequest(this, "!!" + request), loaderUtils.getOptions(this));

  return request;

  /*let content = JSON.stringify(require(request));

  if(typeof content === 'string') {
    content = [[module.id, content, '']];
  }

  /*const options = {};
  let update = require("./addStyles.js")(content, options);

  if(content.locals) {
    module.exports = content.locals;
  }

  if(module.hot) {
    if(!content.locals) {
      module.hot.accept(loaderUtils.stringifyRequest(this, "!!" + request), function() {
        let newContent = require(loaderUtils.stringifyRequest(this, "!!" + request));
          if(typeof newContent === 'string') {
            newContent = [[module.id, newContent, '']];
          }

          update(newContent);
      });
    }

    module.hot.dispose(function() {
      update();
    });
  }*/
}
