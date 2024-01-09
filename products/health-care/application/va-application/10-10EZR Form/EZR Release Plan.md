# 10-10EZR Health benefits update form - Release Plan 
- Last updated: 1/9/2024


## Step 1: Development


Feature toggle

| Toggle name | Description |
| ----------- | ----------- |
| ezr_prod_enabled | Toggle to enable users to see the newly created 10-10EZR form |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
  - [x] [Link to Test cases/Test Rail](https://dsvavsp.testrail.io/index.php?/suites/view/11&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
   - [x] Confirm with Joshua Faulkner and team on End to End testing
   - [x] Link to confirmation of successful transmission/processing
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [x] review the plan with your DEPO/OCTO representative.
  - [x] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the engineering team to disable the toggle and begin triage.
- We have a content widget for the static page that can be disabled with the feature toggle, in comjunction with the EZR form.
- Have Content Team (Aliyah Blackmore) revert the Static Page to previous version, removing mention of online EZR

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration:
     - 1.5 weeks - 11/13/23 - 11/21/23
- Desired number of users:
     - 5 participants
- How you'll recruit the right production test users:
     - Perigean recruiting
- How you'll conduct the testing:
     - Moderated
- How you'll give the test participants access to the product in production w/o making it live on VA.gov:
     - Feature Toggle 

#### Results

- Number of users: 10 Participants
- Number of bugs identified / fixed: 2 bugs found, related to Forms Library. Will address in future iteration.
  - [#70261](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70261)
  - [#70258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70258) 
- Was any downstream service affected by the change?: NO
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? NO

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range:
     - 12/20/23 - 01/11/23
     - Take two date range: 1/10/24-1/24/24
- How will you make the product available in production while limiting the number of users who can find/access it:
     - Feature Toggle limiting % of traffic to the application
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 

### Objective: Provide an effortless online experience for Veterans to update their information for health care benefits
#### **Key Result #1:** Increase % of Veterans who successfully update their health care benefits information online

- Data source
     - [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - [Google Analytics submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20231220&_u.date01=20231221&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22ezr--submission%22,0%5D%5D&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.rowCount=25&explorer-graphOptions.selected=analytics.nthDay&explorer-graphMode.mode=lineChart/)

**Note** Paper submissions are based on the average provided by HEC for volumes that are received by the HEC centralized processing center.  This does not include individual facilities, as there are no mechanisms in place to track them.
| Product KPI | Historical | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|Paper Submissions |15,000 (estimated) |4,000 (25%) | TBD |TBD |
|Online Submissions |NEW |11,000 (75%) | TBD |TBD |
|Submission Failures |NEW |None | TBD |TBD |
|Veteran Validation errors |NEW |None | TBD |TBD |


#### **Key Result #2:** Capture 75% of form submissions in a single session

- Data source
     - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - [Google Analytics PDF Downloads](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20231217&_u.date01=20231221&explorer-table.plotKeys=%5B%5D&explorer-graphOptions.selected=analytics.nthDay&explorer-graphMode.mode=lineChart&_r.drilldown=analytics.eventAction:PDF%20Downloaded%20-%20Download%20VA%20Form%2010-10EZR/)

| Product KPI | Historical  | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|Single-session submissions |NEW |75% of submitted forms (8,250)| TBD |TBD |


#### **Key Result #3:** Reduce number of EZR form downloads from VA.gov

| Product KPI | Historical  | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|EZR PDF Downloads |avg 10,400 monthly |2,600 monthly (25%) | TBD |TBD |



- Links to the dashboard(s) showing "success criteria" metrics:
     - Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - Data source - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - Data source for errors - [Sentry Logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- Who is monitoring the dashboard(s)?:
     - Product Manager - Alex Seelig, Heather Justice
     - Data Analyst - Luis Simauchi



### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time:
     -  6 days, 1/10/24-1/16/24
     - (Initially 12/20/2023-1/2/2024)
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
     - 6 days, 1/16/24-1/22/24
     - (Initially 1/2-1/7/2024, paused and rolled back 1/3/24 due to issues with Veteran DOB and Preferred Facility)
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
     - 3 days, 1/22/24-1/24/2024
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
     - 1/24/24
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
