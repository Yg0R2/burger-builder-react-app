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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Eva',
          age: '32'
        },
        {
          name: event.target.value,
          age: '36'
        }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi there.</h1>
        {/* Do not use this; Can cause performance issues. Use `.bind(...)` instead. */}
        <button
          style={style}
          onClick={() => this.switchNameHandler('Peter')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Gabor')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}
        >
          My Hobbies: Coding
        </Person>
      </div>
    );
  }

}

export default App;
