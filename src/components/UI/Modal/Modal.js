import React from "react";

import Backdrop from '../Backdrop/Backdrop';

import styles from './Modal.module.css';

class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (nextProps.display !== this.props.display) || (nextProps.children !== this.props.children);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Modal] componentDidUpdate');
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop display={this.props.display} clickHandler={this.props.modalCloseHandler} />
        <div
          className={styles.modal}
          style={{
            transform: this.props.display ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.display ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
