import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  // Element variable that conditionally holds either the User or Guest page.
  render() {
    let content;
    if (this.state.isLoggedIn) {
      content = <UserPage />;
    } else {
      content = <GuestPage />;
    }

    return (
      <div>
        <h1>Ticket Booking App</h1>
        {this.state.isLoggedIn ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}
        {content}
      </div>
    );
  }
}

export default App;
