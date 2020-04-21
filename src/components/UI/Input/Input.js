import React from 'react';

import styles from './Input.module.css';

const input = (props) => {

  let inputElement;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={styles.inputElement}
        onChange={props.changeHandler}
        {...props.elementProps}
        value={props.value}
      />;
      break;
    case ('select'):
      inputElement = <select
        className={styles.inputElement}
        onChange={props.changeHandler}
        value={props.value}
      >
        {props.elementProps.options
          .map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))
        }
      </select>;
    break;
    case ('textarea'):
      inputElement = <textarea
        className={styles.inputElement}
        onChange={props.changeHandler}
        {...props.elementProps}
        value={props.value}
      />;
      break;
    default:
      inputElement = <input
        className={styles.inputElement}
        onChange={props.changeHandler}
        type="text"
        {...props.elementProps}
        value={props.value}
      />;
      break;
  }

  return (
    <div className={styles.input}>
      <label className={styles.label}>{props.label}</label>
      {inputElement}
    </div>
  );

};

export default input;
