# VAOS Print List Release Plan

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: 1 week
- Desired number of users: 3
- How you'll recruit the right production test users: Find veteran within the VA to test with
- How you'll conduct the testing: Online meeting
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Enable feature flag for test user

### Week 1 Results: August 1-8, 2023
- Number of users: 899
- Total Events: 1,214
- Number of bugs identified / fixed: 0/0
- Was the data submitted (if any) easy for VA to process?: yes
- Types of errors logged: No errors logged
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? no 
- If yes, what: n/a

### Week 2 Results: August 9-15, 2023
- Number of users: 989
- Total Events: 1,343
- Number of bugs identified / fixed: 0/0
- Was the data submitted (if any) easy for VA to process?: yes
- Types of errors logged: No errors logged
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? no 
- If yes, what: n/a

### Week 3 Results: August 16-22, 2023
- Number of users: 957
- Total Events: 1,297
- Number of bugs identified / fixed: 0/0
- Was the data submitted (if any) easy for VA to process?: yes
- Types of errors logged: No errors logged
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? no 
- If yes, what: n/a

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout?
 - No

Feature Toggle: `va_online_scheduling_appointment_list`

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | No |
| Static content changes | N/A |
| URL redirects | No |

Other exceptions to this requirement can be approved by DEPO VSP leads.

### Planning

- Desired date range: 
   - 08/03/2023
- How will you make the product available in production while limiting the number of users who can find/access it: 
   - N/A
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
   - Increase number of users viewing their appointments in VAOS 
- Links to dashboard(s) showing "success criteria" metrics: 
   - KPI Dashboard: https://va-gov.domo.com/page/1769944412
   - Performance Dashboard: https://va-gov.domo.com/page/1315231862

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: 4 hours to 1 day
- Percentage of Users 100%  

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

## Go Live!

### Planning:
- Desired date: 08/02/23
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
