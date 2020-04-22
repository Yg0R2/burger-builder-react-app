import React from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';

import axiosOrders from '../../../axios-orders';

import './ContactDetails.css';

import orderForm from './orderForm';

class ContactDetails extends React.Component{

  state = {
    orderForm,
    savingOrder: false
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({savingOrder: true});

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      deliveryMethod: 'fastest'
    };

    axiosOrders.post('/orders.json', order)
      .then(response => {
        this.setState({savingOrder: false});

        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({savingOrder: false});
      });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});
  };

  render() {
    const orderFormElements = [];
    for (let name in this.state.orderForm) {
      orderFormElements.push({
        id: name,
        config: this.state.orderForm[name]
      })
    }

    const form = this.state.savingOrder
      ? <Spinner />
      : (
        <form>
          {orderFormElements
            .map(formElement => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                changeHandler={(event) => this.inputChangedHandler(event, formElement.id)}
                elementProps={formElement.config.elementProps}
                value={formElement.config.value}
              />
            ))
          }
          <Button type="success" clickHandler={this.orderHandler}>ORDER</Button>
        </form>
      );

    return (
      <div className="contactDetails">
        <h4>Enter your contact details</h4>
        {form}
      </div>
    )
  };

}

export default ContactDetails;
