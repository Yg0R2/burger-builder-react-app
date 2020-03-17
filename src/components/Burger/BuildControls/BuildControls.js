import React from "react";

import BuildControl from './BuildControl/BuildControl';

import styles from './BuildControls.module.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className={styles.buildControls}>
    <p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        addIngredientHandler={() => props.addIngredientHandler(control.type)}
        removeIngredientHandler={() => props.removeIngredientHandler(control.type)}
        disabled={props.disabledInfo[control.type]}
      />
    ))}
  </div>
);

export default buildControls;