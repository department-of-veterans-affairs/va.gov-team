The purpose of this document is to outline best practices when working with Cypress E2E tests. 

## Working with Dates and Time

### Use Mocked Dates Whenever Possible
When your tests involve time-dependent logic (e.g., `Date.now()`, `setTimeout`, or time-based UI), always use **mocked dates** to guarantee consistent results.

**Recommended Approach:**
- Define a mocked date explicitly
```javascript
const mockToday = new Date('2025-06-02T12:00:00Z')
```

- Or use a shared constant from your project (e.g., `mockToday`).
 Then apply it at the start of your test using `cy.clock()`:
```javascript
cy.clock(mockToday, ['Date']);
```

> ⚠️ **Avoid:**
```javascript
 cy.clock(new Date(), ['Date']);
```
> Using the real current time introduces non-determinism and can cause flaky tests.

**Set up mocked dates in tests hooks**
To ensure all tests within a suite use consistent time behavior, initialize the mocked clock in a `beforeEach()` block.

This ensures the fake clock is set **before** visiting the page or triggering any code that reads the current time.
```Javascript 
// mye2eTests.cypress.spec.js

beforeEach(() => {
  // Other setup steps...
  cy.clock(mockToday, ['Date']);
});

describe('myE2ETests', () => {
  it('performs a time-dependent operation', () => {
    cy.visit('/some/page');
    // Your test logic...
  });
});
```
> 💡 Always call `cy.clock()` **before** `cy.visit()` or any action that might create timers or call `Date.now()`.


**Advancing Time Correctly** 
When your test needs to simulate time passing (for example, waiting for a timer or timeout), advance the mocked clock instead of using real delays.

**❌ Incorrect:**
```Javascript
cy.tick(35000));
```
This works only if a clock is already in place. However, Cypress and many linters may still warn about dynamic or unmocked time if the clock context is ambiguous.

**✅ Correct:**
Use the clock callback chain to explicitly tick the fake clock instance.
```javascript
cy.clock(mockToday, ['Date']).then(clock => {
  clock.tick(35000);
});
```
or, if the clock was already set in `beforeEach`:
```javascript
cy.clock().then((clock) => {
  clock.tick(35000);
});
```
This ensures you’re advancing the **mocked** clock, not the real one.
