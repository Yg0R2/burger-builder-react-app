import React from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactDetails from './ContactData/ContactDetails';

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
    this.props.history.replace('/checkout/contact-details');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelHandler={this.checkoutCancelHandler}
          checkoutContinueHandler={this.checkoutContinueHandler}
        />
        <Route path={this.props.match.path + '/contact-details'} component={ContactDetails} />
      </div>
    );
  }

}

export default Checkout;
