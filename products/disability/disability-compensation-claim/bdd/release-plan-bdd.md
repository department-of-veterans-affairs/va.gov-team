# Release Plan Benefits Delivery at Discharge

Overview of phased approach and remaining work.
Phase I, UAT:
  - [Launch] BDD: Create Test Users in Dev and Staging for BDD#11892 - Benefits Sprint 27
  - [Development] BDD: Install Flipper UI Around BDD Capability#11778 - Benefits Sprint 27
  - [Development] BDD: Add Separation Location to 1-89.99 Day BDD Flow #12177 - Benefits Sprint 27
  - [Launch] BDD: Does BDD Actually Work?#11812 - Benefits Sprint 27
  - [Discovery] BDD: Verify XSD as Last Resort# - Benefits Sprint 28
  - [Development] Increase testing for BDD forms submission (Pre-Launch)#10368 - Benefits Sprint 28
  - [Accessibility] BDD: Redo Part of A11y Self Check After BDD/526 Refactor#11895  - Benefits Sprint 27
  - [QA] Benefits Delivery at Discharge (BDD) Test Plan# - Benefits Sprint 27
  - [QA] BDD: TestRail Ramp Up#11682 - Benefits Sprint 27-28
  - [Development] BDD: Monitor BDD Claims#10675 - Benefits Sprint 28
  - [Testing] BDD: Prepare for BDD UAT#11900 - Benefits Sprint 27
  - [Launch] BDD: UAT Testing for Benefits Delivery at Discharge#10298 - Benefits Sprint 28
  - Staging review story - Benefits Sprint 28

Phase II, 25-100% Rollout
  - [Launch] BDD: Triage Front-End BDD Sentry Issues#11820 - Benefits Sprint 28
  - [Launch] BDD: Triage Back-End BDD Sentry Issues #11927 - Benefits Sprint 28
  - [Launch] BDD: Placeholder for Post Launch BDD Activities (Sprint 28)#11806 - Benefits Sprint 28-29

Phase III, Go Live @ 100%, begin redirecting traffic from eBenefits
  - [Development] BDD: Cache servicelocation (Post Launch)#10275 - Benefits Sprint 29
  - [Development] BDD: Create mock data for EVSS separation_locations#10276 - Benefits Sprint 29
  - [Tech Debt] BDD: Can We Prefill Separation Date from Military History Information#10842 - Benefits Sprint 29
  - [Development] Remove BDD-specific code from vets-api prefill#11360 - Benefits Sprint 29


## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
### Planning:
- Desired date range or test duration: [August 24-25]
- Desired number of users: 4
- How you'll recruit the right production test users: Perigian
- How you'll conduct the testing: With front end and back end support to ensure the technical aspects of the BDD integration with MVI is working (very similar to Original Claims).
- How you'll give the test users access to the product in production w/o making it live on VA.gov: On production it will be hidden behind a different intro page.

### Results:
- Number of users: XXX
- Number of bugs identified / fixed: XXX
- Was the data submitted (if any) easy for VA to process?: XXX
- Types of errors logged: XXX to any look and feel expect for ONE gating question now allows them to use VA.gov instead of saying to go to eBenefits.
- If yes, what: XXX

## Phase II: unmoderated production testing

### Planning:
- Desired date range: August 26-???
- Desired number of unique users: 20-30
- How you'll make the product available in production while limiting the # of users who can find/access it: Using the flipper UI
- "Success" criteria (by the numbers): All of the BDD claims are successful at establishing a new user in MVI. Work with EVSS to make sure the EP codes are being set correctly.

Our plan will be to do 3-4 days of 10% gating, 3-4 days of 50% gating, and 3-4 days of 75% gating before we go full go-live.

### Results:
- Number of unique users: x
- Actual results (per your "success criteria")
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

More phases? Sure! If it makes sense for your product! Plan them out with the same structure as above.

## Go Live!

### Planning:
- Desired date: June 24
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
