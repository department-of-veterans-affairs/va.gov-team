# Release plan: personal health care contacts MVP, March 2024
## Changelog
## Overview
This MVP is a read-only addition to the Profile and Profile Hub products. Personal health care contacts includes emergency contacts and next-of-kin, with both a primary and secondary of each available to display if present in the VA Profile service. There is a single feature flag for all functionality.

## Important artifacts
- Epic
- Analytics dashboard [tbd]
- [Collab Cycle issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65892), which has links to all other artifacts

## Phase I – moderated production testing

### Planning
- Desired date range or test duration: [FILL_IN]
- Desired number of users: [FILL_IN]
- How you'll recruit the right production test users: [FILL_IN]
- How you'll conduct the testing: [FILL_IN]
- How you'll give the test users access to the product in production w/o making it live on VA.gov: [FILL_IN]

### Results

- Number of users: [FILL_IN]
- Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]
  - [FILL_IN]
- Was any downstream service affected by the change?: yes/no, [FILL_IN]
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
  - If yes, what: [FILL_IN ticket numbers]


## Phase II – phased rollout

### Rollback plan:

Our PM and PO will monitor user analytics and back-end monitoring. If they see a spike in errors or unexpected behavior, they will contact the engineering team to disable the toggle.

### Rollout planning

#### Launch go/no-go:
- Launch readiness checklist [TBD - CREATE ISSUE]

#### Desired date range: [TBD]
- Launch ticket [TBD]

#### How will you make the product available in production while limiting the number of users who can find/access it: 
- Set flipper to the appropriate percentage of users.

#### What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
- [TBD - POPULATE SECTION OF PRODUCT OUTLINE?]

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): [FILL_IN]% (*Recommendation: select a percentage that targets ~500 users, or at most 10%*)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]



