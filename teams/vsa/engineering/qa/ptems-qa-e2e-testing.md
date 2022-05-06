# PTEMS-QA End-to-end testing

**[Work In Progress]**

## Who should read this?

- QA Engineer
- Front-End Engineer

## What is End-to-end (e2e) testing?

End-to-end (e2e) testing on VA.gov specifically means automated browser testing.  Although not technically integration testing, browser testing does qualify as E2E -- it can reveal faults anywhere along the browser-database integration, not just the front-end.  While front-end issues are the most obvious, symptoms of some backend issues are also detectable in browser testing (e.g., missing data or page not loading).

## Who writes e2e tests?

**Front-end engineers** write e2e tests during development.

## Brand-new to e2e testing?

### VSP basic documentation

If you're brand-new to E2E testing, be sure to read [VSP's basic End-to-end testing docs][vsp-e2e-docs].  This PTEMS-specific documentation here _supplements_ that information.

### Regression testing

Going forward, VSP-QA intends regression testing to become a more formal aspect of QA.  Currently, regression testing is informally included in e2e tests.  PTEMS- and Platform-QA will be looking to implement a process by which regression and new-feature tests can be separated/organized/managed.  We'll document process developments here as progress is made, and we'll also be reaching out to team engineers for input during our research/planning.


## PTEMS-specific help

Currently, e2e tests are reviewed by regular code-reviewers during pull-requests.  Going forward, PTEMS-/Platform-QA will also participate in e2e-test reviews in a more formal way, when capacity allows.

Much of the help offered here is intended to improve e2e test-coverage, and to that end facilitate the future expansion of review-audience.  Test-coverage analyses should become easy and straightforward, even if done by non-Engineers or someone unfamiliar with your product/feature.

### E2E best practices

- **Structure & describe suites/tests to reflect documented Use Cases**:
  - Organize test suites (`describe`s) similar to how the Use Cases are organized.
  - Make your description strings in your `describe`s and `it`s more semantic for reviews by external reviewers.  Reviewers should easily tell which suites/tests map to which Use Cases, without knowing much about your product/feature.
- **Use data-testid attribute selectors**:
  - Replace undescriptive CSS selectors with semantic `data-testid` attribute selectors, especially for elements called-out in Use Cases.  External reviewers should easily tell which assertion maps to which Use Case or sub-requirement.  E.g., for a Facility-Locator requirement of a faciility name-link in all results, instead of asserting `cy.get('.location-result a').should('be.visible')`, add `data-testid="facility-name-link"` to the element and assert `cy.get('[data-testid="facility-name-link"]').should('be.visible')`.
- **Include more negative tests**:
  - Length/format/pattern validations: under-minimum/over-maximum input lengths, letters into number fields, invalid emails.
  - Illogical, edge-case inputs: future dates into birthday, divorce date before marriage date, separation date before end of active service, etc.
  - Double-click submission buttons.
  - Anything else to try harder breaking your product/feature.
  
## See also

- [Cypress-TestRail integration][cy-tr-integration]
- [Cypress Flaky Tests][cy-flaky-tests]

[vsp-e2e-docs]: https://depo-platform-documentation.scrollhelp.site/developer-docs/End-to-end-testing.1738965071.html
[cy-tr-integration]: testrail/ptems-qa-cypress-testrail.md
[cy-flaky-tests]: ptems-qa-cy-flaky-tests.md


