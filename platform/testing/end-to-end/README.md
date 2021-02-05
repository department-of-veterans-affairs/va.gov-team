# End-to-end testing (Frontend)

End-to-end (e2e) testing on VA.gov is accomplished using browser tests written with Cypress.

Cypress is a testing tool that is used to test the entire frontend flow of a product (this is often referred to as end-to-end testing). As opposed to unit testing, which tests the smaller units of logic that comprise the product, end-to-end tests validate the behavior of the product at a higher level by simulating how a user might interact with it.

Frontend developers building products on VA.gov write Cypress tests alongside the source code for their applications. Additionally, there is a form tester that automates Cypress end-to-end (E2E) tests on VA.gov form applications. In the tests, developers define the user actions to be performed on the application and the expected results of those actions. The tests can then be run to follow all the defined user actions and report any deviations from the expected results.

------

## Documentation

- [Writing e2e tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/)
- [How to use the form tester](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/cypress/support/form-tester)
- [How to migrate existing Nightwatch tests to Cypress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/end-to-end/cypress-migration-guide.md)

------

## Points of contact

For support with Cypress, please reach out to the [#vsp-testing-tools-team](https://dsva.slack.com/channels/vsp-testing-tools-team) in Slack.

------

## Examples

[Cypress test for VAOS](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vaos/tests/e2e/appointment-list.cypress.spec.js)

[Cypress test for the 21-526EZ form using the form tester](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/disability-benefits/all-claims/tests/all-claims.cypress.spec.js)

------

## Version Notes

Beginning 8/1/20, VSP is requiring that all teams building on VA.gov use Cypress for newly written functional tests. We are encouraging — but not requiring — teams to migrate legacy tests from Nightwatch into Cypress.

------

_This document is intended for use by VFS teams. For VSP documentation about Cypress, including product management artifacts, see [cypress_e2e_testing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/cypress_e2e_testing)._
