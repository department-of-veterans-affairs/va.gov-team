# Release Plan Higher Level Review

## HLR Remaining Work and Estimated Effort (as of 8/28/2020)
- Sprint 29: 8/26-9/8
- Sprint 30: 9/9-9/22
- Sprint 31: 9/23-8/6
- Sprint 32: 10/7-10/20
- Sprint 33: 10/21-???

- Phase I:
  - [Development] HLR: Schema Changes #11094 - In Validation
  - [Design] HLR: Design and Content Wizard Updates #12891 - Sprint 29
  - [Development] HLR: Wizard Implementation #12925 - Sprint 30
  - [Development] HLR: Update to HLR Schema Based on LH Changes #12319 - Sprint 29
  - [Analytics] HLR: Back-End Grafana Dashboard for Submission Success/Errors #10712 - Sprint 29
  - [Launch] HLR: Prepare Launch Product Video for Higher Level Review #6209 - Sprint 30
  - [Testing] HLR: User Acceptance Testing for Higher Level Review #7802 - Sprint 31/32
  - [Launch] HLR: Prepare Final Steps of Collaboration Cycle in Preparation for Launch #9763 - Sprint 30
  - [Development] HLR: Is HLR Working?  - Sprint 30/31
  
  Missing Stories:
  - [Launch] HLR: Full 508 - Sprint 31
  - [Launch] HLR: Security Review - Sprint 31
  - [Launch] HLR: Staging Review - Sprint 31/32
  - [Development] HLR: React to staging and accessibility reviews - Sprint 31/32
  
- Phase II:
  - [Development] HLR: Triage Front-End Issues - Sprint 32/33
  - [Development] HLR: Triage Back-End Issues - Sprint 32/33
  - [Metrics] HLR: Review Submissions with Stakeholders - Sprint 32/33
  - [Metrics] HLR: Daily Review of Sentry Metrics - Sprint 32/33

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
Note: Phase I testing is in production using a whitelist of users.  This is a fully deployed production version of the application but it will not be visible to all users.  We are preparing the UAT plan in Sprint 29 and will be workin to evolve it into Sprint 30.  Scheduling of UAT will be around Sprint 30/31 timeframe.
### Planning:
- Desired date range or test duration: [Sept 2X - 2X]
- Desired number of users: 5-8
- How you'll recruit the right production test users: Perigian (normal process)
- How you'll conduct the testing: With LightHouse.  The primary integration points are with LightHouse and we will be conducting UAT that tests both our code and their code.
- How you'll give the test users access to the product in production w/o making it live on VA.gov: On production it will be hidden behind a different intro page.

Test User Info: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/Test%20User%20Info.docx

### Results:
- Number of users: XXX
- Number of bugs identified / fixed: XXX
- Was the data submitted (if any) easy for VA to process?: XXX
- Types of errors logged: XXX to any look and feel expect for ONE gating question now allows them to use VA.gov instead of saying to go to eBenefits.
- If yes, what: XXX

## Phase II: unmoderated production testing

### Planning:
- Desired date range: October
- Desired number of unique users: 20-30
- How you'll make the product available in production while limiting the # of users who can find/access it: Using the flipper UI
- "Success" criteria (by the numbers): HLR are being submitted successfully, PDFs generated.  This is not auto establishment so easier to test.

Our plan will be to do 2 days of 25% gating, 2 days of 50% gating, and 1 days of 75% gating before we go full go-live.

### Results:
- Number of unique users: x
- Actual results (per your "success criteria")
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

More phases? Sure! If it makes sense for your product! Plan them out with the same structure as above.

## 100% Go Live!

### Planning:
- Desired date: October 15
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
