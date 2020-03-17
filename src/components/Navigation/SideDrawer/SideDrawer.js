import React from "react";

import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {

  let classes = [styles.sideDrawer];
  if (props.display) {
    classes.push(styles.open)
  }
  else {
    classes.push(styles.close);
  }

  return (
    <React.Fragment>
      <Backdrop display={props.display} clickHandler={props.closeHandler} />
      <div className={classes.join(' ')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );

};

export default sideDrawer;
