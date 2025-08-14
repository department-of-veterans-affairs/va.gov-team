# 10-10EZR Emeregency Contact (EC) and Next of Kin (NoK) - Release Plan (WIP)
- Last updated: 8/4/2025


## Step 1: Development


Feature toggle

| Toggle name | Description |
| ----------- | ----------- |
|ezr_emergency_contacts_enabled | Enables EC and NOK forms, EC and NOK prefill, and Associations API in VES |


Updated 7/17 in response to UAT results- all code will now point to one toggle in order to align the back end and front end alignment within the Associates API 



## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
  - [x] [ec-nok-v1-v2-test-results.pdf](https://github.com/user-attachments/files/21188726/ec-nok-v1-v2-test-results.pdf) - initial testing 
  - [ ] **Link retest **
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependent systems proactively to ensure that the feature is ready for use once it hits production.
   - [x] Confirm with Joshua Faulkner and team on End to End testing
   - [ ] Link to confirmation of successful transmission/processing
- [x] Ensure product guide has been updated and sent for review (approval prior to launch is ideal)
   - [Ticket #114731](https://github.com/department-of-veterans-affairs/va.gov-team/issues/114731)
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [x] review the plan with your DEPO/OCTO representative.
     - [ ] First meeting 7/16 received approval
     - [ ] Second approval **DATE**
  - [x] review the release plan with your team.
    - [ ] initial review 7/16
    - [ ] second review **Date**

## Step 3: Production rollout

### Define the Rollback process

- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the engineering team to disable the toggle and begin triage.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration:
     - 3 days - 7/16/25-7/18/25
- Desired number of users:
     - 1-3 participants
- How you'll recruit the right production test users:
     - OCTO members who are Veterans with VA Health Care
     - Personal contacts who are Veterans with VA Health Care
- How you'll conduct the testing:
     - self-testing
- How you'll give the test participants access to the product in production w/o making it live on VA.gov:
     - Feature Toggle for specific users 

#### Results of Round 1

- Number of users:  4 Participants
- Number of bugs identified / fixed: 
   [FE] (https://github.com/department-of-veterans-affairs/va.gov-team/issues/114693)
  [BE] (https://github.com/department-of-veterans-affairs/va.gov-team/issues/114693)
- Was any downstream service affected by the change?: 
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges?
  - Initial tests resulted in no changes on VES as per UAT team
  - Fourth test didn't allow user to submit form
  - Team reconvened and determined that the toggles needed to be reconfigured in order to allow users to add and delete contacts without continually calling the Associates API and deleting EC/NoK in VES
  - Reconfiguration and retesting will take place
  - Retesting in staging
  - UAT testing will take place when work is ready

#### Results of Round 2 (7/25/25 - 7/30/25)

- Number of users: 2
- Number of bugs identified / fixed: 1 (https://github.com/department-of-veterans-affairs/vets-api/pull/23294)
  - We needed to add the `user` param to backend flipper code in order to be able to restrict it based on a user's email.
- Was any downstream service affected by the change?: No
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges?
  - For participant 1, their EC/NoK data was updated correctly there were no issues
  - For participant 2, their EC/NoK data was updated, but the corresponding EZR form was not received by VES.

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range:
     - ~~7/21/25-7/22/2025~~
- How will you make the product available in production while limiting the number of users who can find/access it:
     - Feature Toggle limiting 10% of traffic to the application
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 

### Objective: Provide an effortless online experience for Veterans to update their information for health care benefits
#### **Key Result #1:** Increase 10% of Veterans who successfully add their NOK and/or EC information online
**Note** Paper submissions are based on the average provided by HEC for volumes that are received by the HEC centralized processing center.  This does not include individual facilities, as there are no mechanisms in place to track them.
| Product KPI |  Monthly Target | Post-Launch 1 week |Post-Launch 1 month|
|-------------|-------------- |-------------- |-------------- |
|NOK add (Yes)|500 | TBD |TBD |
|NOK edit/view existing|500 | TBD |TBD |
|EC add (Yes) |500 | TBD |TBD |
|EC edit/view existing|500 | TBD |TBD |
Errors | 0 errors| TBD| TBD|

- Links to the dashboard(s) showing "success criteria" metrics:
     - [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - [Google Analytics - EZR Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/B1BuF9JgTgCgLV3cx4EB4Q)
- Who is monitoring the dashboard(s)?:
     - Product Manager - Alexandria Parker, Heather Justice
     - Data Analyst - Luis Simauchi



### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time:
     - ~~2 days - 7/21-22/2025~~
- Percentage of Users (and roughly how many users do you expect this to be):
     - 10% of authenticated Veterans
     - About 16 submissions per day

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time:
     - ~~**5 days - 7/23-27/2025**~~
- Percentage of Users (and roughly how many users do you expect this to be):
     - 25% of authenticated Veterans
     - about 41 submissions per day

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
     - ~~**2 days - 7/28-29/2025**~~
- Percentage of Users (and roughly how many users do you expect this to be):
     - 75% of authenticated Veterans
     - about 124 submissions per day

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 100% of users

#### Planning

- Length of time:
     - ~~**7/30/2025**~~
- Percentage of Users (and roughly how many users do you expect this to be):
     - 100% of authenticated Veterans
     - about 1,000 per week

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
