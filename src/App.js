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
