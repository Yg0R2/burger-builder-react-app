import React from "react";

import styles from './Button.module.css';

const button = (props) => (
  <button
    className={[styles.button, styles[props.type]].join(' ')}
    onClick={props.clickHandler}
  >
    {props.children}
  </button>
);

export default button;
