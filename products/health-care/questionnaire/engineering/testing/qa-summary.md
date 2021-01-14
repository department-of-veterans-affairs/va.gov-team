# QA Summary

This is our documented experience with the QA team for a feature that we released the week of Jan 11, 2012.

## What happened

The Health Care experience team added a feature to the Save in Progress (SiP) system that allows for a more flexible and dynamic expiration date. This feature include changes the SiP endpoint. This change is behind a feature flag, and behind logic to only be used for our form, and no other form team. In theory, not other form should have been impacted and we designed the system from the ground up to not affect the forms that it shouldn't.

In order to verify that the changes actually do not affect other systems, we turned to the QA team to run their regression tests. The results were inconclusive at best. [This ticket has the whole story](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17206).

The QA team ran Cypress tests against the front end of the code base and had results that trigger false positives. The QA team found that there where fewer failures with the feature enabled. THis lead us to suspect that our change has little impact on the stability of the system.

**After going over the results of the QA team, we realized that he Cypress tests we are using to test for regression were not actually testing the new changes.** The Cypress tests are running against the front end in isolation. This isolation isn't a bad thing by itself, but our change was in the API, not the front end. That isolation means that the test suite from the QA team was not actually testing our change. Our team did develop tests for the API to ensure nothing regress on the API side in isolation.

In order to release our feature wth any sorts of confidence, we had to rely on the API tests, and a manual smoke test of the changes in staging.

## Summary

- In its current state, the QA Team needs more resources to better support teams. The results were not useful for our team, in this case. And raised more questions than answers. We had an API change, and the QA team only tested the front end.
- Va.gov needs some sort of true e2e tests. Testing each in isolation is done very well, but true e2e tests need to happen.
- Pact tests are a good step to firm up the contract between the front and back end, but would still not useful in this type of testing that would be needed. This change was in logic in the API, not the structure of the API call. [See this in the Pact FAQ](https://docs.pact.io/faq#do-i-still-need-end-to-end-tests)
- The Health Care Experience Engineer team, though confident that things wouldn't break, did not have a scalable way to test for regressions.
