# VSA-QA End-to-end testing

**[Work In Progress]**

## What is End-to-end (e2e) testing?

End-to-end (e2e) testing on VA.gov specifically means automated browser testing.  Although not technically integration testing, browser testing does qualify as E2E -- it can reveal faults anywhere along the browser-database integration, not just the front-end.  While front-end issues are the most obvious, symptoms of some backend issues are also detectable in browser testing (e.g., missing data or page not loading).

## Who writes e2e tests?

**Front-end engineers** write e2e tests during development.

## Brand-new to e2e testing?

### VSP basic documentation

If you're brand-new to E2E testing, be sure to read [VSP's basic End-to-end testing docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/testing/end-to-end).  This VSA-specific documentation here _supplements_ that information.


## VSA-specific help

Currently, e2e tests are reviewed by regular code-reviewers during pull-requests.  Going forward, VSA-/VSP-QA will also participate in e2e-test reviews in a more formal way, when capacity allows.

Much of the help offered here is intended to improve e2e test-coverage, and to that end facilitate the future expansion of review-audience.  Test-coverage analyses should become easy and straightforward, even if done by non-Engineers or someone unfamiliar with your product/feature.

### E2E best practices

- **Structure & describe suites/tests to reflect documented Use Cases**:
  - Organize test suites (`describe`s) similar to how the Use Cases are organized.
  - Make your description strings in your `describe`s and `it`s more semantic for reviews by external reviewers.  Reviewers should easily tell which suites/tests map to which Use Cases, without knowing much about your product/feature.
- **Use data-testid attribute selectors**:
  - Replace undescriptive CSS selectors with semantic `data-testid` attribute selectors, especially for elements called-out in Use Cases.  External reviewers should easily tell which assertion maps to which Use Case or sub-requirement.  E.g., for a Facility-Locator requirement of a faciility name-link in all results, instead of asserting `cy.get('.location-result a').should('be.visible')`, add `data-testid="facility-name-link"` to the element and assert `cy.get('[data-testid="facility-name-link"]').should('be.visible')`.


