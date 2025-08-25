# Testing Tools Audit

This document details the decisions on the testing tools and processes we will continue using or adopt going forward.

As part of the audit leading up to the decisions, we interviewed VFS FE engineers to get feedback on our testing tools and processes. We identified themes among the feedback as part of a [discovery exercise using Mural](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1585669798190/a3ffc49a892bc648e91e8514a893fa4d377b75da). Our assumptions and hypotheses about potential improvements were validated by this research and culminated in the following decisions.

## Unit Testing

- We will continue using Mocha and Enzyme for unit testing.
- Coverage data will be gathered with Istanbul.

### Notes / Justifications

Overall, they have worked well for most developers.

Enzyme may not offer the most intuitive APIs for some developers, but ultimately works and can be figured out using documentation. Many developers also find it helpful to use existing unit tests to guide in writing new ones.

### Next Steps

There can be issues with improper setup/teardown that affects other tests, often involving timeouts or shared global states.
- Possible improvement might be to add helpers to simplify these steps and better isolate tests.


## E2E Testing

### Decisions

- We are replacing Nightwatch with Cypress as our official E2E testing solution.
- The auto form test runner will also be rewritten in Cypress.

### Notes / Justifications

- Expected to deliver a better developer experience.
  - Supports multiple browsers with minimal configuration. Currently supports Chrome, Firefox, and Edge.
  - Provides a syntax that is easy to write and understand.
  - Built on top of Mocha, so it will be familiar developers working on vets-website.
    - This pairs well with our decision to continue using Mocha.
  - Additionally, it's bundled with Chai and Sinon, which we also already use.

- Tests will be more stable and run faster, especially with parallelization.
  - Validations have automatic retries and timeouts but also have the option to define specific timeouts.
  - Runs directly and synchronously in the browser rather than issue asynchronous commands like Selenium.
  - Broken tests can be debugged using the time machine feature that lets you step through the test.
  - Having the tests run directly in the browser grants access to anything you wish to expose globally, which can also help with debugging.
  
- We previously considered TestCafe for its wider cross-browser support, but we started leaning towards Cypress
  - There is already some familiarity with Cypress, and certainly more so than TestCafe.
    - The Mocha-based syntax will also be more familiar and facilitate a smoother transition than a new and different paradigm.
  - Cypress roadmap includes additional cross-browser support.
    - Recently added support for Firefox and Edge and is still looking into IE11 and Safari.
    - Support for remaining browsers might be available later when we want to focus more on automated cross-browser testing.
  - We don't currently have an official cross-browser testing plan with Nightwatch anyway
    - Lack of automated cross-browser testing has not been a pain point, but more of a nice-to-have
    - Going from no cross-browser to a few supported browsers is already an improvement

### Next Steps

We will integrate Cypress into our processes and recommend using Cypress going forward.
- Include it in our package and create scripts to run tests with it.
- Integrate it into our CircleCI pipeline.
- Set up parallelized tests or document a way for VFS teams to run tests in parallel.
- Possibly look into the GitHub Checks integration.

We will continue to support the option of using Nightwatch for existing tests but recommend Cypreses for new tests.
- It would be too burdensome to migrate all existing tests. 
- We anticipate teams will naturally prefer the experience of using Cypress and potentially migrate existing tests themselves to consolidate their E2E test suite.

We can consider integrating Cypress with a cross-browser testing platform if there's a need when Cypress begins supporting the remaining browsers.
- BrowserStack/Sauce Labs is another decision to be made if it comes down to it.

We can monitor the performance of Cypress tests over time.
One option we may consider, depending on how long the tests take to run, is to run them independently of CI as "smoke tests".
- The advantage is that developers won't have to wait for slow, brittle E2E tests to run before merging their code.
- The smoke tests could run once before deploy. We could then assess the severity of any breakages, either allowing the deploy to complete or re-running the tests.
- This is a trade-off between agility and stability and a question of what value the E2E tests provide.  How much stability do the tests provide if they themselves are not stable?


## Integration Testing

### Decisions

We will introduce integration testing with PACT, a consumer-driven contract test framework.

### Notes / Justifications

We currently lack any true integration testing. Tests currently use mock data that is created specifically for the tests and not validated against the API.

https://docs.pact.io/faq/convinceme

The testing process starts from the consumer (front-end), because an API endpoint is meaningful to test only if it's being consumed.

Relies on concrete examples rather than schemas
- Ultimately need some example data to run the test anyway
- If you use only schemas, you have to generate data that usually isn't helpful or provide meaningful or readable documentation
- Using both schema and example is redundant
- The schema is basically implied from the example(s)

Performs a different function than VCR
- Works like VCR in reverse.
  - VCR records provider behavior and verifies consumer.
  - Pact records consumer behavior and verifies provider.

Performs a different function than Swagger
- It is a testing solution rather than documentation.
- Uses "specification by example" and happens to be written in self-documenting fashion.

### Next Steps

Refine the previously [defined workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/d12ab0ecc2f57cf0ed1498798b6b0e888546c5e8/teams/vsp/teams/tools/2019-12-11-consumer-driven-contract-testing-workflow.md).

Discuss with BE Tools on integrating Pact into our testing process.

Demonstrate usage with an example.
