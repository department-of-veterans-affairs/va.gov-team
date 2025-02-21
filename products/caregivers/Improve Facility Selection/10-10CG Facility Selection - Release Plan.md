
# 10-10CG Facility Selection - Release Plan

- [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Improve%20Facility%20Selection/Improve%20Facility%20Selection%20-%20Initiative%20Brief.md)
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19433)

## Step 1: Development

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| caregiver_use_facilities_API | Allow list of caregiver facilites to be fetched by way of the Facilities API |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
     - [x] Complete End to End testing and obtain signoff from stakeholders
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout
### Scope of the Facilty Selection feature
- The goal of this feature is to provide a dynamic search functionality for Veterans and Caregivers, so that they will have confidence in selecting the Veteran's preferred facility, which will also ensure the submitted application is routed to the appropriate Caregiver service facility for processing.

### Define the Rollback process

- The PM and Data Analyst will monitor analytics. If there is a spike in errors or unexpected behavior, the feature toggle will be disabled and issue triage will begin.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- No UAT will be completed.  We held research and usability sessions in October 2024 to validate functionality and usability from Veterans and Caregivers within the staging environment.
- The team and Stakeholders will validate functionality in Production.

#### Results

- N/A

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range:
     - 01/21/2025 - 1/27/2025
- How will you make the product available in production while limiting the number of users who can find/access it:
     -  We will use a feature toggle to limit access to the feature
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
     - Total Applications being submitted (source: Datadog)
     - Facility Selection page - avg engagement time (source: Google Analytics)
     - New Facility Confirmation page - avg engagement time (source: Google Analytics)
     - Page activity/engagement (button clicks, flow of traffic into and out of page, page drops, etc)(source: Google Analytics)


## Measuring Success


### Key Performance Indicators (KPIs)

- User feedback (Medallia)
- Feedback from CSCs on misrouted applications

#### Baseline KPI Values
- Number of online Caregiver applications filled out per month
     - Using the timeframe of Jan 1, 2022 through Jan 25, 2023, there were about 77,000 applications submitted.

### Objective: Make it easier for Veterans with representatives to fill out the online form
#### Key result: Reduce the number of applications that are rerouted (obtained from CSP leadership)
- From Jan 1, 2022 through Jan 25, 2023, there were 5,496 CARMA cases rerouted to a different facility.
   - At this time, there is no simple way to determine whether the case was rerouted at the Veteran/Caregiver request or due to having a non-caregiver supported facility on the form.
- Data Source:
     - Rerouted applications - Caregiver Stakeholder team
     - Applications submitted - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?fromUser=false&fullscreen_end_ts=1730229097128&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1730225497128&fullscreen_widget=1652960129845848&refresh_mode=sliding&from_ts=1730224696206&to_ts=1730228296206&live=true)
 
|Applications | Monthly Average Baseline (Jan 2022-Jan 2023)| Target | 1 Month after launch|
|--------|-----------------------|----------|--------------------|
|Total Apps Rerouted | 423 | 400 | TBD |
|Total Apps Submitted | 5,923 | No Change | TBD |


#### Key result: Maintain or reduce the amount of time a user selects a facility
- Data Source: [Google Analytics - CG Facility page views & time](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/8un9wi5nSN-WZ-KqWHHBPA)

|Average time on page |Monthly Average Baseline (Jan-Dec 2024)| Target | 1 Month after launch|
|--------|-----------------------|----------|--------------------|
|Search page| 52 seconds |30 seconds|TBD|
|Confirmation page |NEW|15 seconds|TBD|


- Who is monitoring the dashboard(s)?: Heather Justice & Luis Simauchi
---

### Stage A: Canary - 10% of users


#### Planning

- Length of time:
     - 01/21/2025-01/22/2025 - 1 day
- Percentage of Users (and roughly how many users do you expect this to be):
     - 10%, approximately 65 page views per day

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
---

### Stage B: 25% of users

#### Planning

- Length of time:
     - 01/22/2024-01/24/2024 - 2 days
- Percentage of Users (and roughly how many users do you expect this to be):
     - 25%, about 162 users per day

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
---

### Stage C: 50% of users

#### Planning

- Length of time:
     - 01/24/2025-01/27/2025 - 4 days
- Percentage of Users (and roughly how many users do you expect this to be):
     - 50%, about 325 users per day

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
---

### Stage D: 100% of users

#### Planning

- Length of time:
     - 01/27/2025
- Percentage of Users (and roughly how many users do you expect this to be):
     - 100%, about 650 users per day

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
---

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

- [GA4 10-10CG Facility Page dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/8un9wi5nSN-WZ-KqWHHBPA)
- [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?fromUser=false&fullscreen_end_ts=1730229097128&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1730225497128&fullscreen_widget=1652960129845848&refresh_mode=sliding&from_ts=1730224696206&to_ts=1730228296206&live=true)

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
