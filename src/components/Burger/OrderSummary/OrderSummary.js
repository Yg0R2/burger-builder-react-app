import React from "react";

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.entries(props.ingredients)
    .map(([type, amount]) => {
      return <li key={type}>
        <span style={{textTransform: 'capitalize'}}>
          {type}
        </span>
        : {amount}
      </li>
    });
  /*Object.keys(props.ingredients)
    .map(ingredientKey => {
      return <li><span>{ingredientKey}</span>: {props.ingredients[ingredientKey]}</li>
    });*/

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>TotalPrice</strong>: {props.totalPrice.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button type="success" clickHandler={props.orderContinueHandler}>CONTINUE</Button>
      <Button type="danger" clickHandler={props.orderCancelHandler}>CANCEL</Button>
    </React.Fragment>
  );
};

export default orderSummary;
