# 10-10EZR Health benefits update form - Release Plan 
- Last updated: 


## Step 1: Development


Feature toggle

| Toggle name | Description |
| ----------- | ----------- |
| TBD | Toggle to enable users to see the newly organized and clarified Household Information section |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
  - [ ] [Link to Test cases/Test Rail](https://dsvavsp.testrail.io/index.php?/suites/view/11&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
   - [ ] Link to validation confirmation
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
   - [ ] Confirm with Joshua Faulkner and team on End to End testing
   - [ ] Link to confirmation of successful transmission/processing
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the engineering team to disable the toggle and begin triage.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration:
     - X weeks - x/xx/xx - x/xx/xx
- Desired number of users:
     - X participants
- How you'll recruit the right production test users:
     - Perigean recruiting
- How you'll conduct the testing:
     - Moderated
- How you'll give the test participants access to the product in production w/o making it live on VA.gov:
     - Feature Toggle 

#### Results

- Number of users: [FILL_IN]
- Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]
  - [FILL_IN]: 
  - [FILL_IN]: 
  - [FILL_IN]: 
- Was any downstream service affected by the change?: yes/no, [FILL_IN]
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range:
     - x/xx/xx - x/xx/xx
- How will you make the product available in production while limiting the number of users who can find/access it:
     - Feature Toggle limiting % of traffic to the application
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 

### Objective: 
#### **Key Result #1:

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)


| Product KPI  |Target | End of 25%| End of 50%| End of 75%| Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------|-------|-------------- |-------------- |-------------- |

#### **Key Result #2:** 

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | Target | End of 25%| End of 50%| End of 75%| Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------|-------|-------------- |-------------- |-------------- |



- Links to the dashboard(s) showing "success criteria" metrics:
     - Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - Data source for errors - [Sentry Logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- Who is monitoring the dashboard(s)?:
     - Product Manager
     - Data Analyst



### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time:
     - 3 days
- Percentage of Users (and roughly how many users do you expect this to be):
     - 25% of authenticated Veterans

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time:
     - 2-3 days
- Percentage of Users (and roughly how many users do you expect this to be):
     - 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time:
     - 2-3 days
- Percentage of Users (and roughly how many users do you expect this to be):
     - 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 100% of users

#### Planning

- Length of time:
     - 2-3 days
- Percentage of Users (and roughly how many users do you expect this to be):
     - 100%

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
