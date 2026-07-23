# gitclientapp

React Hands-On Lab: Isolation Testing & Mocking with Jest.

- `GitClient.js` — a class with `getRepositories(username)` that calls
  `https://api.github.com/users/<username>/repos` via axios and resolves
  to an array of repository names.
- `App.js` — uses `GitClient` to fetch and display repos for `techiesyed`.
- `GitClient.test.js` — `jest.mock('axios')` mocks the HTTP call so the
  test exercises `GitClient` in isolation, without hitting the real
  GitHub API.

## Run it

```bash
npm install
npm start
```

## Test it

```bash
npm test
```
