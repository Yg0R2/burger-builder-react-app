import React from 'react';

import Order from '../../components/Order/Order';

import axiosOrders from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {

  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axiosOrders.get('/orders.json')
      .then(result => {
        const fetchedOrder = [];
        for (let key in result.data) {
          fetchedOrder.push({
            ...result.data[key],
            id: key
          });
        }

        this.setState({loading: false, orders: fetchedOrder});
      })
      .catch(error => {
        this.setState({loading: false});
      })
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            totalPrice={order.totalPrice}
          />
        ))}
      </div>
    );
  }

}

export default withErrorHandler(Orders, axiosOrders);
