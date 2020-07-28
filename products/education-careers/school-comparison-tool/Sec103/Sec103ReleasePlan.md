# Release Plan: Section 103

So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for! And note - there are feature toggles and beta banners at your disposal that you can use as a part of your plan.

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
- Desired date range or test duration: [date - date] or [duration]
- Desired number of users: 1
- How you'll recruit the right production test users: N/A - Due to the limited scope of this update, we are going to execute UAT against Staging with our VA Education Services counterparts
- How you'll conduct the testing: We are going to execute UAT against Staging with our VA Education Services counterparts
- How you'll give the test users access to the product in production w/o making it live on VA.gov: N/A - Due to the limited scope of this update, we are going to execute UAT against Staging with our VA Education Services counterparts

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase II: unmoderated production testing
We are not planning on executing a Phase II. Instead we will release to production upon successful completion of UAT described above. We will then monitor analytics to evaluate performance. 

### Planning: 
- Desired date range: N
- Desired number of unique users: x
- How you'll make the product available in production while limiting the # of users who can find/access it: lorem ipsum
- "Success" criteria (by the numbers): [use your KPIs to help guide this. It could be things like abondomnent rate < 20%, reported contact center calls < 2 calls, error rate < 5%, etc.]

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
- Desired date: 05/26/2020
- Post-launch KPI 1: No new defects reported
- Post-launch KPI 2: Performance: Endpoint latency doesn't change post-launch
  - Checkpoint Immediately Post-release
  - 2 weeks post-release
  - 1 month post-release
- Post-launch KPI 3: Google Analytics: Learn more is clicked? Need UX input on this
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results (June 4 - June 11, 2020):
- Number of unique events: 42
- Post-launch KPI 1 actual:  100% Compliant with public law
- Post-launch KPI 2 actual:  51 views of content, 42 unique events. 
- **Any issues with VA handling/processing?: yes/no, lorem ipsum
- **Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? No
- If yes, what: NA

### 1-month results (June 4 -July 9, 2020):
- Number of unique users: 179
- Post-launch KPI 1 actual: 100% Compliant with public law
- Post-launch KPI 2 actual: 193 views of content, 179 unique events. 
- **Any issues with VA handling/processing?: yes/no, lorem ipsum
- **Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? No
- If yes, what: NA



## Failed Launch


## Post-launch Questions 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
**Users are actually seeing the content, which is fantastic!** 


2. What qualitative feedback have you gathered from users or other stakeholders, if any?
**We should ask EDU if they've had any feedback on this. Would also be interesting to see if schools have received any feedback on this (maybe EDU can reach out to regional offices to see if they've received and feedback or questions from SCOs on this).**  

3. Which of the assumptions you listed in your product outline were/were not validated? 

Validated: 
* The team will have access to all the information we need to effectively design & build the indicator
* Users will notice the 103 indicator (and know how it’s relevant?)

Not Validated: 
* The files will contain current data and are updated regularly Confirmed with Education Services that this is relatively stable data and will be updated quarterly. 
* If the situation arises where VA will be late on payments (and Sec 103 is triggered), additional alerts will be provided within VA.gov and in the GIBCT - Could be validated by EDU
* This is not the sole source of information communication to CH31/33 beneficiaries about 103 & benefit payments - Would require usability testing, which is not something we have planned for Section 103 right now. 
* Users will understand which documents are required for 103 for each compliant institution - Would require usability testing, which is not something we have planned for Section 103 right now. 
* The 103 indicator will prevent the worry and financial challenges experienced by CH31/33 Veterans & beneficiaries in the past - Would require usability testing, which is not something we have planned for Section 103 right now. 
4. How might your product evolve now or in the future based on these results?
If the sitaution arises that VA is late on payments to schools, we'll have a chance to see: 
* If we post an alert about how schools handle payments
* If views of the 103 content increase
* If users have questions for VA about the necessary paperwork after viewing the content
