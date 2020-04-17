import React from 'react';

import Button from '../../../components/UI/Button/Button';

import './ContactDetails.css';

class ContactDetails extends React.Component{

  state ={
    name: 'Test',
    emailAddress: 'test@test.com',
    address: {
      street: 'No street 1',
      zipCode: '1234AB',
      country: 'Netherlands'
    }
  };

  render() {
    return (
      <div className="contactDetails">
        <h4>Enter your contact details</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="text" name="emailAddress" placeholder="Your email address" />
          <input type="text" name="street" placeholder="Your street" />
          <input type="text" name="zipCode" placeholder="Your zip code" />
          <input type="text" name="country" placeholder="Your country" />
          <Button type="success">ORDER</Button>
        </form>
      </div>
    )
  };

}

export default ContactDetails;
