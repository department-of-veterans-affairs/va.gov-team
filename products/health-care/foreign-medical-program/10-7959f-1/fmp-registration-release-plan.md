
<!-- markdownlint-disable MD024 -->
# FMP Registration Release Plan

---

## Step 1: Development

| Toggle name | Description |
| ----------- | ----------- |
| form107959F1 | Toggle that will enable users to view the FMP registration form |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
   - [x] link to [testrail](https://dsvavsp.testrail.io/index.php?/suites/view/2993&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
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

- date range: 3/18-29/24
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

- Desired date range: 9/9-9/23 (tentative)
- How will you make the product available in production while limiting the number of users who can find/access it: feature toggle
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
  - number of form submissions online
  - number of clicks through form
  - follow form submission through to PEGA with confirmation/notifications
- Links to the dashboard(s) showing "success criteria" metrics: [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms?fromUser=false&refresh_mode=sliding&tpl_var_env%5B0%5D=eks-staging&view=spans&from_ts=1724851388044&to_ts=1724865788044&live=true), Google analytics
- Who is monitoring the dashboard(s)?: Product Managers, PO

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Internal testing
- VA notify - push template to production
- make sure flipper with allowlist is ready to go
- end user PEGA testing with confirmation from users of downstream systems
  - check meta data
  - receive confirmation of PEGA import
  - resolution of any PEGA errors/issues
  - Datadog/DOMO and GA monitoring
  - remove any test data after done
  - back end verification/steps
- react widget notification for CAIA (after testing is signed off on) and it's ready to release to external users
- notify contact center when this is ready (is visible to external users)


### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 2 days (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be):  10%, 1-3 users (*Recommendation: select a percentage that targets ~500 users, or at most 10%*)

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
- Percentage of Users (and roughly how many users do you expect this to be): 25%, ~20

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

- Length of time: 2 days (*minimum 2 hours*)
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
