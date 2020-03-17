import React from "react";

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5
};

class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPrice: 4
  };

  addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = this.state.ingredients[type] + 1;

    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  removeIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] - 1;
    if (newCount < 0) {
      return;
    }

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;

    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let type in disabledInfo) {
      disabledInfo[type] = disabledInfo[type] <= 0;
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          totalPrice={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }

}

export default BurgerBuilder;
