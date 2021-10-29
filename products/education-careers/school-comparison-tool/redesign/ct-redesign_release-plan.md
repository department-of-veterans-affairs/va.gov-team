# Comparison Tool Redesign Release Plan 

## Phase I: User Acceptance Testing (UAT)

### Planning:
- Desired date range or test duration: 07/12-07/16/21
- Desired number of users: Limited to EDU Stakeholders
- How you'll recruit the right production test users: EDU Stakeholders
- How you'll conduct the testing: Provide a test script
- How you'll give the test users access to the product in production w/o making it live on VA.gov: EDU Stakeholders will access staging

### Results:
- Number of users: 3
- Number of bugs identified / fixed: 0/0
- Was the data submitted (if any) easy for VA to process?: N/A
- Types of errors logged: N/A
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? UX made select updates based on EDU input
- If yes, what: 
  - Added "Learn more" content to Comparison page
  - Switched map location identification from letters to numbers so it's easier to gauge large result sets

## Phase II: Beta Release Testing
Remote unmoderated testing on staging with survey. 

### Planning:
- Desired date range or test duration: August 25(-ish)- Sept 7, 2021 
- Desired number of users: 80. Recruiting across various education benefits, Veteran/dependent statuses, users engaging with assistive devices, and device type (desktop & mobile)
- How you'll recruit the right production test users: Working with Perigean to segment & recruit the array of participants 
- How you'll conduct the testing: Testing will be asynchronous.  We'll recruit & send instructions via email; participants will engage with the tool & answer survey questions to rate their experience
- How you'll give the test users access to the product in production w/o making it live on VA.gov: The redesigned Comparison Tool is currently deployed and accessible on staging  

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase III: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout?

**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:

* This change does not add substantial new functionality to VA.gov
* This change does not impact user flows through tasks
* This change does not affect traffic to backend services

#### Exceptions

Right now, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | Yes |
| Static content changes | Doable but tricky |
| URL redirects | No |

Other exceptions to this requirement can be approved by DEPO VSP leads.

### Planning

- Desired date range: 11/30/21 - 01/04/22
- How will you make the product available in production while limiting the number of users who can find/access it: 
  - The CT Redesign sandbox application is currently behind a prod flag. It will be placed behind a feature flag and the prod flag flipped to move to production. It will be active in parallel to the existing CT.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
  - **Performance Metrics**
    -  CT Search Autocomplete - [latency](http://grafana.vfs.va.gov/d/000000050/backend-service-report?viewPanel=141&orgId=1&from=now-7d&to=now) should remain stable at well below 500 ms
    -  CT Keyword Search - [latency](http://grafana.vfs.va.gov/d/000000050/backend-service-report?viewPanel=141&orgId=1&from=now-7d&to=now) should remain stable averaging 1 s with peaks below 2 s
    -  Google Analytics: Bounce Rate doesn't exceed 20% (Bounce rate YTD: 13.3%; 2020: 17%)
  - **Satisfaction Metrics**
    -   Contact Center: Call volume doesn't increase above 5 calls / month with negative input.  (White House Call Center reports June 2021 = 3 calls - all navigation-issues; July 2021 = 0 calls) 
    -   Medallia Ratings: CT Satisfaction scores don't drop below 3.0 pts (Satisfaction June 2021 = 3.71, 9 Ratings; July 2021 = 4.5, 2 Ratings)  
  - **Usage Metrics**
    -   CT Location Search - Monitor usage statistics to ensure existing licensing for map APIs does not exceed usage threshold. The license is managed by the Facility Locator team (POC: nancy.smith@oddball.io).

- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: one week (_minimum 2 hours_)
- Percentage of Users (and roughly how many users do you expect this to be): 10% (500 users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: two weeks (_minimum 1 day_)
- Percentage of Users (and roughly how many users do you expect this to be): 25% (1250 users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

## Go Live!

### Planning:
- Desired date: January 2022
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

