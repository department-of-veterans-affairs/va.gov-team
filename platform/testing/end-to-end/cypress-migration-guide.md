----
# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Cypress-Migration-Guide.1870921754.html) on the Platform website.
### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
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

The test structure of Cypress should feel familiar. Cypress uses [Mocha's behvior-driven development (BDD) syntax](https://mochajs.org/#bdd), which is what we use for our unit tests.

Each spec file starts a new browser instance and runs the suite of tests according to the `describe()` and `it()` blocks.

- Note that `it()` blocks are individual tests, so each `it()` block should be independent of others in the same test suite.
- Everything executed in the browser needs to be inside of an `it()` block.

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
cy.visit("health-care/apply/application");
```

### Interacting with page elements <a name="interacting-with-page-elements"></a>

See [Interacting with Page Elements in the Cypress Resources Overview & Guide](vsp-cypress-resources.md#interacting-with-page-elements) for a detailed use case guide.

The most common interactions you will probably need to convert from Nightwatch tests are clicking, selecting elements from dropdowns, and entering text inputs. Below are examples of these interactions in Cypress.

#### Clicking

Nightwatch:

```javascript
client.click(".form-panel .usa-button-primary");
```

Cypress:

```javascript
cy.get(".form-panel .usa-button-primary").click();
```

#### Selecting from dropdown

Nightwatch:

```javascript
client.selectDropdown(
  "root_veteranAddress_country",
  data.veteranAddress.country
);
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
  method: "GET",
  url: "/v0/health_care_applications/enrollment_status*",
  status: 404,
  response: {
    errors: [
      {
        title: "Record not found",
        detail: "The record identified by  could not be found",
        code: "404",
        status: "404",
      },
    ],
  },
}).as("getApplication");

// Stub request to submit application
cy.route("POST", "/v0/health_care_applications", {
  formSubmissionId: "123fake-submission-id-567",
  timestamp: "2016-05-16",
}).as("submitApplication");
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

We have custom commands to acccomplish some common tasks, which are highlighted below. [Visit here to see a directory of all commands](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/cypress/support/commands).

#### Mock users <a name="mock-users"></a>

For simulating a signed-in session with a mock user, use `cy.login()`.

See [Mock Users in Cypress Best Practices](vsp-cypress-resources.md#mock-users) for detailed usage.

#### Test data (fixtures) <a name="test-data"></a>

To use fixtures (which get access to data in tests) see usage in [Test Data in Cypress Best Practices](vsp-cypress-resources.md#test-data).

#### File uploads <a name="file-uploads"></a>

To see custom commands for uploading files using Cypress see [File Uploads in Cypress Best Practices](vsp-cypress-resources.md#file-uploads).

#### Accessibility <a name="accessibility"></a>

Like most E2E tools, Cypress has its own [axe-core plugin](https://github.com/avanslaars/cypress-axe) to test accessibility.

To add aXe checks to your tests use the custom `cy.axeCheck()` command based off the `cy.checkA11y()` [command](https://github.com/avanslaars/cypress-axe#cychecka11y).

As documented by the plugin, be sure to call `cy.injectAxe()` after each `cy.visit()`, after which `cy.axeCheck()` can be invoked any number of times.

Nightwatch:

```javascript
client.axeCheck(".main");
```

Cypress:

```javascript
cy.visit(PAGE_URL);
cy.injectAxeThenAxeCheck();
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
cy.findByLabelText("First name").should("have.focus");
```

#### isDisabledElement

Checks if the given element is disabled on the page.

```javascript
// BDD assertion
cy.findByRole("button", { name: "Submit" }).should("be.disabled");
```
