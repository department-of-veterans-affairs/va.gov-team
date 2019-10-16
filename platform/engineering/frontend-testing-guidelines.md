# Testing Guidelines

Front end apps on `vets-website` should have unit tests and end to end tests. It is the application team's responsibility to create and maintain adequate automated test coverage for their applications. 

## Unit tests 

- New code added to `vets-website` should be unit tested
- Updated code should pass or adjust existing unit tests
- Unit tests should cover at least 75% of code paths 
- See the Client Application Documentation site for [conventions and tooling used for unit tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-unit-test)

## End-to-end tests 

- Applications that use the VA Forms System should have end-to-end tests
- These tests validate multi-page applications with client-side routing. They are primarily used to assert that:
  - Client applications render their inputs
  - Client-side navigation occurs when the required fields are populated
- See the Client Application Documentation site for [conventions and tooling used for end to end tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/)

## Accessibility tests

- Client applications **must** include accessibility tests in their end-to-end suite.
  - Pull requests without accessibility test coverage will not be accepted.
  - These tests should be run on all client-side routes and critical user interactions.
  - Use the Nightwatch helper function [axeCheck.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) to run an accessibility check.
