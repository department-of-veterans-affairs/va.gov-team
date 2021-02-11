# Cypress 6.x Upgrade Guide

The upgrade from Cypress 4.8 to Cypress 6.x introduces several changes to test structure, syntax, and other aspects of Cypress tests. This guide covers key changes that are most likely to affect existing tests. There are a handful of deprecated methods that should be updated before the core Cypress library no longer supports them, which is expected to happen in the next major release (7.x), we recommend making these changes by the end of March 2021, to safely avoid any issues resulting from the next update. Please carefully read the guidance below. If you have any questions please drop by #vsp-testing-tools-team to get support.

# Table of Contents

- [Cypress 6.x Upgrade Guide](#cypress-6x-upgrade-guide)
- [Table of Contents](#table-of-contents)
  - [Overview <a name="overview"></a>](#overview-)
  - [Migration changes <a name="migration-changes"></a>](#migration-changes-)
    - [`cy.intercept()` vs. `cy.route()` <a name="intercept"></a>](#cyintercept-vs-cyroute-)
    - [Fixtures <a name="fixtures"></a>](#fixtures-)
    - [Non-existent elements <a name="non-existent-elements"></a>](#non-existent-elements-)
    - [Opacity of elements <a name="opacity"></a>](#opacity-of-elements-)
    - [Retrying tests <a name="retries"></a>](#retrying-tests-)
    - [Retrying individual tests <a name="individual-retries"></a>](#retrying-individual-tests-)
    - [Cookies <a name="cookies"></a>](#cookies-)
    - [Blocking hosts <a name="blocking-hosts"></a>](#blocking-hosts-)
    - [`dirname` and `filename` <a name="dirname-filename"></a>](#dirname-and-filename-)
  - [Additional resources <a name="additional-resources"></a>](#additional-resources-)

## Overview <a name="overview"></a>

The upgrade from Cypress 4.8 to Cypress 6.x introduces several changes to test structure, syntax, and other aspects of Cypress tests. This guide covers key changes that are most likely to affect existing tests. There are a handful of deprecated methods that should be updated before the core Cypress library no longer supports them. A full, detailed guide of all changes can be found in the [additional resources](#additional-resources) section.

## Migration changes <a name="migration-changes"></a>

### `cy.intercept()` vs. `cy.route()` <a name="intercept"></a>

[`cy.server()`](https://docs.cypress.io/api/commands/server.html) and [`cy.route()`](https://docs.cypress.io/api/commands/route.html) are being deprecated in favor of [`cy.intercept()`](https://docs.cypress.io/api/commands/intercept.html). `cy.server()` is not needed when using `cy.intercept()`. Syntax for `cy.intercept()` is the same as it is for `cy.route()`.

For example, this block of code:

```javascript
cy.server();
cy.route('/hello').as('helloWorld');
```

can be re-written as

```javascript
cy.intercept('/hello').as('helloWorld');
```

`cy.wait()` also behaves differently with `cy.intercept()`:

```javascript
cy.server();
cy.route('/hello').as('helloWorld');
cy.wait('@helloWorld')
  .then(({ requestBody, responseBody, status }) => {
    expect(status).to.eq(200);
  });
```

now looks like:

```javascript
cy.intercept('/hello').as('helloWorld');
cy.wait('@helloWorld')
  .then(({ request, response }) => {
    expect(response.statusCode).to.eq(200);
  });
```

While their functionality is similar, `cy.intercept()` does not behave exactly the same as `cy.route()`. One key difference is that previously-defined `cy.intercept()`s cannot be overriden later on in a test. For example, the second intercept defined in this test will not behave as expected because Cypress will still use the `cy.intercept()` in the `beforeEach()` block:

```javascript
beforeEach(() => {
  cy.intercept('GET', '/todos', []) // an empty array is returned
  cy.visit('/')
})

it('shows the initial todos', () => {
  // this intercept will not override the original intercept
  cy.intercept('GET', '/todos', { fixture: 'two-items.json' }) // fixture with two items returned
  cy.visit('/')
  cy.get('.todo').should('have.length', 2)
})
```

If a stubbed response needs to be overridden, `cy.route()` should still be used. The Cypress development plans to release override support in a future version of Cypress. A full list of differences between `cy.route()` and `cy.intercept()` can be found [here](https://docs.cypress.io/api/commands/intercept.html#Comparison-to-cy-route).

### Fixtures <a name="fixtures"></a>

`cy.intercept()` includes a `routeHandler` argument in which fixture paths can be specified. The syntax is slightly different than with `cy.route()`:

```javascript
cy.server();
cy.route('GET', '/hello', 'fx:helloWorld');
```

now looks like:

```javascript
cy.intercept('GET', '/hello', {
  fixture: 'helloWorld'
});
```

### Non-existent elements <a name="non-existent-elements"></a>

Cypress 6 introduces changes that affect how assertions behave for non-existent elements. Cases that used to pass now fail, as Cypress 6 is more strict about assertions for these kinds of elements.

Examples of assertions that used to pass but now fail:

```javascript
cy.get('#does-not-exist').should('not.be.visible');
cy.get('#does-not-exist').should('not.have.class', 'present');
cy.get('#does-not-exist').should('not.contain', 'text');
```

With Cypress 6, the preferred approach is to simply check that the element does not exist:

```javascript
cy.get('#does-not-exist').should('not.exist');
```

### Opacity of elements <a name="opacity"></a>

Cypress 6 treats elements with the CSS property `opacity: 0` as not visible, but these elements can still be interacted with. In older versions of Cypress the following assertion would fail, but now passes:

```javascript
// The `.zero-opacity` element has the CSS property `opacity: 0`.
cy.get('.zero-opacity').should('not.be.visible');
```

### Retrying tests <a name="retries"></a>

Cypress 6 supports retries of tests. The number of retries is passed in as an environment variable when running tests. Cypress will retry failing tests for the specified number of times before marking it as a failed test.

```sh
CYPRESS_RETRIES=2 cypress run --spec "path/to/test.cypress.spec.js"
```

The number of retries can also be added to `vets-website/config/cypress.json`:

```javascript
{
  "retries": {
    "runMode": 1, // when using `cy run`
    "openMode": 3 // when using `cy open`
  }
}
```

### Retrying individual tests <a name="individual-retries"></a>

The number of retries can be set per test with the following syntax:

```javascript
it('example test', {
  retries: 3
}, () => {
  // test body
});
```

### Cookies <a name="cookies"></a>

Syntax for whitelisting cookies has changed in Cypress 6. The `whitelist` parameter is now named `preserve`.

Before:

```javascript
Cypress.Cookies.defaults({
  whitelist: 'session_id'
});
```

After:

```javascript
Cypress.Cookies.defaults({
  preserve: 'session_id'
});
```

### Blocking hosts <a name="blocking-hosts"></a>

For blocking hosts in `vets-website/config/cypress.json`, the configuration variable `blacklistHosts` has been renamed to `blockHosts`.

### `dirname` and `filename` <a name="dirname-filename"></a>

The global variables `__dirname` and `__filename` no longer include a leading slash in the path.

```javascript
expect(__dirname).to.equal('/cypress/integration');
expect(__filename).to.equal('/cypress/integration/app_spec.js');
```

now looks like:

```javascript
expect(__dirname).to.equal('cypress/integration');
expect(__filename).to.equal('cypress/integration/app_spec.js');
```

## Additional resources <a name="additional-resources"></a>

A full migration guide can be found on [docs.cypress.io](https://docs.cypress.io/guides/references/migration-guide.html).