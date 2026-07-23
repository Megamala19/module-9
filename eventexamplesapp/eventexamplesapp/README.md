# EventExamplesApp — React Events Hands-On Lab

A React app demonstrating **event handling**, the `this` keyword, and
**synthetic events**.

## What this covers
- **`Counter`** component:
  - **Increment** button invokes two methods on click: incrementing the
    counter and displaying a static "Hello" message
  - **Decrement** button decreases the counter
  - **Say Welcome** button invokes a function that takes `"welcome"` as an
    argument
  - **OnPress** button invokes a synthetic event handler that displays
    "I was clicked"
- **`CurrencyConvertor`** component:
  - Converts an entered amount in Indian Rupees to Euros
  - `handleSubmit` handles the form's click/submit event and performs the
    conversion

## Project structure
```
eventexamplesapp/
├── public/
│   └── index.html
├── src/
│   ├── Counter.js
│   ├── CurrencyConvertor.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — try the Increment,
Decrement, Say Welcome, and OnPress buttons, then enter an amount in the
currency converter and click Convert.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: eventexamplesapp events lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
