import React from 'react';
import ReactDOM from 'react-dom';

import './WebContent.css';

//Declarative WebComponent implementation
class WebComponent extends HTMLElement {

  constructor() {
    super();

    this.state = {
      search: null,
    }

    this.attachShadow({mode: 'open'});
  }

  // Imperative implementation
  setSearch(newValue) {
    this.state.search = newValue;

    this.render();
  }

  static get observedAttributes() {
    return ['search'];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    this.state.search = newValue;

    this.render();
  }

  connectedCallback() {
    this.state.search = this.getAttribute('search');

    //this.render();
  }

  render() {
    this.shadowRoot.innerHTML = null;

    const mountPoint = document.createElement('div');
    mountPoint.setAttribute('class', 'webContent')

    this.shadowRoot.appendChild(mountPoint);

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
    this.shadowRoot.appendChild(style);

    let component;
    if (this.state.search) {
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(this.state.search);

      component = <a href={url}>{this.state.search}</a>
    }
    else {
      component = <div>Search field is empty</div>
    }

    ReactDOM.render(component, mountPoint);
  }

}

customElements.define('web-component', WebComponent);
