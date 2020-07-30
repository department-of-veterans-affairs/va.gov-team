# Release Plan - Caregivers

###### Copied from [VSP Release Plan Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

The goal of a phased roll out is to answer these questions:

- How people will naturally use our product when we're not there to guide them to it?
- Can data successfully be submitted, and will that data will be easy or difficult for the VA to process?
- Are people likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment?

We will answer these questions by testing the form "in the wild" at a small scale, and then fixing/adjusting prior to going live to users.

---

## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: Moderated production testing |1 week|30 CSCs| TBD  |
|Phase 2A: Canary release (minimal) |1 week|1% (or ~25 applications per day)|TBD|
|Phase 2B: Moderate release |2 weeks|5% (~50 applications/day)|TBD|
|Phase 2C: Substantial release| 3 weeks | 50% (~100 applications/day) | TBD
|Phase 3: Go Live| indefinite | 100% | TBD


---

## Phase I: Moderated production testing

### Planning:
- Desired date range or test duration: 1 week (dates TBD)
- Desired number of users: 30 Caregiver Support Coordinators (CSCs)
- How you'll recruit the right production test users: Coordination with the Caregiver Program team
- How you'll conduct the testing: CSCs will use the online form to process new caregiver applications before the new program eligibility rules go into place. This will ensure that the form captures all information as expected, and give CSCs time to explore the new CARMA changes/integration.
- How you'll give the test users access to the product: The production URL will be live, but the form will not be linked to any of the PCAFC information pages.

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: 
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 
- If yes, what: 

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Criteria [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md#do-i-need-a-staged-rollout)

### Planning

- Desired date range: TBD
- How will you make the product available in production while limiting the number of users who can find/access it: Feature [toggles](https://github.com/department-of-veterans-affairs/vets-website/pull/12855)
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: To be decided alongside the Program team
- Links to dashboard(s) showing "success criteria" metrics: Link coming soon


### Stage A: Canary (Minimal)

_Goal: Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: 1 week (after MPT is completed)
- Percentage of Users (and roughly how many users do you expect this to be): 1% (or ~25 applications per day) 

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: 
- Types of errors logged: 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: Moderate

_Goal: Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 2 weeks
- Percentage of Users (and roughly how many users do you expect this to be): 5% (~50 users per day)

#### Results:
- Number of unique users:
- Metrics at this stage (per your "success criteria"): 
- Was the data submitted (if any) easy for VA to process?:
- Types of errors logged:
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage C: Substantial

_Goal: Test a substanial population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 3 weeks
- Percentage of Users (and roughly how many users do you expect this to be): 50% (~100 users per day)

#### Results:
- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was the data submitted (if any) easy for VA to process?
- Types of errors logged: 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?


## Go Live!

### Planning:
- Desired date: TBD
- Post-launch KPI 1: Online applications submitted
- Post-launch KPI 2: Ratio of failures/to successes
- Post-launch KPI 3: Why applications are failing 
- Go / No Go: [ready / not ready](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md)

### 1-week results:
- Number of unique users: 
- Post-launch KPI 1 actual: 
- Post-launch KPI 2 actual: 
- Post-launch KPI 3 actual: 
- Any issues with VA handling/processing?:
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 
- If yes, what: 

### 1-month results:
- Number of unique users: 
- Post-launch KPI 1 actual: 
- Post-launch KPI 2 actual: 
- Post-launch KPI 3 actual: 
- Any issues with VA handling/processing?:
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 
- If yes, what: 

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How have the KPIs we gathered compared to the pre-launch definition(s) of "success"?
2. What qualitative feedback have we gathered from users or other stakeholders, if any?
3. Which of the assumptions we listed in your product outline were/were not validated? 
4. How might our product evolve now or in the future based on these results?
