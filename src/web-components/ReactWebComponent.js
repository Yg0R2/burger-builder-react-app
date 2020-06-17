import React from 'react';
import ReactDOM from 'react-dom';

import styles from './ReactWebComponent.css';

class ReactWebComponent extends React.Component {

  render() {
    const style = {
      backgroundColor: "aqua"
    }

    return (
      <div className="wrapper" style={style}>
        <div className={styles.welcome}>hello</div>
      </div>
    );
  }

}

const shadowRoot = document.getElementById('web-component').attachShadow({mode: 'open'});
// Create div element for react to render into
const reactRoot = document.createElement('div');
// Append react root to shadow root
shadowRoot.appendChild(reactRoot);

//ReactWebComponent.create(<Index />, 'auth-web-component', true)
ReactDOM.render(<ReactWebComponent />, shadowRoot)

//customElements.define('react-web-component', ReactWebComponent);
//ReactDOM.render(<ReactWebComponent />);