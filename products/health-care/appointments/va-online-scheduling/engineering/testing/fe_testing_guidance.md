# Front end VAOS testing guidance

This is a work in progress, don't take it for "official" guidance yet.

## Browser tests

- Cypress/Nightwatch tests should cover the major paths through the application and fail if a user gets stuck.
- Avoid hardcoded timeouts when possible

## Integration tests
- Integration tests mean tests that cover multiple components/redux logic, but are not run in a browser
- Integration tests should strive to mock as little as possible
   - Mocking fetch calls should be the primary mocking
   - Mock fetch calls in a way that catches poorly constructed urls, i.e. by setting data based on the url
   - Mocking browser globals is ok
   - Mocking some global Redux state is ok, but mostly avoid it if possible
- Tests should rely as little as possible on React/DOM details, and instead check for text content, roles, or test ids
- Integration tests should be our primary source of tests
- We should still leave tests that incorporate React Router to the browser tests, but we should verify in these tests that we are pushing the correct urls to the router when necessary
- React Testing Library is the easiest way to write tests that meet the guidelines above, but Enzyme is still usable.

## Unit tests
- Write unit tests for plain JS code, like data transformations
- Reducers should also be unit tested
- Action creators can be unit tested or covered in integration tests, since they're typically coupled to specific component interactions
- Mostly avoid unit tests for React components
   - You may need to write them to cover loading or error logic that is hard to trigger in integration tests
   - Common UI components used in multiple contexts may need unit tests, but we can write them like integration tests, and avoid making them conditional on implementation details
- We can remove certain unit tests as we get better integration test coverage for different functionality
   - Unit tests for components that are mostly organizational and used in one context are good candidates here. 
   - Components that were created because we need to use them in multiple contexts may still be candidates for unit tests
