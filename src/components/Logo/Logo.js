import React from "react";

import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.logo}>
    <img src="/assets/images/burger-logo.png" alt="Burger Builder" />
  </div>
);

export default logo;
