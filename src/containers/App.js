import React, {Component} from 'react';

import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

import styles from './App.module.css';

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
      },
      {
        id: 3,
        name: 'Peter',
        age: '31'
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
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clickHandler={this.deletePersonHandler}
        changeHandler={this.nameChangeHandler}
      />;
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clickHandler={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }

}

export default App;
