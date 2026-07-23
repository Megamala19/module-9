# TicketRaisingApp — React Forms Hands-On Lab

A React app demonstrating **forms** and **controlled components**.

## What this covers
- `ComplaintRegister` component:
  - A **textbox** (controlled `<input>`) for the employee name
  - A **textarea** (controlled `<textarea>`) for the complaint text
  - Both inputs' values are held in component state and updated via
    `onChange` handlers (controlled components)
  - `handleSubmit` handles the form/button submit event: generates a
    reference number and displays it (along with the employee name) in an
    `alert()` box for follow-up
  - Form resets after submission

## Project structure
```
ticketraisingapp/
├── public/
│   └── index.html
├── src/
│   ├── ComplaintRegister.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — fill in the employee
name and complaint, then click **Submit Complaint** to see a reference
number generated in an alert box.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: ticketraisingapp forms lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
