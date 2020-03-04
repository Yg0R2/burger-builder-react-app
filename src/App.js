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

  switchNameHandler = () => {
    // console.log('Was clicked');
    // DO NOT manipulate state this way -> this.state.persons[0].name = 'new name';
    this.setState({
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

  render() {
    return (
      <div className="App">
        <h1>Hi there.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Coding</Person>
      </div>
    );
  }

}

export default App;
