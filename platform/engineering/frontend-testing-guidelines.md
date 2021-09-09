# Testing Guidelines

Front end apps on `vets-website` should have unit tests and end-to-end tests. It is the application team's responsibility to create and maintain adequate automated test coverage for their applications. 

## Unit tests 
----

## We're moving our docs! 
#### Find [the latest version of this section](https://depo-platform-documentation.scrollhelp.site/developer-docs/Unit-tests.1836187655.html) on the Platform website.

#### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

- New code added to `vets-website` should be unit tested.
- Updated code should pass or adjust existing unit tests.
- Unit tests should cover at least 75% of code paths.
- See the Client Application Documentation site for [conventions and tooling used for unit tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-unit-test).

## End-to-end tests 

- Applications should have end-to-end tests.
- Applications that are built with the VA Forms Library should be tested with the [form tester](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/cypress/support/form-tester).
- These tests validate multi-page applications with client-side routing. They are primarily used to assert that:
  - Client applications render their inputs
  - Client-side navigation occurs when the required fields are populated
- See the Client Application Documentation site for [conventions and tooling used for end to end tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/).

## Accessibility tests

- Client applications **must** include accessibility tests in their end-to-end suite.
  - Pull requests without accessibility test coverage will not be accepted.
  - These tests should be run on all client-side routes and critical user interactions.
  - Use the Cypress custom command [`cy.axeCheck()`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/cypress-migration-guide.md#accessibility) to run an accessibility check.
- Tests written with the form tester will automatically test accessibility.
  - No explicit accessibility testing is required with such tests.
  - On every page, accessibility is checked once upon navigating to that page and again after filling out the page (or running its page hook) and expanding all expandable content.
