import React from "react";

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
      <p>Continue to Checkout?</p>
    </React.Fragment>
  );
};

export default orderSummary;
