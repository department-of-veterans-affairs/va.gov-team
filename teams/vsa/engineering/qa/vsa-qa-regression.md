# VSA-QA Regression Testing

**[WORK IN PROGRESS]**

While current capacity limitations preclude direct involvement by VSA-QA in Regression Testing, here are some basic info for VSA Product Teams to consider.

## "Soft" requirement

Regression test-plans and test-cases are QA artifacts desired by VSP for QA practice-area review, as part of their [Usability Testing Prep](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#usability-testing-prep) collaboration-cycle checkpoint.  **These are currently "soft" requirements**, but only because of current resource/staffing reality.  For now, VSP should be satisfied that Teams are consciously keeping regression testing in mind when planning new-feature development.

## What is regression testing?

Basically, regression testing means testing the **existing** functionality of your Product/Feature, to ensure that your new changes didn't break them.

## How does regression testing differ from our e2e automated testing?

Product-team Engineers have already been doing regression testing as part of development workflows:
  - For front-end, regression testing is already part of existing E2E-testing;
  - For back-end, regression testing is already part of existing API load-testing.

Currently, however, there's no separation of regression test-suites/-cases from non-regression ones.  This lack of separation prevents teams from accelerating/maintaining CI/CD performance, since everything is being tested for every pull request.

## What should a regression test-suite include?

Not everything should be included in a regression test-suite.  Test cases that warrant regular regression testing are:

- Core functionality
- Features that generated high-severity defects
- Features that frequently generate defects

In Agile development, it's important to balance the size/coverage of regression suites against against CI/CD performance.  If any test-cases don't fit one of the 3 types listed above, then they shouldn't be included.
