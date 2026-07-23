# EmployeeApp — React Context API Hands-On Lab

A React app for Apps Centric Solutions demonstrating the **Context API**,
converting a light/dark theme setup from prop-drilling to `createContext()`
+ `useContext()`.

## ⚠️ Note on this build
The original lab says the starting application "can be downloaded from
below" — but no starter zip was actually included in the uploaded document
(only an embedded icon placeholder). This project is a **self-contained
implementation matching the lab's spec** (App → EmployeeList →
EmployeeCard, theme shared via context instead of props) rather than a
conversion of that missing starter app. If you have the original starter
zip, share it and I can redo this as a direct edit to that exact codebase.

## What this covers
- `ThemeContext.js` — `createContext('light')`, exported as default
- `App.js`:
  - Imports `ThemeContext`
  - Wraps its entire JSX in `ThemeContext.Provider`
  - Supplies the theme value from component state (toggle button switches
    between `light` and `dark`)
  - No longer passes `theme` as a prop to `EmployeeList`
- `EmployeeList.js` — no longer receives or passes down a `theme` prop
- `EmployeeCard.js`:
  - Imports `ThemeContext`
  - Reads the current theme via `useContext(ThemeContext)`
  - Uses it to set the button's className

## Project structure
```
employeeapp/
├── public/
│   └── index.html
├── src/
│   ├── ThemeContext.js
│   ├── employees.js
│   ├── EmployeeCard.js
│   ├── EmployeeList.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — click the theme
toggle button to switch all employee cards between light and dark styling,
all driven through context rather than props.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: employeeapp Context API lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
