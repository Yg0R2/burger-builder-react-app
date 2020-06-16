import React from 'react';
import ReactDOM from 'react-dom';

import styles from './WebContent.css';

class WebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');

    const shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}

customElements.define('web-component', WebComponent);
