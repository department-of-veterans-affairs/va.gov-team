# Release Plan Benefits Delivery at Discharge
  - Sprint 32: Oct 21 - Nov 3
  - Sprint 33: Nov 4 - Nov 17
  -Sprint 34: Nov 18 - Dec 1

Overview of phased approach and remaining work.
Phase I, UAT:
  - [Bug] BDD: Rated Disabilities Page Showed Up During UAT #14396 - Sprint 32
  - [Content] BDD: Public Websites Update to BDD Information #14322 - Sprint 32
  - [Development] 526: Decrypt Password Protected PDFs for the Veteran #14002 - Sprint 32
  - [Development] BDD: Separation Location No Longer Hardcoded - Suggest Solution #13977 - Sprint 32
  - [Development] BDD: Front End Changes to Add Password to Decrypt PDF #14416 - Sprint 32
Phase II, 25-100% Rollout
  - [Launch] BDD: Triage Front-End BDD Sentry Issues#11820 - Benefits Sprint 33
  - [Launch] BDD: Triage Back-End BDD Sentry Issues #11927 - Benefits Sprint 33
  - [Launch] BDD: Placeholder for Post Launch BDD Activities 11806 - Benefits Sprint 33/34
Phase III, Go Live @ 100%, begin redirecting traffic from eBenefits
  - [Development] BDD: Cache servicelocation (Post Launch)#10275 - Benefits Sprint 34
  - [Development] BDD: Create mock data for EVSS separation_locations#10276 - Benefits Sprint 34
  - [Tech Debt] BDD: Can We Prefill Separation Date from Military History Information#10842 - Benefits Sprint 34
  - [Development] Remove BDD-specific code from vets-api prefill#11360 - Benefits Sprint 34


## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
### Planning:
- Desired date range or test duration: [October]
  - We had major issues getting UAT participants due to the very specific criteria.  It has taken a few weeks to get even two participants.  
  - Therefore, we are implementing a plan B option, decribed below.
- Desired number of users: 5-6
- How you'll recruit the right production test users: Perigian
- How you'll conduct the testing: With front end and back end support to ensure the technical aspects of the BDD integration with MVI is working (very similar to Original Claims).
- How you'll give the test users access to the product in production w/o making it live on VA.gov: On production it will be hidden behind a different intro page.

### Results:
- Number of users: 5-6 (no 100% successful submissions so far, we always had to manually intercede mostly around STR issues)
- Number of bugs identified / fixed: 5 so far
- Was the data submitted (if any) easy for VA to process?: It is like a normal 526 for initial submission - since it was UAT no exams are being scheduled.
- Types of errors logged: File uploads, password protected PDFs, overall flow (some changes to ordering)

## Phase I.B: unmoderated production testing with very low percentage
### Description:
This slightly different unmoderated approach is a reaction to not having enough participation in the BDD program from Perigian and our stakeholders.  We were able to get three UAT users but this is slightly lower than usual.  Also, we relized that this may be a good approach to how to do phase II unmoderated production testing. The following items will be part of this unmoderated testing:
1. Some messaging on the page saying that this is a new capability within the VA.
2. Some messaging saying what should they do if they have any issues (beyond the normal messaging).
3. Very careful attention to the log files!

### Planning:
- Desired date range: October 6-9
- Desired number of unique users: 5-10
- 5-10% gating, enough to get a few candidates
- How you'll make the product available in production while limiting the # of users who can find/access it: Using the flipper UI and possibly turning it off if we see issues.
- "Success" criteria (by the numbers): All of the BDD claims are successful at establishing a new user in MVI. Work with EVSS to make sure the EP codes are being set correctly.

## Phase II: unmoderated production testing
### Planning:
- Desired date range: October 9+
- Desired number of unique users: 20-30
- How you'll make the product available in production while limiting the # of users who can find/access it: Using the flipper UI
- "Success" criteria (by the numbers): All of the BDD claims are successful at establishing a new user in MVI. Work with EVSS to make sure the EP codes are being set correctly.
- Our plan will be to do 3-4 days of 25% gating, 3-4 days of 75% gating, and then go-live at 100%.

### Results:
- Number of unique users: x
- Actual results (per your "success criteria")
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Go Live!
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
