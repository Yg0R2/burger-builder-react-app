import React from 'react';

import styles from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={styles.buildControl}>
    <div className={styles.label}>{props.label}</div>
    <button className={styles.more} onClick={props.addIngredientHandler}>More</button>
    <button
      className={styles.less}
      onClick={props.removeIngredientHandler}
      disabled={props.disabled}
    >
      Less
    </button>
  </div>
);

export default buildControl;
