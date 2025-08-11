# Release Plan: Simple Mileage-Only Claims

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| travel_pay_power_switch | Main switch for the Travel Pay feature on VA.gov using the new BTSSS (travel pay) API. Enabled - Requests are handled as normal. Disabled - Requests are not handled. Server returns a 503 (Service Unavailable) until re-enabled. |
| travel_pay_submit_mileage_expense | A switch that toggles availability of the submit mileage expense feature. Enabled - Requests are handled as normal. Frontend features are available per toggle settings. Disabled - Requests are not handled. Server returns a 503 (Service Unavailable) until re-enabled. Frontend features are not available. |
| travel_pay_view_claim_details | A frontend-focused switch that toggles visibility of and access to the Travel Pay claim details page and entry point (features toggled together). Enabled - Entry point link and claim details page are viewable. Disabled - Entry point link and claim details page are not viewable. |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
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

#### Planning

- Desired date range or test duration: 3/17-3/28
- Desired number of users: 9
- How you'll recruit the right production test users: Through Perigean, we will identify 9 eligible claimants with appointments in the last 30 days who are able to file a simple, mileage-only claim.
- How you'll conduct the testing: Cara Frissell, our UX researcher, will conduct UAT
- How you'll give the test users access to the product in production w/o making it live on VA.gov: We will put them behind the feature flag.

#### Results

- Number of users: 9
- Number of bugs identified / fixed: 1/1
  - [FILL_IN] : Key issue with the appointments plugin detected
- Was any downstream service affected by the change?: no]
- Types of errors logged: API error finding appointments
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: Yes
- If yes, what: Adding updated entry points

### Phase Ib: Production short rollout to understand error rates (added 4/2/25)

On 4/3/25, To help us better understand if the appointment API problems are really near 25% or closer to check-in's error rate, which is 1.5-2%,  we are looking to gather additional error rate data by allowing 50 Veterans to file simple mileage-only claims on VA.gov in production.

5% for 30 minutes, followed by 100% until we hit 50 unique users - during business hours only.

The idea will be after this test, we should have more insight into the error rate. If it is still close to 25%, then launch will be blocked until the API fix is complete. If it is lower, then we might be able to rollout. An official Go-No Go meeting will have to occur for rollout. 

Results:
-Total submissions: 70
-Total unique users: 53

By appointments: of the 67 appointments that people attempted filing for, there were 60 successful attempts and 7 errors (5 errors with appointment mismatches and 2 missing addresses - a 10.4% error rate).

By users:
53 unique users, with 46 able to submit all appointments successfully (86.7%)
- 5 had appointment mismatch issues (9.4%)
- 2 had a missing address when adding an expense (3.8%)

By total submission attempts:
- 70 submission attempts for 67 appointments
- 10 errors
- 8 appt mismatch errors (5 appointments total which had errors; 1 submission attempted 2 times, 1 submission attempted 3 times)
- 2 missing address when adding an expense

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: 4/21-4/24
- How will you make the product available in production while limiting the number of users who can find/access it: Using the feature flag
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - User count
  - Error rate
  - Links to the dashboard(s) showing "success criteria" metrics: https://vagov.ddog-gov.com/dashboard/27b-m6k-7an/travel-pay-smoc-performance-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1745241465502&to_ts=1745327865502&live=true
- Who is monitoring the dashboard(s)?: Eng, Product, and UX Leads

### Stage A: 10%

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 1 Day
- Percentage of Users (and roughly how many users do you expect this to be): 10%

| Criteria | Measurement |
| ----------- | ----------- |
| All users are able to successfully submit a claim | claims submitted on VA.gov = claims created in API |
| Error Count | Key error types, percentages, and associated error messages |
| Claims appearing for Stations | Claims submitted on VA.gov = Claims processed by TCP |
| Claims in manual review | % and # of claims in manual review |
   

#### Results

- Number of unique users: 2 users, 5 submissions
- Was any downstream service affected by the change?: [PICK_ONE]: no
- Types of errors logged: none
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? none

| Criteria | Measurement |
| ----------- | ----------- |
| All users are able to successfully submit a claim | 100%  |
| Error Count | 0% |
| Latency | 17.15 sec }

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: TBA, pending VTP approval 2 weeks minimum (or until all criteria is met and any issues are addressed)
- Percentage of Users (and roughly how many users do you expect this to be): 25%

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
