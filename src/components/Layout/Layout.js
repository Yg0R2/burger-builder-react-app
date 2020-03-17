import React from "react";

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import styles from './Layout.module.css';

class Layout extends React.Component {

  state = {
    displaySideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({displaySideDrawer: false});
  };

  sideDrawerToggleHandler = () => {
    // Can cause unexpected error. Do not use it.
    // this.setState({displaySideDrawer: !this.state.displaySideDrawer});
    this.setState((prevState) => {
      return {displaySideDrawer: !prevState.displaySideDrawer};
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClickHandler={this.sideDrawerToggleHandler} />
        <SideDrawer display={this.state.displaySideDrawer} closeHandler={this.sideDrawerCloseHandler} />
        <main className={styles.content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }

}

export default Layout;