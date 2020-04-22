import React from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';

import axiosOrders from '../../../axios-orders';

import './ContactDetails.css';

import orderForm from './orderForm';

class ContactDetails extends React.Component{

  state = {
    formIsValid: false,
    orderForm,
    savingOrder: false
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.isValid = this.inputValidation(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let formElement in updatedOrderForm) {
      formIsValid = formIsValid && updatedOrderForm[formElement].isValid;
    }

    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formIsValid
    });
  };

  inputValidation(value, rules) {
    let isValid = true;

    if (isValid && rules.required) {
      isValid = value.trim() !== '';
    }
    if (isValid && rules.minLength) {
      isValid = value.length >= rules.minLength;
    }
    if (isValid && rules.maxLength) {
      isValid = value.length <= rules.maxLength;
    }

    return isValid;
  }

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({savingOrder: true});

    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      contactDetails: formData
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
        <form onSubmit={this.orderHandler}>
          {orderFormElements
            .map(formElement => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                changeHandler={(event) => this.inputChangedHandler(event, formElement.id)}
                elementProps={formElement.config.elementProps}
                isValid={formElement.config.isValid}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                value={formElement.config.value}
              />
            ))
          }
          <Button
            type="success"
            clickHandler={this.orderHandler}
            disabled={!this.state.formIsValid}
          >
            ORDER
          </Button>
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
