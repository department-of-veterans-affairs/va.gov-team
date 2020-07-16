# Front end VAOS testing guidance

This is a work in progress, don't take it for "official" guidance yet.

## Browser (e2e) tests

- Browser tests on the va.gov platform (called e2e tests) are tests that are run in a real browser, with a mock backend
- We have both Nightwatch and Cypress available to write these tests, we should move to Cypress as we have time
- Our Cypress tests should cover the major paths through the application and fail if a user gets stuck.
- Any routing related logic should be covered in browser tests (i.e. redirects, path logic, etc)
- In an ideal world, all our tests would be run in a browser, but the current downsides to Cypress/browser testing are:
   - Running tests in a browser is slower than running tests in Node, and browser tests can still be somewhat flaky
   - Browser tests require us to always test against the full application. We can't pick and choose specific pages to test, we have to test the full appointment list or the full new appointment flow.
      - In Node, we have the ability to mock code that isn't ours to speed up testing
   - Browser tests require us to run Webpack and fully bundle all our JS code before running any test, which is slow
   - Generally, [this article](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests) is a good breakdown of the types of testing and tradeoffs.

## Integration tests
- Integration tests mean tests that cover multiple components/redux logic, but are not run in a browser
- Good integration tests should
   - Render a high-level a component (like a component covering a whole page or tab)
   - Verify that the component is working by checking for things a user would see, like text or DOM elements with specific roles, rather than class names
   - Mock fetch calls and global user/site Redux state
   - Mock fetch calls in a way that ties the mock data to specific urls, so that tests fail if the urls are constructed incorrectly
   - Avoid mocking VAOS specific Redux state or props; let as much of our code run in the test as possible
- Integration tests should be our primary source of tests, because they are the best balance of reliability and developer time
- We should still leave tests that incorporate React Router to the browser tests, but we should verify in these tests that we are pushing the correct urls to the router when necessary
- React Testing Library is the easiest way to write tests that meet the guidelines above, but Enzyme is still usable.

## Unit tests
- Write unit tests for plain JS code, like data transformations
- Reducers should also be unit tested, if they have complex logic
- Action creators can be unit tested or covered in integration tests, since they're typically coupled to specific component interactions
- Mostly avoid unit tests for low and mid level React components
   - You may need to write them to cover loading or error logic that is hard to trigger in integration tests
   - Common UI components used in multiple contexts may need unit tests, but we can write them like integration tests, and avoid making them conditional on implementation details
- We can remove certain unit tests as we get better integration test coverage for different functionality
   - Unit tests for components that are mostly organizational and used in one context are good candidates here. 
   - Components that were created because we need to use them in multiple contexts may still be candidates for unit tests
