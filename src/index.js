import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';

import reducer from './store/reducer';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const app = (
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
