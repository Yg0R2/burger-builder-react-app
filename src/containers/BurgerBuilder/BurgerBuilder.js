import React from "react";

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import axiosOrders from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5
};

class BurgerBuilder extends React.Component {

  state = {
    displayOrder: false,
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    purchasable: false,
    totalPrice: 4,
    savingOrder: false
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

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseStartHandler = () => {
    this.setState({displayOrder: true});
  };

  purchaseCancelHandler = () => {
    this.setState({displayOrder: false});
  };

  purchaseContinueHandler = () => {
    this.setState({savingOrder: true});

    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        name: 'Tibor',
        emailAddress: 'test@test.com',
        address: {
          street: 'No street 1',
          zipCode: '1234AB',
          country: 'Netherlands'
        }
      },
      deliveryMethod: 'fastest'
    };

    axiosOrders.post('/orders.json', order)
      .then(response => {
        this.setState({displayOrder: false, savingOrder: false})
      })
      .catch(error => {
        this.setState({displayOrder: false, savingOrder: false})
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

    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(type => {
        return ingredients[type];
      })
      .reduce((previous, current) => {
        return previous + current;
      }, 0);

    this.setState({purchasable: sum > 0});
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let type in disabledInfo) {
      disabledInfo[type] = disabledInfo[type] <= 0;
    }

    let orderSummary;
    if (this.state.savingOrder) {
      orderSummary = <Spinner />;
    }
    else {
      orderSummary = <OrderSummary
        orderCancelHandler={this.purchaseCancelHandler}
        orderContinueHandler={this.purchaseContinueHandler}
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
      />;
    }

    return (
      <React.Fragment>
        <Modal display={this.state.displayOrder} modalCloseHandler={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          openOrderHandler={this.purchaseStartHandler}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          totalPrice={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }

}

export default withErrorHandler(BurgerBuilder, axiosOrders);
