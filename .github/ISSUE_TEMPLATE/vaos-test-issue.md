---
name: VAOS Test Issue Template
about: For filing issues with VAOS tests or testing infrastructure
title: ''
labels: testing, appointments
assignees: ldelacosta

---

## Summary
Describe the testing issue that was encountered and provide as much of the following details as possible.
- **Required** Which test(s) are involved. Please include the test id or a link to the test code if possible.
- **Required** What work needs to be done? Select one of the following options:
  - Test skipped requiring additional work to be re-enabled
    - What's the reason for skipping the test and what is required before the test can be re-enabled?
    - Is the test a flaky test (i.e. intermittent failures)? If so, is it affecting the CI, local environment or both?
  - Tests need to be added
    - Will this require unit tests, e2e tests or both?
    - What's the component or workflow that needs to be tested?
    - Please include links to original test plans or design documents.
  - Issues or enhancements involving test infrastructure and libraries
    - What are the current and desired behavior?
  - Other testing related issue
- Please include any additional details that may be useful for resolving this issue.

## Steps to Reproduce
- Please include the command that was used to execute the tests if possible. Otherwise, include a link to the test run that failed on CI.

### Actual Result
_Describe the error that was encountered. Stack traces, logs and videos (for e2e tests) are all encouraged._

## Definition of Done
- [ ] Root cause for test failure is found
- [ ] Test is updated or fixed

---
## How to configure this issue
- [ ] **Labeled with Team** (`appointments`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `design`, `product`)
- [ ] **Labeled with** `testing`
- [ ] **Assigned to** Product for prioritization
