# Loki for logging - Release Plan 
---
## Phase I: Release and VSP testing 
---
### Planning:
- Desired date range: TBD
- Desired number of users: Members from both the VSP BE and FE tools teams (2 from each). 
- How you'll recruit the right production test users: Talk to the tools teams directly and show them the way to access the tool. 
- How you'll conduct the testing: We will have them use the documentation we have in place and ask for feedback or comments.
- How you'll give the test users access to the product in production w/o making it live on VA.gov: We will roll this out in lower enviroments and only direct certain services to the loki first instead of DataDog. 

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum


## Phase II: Go Live!

### Do I need a staged rollout?

We will be pointing services to loki and maintaining a list of which services point to which logging pipeline here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/logging/logsByService.md

### Planning:
- Desired date: mm/dd/yy
- Post-launch KPI 1: Decrease in amount of time it takes for a developer to access logs
- Post-launch KPI 2:Increase in number of users using Loki
- Post-launch KPI 3: Decrease number of logging  info in Sentry 
- Post-launch KPI 4: Less requests around logging issues
- Post-launch KPI 5: Service Design receives less pain points around logging


### 1-week results:
- Number of unique users: x
- Post-launch KPI 1: Decrease in amount of time it takes for a developer to access logs
- Post-launch KPI 2:Increase in number of users using Loki
- Post-launch KPI 3: Decrease number of logging  info in Sentry 
- Post-launch KPI 4: Less requests around logging issues
- Post-launch KPI 5: Service Design receives less pain points around logging
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1: Decrease in amount of time it takes for a developer to access logs
- Post-launch KPI 2:Increase in number of users using Loki
- Post-launch KPI 3: Decrease number of logging  info in Sentry 
- Post-launch KPI 4: Less requests around logging issues
- Post-launch KPI 5: Service Design receives less pain points around logging
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?
