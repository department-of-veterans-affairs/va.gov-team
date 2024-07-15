---
name: VSA-QA Test Plan Issue Template
about: For building VSA Product/Feature QA Test Plan during Design/Build stage.
title: '[Product/Feature] QA Test Plan'
labels: 'vsa-qa'
assignees: ''

---

## Product/Feature Summary

[Provide brief summary of product/feature to be tested on Staging by VSA-QA. Also, be sure to link to the Product/Feature Epic.]

Product/Feature Outline: [provide link]

## Proposed Scenarios

\[Provide specific user-stories (functionalities/interfaces/flows) to be tested.  Or, link to existing issues/docs.]

## Risk Analysis

\[Provide a table of user-stories that will not be testable on Staging environment, due to enviornment/time/resource/device availability.  See sample table below.]

| Story Reference | Limitation | Risk | Impact |  
| --- | --- | --- | --- |
| GH #1111 | Unable to process payment with credit card due to lack of test facilities for payment processing | Final payment processing may not function as expected | Legitimate payments could fail to process in production and create a need for an emergency fix / downtime |


## Test Coverage

\[List operating-systems, browsers, and devices to test against.  This is not related to the automated-test-coverages in DevOps/CI/CD.]

## SMEs

\[List points-of-contact for all involved design/development domains.  Most often, these would be the relevant development-team members (Product Manager, UX Designer, Front-End Developer, & Full-Stack or Back-End Developer]

## Review

[Describe notes and comments derived from the review of QA activities with developers and product manager.]

## Staging Test-Readiness

\[Provide list of Staging test-accounts (with test-data ready behind pertinant Staging API-endpoints).  These should cover all Scenarios listed above.]

## Definition of Done

[ ] - Engineering-team review completed.

[ ] - Test Plan finalized.

[ ] - QA-request ticket\* linked \[ticket-template coming soon]
