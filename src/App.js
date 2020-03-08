import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  // Managed inside of a Component
  state = {
    persons: [
      {
        id: 1,
        name: 'Szilvia',
        age: '33'
      },
      {
        id: 2,
        name: 'Tibor',
        age: '35'
      }
    ],
    showPersons: false
  };

  deletePersonHandler = (index) => {
    // DO NOT USE THIS!! Can cause unpredicted behaviours.
    //const persons = this.state.persons;

    // Create a copy
    //const persons = this.state.persons.slice();
    // or ES6 way
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // DO NOT USE THIS.
    //const person = this.state.persons[personIndex];
    // Copy what needed to update
    //const person = Object.assign({}, this.state.persons[personIndex]);
    // or
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                change={(event) => this.nameChangeHandler(event, person.id)}
              >
                My Hobbies: Coding
              </Person>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi there.</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Toggle People List
        </button>
        {persons}
      </div>
    );
  }

}

export default App;
