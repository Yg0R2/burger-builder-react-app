import React from 'react';

import styles from './Person.module.css';

const Person = (props) => {

  console.log('[Person.js] rendering...');

  return (
    <div className={styles.person}>
      <p onClick={props.clickHandler}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeHandler} value={props.name} />
    </div>
  )

};

export default Person;
