# TSA Safe Travel Letter Release Plan

## Step 1: Development

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| tsa_safe_travel_letter | When enabled, a net new letter will surface on the `/records/download-va-letters/letters` page for elibible Veterans. |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

Developer and Product Manager will monitor analytics and logging at each rollout phase. If there is a spike in errors or unexpected behavior, they will disable the feature flag for all users.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: 1 day
- Desired number of users: 3
- How you'll recruit the right production test users: Slack DMs
- How you'll conduct the testing: on Zoom calls with participants sharing their screenn
- How you'll give the test users access to the product in production w/o making it live on VA.gov: enabling the feature flag for participants based on their va.gov login email

#### Results

- Number of users: [FILL_IN]
- Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]
  - [FILL_IN] : list
  - [FILL_IN] : of
  - [FILL_IN]: Tickets of bugs/changes
- Was any downstream service affected by the change?: yes/no, [FILL_IN]
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range: TBD, December
- How will you make the product available in production while limiting the number of users who can find/access it: we will be turning on the feature flag for a small percentage of users and increasing every few days.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
  - Number of users who have the Letter:
  - Number of users who don't have the Letter:
  - Latency & error rate on /index controller
  - Latency & error rate on /show controller
- Links to the dashboard(s) showing "success criteria" metrics: [DD Service Summary](https://vagov.ddog-gov.com/apm/entity/service%3Atsa_letter?dependencyMap.showNetworkMetrics=false&env=eks-staging&errors=qson%3A%28data%3A%28issueSort%3ATOTAL_COUNT%29%2Cversion%3A%210%29&fromUser=false&graphType=flamegraph&groupMapByOperation=null&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Aavg%29%2CtopN%3Aall%29%2Cversion%3A%211%29&shouldShowLegend=true&traceQuery=&start=1759938786394&end=1762530786394&paused=false)
- Who is monitoring the dashboard(s)?: Product Manager - Megan Commons; BE Dev - Kris Pethtel

### Stage A: Canary - 1% of users

#### Planning

- Length of time: 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 1%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### Stage B: 10% of users

#### Planning

- Length of time: 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 10%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

### Stage C: 25% of users

#### Planning

- Length of time: 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

### Stage D: 50% of users 

- Length of time: 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

### Stage E: 100% of users

#### Planning

- Length of time: 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

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
