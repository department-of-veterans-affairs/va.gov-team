# Cypress Testing Release Plan Template

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
We will be doing two sets of testing for this phase of the rollout.
1. Functionality Testing
2. Documentation Testing


### 1. Functionality Testing
### Planning:
- Desired date range or test duration: May - June
- Desired number of users: 2
- How you'll recruit the right production test users: Going to leverage FE Team development resources
- How you'll conduct the testing: We will convert all of the existing e2e Nightwatch tests to Cypress and then test that the functionality is consistent.
- How you'll give the test users access to the product in production w/o making it live on VA.gov: We will be adding additional tests to HCA so we will not be impacting the end user experience.

### Results:
- Number of users: 2
_As of July 2020, we have converted some but not all VSP Nightwatch tests to Cypress. It is in our backlog to migrate remaining tests but we do not consider this to be launch blocking._

- Number of bugs identified / fixed: 
- Was the data submitted (if any) easy for VA to process?: 
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: 

### 2. Documentation Testing
### Planning:
- Desired date range or test duration: May - June
- Desired number of users: 2-6
- How you'll recruit the right production test users: 1-3 VFS\VSA Teams (BAM2 and VAOS?)
- How you'll conduct the testing: We will be sharing our documentation for setting up and using Cypress tests. Then we will be asking them to create some basic tests utilizing the documentation and then providing feedback about any gaps in our documenation. 
- How you'll give the test users access to the product in production w/o making it live on VA.gov: The documentation will be live and the Cypress testing framework will be available for them to use. We will not be announcing that Cypress is available to use outside of our pilot teams. 

### Results:
- Number of users: 2 teams fave thorough feedback — VAOS and VSA Auth Exp
- Number of bugs identified / fixed: Numerous updates made to documentation
- Was the data submitted (if any) easy for VA to process?: N/A
- Types of errors logged: documentation improvements and suggestions
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes
- If yes, what: documentation was updated in accordance with feedback from [VAOS](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10048) and [VSA Auth Exp](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/11693). 

### Planning

- Desired date range: End of July
- How will you make the product available in production while limiting the number of users who can find/access it: N/A
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: We will be looking to track the following metrics
 - Total number of tests in Cypress
 - Total number of tests in Nightwatch
 - Number of times form tester is utilized in Cypress (data to be pulled from from Circle)

~~### Stage A: Canary~~


~~#### Planning~~

- ~~Length of time: 2 weeks~~
- ~~Percentage of Users (and roughly how many users do you expect this to be): 1-3 VFS Teams~~

~~#### Results:~~
- ~~Number of unique users: 2-6 Users~~
- ~~Metrics at this stage (per your "success criteria"):~~
  - ~~Number of testing blockers identified by test teams~~
  - ~~Amount of time it takes to write e2e tests in Cypress vs Nightwatch~~
  - ~~Amount of time the system takes to run tests in Cypress vs Nightwatch~~
  - ~~Amount of time it takes to write form tests in Cypress vs Nightwatch~~
  - ~~Number of documentation gaps identified~~
- ~~Was the data submitted (if any) easy for VA to process?:~~
- ~~Types of errors logged:~~
- ~~What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?~~

## Go Live!

### Planning:
- Desired date: End of July
- Post-launch KPI 1: # of total tests in Nightwatch
- Post-launch KPI 2:  # of total tests in Cypress
- Post-launch KPI 3: 

_We expect the # of total tests in Cypress to increase over time. We expect the # of total tests in Nightwatch to decrease over time, albeit more slowly as we are not requiring folks to migrate old tests over to Cypress in the short term. The relationship between Nightwatch tests and Cypress tests is NOT 1:1. Data is manually gathered biweekly and [tracked in ZenHub](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/11703). 

### 2-weeks results:
- Number of unique users: x
- Post-launch KPI 1: % of tests written in Cypress vs Nightwatch  (data to be pulled from Circle)
- Post-launch KPI 2:  # of times form tester is utilized in Cypress (data to be pulled from from Circle)
- Post-launch KPI 3: # of product support requests related to Cypress documentation not meeting the needs of users
- Any issues with VA handling/processing?: 
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 
- If yes, what: 

### 6-weeks results:
 Post-launch KPI 2:  # of times form tester is utilized in Cypress (data to be pulled from from Circle)
- Post-launch KPI 3: # of product support requests related to Cypress documentation not meeting the needs of users
- Any issues with VA handling/processing?: 
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 
- If yes, what: 

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?
