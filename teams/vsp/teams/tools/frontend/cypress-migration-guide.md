# Cypress Migration Guide

The purpose of this guide is to help with converting Nightwatch tests to Cypress.

# Table of Contents
1. [Initial Setup](#initial-setup)
2. [Writing Tests](#writing-tests)
    1. [Test Structure](#test-structure)
    2. [Visiting a page](#visiting-a-page)
    3. [Interacting With Page Elements](#interacting-with-page-elements)
    4. [Custom Commands](#custom-commands)
    5. [Test Data](#test-data)
    6. [Mocking Data](#mocking-data)
    7. [File Uploads](#file-uploads)
    8. [Accessibility](#accessibility)
    9. [Assertions](#assertions)
3. [Running Tests](#running-tests)
    1. [Headless Mode](#headless-mode)
    1. [Test Runner](#test-runner)
4. [Things to Note](#things-to-note)

## Initial Setup <a name="initial-setup"></a>

The location of tests remains the same as it is in nightwatch. All cypress tests must be in the `tests` directory of the application.
Cypress tests need to have the file extension `.cypress.spec.js`. E.g. `my-test-name.cypress.spec.js`.

The overall folder structure for cypress in the `vets-website` repo is as follows:

```
vets-website
|
└───src/platform/testing/e2e-cypress
|   |
│   └───fixtures
│   |   │   hca/maximal-test.json
│   |   │   
│   └───plugins
│   |   │   index.js
│   |   │   
│   └───support
│       │   commands.js
│       │   index.js
```

- `cypress.json` holds the [configuration](https://docs.cypress.io/guides/references/configuration.html) for cypress tests. You can set things like the `baseUrl`, `defaultCommandTimeout`, etc.
- `fixtures` holds the [test data](https://docs.cypress.io/api/commands/fixture.html) that can be accessed inside of cypress tests.
- `plugins` contains custom tasks, which allow you to [tap into the node environment](https://docs.cypress.io/guides/tooling/plugins-guide.html). This is valuable because all cypress test code is executed in the browser, so plugins allow us to execute code in the node process running outside of the browser.
- `support` holds [custom cypress commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax), specifically in the `commands.js` file. These commands can be run in cypress tests, similar to the built in commands. This is similar to [Nightwatch's custom commands](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/#custom-nightwatch-commands). This is also where cypress plugins are imported, as shown in `index.js`.

### Test Dependencies
You do not need to import any modules for helpers and timeouts, etc as before with nightwatch. You can start writing your tests without anything needed to be imported.

## Writing Tests <a name="writing-tests"></a>
### Test Structure <a name="test-structure"></a>
The test structure of Cypress should feel familiar. Cypress uses mocha's bdd syntax which is what we use for our unit tests. Note that because `it()` blocks are their own tests, each `it()` block should be independent of others in the same testing suite. Everything executed in the browser needs to be inside of an `it()` block. Visit [here](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-Structure) for more context.

### Visiting a Page <a name="visiting-a-page"></a>
When [visiting a page](https://docs.cypress.io/api/commands/visit.html#Syntax), you do not need to be concerned about the `baseUrl`. Cypress's configuration file takes care of this. So rather than grabbing the `baseUrl` from the helpers in nightwatch:

```javascript
client.openUrl(`${E2eHelpers.baseUrl}/health-care/apply/application`)
```

You can instead enter the page directly:

```javascript
cy.visit('health-care/apply/application')
```

### Interacting with Page Elements <a name="interacting-with-page-elements"></a>
Cypress has a large api that allows for easy interacting with elements. The most common tasks you will probably need to convert from nightwatch tests are clicking, selecting elements from dropdowns, and entering input. Shown below is an overview of how to perform these tasks in cypress.

#### Clicking
Nightwatch:
```javascript
client.click('.form-panel .usa-button-primary');
```
Cypress:
```javascript
cy.get('.form-panel .usa-button-primary').click();
```

#### Selecting From Dropdown
Nightwatch:
```javascript
client.selectDropdown('root_veteranAddress_country', data.veteranAddress.country)
```
Cypress:
```javascript
cy.get('#root_veteranAddress_state').select(testData.veteranAddress.state)
```

#### Entering Data
Nightwatch:
```javascript
client.fill('input[name="root_firstName"]', data.veteranFullName.first)
```
Cypress:
```javascript
cy.get('#root_firstName').type(testData.veteranFullName.first)
```

Please visit [here](https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#Actionability) for more information about interacting with elements. For additional ways to interact with the DOM we have also included the [cypress testing library](https://testing-library.com/docs/cypress-testing-library/intro) in the repo.

### Custom Commands <a name="custom-commands"></a>

Some custom nightwatch commands located in `src/platform/testing/e2e/nightwatch-commands` were converted to cypress commands, and can be found in `src/platform/testing/e2e-cypress/support`. Many of them did not need to be converted because cypress supports their functionality natively. These custom commands can be used directly on `cy`. For example:

```javascript
cy.fillDate('root_dob', testData.veteranDateOfBirth);
```

### Test Data <a name="test-data"></a>

In Cypress, because everything in a test is executed inside of the browser, [fixtures](https://docs.cypress.io/api/commands/fixture.html#Syntax) are used to get access to data in tests.

Fixtures should be stored in the app specific folder inside of `src/platform/testing/e2e-cypress/fixtures`. If the app specific folder does not exist feel free to create it.

For example: `src/platform/testing/e2e-cypress/fixtures/hca` contains all the fixtures for the `hca` application. You can copy all the schema files used in current tests to the proper fixtures folder.

You can inject the fixture into your test by doing:
```javascript
cy.fixture('hca/maximal-test.json').as('testData');
```
Cypress already knows to look in the `fixtures` folder, so you can use the application specific directory for the path to the fixture.

To get access to the fixture, you can use `.get()`:

```javascript
cy.get('@testData').then(testData => {
  cy.get('#root_firstName').type(testData.veteranFullName.first);
});
```

### Mocking Data <a name="mocking-data"></a>

Cypress allows you to [stub responses](https://docs.cypress.io/guides/guides/network-requests.html#Stubbing), which can avoid the need to use the mock api helpers.

```javascript
// Start a server to begin routing responses
cy.server();

// Stub request to get enrollment status
cy.route({
  method: 'GET',
  url: '/v0/health_care_applications/enrollment_status*',
  status: 404,
  response: {
    errors: [
      {
        title: 'Record not found',
        detail: 'The record identified by  could not be found',
        code: '404',
        status: '404',
      },
    ],
  },
}).as('getApplication');

// Stub request to submit application
cy.route('POST', '/v0/health_care_applications', {
  formSubmissionId: '123fake-submission-id-567',
  timestamp: '2016-05-16',
}).as('submitApplication');

// Workaround to intercept requests made with fetch API.
cy.on('window:before:load', window => {
  delete window.fetch;
});
```
Based on the above stubs, whenever the browser makes a `GET` request to `/v0/health_care_applications/enrollment_status*` or a `POST` request to `/v0/health_care_applications`, cypress will automatically stub the given response.

All of your mock api calls using `mockData()` can be replaced with `cy.route()`. Note, be sure to always start the server with `cy.server()` before stubbing requests.

### File Uploads <a name="file-uploads"></a>
File uploads can be done using the [cypress file upload](https://github.com/abramenal/cypress-file-upload/tree/v3.5.3) plugin. For instructions on usage please visit [here](https://github.com/abramenal/cypress-file-upload/tree/v3.5.3#usage).

**Note:** Version 4 is unstable to please follow instructions for v3.5.3.

### Accessibility <a name="accessibility"></a>
Just like most e2e tools, cypress has its own [axe-core plugin](https://github.com/avanslaars/cypress-axe) to test accessibility.

To add axe checks to your tests use the custom `axeCheck()` command based off the `checkA11y` [command](https://github.com/avanslaars/cypress-axe#cychecka11y).

#### Nightwatch:
```javascript
client.axeCheck('.main')
```

#### Cypress:
```javascript
cy.axeCheck();
```

### Assertions <a name="assertions"></a>

Cypress uses `chai` to [handle assertions](https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions). Currently in the `nightwatch-assertions` folder, we have 4 custom assertions, which can all be replaced:

#### hasFocusableCount / hasTabbableCount
Checks the count of focusable and tabbable elements.

These can be converted by making [custom chai assertions](https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions).

#### isActiveElement
Checks if the given element is focused on the page.

```javascript
// Bdd assertion
cy.get('input').should('have.focus')
```
#### isDisabledElement 
Checks if the given element is disabled on the page.

```javascript
// Bdd assertion
cy.get('button').should('be.disabled')
```

## Running Tests <a name="running-tests"></a>

As of now, cypress supports Chrome, Edge, Firefox(beta) and a few [others](https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers). You can run tests in headless mode or via the test runner.

### Headless mode <a name="headless-mode"></a>
To run tests headless, run `yarn test:cypress:run`

### Test Runner <a name="test-runner"></a>
To run tests using the cypress [test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview), run `yarn test:cypress:open`.

With the Test Runner, you are able to use cypress's `Open Selector Playground'. This allows you to click on elements in the DOM and copy the selector for that item for your test. This means there's usually no need to inspect an element manually.

The test runner provides the ability to pause tests, and [time travel](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Time-travel), which allows you to see snapshots of your tests.

You can add any of the [run options](https://docs.cypress.io/guides/guides/command-line.html#Commands) to the commands above.

## Things to Note <a name="things-to-note"></a>

### Automatic Waiting
Cypress automatically waits for commands to execute before moving on to the next. This eliminates needing to use the timeout consts in `platform/testing/e2e/timeouts.js`

### Third Party Plugins
Cypress has many third party [plugins](https://docs.cypress.io/plugins/) available. If you find yourself needing to do something that isn't natively supported, there may be a plugin for it.
