"use strict";

const loaderUtils = require('loader-utils');
const path = require('path');

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  return `
var api = require(${loaderUtils.stringifyRequest(this, `!${path.join(__dirname, 'addStyles.js')}`)});
var content = require(${loaderUtils.stringifyRequest(this, `!!${remainingRequest}`)});
if (typeof content === 'string') {
  content = [[module.id, content, '']];
}

api(content, {});

module.exports = content.locals || {};`;
}
