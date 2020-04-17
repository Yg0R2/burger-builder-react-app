import React from 'react';

import './Order.css';

const order = (props) => {
  let ingredientsArray = [];
  for (let ingredientName in props.ingredients) {
    ingredientsArray.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredients = ingredientsArray.map(ingredient => {
    return <span
      key={ingredient.name}
      style={{
        testTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px'
      }}
    >
      {ingredient.name} ({ingredient.amount})
    </span>
  });

  return (
    <div className="order">
      <p>Ingredients: {ingredients}</p>
      <p>Prise: <strong>{props.totalPrice.toFixed(2)} EUR</strong></p>
    </div>
  );
};

export default order;
