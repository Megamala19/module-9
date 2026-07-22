# TrainersApp — React Router Hands-On Lab

A single-page React app for Cognizant Academy that lists trainers and their
expertise, using **React Router** for navigation.

## What this covers
- `Trainer` model class (TrainerId, Name, Email, Phone, Technology, Skills)
- Mock trainer data (`TrainersMock.js`)
- `react-router-dom` installed and configured
- `TrainersList` component rendering clickable trainer names (`Link`)
- `Home` component
- `App.js` wiring up `BrowserRouter`, `Routes`, `Route`, and `Link`:
  - `/` → Home
  - `/trainers` → TrainersList
  - `/trainers/:id` → TrainerDetail
- `TrainerDetail` component reading the `id` param via `useParams()` and
  looking up the matching trainer from mock data

## Project structure
```
TrainersApp/
├── public/
│   └── index.html
├── src/
│   ├── trainer.js
│   ├── TrainersMock.js
│   ├── TrainersList.js
│   ├── TrainerDetail.js
│   ├── Home.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Use the nav links to
switch between Home and the Trainers list; click a trainer's name to view
their details.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: TrainersApp React Router lab"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
