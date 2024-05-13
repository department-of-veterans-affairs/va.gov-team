---
name: VAOS Test Issue Template
about: For filing issues with VAOS tests or testing infrastructure
title: ''
labels: testing, appointments
assignees: ldelacosta

---

**Choose one of the following 4 options and provide as much of the following details as possible.**

# 1. Test failure or skipped test

- Which test(s) are involved. Please include the test id or a link to the test code if possible.
- If a test was skipped, what's the reason and what is required before the test can be re-enabled?
- Is the test a flaky test (i.e. intermittent failures)? If so, is it affecting the CI, local environment or both?

## Steps to Reproduce
- Please include the command that was used to execute the tests if possible. Otherwise, include a link to the test run that failed on CI.

### Actual Result
_Describe the error that was encountered. Stack traces, logs and videos (for e2e tests) are all encouraged._

## Definition of Done
- [ ] Root cause for test failure is found
- [ ] Test is updated or fixed

# 2. Tests need to be added

- What's the component or workflow that needs to be tested? Please include links to original test plans or design documents.
- Will this require unit tests, e2e tests or both?

## Definition of Done
- [ ] Tests are added and are passing locally and on the CI
- [ ] If unit tests are added, include an update coverage report

# 3. Issues or enhancements involving test infrastructure and libraries

- What are the current and desired behavior?
- Which tests will be impacted by or make use of the enhancements?

## Definition of Done
- [ ] Desired result is achieved and/or document decisions made
- [ ] Relevant documentation is updated

# 4. Other testing related issue

- Please describe the testing related issue with as much details as possible.

## Definition of Done
- [ ] Desired result is achieved and/or document decisions made
- [ ] Relevant documentation is updated

---
## How to configure this issue
- [ ] **Labeled with Team** (`appointments`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `design`, `product`)
- [ ] **Labeled with** `testing`
- [ ] **Assigned to** Product for prioritization
