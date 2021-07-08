# VAOS Homepage Refresh Release Plan

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

n/a - UAT to be conducted after additional initiatives using refresh 

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Planning

- Desired date range:
  - Mon, 6/28/21 - Mon, 7/12/21
- How will you make the product available in production while limiting the number of users who can find/access it:
  - VA.gov feature flag `va_online_scheduling_homepage_refresh`
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Homepage errors
- Links to dashboard(s) showing "success criteria" metrics:
  - [Baseline (Google Analytics)](https://analytics.google.com/analytics/web/#/dashboard/1iZBzQ5ITaG9AdBCy6rLeg/a50123418w177519031p176188361/)
  - [Performance (Google Analytics)](https://analytics.google.com/analytics/web/#/dashboard/kWfLZc4BRA2IglIAZYtfYA/a50123418w177519031p176188361/)


### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: 4 hrs - 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 5% (~430 users), 10% (~850 users)

#### Results:
- 5%
- Date and time: 6/30/21, 815am PT - 230pm PT
- Number of unique users: 48 at minimum
- Metrics at this stage (per your "success criteria"):  Total errors ~270, but confirmed it was not due to this initiative
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged:
- 
![Screen Shot 2021-06-30 at 2 54 05 PM](https://user-images.githubusercontent.com/72046525/124036624-251d9080-d9b3-11eb-8e74-65703ae0a218.jpg)

- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? None

### Stage B: moderate 1

#### Planning

- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 20% (~1.7k users)

#### Results:
- 10%
- Date and time: 6/30/21, 230pm PT - 
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate 2

#### Planning

- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 60% (~24k users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?


## Go Live!

### Planning:
- Desired date: Tue, 7/13/21
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
