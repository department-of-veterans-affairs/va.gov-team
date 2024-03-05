
<!-- markdownlint-disable MD024 -->
# Release Plan: Dependent Verification Email

## Overview
The VA mails VA Form 21-0538, a mandatory paper form for dependent verification, to Veterans with dependents only every eight years. The burden is on the Veteran to notify the VA of any changes in dependent status in between these infrequent notifications. This results in significant over and underpayments, costing the VA ~ $250 million per year and burdening Veterans with debt. The Dependent Verification Email would remind Veterans annually to review their dependents through their profile and add or edit dependents if needed with the goal of reducing overpayments.


## How to use this release plan

1. Create a release plan using this template in your feature documentation. Optionally, remove the extra text from the template.
2. Fill out all the details below.
3. Review the release plan with the team and your OCTO before [releasing your app to production](#step-3-production-rollout).


## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: Unmoderated production testing |2 days|30 Veterans with claimed dependents| TBD  |
|Phase 2A: 25% of users |2 days|25% of Veterans with claimed dependents|TBD|
|Phase 2B: 50% of users |2 days|25% of Veterans with claimed dependents|TBD|
|Phase 2C: 100% of users| indefinite | 100% of Veterans with claimed dependents | TBD |


---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| [FILL_IN] | [FILL_IN] |

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


### Define the Rollback process

Our Design Researchers and PM with work with the Notify team to monitor analytics in DOMO, Sentry, and other tracking for on-platform. If they see a spike in errors or unexpected behavior, they will use the feature flag to discontinue the launch. 

### Phase I: unmoderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: **1 week dates TBA**
- Desired number of users: **30**
- How you'll recruit the right production test users: **Send email to 30 Veterans in intended audience**
- How you'll conduct the testing: **Review metrics in DOMO, GA, and Sentry, watch for unexpected behavior.**
- How you'll give the test users access to the product in production w/o making it live on VA.gov: **Send as email notification (not live on VA.gov**

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

Our rollout plan has 3 phases, each increasing the number of Veterans. This is aligned with the practices of the Notify team. 

#### Rollout Planning

- Desired date range: 2/2024
- How will you make the product available in production while limiting the number of users who can find/access it: Email notification will be sent to a limited percentage of the target audience
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  
| KPI                       | Base Value                    | Target Value | Ending Value | Link to Dashboard| 
|---------------------------|-------------------------------|--------------|--------------|------------------|
| Bounce rate               |  Avg of Veteran Notify emails |         ±10% |              |                  |
| Open rate                 |  Avg of Veteran Notify emails |         ±10% |              |                  |
| Click-through rate        |  Avg of Veteran Notify emails |         ±10% |              |                  |
| Volume of 686 submissions |                               |         +10% |              |                  |
| Total Overpayment Amount  |  Total overpayments previous quarter |          -17% |              |                  |


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: More Veterans have verified that their dependents are correct, or have the option to correct them.
  - Key result: Percentage comparison of annual updates compared to total (0%+)
  - Key result: Conversion rate from opening email to viewing "view dependents" page (>50%)
  - Key result: Reduced annual overpayment (<$100m)

    
- Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: [FILL_IN] **ask at kick off 1/10/24**

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*



### Stage A: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]


### Stage C: 100% of users

#### Planning

- Length of time: 2 days
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

