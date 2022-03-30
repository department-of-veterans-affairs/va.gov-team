## Introduction
The My Education Benefits (MEB) application is an application intended to let veterans submit an education benefits claim for Chapter 33. The application has the following components.

- A UI accessible from VA.gov
- A Vets-api layer used to communicate with the Digital Gi Bill (DGIB) managed service.
- DGIB Managed Service: A series of services hosted externally that drive the functionality of the MEB application, including
  - Loading veteran personal information
  - Loading demographics data
  - Loading contact information
  - Loading service history
  - Receiving and education benefits submission and automatically process the claim.
  - Generating letters approval or denial of clam. 

The release plan will address how to test and release this application hosted on VA.gov with its backend hosted on the DGIB Managed Service.

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: 04/01/2022 - 04/16/2022
- Desired number of users: 5
- How you'll recruit the right production test users: The selection of UAT users will be done in close collaboration with the VA Education team along with the My Education Benefits Product Owners assisting with testing.
- How you'll conduct the testing: For UAT, we'll be standing up a production like instance of the Digital Gi Bill (DGIB) environment. This environment is the one responsible for providing veteran data (personal info, demographics, service history) and also for processing Chapter 33 education claims. We will create user accounts on the DGIB UAT environment and our testers will conduct their testing against these accounts. The testers will execute prepared test scripts to try the different possible scenarios for veterans submitting a claim.
- How you'll give the test users access to the product in production w/o making it live on VA.gov: The UAT testing will be done only on staging.va.gov with our MeB vets-api endpoints pointing to the production like DGIB UAT instance. We will use feature flags to limit the use of MeB on staging only by designated UAT testing/development accounts. The app will not be in production as its vagovprod flag will be set to false on the registry. 

### Results:
- Number of users: TBD
- Number of bugs identified / fixed: TBD
- Was the data submitted (if any) easy for VA to process?: TBD
- Types of errors logged: TBD
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? TBD
- If yes, what: TBD

## Phase II: Staged Rollout (also known as unmoderated production testing)

The plan is ask for an exception and not go through a staged rollout and go for a complete release in late March.

Per the feature flag documentation: “Teams can enable or disable a feature for all users, a percentage of all users, a percentage of all logged-in users, a list of users, or users defined in a method.”

This capability is either too granular or too blunt for the MeB application. For example, specific users can be listed but that applies more for an UAT scenario. On the other hand, exposing only to a percentage of users does not insure that it is rolled out to the relevant population: veterans seeking Chapter 33 education benefits. For a staged rollout to have benefit we would need to be able to have a more granular approach that allowed us to select a sector of the users most likely to use/need the application.


### Planning

- Desired date range: N/A
- How will you make the product available in production while limiting the number of users who can find/access it: N/A
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: N/A
- Links to dashboard(s) showing "success criteria" metrics: N/A


## Go Live!

### Planning:
- Desired date: Late March
- Post-launch KPI 1: TBD
- Post-launch KPI 2: TBD
- Post-launch KPI 3: TBD
- etc
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: TBD
- Post-launch KPI 2 actual: TBD
- Post-launch KPI 3 actual:TBD
- Any issues with VA handling/processing?: TBD
- Types of errors logged: TBD
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? TBD
- If yes, what: TBD

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: TBD
- Post-launch KPI 2 actual: TBD
- Post-launch KPI 3 actual: TBD
- Any issues with VA handling/processing?: TBD
- Types of errors logged: TBD
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? TBD
- If yes, what: TBD

## Post-launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
