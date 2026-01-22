# Household section V2: Financials - Release Plan 

---

## Step 1: Development

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
|ezr_form_prefill_with_providers_and_dependents | Display previously entered financial data as reference for Veterans |


## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependent systems proactively to ensure that the feature is ready for use once it hits production.
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [x] review the plan with your DEPO/OCTO representative.
  - [x] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process
- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the Engineering team to disable the toggle and begin triage.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
- No moderated testing will be done for this feature

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range: **01/12/2026 - 01/20/2026**
- How will you make the product available in production while limiting the number of users who can find/access it: We will use the feature toggle to limit the exposure to a percentage of users
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
     - Links to the dashboard(s) showing "success criteria" metrics:
          - [Google Analytics Exploration - Household pages](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/bTaqmQkVTT6TeEqtARJBbg)
     - Who is monitoring the dashboard(s)?: Heather - PM, Mitch - Engineer

#### Objective: Reduce time spent and bounce rates on Household section pages
- Results #1: Reduction of time spent by 10%
- Results #2: Reduction of bounce rates by 10%

### Stage A: Canary 10% of users
#### Planning
- Length of time: **01/12/2026 - 01/13/2026**
- Percentage of Users (and roughly how many users do you expect this to be): **10% (approximately 22 users per day)**

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Successful link access and actions (printing/saving)
  - Error rates (should not be above zero)
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

#### Planning

- Length of time: **01/14/2026 - 01/15/2026**
- Percentage of Users (and roughly how many users do you expect this to be): **25% (approximately 54 users per day)**

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Successful link access and actions (printing/saving)
  - Error rates (should not be above zero)
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

#### Planning

- Length of time: **01/16/2026 - 01/21/2026**
- Percentage of Users (and roughly how many users do you expect this to be): **50% (approximately 108 users per day)**

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): 
  - Successful link access and actions (printing/saving)
  - Error rates (should not be above zero)
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users
- Will we move from 50% to 100% of users, skipping this step

### Stage E: 100% of users

#### Planning

- Length of time: **01/22/2026**
- Percentage of Users (and roughly how many users do you expect this to be): **100% (approximately 218 users per day)**

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): 
  - Successful link access and actions (printing/saving)
  - Error rates (should not be above zero)
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

### 1-week results

- [Google Analytics Exploration - Household pages](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/bTaqmQkVTT6TeEqtARJBbg)

#### Objective: Reduce time spent and bounce rates on Household section pages
- Results #1: Reduction of time spent by 10%
- Results #2: Reduction of bounce rates by 10%

|Veteran income | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-week post launch|
|---| --- | --- | ---|
|Veteran income page views| 52,260 | N/A | N/A|
|Veteran income page Avg time per session| 1m 58s | 1m 46s | TBD|
|Veteran income page Bounce rate| 1.32% | 1.19% | TBD|

|Spouse income | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-week post launch|
|---| --- | --- | ---|
|Spouse income page views| 27,451 | N/A | N/A|
|Spouse income page Avg time per session| 47s | TBD | TBD|
|Spouse income page Bounce rate| 1.16% | 1.04% | TBD|

|Deductibles | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-week post launch|
|---| --- | --- | ---|
|Deductibles views| 36,832 | N/A | N/A|
|Deductibles page Avg time per session| 1m 01s | 57s | TBD|
|Deductibles page Bounce rate| 1.63% | 1.47% | TBD|

- Number of unique users: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results
- [Google Analytics Exploration - Household pages](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/bTaqmQkVTT6TeEqtARJBbg)

#### Objective: Reduce time spent and bounce rates on Household section pages
- Results #1: Reduction of time spent by 10%
- Results #2: Reduction of bounce rates by 10%

|Veteran income | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-month post launch|
|---| --- | --- | ---|
|Veteran income page views| 52,260 | N/A | N/A|
|Veteran income page Avg time per session| 1m 58s | 1m 46s | TBD|
|Veteran income page Bounce rate| 1.32% | 1.19% | TBD|

|Spouse income | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-month post launch|
|---| --- | --- | ---|
|Spouse income page views| 27,451 | N/A | N/A|
|Spouse income page Avg time per session| 47s | TBD | TBD|
|Spouse income page Bounce rate| 1.16% | 1.04% | TBD|

|Deductibles | Baseline Monthly Avg (Jan-Aug 2025) | Target | 1-month post launch|
|---| --- | --- | ---|
|Deductibles views| 36,832 | N/A | N/A|
|Deductibles page Avg time per session| 1m 01s | 57s | TBD|
|Deductibles page Bounce rate| 1.63% | 1.47% | TBD|

- Number of unique users: [FILL_IN]
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
