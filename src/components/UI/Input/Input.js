import React from 'react';

import styles from './Input.module.css';

const input = (props) => {

  const inputClasses = [styles.inputElement];
  let validationErrorMessage = null;

  if (!props.isValid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.invalid);

    validationErrorMessage = <p className={styles.validationError}>Please enter valid value!</p>;
  }

  let inputElement;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={inputClasses.join(' ')}
        onChange={props.changeHandler}
        {...props.elementProps}
        value={props.value}
      />;
      break;
    case ('select'):
      inputElement = <select
        className={inputClasses.join(' ')}
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
        className={inputClasses.join(' ')}
        onChange={props.changeHandler}
        {...props.elementProps}
        value={props.value}
      />;
      break;
    default:
      inputElement = <input
        className={inputClasses.join(' ')}
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
      {validationErrorMessage}
      {inputElement}
    </div>
  );

};

export default input;
