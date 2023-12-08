## Step 1: Development

 Features toggles here:

| Toggle name | Description |
| ----------- | ----------- |
| financial_status_report_streamlined_waiver | Enables users to interact with the new SW enhancements and avoid list loops |


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
| New feature in existing application | Yes |
| New application | No |
| Static content changes | N/A |
| URL redirects | No |

DEPO VSP / OCTO leads can approve other exceptions to this requirement.

### Rollback Process:

> - Our Dev Team, in conjunction with our business partners will monitor site traffic and Veteran communications that denote submission problems. If they see a spike in errors or unexpected behavior, they will contact the engineering team to get the FE engineer to disable the toggle asap.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration:  completed in QA
- Desired number of users: n/a
- How you'll recruit the right production test users: random sample/QA
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

- Desired date range:  8/17/23 - 8/30/23
- How will you make the product available in production while limiting the number of users who can find/access it: Use of Feature toggles.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: Successful submissions, *reported contact center calls < 2 calls*
- Link to the dashboard(s) showing "success criteria" metrics:
- https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20221201&amp;_u.date01=20230221&amp;explorer-segmentExplorer.segmentId=analytics.eventLabel&amp;explorer-table.plotKeys=%5B%5D&amp;explorer-table.filter=fsr-5655&amp;explorer-table.secSegmentId=analytics.eventAction&amp;explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22RE%22,%22fsr-5655%22,0%5D%5D&amp;_r.drilldown=analytics.eventCategory:Transactions
- Who is monitoring the dashboard(s)?: BE Developer (Scott James) and PM (Tom Davis), DM (Heather Rienks)

### Stage A: Canary

#### Planning

- Length of time: One week
- Percentage of Users (and roughly how many users do you expect this to be): 10% 

#### Results

- Number of unique users: ≈10
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: No
- Types of errors logged: No such file or directory @ rb_sysopen - tmp/pdfs/5655_b119e499-8e61-41ec-8000-69353043cb64_final.pdf
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None, issue could not be reproduced reliably.

### Stage B: 25% of users

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: ≈10
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: No
- Types of errors logged: None
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

### Stage C: 50% of users

#### Planning

- Length of time: 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: ≈5
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: No
- Types of errors logged: None
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? No

### Stage D: 100% of users

#### Planning

- Length of time: N/A
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: ≈15
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: No
- Types of errors logged: None
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? No

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users: ≈170
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?:  Yes
- Types of errors logged: BackendServiceException: {:source=>"VaNotify::Service", :code=>"VANOTIFY_400"}
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? Yes
- If yes, what: Minor changes to requests to VaNotify service to prevent client side errors.

### 1-month results

- Number of unique users: ≈3275
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: Yes
- Types of errors logged: BackendServiceException: {:source=>"VaNotify::Service", :code=>"VANOTIFY_400"}
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? Yes
- If yes, what: Minor changes to requests to VaNotify service to prevent client side errors.

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
