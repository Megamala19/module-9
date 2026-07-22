# myfirstreact

A basic Create React App project for the "Intro to React / SPA" hands-on lab.
`App.js` renders a heading: **"welcome to the first session of React"**.

## Prerequisites
- Node.js and npm installed (https://nodejs.org/en/download/)

## Setup

This repo already contains the generated CRA project files (equivalent to
running `npx create-react-app myfirstreact`). To run it:

```bash
npm install
npm start
```

Then open a browser at **http://localhost:3000** — you should see the
heading "welcome to the first session of React".

## Project structure

```
public/
  index.html      - HTML shell, has the <div id="root"> React mounts into
  manifest.json
src/
  index.js         - entry point, renders <App /> into #root
  index.css        - base page styling
  App.js           - the component edited for this lab (renders the heading)
package.json        - dependencies (react, react-dom, react-scripts) and scripts
```

## Notes
- `node_modules/` and `build/` are excluded via `.gitignore` — after cloning,
  run `npm install` to regenerate `node_modules` before `npm start`.
