import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import style from './Toolbar.module.css';

const toolbar = (props) => (
  <header className={style.toolbar}>
    <DrawerToggle clickHandler={props.drawerToggleClickHandler} />
    <div className={style.logo}>
      <Logo />
    </div>
    <nav className={style.desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
