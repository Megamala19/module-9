import React, { Component } from 'react';
import GitClient from './GitClient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'techiesyed',
      repositories: [],
      loading: true,
      error: null
    };
    this.gitClient = new GitClient();
  }

  componentDidMount() {
    this.gitClient
      .getRepositories(this.state.username)
      .then((repositories) => this.setState({ repositories, loading: false }))
      .catch((error) =>
        this.setState({ error: error.message, loading: false })
      );
  }

  render() {
    const { username, repositories, loading, error } = this.state;

    if (loading) return <p>Loading repositories...</p>;
    if (error) return <p>Error fetching repositories: {error}</p>;

    return (
      <div className="App">
        <h2>Repositories for {username}</h2>
        <ul>
          {repositories.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
