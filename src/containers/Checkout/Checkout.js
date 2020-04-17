import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {

  state = {
    ingredients: {}
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);

    const ingredients = {};
    for (let queryParam of query.entries()) {
      ingredients[queryParam[0]] = +queryParam[1];
    }

    this.setState({ingredients: ingredients});
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/content-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelHandler={this.checkoutCancelHandler}
          checkoutContinueHandler={this.checkoutContinueHandler}
        />
      </div>
    );
  }

}

export default Checkout;
