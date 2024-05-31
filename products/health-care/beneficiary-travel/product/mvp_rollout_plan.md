
# Release Plan - BTSSS Travel Pay Status Page MVP

---
## Step 1: Development
Feature Toggles

| Toggle name | Description |
| ----------- | ----------- |
| [travel_pay_power_switch](https://api.va.gov/flipper/features/travel_pay_power_switch) | Main switch for the Travel Pay feature on VA.gov using the new BTSSS (travel pay) API. Enabled - Requests are handled as normal. Disabled - Requests are not handled. Server returns a 503 (Service Unavailable) until re-enabled. |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout?

Yes

### Define the Rollback process

Our PM, Engineering Lead, Research Lead, and stakeholders will monitor analytics both on Google Analytics and DataDog. If they see a spike in errors or unexpected behavior, they will flag to the engineering team that the toggle needs to be disabled.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: Jul 1 - Jul 15
- Desired number of users: TBD
- How you'll recruit the right production test users: Through a network of Ad Hoc, BAH, and VA Veterans
- How you'll conduct the testing: UAT
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Through use of a feature flag

#### Results

- Number of users: [FILL_IN]
- Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]
- Was any downstream service affected by the change?: yes/no, [FILL_IN]
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: July 26 
- How will you make the product available in production while limiting the number of users who can find/access it: [FILL_IN].
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
- Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: UX Leads, Engineering Lead, and Product Manager


**Datadog Metrics (Engineering)**

| Metric Name | Description |
| ----------- | ----------- |
| VA.gov - Endpoint error count | Number of non-200,201 status codes to va.gov endpoints |
| Travel Pay API - Endpoint error count | Number of non-200,201 status codes to travel pay API endpoints |
| VA.gov - Sustained high latency | p90 latency measures above x for time |

**Google Analytics Metrics (UX)**
| Metric Name | Description |
| ----------- | ----------- |
| Unique page views | # of individuals (% of users) who are visiting this page at least once |
| Repeat page views | # of times a given user is visiting this page |
| Are the users going out to BTSSS? | # of clicks on the help section's outbound link |
| Utilization of pagination | % of users going to the second page |
| Origin page | What page are they coming from to Travel Pay page? |
| Exit point | Where are they clicking out to? |
| Entry point | Which of the sources are they entering from (MHV / main page; VA Travel Reimbursement; My VA claims tool) |
| Time spent | Time spent on page |

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 5% , on top of which we will include Ad Hoc, BAH, and VA veterans who have agreed to test the status page.

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was any downstream service affected by the change?: yes | no |  N/A
- Types of errors logged:
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? 

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"):
- Was any downstream service affected by the change?: yes | no |  N/A
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"):
- Was any downstream service affected by the change?: yes | no |  N/A
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?:

### Stage D: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"):
- Was any downstream service affected by the change?: yes | no |  N/A
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?:

### Stage E: 100% of users

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
