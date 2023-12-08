# Release Plan

---

## Step 1: Development

| Toggle name | Description |
| ----------- | ----------- |
| notice_of_disagreement | This is the primary feature toggle for the form, excluding the static content page. |

## Step 2: Validation

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Launch communications

Internal
- Mid-October: BVA is notified about upcoming release and tentative incremental rollout dates. 

### Define the Rollback process

Rollback will be considered in the following scenarios:

- Claim submission or establishment failures
- Significant reports of user experience challenges from the Contact Center

To initiate and execute rollback, we'll follow these steps:

- Product management and engineers will monitor analytics for VA.gov and the Lighthouse API. 
- If there is a spike in errors or unexpected behavior, communication will be sent to the VA Product Owner, Decision Review team, and LH Banana Peels team.
- The Decision Review team and/or LH Banana Peels team will diagnose the issue and recommend either A) rollback the feature, or B) prioritize it as a bug ticket, in coordination with the VA Product Owner (Matt Self).
- In the event of a rollback, the PO and teams will agree upon criteria for re-release, including but not limited to design or code changes, full system testing, and reduction of release percentage. 
- The PO and teams will conduct a go/no-go before re-releasing to production.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: [Week of 10/1/2023]
- Desired number of users: [TBD]
- How you'll recruit the right production test users: [Internal team and VA audiences]
- How you'll conduct the testing: [We are submitting sample claims to Lighthouse, which will be pushed through the system and reviewed by the Central Mail Portal team. The CMP team is responsible for ensuring that claims are established for processing, and that data is received in a format that supports upstrema processes such as evidence support and automation (if available).]
- How you'll give the test users access to the product in production w/o making it live on VA.gov: [We are conducting this testing in staging.]

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: [10/16/2023 - 10/26/2023]
- How will you make the product available in production while limiting the number of users who can find/access it: [feature toggle].
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?
  - Abandonment rate <20%
  - Contact Center calls due to inability to complete the form caused by technical error <2 calls

API "gate check" metrics:
- Green: "everything is going smooth" -  < 0.1%
- Yellow: "we should give this a look" - 0.1% - 0.5%
- Red: "stop everything, we need to check this out" -  > 0.5%

Evidence "gate check" metrics (thresholds will be higher - LH is used to a higher error rate through the Benefits Intake API):
- Green: "everything is going smooth" -  < 2.5%
- Yellow: "we should give this a look" - 2.5% - 4%
- Red: "stop everything, we need to check this out" -  > 4% (edited) 

Links to the dashboard(s) showing "success criteria" metrics: 

- Google Analytics
- Domo
- Data Dog (Eugene to add a link)

Who is monitoring the dashboard(s)?: Decision Review Team, Lighthouse Team

### Stage A: Canary

#### Planning

- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 5%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

#### Planning

- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

#### Planning

- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users

#### Planning

- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: Forever! (villian laugh lol)
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


