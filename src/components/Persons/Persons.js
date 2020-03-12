import React, {PureComponent} from 'react';

import Person from "./Person/Person";

// PureComponent implements Component with a complete props change validation, like now in shouldComponentUpdate.
class Persons extends PureComponent {

  // Used for cleaning.
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  // Can cancel the updating process.
  // Do not cause side effects; do not send http request!
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //
  //   // Not required to re-render Persons when it didn't change.
  //   // It does a shallow comparison; checks only the pointers
  //   return (nextProps.persons !== this.props.persons) ||
  //     (nextProps.changeHandler !== this.props.changeHandler) ||
  //     (nextProps.clickHandler !== this.props.clickHandler);
  // }

  render() {
    console.log('[Persons.js] rendering..');

    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        clickHandler={() => this.props.clickHandler(index)}
        name={person.name}
        age={person.age}
        changeHandler={(event) => this.props.changeHandler(event, person.id)}
        isAuthenticated={this.props.isAuthenticated}
      >
        My Hobbies: Coding
      </Person>
    });
  }

  // Use for last minute DOM operations (eg scroll user to the correct position)
  // Do not cause side effects; do not send http request!
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'snapshot data'};
  }

  // Can cause side effects. Can send http request.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot);
  }

}

export default Persons;
