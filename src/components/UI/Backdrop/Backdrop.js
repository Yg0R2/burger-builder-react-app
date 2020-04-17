import React from 'react';

import styles from './Backdrop.module.css';

const backdrop = (props) => (
  props.display ? <div className={styles.backdrop} onClick={props.clickHandler}></div> : null
);

export default backdrop;