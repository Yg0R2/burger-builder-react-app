import React from 'react';

import Button from '../../../components/UI/Button/Button';
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
          <input type="text" name="name" placeholder="Your name" />
          <input type="text" name="emailAddress" placeholder="Your email address" />
          <input type="text" name="street" placeholder="Your street" />
          <input type="text" name="zipCode" placeholder="Your zip code" />
          <input type="text" name="country" placeholder="Your country" />
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
