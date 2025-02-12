# My VA frontend

Last updated: September 8, 2023 — still WIP 🚧

The React/Redux frontend for the VA.gov MyVA. Modeled after [Profile's README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/engineering-docs/frontend-getting-started.md).

- [Purpose and overview](#purpose-and-overview)
- [Developing locally](#developing-locally)
- [Testing](#testing)
  - [Unit tests](#unit-tests)
  - [e2e tests](#e2e-tests)
    - [Open Cypress UI](#open-cypress-ui)
    - [Run Cypress from command line](#run-cypress-from-command-line)
  - [Test coverage](#test-coverage)
- [Troubleshooting](#troubleshooting)
- [Resources](#resources)

# Purpose and overview

The authenticated experience team wants to work towards a concierge-like VA experience, one that puts veterans' and other customers at the center of the interaction. 

My VA aims to meet this expectation by providing Veterans with a direct route to their most critical tasks and updates.

Sources: 
- [Authenticated Experience team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md)
- [Product outline: My VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md)


# Developing locally

1. Make sure you have the `vets-website` repo cloned and installed. I prefer `yarn`, but you can also use `npm`.
```
git clone git@github.com:department-of-veterans-affairs/vets-website.git

cd vets-website/

yarn install
```

2. Start local server:
```
yarn watch --env entry=dashboard
```

3. Include mocked responses:
```
yarn mock-api --responses src/applications/personalization/dashboard/mocks/server.js
```

4. To simulate logged in status, copy and paste the following into your browser devtools:

```
localStorage.setItem('hasSession', true)
```

Visit [https://localhost:3001/my-va](https://localhost:3001/my-va).

# Testing

## Unit tests

Run all unit tests for My VA:
```
yarn test:unit src/applications/personalization/dashboard/tests/**/*.unit.spec.js*                 
```

## e2e tests

**Before running any Cypress tests**, first make sure that:
1. `vets-website` is being served locally on port 3001
2. any mock server is **NOT** running
   - this includes `vets-api` or our local mock server 

### Open Cypress UI
Caveat: can be buggy and laggy
```
yarn cy:open
```
### Run Cypress from command line
Run all e2e tests for My VA:
```
yarn cy:run --spec "src/applications/personalization/dashboard/tests/e2e/**/*"
```

Run specific test:
```
yarn cy:run --spec "path/to/test-file.cypress.spec.js"
```

## Test coverage
Adam from Profile team wrote [a command to output a test coverage report](https://github.com/department-of-veterans-affairs/vets-website/pull/23751) in HTML format.

Run the following:
```
yarn test:unit --app-folder personalization --coverage --coverage-html
```
Then navigate to **coverage/index.html** and serve it on any live server.

# Troubleshooting

🚧

### `Error: An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness.` (in terminal while running unit test)

most likely due to new feature toggle that is affecting the state

1. add following import paths:
   ```
    import { renderWithStoreAndRouter } from '~/platform/testing/unit/react-testing-library-helpers';
    
    import { Toggler } from '~/platform/utilities/feature-toggles/Toggler';
   ```
2. add an initial state for feature toggle
   
   ```
    const initialState = {
       featureToggles: {
         [Toggler.TOGGLE_NAMES.featureToggleName]: true,
       },
     };
   ```

3. use `renderWithStoreAndRouter` instead of `render`
4. add `initialState` as second argument for `renderWithStoreAndRouter()`

# Resources

- [Authenticated Experience team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/charter.md)
- [Product outline: My VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md)
- [`vets-website` README.md](https://github.com/department-of-veterans-affairs/vets-website)
- [Istanbul - JavaScript test coverage tool](https://istanbul.js.org/)
