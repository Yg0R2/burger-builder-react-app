"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;

const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const styleLoader = require("style-loader");
const path = require('path');

function loader(content, map, meta) {
  console.log("hihi", content);

  return "";
}

/*module.exports.pitch*/ const a = function (request) {
  const requestString = loaderUtils.stringifyRequest(this, "!!" + request);
  console.log("[my-loader]", requestString, loaderUtils.getOptions(this));

  return `if(module.hot) {
    module.hot.accept(${requestString}, function() {
      var content = require(${requestString});

      if(typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      console.log("content", content);
    });

    var content = require(${requestString});

    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = content;
    
    document.getElementById('root').appendChild(style);
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
