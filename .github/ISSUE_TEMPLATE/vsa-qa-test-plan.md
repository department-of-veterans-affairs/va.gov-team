---
name: VSA-QA Test Plan
about: For VSA Product Teams to request QA Test Plan to be developed during Build Phase of development.  Open this ticket AT LEAST 2 SPRINTS BEFORE expected Platform Staging Review.
title: '[Product/Feature] VSA-QA Test Plan'
labels: 'vsa-qa'
assignees: 'tlei123'

---
\[**Product Managers**: Open this ticket **at least 2 Sprints** before you expect a Platform Staging Review of this Product/Feature.  Then:
- Add yourself to Assignees
- Fill-out sections below.]

## Product/Feature summary

\[Provide brief summary of product/feature to be tested on Staging by VSA-QA. Also, be sure to include links to the Product/Feature Outline, Epic, Pre-Launch Checklist, and Design tickets/artifacts.]

- Product/Feature Outline: \[provide link]
- Product/Feature Epic: \[provide link]
- Product/Feature Copy deck(s): \[provide link, or type "In Design prototypes"]
- Product/Feature Design prototypes: \[provide links, or type "In Design prototypes"]

## Product-team SMEs

**\[if different from (or more specific than) [VSA Master Org Chart](https://docs.google.com/drawings/d/1_OmxooPQXRwUjb08DoaMoEvw1-2Gq9e_wYLunMzEsxE/edit?ts=5daa1002 )]**

(Leave blank to implicitly refer to VSA Master Org Chart (linked above)
Design/Research: 
Content/IA: 
Front-end: 
Back-end: 
QA: Tze-chiu Lei

## Proposed use-cases and Staging test-accounts

\[Provide specific Use Cases (all the different interactive user-flows and data-specific states) to be tested.  Use **[this Product Use Cases template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/product-use-cases-template.md)** -- copy the template's markdown into a new .md file inside your Product folder [next to Product Outline file], then start updating.

IMPORTANT for authenticated products (requiring sign-in): Staging test-accounts must be provided for all authenticated scenarios, and Staging-API test-data created to match the account-specific scenarios.]

Link to **Use Cases doc**: \[provide link]

## How to configure this issue

- [ ] **Product Manager** added to Assignees
- [ ] Attached to a **Milestone** (when will this be completed?)
- [ ] Attached to **Epic** (what body of work is this a part of? possibly `Ongoing Maintenance`)
- [ ] Labeled with **Team** (`vsa-authenticated-exp`, `vsa-benefits`, `vsa-benefits-2`, `vsa-caregiver`, `vsa-ebenefits`, `vsa-facilities`, `vsa-public-websites`, etc.)

## Definition of Done

- [ ] Product references provided by Product Team.
- [ ] Use Cases provided.
- [ ] For authenticated products, Staging test-accounts and mock-data set up for Use Cases above.
- [ ] Test Cases [in TestRail] finalized based on Use Cases above.
- [ ] Test Runs completed on Staging [or Drupal pre-prod enviornment].
- [ ] Test Reports generated.  These should be provided to VSP at least 4 workdays before [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review).
