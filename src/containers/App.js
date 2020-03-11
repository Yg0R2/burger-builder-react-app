import React, {Component} from 'react';

import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

import styles from './App.module.css';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

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

  // Update/initialize state based on external changes (e.g.: from form)
  // Do not cause side effects; do not send http request!
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps ', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

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
    console.log('[App.js] render');

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
          title={this.props.title}
          showPersons={this.state.showPersons}
          personCount={this.state.persons.length}
          clickHandler={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
  }

}

export default App;
