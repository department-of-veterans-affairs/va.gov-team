
# Web Redesign Release Plan

## Step 1: Development

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| vet_status_stage_1 | When enabled, the Veteran Status Card is removed from the /military-information page and a net new page is added to Profile. |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [x] review the plan with your DEPO/OCTO representative.
  - [x] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

Developer and Product Manager will monitor analytics and logging at each rollout phase. If there is a spike in errors or unexpected behavior, they will disable the feature flag for all users. 

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Turn the feature flag on for Mike King in production
  - Confirm he sees the new page + card
  - Confirm he sees the revised Military Information page
- Find four more OCTO Veterans we can test in production with
  - Confirm they see the new page + card
  - Confirm they see the revised Military Information page

#### Results

- Number of users: 5
- Number of bugs identified / fixed: None
- Was any downstream service affected by the change?: No
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? No

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: July 7 - 11
- How will you make the product available in production while limiting the number of users who can find/access it: we will be turning on the feature flag for a small percentage of users and increasing every few days.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Percentage of CONFIRMED users : >75%
  - Percentage of NOT CONFIRMED, not eligible users : <2.5%
  - Percentage of NOT CONFIRMED, other reasons : <22%
  - Percentage of API errors: <1%
- Who is monitoring the dashboard(s)?: Megan Commons, Natalie Gibbons, Dave Formanek

### Stage A: Canary

#### Planning

- Length of time: July 7 
- Percentage of Users: 10% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : 75.8%
  - Percentage of NOT CONFIRMED, not eligible users : 2.3%
  - Percentage of NOT CONFIRMED, other reasons : 21.9%
  - Percentage of API errors: .05%
- Was any downstream service affected by the change?: No
- Types of errors logged: N/A
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

### Stage B: 25% of users

#### Planning

- Length of time: July 8 
- Percentage of Users (and roughly how many users do you expect this to be): 10%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : 80.2%
  - Percentage of NOT CONFIRMED, not eligible users : 1.5%
  - Percentage of NOT CONFIRMED, other reasons : 18.3%
  - Percentage of API errors: .4%
- Was any downstream service affected by the change?: No
- Types of errors logged: N/A
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

### Stage C: 50% of users

#### Planning

- Length of time: July 9
- Percentage of Users (and roughly how many users do you expect this to be): 

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : 79.5%
  - Percentage of NOT CONFIRMED, not eligible users : 1.9%
  - Percentage of NOT CONFIRMED, other reasons : 18.6%
  - Percentage of API errors: .7%
- Was any downstream service affected by the change?: No
- Types of errors logged: N/A
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

### Stage D: 100% of users

#### Planning

- Length of time: July 10
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Percentage of CONFIRMED users : 79.3%
  - Percentage of NOT CONFIRMED, not eligible users : 2.2%
  - Percentage of NOT CONFIRMED, other reasons : 18.6%
  - Percentage of API errors: .7%
- Was any downstream service affected by the change?: No 
- Types of errors logged: N/A
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results post 100% rollout

- Number of page views: [FILL_IN]
- Percentage of CONFIRMED users : [FILL_IN]
- Percentage of NOT CONFIRMED users : [FILL_IN]
- Percentage breakdown of NOT CONFIRMED status reasons : [FILL_IN]
- Percentage breakdown of API response codes : [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results post 100% rollout

- Number of page views: [FILL_IN]
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
