import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import styles from './Burger.module.css';

const burger = (props) => {

  let ingredientsArray = Object.keys(props.ingredients)
    .map(type => {
      return [...Array(props.ingredients[type])]
        .map((_, index) => {
          return <BurgerIngredient key={type + index} type={type} />;
        })
    })
    .reduce((previous, current) => {
      return previous.concat(current);
    }, []);

  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please start add ingredients!</p>;
  }

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
