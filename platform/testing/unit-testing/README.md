---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----



# Frontend Unit Testing

A unit test is a test that validates the behavior of a single unit of logic disconnected from all other units of logic. All FE apps on VA.gov should have unit tests (VSP's unit testing guidance is that tests cover at least 75% of code paths).

* Mocha is our JavaScript testing framework that runs on Node.js and in the browser.
* Chai is our assertion library that we have paired with our Mocha testing framework. We encourage teams to follow Behavior Driven Development (BDD) or Test Driven Development (TDD) best practices when working with this library.
* React Testing Library is a tool that renders React components in JSDOM and allows us to test them using DOM nodes.
* Sinon is a tool that allows us to spy on functions, collect information on what a function returns, control what a function returns, control what an API call returns, and see what information that call is made with.


------

## Documentation

* [User Guide](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-unit-test/)
* [Coverage Report](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard)

------

## Points of contact

* Platform Frontend Tools Team
* Slack channel: [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support)

------

## Examples

[vets-website/src/applications/facility-locator/tests/components/](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/facility-locator/tests/components)

------
