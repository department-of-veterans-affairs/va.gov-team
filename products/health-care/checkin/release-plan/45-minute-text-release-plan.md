<!-- markdownlint-disable MD024 -->
# Release Plan - 45-minute Check-in Text

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| check-in-experience-45-minute-check-in-reminder | Toggle can be set to a percentage of all users or percentage of users as a specific facility  |

## Step 2: Validation

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout?

**Yes**
- We are planning to rollout this feature only to certain facilities TBD. We will interview Veterans and staff to gather feedback and decide if adjustments are necessary before doing a staged rollout to all facilities. 
- Rollback plan consists of turning off the feature flag.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: TBD
- Desired number of users: 1
- How you'll recruit the right production test users: Use Robert Tow's account
- How you'll conduct the testing: Zoom call with Robert Tow and the following
    - Happy path scenario for station enabled for travel claims
        - Test user in BTSSS Prod Vista
        - CIE entry for the same test user in appointments Vista
        - Station enabled for travel claims workflow
    - Happy path scenario for station disabled for travel claims
        - Test user in BTSSS Prod Vista
        - CIE entry for the same test user in appointments Vista
        - Station disabled for travel claims workflow
- How you'll give the test users access to the product in production w/o making it live on VA.gov: turn on feature flag for Robert Tow only

#### Results

- Number of users: 1
- Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]
  - [FILL_IN] : list
  - [FILL_IN] : of
  - [FILL_IN]: Tickets of bugs/changes
- Was any downstream service affected by the change?: yes/no, [FILL_IN]
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: November-December 2023
- How will you make the product available in production while limiting the number of users who can find/access it: feature flag will be enabled for certain facilities or clinics.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  - How many Veterans used the 45-minute reminder & completed check-in
  - How many Veterans used the 45-minute reminder & DID NOT completed check-in
  - How many Veterans used the text "check in" & completed check-in
  - How many Veterans used the text "check in" & DID NOT completed check-in
- Links to the dashboard(s) showing "success criteria" metrics: [eCheck-in Dashboard](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.dateOption=last7days&_u.hasComparison=true/)
- Who is monitoring the dashboard(s)?: Ben Brasso

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Pilot

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 4 weeks 
- Percentage of Users (and roughly how many users do you expect this to be): 100% at a facility TBD

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: Phased roll-out to additional facilities 

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: TBD
- Percentage of Users (and roughly how many users do you expect this to be): 100% at a facility TBD

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
