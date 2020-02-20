import React from 'react';
import Person from './Person/Person'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi there.</h1>
      <Person name="Szilvia" age="33" />
      <Person name="Tibor" age="35" />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi there.'));
}

export default App;
