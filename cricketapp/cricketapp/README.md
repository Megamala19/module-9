# CricketApp — ES6 Features Hands-On Lab

A React app demonstrating ES6 features: `map()`, arrow functions,
destructuring, and array merging (spread operator).

## What this covers
- **`ListofPlayers`** component:
  - An array of 11 players (name + score) rendered using `map()`
  - Players with a score below 70 filtered using an arrow function
- **`IndianPlayers`** component:
  - Odd-team and even-team players displayed using **destructuring**
  - Two arrays, `T20players` and `RanjiTrophyPlayers`, merged using the ES6
    spread operator and displayed together
- **`App.js`** conditionally renders `ListofPlayers` or `IndianPlayers`
  based on a simple `flag` variable (`if/else` via ternary)

## Project structure
```
cricketapp/
├── public/
│   └── index.html
├── src/
│   ├── ListofPlayers.js
│   ├── IndianPlayers.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). By default `flag =
true` in `App.js`, showing `ListofPlayers`. Change it to `false` to see
`IndianPlayers` instead.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: cricketapp ES6 features lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
