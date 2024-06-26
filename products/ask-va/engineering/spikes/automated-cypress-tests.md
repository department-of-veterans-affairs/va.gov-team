# Cypress Automated Tests

Our unit tests ensure that the state of objects in our application are exactly what we expect them to be at any given point. Cypress actually tests the same components within a live browser, using an actual DOM.

> **NOTE:** This is a living document. If anything is missing, add it. If something is misstated, correct it. Every developer should feel empowered to maintain our engineering documentation. It's OK if you make a mistake -- every revision is tracked in GitHub.

## Testing Notes

The following sections offer information about the tests that should help you understand their usage (and hopefully, the rationnales).

### Location

Our tests are stored alongside our source code in the `vets-website` [repo in GitHub](https://github.com/department-of-veterans-affairs/vets-website). You'll find them in the `src/applications/ask-va/tests` folder.

### Preparation

Our tests are written in [Cypress](https://www.cypress.io/), which depends on node. So before you can run the tests, you'll need to have node installed, and the following command needs to be executed in the root of the test folder.

```shell
npm install
```

### Running All Tests

Once configured, you can run our suite of tests in the Cypress UI using the following command.

```shell
npx cypress open
```

Select E2E tests, and you'll see a list of collections of tests that can be run.

### Running a Single Test

To run the unauthenticated test suite in the development Firefox browser, with the browser visible so you can troubleshoot issues in the test, run a command similar to the following.

```shell
npx cypress run --spec "./cypress/e2e/1-getting-started/unauthenticated.cy.js" --headed --browser firefox:dev
```

### Authentication

The authentication process for the va.gov site relies on browser redirects to sites outside of our control (e.g. ID.me, Login.gov, ...). Cypress prefers that you stay on the site that the test is targeting. So, we have to simulate authentication with a mock user.

For an example of this, see the test suite in the `authenticated.cy.js` source code file.

### Capturing a Test Run (Video)

The existing configuration for our Cypress tests has a feature enabled that records the session to a video file that can be shared with others. It's often helpful to see the events that lead up to an error, and the video might be something you can share for demos with the stakeholders.

> **NOTE:** Only the most recent run is retained. If you want it for later, save it somewhere else before the next test run.

## Running the Tests

The following sections describe common usage scenarios.

### Using the GUI Tool

You saw how to use the Cypress GUI to execute test suites in the [Running All Tests](#running-all-tests) section, above.

### Using the CLI

You saw how to use the Cypress CLI to execute a single test suite in the [Running a Single Test](#running-a-single-test) section, above. For a complete list of the options available to the Cypress CLI, execute the following command.

```shell
npx cypress --help
```

For help with a specific command, for example, the `run` command, execute the following command.

```shell
npx cypress run --help
```

### Headless

In addition to running the test suites in a live browser that you can interact with and troubleshoot problems, Cypress supports a `--headless` option (enabled by default for the `run` command). This is how our tests will run in the CI/CD pipeline.

### Local (Against Local)

This will eventually be an environment variable, but to change the platform against which the tests are run, edit the test file to change the value in the following line with your system of choice.

```javascript
beforeEach(() => {

  // Cypress starts out with a blank slate for each test
  // so we must tell it to visit our website with the `cy.visit()` command.
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  // cy.visit("https://example.cypress.io/todo");

  cy.visit("https://localhost:3001/contact-us/ask-va-too/");
})
```

### Local (Against DEV or STAGING)

This sill eventually be an environment variable, but to change the platform against which the tests are run, edit the test file to change the value in the following line with your system of choice.

```javascript
beforeEach(() => {

  // Cypress starts out with a blank slate for each test
  // so we must tell it to visit our website with the `cy.visit()` command.
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  // cy.visit("https://example.cypress.io/todo");

  cy.visit("https://staging.va.gov/contact-us/ask-va-too/");
})
```

### Review Instances (CI/CD Pipeline)

When our code is run n the review instance, only one repo is. being tested at a time. These tests live in the `vets-website` repo. So, our CI/CD testing needs to mock the `vets-api` responses with a mocking server, or by specifying. the `?mockData=true` flag on our API endpoint URIs.

## Future Development

There are some tasks that need to be handled after the flows have been hardened. A test failure in CI/CD will block the deploy until the tests is satisfied.
