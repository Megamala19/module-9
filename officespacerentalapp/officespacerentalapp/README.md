# OfficeSpaceRentalApp — JSX & Inline CSS Hands-On Lab

A React app demonstrating **JSX syntax** and **inline CSS** styling.

## What this covers
- A JSX element for the page heading
- An `<img>` element with a `src` attribute displaying an office space
  image, styled using an inline CSS style object
- An `office` object with `Name`, `Rent`, and `Address`, rendered via JSX
  expressions
- A list of office objects looped through with `.map()` to render more data
- Conditional inline-CSS coloring: rent displayed in **red** when below
  60000, and **green** when 60000 or above

## Project structure
```
officespacerentalapp/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — you'll see a featured
office and a list of offices, each with rent colored red or green depending
on the amount.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: officespacerentalapp JSX lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
