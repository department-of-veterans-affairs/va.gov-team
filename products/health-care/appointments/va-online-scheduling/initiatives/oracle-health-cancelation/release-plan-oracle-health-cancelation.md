# Cancel Oracle Health Appointments on VA.gov 

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: 1 week
- Desired number of users: 3
- How you'll recruit the right production test users: lorem ipsum
- How you'll conduct the testing: lorem ipsum
- How you'll give the test users access to the product in production w/o making it live on VA.gov: lorem ipsum

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout?
 - Yes

Feature Toggle: `TBD`

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | No |
| Static content changes | N/A |
| URL redirects | No |

Other exceptions to this requirement can be approved by DEPO VSP leads.

### Planning

- Desired date range: 
   - 06/15/24 - 07/15/24
- How will you make the product available in production while limiting the number of users who can find/access it: 
   - VA.gov feature flag `va_online_scheduling_appointment_list`
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
   - Increase number of users viewing their appointments in VAOS 
- Links to dashboard(s) showing "success criteria" metrics: 
   - KPI Dashboard: https://va-gov.domo.com/page/1769944412
   - Performance Dashboard: https://va-gov.domo.com/page/1315231862

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: 4 hours to 1 day
- Percentage of Users 10% (23,019 users) 

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 20% (46,037 users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

## Go Live!

### Planning:
- Desired date: 06/15/23
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
