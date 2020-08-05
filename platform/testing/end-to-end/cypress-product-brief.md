# Cypress Testing — Product Brief

### What is it?

Cypress is a testing tool that is used to test the entire frontend flow of a product (this is often referred to as end-to-end testing). As opposed to unit testing, which tests the smaller units of logic that comprise the product, end-to-end tests validate the behavior of the product at a higher level by simulating how a user might interact with it. A relatively new testing framework with strong support from the software testing community, Cypress provides an intuitive API for automating user interactions and convenient debugging features that promote test-driven development.

### How does it work?

Cypress replaces the VA.gov Platform's previous use of Nightwatch. Frontend developers building products on VA.gov write Cypress tests alongside the source code for their applications. Additionally, there is a form tester that automates Cypress end-to-end (E2E) tests on VA.gov form applications. In the tests, developers define the user actions to be performed on the application and the expected results of those actions. The tests can then be run to follow all the defined user actions and report any deviations from the expected results.

------

### Product documentation

- [How to migrate tests to Cypress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/end-to-end/cypress-migration-guide.md)
- [How to use the form tester](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/cypress/support/form-tester)
- [More about e2e tests](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/)
- [Cypress release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/cypress_e2e_testing/cypress_e2e_testing_rollout_plan.md)

------

### Point of contact

For support with Cypress, please reach out to the frontend support developer in Slack #vsp-platform-support. You can find out who's on support by viewing the channel description. 

For all other questions, feel free to reach out directly to the [VSP FE Tools team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/frontend/fe-tools-team-charter.md). 

------

### Examples or references of usage

[Cypress test for VAOS](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vaos/tests/e2e/appointment-list.cypress.spec.js)


[Cypress test for the 21-526EZ form using the form tester](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/disability-benefits/all-claims/tests/all-claims.cypress.spec.js)

------

### Version Notes

Beginning 8/1/20, VSP is requiring that all teams building on VA.gov use Cypress for newly written functional tests. We are encouraging — but not requiring — teams to migrate legacy tests from Nightwatch into Cypress.

------
