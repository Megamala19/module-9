import React, { Component } from 'react';
import ThemeContext from './ThemeContext';
import EmployeeList from './EmployeeList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }));
  }

  render() {
    return (
      // ThemeContext.Provider wraps the entire JSX of the App component,
      // sourcing its value from component state.
      <ThemeContext.Provider value={this.state.theme}>
        <div className={`app ${this.state.theme}`}>
          <h1>Employee Management</h1>
          <button onClick={this.toggleTheme}>
            Switch to {this.state.theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
          <EmployeeList />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
