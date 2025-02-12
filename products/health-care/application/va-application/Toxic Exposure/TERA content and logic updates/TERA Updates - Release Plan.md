# 10-10EZ Veteran health care application Toxic Exposure Content update and Question Branching Logic - Release Plan 
- Last updated: 10/30/2024
- Launch ticket [#96011](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96011)


## Step 1: Development


Feature toggle

| Toggle name | Description |
| ----------- | ----------- |
| hca_tera_branching_enabled | Enables branching logic for the Toxic Exposure questionset in the Health Care Application |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
  - [x] [Link to Test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-1010EZ-TERA-branching-logic-update.md)
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the Engineering team to disable the toggle and begin triage.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- There is no planned UAT for this iteration of the Toxic Exposure questions.

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range:
     - 10/31/2024 - 11/6/2024
- How will you make the product available in production while limiting the number of users who can find/access it:
     - We will limit the number of users by using the Flipper toggle, phasing the launch
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
     - Ensuring there are no errors accessing the new pages, errors submitting to Enrollment System with the new data, or errors within the application as a whole.
## Measuring Success

### Objective: Update the 10-10EZ Toxic Exposure section, so Veterans are asked to provide relevant Toxic Exposure details while applying for VA health care.

- **Key Result #1:** A 25% reduction of user engagement time spent within the TERA questions
     - Data source - [Google Analytics (GA4) Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/dZ_qMurmRZiGKuFENIthOQ)

| Product KPI | Historical |Target | Post-Launch 1 week|Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|Avg Engagement time per session in the military section |3m 2s (182 seconds)| 2m 16s (136.5 seconds)  | TBD | TBD |

- **Key Result #2:** A 10% increase in users reporting toxic exposures, due to additional content to include exposures during training
     - Users who answer "Yes" to at least one of the Toxic Exposure questions
     - Data source - [DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?fromUser=false&refresh_mode=sliding&from_ts=1730212537721&to_ts=1730216137721&live=true)

| Product KPI | Historical Sept 29-Oct28 |Target| Post-Launch 1 week|Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|Toxic Exposure reports |5,090| 5,599 | TBD | TBD |
|Radiation Cleanup reports |69| 76 | TBD | TBD |
|Gulf War Service reports |1,920| 2,112 | TBD | TBD |
|Operations reports |1,790|1,969 | TBD | TBD |
|Agent Orange reports |710| 781 | TBD | TBD |
|Other Toxins or Hazards reports (total selections) |10,176| 11,193 | TBD | TBD |

- **Key Result #3:** A 20% increase in users completing the toxic exposures section
     - Users who answer "Yes" to at least one of the Toxic Exposure questions and subsequently complete the section, moving on to the rest of the form
     - Data source - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)

| Product KPI | Historical Sept 29-Oct28|Target | Post-Launch 1 week|Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|Toxic Exposure section completions |5,930| 7,116 | TBD | TBD |


- **Key Result #4:** No Medallia feedback mentioning being asked irrelevant questions
     - Data source - Monthly Medallia survey results



### Links to the dashboard(s) showing traffic metrics:
- Data source - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
- Data source for errors - [Sentry Logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- Who is monitoring the dashboard(s)?:
     - Product Manager - Heather Justice
     - Data Analyst - Luis Simauchi
---

### Stage A: Canary - 25% of users

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 
     - 10/31/2024 - 11/4/2024
- Percentage of Users (and roughly how many users do you expect this to be):
     - 25% - about 41 users per day (Based on ~5k users over 30 days who answered "Yes" to providing Toxic Exposure information)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
---

### Stage B: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time:
     - 11/4/2024 - 11/6/2024
- Percentage of Users (and roughly how many users do you expect this to be):
     - 50% - about 83 users per day (Based on ~5k users over 30 days who answered "Yes" to providing Toxic Exposure information)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
---

### Stage C: 100% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time:
     - 11/6/2024
- Percentage of Users (and roughly how many users do you expect this to be):
     - 100% - about 166 users per day (Based on ~5k users over 30 days who answered "Yes" to providing Toxic Exposure information)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
---

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
