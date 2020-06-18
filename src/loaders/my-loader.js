const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const styleLoader = require("style-loader");
const path = require('path');

module.exports.pitch = function (request) {
  const requestString = loaderUtils.stringifyRequest(this, "!!" + request);
  console.log("[my-loader]", requestString, loaderUtils.getOptions(this));

  return `if(module.hot) {
    var content = require(${requestString});

    if(typeof content === 'string') {
      content = [[module.id, content, '']];
    }

    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = content;
    
    document.getElementById('root').appendChild(style);

    console.log(content);
  }`
  //return `module.exports = {}`
  /*return `var content = require(${loaderUtils.stringifyRequest(this, `!!${request}`)});
  
  if (typeof content === 'string') {
    content = [[module.id, content, '']];
  }

  module.exports = content.locals || {};`;*/

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
