import React, { Component } from 'react';

const INR_TO_EUR_RATE = 0.011;

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const rupeeValue = parseFloat(this.state.rupees) || 0;
    const euroValue = (rupeeValue * INR_TO_EUR_RATE).toFixed(2);
    this.setState({ euros: euroValue });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount in Rupees (₹):{' '}
            <input type="number" value={this.state.rupees} onChange={this.handleChange} />
          </label>
          <button type="submit">Convert</button>
        </form>
        {this.state.euros !== null && (
          <p>{this.state.rupees} INR = {this.state.euros} EUR</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
