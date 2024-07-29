# Release plan: personal health care contacts MVP, March 2024
## Changelog
## Overview
This MVP is a read-only addition to the Profile and Profile Hub products. Personal health care contacts includes emergency contacts and next-of-kin, with both a primary and secondary of each available to display if present in the VA Profile service. There is a single feature flag for all functionality.

## Important artifacts
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-health-care-contacts/README.md)
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62159)
- Analytics dashboard - Datadog: card for Personal health care contacts added to the [Auth Exp Profile dash](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=true&refresh_mode=sliding&view=spans&from_ts=1711143139221&to_ts=1713821539221&live=true)
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

### Stage B: Continued at 20% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 weeks
- Percentage of Users (and roughly how many users do you expect this to be): 20%

#### Results

- Number of unique users: 5,214 unique pageviews
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
  - GA: as of the first 4 days in prod: 
    - 5214 unique pageviews
    - In-page interactions are limited to expansion of the additional-info component (366 uniques); no clicks on telephone component
  - Qualitative survey feedback gathered 17 responses for /profile and /profile/contacts - no actionable feedback, details in [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80525)
- Was any downstream service affected by the change?:  NO
- Types of errors logged: mostly 200; a small handful of 401s (explained above), and a group of 5xx due to an outage.
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?  NONE

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

Decided to ramp up to 50% of users on 4/22, 2 weeks into 20% release above.

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: 20k unique pageviews
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
  - we monitored user feedback via survey responses
  - the one issue uncovered was that the phone number we provided couldn't actually change contact info. We changed the product to tell users to contact their medical facility instead.
- Was any downstream service affected by the change?: No
- Types of errors logged: very small handful of 4xx and 5xx, well within expected range
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 
  - As anticipated based on research, users want to edit their contacts directly within the product instead of having to call or visit VA

### Stage D: 100% of users

#### Planning

- Length of time: 5/15/2024 forward (indefinite)
- Percentage of Users (and roughly how many users do you expect this to be): 100%


