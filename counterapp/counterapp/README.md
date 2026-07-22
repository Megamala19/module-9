# CounterApp — React State Hands-On Lab

A React app demonstrating the **state object** in a class component.

## What this covers
- `CountPeople` class component with `entrycount` and `exitcount`
  initialized in the constructor's state
- `updateEntry()` method that increments `entrycount`
- `updateExit()` method that increments `exitcount`
- Two buttons — **Login** (increments entry count) and **Exit** (increments
  exit count) — wired to those methods via `onClick`

## Project structure
```
counterapp/
├── public/
│   └── index.html
├── src/
│   ├── CountPeople.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — click **Login** to
increment the entry count, and **Exit** to increment the exit count.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: counterapp state lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
