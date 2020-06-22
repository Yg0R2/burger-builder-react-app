import React from 'react';
import ReactDOM from 'react-dom';

import exportedStyles from '../loaders/exports';
import Asd from './Asd';
import styles from './ReactWebComponent.module.css';
import Counter from "../containers/Counter/Counter";

class ReactWebComponent extends React.Component {

  render() {
    const style = {
      backgroundColor: "aqua"
    }

    return (
      <div className="wrapper" style={style}>
        <div className={styles.welcome}>hello</div>
        <Asd />
      </div>
    );
  }

}

const shadowRoot = document.getElementById('web-component').attachShadow({mode: 'open'});
// Create div element for react to render into
const reactRoot = document.createElement('div');
// Append react root to shadow root
shadowRoot.appendChild(reactRoot);

ReactDOM.render(<ReactWebComponent />, shadowRoot, () => asd())

function asd() {
  const styleElement = document.createElement('style')
  Object.entries(exportedStyles.styleElements)
    .map(value => value[1])
    .forEach(style => document.querySelector('react-web-component').shadowRoot.appendChild(style));
  //styleElement.innerHTML = exportedStyles.styleElements;
  //shadowRoot.appendChild(styleElement);

  //document.querySelector('react-web-component').shadowRoot.appendChild(styleElement);
}