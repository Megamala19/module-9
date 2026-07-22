# BlogApp — React Component Life Cycle Hands-On Lab

A React app demonstrating **component life cycle hooks**: `componentDidMount()`
and `componentDidCatch()`.

## What this covers
- A `Post` model class (userId, id, title, body)
- A `Posts` class component that:
  - Initializes `posts` in state via the constructor
  - Implements `loadPosts()`, which fetches posts from
    `https://jsonplaceholder.typicode.com/posts` using the Fetch API and
    updates state
  - Implements `componentDidMount()` to call `loadPosts()` on mount
  - Implements `render()` to display each post's title and body
  - Implements `componentDidCatch()` to catch rendering errors and alert them

## Project structure
```
blogapp/
├── public/
│   └── index.html
├── src/
│   ├── Post.js
│   ├── Posts.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — posts fetched from the
JSONPlaceholder API will render as a list of titles and bodies.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: blogapp lifecycle hooks lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Note on this build
This lab's step-by-step screenshots (Post.js, loadPosts(), componentDidMount,
render, componentDidCatch) describe a standard fetch-on-mount pattern using
the JSONPlaceholder API — the code above implements that spec directly.
