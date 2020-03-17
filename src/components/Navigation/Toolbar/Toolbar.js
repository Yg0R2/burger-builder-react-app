import React from "react";

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import style from './Toolbar.module.css';

const toolbar = (props) => (
  <header className={style.toolbar}>
    <div>MENU</div>
    <div className={style.logo}>
      <Logo />
    </div>
    <nav className={style.desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
