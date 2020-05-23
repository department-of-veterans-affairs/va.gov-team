# Cypress Migration Guide

The purpose of this guide is to help with converting Nightwatch tests to Cypress.

# Table of Contents
1. [Initial Setup](#initial-setup)
2. [Writing Tests](#writing-tests)
    1. [Test Structure](#test-structure)
    2. [Visiting a page](#visiting-a-page)
    3. [Interacting With Page Elements](#interacting-with-page-elements)
    4. [Custom Commands](#custom-commands)
    5. [Test Data (Fixtures)](#test-data)
    6. [Mocking Data](#mocking-data)
    7. [File Uploads](#file-uploads)
    8. [Accessibility](#accessibility)
    9. [Assertions](#assertions)
3. [Running Tests](#running-tests)
    1. [Headless Mode](#headless-mode)
    1. [Test Runner](#test-runner)
4. [Things to Note](#things-to-note)

## Initial Setup <a name="initial-setup"></a>

Cypress tests are written in the same location as Nightwatch tests. Cypress tests need to be in the `tests` directory of the application.
Cypress tests need to have the file extension `.cypress.spec.js`. E.g. `my-test-name.cypress.spec.js`.

The overall folder structure for Cypress in the `vets-website` repo is as follows:

```
vets-website
|
└───src/platform/testing/e2e/cypress
│   |   │   
│   └───plugins
│   |   │   index.js
│   |   │   
│   └───support
│       │   commands
│       │   index.js
```

`cypress.json` is the [configuration file](https://docs.cypress.io/guides/references/configuration.html) for Cypress tests. You can set the `baseUrl`, `defaultCommandTimeout`, etc.
- `plugins` contains custom tasks, which allow you to [tap into the Node environment](https://docs.cypress.io/guides/tooling/plugins-guide.html). This is valuable because all Cypress test code is executed in the browser, so plugins allow us to execute code in the Node process running outside of the browser.
- `support` contains [custom Cypress commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax). By default, the custom commands imported in `commands/index.js` are available to all of our Cypress tests. These commands can be invoked similarly to the built in commands. This feature is similar to [Nightwatch's custom commands](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/#custom-nightwatch-commands). This is also where custom commands from Cypress plugins are imported, as can be seen in `index.js`.

### Test Dependencies
You generally do not need to import any modules for helpers, timeouts, etc. as with Nightwatch.

## Writing Tests <a name="writing-tests"></a>
### Test Structure <a name="test-structure"></a>
The test structure of Cypress should feel familiar. Cypress uses Mocha's BDD syntax, which is what we use for our unit tests.

Each spec file starts a new browser instance and runs the suite of tests according to the `describe()` and `it()` blocks.

Note that `it()` blocks are individual tests, so each `it()` block should be independent of others in the same test suite. Everything executed in the browser needs to be inside of an `it()` block.

Visit [the Cypress docs](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-Structure) for more context.

### Visiting a Page <a name="visiting-a-page"></a>
When [visiting a page](https://docs.cypress.io/api/commands/visit.html#Syntax), you do not need to be concerned about the `baseUrl`. Cypress's configuration file takes care of this. So rather than grabbing the `baseUrl` from the helpers in Nightwatch:

```javascript
client.openUrl(`${E2eHelpers.baseUrl}/health-care/apply/application`)
```

You can instead enter the page directly:

```javascript
cy.visit('health-care/apply/application')
```

### Interacting with Page Elements <a name="interacting-with-page-elements"></a>
Cypress has a [comprehensive API](https://docs.cypress.io/api/api/table-of-contents.html) that allows for easy interaction with elements. The most common interactions you will probably need to convert from Nightwatch tests are clicking, selecting elements from dropdowns, and entering text inputs. Below are examples of these interactions in Cypress.

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

For more information about how Cypress interactions behave, visit [the Cypress guide for interacting with elements](https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#Actionability).

For additional ways to interact with the DOM, we have also included the [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro) as a dependency.

### Custom Commands <a name="custom-commands"></a>

Some custom Nightwatch commands located in `src/platform/testing/e2e/nightwatch-commands` were converted to custom Cypress commands, and can be found in `src/platform/testing/e2e/cypress/support/commands`.

Many of them did not need to be converted, either because Cypress supports their functionality natively or the functionality was [too simple to abstract into a command](https://docs.cypress.io/api/cypress-api/custom-commands.html#2-Don%E2%80%99t-overcomplicate-things).

These custom commands can be called from the `cy` object. For example:

```javascript
cy.axeCheck();
```

### Test Data (Fixtures) <a name="test-data"></a>

In Cypress, because everything in a test is executed inside of the browser, [fixtures](https://docs.cypress.io/api/commands/fixture.html#Syntax) are used to get access to data in tests.

By default, Cypress doesn't support fixtures in separate directories, so we have a custom command for accessing fixtures stored in your app's directory.

For example, `src/applications/hca/tests/schema` contains test data for the `hca` application. You can load the file as a fixture like so:

```javascript
cy.syncFixtures({
  'data': 'srce/applications/hca/tests/schema',
  'minimal-test.json': 'src/applications/hca/tests/schema/maximal-test.json', 
  'maximal-test': 'src/applications/hca/tests/schema/maximal-test.json',
});

cy.fixture('maximal-test.json').as('testData');
```

To access the contents of the file, you can use a combination of `cy.get()` and `cy.then()`:

```javascript
cy.get('@testData').then(testData => {
  cy.get('#root_firstName').type(testData.veteranFullName.first);
});
```

### Mocking Data <a name="mocking-data"></a>

Cypress allows you to [stub responses](https://docs.cypress.io/guides/guides/network-requests.html#Stubbing), avoiding the need for mock API helpers.

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
Based on the above stubs, whenever the browser makes a `GET /v0/health_care_applications/enrollment_status*` or a `POST /v0/health_care_applications` request, Cypress will automatically handle the request with the stubbed response.

All of your mock API calls using `mockData()` can be replaced with `cy.route()`.

Be sure to always start the server with `cy.server()` before stubbing requests.

### File Uploads <a name="file-uploads"></a>
File uploads are not yet natively supported in Cypress. We have a custom command for uploading files that is based off of [this workaround](https://github.com/cypress-io/cypress/issues/170#issuecomment-619758213). 

```javascript
cy.get('[name="root_attachments_0_attachmentName"]')
  .upload('src/platform/testing/example-upload.png', 'image/jpg')
```

### Accessibility <a name="accessibility"></a>
Like most E2E tools, Cypress has its own [axe-core plugin](https://github.com/avanslaars/cypress-axe) to test accessibility.

To add aXe checks to your tests use the custom `axeCheck()` command based off the `checkA11y` [command](https://github.com/avanslaars/cypress-axe#cychecka11y).

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

Cypress supports Chrome, Edge, Firefox, and a few [others](https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers). You can run tests in headless mode or via the test runner.

### Headless mode <a name="headless-mode"></a>
To run tests headless, run `yarn cypress run --headless`

### Test Runner <a name="test-runner"></a>
To run tests using the Cypress [test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview), run `yarn cypress open`.

With the test runner, you are able to use Cypress's "Open Selector Playground". This allows you to click on elements in the DOM and copy that element's selector to use in your test. This means there's usually no need to manually inspect an element and copy the selector.

The test runner provides the ability to pause tests, and [time travel](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Time-travel), which allows you to see snapshots of your tests.

You can add any of the [run options](https://docs.cypress.io/guides/guides/command-line.html#Commands) to the commands above.

## Things to Note <a name="things-to-note"></a>

### Automatic Waiting
Cypress automatically waits for commands to execute before moving on to the next. This eliminates needing to use the timeout consts in `platform/testing/e2e/timeouts.js`. Cypress queues it's commands instead of running them synchronously, so doing something like [this](https://docs.cypress.io/guides/references/best-practices.html#Assigning-Return-Values) will not work.

### Third Party Plugins
Cypress has many third party [plugins](https://docs.cypress.io/plugins/) available. If you find yourself needing to do something that isn't natively supported, there may be a plugin for it.
