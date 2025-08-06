# Discovery Document: [Disability Benefits/Discovery: Document why cypress did not catch submission validation errors]

## Overview

Before proceeding with implementation, we need to conduct a focused discovery effort to understand why the Cypress maximal test did not catch regressions when required pages were removed or broken. The core issue involves the cypress.helpers.js file not failing as expected, but the root cause remains unclear.

This discovery work will inform the necessary changes to the maximal test suite and prevent premature fixes without fully understanding the problem.

- Owner: Alicia Perry
- Date: 2025-08-06
- Related Docs: [Github issue]([https://github.com/orgs/department-of-veterans-affairs/projects/1660/views/5?pane=issue&itemId=119831819&issue=department-of-veterans-affairs%7Cva.gov-team%7C114229]
)

## Goals

To understand the what and why of this failure, and how to set up Cypress or Unit testing in the future that can catch a regression of this magnitude. A failure on the CI/CD inside Github Actions or a flag if a tag is caught on the scans in actions.

- Discover what exactly caused the regression and what tests should have caught the error.
- Discover how to adjust the test suite so that it picks up the failures and is less brittle and more robust.

## Problem Statement

We want to figure out how to tweak our test suite to catch such failures in the future so that it doesn't take down the form.Simple Browser: Show

- in July, a [commit](https://github.com/department-of-veterans-affairs/vets-website/commit/8b896400558334f2aee0799595c1d6f847f96556) was released and merged into main of the vets-website repo. This change caused a regression and an overall down period that was discovered by a PM looking at the VA subreddit. From there, members of the Disability Benefits team swarmed the problem, and tracked down the above commit as the reason for the failure. It was noted that there was a failure on the CI/CD to pick up this regression, having passed both Cypress and Unit Tests. This ticket and discovery are set out to discover how to make it to where we can test for such failures again, and how to avoid running into this situation once more.
- All veteran users on the VA attempting to complete or begin the disabilities process, form 0781 and 526ez, were faced with 5XX and 4XX errors in regards to attempting to route to their respective pages.

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

- Option 1: Initially, it was hypothesized that the removal of the isDisabilityPtsd boolean on it's own from the utils.jsx file and the form.jsx page imports caused the issue. This was later expanded on in the following:
- It is possible that the object being returned to the submit flow was a different object or contained a different type that didn't match with what the backend expected to receive. As almost all OOP languages use objects as a form of message between methods, views, and the backend that contain a payload that is being validated against, should any part of the payload not match the expected message, it will cause a failure.
- One of the proposed causes was that PTSD was being called by the term 'condition' as opposed to 'name', which is what is expected in a user or patient that already has the existing, historic condition, as outlined in: ratedDisabilities has a name not a condition in src/applications/disability-benefits/all-claims/tests/initialData.js:41 and in src/applications/disability-benefits/all-claims/tests/utils/form0781.unit.spec.jsx:49. This type difference, or even key name difference, could have caused the failure. So when, how do we test for it in a way that is meaningful and would cause the CI/CD to fail in a way that would restrict a similar regression from happenign again.

- Solution brainstorming

- Option 1: Not-so-happy Path

  - It was discovered there is no negative path/unhappy pathing taking place that could be caught by Cypress. This has also been an ongoing discussion within several teams about Cypress--that we should be also testing for unhappy paths so as to avoid situations such as this. To do unhappy path testing, two ideas were proposed. The first of these is Unit Testing versus just Cypress.
  - Pros:  Unit Tests tend to be easier for developers to create, are faster in their runtime, and tend to be less memory intensive.
  - Cons:  This doesn't account for E2E nor Cypress, both of which should be catching these issues. Integration tests are also easier in cypress than in spec tests.

- Option 2: Validation Tango
  - One thing that came up during brainstorming is the idea that we could validate the schema or payload on the final submit page, which would then unblock a user from inputting data along the way and then we'd implement a way for the form to fail gracefully, rather than take the whole of 0781 down with it.
  - Pros:  FE validation on Submit would fit with the current way we handle V3 components, which validate on submit, and would fall in line with the current way that we're approaching the Partial Date epic for the Pathways Team on Disability Experience. Following a consistent pattern would lend more to readability and predictability of the codebase.
  - Cons:  Only validating on submit might allow a user to proceed through the form with malformed data. This also introduces reliance on JSON schema validation, which is an ongoing discussion as the sync between the FE and BE can become brittle this way.

## Research / Benchmarks

What has been tried, what do competitors do, relevant patterns.

- It was brought up that there is a line in the cypress.helpers.js file for all-claims, line 300, contains a failure that should have caused the CI/CD to flag it and not allow merging. This was not the case. The code, found [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/disability-benefits/all-claims/tests/cypress.helpers.js#L300), shows that should a user be in the newDisabilities workflow, that they should see the new, modern 0781. This was not the case, and the test didn't fail.
- It is industry best practices to always test happy and unhappy pathing, as well as to test API returns.
- Research into documentation of Cypress showed that there is a way to mock failures and unhappy paths.

## Recommendations

What is recommended to fix this problem?

- Testing the Tests
  - One way to test the tests and to implement the solution for this would be two fold. First, navigate to the start of the PTSD workflow, then in the console, remove an object to see how and where it's effected, and trace that down in the codebase. This way, we find what object is stored where, how, and most importantly, how it's being tested--if at all. Then, to write the tests based on the happy and unhappy path. This can look like removing the condition PTSD from a user, and seeing if they see the legacy page, vs the modern one.
  - We would then mock tests using Cypress, specifically cy.request (documentation found [here](https://docs.cypress.io/api/commands/request) for unhappy path testing by mocking API responses, as well as [here](https://learn.cypress.io/testing-your-first-application/how-to-test-forms-and-custom-cypress-commands#test-invalid-email-address)) in a way that will flag it on the CI/CD and cause a failure to appear on the tests run, which should then stop merging.
- Reasoning: This approach is programmatic, practical, within best practices, and also addresses the unhappy pathing needed.

## Open Questions / Risks

What’s still unclear or risky?

- Are we wanting to do our validation only on the submit and review page? If so, how would that affect the flow? How would we account for schema validations? What happens if a user removes a condition from their form at a later date, how would this be affected?
- The assumption of this ticket is that there is a type issue or naming issue, not an indexing one in the arrayPath as first brainstormed at the start of this research. If it were an indexing issue, as we have it to where our indexes should put things that aren't PTSD in front of them on the array, then it would cause problems site wide for the veteran user.

## Next Steps

What actions will come out of this discovery?

- Further brainstorming will take place on how best to implement this discovery, the scope of the ticket that results from it, and benchmarking/stress testing to ensure the fix doesn't also introduce a regression.
- Creation of the new tests as well as tweaking of the old ones, to catch such instances in the future.
