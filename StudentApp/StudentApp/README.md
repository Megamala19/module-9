# StudentApp — React Class Components Hands-On Lab

A React app for a **Student Management Portal** demonstrating **class
components**. It defines three components — `Home`, `About`, and `Contact` —
each rendering a welcome message, and invokes all three from `App.js`.

## What this covers
- Creating a class component (`extends Component`, `render()`)
- Creating multiple components
- Rendering components together in `App.js`

## Project structure
```
StudentApp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
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
welcome messages rendered on the page.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: StudentApp class components lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
