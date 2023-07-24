<!-- markdownlint-disable MD024 -->
# Release Plan - Direct Deposit Comp & Pen Migration from EVSS to Lighthouse
 [Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration#readme)

Last updated: 7/20/2023

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
- [PSIR Prep](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/95947f796f73c3fc008549338e7adc510495c938/products/identity-personalization/profile/direct_deposit/lighthouse/psir_prep.md)
- [Privacy and Security Ticket](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/1059) 

## Step 3: Production rollout

### Define the Rollback process

**Rollback Plan:**

PM and PO will monitor analytics (specifics to be documented with story [#61165](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61165)). If the team notices a spike in errors, they will contact the engineering team to get the FE engineer to disable the toggle.profile_lighthouse_direct_deposit

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

- [UAT directory in GH](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT)
- [go / no go UAT conversation ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61177)

#### Planning

- Desired date range or test duration: ~ 7/19/2023-8/1/2023
- Desired number of users: [9]
- How you'll recruit the right production test users: [**Research Plan** to be defined](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/research-plan.md) 
- How you'll conduct the testing: [**Conversation Guide** to be defined](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/conversation-guide.md) 
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Feature Toggle mentioned above 

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
| Launch to 10% | 1 week | week of 08/02/2023 | [#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 25% | 1 week | week of 08/09/2023 |[#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 50% | ~3 days | week of 08/16/2023 |  [#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782)|
| Launch to 100% | ~3 days | week of 08/21/2023 |[#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
  
- How will you make the product available in production while limiting the number of users who can find/access it: We'll enable the toggle for a % of users
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: We want to see that the new LH API is working as good or better than our current EVSS API
  - Successful retrievals of direct deposit (C&P) information
  - Failed retrievals of direct deposit (C&P) information
  - Form Submits for direct deposit (C&P) information
  - Failures in saving direct deposit (C&P) information
- Links to the dashboard(s) showing "success criteria" metrics:  [GA Dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
- Who is monitoring the dashboard(s)?: PM/PO/BE Developer 

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Canary (10%)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 100% of users

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
