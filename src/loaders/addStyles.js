const exportedStyles = require('./exports');

module.exports = (styles = [], options = {}) => {
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];

    const obj = {
      css: style[1],
      media: style[2],
      sourceMap: style[3]
    };

    addStyle(obj, options);
  }
}

function addStyle(obj) {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = obj.css;

  exportedStyles.styleElements.push(styleElement);
}
