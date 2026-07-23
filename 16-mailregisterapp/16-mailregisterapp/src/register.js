import React, { Component } from 'react';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {
        name: '',
        email: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Validates a single field and returns an error message (empty string = valid)
  validateField(name, value) {
    switch (name) {
      case 'name':
        return value.trim().length >= 5
          ? ''
          : 'Name must be at least 5 characters long.';
      case 'email':
        // must contain @ and .
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Email must contain a valid @ and . (e.g. name@example.com).';
      case 'password':
        return value.length >= 8
          ? ''
          : 'Password must be at least 8 characters long.';
      default:
        return '';
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const errorMessage = this.validateField(name, value);

    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: errorMessage
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state;

    const errors = {
      name: this.validateField('name', name),
      email: this.validateField('email', email),
      password: this.validateField('password', password)
    };

    const hasErrors = Object.values(errors).some((msg) => msg !== '');

    this.setState({ errors, submitted: !hasErrors });

    if (!hasErrors) {
      // eslint-disable-next-line no-console
      console.log('Form submitted successfully:', { name, email, password });
    }
  }

  render() {
    const { name, email, password, errors, submitted } = this.state;

    return (
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <button type="submit">Register</button>
        </form>

        {submitted && (
          <p className="success">Registration successful! Welcome, {name}.</p>
        )}
      </div>
    );
  }
}

export default Register;
