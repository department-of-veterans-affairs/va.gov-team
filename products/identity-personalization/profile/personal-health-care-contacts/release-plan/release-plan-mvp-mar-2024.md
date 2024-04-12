# Release plan: personal health care contacts MVP, March 2024
## Changelog
## Overview
This MVP is a read-only addition to the Profile and Profile Hub products. Personal health care contacts includes emergency contacts and next-of-kin, with both a primary and secondary of each available to display if present in the VA Profile service. There is a single feature flag for all functionality.

## Important artifacts
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-health-care-contacts/README.md)
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62159)
- Analytics dashboard [tbd]
- [Collab Cycle issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65892), which has links to all other artifacts

### Toggle / Flipper
***[DEV TO PROVIDE]***

## Phase I – Pilot – moderated production testing

### Planning
- Desired date range or test duration: one day
- Desired number of users: 1
- How you'll recruit the right production test users: OCTO slack
- How you'll conduct the testing: zoom session
- How you'll give the test users access to the product in production w/o making it live on VA.gov: feature flag specific to their userID

### Results

- Number of users: 1
- Number of bugs identified / fixed: 0
- Was any downstream service affected by the change?: yes/no, NO
- Types of errors logged: n/a
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: no
  - If yes, what: [FILL_IN ticket numbers]


## Phase II – phased rollout

### Rollback plan:

Our PM and PO will monitor user analytics and back-end monitoring. If they see a spike in errors or unexpected behavior, they will contact the engineering team to disable the toggle.

### Rollout planning

#### Launch go/no-go:
- Launch readiness checklist [github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/79017)

#### Desired date range: April 8, 2024
- [Launch ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/79017)

#### How will you make the product available in production while limiting the number of users who can find/access it: 
- Set flipper to the appropriate percentage of users.

#### What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
- Analytics signals that the functionality is being viewed by users:
  - Google Analytics (GA) and Datadog (DD) show pageviews of the Personal health care contacts page
  - DD/GA shows interactions on the page, including clicks on the `va-tel` components that allow a Veteran to tap-to-dial from a mobile device.
- Qualitative feedback (pulled daily for the first 5 days of release and then weekly) doesn't show issues related to the changes
- Datadog API logs and errors stay in baseline ranges
- Contact Centers do not raise flags about excessive call volume or user-reported errors

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 20% got us 500 users in about 26 hrs

#### Results

- Number of unique users: 1650 calls to API
- Metrics at this stage (per your "success criteria"): 
  - GA: as of the first 4 days in prod: 
    - 1653 unique pageviews
    - In-page interactions are limited to expansion of the additional-info component (366 uniques); no clicks on telephone component
  - Qualitative survey feedback gathered ~10 responses for /profile and /profile/contacts - only one response was associated with /contacts, and the person wanted to update their spouse's address under NoK (so, working as expected)
- Was any downstream service affected by the change?: NO
- Types of errors logged: 500 (1 request; same user repeated and got a 200); 401 (3 requests)
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? NONE

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 100% of users

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?


