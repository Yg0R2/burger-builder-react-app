import React from 'react';

import styles from './Input.module.css';

const input = (props) => {

  let inputElement = null;
  switch (props.input_type) {
    case ('textarea'):
      inputElement = <textarea {...props} />;
      break;
    case ('input'):
      inputElement = <input className={styles.inputElement} {...props} />;
      break;
    default:
      inputElement = <input className={styles.inputElement} type="text" {...props} />;
  }

  return (
    <div className={styles.input}>
      <label className={styles.label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
