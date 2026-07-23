import React, { Component } from 'react';

class Cart extends Component {
  static defaultProps = {
    itemname: 'Unnamed Item',
    price: 0
  };

  render() {
    return (
      <div>
        <span>Item: {this.props.itemname}</span>{' '}
        <span>Price: ${this.props.price}</span>
      </div>
    );
  }
}

export default Cart;
