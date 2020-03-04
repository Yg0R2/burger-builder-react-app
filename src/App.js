import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component{

  // Managed inside of a Component
  state = {
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
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DO NOT manipulate state this way -> this.state.persons[0].name = 'new name';
    this.setState({
      persons: [
        {
          name: 'Eva',
          age: '32'
        },
        {
          name: newName,
          age: '36'
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi there.</h1>
        {/* Do not use this; Can cause performance issues. Use `.bind(...)` instead. */}
        <button onClick={() => this.switchNameHandler('Peter')}>Switch Name</button>
        <Person name={this.state.persons[0].name} click={this.switchNameHandler.bind(this, 'Gabor')} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Coding</Person>
      </div>
    );
  }

}

export default App;
