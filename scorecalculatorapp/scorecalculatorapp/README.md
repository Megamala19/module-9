# Score Calculator App — React Function Components Hands-On Lab

A React app for a **Student Management Portal** demonstrating **function
components**, **props**, and **CSS styling**. It defines a function
component named `CalculateScore` that accepts `name`, `school`, `total`, and
`goal` as props, calculates the average score, and displays it in a styled
card.

## What this covers
- Creating a function component
- Passing and using props
- Applying custom CSS styles to a component
- Rendering the component from `App.js`

## Project structure
```
scorecalculatorapp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   └── CalculateScore.js
│   ├── Stylesheets/
│   │   └── mystyle.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — you'll see a styled
score card showing the student's name, school, total, goal, and calculated
average score.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: scorecalculatorapp function component lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
