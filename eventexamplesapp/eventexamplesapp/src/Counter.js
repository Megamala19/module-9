import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  // Increment button invokes two methods: incrementing the count and saying hello.
  incrementCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  sayHello() {
    this.setState({ message: 'Hello! This is a static message.' });
  }

  handleIncrement() {
    this.incrementCount();
    this.sayHello();
  }

  handleDecrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  // Function that takes an argument, invoked from the "Say Welcome" button.
  sayWelcome(text) {
    this.setState({ message: `${text}! Glad to have you here.` });
  }

  // Synthetic event handler.
  handlePress(event) {
    this.setState({ message: 'I was clicked' });
  }

  render() {
    return (
      <div>
        <h1>Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>

        <div>
          <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
        </div>

        <div>
          <button onClick={this.handlePress}>OnPress</button>
        </div>

        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Counter;
