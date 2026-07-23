# TicketBookingApp — Conditional Rendering Hands-On Lab

A React app demonstrating **conditional rendering**, **element variables**,
and preventing components from rendering.

## What this covers
- **`GuestPage`** component: displays flight details only, with a prompt to
  log in before booking
- **`UserPage`** component: displays flight details with a **Book** button
  for each flight, shown only to logged-in users
- **`App.js`**:
  - Holds `isLoggedIn` in state
  - Uses an element variable (`content`) that conditionally holds either
    `<UserPage />` or `<GuestPage />`
  - **Login** button sets `isLoggedIn` to `true`, showing the User page
  - **Logout** button sets `isLoggedIn` to `false`, showing the Guest page

## Project structure
```
ticketbookingapp/
├── public/
│   └── index.html
├── src/
│   ├── GuestPage.js
│   ├── UserPage.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — you'll start on the
Guest page. Click **Login** to switch to the User page (with booking
buttons), and **Logout** to return to the Guest page.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: ticketbookingapp conditional rendering lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
