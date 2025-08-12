# Discovery Document: [Disability Benefits/Discovery: Document why cypress did not catch submission validation errors]

## Overview

Before proceeding with implementation, we need to conduct a focused discovery effort to understand why the Cypress maximal test did not catch regressions when required pages were removed or broken. The core issue involves the cypress.helpers.js file not failing as expected, but the root cause remains unclear.

This discovery work will inform the necessary changes to the maximal test suite and prevent premature fixes without fully understanding the problem.

- Owner: Alicia Perry
- Date: 2025-08-06
- Related Docs: [Github issue]([https://github.com/orgs/department-of-veterans-affairs/projects/1660/views/5?pane=issue&itemId=119831819&issue=department-of-veterans-affairs%7Cva.gov-team%7C114229]
)

## Goals

To understand this failure, and to figure out how to best formulate and understand testing in order to avoid regressions like this in the future. Then, once understanding has been reached, we will then want to create guidelines and suggestions for the future testing patterns for Cypress.

- Discover what exactly caused the regression and what tests should have caught the error.
- Discover how to adjust the test suite and patterns so that we pick up the failures more robustly.

## Problem Statement

We want to figure out how to tweak our test suite to catch such failures in the future so that it doesn't take down the form.

- in July, a [commit](https://github.com/department-of-veterans-affairs/vets-website/commit/8b896400558334f2aee0799595c1d6f847f96556) was released and merged into main of the vets-website repo. This change caused a regression and an overall down period that was discovered by a PM looking at the VA subreddit. From there, members of the Disability Benefits team swarmed the problem, and tracked down the above commit as the reason for the failure. It was noted that there was a failure on the CI/CD to pick up this regression, having passed both Cypress and Unit Tests. This ticket and discovery are set out to discover how to make it to where we can test for such failures again, and how to avoid running into this situation once more.
- [This postmortem documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2025/2025-06_30_Missing_Conditions_Page.md) was created after the fact, to document and track the work done after the failure. In it, it's tracked what exactly happened, how to fix it, and how to avoid it in the future.

## Discovery Questions

Key questions we need to answer during this phase.

- What was the likely root cause inside of the changes within the commit?
- What tests fail to fail in the CI/CD, or do new ones need to be written to address this hole?
- How do we then implement these tests, and what should the tests entail?

## Constraints (Optional)

Known technical, business, or organizational constraints.

- Not applicable for this approach.

## Ideas / Approaches

Brainstormed or initial solution directions.

- In looking at the Postmortem supplied, the problem that occurred was that the conditional placed on the formConfig was making it to where the newDisabilities page wasn't rendering properly. And I quote:

> This PR was under peer review at Sprint Review time when it was demoed to the team. After the demo, a refactoring was completed based on review feedback—moving code from `formConfig` in `src/applications/disability-benefits/all-claims/config/form.js` into a helper function in an established utility file (`src/applications/disability-benefits/all-claims/utils/index.jsx`) to improve testability...reviews failed to detect that the conditions details page wasn't rendering...the refactored function was returning the boolean a level below the page's `formConfig`, causing it to skip returning a value and therefore skip the conditions details page for all items.

- Solution brainstorming

- Option 1: Solution Implemented!
  - In researching this ticket, and after putting it up for review, a member of Team 1 provided the work that had been recently merged into main that fixes the issue outlined above. Please find the below merged PR that contains the new tests for testing the unhappy path: [unhappy path test pattern resource](https://github.com/department-of-veterans-affairs/vets-website/pull/37482/files). In short, new tests were added in order to catch the unhappy path of the user seeing the legacy page when they should see the modern one. There was also changes to the logic that allowed the boolean to be returned at the level that was needed in order for the conditionals to render the modern page.

## Research / Benchmarks

What has been tried, what do competitors do, relevant patterns.

## Test Gap Analysis

- What the “maximal” Cypress test missed
- The refactor changed how the PTSD conditions details page is reached (via conditional logic), but the “maximal” spec didn’t explicitly assert that the modern 0781 flow must render the conditions page for each new disability. It verified the happy path generally, not the presence of the specific gate-keeping page.
- The helper-based condition returned a boolean at the wrong level, which meant the conditions page wasn’t rendered for any items—yet the test suite still passed because no assertion failed on that precise page requirement.
- The existing helper-based “follow-up” flow checks in cypress.helpers.js weren’t strict enough to fail when the modern page was skipped; they didn’t hard-assert that the page path and fields were present per item.
Signals that should have failed CI but didn’t
- The team expected an assertion around the modern 0781 follow-up to fail (pointed at in the doc and link to cypress.helpers.js), but the spec didn’t enforce page-level presence with path/field assertions for each new disability item. That allowed the regression to slip through despite “maximal” data.
How the merged fix tightens coverage
- The fix introduces targeted logic in form.js so the modern 0781 flow returns the right item filter behavior, and it adds/adjusts Cypress checks that explicitly walk each follow-up page (NEW/SECONDARY/WORSENED) and assert the right UI elements and navigation, turning the missing page into a hard failure.
- Code example for the future where we want to make the “maximal” test fail if the modern 0781 conditions page is skipped by asserting both the URL and page-specific elements for each item:

> // cypress.helpers.js (inside the new-disabilities follow-up step)
cy.get('@testData').then(data => {
  data.newDisabilities.forEach((disability, index) => {
    cy.log(`Processing disability ${index + 1}: ${disability.condition}`);
    // Assert we're on the itemized follow-up route for this index
    cy.url().should('match', /new-disabilities\/follow-up\/\d+$/);
    // Assert the page title reflects the current disability
    cy.get('legend.schemaform-block-title')
      .should('contain', capitalizeEachWord(disability.condition));
    // Then drive the specific follow-up for NEW/SECONDARY/WORSENED/VA
    // (continue with the per-cause assertions...)
  });
});

- Negative (legacy vs modern) path guard code example:

> // given data.syncModern0781Flow === true
cy.url().should('match', /new-disabilities\/follow-up\/\d+$/);
cy.findByRole('radio', { name: /new/i }).should('exist');    // modern choice set
// ...assert presence of modern fields (primaryDescription, etc.)

## Technical Analysis of What Went Wrong

- Change that introduced the bug
  - During refactor, logic was moved from formConfig into a helper to “improve testability,” but the function ended up returning the boolean one level below the page’s formConfig, so the conditions details page was skipped for all items. In other words, the code that decides whether to render the page produced a value at the wrong scope, short-circuiting the page entirely.
- Symptom
  - Veterans in the modern 0781 flow didn’t see the PTSD conditions details page; the app silently bypassed it. The “maximal” spec didn’t fail because it wasn’t asserting on the exact page path/fields that prove the page rendered.
- Concrete fix that landed
  - form.js: itemFilter was updated to accept (item, formData) and to honor formData.syncModern0781Flow, returning a truthy value for items that should show the modern follow-up page (instead of filtering them out inadvertently). This restores the intended rendering behavior for modern 0781.
  > This is the helper that was updated to fix part of the failure:
  > // src/applications/disability-benefits/all-claims/config/form.js
itemFilter: (item, formData) => {
  if (formData?.syncModern0781Flow === true) {
    return !!item.condition;     // allow page for all items in modern flow
  }
  return !isDisabilityPtsd(item.condition);
},
- cypress.helpers.js: Tests were expanded to iterate each disability, assert page paths/titles, and exercise NEW/SECONDARY/WORSENED flows—so skipping the page now fails the build.

## Recommendations

What is recommended to fix this problem?

## Strengthen test oracles for page gating

- Assert page identity, not just flow success. For every gated page (like the modern 0781 conditions page), add required assertions on:
  - exact route (/new-disabilities/follow-up/:index)
  - presence of page-specific legends/fields
  - per-item iteration with explicit expectations (NEW/SECONDARY/WORSENED) This is reflected in the updated cypress.helpers.js and should be the pattern for all conditional, page-gated flows.
Codify “page-render” contracts near conditionals
- For any formConfig conditional (depends, itemFilter, showPagePerItem), pair it with a companion unit test (in forms-system or app scope) that:
  - feeds representative formData permutations,
  - asserts the function returns the expected boolean for each case, and
  - guards against scope/argument mistakes (e.g., verify parameter order and return type). The merged PR adds unit coverage in platform forms helpers—use that pattern broadly.
  - code example:
    > // forms-system/test/js/helpers.itemFilter.spec.jsx
import { isDisabilityPtsd } from 'applications/disability-benefits/all-claims/utils';
import formConfig from 'applications/disability-benefits/all-claims/config/form';
describe('new-disabilities follow-up itemFilter', () => {
  const filter = formConfig.chapters?.disabilities?.pages?.['newDisabilitiesFollowUp']?.itemFilter;
  const ptsdItem   = { condition: 'PTSD' };
  const asthmaItem = { condition: 'asthma' };
  it('shows all items when syncModern0781Flow is true', () => {
    expect(filter(ptsdItem,   { syncModern0781Flow: true })).toBe(true);
    expect(filter(asthmaItem, { syncModern0781Flow: true })).toBe(true);
  });
  it('falls back to legacy rule when flag is false', () => {
    expect(filter(ptsdItem,   { syncModern0781Flow: false })).toBe(false);
    expect(filter(asthmaItem, { syncModern0781Flow: false })).toBe(true);
  });
  it('is defensive when formData is undefined', () => {
    expect(filter(asthmaItem)).toBe(true);
  });
});

- Refactor safety rails
  - Pre-merge checklist for conditional moves: Whenever logic is moved out of formConfig into helpers, require:
    - A before/after matrix of input (item, formData) → expected boolean,
    - A diff-aware unit test proving parity for existing cases and explicitly covering new flags like syncModern0781Flow,
    - A targeted Cypress spec that fails if the page is skipped.
    - code example:
    > //
    cy.get('input[value="NEW"]').click();
    cy.get('textarea#root_primaryDescription').should('be.visible').type('…');
    cy.findByText(/continue/i, { selector: 'button' }).click();
    cy.get('input[value="SECONDARY"]').click();
    cy.get('select#root_view\\:secondaryFollowUp_causedByDisability')
      .should('be.visible')
      .select(disability['view:secondaryFollowUp'].causedByDisability);
    cy.get('textarea#root_view\\:secondaryFollowUp_causedByDisabilityDescription')
      .should('be.visible')
      .type(disability['view:secondaryFollowUp'].causedByDisabilityDescription);

- Data-driven fixtures + negative paths
  - Maintain “maximal” and “minimal/negative” JSON fixtures for each complex flow (you already have maximal). Ensure the negative fixture forces the conditional edge cases (e.g., PTSD vs non-PTSD, modern switch true/false), and assert the absence or presence of the page accordingly.
  CI/CD enforcement
  - Mark the critical page-gating tests as required in CI and run them in parallel with smoke tests to speed feedback. Make sure any skipped test in the flow causes a CI warning at minimum, failure if it’s in the required set. (The fix PR shows several iterations that stabilized tests—lock those patterns in.)
  Ownership & documentation
  - In the discovery doc, link each gated page to its exact assertions and fixtures so reviewers immediately see “If this conditional breaks, these tests must fail.” Your PR already collects the context; this turns it into a living test map.
  - code example:
  > // fixtures/data/maximal-modern-0781-test.json
{
  "syncModern0781Flow": true,
  "newDisabilities": [
    { "condition": "PTSD",   "cause": "NEW",       "primaryDescription": "..." },
    { "condition": "asthma", "cause": "SECONDARY", "view:secondaryFollowUp": {
      "causedByDisability": "PTSD",
      "causedByDisabilityDescription": "..." } }
  ],
  "standardClaim": true
};
  - Keep fixtures that explicitly toggle the modern flag on/off and include PTSD + non-PTSD items, this can be seen in the followup PR that fixed the problem discussed.
- We should also route contracts as smoke checks, code example:
  > // cypress/e2e/contracts/new-disabilities-follow-up-route.cy.js
it('renders per-item follow-up with index when modern flow is on', () => {
  cy.login(); // your auth helper
  cy.seed('maximal-modern-0781-test'); // your fixture+start helper
  cy.startClaim(); // navigates to new-disabilities
  cy.findByText(/continue/i, { selector: 'button' }).click();
  cy.location('pathname').should('match', /new-disabilities\/follow-up\/0$/);
});

- As well as making gate-keeped scopes required in spec and unit testing.

## Open Questions / Risks

What’s still unclear or risky?

- None that I am aware of. The only other question that could be raised is how to best hit end points when doing testing, but this is an overarching conversation currently being had. There is also the question on when we should be validating data, but again, this is an overarching conversation and not wholly dependent on this ticket.

## Next Steps

What actions will come out of this discovery?

- Creation of tests following best practices, as well as gate-keeped pages and routing to smoke out failures that may cause an outage in the future. This will make the unit tests not as brittle, more robust, and allow us to catch issues such as this regression.
