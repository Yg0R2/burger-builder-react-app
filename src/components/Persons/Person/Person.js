import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AuthContext from "../../../context/auth-context";

import withClass from "../../../hoc/withClass";

import styles from './Person.module.css';

class Person extends Component {

  // Static means, can be accessed from outside.
  // Because of this, 'this.context' become available inside of the class.
  static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.selectedElementRef = React.createRef();
  }

  componentDidMount() {
    //this.selectedElement.focus();
    this.selectedElementRef.current.focus();

    console.log(this.context);
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      <React.Fragment>
        <p>
          {this.context.isAuthenticated ? "Authenticated!" : "Please log in"}
        </p>
        <p onClick={this.props.clickHandler}>I am {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          // Old way of creating ref
          //ref={(element) => {this.selectedElement = element}}
          ref={this.selectedElementRef}
          type="text"
          onChange={this.props.changeHandler}
          value={this.props.name}
        />
      </React.Fragment>
    )
  }

}

Person.propTypes = {
  changeHandler: PropTypes.func,
  clickHandler: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string
};

export default withClass(Person, styles.person);
