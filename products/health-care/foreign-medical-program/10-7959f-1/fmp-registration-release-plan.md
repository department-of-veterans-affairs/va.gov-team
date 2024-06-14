
<!-- markdownlint-disable MD024 -->
# FMP Registration Release Plan

---

## Step 1: Development

| Toggle name | Description |
| ----------- | ----------- |
| [FILL_IN] | Toggle that will enable users to view the FMP registration form |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
   - [ ] link to [testrail](https://dsvavsp.testrail.io/index.php?/suites/view/2993&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

- PM and PO will monitor analytics. If they see a spike in errors or unexpected behavior, they will work with the team to get the FE engineer to disable the toggle and identify the issue.
- React widget will need to be turned 'off'
- Coordinate with CAIA to revert static page/entry points to previous version

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Completed

- date range or test duration: 3/18-29/24
- number of users: 13
- recruitment: Perigean
- testing: moderated
- test users access: figma prototype 

#### Results

- Number of users: 11
- Number of bugs identified / fixed: none
- Was any downstream service affected by the change?: no
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes
- If yes, what:
   - Ticket [#84088](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/84088)
   - Ticket [#83884](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/83884)

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: 7/31-8/21/24 (tentative)
- How will you make the product available in production while limiting the number of users who can find/access it: feature toggle
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
  - number of form submissions online
  - number of clicks through form
- Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: Product Managers, PO

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 5 days (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be):  10% (*Recommendation: select a percentage that targets ~500 users, or at most 10%*)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 3 days (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 3 days (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 3 days (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: 1 day (*minimum 2 hours*)
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
