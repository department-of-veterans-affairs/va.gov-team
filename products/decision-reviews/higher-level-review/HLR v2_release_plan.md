# Release Plan Higher Level Review v2

## HLR Remaining Work and Estimated Effort (as of 11/1/2021)
- Sprint 61: 11/17-11/30
- Sprint 62: 12/1-12/14

- Phase I Development:
  - Add v2 feature flag & migration code
  - Add ‘I am Homeless’ flag (required)
  - Remove Service Number field We don't ask for the service number in the online form
  - Changed Claimant fields (we don’t support non-Veteran Claimants) We've never asked who the claimant is in the online form
  - Remove Same Office selection
    - Update Informal Conference fields
      - Change Rep Name format
      - Explicitly take in Rep phone# and email
      - Change time window selection
  - Add SOC/SSOC Date field per Issue (only if opting in to AMA) - this will
likely be tied to the new Legacy Issues endpoint Lighthouse will build.
  - Start sending in Veteran Contact Info
  - Support write-in Issues - similar to NOD
  - Hook up FE to API
  
  
- Phase I Launch Readiness:
  - [Testing] HLR v2: User Acceptance Testing for Higher Level Review 
  - [Launch] HLR v2: Staging Review 
  - [Launch] HLR v2: Privacy and Security Review
  - [Development] HLR v2: Feeback tasks
  
- Phase II:
  - [Launch] HLR: Full Accessibility & 508 Office Audit Higher Level Review 
  - [Metrics] HLR: Review Submissions with Stakeholders 
  - [Metrics] HLR: Daily Review of Metrics 

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
Note: Phase I testing is in production using a whitelist of users.  This is a fully deployed production version of the application but it will not be visible to all users.  We are preparing the UAT plan in Sprint 29 and will be workin to evolve it into Sprint 30.  Scheduling of UAT will be around Sprint 30/31 timeframe.
### Planning:
- Desired date range or test duration: [November]
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
- Desired date range: November 1+
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
- Desired date: November 15+
- Post-launch KPI 1: xx 
- Post-launch KPI 2: xx
- Post-launch KPI 3: xx 
- etc
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx 
- Post-launch KPI 2 actual: xx 
- Post-launch KPI 3 actual: xx 
- Any issues with VA handling/processing?: yes/no, 
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what:

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx 
- Post-launch KPI 2 actual: xx
- Post-launch KPI 3 actual: xx
- Any issues with VA handling/processing?: yes/o
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: 

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?
