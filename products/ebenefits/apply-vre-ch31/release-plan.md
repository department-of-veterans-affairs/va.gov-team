#VRE (CH31) - Release Plan

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: **April 13 - 16, 2021**
- Desired number of users: **5-10**
- How you'll recruit the right production test users: **Perigean and stakeholders**
- How you'll conduct the testing: **Zoom/Teams**
- How you'll give the test users access to the product in production w/o making it live on VA.gov: **Feature toggle (Flipper)**

### Results:
- Number of users: **N**
  - **Participant 1:**
  - **Participant 2:**
  - **Participant 3:**
  - **Participant 4:**
  - **Participant 5:**
  - **Participant 6:**
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: ****
- Types of errors logged: Invalid cookie
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? ****
- If yes, what: **N/A**

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Planning

- Desired date range: **April 19, 2021**
- How will you make the product available in production while limiting the number of users who can find/access it: **Whitelist and feature toggle for unauthenticated access**
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: **Abandonment rate < 20% , Error rate < 5%, etc**
- Links to dashboard(s) showing "success criteria" metrics: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/apply-CH36-VRE-counseling/README.md#kpis-okrs

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

Test a small group; 5-10% increasing steadily

#### Planning

- Length of time: **2-3 hours**
- Percentage of Users (and roughly how many users do you expect this to be): 5-10% (x users)
_x% (500 users) (_Recommendation: select a percentage that targets ~500 users, or at most 10%_)_

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: TBD
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: Moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: **2-3 hours**
- Percentage of Users (and roughly how many users do you expect this to be): 50% (x users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_This feature may increase and/or decrease its percentage of traffic based on Veteran engagement._

## Go Live!

### Planning:
- Desired date: **April 19, 2021**
- Post-launch KPI 1: xx Conversion rate, compare directy form, wizard and form, wizard and orientation and form
- Post-launch KPI 2: xx Volume, pageviews
- Post-launch KPI 3: xx lorem ipsum
- etc
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/apply-vre-ch31/release-plan.md]

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no
- If yes, what: lorem ipsum

### Check-ins:
 - Marci for search pge results
 - Randi for feature togglere removal and content replacement

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
