import React, { Component } from 'react';

import Exercise1 from './Exercise-1/Exercise1'
import Exercise2 from './Exercise-2/Exercise2'

import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Exercise1 />
        <Exercise2 />
      </div>
    );
  }
}

export default App;
