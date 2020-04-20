import React from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';

import axiosOrders from '../../../axios-orders';

import './ContactDetails.css';

class ContactDetails extends React.Component{

  state = {
    name: 'Test',
    emailAddress: 'test@test.com',
    address: {
      street: 'No street 1',
      zipCode: '1234AB',
      country: 'Netherlands'
    },
    savingOrder: false
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({savingOrder: true});

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: {
        name: 'Test',
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
        this.setState({savingOrder: false});

        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({savingOrder: false});
      });
  };

  render() {
    const form = this.state.savingOrder
      ? <Spinner />
      : (
        <form>
          <Input name="name" placeholder="Your name" />
          <Input name="emailAddress" placeholder="Your email address" />
          <Input name="street" placeholder="Your street" />
          <Input name="zipCode" placeholder="Your zip code" />
          <Input name="country" placeholder="Your country" />
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
