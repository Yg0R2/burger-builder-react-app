const store = require('./store');

module.exports = (scripts = [], options = {}) => {
  console.log(scripts);
}

function addStyle(obj) {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = obj.css;

  store.styleElements.push(styleElement);
}
