import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import styles from './Burger.module.css'

const burger = (props) => {

  const ingredientsArray = Object.keys(props.ingredients)
    .map(type => {
      return [...Array(props.ingredients[type])]
        .map((_, index) => {
          return <BurgerIngredient key={type + index} type={type} />;
        })
    });

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
