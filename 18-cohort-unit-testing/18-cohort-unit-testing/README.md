# cohort-unit-testing

React Hands-On Lab: Unit Testing with Jest & Enzyme.

> **Note:** the original lab instructions reference a pre-built zip
> attachment containing the app (`CohortDetails.js`, `Cohort.js`) — that
> attachment wasn't included in the uploaded document, so `CohortDetails.js`
> and `Cohort.js` here are a reasonable reconstruction matching the
> described component/props shape. Swap them out for your real files if
> you have them; the test file targets the same API (a `cohort` prop with
> a `code` field rendered inside an `<h3>`).

## Setup

```bash
npm install
```

## Enzyme setup (already wired up in this repo)

```bash
npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json
```

`src/setupTests.js` configures the adapter.

## Tests (`src/CohortDetails.test.js`)

Test suite: **"Cohort Details Component"**

1. `should create the component` — shallow-renders `CohortDetails` in isolation.
2. `should initialize the props` — mounts the component and asserts the `cohort` prop matches the object passed in.
3. `should display cohort code in h3` — mounts the component, finds the `<h3>` via Enzyme's `find()`, and checks it shows the cohort's code.
4. `should always render same html` — snapshot test of the rendered output.

## Run tests

```bash
npm test
```
