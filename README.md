# Vite + Cypress + MSW + react-query Demo

Example of using Cypress with Vite, MSW and `react-query`. Uses the `appReady`
pattern to signal to Cypress when the MSW server has started.

https://docs.cypress.io/api/commands/window#Start-tests-when-app-is-ready

First install the packages:

```
npm install
```

Then start the app:

```
npm run dev
```

Then open another console window and start Cypress:

```
npx cypress open
```

or

```
npx cypress run
```
