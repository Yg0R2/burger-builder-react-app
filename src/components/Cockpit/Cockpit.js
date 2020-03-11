import React, {useEffect} from "react";

import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
  // Can be used as componentDidMount/componentDidUpdate.
  // Functional based Component doesn't have these functions.
  // Can be limited with the 2. parameter; will executed when that changed.
  // With an [] (empty array) it will behave like componentDidMount.
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Fake http request
    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect #2');

    return () => {
      console.log('[Cockpit.js] cleanup in useEffect #2');
    }
  });

  let buttonClasses = [];
  if (props.showPersons) {
    buttonClasses.push(styles.red);
  }

  let classes = [];
  if (props.personCount <= 2) {
    classes.push(styles.red);
  }
  if (props.personCount <= 1) {
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

// React can store a snapshot of this Component.
// Only when the input changes of this Component, allows to re-render.
export default React.memo(Cockpit);
