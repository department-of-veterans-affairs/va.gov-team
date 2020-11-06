# Front end VAOS testing guidance

## Testing tools used

- Cypress (test runner for browser tests)
- Mocha (test runner)
   - Jest has been considered for the va.gov platform, and it is used for some platform specific tests, but it's currently
     significantly slower than our Mocha tests
- Chai (assertion library)
- Sinon (mocking library)
- React Testing Library (React and DOM testing utility library)
- Enzyme (React testing utility library)
   - Moving away from in favor of React Testing Library

## What type of test should I write?

Most of our tests should be tests that render a single page and test all the Redux and component logic associated with that page through React Testing Library. When we need to test the overall flow of the application through different pages and paths through the forms, we should use Cypress. There's a grey area here about how to test behavior that doesn't require going through the full flow, but interacts with more than one page. In cases like that, we should choose wherever is easier to write a reliable test. If there's plain JS logic we want to test separate from the React component where it's used, we can write plain JS unit tests. We might want to do this for JS that is used in multiple components, or for logic that is difficult to cover all branches in a UI component test.

## What types of things should I test?

Generally, we want to focus on verifying that things that are important to the user are happening. We want to avoid testing things that are only important to us developers, like implementation details in a component. So you should test things like:

- Validation messages appear under the correct conditions
- The appropriate UI is displayed depending on data fetched
- Error messages are displayed during the different failure states
- When a user takes an action on the page, the appropriate UI changes and data fetches are made
- Focus is maintained at the correct place and important text/content is rendered semantically
  - This may seem like testing implementation details, but a header marked up incorrectly or focus being lost can have significant impact on screen reader users
  
You can use our code coverage tooling locally or the Code Climate plugin on your PR to find code that hasn't been covered in your tests, though make sure you're thinking through what `expect` statements you need to write. Code coverage only tells you that code was run, it doesn't tell you that your test will actually fail when something breaks.
  
For form pages, you'll often want to have tests for each of these:

- The page renders with the correct number of form elements
- The page displays validation messages for required data if you submit without entering them
- The page submits successfully if all required info is filled out
- If you unmount and remount the page with the same store, the previously entered form data is still there

Plus any other conditional UI logic that exists on the page.

## My page depends on data setup on other pages, how should I create that in my integration test?

Generally, we want to test components in the context a user is using them, which means hooked up to Redux and after other component logic on other pages has been executed. This isn't always feasible, like if we're testing that the form confirmation page displays data correctly and we'd need to essentially render all the pages before it for each test. Here's what we should try in priority order:

1. Write or use a helper that renders a page and sets data for a particular field
   - We do this with the type of care page pretty often
   - This route isn't feasible if you have 3 or 4 pages you need to set up
2. Call the Redux actions that set up your data directly
   - Most integration tests create a test store, so you can call `store.dispatch` to dispatch actions
3. Mock the initial state of the Redux store directly
   - You may need to copy over elements from the normal initial state, which is in the reducer code
   - This should be a last resort, since it means that if we change the structure of the Redux state in the future, the test must change.
4. Mount an version of the component unconnected to Redux and pass props directly
   - You should almost never need to do this.

## Browser (e2e) test notes

- Browser tests on the va.gov platform (called e2e tests) are tests that are run in a real browser, with a mock backend
- We use Cypress to write these tests, though there are legacy Nightwatch tests elsewhere on va.gov
- Our Cypress tests should cover the major paths through the application and fail if a user gets stuck.
- Any routing related logic should be covered in browser tests (i.e. redirects, path logic, etc)
- In an ideal world, all our tests would be run in a browser, but the current downsides to Cypress/browser testing are:
   - Running tests in a browser is slower than running tests in Node, and browser tests can still be somewhat flaky
   - Browser tests require us to always test against the full application. We can't pick and choose specific pages to test, we have to test the full appointment list or the full new appointment flow.
      - In Node, we have the ability to mock code that isn't ours to speed up testing
   - Browser tests require us to run Webpack and fully bundle all our JS code before running any test, which is slow
   - Generally, [this article](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests) is a good breakdown of the types of testing and tradeoffs.

## Integration test notes
- Integration tests for us mean tests that cover multiple components/redux logic, but are not run in a browser
- Good integration tests should
   - Render a high-level a component (like a component covering a whole page or tab)
   - Verify that the component is working by checking for things a user would see, like text or DOM elements with specific roles, rather than class names
   - Mock fetch calls and global user/site Redux state
   - Mock fetch calls in a way that ties the mock data to specific urls, so that tests fail if the urls are constructed incorrectly
   - Avoid mocking VAOS specific Redux state or props; let as much of our code run in the test as possible
- Integration tests should be our primary source of tests, because they are the best balance of reliability and developer time
- We should still leave tests that incorporate React Router to the browser tests, but we should verify in these tests that we are pushing the correct urls to the router when necessary
- React Testing Library is the easiest way to write tests that meet the guidelines above, but Enzyme is still usable.

## Unit test notes
- Write unit tests for plain JS code, like data transformations
- Reducers should also be unit tested, if they have complex logic
- Action creators can be unit tested or covered in integration tests, since they're typically coupled to specific component interactions
- Mostly avoid unit tests for low and mid level React components
   - You may need to write them to cover loading or error logic that is hard to trigger in integration tests
   - Common UI components used in multiple contexts may need unit tests, but we can write them like integration tests, and avoid making them conditional on implementation details
- We can remove certain unit tests as we get better integration test coverage for different functionality
   - Unit tests for components that are mostly organizational and used in one context are good candidates here. 
   - Components that were created because we need to use them in multiple contexts may still be candidates for unit tests
