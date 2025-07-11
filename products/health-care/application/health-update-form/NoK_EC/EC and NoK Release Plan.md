# 10-10EZR Emeregency Contact (EC) and Next of Kin (NoK) - Release Plan (WIP)
- Last updated: 05/09/2025


## Step 1: Development


Feature toggle

| Toggle name | Description |
| ----------- | ----------- |
|ezr_associations_api_enabled | Enables VES's Associations REST API |
|ezr_emergency_contacts_enabled| Enables emergency contact experience for 10-10EZR applicants|
|ezr_next_of_kin_enabled|Enables next of kin experience for 10-10EZR applicants|
| (NOT SURE ABOUT THIS ONE) ezr_prefill_contacts | Adds Veteran contacts to ezr prefill data |


## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
  - [x] [ec-nok-v1-v2-test-results.pdf](https://github.com/user-attachments/files/21188726/ec-nok-v1-v2-test-results.pdf)
- [] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
   - [] Confirm with Joshua Faulkner and team on End to End testing
   - [] Link to confirmation of successful transmission/processing
- [] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [] review the plan with your DEPO/OCTO representative.
  - [] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the engineering team to disable the toggle and begin triage.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration:
     - 3 days - 5/X/25-5/X/25
- Desired number of users:
     - 1-2 participants
- How you'll recruit the right production test users:
     - OCTO members who are Veterans
- How you'll conduct the testing:
     - Guided
- How you'll give the test participants access to the product in production w/o making it live on VA.gov:
     - Feature Toggle for specific users 

#### Results

- Number of users:  Participants
- Number of bugs identified / fixed: 
  - Link to any bugs identified 
- Was any downstream service affected by the change?: 
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? 

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range:
     - 5/27/25-?????
- How will you make the product available in production while limiting the number of users who can find/access it:
     - Feature Toggle limiting 10% of traffic to the application
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 

### Objective: Provide an effortless online experience for Veterans to update their information for health care benefits
#### **Key Result #1:** Increase % of Veterans who successfully update their health care benefits information online

- Data source
     - [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - [Google Analytics - EZR Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/B1BuF9JgTgCgLV3cx4EB4Q)

**Note** Paper submissions are based on the average provided by HEC for volumes that are received by the HEC centralized processing center.  This does not include individual facilities, as there are no mechanisms in place to track them.
| Product KPI | Historical | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|NOK updates |TBD |TBD | TBD |TBD |
|EC Updates |TBD |TBD | TBD |TBD |

#### **Key Result #2: TBD



- Links to the dashboard(s) showing "success criteria" metrics:
     - Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - Data source - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - Data source for errors - [Sentry Logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- Who is monitoring the dashboard(s)?:
     - Product Manager - Heather Justice, Michael Skinner
     - Data Analyst - Luis Simauchi



### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time:
     -  TBD
- Percentage of Users (and roughly how many users do you expect this to be):
     - 10% of authenticated Veterans
     - About 10 submissions per day

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
     - TBD
- Percentage of Users (and roughly how many users do you expect this to be):
     - 25% of authenticated Veterans
     - about 25 submissions per day

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
     - TBD
- Percentage of Users (and roughly how many users do you expect this to be):
     - 75% of authenticated Veterans
     - about 75-100 submissions per day

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 100% of users

#### Planning

- Length of time:
     - TBD
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
