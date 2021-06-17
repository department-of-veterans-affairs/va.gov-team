# Release Plan - VRRAP 


## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: 04/14-04/16
- Desired number of users: 2
- How you'll recruit the right production test users: Our UAT will occur on staging with our VA Education stakeholders
- How you'll conduct the testing: We will provide a script and credentials for staging to our stakeholders
- How you'll give the test users access to the product in production w/o making it live on VA.gov: N/A

### Results:
- Number of users: 2
- Number of bugs identified / fixed: 2/2
    - VRRAP: Email validation allows differing email addresses#23314
    - VRRAP: Staging error on submission#23325
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? no
- If yes, what: lorem ipsum


## Go Live!

### Planning:
- Desired date: Week of 04/30/2021
- KPI 1: 17,250 Veterans are retrained in high-demand careers		
- KPI 2: $386 million is spent on VRRAP training programs
- KPI 3: Less than (50% of applicants) are ineligible because they don't meet basic criteria
- Go / No Go: Go

### 1-week results: April 30 - May 7, 2021
- Number of unique users: 2404 submissions based on GA tracking of Confirmation Page views (There may be a few more in our count than Muskogee has, though, because people could go back and see the confirmation page again.  It's  also possible that 2 or more people apply from the same machine so "unique pageviews" isn't exact either.)
- Post-launch KPI 1 actual - 17,250 Veterans are retrained in high-demand careers: TBD		
- Post-launch KPI 2 actual - $386 million is spent on VRRAP training programs: TBD
- Post-launch KPI 3 actual - Less than (50% of applicants) are ineligible because they don't meet basic criteria
- Any issues with VA handling/processing?: 
   - It was requested that we update the wording of the spool file to match the wording included on the form by the Muskogee processing team on Monday 05/03 (https://github.com/department-of-veterans-affairs/va.gov-team/issues/24119)
   - It was requested that the daily spool file report be updated to include VRRAP applications on 05/04
- Types of errors logged: None
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? Yes
   - If yes, what: https://github.com/department-of-veterans-affairs/va.gov-team/issues/24562

### 1-month results:
- Number of unique users: 4,047 submissions based on GA tracking of Confirmation Page views (There may be a few more in our count than Muskogee has, though, because people could go back and see the confirmation page again.  It's  also possible that 2 or more people apply from the same machine so "unique pageviews" isn't exact either.)
- Post-launch KPI 1 actual - 17,250 Veterans are retrained in high-demand careers: TBD		
- Post-launch KPI 2 actual - $386 million is spent on VRRAP training programs: TBD
- Post-launch KPI 3 actual - Less than (50% of applicants) are ineligible because they don't meet basic criteria
   - As of May 28, 2021, VA had received 4,075 applications for benefits. Of those applications, 2,493 Veterans received Certificates of Eligibility for VRRAP benefits and 1,184 applicants were determined ineligible for the program. That is a 29% rejection rate that aligns with this KPI. 
- Any issues with VA handling/processing?: Muskogee came up with a practice to filter out duplicative submissions. From Don Ortega on 06/15: There was an issue that was worked through, in the last week, to remove duplicate submissions. The team is working to validate and ensure that the reporting is accurate.
- Types of errors logged: none
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? no

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 
1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? Two of our KPI's are longer-term, but our rejection rate is well below 50% and that indicates that the eligibility criteria are well defined for applicants. 
1. What qualitative feedback have you gathered from users or other stakeholders, if any? None
1. Which of the assumptions you listed in your product outline were/were not validated? All assumptions were validated
1. How might your product evolve now or in the future based on these results?
   1. Ideally, the form would be split into multiple chapters instead of being 1-page but due to the short program length (18 mos) we do not anticipate any further enhancements to this form.
   2. We're awaiting results of the our accessibility review. If anything significant is identified we will want to prioritize those issues. 
