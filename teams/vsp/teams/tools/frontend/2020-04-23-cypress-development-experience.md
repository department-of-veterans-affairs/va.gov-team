# Cypress Development Experience

This document is intended to outline the development experience with cypress, and how it can be integrated with the platform.

## Folder Structure

```
vets-website
│   cypress.json
│
└───src/platform/testing/e2e-cypress
│   │   helpers.js
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
- `fixtures` holds the [test data](https://docs.cypress.io/api/commands/fixture.html) that can be accessed inside of cypress tests. I made a subdirectory for hca test data.
- `plugins` contains custom tasks, which allow you to [tap into the node environment](https://docs.cypress.io/guides/tooling/plugins-guide.html). This is valuable because all cypress test code is executed in the browser, so plugins allow us to execute code in the node process running outside of the browser.
- `support` holds [custom cypress commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax), specifically in the `commands.js` file. These commands can be ran in cypress tests, similar to the built in commands. This is similar to [Nightwatch's custom commands](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/#custom-nightwatch-commands). This is also where cypress plugins are imported, as shown in `index.js`.

### Notes / Followup

Overall, having a global configuration file where configs are injected automatically in each test makes tests cleaner.

Some work may need to be done to figure out how to organize `fixtures` for different application tests. Especially considering each applications's test data currently resides in the application's test directory.

### Next Steps / Questions

Solidify the folder structure we want teams to follow when creating tests.
- Where do we want to hold each applications test's `fixtures`?

## Writing Tests
### Stub Responses

Cypress allows you to [stub responses](https://docs.cypress.io/guides/guides/network-requests.html#Stubbing), which can avoid the need to use the mock api helpers.

```javascript
before(() => {
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
});
```
Based on the above stubs, whenever the browser makes a `GET` request to `/v0/health_care_applications/enrollment_status*` or a `POST` request to `/v0/health_care_applications`, cypress will automatically stub the given response.

### Automatic Waiting
Cypress automatically waits for commands to execute before moving on to the next. This eliminates needing to use the timeout consts currently used in our nightwatch tests. This makes testing easier because we don't have to worry about waiting for an element to be visible when a new page renders or element.

### File Uploads
Currently cypress doesn't support file uploads natively, but this can be done [programmatically](https://docs.cypress.io/api/utilities/blob.html#Image-Fixture).

### Accessibility
Just like most e2e tools, cypress has its own [axe-core plugin](https://github.com/avanslaars/cypress-axe) to test accessibility.

### Syntax

Because [cypress has adopted](https://docs.cypress.io/guides/references/bundled-tools.html#Mocha) `mocha`'s syntax, tests are cleaner and more organized than they are in `v0.9` of `nightwatch`. Developer's on the platform will be used to this because we already use `mocha` for our unit tests. Nightwatch has also introduced the bdd interface in [v1.3](https://nightwatchjs.org/guide#using-bdd-describe-beta-).

In cypress, you directly chain commands off of the `cy` object, so there's no need for exporting a module or having everything inside of a callback function.

## Cypress Test Runner

The [cypress test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview) enhanced the experience of writing and running tests.

With the Test Runner, you are able to use cypress's `Open Selector Playground'. This allows you to click on elements in the DOM and copy the selector for that item for your test.

<p align="center">
  <img width="797" src="https://user-images.githubusercontent.com/9042882/79795343-a5088f00-8308-11ea-9cdd-539b156dc301.gif">
</p>

This makes it much easier to get the selector for elements. There's usually no need to inspect an element manually. The `open selector playground` works fairly well, but sometimes it can be a hit or miss. For example, when selecting the 'Start your application without signing in' link on the `hca` introduction page, the playground selector yields `cy.get(':nth-child(5) > .va-button-link')`.

Another issue with selecting elements in cypress is you cannot select elements by their `id` if it contains characters other than [0-9, a-z, A-Z]. This was a bit of a problem when trying to select elements that had id's with colons(`:`) in them. E.g. `cy.get('#root_view\:spouseContactInformation_spouseAddress_street')`. This came up a few times when testing `hca`. A [fix](https://github.com/cypress-io/cypress/issues/2027) seems to be on the way.

The test runner provides the ability to pause tests, and [time travel](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Time-travel), which allows you to see snapshots of your tests.

## Cross Browser Testing

As of now, cypress supports Chrome, Edge, Firefox(beta) and many [others](https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers).

Tests run identically across different browsers. Because cypress is executed in the browser as opposed to using a driver like selenium based solutions do, the tests are faster and less glitchy.

There isn't any configuration needed to test in different browsers which is nice. The test runner also has a toggle that allows you to select from your locally installed browsers.

<img width="797" alt="Screen Shot 2020-04-21 at 10 43 32 AM" src="https://user-images.githubusercontent.com/9042882/79896326-1570e800-83bd-11ea-909c-c4264ba6e4a3.png">

## Assertions

Cypress uses `chai` to [handle assertions](https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions), making it more readable. Currently in the `nightwatch-assertions` folder, we have 4 custom assertions, which can all be replaced:

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

## Next Steps for Converting to Cypress
- Convert custom nightwatch commands and assertions.
- Modify cypress `fixture` configuration so teams can have their fixtures inside of their application test folders.
- Convert platform specific e2e tests.
