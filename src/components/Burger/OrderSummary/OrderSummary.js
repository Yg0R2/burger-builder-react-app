import React from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[OrderSummary] componentDidUpdate');
  }

  render() {
    const ingredientSummary = Object.entries(this.props.ingredients)
      .map(([type, amount]) => {
        return <li key={type}>
        <span style={{textTransform: 'capitalize'}}>
          {type}
        </span>
          : {amount}
        </li>
      });

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>TotalPrice</strong>: {this.props.totalPrice.toFixed(2)}</p>
        <p>Continue to Checkout?</p>
        <Button type="success" clickHandler={this.props.orderContinueHandler}>CONTINUE</Button>
        <Button type="danger" clickHandler={this.props.orderCancelHandler}>CANCEL</Button>
      </React.Fragment>
    );
  }

}

export default OrderSummary;
