import React, {Component} from 'react';

import withClass from "../../../hoc/withClass";

import styles from './Person.module.css';

class Person extends Component {

  render() {
    console.log('[Person.js] rendering...');

    return (
      <React.Fragment>
        <p onClick={this.props.clickHandler}>I am {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changeHandler} value={this.props.name}/>
      </React.Fragment>
    )
  }

}

export default withClass(Person, styles.person);
