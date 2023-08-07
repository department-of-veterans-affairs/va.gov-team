<!-- markdownlint-disable MD024 -->
# Release Plan - Direct Deposit Comp & Pen Migration from EVSS to Lighthouse
 [Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration#readme)

**Last updated: 08/02/2023**

## Table of contents

- [Step 1: Development](#step-1-development)
- [Step 2: Validation](#step-2-validation)
- [Step 3: Production rollout](#step-3-production-rollout)
- [Launch](#launch)
- [Post Launch metrics](#post-launch-metrics)
- [Post-launch Questions](#post-launch-questions)

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
- [UAT Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/Research/2023-08-direct-deposit-UAT/2023-08%20UAT%20findings.md)

#### Planning

- Desired date range or test duration: ~ 7/19/2023-8/1/2023
- Desired number of users: [7]
- How you'll recruit the right production test users: [**Research Plan** ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/research-plan.md) 
- How you'll conduct the testing: [**Conversation Guide**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/conversation-guide.md) 
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Feature Toggle mentioned above 

#### Results

- Number of users: 5
- Number of bugs identified / fixed: 0
- Was any downstream service affected by the change?: no
- Types of errors logged: n/a
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? no
- If yes, what: n/a with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

[Staged rollout ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782)

#### Planning
  
|Launch % |Time Frame | Planned Date Range | Ticket | 
|-------|-----------|-----------|------|
| Launch to 5% | 1 week | week of 08/7/2023 | [#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 10% | 1 week | week of 08/14/2023 |[#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 25% | 1 week | week of 08/21/2023 |  [#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782)|
| Launch to 50% | 1 week | week of 08/28/2023 |[#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |
| Launch to 100% | 1 week | week of 09/04/2023 |[#60782](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60782) |

### Metrics
  
- **How will you make the product available in production while limiting the number of users who can find/access it:** <br>We'll enable the toggle for a % of users<br>
- **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:** <br> We want to see that the new LH API is working as good or better than our current EVSS API<br>
  - Successful retrievals of direct deposit (C&P) information
  - Failed retrievals of direct deposit (C&P) information
  - Form Submits for direct deposit (C&P) information
  - Failures in saving direct deposit (C&P) information
- **Links to the dashboard(s) showing "success criteria" metrics:**
     - [GA Dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
     - [AE Dashbaoard Sandbox](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/_u.date00=20230709&_u.date01=20230802)
     - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?display=daily&environment=production&field=url&field=error.value&field=timestamp&name=Errors+by+URL&query=event.type%3Aerror+url%3Ahttps%3A%2F%2Fapi.va.gov%2Fv0%2Fprofile%2Fdirect_deposits%2Fdisability_compensations&sort=-url&statsPeriod=14d&widths=-1&widths=-1&widths=-1)
     - Data Dog
          - [Viewing LH Direct Deposit](https://vagov.ddog-gov.com/apm/resource/vets-api/rack.request/e504ea6e07d6848b?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AProfile%3A%3ADirectDeposits%3A%3ADisabilityCompensationsController%23show%22&env=eks-prod&spanType=service-entry&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1690315410527&end=1690920210527&paused=true)
          - [Updating LH Direct Deposit](https://vagov.ddog-gov.com/apm/resource/vets-api/rack.request/bc1e3cb125eb0125?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AProfile%3A%3ADirectDeposits%3A%3ADisabilityCompensationsController%23update%22&env=eks-prod&spanType=service-entry&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1690315475062&end=1690920275062&paused=true)

- **Who is monitoring the dashboard(s)?:** <br>PM/PO/BE Developer<br>


## Launch
---

### Stage A: Canary (10%)

#### Results

- **Number of unique users:** [FILL_IN]
- **Metrics at this stage (per your "success criteria"):** <br> [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/README.md#measuring-success)
- **Was any downstream service affected by the change?:** [PICK_ONE]: yes | no |  N/A
- **Types of errors logged:** [FILL_IN]
- **What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** [FILL_IN]

---
### Stage B: 25% of users

#### Results

- **Number of unique users:** [FILL_IN]
- **Metrics at this stage (per your "success criteria"):** <br> [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/README.md#measuring-success)

- **Was any downstream service affected by the change?:** [PICK_ONE]: yes | no |  N/A
- **Types of errors logged:** [FILL_IN]
- **What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** [FILL_IN]
---
### Stage C: 50% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
---
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
