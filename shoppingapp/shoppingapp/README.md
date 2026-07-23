# ShoppingApp — Props & Default Props Hands-On Lab

A React app demonstrating **props**, **default props**, and rendering with
`ReactDOM.render()` (via `createRoot().render()` for React 18).

## What this covers
- `Cart` class component with `itemname` and `price` props, and
  `static defaultProps` for fallback values
- `OnlineShopping` class component holding an array of 5 cart items in
  state, looping through them and rendering a `Cart` for each

## Project structure
```
shoppingapp/
├── public/
│   └── index.html
├── src/
│   ├── Cart.js
│   ├── OnlineShopping.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — you'll see 5 cart
items, each showing an item name and price.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: shoppingapp props lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
