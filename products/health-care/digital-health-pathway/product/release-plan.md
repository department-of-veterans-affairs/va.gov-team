# Digital Health Platform Device Connection Release Plan


## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: August 18, 2022 - open
- Desired number of users: a small group of Pilot users
- How you'll recruit the right production test users: we are releasing our MVP to a limited number of users. Our initial users will be care team members at various sites who actively engage with Veteran Fitbit users. Veterans in this group will learn about the program through their care team at this site.
- How you'll conduct the testing: we will be engaging with users on a recurring basis to get their feedback on the application
- How you'll give the test users access to the product in production w/o making it live on VA.gov: participants of our MVP pilot use case will be our test users. We will provide them with a direct link to the registration page on the live site. 

### Results:
- Number of users: TBC
- Number of bugs identified / fixed: TBC
- Was the data submitted (if any) easy for VA to process?: TBC (yes/no)
- Types of errors logged: TBC
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? TBC (yes/no)
- If yes, what: TBC

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout?

**No**, a staged rollout is not required. However, we do have feature toggles. They’re turned on in Dev and Staging but off in Production.

### Planning

- Desired date range: _\[08/18/22 - open\]_
- How will you make the product available in production while limiting the number of users who can find/access it: We will have a standalone flow on VA.gov accessed by a specific link sent to a Veteran. This option is not something a Veteran could navigate to on VA.gov and instead would be accessed by a direct link.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: _\[[Digital Health Platform Device Connection Product Outline - Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-pathway#desired-user-outcomes)\]_
- Links to dashboard(s) showing "success criteria" metrics: _\[[Digital Health Platform Device Connection Product Outline - Desired User Outcomes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-pathway#desired-user-outcomes)\]_

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: x (_minimum 2 hours_)
- Percentage of Users (and roughly how many users do you expect this to be): x% (500 users) (_Recommendation: select a percentage that targets ~500 users, or at most 10%_)

#### Results:
- Number of unique users: TBC
- Metrics at this stage (per your "success criteria"): TBC
- Was the data submitted (if any) easy for VA to process?: TBC (yes/no)
- Types of errors logged: TBC
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? TBC

### Stage B: moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: x (_minimum 1 day_)
- Percentage of Users (and roughly how many users do you expect this to be): 25% (x users)

#### Results:
- Number of unique users: TBC
- Metrics at this stage (per your "success criteria"): TBC
- Was the data submitted (if any) easy for VA to process?: TBC (yes/no)
- Types of errors logged: TBC
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? TBC

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

## Go Live!

### Planning:
- Desired date: 08/18/22
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
