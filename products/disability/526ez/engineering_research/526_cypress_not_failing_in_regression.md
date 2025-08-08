# Discovery Document: [Disability Benefits/Discovery: Document why cypress did not catch submission validation errors]

## Overview

Before proceeding with implementation, we need to conduct a focused discovery effort to understand why the Cypress maximal test did not catch regressions when required pages were removed or broken. The core issue involves the cypress.helpers.js file not failing as expected, but the root cause remains unclear.

This discovery work will inform the necessary changes to the maximal test suite and prevent premature fixes without fully understanding the problem.

- Owner: Alicia Perry
- Date: 2025-08-06
- Related Docs: [Github issue]([https://github.com/orgs/department-of-veterans-affairs/projects/1660/views/5?pane=issue&itemId=119831819&issue=department-of-veterans-affairs%7Cva.gov-team%7C114229]
)

## Goals

To understand this failure, and to figure out how to best formulate and understand testing in order to avoid regressions like this in the future.

- Discover what exactly caused the regression and what tests should have caught the error.
- Discover how to adjust the test suite so that it picks up the failures and is less brittle and more robust.

## Problem Statement

We want to figure out how to tweak our test suite to catch such failures in the future so that it doesn't take down the form.Simple Browser: Show

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

- In looking at the Postmortem supplied by Tommisina, many thanks to her, the problem that occurred was that the conditional placed on the formConfig was making it to where the newDisabilities page wasn't rendering properly. And I quote:

> This PR was under peer review at Sprint Review time when it was demoed to the team. After the demo, a refactoring was completed based on review feedback—moving code from `formConfig` in `src/applications/disability-benefits/all-claims/config/form.js` into a helper function in an established utility file (`src/applications/disability-benefits/all-claims/utils/index.jsx`) to improve testability...reviews failed to detect that the conditions details page wasn't rendering...the refactored function was returning the boolean a level below the page's `formConfig`, causing it to skip returning a value and therefore skip the conditions details page for all items.

- Solution brainstorming

- Option 1: Solution Implemented!
  - In researching this ticket, and after putting it up for review, Tommisina provided the work that had been recently merged into main that fixes the issue outlined above. Please find the below merged PR that contains the new tests for testing the unhappy path: [here](https://github.com/department-of-veterans-affairs/vets-website/pull/37482/files). In short, new tests were added in order to catch the unhappy path of the user seeing the legacy page when they should see the modern one. There was also changes to the logic that allowed the boolean to be returned at the level that was needed in order for the conditionals to render the modern page.

## Research / Benchmarks

What has been tried, what do competitors do, relevant patterns.

- It was brought up that there is a line in the cypress.helpers.js file for all-claims, line 300, contains a failure that should have caused the CI/CD to flag it and not allow merging. This was not the case. The code, found [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/tests/cypress.helpers.js#L300), shows that should a user be in the newDisabilities workflow, that they should see the new, modern 0781. This was not the case, and the test didn't fail.
- It is industry best practices to always test happy and unhappy pathing, as well as to test API returns. This is now done thanks to the merged fix by Tommisina.
- Research into documentation of Cypress showed that there is a way to mock failures and unhappy paths.

## Recommendations

What is recommended to fix this problem?

- Testing the Tests
  - One way to test the tests and to implement the solution for this would be two fold. First, navigate to the start of the PTSD workflow, then in the console, remove an object to see how and where it's effected, and trace that down in the codebase. This way, we find what object is stored where, how, and most importantly, how it's being tested--if at all. Then, to write the tests based on the happy and unhappy path. This can look like removing the condition PTSD from a user, and seeing if they see the legacy page, vs the modern one.
  - We would then mock tests using Cypress, specifically cy.request (documentation found [here](https://docs.cypress.io/api/commands/request) for unhappy path testing by mocking API responses, as well as [here](https://learn.cypress.io/testing-your-first-application/how-to-test-forms-and-custom-cypress-commands#test-invalid-email-address)) in a way that will flag it on the CI/CD and cause a failure to appear on the tests run, which should then stop merging.
- Reasoning: This approach is programmatic, practical, within best practices, and also addresses the unhappy pathing needed.

## Addendum

- The solution for this issue has been merged into main on vets-website, and thus has been integrated!

## Open Questions / Risks

What’s still unclear or risky?

- None that I am aware of. Tommisina went above and beyond to link me the documentation needed to revise this ticket. The only other question that could be raised is how to best hit end points when doing testing, but this is an overarching conversation currently being had. There is also the quesiton on when we should be validating data, but again, this is an overarching conversation and not wholly dependent on this ticket.

## Next Steps

What actions will come out of this discovery?

- Further brainstorming will take place on how best to implement this discovery, the scope of the ticket that results from it, and benchmarking/stress testing to ensure the fix doesn't also introduce a regression.
- Creation of tests whenever we add new pages, as well as ensuring that failures are flagged in tests in a way that is meaningful to the CI/CD.
