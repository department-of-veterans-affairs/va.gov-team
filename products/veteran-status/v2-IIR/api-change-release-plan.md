
# API Change Release Plan

## Step 1: Development

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| veteranStatusCardUseLighthouseFrontend | When enabled, the Veteran Proof of Status card is shown/hidden based on the `veteranStatus` value returned from the Lighthouse Veteran Service History and Eligibility API. |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [X] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [X] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [X] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [X] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [X] review the plan with your DEPO/OCTO representative.
  - [X] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

Developer and Product Manager will monitor analytics and logging at each rollout phase. If there is a spike in errors or unexpected behavior, they will disable the feature flag for all users. 

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Turn the feature flag on for Mike King in production
  - Confirm he sees the card
  - Confirm that monitoring is coming through as expected
- Find two more OCTO Veterans we can test in production with
  - Confirm they see the card
  - Confirm that monitoring is coming through as expected
- Turn feature flag on for Jeff Barnes in production
  - Confirm they see the card
  - Confirm that monitoring is coming through as expected

#### Results

- Number of users: 4
- Number of bugs identified / fixed: 1 / 3
  - [[BUG] Error Messages Are Not Displaying as Expected #1397](https://github.com/department-of-veterans-affairs/va-iir/issues/1397) | DONE
  - [[BUG] Non 200 Response Not Returning Correct FE Error Message #1406](https://github.com/department-of-veterans-affairs/va-iir/issues/1406) | DONE
  - [[BUG] Add Loading Component to Vet Status](https://github.com/department-of-veterans-affairs/va-iir/issues/1393) | STARTED
- Was any downstream service affected by the change?: No
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? No

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: January 27 - February 7
- How will you make the product available in production while limiting the number of users who can find/access it: we will be turning on the feature flag for a small percentage of users and increasing every few days.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Percentage of CONFIRMED users : [FILL_IN]
  - Percentage of NOT CONFIRMED users : [FILL_IN]
  - Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
  - Percentage breakdown of API response codes : [FILL_IN]
- Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: Megan Commons & Kyle Henson

### Stage A: Canary

#### Planning

- Length of time: January 27 - January 28 (or until we see each possible NOT CONFIRMED status reason)
- Percentage of Users: 1% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : [FILL_IN]
  - Percentage of NOT CONFIRMED users : [FILL_IN]
  - Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
  - Percentage breakdown of API response codes : [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 10% of users

#### Planning

- Length of time: January 28 - January 29 
- Percentage of Users (and roughly how many users do you expect this to be): 10%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : [FILL_IN]
  - Percentage of NOT CONFIRMED users : [FILL_IN]
  - Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
  - Percentage breakdown of API response codes : [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 25% of users

#### Planning

- Length of time: January 29 - January 30
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : [FILL_IN]
  - Percentage of NOT CONFIRMED users : [FILL_IN]
  - Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
  - Percentage breakdown of API response codes : [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 50% of users

#### Planning

- Length of time: January 31 - February 3
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : [FILL_IN]
  - Percentage of NOT CONFIRMED users : [FILL_IN]
  - Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
  - Percentage breakdown of API response codes : [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 75% of users

#### Planning

- Length of time: February 3 - February 4
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users :  [FILL_IN]
  - Percentage of NOT CONFIRMED users : [FILL_IN]
  - Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
  - Percentage breakdown of API response codes : [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage F: 100% of users

#### Planning

- Length of time: February 4 - 
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : [FILL_IN]
  - Percentage of NOT CONFIRMED users : [FILL_IN]
  - Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
  - Percentage breakdown of API response codes : [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results post 100% rollout

- Number of unique users: [FILL_IN]
- Percentage of CONFIRMED users : [FILL_IN]
- Percentage of NOT CONFIRMED users : [FILL_IN]
- Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
- Percentage breakdown of API response codes : [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results post 100% rollout

- Number of unique users: [FILL_IN]
- Percentage of CONFIRMED users : [FILL_IN]
- Percentage of NOT CONFIRMED users : [FILL_IN]
- Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
- Percentage breakdown of API response codes : [FILL_IN]
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
