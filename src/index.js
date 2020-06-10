import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import App from './App';

import counterReducer from './store/reducers/counterReducer';
import registerServiceWorker from './registerServiceWorker';
import resultReducer from './store/reducers/resultReducer';

import './index.css';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  resultReducer: resultReducer
})

const app = (
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
