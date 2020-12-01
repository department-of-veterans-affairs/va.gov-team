---
name: VSA-QA Test Plan
about: For VSA Product Teams to request QA Test Plan to be developed during Build Phase of development.  Open a ticket at least 2 SprintS before expected Platform Staging Review.
title: '[Product/Feature] VSA-QA Test Plan'
labels: 'vsa-qa'
assignees: 'tlei123'

---
\[**Product Managers**: Open this ticket **at least 2 Sprints** before you expect a Platform Staging Review of this Product/Feature.  Then:
- Add yourself to Assignees
- Fill-out sections below.]

## Product/Feature summary

\[Provide brief summary of product/feature to be tested on Staging by VSA-QA. Also, be sure to include links to the Product/Feature Outline, Epic, Pre-Launch Checklist, and Design tickets/artifacts.]

Product/Feature Outline: \[provide link]
Product/Feature Epic: \[provide link]
Product/Feature Pre-Launch Checklist: \[provide link]
Product/Feature Copy deck(s): \[provide link, or type "In Design prototypes"]
Product/Feature Design prototypes: \[provide links]

## Product-team SMEs

**\[if different from (or more specific than) [VSA Master Org Chart](https://docs.google.com/drawings/d/1_OmxooPQXRwUjb08DoaMoEvw1-2Gq9e_wYLunMzEsxE/edit?ts=5daa1002 )]**

(Leave blank to implicitly refer to VSA Master Org Chart (linked above)
Design/Research: 
Content/IA: 
Front-end: 
Back-end: 
QA: Tze-chiu Lei

## Proposed use-cases and Staging test-accounts

\[Provide specific user-senarios (all the different interactive usage-flows and/or data-specific states) to be tested.  Or, link to existing issues/docs (ideally, use [this Product Use Cases template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/product-use-cases-template.md) from VSA Design Lead).  IMPORTANT for authenticated-experiences: Staging test-accounts must be provided for all authenticated scenarios, and Staging-API test-data created to match the account-specific scenarios.]

1. <Use Case 1> - <test-account-1>
2. <Use Case 2> - <test-account-2> ...

## How to configure this issue

- [ ] Product Manager added to Assignees
- [ ] Attached to a **Milestone** (when will this be completed?)
- [ ] Attached to **Epic** (what body of work is this a part of? possibly `Ongoing Maintenance`)
- [ ] Labeled with **Team** (`vsa-authenticated-exp`, `vsa-benefits`, `vsa-benefits-2`, `vsa-caregiver`, `vsa-ebenefits`, `vsa-facilities`, `vsa-public-websites`, etc.)

## Definition of Done

- [ ] Test Plan reviewed by Product Team.
- [ ] Test Plan finalized per review feedback.
- [ ] Actual Test Runs completed on Staging \[or optional [VSA-QA Test Run ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=tlei123&labels=vsa-qa&template=vsa-qa-test-run.md&title=%5BProduct%2FFeature%5D+VSA-QA+Test+Run) created and tracked]
