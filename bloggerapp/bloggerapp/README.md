# BloggerApp — Conditional Rendering (Multiple Techniques) Hands-On Lab

A React app with 3 components — `BookDetails`, `BlogDetails`, and
`CourseDetails` — each demonstrating a **different way of doing conditional
rendering** in React, plus list rendering with keys.

## What this covers
- **`BookDetails`** — `if/else` statement inside a helper method, list
  rendered via `map()` with a unique `key` prop
- **`BlogDetails`** — element variable holding conditionally-assigned JSX,
  plus an inline ternary operator
- **`CourseDetails`** — short-circuit `&&` operator for conditional
  display, and **preventing a component from rendering** by returning
  `null`

## Project structure
```
bloggerapp/
├── public/
│   └── index.html
├── src/
│   ├── BookDetails.js
│   ├── BlogDetails.js
│   ├── CourseDetails.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — you'll see all three
components, each showing a different conditional-rendering technique in
action.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: bloggerapp conditional rendering lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
