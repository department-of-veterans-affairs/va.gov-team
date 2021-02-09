# Cypress Flaky Test Management

## Table of Contents

- [Introduction](#introduction)
- [How to Detect Flaky Tests](#how-to-detect-flaky-tests)
- [How to Identify the Point of Failure](#how-to-identify-the-point-of-failure)
- [Call cy.injectAxe() When a New Page Loads](#call-cyinjectaxe-when-a-new-page-loads)
- [Race Conditions](#race-conditions)
  - [`exist` and `be-visible`](#exist-and-be-visible)
  - [`cy.click({ waitForAnimations: true })`](#cyclick-waitforanimations-true-)
  - [Race Conditions Resources](#race-conditions-resources)

## Introduction

Flaky tests are tests that sometimes pass and sometimes fail without any changes to the code. This document offers suggestions on how to better detect flaky tests and how to fix or prevent them.

## How to Detect Flaky Tests

After writing your test, wrap each `describe` or `it` block in a `for` loop and iterate over it 20-30 times. The number of times you iterate through the loop is arbitrary but the higher the number the better. Having a test pass multiple times should give you confidence that your test is not flaky.

Example:

```javascript
for (let i = 0; i < 20; i += 1) {
  describe('the thing', () => {
    it('it does this', () => {
      // commands and assertions go here
    });
  });
}
```

## How to Identify the Point of Failure

Cypress does not give an accurate line number for the point of failure when running tests in headless mode using `cy:run`. In order to view the exact point at which the test failed, the test needs to be run in headed mode using `cy:open`. The Cypress browser panel will display a code block with the exact point of failure.

Example:

```javascript
src/applications/coronavirus-vaccination/tests/e2e/signup.cypress.spec.js:18:29
  16 |       // Intro page
  17 |       cy.axeCheck();
> 18 |       cy.get('.vads-l-row').contains(
     |                             ^
  19 |         'Stay informed about getting a COVID-19 vaccine at VA',
  20 |       );
  21 |       // Expand all Accordions with keyboard and test for A11y
```

## Call cy.injectAxe() When a New Page Loads

If you see an error like this:

```
TypeError: Cannot read property 'run' of undefined
      at Context.eval (http://localhost:3001/__cypress/tests?p=src/platform/testing/e2e/cypress/support/index.js:25257:442975)
```

Chances are you forgot to call `cy.injectAxe()` before calling `cy.axeCheck()` after Cypress loads a new page.

The `undefined` object referenced in the error is `axe` from the cypress-axe module:

```
return a.axe.run(t||a.document,u).then(function(e){var t=e.violations;
```

This error occurs because every time Cypress loads a new page by calling `cy.visit()`, `cy.wait(@alias)` (where `@alias` references a route), or `cy.click()` (when Cypress clicks on a element like a search button that loads a new page), the axe-core runtime must first be loaded into the page by calling `cy.inject()`.

The [cypress-axe documentation](https://github.com/component-driven/cypress-axe#cyinjectaxe) explains:

> This will inject the axe-core runtime into the page under test. You must run this after a call to `cy.visit()` and before you run the `checkA11y` command.
>
> You run this command with `cy.injectAxe()` either in your test, or in a `beforeEach`, as long as the visit comes first.

However, as mentioned, it appears that this also applies to other calls that load a new page like `cy.wait(@alias)` or `cy.click()`.

## Race Conditions

Because Cypress is asynchronous, race conditions can occur when Cypress ‘gets ahead of the DOM’ and, for example, tries to find or click on an element of the page that hasn’t rendered yet. Errors that result from race conditions are sometimes difficult to track down. Here are a few tips and a list of useful resources:

### `exist` and `be-visible`

After calling `cy.get()` on an element, like a button for example, make sure it actually exists or is visible before calling `cy.click()` or some other function on it, like so:

```javascript
cy.get('button').should('exist');
```

or:

```javascript
cy.get('button').should('be.visible');
```

### `cy.click({ waitForAnimations: true })`

`cy.click({ waitForAnimations: true })` should be used instead of `cy.click()` when Cypress clicks on an element that is animated, like an accordion.

This option tells Cypress to wait for elements to finish animating before executing the command.

### Race Conditions Resources

- [When Can the Test Click](https://www.cypress.io/blog/2019/01/22/when-can-the-test-click/)
- [Leveraging Flaky Tests to Identify Race Conditions Using Cypress](https://dresscode.renttherunway.com/blog/leveraging-flaky-tests)
- [Retry-ability](https://docs.cypress.io/guides/core-concepts/retry-ability.html)
