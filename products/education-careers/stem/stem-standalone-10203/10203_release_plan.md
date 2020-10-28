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
  - SCO: SCOs have been recruited through our EDU partners
  - Veterans: Through BAH network and with assistance from EDU
- How you'll conduct the testing:
  - SCOs: 
- How you'll give the test users access to the product in production w/o making it live on VA.gov: TBD

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout? YES

**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:

* This change does not add substantial new functionality to VA.gov
* This change does not impact user flows through tasks
* This change does not affect traffic to backend services

*Example*: a change to a page's text content **could skip** staged rollout

*Example*: a minor visual redesign to a page that doesn't affect user flows **could skip** staged rollout

*Example*: adding a new field to an existing form **could skip** staged rollout

*Example*: a new feature on an existing application that creates new backend traffic **needs staged rollout**

*Example*: a significant change to how users navigate an existing form **needs staged rollout**

*Example*: a feature that will route significantly more users (and therefore more backend traffic) to an existing application **needs staged rollout**

#### Exceptions

Right now, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | Yes |
| Static content changes | Doable but tricky |
| URL redirects | No |

Other exceptions to this requirement can be approved by DEPO VSP leads.

### Planning

- Desired date range: 08/12/2020-08/28/2020
- How will you make the product available in production while limiting the number of users who can find/access it: \[_lorem ipsum_\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: 2 business days (planning to start by EOB Wednesday 08/26 and move to Phase B on Monday 08/31)
- Percentage of Users (and roughly how many users do you expect this to be): 10% of users out of ~500 = ~50 applications (2 days)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 3 days (planning to start Monday 08/31 - Wednesday 09/2)
- Percentage of Users (and roughly how many users do you expect this to be): 30% of users out of ~500 = ~150 applications (3 days)


#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

## Go Live!

### Planning:
- Desired date: 9/10/2020
- Post-launch KPI 1: Successful 22-10203 STEM Scholarship Application submissions esp. compared to applications via 22-1995
- Post-launch KPI 2: Valid 22-10203 Application submissions, # and %

- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results:
- Number of unique users: 233/572 conversions, 39% conversion rate (Google Analytics)
- Post-launch KPI 1 actual: 233 successful submissions (Google Analytics)
- Post-launch KPI 2 actual: **Need to get numbers from Buffalo on eligible applications week 1**
- Any issues with VA handling/processing?: **yes/no, lorem ipsum**
- Types of errors logged: **lorem ipsum**
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? Yes
- If yes, what: 
  - Updating the “Sign in or create an account” button color, per DEPO input
  - Minor modifications to application intro & application chapters, per usability testing
  - Incorporating “Do you want to receive text messages” question on Personal information page, per VA request
  - Updating breadcrumbs, per DEPO input


### 1-month results:
- Number of unique users: 959/2,233 conversions, 41% conversion rate (Google Analytics)
- Post-launch KPI 1 actual: 959 successful submissions (Google Analytics)
- Post-launch KPI 2 actual: **Need to get numbers from Buffalo on eligible applications month 1**
- Any issues with VA handling/processing?: **yes/no, lorem ipsum**
- Types of errors logged: **lorem ipsum**
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? No UX changes necessary


## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? **Need to get numbers from Buffalo on eligible applications**
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
  
  Users have remarked that it’s fairly easy for them to complete the form.  They appreciate the prefill information.  

  The PDF with STEM majors is still a challenge for them, though.  

  Ineligible applicants who find the STEM Scholarship application may still submit an application, even though they see and understand the ineligibility alerts, because “You never know unless you ask.”  

  
1. Which of the assumptions you listed in your product outline were/were not validated? 
   1. The 22-10203 STEM Scholarship application form will not change going forward. - This was mostly the case. There were some minor updates (text message opt-in) that required an update post-launch
   1. The 22-10203 STEM Scholarship application can be completed without involving a School Certifying Official (SCO) in digital application process. - This is true. SCO involvement begins after submission
1. How might your product evolve now or in the future based on these results? 
   1. UAT is taking place with Veterans between 10/26 and 11/06 to validate the following features that were not released in our initial launch (set to go live in November 2020 assuming successful UAT)
      1. Email is sent to the School Certifying Official associated with the applicant's previous enrollment data available via EVSS to notify them of what they need to do in support of the application process with Education Services. 
      1. Remaining benefit entitlement data is displayed notifying ineligible applicants of the reason for their ineligibility when EVSS data is available. 
