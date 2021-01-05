# PCPG (CH36) - Release Plan

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: **Late December 2020 - Early January 2021**
- Desired number of users: **10**
- How you'll recruit the right production test users: **Perigean and stakeholders**
- How you'll conduct the testing: **Zoom/Teams**
- How you'll give the test users access to the product in production w/o making it live on VA.gov: **Flipper toggle**

### Results:
- Number of users: **6**
  - **Participant 1:** Chrome, was not able to share screen, given [link](https://www.va.gov/careers-employment/education-and-career-counseling/
), completed eligibility, Chrome autofilled info and it was submitted with no errors, received by Data Dimensions
  - **Participant 2:** Has already submitted this form in person some years ago. No submission.  
  - **Participant 3:** Canceled.
  - **Participant 4:** 
  - **Participant 5:** 
  - **Participant 6:** 
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: Yes, no issues found
- Types of errors logged: Invalid cookie
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? No  
- If yes, what: N/A

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Planning

- Desired date range: **January 2021**
- How will you make the product available in production while limiting the number of users who can find/access it: **Whitelist and feature toggle for unauthenticated access**
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: **Abandonment rate < 20% , Error rate < 5%, etc**
- Links to dashboard(s) showing "success criteria" metrics: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-CH36-VRE-counseling/README.md#kpis-okrs

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

Test a small group of 5-10

#### Planning

- Length of time: 2 hours
- Percentage of Users (and roughly how many users do you expect this to be): TBD
_x% (500 users) (_Recommendation: select a percentage that targets ~500 users, or at most 10%_)_

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 25% (x users)

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
