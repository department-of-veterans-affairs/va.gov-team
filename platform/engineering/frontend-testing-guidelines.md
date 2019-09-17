# Testing Guidelines

Front end apps on `vets-website` should have unit tests and end to end tests. It is the application team's responsibility to create and maintain adequate automated test coverage for their applications. 

## Unit tests 

- new code added to `vets-website` should be unit tested
- updated code should pass or adjust existing unit tests
- unit tests should cover at least 75% of code paths 
- See the Client Application Documentation site for [conventions and tooling used for unit tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-unit-test)

## End to end tests 

- applications that use the VA Forms System should have end to end tests 
- these tests validate multipage applications with client-side routing. They are primarily used to assert that:
  - client applications render their inputs
  - client-side navigation occurs when the required fields are populated
- See the Client Application Documentation site for [conventions and tooling used for end to end tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/)
