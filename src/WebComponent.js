import React from 'react';
import ReactDOM from 'react-dom';

import styles from './WebContent.css';

class WebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    mountPoint.setAttribute('class', 'webContent')

    const shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(mountPoint);

    // Create some CSS to apply to the shadow dom
    let style = document.createElement('style');
    style.textContent =
      `.webContent {
        color: greenyellow;
        background-color: green;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      `;
    shadow.appendChild(style);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}

customElements.define('web-component', WebComponent);
