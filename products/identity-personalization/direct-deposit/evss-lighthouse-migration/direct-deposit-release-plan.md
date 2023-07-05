<!-- markdownlint-disable MD024 -->
# Release Plan - Direct Deposit Comp & Pen Migration from EVSS to Lighthouse
 [Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration#readme)

## Table of contents


## Step 1: Development

| Toggle name | Description |
| ----------- | ----------- |
| profile_lighthouse_direct_deposit | When enabled, will request direct deposit data from lighthouse API. |

## Step 2: Validation

We've tracked GH tickets/issues and information related to the direct deposit migration in [EPIC | Profile | Direct Deposit C&P Migration from EVSS to Lighthouse #51900](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51900).

#### [**QA Artifact Summary**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/QA/README.md)

Our testing plan was finalized through [PM | Direct deposit EVSS > Lighthouse migration: QA prep & planning #54870](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54870)
Use cases and testing are documented on [this spreadsheet](https://docs.google.com/spreadsheets/d/1xflLNJhUSVslzLbVQtMkYkzsBGAhIccnmYW0GL_Ihd0/edit#gid=0).  


#### Privacy, Security, Infrastructure Review
[PSIR Prep](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/95947f796f73c3fc008549338e7adc510495c938/products/identity-personalization/profile/direct_deposit/lighthouse/psir_prep.md)

## Step 3: Production rollout

### Define the Rollback process

**Rollback Plan:**

PM and PO will monitor analytics (specifics to be documented with story [#61165](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61165)). If the team notices a spike in errors, they will contact the engineering team to get the FE engineer to disable the toggle.profile_lighthouse_direct_deposit

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)


[go / no go UAT conversation ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61177)

#### Planning

- Desired date range or test duration: ~ 8/2-15/2023
- Desired number of users: [9]
- How you'll recruit the right production test users: [**Research Plan** to be defined](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60942) 
- How you'll conduct the testing: [**Conversation Guide** to be defined](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60942) 
- How you'll give the test users access to the product in production w/o making it live on VA.gov: [FILL_IN]

#### Results

- Number of users: [FILL_IN]
- Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]
  - [FILL_IN] : list
  - [FILL_IN] : of
  - [FILL_IN]: Tickets of bugs/changes
- Was any downstream service affected by the change?: yes/no, [FILL_IN]
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

[Staged rollout ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782)

#### Planning
  
|Launch % |Time Frame | Planned Date Range | Ticket | 
|-------|-----------|-----------|------|
| Launch to 1% | 1 week | week of 08/16/2023 | [#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 10% | 1 week | week of 08/23/2023 | [#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 25% | 1 week | week of 08/30/2023 |[#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 50% | 1 week | week of 09/6/2023 |  [#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782)|
| Launch to 75% | 1 week | week of 09/13/2023 |[#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 100% | 1 week | week of 09/20/2023 |[#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
  
- How will you make the product available in production while limiting the number of users who can find/access it: We'll enable the toggle for a % of users
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  - [FILL_IN] : list
  - [FILL_IN] : of
  - [FILL_IN] : KPIs
- Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: [FILL_IN]

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Canary (1%)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 10% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 25% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 50% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 75% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage F: 100% of users

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
