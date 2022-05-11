# PTEMS-QA End-to-end testing

## Who should read this?

- QA Engineer
- Front-End Engineer

## What is End-to-end (e2e) testing?

End-to-end (e2e) testing on VA.gov specifically means automated browser testing.  Although not technically integration testing, browser testing does qualify as E2E -- it can reveal faults anywhere along the browser-database integration, not just the front-end.  While front-end issues are the most obvious, symptoms of some backend issues are also detectable in browser testing (e.g., missing data or page not loading).

## Who writes e2e tests?

**Front-end engineers** write e2e tests during development.

## Brand-new to e2e testing?

### Platform's basic documentation

If you're brand-new to E2E testing, be sure to read [Platform's basic End-to-end testing][platform-e2e] docs.  This PTEMS-specific documentation here _supplements_ that information.

### Regression testing

Currently, regression testing is implicitly handled using the automated unit and e2e tests that are maintained as part of development work.  Going forward, Platform-QA may formally require regression-test reports for Midpoint and Staging Reviews.


## PTEMS-specific help

While e2e tests are regularly reviewed by code-reviewers in pull-requests, PTEMS-QA will also help validate & improve the tests as capacity allows.  Anytime you have a question/issue coding e2e tests, feel free to reach out to PTEMS-QA for guidance.

### E2E best practices

Consult these resources:

- [Cypress' Best Practices][cy-best-practices]
- [Platform's Cypress Best Practice][platform-cy-best-practices]
  
## See also

- [Cypress-TestRail integration][cy-tr-integration]
- [Cypress Flaky Tests][cy-flaky-tests]

[platform-e2e]: https://depo-platform-documentation.scrollhelp.site/developer-docs/End-to-end-testing.1738965071.html
[cy-best-practices]: https://docs.cypress.io/guides/references/best-practices
[platform-cy-best-practices]: https://depo-platform-documentation.scrollhelp.site/developer-docs/Best-practices-for-using-Cypress.1870430211.html
[cy-tr-integration]: testrail/ptems-qa-cypress-testrail.md
[cy-flaky-tests]: ptems-qa-cy-flaky-tests.md


