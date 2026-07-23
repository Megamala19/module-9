import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { itemname: 'Laptop', price: 899.99 },
        { itemname: 'Wireless Mouse', price: 19.99 },
        { itemname: 'Mechanical Keyboard', price: 59.99 },
        { itemname: 'Monitor', price: 199.99 },
        { itemname: 'USB-C Hub', price: 29.99 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Online Shopping Cart</h1>
        {this.state.items.map((item, index) => (
          <Cart key={index} itemname={item.itemname} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
