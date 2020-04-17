import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={styles.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button type="success" clickHandler={props.checkoutContinueHandler}>Continue</Button>
      <Button type="danger" clickHandler={props.checkoutCancelHandler}>Cancel</Button>
    </div>
  );
};

export default checkoutSummary;
