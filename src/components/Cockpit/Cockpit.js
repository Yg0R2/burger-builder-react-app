import React from "react";

import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
  let buttonClasses = [];
  if (props.showPersons) {
    buttonClasses.push(styles.red);
  }

  let classes = [];
  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.cockpit}>
      <h1>This is {props.title} application.</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        className={buttonClasses.join(' ')}
        onClick={props.clickHandler}
      >
        Toggle People List
      </button>
    </div>
  );
};

export default Cockpit;
