# Release Plan - STEM 22-10203 Standalone Form

So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for!

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
Moderated testing will occur with both Veterans and other eligible beneficiaries as well as School Certifying Officials. 
- Desired date range or test duration: 08/03/2020-08/14/2020
- Desired number of users:
   - Eligible Veterans: at least 3 eligible (based on entitlement remaining, benefit utilized, program), 
   - Ineligible Veterans: at least 3 ineligible (at least 1 due to too much entitlement, 1 due to benefit, 1 due to program)
   - SCOs: 3 (note SCO testing is separate from Veteran testing and will occur on staging only). Note, on Production we will work with EDU to reach out to SCOs who've received emails from our Veteran participants to confirm that they've received the emails. 
- How you'll recruit the right production test users: 
  - Veterans: Through BAH network and with assistance from EDU
- How you'll conduct the testing:
  - Veterans: Observing the application process through submit and confirming they receive an email upon submission. 
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Feature flag

### Results:
- Number of users: 6
- Number of bugs identified / fixed: 0/0
- Was the data submitted (if any) easy for VA to process?: Yes
- Types of errors logged: None
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? No

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout? YES

### Planning - Initial Launch

- Desired date range: 08/12/2020-08/28/2020
- How will you make the product available in production while limiting the number of users who can find/access it: Feature Flag
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
   - Successful 22-10203 STEM Scholarship Application submissions esp. compared to applications via 22-1995
   - Valid 22-10203 Application submissions, # and %
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_


### Stage A: Canary
#### Planning

- Length of time: 2 business days (Started by 09/02 and move to Phase B on 09/08)
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

- Length of time: 3 days (planning to start 09/08-09/10)
- Percentage of Users (and roughly how many users do you expect this to be): 30% of users out of ~500 = ~150 applications (3 days)

#### Results:
- Number of unique users: We switched our feature flag implementation to route applicants to the new STEM form 50% of the time versus 50% of users. We got 30 applications over two days.
- Metrics at this stage (per your "success criteria"): 30 
- Was the data submitted (if any) easy for VA to process?: Yes
- Types of errors logged: None
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? None

### Planning - Subsequent launch of SCO email/remaining entitlement

- Desired date range: 11/10/2020
- How will you make the product available in production while limiting the number of users who can find/access it: Feature flag
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: SCOs receive emails; applicants are able to view their entitlement data when 6 months or more are remaining. 

#### Planning
- Length of time: 2.5-3 weeks (11/10-12/1)
- Percentage of Users (and roughly how many users do you expect this to be): 50% of the time users will be routed to the new features (1,000 users submit applications each month, so expecting around 335 to be rounted to the new features if the routing works as expected)

#### Results:
- Number of unique users: 641
- Metrics at this stage (per your "success criteria"): No indications from GA or EDU of any failures/issues
- Was the data submitted (if any) easy for VA to process?: Yes
- Types of errors logged: Applicants are not being CC'd on emails to SCOs because CC feature is not functional right now. 
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? Working on an alternative to CC'ing applicants on emails to SCOs. 

## Go Live!

### Planning:
- Desired date for initial launch: 9/10/2020
- Post-launch KPI 1: Successful 22-10203 STEM Scholarship Application submissions esp. compared to applications via 22-1995
- Post-launch KPI 2: Valid 22-10203 Application submissions, # and %
- Go / No Go: GO

### 1-week results:
- Number of unique users: 233/572 conversions, 39% conversion rate (Google Analytics)
- Post-launch KPI 1 actual: 233 successful submissions (Google Analytics)
- Post-launch KPI 2 actual: 129 eligible scholarships, 170 rejected. **43%** approval rate.
- Any issues with VA handling/processing?: **none that we are aware of but need to check the logs/confirm with Buffalo**
- Types of errors logged: 
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? Yes
- If yes, what: 
  - Updating the “Sign in or create an account” button color, per DEPO input
  - Minor modifications to application intro & application chapters, per usability testing
  - Incorporating “Do you want to receive text messages” question on Personal information page, per VA request
  - Updating breadcrumbs, per DEPO input


### 1-month results:
- Number of unique users: 959/2,233 conversions, 41% conversion rate (Google Analytics)
- Post-launch KPI 1 actual: 959 successful submissions (Google Analytics)
- Post-launch KPI 2 actual: 421 eligible scholarships, 467 rejected. **47%** approval rate.
- Any issues with VA handling/processing?: **none that we are aware of but need to check the logs/confirm with Buffalo**
- Types of errors logged: **lorem ipsum**
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? No UX changes necessary


## Post-launch Questions 
_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? We saw a slight number in the reduction of applications rejected, but we also saw people drop out of the application prior to submit; presumably based on the eligibility criteria presented in the application.

Application Date Between 09-10-20 and 09-17-2 (Week 1)
- Eligible: 129 (43%)
- Rejected: 170 (57%)

Application Date Between 09-10-20 and 10-10-20	(Month 1)
- Eligible: 421 (47%)
- Rejected: 467 (53%)

1. What qualitative feedback have you gathered from users or other stakeholders, if any?

> Users have remarked that it’s easy to complete the application.  They appreciate the prefill information.  

> The PDF with STEM majors is still a challenge for them, though.  

> Ineligible applicants who find the STEM Scholarship application may still submit an application, even though they see and understand the ineligibility alerts, because “You never know unless you ask.”  

1. Which of the assumptions you listed in your product outline were/were not validated? 
   1. The 22-10203 STEM Scholarship application form will not change going forward. - This was mostly the case. There were some minor updates (text message opt-in) that required an update post-launch
   1. The 22-10203 STEM Scholarship application can be completed without involving a School Certifying Official (SCO) in digital application process. - This is true. SCO involvement begins after submission

1. How might your product evolve now or in the future based on these results? 
   1. UAT was completed with Veterans between 10/26 and 11/10 to validate the following features that were not released in our initial launch (set to go live in November 2020)
      1. Email is sent to the School Certifying Official associated with the applicant's previous enrollment data available via EVSS to notify them of what they need to do in support of the application process with Education Services. 
      1. Remaining benefit entitlement data is displayed notifying applicants who are ineligible due to remaining entitlement of the reason for their ineligibility when EVSS data is available. 
