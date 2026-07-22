# CohortDashboard — React CSS Modules Styling Hands-On Lab

A React app demonstrating **CSS Modules** and conditional styling, built for
a Cognizant Academy cohort dashboard.

## ⚠️ Note on this build
The original lab instructions say to "download and build the **attached**
react application" — but no starter app/zip was actually included in the
uploaded document (only an embedded icon placeholder). This project is a
**self-contained implementation matching the lab's spec** rather than a
modification of that missing starter app. If you have the original starter
zip, share it and I can redo this as an edit to that exact codebase instead.

## What this covers
- A CSS Module: `CohortDetails.module.css`
  - `.box` class: 300px width, `display: inline-block`, 10px margin,
    10px top/bottom padding, 20px left/right padding, 1px black border,
    10px border radius
  - Tag selector for `dt` elements: `font-weight: 500`
- `CohortDetails` component:
  - Imports the CSS Module
  - Applies the `box` class to the container `div`
  - Renders the cohort's `<h3>` title in **green** when status is
    `"ongoing"`, and **blue** otherwise

## Project structure
```
CohortDashboard/
├── public/
│   └── index.html
├── src/
│   ├── CohortDetails.js
│   ├── CohortDetails.module.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — you'll see cohort
cards, each styled via the CSS Module, with the title colored based on
cohort status.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: CohortDashboard CSS Modules lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
