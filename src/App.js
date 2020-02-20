import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: 'Szilvia',
        age: '33'
      },
      {
        name: 'Tibor',
        age: '35'
      }
    ]
  });

  const switchNameHandler = () => {
    // This will REPLACE the data in 'personsState.persons'
    setPersonsState({
      persons: [
        {
          name: 'Eva',
          age: '32'
        },
        {
          name: 'Peter',
          age: '36'
        }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi there.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Coding</Person>
    </div>
  );
};

export default App;
