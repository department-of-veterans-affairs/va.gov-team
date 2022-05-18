# Cypress E2E Flaky Tests

Flaky tests undermine product quality assurance, as they produce inconsistent
results that are not caused by actual app-code changes. The challenge of
detecting flaky tests is that the conditions likely to cause flakes are often
race conditions in async test-code, and those conditions are least likely to
occur on your local machine.

## Start with Platform documentation first

You should FIRST consult [Platform's Flaky Tests Management][platform-flaky-tests]
doc. That doc is the "central" documentation for ALL teams,
not just PTEMS. Sections here on this page will be incrementally moved to
Platform's doc, as Platform-team capacity permits. Whatever's still here is
supplemental to that central doc.

## How to minimize flakes

Here are some _additional_ Cypress best-practices to minimize flaky E2E tests.

### Organize your intercepts

`cy.intercept()`s are typically your prime suspects for flakes.

#### Register intercepts BEFORE visiting your page

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

#### Override intercepts only across SIBLING contexts/tests

If you have to override intercepts to mock different responses, do so only at
the same context-/test-level (i.e., only across siblings):

```js
describe('my spec', () => {
  beforeEach(() => {
    // this intercept cannot be overriden in child/descendant contexts/tests.
    cy.intercept('endpoint0', mockDataForAll);
  });

  context('scenario A', () => { // you can use describes too.
    beforeEach(() => {
      // this intercept cannot be overriden in child/descendant contexts/tests,
      // but can be in sibling contexts.
      cy.intercept('endpoint1', mockDataA);
    });

    it('should work', () => {
      // This intercept can be overriden in sibling tests.
      cy.intercept('endpont2', mockData1);
      cy.visit('/page-making-endpoint2-api-call');
      ...
    });
    it('should show error-message', () => {
      // This intercept overrides the sibling test's above (mockData1).
      cy.intercept('endpont2', mockData2);
      cy.visit('/page-making-endpoint2-api-call');
      ...
    });
  })

  context('scenario B', () => {
    beforeEach(() => {
      // this intercept overrides the sibling context's above (mockDataA).
      cy.intercept('endpoint1', mockDataB);
    });
    ...
  })
});
```

Of course, if you have tests with intercept(s), be sure to only visit the page
AFTER all intercepts are registered.

### Alias intercepts and wait for them before asserting

As a last resort, when flakes persit even after you've organized them as
outlined above, create intercept aliases and wait for them after visiting the page and before your
assertions:

```js
describe('my spec', () => {
  beforeEach(() => {
    // this intercept gets cleared and re-registered with each child/descendant context/test.
    cy.intercept('endpoint0', mockDataForAll).as('mockDataForAll');
  });

  context('scenario A', () => {
    beforeEach(() => {
      // this intercept gets cleared and re-registered with each child/descendant test.
      cy.intercept('endpoint1', mockDataA).as('mockDataA');
    });

    it('should work', () => {
      cy.intercept('endpont2', mockData1).as('mockData1');
      cy.visit('/page-making-endpoint2-api-call');
      // wait for ALL intercepts before asserting.
      cy.wait(['@mockDataForAll', '@mockDataA', '@mockData1']);
      cy.findByTestId('some-data-table').should('exist');
      ...
    });
    it('should show error-message', () => {
      cy.intercept('endpont2', mockData2).as('mockData2');
      cy.visit('/page-making-endpoint2-api-call');
      // wait for ALL intercepts before asserting.
      cy.wait(['@mockDataForAll', '@mockDataA', '@mockData2']);
      cy.findByTestId('some-error-message').should('exist');
      ...
    });
  })
});
```

## If you have further questions...

- Start with Platform QA Standards: **Peter Hill**
- For PTEMS-specific questions, PTEMS-QA: **Tze-chiu Lei**

## Further reading

PTEMS-QA will continue to add more information on flaky tests as more specific
cases are exposed. In the meantime, read [this intercept-problems
article][bahmutov-intercepts-article] by Gleb Bahmutov, former VP of
Engineering, Cypress.io.

[platform-flaky-tests]: https://depo-platform-documentation.scrollhelp.site/developer-docs/Flaky-test-management-in-Cypress.1870430218.html
[cth-readme]:
https://github.com/department-of-veterans-affairs/vets-website/tree/main/script/cypress-testrail-helper
[bahmutov-intercepts-article]:
https://glebbahmutov.com/blog/cypress-intercept-problems/
