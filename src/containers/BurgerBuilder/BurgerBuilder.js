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
    ingredients: null,
    purchasable: false,
    totalPrice: 4,
    savingOrder: false,
    error: null
  };

  componentDidMount() {
    axiosOrders.get('/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data})
      })
      .catch(error => this.setState({error: error}));
  }

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
    this.props.history.push('/checkout');

    const queryParams = [];
    for (let it in this.state.ingredients) {
      queryParams.push(encodeURIComponent(it) + '=' + encodeURIComponent(this.state.ingredients[it]))
    }
    queryParams.push('totalPrice=' + this.state.totalPrice);

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryParams.join('&')
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

    let orderSummary = <Spinner />;
    if (!this.state.savingOrder && this.state.ingredients) {
      orderSummary = <OrderSummary
        orderCancelHandler={this.purchaseCancelHandler}
        orderContinueHandler={this.purchaseContinueHandler}
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
      />;
    }

    let burger = this.state.error ? <p>Unable to load ingredients!</p> : <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
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

    return (
      <React.Fragment>
        <Modal display={this.state.displayOrder} modalCloseHandler={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }

}

export default withErrorHandler(BurgerBuilder, axiosOrders);
