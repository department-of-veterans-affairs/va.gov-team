# Release Plan - STEM 22-10203 Automated Decision

So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for!

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
Moderated testing will occur with Veterans and other eligible beneficiaries. 
- Desired date range or test duration: 03/15/21-03/18/21
- Desired number of users:
   - Ineligible Veterans: 8 ineligible (based on entitlement remaining, program), three of whom have POAs
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

- Desired date range: 03/18
- How will you make the product available in production while limiting the number of users who can find/access it: Feature Flag
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
   - Successful 22-10203 STEM Scholarship Application submissions esp. compared to applications via 22-1995
   - Valid 22-10203 Application submissions, # and %
   - POAs reported in the spool file
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

### Stage A: Canary
#### Planning

- Length of time: 1 week (03/18-03/26/21)
- Percentage of Users (and roughly how many users do you expect this to be): 50% of users (a total of approximately 250 applications are submitted each week)

#### Results:
- Number of unique users:  XX applicants were routed to the new application (we were seeing low numbers so we switch up our approach in phase B)
- Metrics at this stage (per your "success criteria"):
- Was the data submitted (if any) easy for VA to process?:
- Types of errors logged: 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate
We anticipate moving from 50% to 100%, skipping a stage b. 


#### Planning
- Length of time: 
- Percentage of Users (and roughly how many users do you expect this to be): 

#### Results:
- Number of unique users: 
- Metrics at this stage (per your "success criteria"): 
- Was the data submitted (if any) easy for VA to process?: 
- Types of errors logged: 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? 


## Go Live!

### Planning:
- 3/15-3/26: Moderated Production user acceptance testing with select group of Veterans (5-10 participants)
- 03/29-04/09: Limited Production Rollout – Functionality will be made available in production to certain percentage of population over the course of the sprint (25%, 50%, 75%)
- 04/12-04/23: Full production rollout to entire VA.gov population
#### KPIs 
- Post-launch KPI 1: Average amount of time required to process STEM applications in the Buffalo RPO 
- Post-launch KPI 2: Number of STEM denials processed by the Buffalo RPO is reduced with no more denials being processed for denial reason of more than 6 months remaining entitlement.
- Post-launch KPI 3: Number of STEM automatic denials that go on to the appeals office (most appeals are related to program of study, so for this release we expect nearly zero appeals. 

- Go / No Go: 

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
