__Please note: some links in this document point to the vets.gov-team repo.__

# State of E2E Testing on VA.gov
We currently have multiple E2E testing solutions, mostly on the front-end (JavaScript-based). Not every app or feature on VA.gov has full E2E test coverage, as we do not enforce a required amount of coverage to push changes. However, almost all of the existing tests are written in Nightwatch, a testing framework that runs on Selenium, and run as part of CI. These tests do not actually invoke the VA API; when writing these tests, responses need to be mocked for any anticipated API requests.

The Nightwatch tests can run on different browsers through an integration with Sauce Labs, which is a cross-browser testing platform, but we do not run tests on this platform as part of CI. This solution allows us to test on various combinations of OSes and browsers, including IE. However, from cursory attempts at running the full suite of E2E tests across a specific version of each browser under our current (free?) plan, this solution did not appear to provide reliable or timely results. The tests seemed to experience high latency from serving the local assets to the test instance through a proxy, or perhaps loading assets in general. For pages that require a lot of resources such as Facility Locator, the tests frequently timed out. Running a single test on one browser seemed to work fairly consistently but still took a very long time to complete.

There has been some preliminary work done with the Puppeteer testing library. In particular, there is a form filler utility written with Puppeteer that can be extended to work on any of the forms. So far, it has only been applied to an E2E test of the 526 disability claim form. This library is also being leveraged for some visual regression testing.

Finally, there is a WIP integrated testing solution using Capybara for HCA. It runs on Selenium, similar to the Nightwatch tests. The difference is that this will run off of the Rails back-end, with the benefit of being able directly interact with Rails to populate the database with mock data.


## Considerations / Priorities
There are various non-Selenium solutions on the rise with the advantages of running tests faster and being easier to implement. As mentioned, we have some experience already with Puppeteer. Cypress and TestCare are frameworks that we could consider trying out as well.

### Integration with VA API
The current E2E solution involves creating mock responses within the tests rather than invoking the API. It makes sense to mock responses from third party integrations to limit failures to components that we can control. However, a true E2E test should verify the interaction with the back-end and ensure that the logic there is sound. Note that the API makes use of Betamocks for mock responses, though limited to idempotent actions.

There are currently two E2E tests that run against an actual API in the current environment. One possible drawback of testing against the actual instance, such as Staging, is that people could be manually testing in the same environment and make it difficult for the tests to consistently start from the same state.

### Cross-browser Testing
After a recent IE11 bug that broke the menu, we have some impetus to carefully consider cross-browser testing as an important feature of our solution.

Some popular non-Selenium alternatives do not yet support full cross-browser functionality, namely for IE. In the case of Puppeteer, Firefox support is already in an experimental state, but there are no plans for IE. There is a third-party package that appears to add IE support, but it might not be dependable for long-term support. Cypress only currently supports Chrome but [has cross-browser support on its roadmap](https://github.com/cypress-io/cypress/issues/310). TestCafe already [supports every browser out of the box](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html#officially-supported-browsers) and [has plugins for integrating with Sauce Labs and BrowserStack](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html#browsers-in-cloud-testing-services).

### Test Schedule
How often should we run the tests? Once the tests integrate the API, it might add too much overhead to run the tests on each commit in a PR. Maybe consider running once a day, perhaps before deploying. Maybe deploy to a dedicated test instance.

### Visual Regression
Both Selenium and Puppeteer can support visual regression testing, but we already use Puppeteer for that purpose. Cypress supports it as well, but also offers video playback and the ability to step backwards (Time Travel) through the test for debugging purposes, which can be incredibly helpful for development. TestCafe can capture screenshots and video as well.

### Accessibility
We currently do axe accessibility checks in our Nightwatch tests. It has not yet been integrated into the form filler utility, but there is a package (`axe-puppeteer`) that allows us to use axe with Puppeteer. There are similar packages for Cypress and TestCafe. We also have utilities for such features as keyboard testing that we might need to refactor to work within the framework we end up using.

### Transition / Conversion
How tedious or time-consuming will it be to convert our Nightwatch tests to Puppeteer or another non-Selenium solution? Or if we don't even continue to use Puppeteer, what is the level of effort involved in converting our current Puppeteer-based utilities to another framework? Furthermore, will that solution allow us to adapt our accessibility testing patterns? Documentation might be a good indicator for the ease of transition. Cypress in particular seems to have fairly comprehensive documentation with many examples, which could make it a much smoother process when handling edge cases or making design choices.

### Code Coverage
It might be nice to set a bar for code coverage, but we may want to focus first on consolidating and standardizing our E2E testing solution. Note that Cypress provides [documentation](https://docs.cypress.io/guides/tooling/code-coverage.html) on implementing instrumentation with Istanbul, which we already use for unit test coverage.


## Current Recommendation for Writing E2E Tests
With a majority of our E2E tests already written to work with Nightwatch, for the time being, it will probably be best to conform to that pattern for non-form apps. For form apps, using the Puppeteer-based form filler utility will be the quickest way to implement E2E tests.


## Resources

### How to Write E2E Tests
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-end-to-end-test/

### How to Use Sauce for Cross-Platform Testing
https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/QA/Cross-Platform%20Testing/cross-platform-testing-plan.md

### How to Run Visual Regression Tests
https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/visual-regression-testing/
