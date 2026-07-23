import React, { Component } from 'react';
import './Getuser.css';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      firstname: '',
      picture: '',
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const user = data.results[0];
        this.setState({
          title: user.name.title,
          firstname: user.name.first,
          picture: user.picture.large,
          loading: false
        });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { title, firstname, picture, loading, error } = this.state;

    if (loading) return <p>Loading user...</p>;
    if (error) return <p>Error fetching user: {error}</p>;

    return (
      <div className="user-card">
        <img src={picture} alt={`${title} ${firstname}`} />
        <h3>
          {title} {firstname}
        </h3>
      </div>
    );
  }
}

export default Getuser;
