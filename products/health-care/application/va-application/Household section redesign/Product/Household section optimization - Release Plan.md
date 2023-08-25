# Household section optimization - Release Plan 
- Last updated 08/02/2023


## Step 1: Development


Feature toggle

| Toggle name | Description |
| ----------- | ----------- |
| hcaHouseholdV2Enabled | Toggle to enable users to see the newly organized and clarified Household Information section |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
  - [x] [Link to Test cases/Test Rail](https://dsvavsp.testrail.io/index.php?/runs/view/4540&group_by=cases:section_id&group_order=asc)
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
   - [x] [Link to validation confirmation ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51641)
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
   - [x] Confirm with Joshua Faulkner and team on End to End testing
   - [x] [Link to confirmation of successful transmission/processing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Household%20section%20redesign/Staging%20Review_QA/E-2-E%20testing%20confirmation.md)
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [x] review the plan with your DEPO/OCTO representative.
  - [x] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the engineering team to disable the toggle and begin triage.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration:
     - 1 weeks - 8/21/2023 - 8/25/2023
- Desired number of users:
     - 6 participants
- How you'll recruit the right production test users:
     - Perigean recruiting
- How you'll conduct the testing:
     - Moderated
- How you'll give the test participants access to the product in production w/o making it live on VA.gov:
     - Feature Toggle using email address (Authenticated)

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
     - 8/2/2023 - 8/14/2023
- How will you make the product available in production while limiting the number of users who can find/access it:
     - Feature Toggle limiting % of traffic to the application
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 

### Objective: Update the 10-10EZ, so it is easier for applicants to understand and complete without having to exit the application.
#### **Key Result #1:** Reduce drop-off/exit rate for the Household section pages by a third.

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
- Note: Total Apps started do not include Short Form flow, as those applications do not flow through the section we are monitoring

| Product KPI | 2021| 2022 | Jan-Jun 2023 |Target | End of 25%| End of 50%| End of 75%| Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------|-------|-------------- |-------------- |-------------- |-------------- |-------------- |-------------- |
|Total Apps started |173,669|346,625 |81,431 |N/A | 5,482 |TBD |TBD |TBD |TBD |
|Household section drop-off |14% (23,803)|28% (98,209) |34% (27,715) |10% | 46% (2,553) |TBD |TBD |TBD |TBD |
|Financial Disclosure |4% (1,464)|0.3% (477) | 0% (no drop) |no change | 20% (746) |TBD |TBD |TBD |TBD |
|Annual Income |26.3% (40,791) |30% (75,416) | 24% (12,417) |10% |25% (749) |TBD |TBD |TBD |TBD |
|Deductible Expenses |6% (9,704)|8% (13,911) | 8% (3,296) |5% |7% (161) |TBD |TBD |TBD |TBD |


#### **Key Result #2:** Increase application submissions by 5%, and submissions within a single session by 5%
This is based on a third of current exit rates converting to successful submissions

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | 2022 Baseline | Jan-Jun 2023 | Target | End of 25%| End of 50%| End of 75%| Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------|-------|-------------- |-------------- |-------------- |-------------- |-------------- |
|Application Submissions | 59.8% (138,687k)  | 61.4% (63,084) | 65% |3,566|65%|TBD |TBD |TBD |
|Single-session Submissions | 60.5% (83,941) | 62.2% (39,232) | 77%  |2,505|70%|TBD |TBD |TBD |

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

- Number of unique users: 25% of authenticated Veterans
- Metrics at this stage (per your "success criteria"):  a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: | NO |
- Types of errors logged: None
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None at this time

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
