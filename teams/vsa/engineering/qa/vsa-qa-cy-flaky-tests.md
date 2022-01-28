# Cypress E2E Flaky Tests

Flaky tests undermine product quality assurance, as they produce inconsistent
results that are not caused by actual app-code changes. The challenge
of detecting flaky tests is that the conditions likely to cause flakes are often
race conditions in async test-code, and those conditions are least likely to
occur on your local machine.

## How to minimize flakes

Here are some Cypress best-practices to minimize flaky E2E tests.

### Expose more flakes locally with cy-tr-helper

Test-code race-conditions are more likely to occur if you make your local
machine "busier". Use [cy-tr-helper][cth-readme] to add 2 layers-of-abstraction on top of
Cypress' own test-runner.

### Organize your intercepts

`cy.intercept()`s are typically your prime suspects for flakes.

#### Register intercepts before visiting your page

Before `cy.visit()`, make sure all your `cy.intercept()`s are registered first.
Any intercepts registered after visits are liable to be registered too late.
During test-development (before you integrate your spec with TestRail), this
kind of flake may not be exposed, so just get in the habit of registering all
intercepts first for your page before you visit it:

```js
cy.intercept('v0/feature-toggles*', mockFeatures);
cy.intercept('v0/another-data-endpoint', mockData);
cy.intercept('v0/yet-another-data-endpoint', moreMockData);

cy.visit('/my-page');
```

#### Isolate common-endpoint intercepts that return different responses

If you have different mock-responses to return for intercepts of the same
endpoint path, be sure to separate the intercepts into their own describes/contexts:

```js
describe('my spec', () => {
  beforeEach(() => {
    cy.intercept('v0/...', sameMockDataForAllTests);
  });
  describe('happy path', () => {
    beforeEach(() => {
      cy.intercept('v0/common-endpoint', happyPathMockData);
    });
    it('should work', () => {...});
    ...
  });
  describe('500 error', () => {
    beforeEach(() => {
      cy.intercept('v0/common-endpoint', error500MockData);
    });
    it('should show error-message for 500', () => {...});
    ...
  })
});
```

## Further reading

VSA-QA will continue to add more information on flaky tests as more specific cases are exposed.  In the meantime, read [this intercept-problems article][bahmutov-intercepts-article] by Gleb Bahmutov, former VP of Engineering, Cypress.io.

[cth-readme]: https://github.com/department-of-veterans-affairs/vets-website/tree/master/script/cypress-testrail-helper
[bahmutov-intercepts-article]: https://glebbahmutov.com/blog/cypress-intercept-problems/
