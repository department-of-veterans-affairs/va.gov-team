# Cypress Migration Guide

The purpose of this guide is to help with converting Nightwatch tests to Cypress.

# Table of Contents
1. [Initial setup](#initial-setup)
2. [Writing tests](#writing-tests)
    1. [Test structure](#test-structure)
    2. [Visiting a page](#visiting-a-page)
    3. [Interacting with page elements](#interacting-with-page-elements)
    4. [Mock API responses](#mock-api-responses)
    5. [Custom commands](#custom-commands)
        1. [Mock users](#mock-users)
        2. [Test data (fixtures)](#test-data)
        3. [File uploads](#file-uploads)
        4. [Accessibility](#accessibility)
    6. [Assertions](#assertions)
3. [Running tests](#running-tests)
    1. [Headless mode](#headless-mode)
    2. [Test runner](#test-runner)
4. [Things to note](#things-to-note)

## Initial setup <a name="initial-setup"></a>

Cypress tests, like Nightwatch tests, should be written in the `tests` directory of the application. Cypress tests should also have the file extension `.cypress.spec.js` (e.g. `my-test-name.cypress.spec.js`).

The overall folder structure for Cypress in the `vets-website` repo is as follows:

```
vets-website
|
└───src/platform/testing/e2e/cypress
│   |
│   └───plugins
│   |   │   index.js
|   |
│   └───support
│       │   commands
│       │   index.js
```

- `plugins` contains custom tasks, which allow you to [tap into the Node environment](https://docs.cypress.io/guides/tooling/plugins-guide.html). This is valuable because all Cypress test code is executed in the browser, so plugins allow us to execute code in the Node process running outside of the browser.
- `support` contains [custom Cypress commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax). By default, the custom commands imported in `commands/index.js` are available to all of our Cypress tests. These commands can be invoked similarly to the built in commands. This feature is similar to [Nightwatch's custom commands](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/#custom-nightwatch-commands). This is also where custom commands from Cypress plugins are imported, as can be seen in `index.js`.

For a list of currently used custom written Cypress helpers and mocks for `vets-frontend` browse the [Cypress Resources Overview & Guide](vsp-cypress-resources.md).

### Test dependencies
You generally do not need to import any modules for helpers, timeouts, etc. as with Nightwatch.

## Writing tests <a name="writing-tests"></a>

### Test structure <a name="test-structure"></a>
The test structure of Cypress should feel familiar. Cypress uses Mocha's BDD syntax, which is what we use for our unit tests.

Each spec file starts a new browser instance and runs the suite of tests according to the `describe()` and `it()` blocks.

Note that `it()` blocks are individual tests, so each `it()` block should be independent of others in the same test suite. Everything executed in the browser needs to be inside of an `it()` block.

Visit [the Cypress docs](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-Structure) for more context.

#### Form tests
Applications that are built with the VA Forms Library should be tested with the [Cypress form tester](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/cypress/support/form-tester).

### Visiting a page <a name="visiting-a-page"></a>
When [visiting a page](https://docs.cypress.io/api/commands/visit.html#Syntax), you don't need to specify the `baseUrl`. Cypress's configuration file takes care of this. So rather than grabbing the `baseUrl` from the helpers in Nightwatch:

```javascript
client.openUrl(`${E2eHelpers.baseUrl}/health-care/apply/application`);
```

You can instead visit the page with a relative path:

```javascript
cy.visit('health-care/apply/application');
```

### Interacting with page elements <a name="interacting-with-page-elements"></a>
Cypress has a [comprehensive API](https://docs.cypress.io/api/api/table-of-contents.html) that allows for easy interaction with elements.

As much as possible, the [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro) queries should be preferred over `cy.get()` or `cy.contains()` for selecting elements. Only the `findBy*` and `findAllBy*` variants are available from the [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/api-queries) queries. Note that the [queries are in descending order of recommendation](https://testing-library.com/docs/guide-which-query) (e.g., prefer `findByLabelText` over `findByRole` over `findByTestId`).

```
findByLabelText        findAllByLabelText
findByPlaceholderText  findAllByPlaceholderText
findByText             findAllByText
findByAltText          findAllByAltText
findByTitle            findAllByTitle
findByDisplayValue     findAllByDisplayValue
findByRole             findAllByRole
findByTestId           findAllByTestId
```

The `TestId` queries look at the `data-testid` attributes of DOM elements. Add this attribute to your markup when your test would otherwise need to reference elements by CSS attributes as a last resort. As much as possible, prefer writing selectors for `data-testid` attributes over CSS selectors (ids and classes). 

The goal is to write tests that [resemble how your users use your app](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change), hence the order of precedence for selecting elements.

The most common interactions you will probably need to convert from Nightwatch tests are clicking, selecting elements from dropdowns, and entering text inputs. Below are examples of these interactions in Cypress.

#### Clicking
Nightwatch:
```javascript
client.click('.form-panel .usa-button-primary');
```
Cypress:
```javascript
cy.get('.form-panel .usa-button-primary').click();
```

#### Selecting from dropdown
Nightwatch:
```javascript
client.selectDropdown('root_veteranAddress_country', data.veteranAddress.country);
```
Cypress:
```javascript
cy.findByLabelText(/country/i).select(testData.veteranAddress.country);
```

#### Entering data
Nightwatch:
```javascript
client.fill('input[name="root_firstName"]', data.veteranFullName.first);
```
Cypress:
```javascript
cy.findByLabelText(/first name/i).type(testData.veteranFullName.first);
```

For more information about how Cypress interactions behave, visit [the Cypress guide for interacting with elements](https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#Actionability).

For additional ways to interact with the DOM, we have also included the [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro) as a dependency.

### Mock API responses <a name="mock-api-responses"></a>

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
```
Based on the above stubs, whenever the browser makes a `GET /v0/health_care_applications/enrollment_status*` or a `POST /v0/health_care_applications` request, Cypress will automatically handle the request with the stubbed response.

You can consider `cy.route()` to be the built-in Cypress equivalent of the Nightwatch custom command `mockData()`.

**Our Cypress setup that's shared across all tests will automatically set up some default stubbed responses.**
- This involves starting `cy.server()` and stubbing the `/v0/maintenance_windows` and `/v0/feature_toggles` endpoints to return empty arrays, so you don't have to explicitly do any of this in your tests.
- **Why is this necessary?** Most apps make these requests to determine the availability of the app and render a loading indicator while waiting for the responses. Thus, without stubbing these endpoints, your tests will likely time out and fail before the app finishes loading due to the requests taking the same amount of time to time out. With a defined response, the requests are able to resolve immediately, and the test can proceed without delay.
- **If you want different responses from these requests,** you can override the default stubs by calling `cy.route()` on the same endpoints.

### Custom commands <a name="custom-commands"></a>

Some custom Nightwatch commands located in `src/platform/testing/e2e/nightwatch-commands` were converted to custom Cypress commands, and can be found in `src/platform/testing/e2e/cypress/support/commands`.

Many of them did not need to be converted, either because Cypress supports their functionality natively or the functionality was [too simple to abstract into a command](https://docs.cypress.io/api/cypress-api/custom-commands.html#2-Don%E2%80%99t-overcomplicate-things).

We have custom commands to acccomplish some common tasks, which are highlighted below. To get the full listing of available custom commands, see `src/platform/testing/e2e/cypress/support/commands`.

#### Mock users <a name="mock-users"></a>

For simulating a signed-in session with a mock user, use `cy.login()`.

Without providing any arguments, it will use a default user. To be signed in as a custom-defined user, you may pass in a compatible object as the argument. It should have the same shape as the response body for the `/v0/user` API endpoint. See `src/platform/testing/e2e/cypress/support/commands/login.js` for the default user object as an example to copy and modify as needed.

```javascript
cy.login();

const myUser = {
  data: {
    attributes: {
      ...
    },
  },
};

cy.login(myUser);
```

#### Test data (fixtures) <a name="test-data"></a>

In Cypress, because everything in a test is executed inside of the browser, [fixtures](https://docs.cypress.io/api/commands/fixture.html#Syntax) are used to get access to data in tests.

By default, Cypress doesn't support fixtures in separate directories, so we have a custom command for accessing fixtures stored in your app's directory.

For example, `src/applications/hca/tests/schema` contains test data for the `hca` application. You can load the file as a fixture like so:

```javascript
cy.syncFixtures({
  data: 'src/applications/hca/tests/schema',
  'minimal-test.json': 'src/applications/hca/tests/schema/maximal-test.json', 
  'maximal-test': 'src/applications/hca/tests/schema/maximal-test.json',
});

cy.fixture('maximal-test').as('testData');
```

To access the contents of the file, you can use a combination of `cy.get()` and `cy.then()`:

```javascript
cy.get('@testData').then(testData => {
  cy.findByLabelText(/first name/i).type(testData.veteranFullName.first);
});
```

Once you've synced your fixtures, you can also use the [fixture shorthand form](https://docs.cypress.io/api/commands/route.html#Fixtures) of `cy.route()`.

```javascript
cy.syncFixtures({
  foo: path.join(__dirname, 'fixtures', 'foo'),
  bar: path.join(__dirname, 'fixtures', 'bar'),
});

cy.route('/v0/foo', 'fixture:data/foo');
cy.route('/v0/bar', 'fx:data/bar');
```

#### File uploads <a name="file-uploads"></a>

File uploads are not yet natively supported in Cypress. We have a custom command for uploading files that is based off of [this workaround](https://github.com/cypress-io/cypress/issues/170#issuecomment-619758213). It must be chained from a command that retrieves an upload input element.

```javascript
cy.findByText('Upload', { selector: 'button' })
  .upload('src/platform/testing/example-upload.png', 'image/jpg');
```

#### Accessibility <a name="accessibility"></a>

Like most E2E tools, Cypress has its own [axe-core plugin](https://github.com/avanslaars/cypress-axe) to test accessibility.

To add aXe checks to your tests use the custom `cy.axeCheck()` command based off the `cy.checkA11y()` [command](https://github.com/avanslaars/cypress-axe#cychecka11y).

As documented by the plugin, be sure to call `cy.injectAxe()` after each `cy.visit()`, after which `cy.axeCheck()` can be invoked any number of times.

Nightwatch:
```javascript
client.axeCheck('.main');
```
Cypress:
```javascript
cy.visit(PAGE_URL);
cy.injectAxe();
cy.axeCheck();
```

Depending on the content of a page, it may be more thorough to test accessibility after expanding all accordions (and expandable content in general) on the page. We have a custom command for that purpose:

```javascript
cy.expandAccordions();
cy.axeCheck(); // Run the aXe check after expanding everything.
```

**Tests written with the form tester automatically check for accessibility, so this command does not need to be used explicitly in such tests.**

### Assertions <a name="assertions"></a>

Cypress uses `chai` to [handle assertions](https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions). Currently in the `nightwatch-assertions` folder, we have 4 custom assertions, which can all be replaced:

#### hasFocusableCount / hasTabbableCount
Checks the count of focusable and tabbable elements.

These can be converted by making [custom chai assertions](https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions).

#### isActiveElement
Checks if the given element is focused on the page.

```javascript
// BDD assertion
cy.findByLabelText('First name').should('have.focus')
```
#### isDisabledElement 
Checks if the given element is disabled on the page.

```javascript
// BDD assertion
cy.findByRole('button', { name: 'Submit' }).should('be.disabled')
```

## Running tests <a name="running-tests"></a>
Cypress supports Chrome, Edge, Firefox, and a few [others](https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers). You can run tests in headless mode or via the test runner.

### Headless mode <a name="headless-mode"></a>
To run headless tests, run `yarn cy:run`.

By default, `yarn cy:run` runs Cypress tests headlessly in an Electron browser. You may specify another browser, and if you would like to run headless tests in another browser, you will have to explicitly include the `--headless` flag.

```
yarn cy:run --headless --browser firefox
```

You may experience some performance issues where particular long-running tests (such as an exhaustive test of a form) may take an extremely long time (unless your setup is optimized for them, as in the case of our CI, which tests the production build and also has the specs to cancel out the performance burden).

For this reason, for local development, it might be better to run specific specs, even more so in the test runner. The Cypress team is [investigating various issues regarding performance](https://github.com/cypress-io/cypress/issues/6388#issuecomment-648795870) that may likely be related to this.


### Test runner <a name="test-runner"></a>
To run tests in the Cypress [test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview), run `yarn cy:open`.

There is a dropdown menu in the top right of the test runner that allows you to select a browser in which to run your tests. In our experience, Firefox has yielded the fastest test runs when testing locally, although it is currently a beta feature. The tests in CI will run in the default browser, which is Electron.

The test runner provides the ability to pause tests, and [time travel](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Time-travel), which allows you to see snapshots of your tests.

With the test runner, you are able to use Cypress's "Selector Playground". This allows you to click on elements in the DOM and copy that element's selector to use in your test. However, [as mentioned earlier](#interacting-with-page-elements), selecting elements by CSS attributes is discouraged in favor of selecting by test id, which is in turn considered a fallback if selecting by other attributes (label text, role, etc.) is not feasible. In fact, the Selector Playground follows this best practice and automatically attempts to determine the selector by looking at `data-cy`, `data-test`, and `data-testid` before falling back to a CSS selector.

You may find it useful to append certain [options](https://docs.cypress.io/guides/guides/command-line.html#Commands) to the commands above.

## Things to note <a name="things-to-note"></a>

### Automatic waiting
Cypress automatically waits for commands to execute before moving on to the next one. This eliminates the need to use the timeout constants in `platform/testing/e2e/timeouts.js`.

Cypress queues its commands instead of running them synchronously, so doing something like [this](https://docs.cypress.io/guides/references/best-practices.html#Assigning-Return-Values) will not work.

### Third-party plugins
Cypress has many third party [plugins](https://docs.cypress.io/plugins/) available. If you find yourself needing to do something that isn't natively supported, there may be a plugin for it.
