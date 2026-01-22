# Release Plan: Simple Mileage-Only Claims On Mobile

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles (used only for `vets-api` BE)](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles) and [remote config feature toggle (VAHB FE only - does not affect BE)](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/FrontEnd/RemoteConfig/).

List the features toggles here.

| Toggle name | Toggle type | Description |
| --- | --- | --- |
| travelPaySMOC | Firebase Remote Config | Main switch for the Travel Pay SMOC in the VAHB Mobile app. Enabled - FE features are available and functional and a flag is sent to the API to trigger travel pay access (i.e. to append claims to the appointments list). Disabled - FE features are not visible to users and the flag is not sent to `vets-api`, meaning no associated BE functionality is triggered. |

## Step 2: Validation

The VAHB Mobile app is released on a two-week cycle ([Release Cycle dates available here](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/Releases/)). The release candidate branch is cut from the develop branch 2 weeks before the release date to allow for internal QA and app store review before being added to the app stores.

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [Mobile best practices for QA](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/QA/QualityAssuranceProcess/).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

Our PM, Engineering Lead, Research Lead, and stakeholders will monitor analytics both on Google Analytics and DataDog. If they see a spike in errors or unexpected behavior, they will flag to the engineering team that there is a problem. The engineering team will do the following:
#### If a critical severity issue
1. The feature toggle will be disabled for all users
2. Debugging will start immediately
3. The fix will be tested and deployed through normal CI/CD practices
4. The feature toggle will be re-enabled, possibly at a lower percentage of logged-in users
#### If a high-severity issue
1. The feature toggle will remain enabled, possibly at a reduction of availability (e.g. lowered percentage of logged in users)
2. The offending commit will be reverted through normal `git` operations
3. Remove offending code by deploying the revert commit
4. A fix will be highly prioritized and worked on
5. The fix will be tested and deployed through normal CI/CD practices
#### If a low-severity issue
1. The toggle will remain enabled with no reduction in availability
2. A fix will be prioritized and worked on
3. The fix will be tested and deployed through normal CI/CD practices, with no interruption to feature uptime.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

This can be performed by running an on demand production build on a branch that has had any remote config feature flags removed. Users will be added to that specific build in either AppTester (Android) or TestFlight (iOS) for testing.

#### Planning
- Desired date range or test duration:
  - 7/1 (after the release branch has been cut) - 7/14
- Desired number of users: 2-4
- How you'll recruit the right production test users: Friends & Family only
- How you'll conduct the testing:
  - Some moderated in person testing
  - Some unmoderated testing with follow up interviews
- How you'll give the test users access to the product in production w/o making it live in the app:
  - Test build installed on test phones and provided for in person moderated testing
  - Users added to AppTester and TestFlight via email for that specific build

#### Results

- Number of users: 
- Number of bugs identified / fixed: 
- Was any downstream service affected by the change?: 
- Types of errors logged: 
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: 
- If yes, what:

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: 
- How will you make the product available in production while limiting the number of users who can find/access it: 
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - User count
  - Error rate
  - Links to the dashboard(s) showing "success criteria" metrics: https://vagov.ddog-gov.com/dashboard/rhb-i5t-2sv/travel-pay-mobile-smoc-performance-dashboard?fromUser=false&refresh_mode=sliding&tpl_var_Environment%5B0%5D=eks-prod&from_ts=1751818758567&to_ts=1751905158567&live=true
- Who is monitoring the dashboard(s)?: Eng, Product, and UX Leads

### Stage A: 10%

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 1 Day
- Percentage of Users (and roughly how many users do you expect this to be): 10%

| Criteria | Measurement |
| ----------- | ----------- |
| All users are able to successfully submit a claim | claims submitted on mobile = claims created in API |
| Error Count | Key error types, percentages, and associated error messages |
| Claims appearing for Stations | Claims submitted on VA.gov = Claims processed by TCP |
| Claims in manual review | % and # of claims in manual review |

[SMOC on Mobile metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/Omnichannel%20Collaboration/VAHB/analytics/mileage-only-claims-quantitative.md)
[SMOC on Mobile conversion funnel](https://analytics.google.com/analytics/web/#/analysis/p265787033/edit/v65E2cAbSj2zCIMBQby8JQ)
   

#### Results

- Number of unique users:
- Was any downstream service affected by the change?: [PICK_ONE]: 
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

| Criteria | Measurement |
| ----------- | ----------- |
| All users are able to successfully submit a claim | --  |
| Error Count | --% |
| Latency | -- sec }

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: TBA, pending VTP approval 2 weeks minimum (or until all criteria is met and any issues are addressed)
- Percentage of Users (and roughly how many users do you expect this to be): 25%

| Criteria | Measurement |
| ----------- | ----------- |
| Claim submission error rate below 5% | Error rate upon submission on VAHB |
| Is total claim volume increasing by more than 10% | Total claim volume increase % |
| Claims in manual review | % and # of claims in manual review from VAHB |
| Claims appearing for Stations | Claims submitted on VAHB = Claims processed by TCP |
| Claims in manual review | % and # of claims in manual review |
| At least 10% of manual review claims adjudicated | % of VAHB claims adjudicated manual review |
| Time to adjust manual claims | Change in time required to adjust manual claims |
| All bugs are ticketed and given a severity rating | Total # of bugs by severity |
| Critical bugs are all addressed | % of critical bugs addressed |

[SMOC on Mobile metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/Omnichannel%20Collaboration/VAHB/analytics/mileage-only-claims-quantitative.md)
[SMOC on Mobile conversion funnel](https://analytics.google.com/analytics/web/#/analysis/p265787033/edit/v65E2cAbSj2zCIMBQby8JQ)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

| Criteria | Measurement |
| ----------- | ----------- |
| Claim submission error rate below 5% |  |
| Is total claim volume increasing by more than 10% |  |
| Claims in manual review |  |
| Claims appearing for Stations |  |
| Claims in manual review |  |
| At least 10% of manual review claims adjudicated |  |
| Time to adjust manual claims |  |
| All bugs are ticketed and given a severity rating |  |
| Critical bugs are all addressed |  |

[SMOC on Mobile metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/Omnichannel%20Collaboration/VAHB/analytics/mileage-only-claims-quantitative.md)
[SMOC on Mobile conversion funnel](https://analytics.google.com/analytics/web/#/analysis/p265787033/edit/v65E2cAbSj2zCIMBQby8JQ)

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 50%

| Criteria | Measurement |
| ----------- | ----------- |
| Claim submission error rate below 5% | Error rate upon submission on VA.gov |
| Is total claim volume increasing by more than 10% | Total claim volume increase % |
| Claims in manual review | % and # of claims in manual review from VA.gov |
| Claims appearing for Stations | Claims submitted on VA.gov = Claims processed by TCP |
| Claims in manual review | % and # of claims in manual review |
| At least 10% of manual review claims adjudicated | % of VA.gov claims  adjudicated manual review |
| Time to adjust manual claims | Change in time required to adjust manual claims |
| All bugs are ticketed and given a severity rating | Total # of bugs by severity |
| Critical bugs are all addressed | % of critical bugs addressed |

[SMOC on Mobile metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/Omnichannel%20Collaboration/VAHB/analytics/mileage-only-claims-quantitative.md)
[SMOC on Mobile conversion funnel](https://analytics.google.com/analytics/web/#/analysis/p265787033/edit/v65E2cAbSj2zCIMBQby8JQ)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

| Criteria | Measurement |
| ----------- | ----------- |
| Claim submission error rate below 5% |  |
| Is total claim volume increasing by more than 10% |  |
| Claims in manual review |  |
| Claims appearing for Stations |  |
| Claims in manual review |  |
| At least 10% of manual review claims adjudicated |  |
| Time to adjust manual claims |  |
| All bugs are ticketed and given a severity rating |  |
| Critical bugs are all addressed |  |

### Stage D: 100% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

- Length of time: TBA, pending VTP approval; 2 weeks minimum (or until all criteria is met and any issues are addressed)
- Percentage of Users (and roughly how many users do you expect this to be): 75%

| Criteria | Measurement |
| ----------- | ----------- |
| Claim submission error rate below 5% | Error rate upon submission on VA.gov |
| Is total claim volume increasing by more than 10% | Total claim volume increase % |
| Claims in manual review | % and # of claims in manual review from VA.gov |
| Claims appearing for Stations | Claims submitted on VA.gov = Claims processed by TCP |
| Claims in manual review | % and # of claims in manual review |
| At least 10% of manual review claims adjudicated | % of VA.gov claims  adjudicated manual review |
| Time to adjust manual claims | Change in time required to adjust manual claims |
| All bugs are ticketed and given a severity rating | Total # of bugs by severity |
| Critical bugs are all addressed | % of critical bugs addressed |

[SMOC on Mobile metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/Omnichannel%20Collaboration/VAHB/analytics/mileage-only-claims-quantitative.md)
[SMOC on Mobile conversion funnel](https://analytics.google.com/analytics/web/#/analysis/p265787033/edit/v65E2cAbSj2zCIMBQby8JQ)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

| Criteria | Measurement |
| ----------- | ----------- |
| Claim submission error rate below 5% |  |
| Is total claim volume increasing by more than 10% |  |
| Claims in manual review |  |
| Claims appearing for Stations |  |
| Claims in manual review |  |
| At least 10% of manual review claims adjudicated |  |
| Time to adjust manual claims |  |
| All bugs are ticketed and given a severity rating |  |
| Critical bugs are all addressed |  |

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

Happiness - CSAT
Engagement - how many claims / what percentage of claims are submitted using the tool? We should be able to get this from PowerBI
Adoption - conversion (how many users who start finish submitting a claim from Google Analytics)
Retention - returning users (may not be possible using GA), unique users, how the percentage of claims submitted on the tool changes
Task efficiency and effectiveness - completion rate (see Adoption, from GA), time on task from DOMO (confirm with VFS Analytics), “Get Help” link use from GA, did you complete your task question from Medallia

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
