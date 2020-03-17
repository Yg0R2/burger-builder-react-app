import React from "react";

import Backdrop from '../Backdrop/Backdrop';

import styles from './Modal.module.css';

// vh = Viewport Height
const modal = (props) => (
  <React.Fragment>
    <Backdrop display={props.display} clickHandler={props.modalCloseHandler} />
    <div
      className={styles.modal}
      style={{
        transform: props.display ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.display ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
