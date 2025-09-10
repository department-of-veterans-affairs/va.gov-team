## Step 1: Development

 Features toggles here:

| Toggle name | Description |
| ----------- | ----------- |
|  dispute_debt | Enables the Dispute Debt feature |


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

### Do I need a staged rollout?

**Yes**

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Y |
| New application | Y |
| Static content changes | Y |
| URL redirects | N |

DEPO VSP / OCTO leads can approve other exceptions to this requirement.

### Rollback Process:

> - Our Dev Team, in conjunction with our business partners will monitor site traffic and Veteran communications that denote submission problems. If they see a spike in errors or unexpected behavior, they will contact the engineering team to get the FE engineer to disable the toggle asap.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT) N/A

#### Planning

- Desired date range or test duration:  completed in QA
- Desired number of users: N/A
- How you'll recruit the right production test users: N/A
- How you'll conduct the testing: via canary test
- How you'll give the test users access to the product in production w/o making it live on VA.gov: N/A

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

#### Rollout Planning

- Desired date range:  6/30/25 - 7/16/25
- How will you make the product available in production while limiting the number of users who can find/access it: Use of Feature toggles.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: Request clicks*
- Link to the dashboard(s) showing "success criteria" metrics:
- https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20221201&amp;_u.date01=20230221&amp;explorer-segmentExplorer.segmentId=analytics.eventLabel&amp;explorer-table.plotKeys=%5B%5D&amp;explorer-table.filter=fsr-5655&amp;explorer-table.secSegmentId=analytics.eventAction&amp;explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22RE%22,%22fsr-5655%22,0%5D%5D&amp;_r.drilldown=analytics.eventCategory:Transactions
- Who is monitoring the dashboard(s)?: FE Developer (Andrew Rodiek) BE Developer (Derek Dyer) and PM (Tom Davis), DM (Heather Rienks)

### Stage A: 1%

#### Planning

- Length of time: Six Days 7/16/25 - 7/21/25
- Percentage of Users (and roughly how many users do you expect this to be): 1% 

#### Results

- Number of unique users: 8
- Metrics at this stage (per your "success criteria"): 100% success
- Was any downstream service affected by the change?: N/A
- Types of errors logged: None
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?:
  - No changes required at this stage

### Stage B: 5% of users

#### Planning

- Length of time: Three Days 7/21/25 - 7/23/25
- Percentage of Users (and roughly how many users do you expect this to be): 5%

#### Results

- Number of unique users: 18
- Metrics at this stage (per your "success criteria"): 100% success
- Was any downstream service affected by the change?: N/A
- Types of errors logged: None
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?:
  - No changes required at this stage

### Stage C: 20% of users

#### Planning

- Length of time: Six Days 7/23/25 - 7/28/25
- Percentage of Users (and roughly how many users do you expect this to be): 20%

#### Results

- Number of unique users: 71
- Metrics at this stage (per your "success criteria"): 3 errors, under 1 second latency
- Was any downstream service affected by the change?:
- Types of errors logged: 3.  Timeouts from downstream service
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?:
  - We are continuing to monitor downstream errors and latency. As of now they are both within acceptable ranges for us

### Stage D: 50% of users

#### Planning

- Length of time: Three Days 7/28/25 - 7/30/25
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: 134
- Metrics at this stage (per your "success criteria"):  117 successful submissions, 15 errors.
- Was any downstream service affected by the change?: No
- Types of errors logged: Failures tied to latency. In addition to the errors, there are other spikes of latency that still succeed but are outside the bounds of what we would consider acceptable
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?:
  - We should be seriously considering the move to making this async to a sidekiq, based on this weeks data.  
 
### Stage E: 100% of users

#### Planning

- Length of time: Final 7/30/25
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: 218 users
- Metrics at this stage (per your "success criteria"): 86.24% success rate, average 
- Was any downstream service affected by the change?:
- Types of errors logged: Timeouts from dmc/filenet
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?:
  - There are enough spikes in latency and high enough of an error rate that we are moving forward with making this submission async.  Work has already begun on this process.

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users (total number of submissions): 517
- Post-launch KPI 1 actual: Total number of digital debt disputes(success): 445
- Post-launch KPI 2 actual: Total number of submission confirmations sent (success, no confirmation currently): 445
- Post-launch KPI 3 actual: Error Rate: Total number of errors/failures (failure / success + failures): 5.7% error rate (472/27)
- Any issues with VA handling/processing?: Yes, we are getting Gateway timeouts and 500 server error responses
- Types of errors logged: Gateway timeout in DMC and 500 responses
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges?: Yes
- If yes, what: We are working on making this form async so we can implement retries.

### 1-month results

- Number of unique users: 4,368
- Post-launch KPI 1 actual: Total number of digital debt disputes: 2,299
- Post-launch KPI 2 actual: Total number of submission confirmations sent (success, no confirmation currently): 2,299
- Post-launch KPI 3 actual: Error Rate: Total number of errors/failures (failure / success + failures): 17.8%
- Any issues with VA handling/processing?: Yes, we are getting Gateway timeouts and 500 server error responses
- Types of errors logged: BackendServiceException:  Gateway timeout in DMC and 500 responses
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges?: Yes
- If yes, what: We are working on making this form async so we can implement retries. Minor changes to requests to VaNotify service to prevent client side errors.

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
