const exportedStyles = require('./exports');

module.exports = (list = [], options = {}) => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
    };

    addStyle(obj, options);
  }
}

function addStyle(obj, options) {
  const style = document.createElement('style');
  style.innerHTML = obj.css;

  exportedStyles.styleElements.push(style);
}
