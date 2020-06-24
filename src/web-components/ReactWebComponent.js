import React from 'react';
import ReactDOM from 'react-dom';

import exportedStyles from '../loaders/store';
import Asd from './Asd';
import styles from './ReactWebComponent.module.css';

const shadowRoot = document.getElementById('web-component').attachShadow({mode: 'open'});

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

function renderStyles() {
  Object.entries(exportedStyles.styleElements)
    .forEach(([index, style]) => shadowRoot.appendChild(style));
}

ReactDOM.render(<ReactWebComponent />, shadowRoot, () => renderStyles())
