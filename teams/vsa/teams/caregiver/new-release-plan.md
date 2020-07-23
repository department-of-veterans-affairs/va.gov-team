# Release Plan - Caregivers

### Copied from [VSP Release Plan Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

The goal of a phased roll out is to answer these questions:

- How people will naturally use your product when you're not there to guide them to it?
- How will submitted data get to VA, and will that data will be easy or difficult for VA to process?
- Are people likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment?

By testing products "in the wild" at a small scale, and then fixing/adjusting prior to going live to millions of VA.gov users :tada:

---

## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: Moderated production testing |1 month|30 CSCs| TBD  |
|Phase 2A: Canary release (minimal) |1 week|1%|TBD|
|Phase 2B: Robin release (moderate) |2 weeks|5%|TBD|
|Phase 2C: Eagle substantial (substanial) release | 3 weeks | 50% | TBD


---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: 1 month (dates TBD)
- Desired number of users: 30 Caregiver Support Coordinators (CSCs)
- How you'll recruit the right production test users: Coordination with the Caregiver Program team
- How you'll conduct the testing: CSCs will use the online form to process the new caregiver applications before the new program eligibility rules go into place. This will ensure that the form captures all information as expected, and give CSCs time to explore the new CARMA changes.
- How you'll give the test users access to the product in production w/o making it live on VA.gov: the production URL will be live, but the form will not be linked to any of the PCAFC information pages.

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Criteria [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md#do-i-need-a-staged-rollout)

### Planning

- Desired date range: _\[mm/dd/yy - mm/dd/yy\]_
- How will you make the product available in production while limiting the number of users who can find/access it: \[_lorem ipsum_\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary (Minimal)

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: 1 week (after UAT is completed)
- Percentage of Users (and roughly how many users do you expect this to be): 1% (less than 500 users) 

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: Robin (Moderate)

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 2 weeks
- Percentage of Users (and roughly how many users do you expect this to be): 5% (TBD users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

### Stage C: Eagle (Substantial)

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 3 weeks
- Percentage of Users (and roughly how many users do you expect this to be): 50% (TBD users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

## Go Live!

### Planning:
- Desired date: mm/dd/yy
- Post-launch KPI 1: xx lorem ipsum
- Post-launch KPI 2: xx lorem ipsum
- Post-launch KPI 3: xx lorem ipsum
- etc
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?
