# Release Plan - STEM 22-10203 Automated Decision

So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for!

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
Moderated testing will occur with Veterans and other eligible beneficiaries. 
- Desired date range or test duration: 03/02/21-03/12/21
- Desired number of users:
   - Ineligible Veterans: 8 eligible (based on entitlement remaining, program), three of whom have POAs
   - Ineligible Veterans: 2 eligible 
- How you'll recruit the right production test users: 
  - Veterans: Perigean
- How you'll conduct the testing:
  - Observing the application process through submit, confirming they receive an email upon submission, and reviewing their application status on VA.gov. 
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Feature flag

### Results:
- Number of users: 
- Number of bugs identified / fixed: 
- Was the data submitted (if any) easy for VA to process?: 
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout? YES

### Planning - Initial Launch

- Desired date range: 03/16
- How will you make the product available in production while limiting the number of users who can find/access it: Feature Flag
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
   - Successful 22-10203 STEM Scholarship Application submissions esp. compared to applications via 22-1995
   - Valid 22-10203 Application submissions, # and %
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_


### Stage A: Canary
#### Planning

- Length of time: 2 business days (Started by 03/15 and move to Phase B on 03/17)
- Percentage of Users (and roughly how many users do you expect this to be): 10% of users out of ~500 = ~50 applications (2 days)

#### Results:
- Number of unique users:  XX applicants were routed to the new application (we were seeing low numbers so we switch up our approach in phase B)
- Metrics at this stage (per your "success criteria"): 14 applications were successfully submitted using the new form
- Was the data submitted (if any) easy for VA to process?: Yes
- Types of errors logged: None
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? None

### Stage B: moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 2 days (start 03/18-3/19)
- Percentage of Users (and roughly how many users do you expect this to be): 30% of users out of ~500 = ~150 applications (2 days)

#### Results:
- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was the data submitted (if any) easy for VA to process?: 
- Types of errors logged: 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? 

### Planning - Subsequent launch of SCO email/remaining entitlement

- Desired date range: 03/20/21
- How will you make the product available in production while limiting the number of users who can find/access it: Feature flag
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: SCOs receive emails; applicants are able to view their entitlement data when 6 months or more are remaining. 

#### Planning
- Length of time: 2.5-3 weeks (11/10-12/1)
- Percentage of Users (and roughly how many users do you expect this to be): 50% of the time users will be routed to the new features (1,000 users submit applications each month, so expecting around 335 to be rounted to the new features if the routing works as expected)

#### Results:
- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was the data submitted (if any) easy for VA to process?: 
- Types of errors logged: 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?  

## Go Live!

### Planning:
- Desired date for initial launch: 03/20/2021
- Post-launch KPI 1: 
- Post-launch KPI 2: 
- Go / No Go: GO

### 1-week results:
- Number of unique users: 
- Post-launch KPI 1 actual: 
- Post-launch KPI 2 actual: 
- Any issues with VA handling/processing?: 
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 
- If yes, what: 



### 1-month results:
- Number of unique users: 
- Post-launch KPI 1 actual: 
- Post-launch KPI 2 actual: 
- Any issues with VA handling/processing?: 
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? 


## Post-launch Questions 
_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? We saw a slight number in the reduction of applications rejected, but we also saw people drop out of the application prior to submit; presumably based on the eligibility criteria presented in the application.

Application Date Between mm/dd/yyyy-mm/dd/yyyy (Week 1)
- Eligible: 
- Rejected: 

Application Date Between mm/dd/yyyy-mm/dd/yyyy	(Month 1)
- Eligible: 
- Rejected: 

1. What qualitative feedback have you gathered from users or other stakeholders, if any?

1. Which of the assumptions you listed in your product outline were/were not validated? 
   1. 
1. How might your product evolve now or in the future based on these results? 
   1. 
