import axios from 'axios';

class GitClient {
  // Fetch repository names for a given GitHub username.
  getRepositories(username) {
    return axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.data.map((repo) => repo.name));
  }
}

export default GitClient;
