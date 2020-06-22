module.exports = (list = [], options = {}) => {
  //console.log("here", list)
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

  /*Object.entries(options.attributes || {})
    .map(([name, value]) => style.setAttribute(name, value));*/


  getTarget().appendChild(style);
}

function getTarget() {
  const root = document.querySelector('react-web-component');

  return root;
}