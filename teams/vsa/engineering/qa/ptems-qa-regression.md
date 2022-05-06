# PTEMS-QA Regression Testing

**[WORK IN PROGRESS]**

While current capacity limitations preclude direct involvement by PTEMS-QA in Regression Testing, here are some basic info for PTEMS VA.gov Application Teams to consider.

## "Soft" requirement

Regression test-plans and test-cases are QA artifacts desired by Platform Midpoint & Staging Reviews.  **These are currently "soft" requirements**, but only because of current resource/staffing limitations.  For now, Platform should be satisfied that Team Engineers are updating automated tests as changes are made, and all tests are auto-run regularly in CI.

## What is regression testing?

Basically, regression testing means testing the **existing** functionality of your Product/Feature, to ensure that your new changes didn't break them.

## How does regression testing differ from our e2e automated testing?

Application-team Engineers have already been doing regression testing as part of development workflows:
  - For front-end, regression testing is already part of existing E2E-testing;
  - For back-end, regression testing is already part of existing API load-testing.

Currently, however, there's no separation of regression test-suites/-cases from non-regression ones.  This lack of separation prevents teams from accelerating/maintaining CI/CD performance, since everything is being tested for every pull request.

## What should a regression test-suite include?

Not everything should be included in a regression test-suite.  Test cases that warrant regular regression testing are:

- Core functionality
- Features that generated high-severity defects
- Features that frequently generate defects

In Agile development, it's important to balance the size/coverage of regression suites against against CI/CD performance.  If any test-cases don't fit one of the 3 types listed above, then they shouldn't be included.
