# Regression test plan

A Regression Test Plan is a document that maps user stories to tests and which includes the results of executing those tests, thereby providing a strategy for verifying the functionality of your product prior to the work moving through the Collaboration Cycle.

<!-- A new test case has been added in [Test Rail](https://dsvavsp.testrail.io/index.php?/suites/view/2552)

- C152128 - 526 Submission Experience - With new copy of submission accordion

Existing test rail cases were tested
- C37806 - 526 Minimal Test
- C107773 - 526 Submission Experience - Minimal Test
- C107916 -	526 Submission Experience - BDD (Benefits Delivery at Discharge) - minimal -->

## Test Rail

See [526 Side Navigation - Test Plan](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/c5ed9f0f75709effc2b751e46c4d14244904c606/Administrative/vagov-users/staging-test-accounts-526EZ-side-navigation.md)


## Additional resources - Bug Bash

Our team conducted a comprehensive bug bash of the side navigation feature across the 526EZ disability compensation form via manual testing with a variety of users on staging. We identified and documented 9 critical conditional flow scenarios that affect side navigation behavior, including CFI vs. new conditions flow, PTSD type selection, evidence submission, and Guard/Reserve service. These scenarios were tested to validate that the side nav correctly displays chapter visibility, tracks user progress through the form, enables navigation to previously visited chapters, and disables future chapters appropriately.

-  [Bug bash plan](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126029); Nine scenarios (initiall defined in [this ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126255)) were tested to fully cover subnav functionality. Additional details, and completed tests can be found in the canvas on [the DSVA Slack](https://dsva.slack.com/docs/T03FECE8V/F0A77NDFUF3) 
-  [Bug Bash results](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129543) 7 issues were identified

## Traceability Statement

**Unit Tests:**

-  17 test cases covering component behavior
-  Coverage: Statements 100% (23/23), Functions 100% (8/8), Lines 100% (21/21), Branches 90.9% (10/11)

**End-to-End Tests:**

-  1 comprehensive integration test validating user flows across all 6 form chapters

**Summary (Defects) reports**

-  Additional testing and addressing know issues is still underway
