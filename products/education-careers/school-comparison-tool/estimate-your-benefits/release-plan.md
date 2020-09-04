# Release Plan - Estimate Your Benefits

So! You're thinking about how you want to launch your product. You know you'll perform usability testing and you'll QA the heck out of it in staging, which are both very critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do. 

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how it'll actually be used, and what problems it actually might have or create, and then fix/adjust prior to going live to millions of VA.gov users?**

That's what this Release Plan Template is for!

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

### Planning:
#### We will not be performing moderated production testing for EYB
- Desired date range or test duration: [date - date] or [duration]
- Desired number of users: x
- How you'll recruit the right production test users: lorem ipsum
- How you'll conduct the testing: lorem ipsum
- How you'll give the test users access to the product in production w/o making it live on VA.gov: lorem ipsum

### Results:
- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Phase II: Staged Rollout (also known as unmoderated production testing)
#### We will not be performing a staged rollout for EYB

### Do I need a staged rollout?
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

- Desired date range: _\[mm/dd/yy - mm/dd/yy\]_
- How will you make the product available in production while limiting the number of users who can find/access it: \[_lorem ipsum_\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
- Links to dashboard(s) showing "success criteria" metrics: _\[link here\]_

_The stages and number of users below are provided as example values recommended by VSP, but can be customized to your team's needs._

### Stage A: Canary

_Test a small population of users to make sure any obvious bugs / edge cases are caught._

#### Planning

- Length of time: x (_minimum 2 hours_)
- Percentage of Users (and roughly how many users do you expect this to be): x% (500 users) (_Recommendation: select a percentage that targets ~500 users, or at most 10%_)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: moderate

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: x (_minimum 1 day_)
- Percentage of Users (and roughly how many users do you expect this to be): 25% (x users)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

_More stages? Sure! If it makes sense for your product! Plan them out with the same structure as above._

## Go Live!

### Planning:
- Desired date: 06/18/2020
- Post-launch KPI 1: Compliance with Sec. 508
- Post-launch KPI 2: Number of CT users & ave. time on profile doesn't decrease compared to previous period
- Post-launch KPI 3: Users engage with estimate controls at a higher rate than in the previous profile page configuration
- Post-launch KPI 4: Users engage with "Update benefits" button 
- Post-launch KPI 5: Users engage with (open / close) accordions
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

### 1-week results (comparing June 18-24 to June 11-17):
- Number of unique users: 21,616
- Post-launch KPI 1 actual: Yes
- Post-launch KPI 2 actual: 
  - [Slight Increase in users who view profile page](https://analytics.google.com/analytics/web/?authuser=0#/report/conversions-goals-overview/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200624&_u.date10=20200611&_u.date11=20200617&_.goalOption=7/); 
  - [Increase in time on page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200624&_u.date10=20200611&_u.date11=20200617&_.goalOption=ALL&explorer-table.filter=profile&explorer-table.plotKeys=%5B%5D/)
- Post-launch KPI3 actual: 
  - Users engage with estimate controls at a higher rate. [Analytics for the 1st week post-launch](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200624&_u.date10=20200611&_u.date11=20200617&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22GIBCT%20Form%20Change%22,0%5D,%5B0,%22analytics.pagePath%22,%22PT%22,%22~2Fgi-bill-comparison-tool~2Fprofile~2F%22,0%5D%5D&explorer-table.rowCount=100/)
  - Check [GIBCT Dashboard for top 10](https://analytics.google.com/analytics/web/#/dashboard/PPUZ37Q0SOi_CiRCBb-HBg/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200624&_u.date10=20200611&_u.date11=20200617/)
- Post-launch KPI 4: Users engage with "Update benefits" button **[Yes](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200624&_u.date10=20200611&_u.date11=20200617&explorer-table.plotKeys=%5B%5D&explorer-table.filter=update&_r.drilldown=analytics.eventCategory:Interactions/)**
- Post-launch KPI 5: Users engage with (open / close) accordions **[Yes](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200624&_u.date10=20200611&_u.date11=20200617&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventLabel:nav-accordion-expand/)**

- Any issues with VA handling/processing?: No
- Types of errors logged: None
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? No
- If yes, what: N/A


### 1-month results(comparing June 18-July 17 to May 19 - June 17):
- Number of unique users: 88,953 sessions
- Post-launch KPI 1 actual: Yes
- Post-launch KPI 2 actual: 
   - [8.2% Increase in profile page views - goal completion](https://analytics.google.com/analytics/web/?authuser=0#/report/conversions-goals-overview/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200717&_u.date10=20200519&_u.date11=20200617&_.goalOption=7/);  
   - [6.18% increase in time on page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200717&_u.date10=20200519&_u.date11=20200617&_.goalOption=ALL&explorer-table.filter=profile&explorer-table.plotKeys=%5B%5D/)
- Post-launch KPI3: 
  - Users do engage with estimate your benefits at a higher rate, since these elements weren't available previously [Analytics for 1st month post-launch](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-ehttps://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200717&_u.date10=20200519&_u.date11=20200617&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22GIBCT%20Form%20Change%22,0%5D,%5B0,%22analytics.pagePath%22,%22PT%22,%22~2Fgi-bill-comparison-tool~2Fprofile~2F%22,0%5D%5D&explorer-table.rowCount=100/)
  - Check [GIBCT Dashboard for top 10](https://analytics.google.com/analytics/web/#/dashboard/PPUZ37Q0SOi_CiRCBb-HBg/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200717&_u.date10=20200519&_u.date11=20200617/)
- Post-launch KPI4: Users engage with "Update benefits" button **[Yes](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200717&_u.date10=20200519&_u.date11=20200617&explorer-table.plotKeys=%5B%5D&explorer-table.filter=update&_r.drilldown=analytics.eventCategory:Interactions/)**
- Post-launch KPI 5: Users engage with (open / close) accordions **[Yes](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184334251/_u.date00=20200618&_u.date01=20200717&_u.date10=20200519&_u.date11=20200617&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventLabel:nav-accordion-expand/)**

- Any issues with VA handling/processing?: No
- ypes of errors logged: None
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? No
- If yes, what: N/A

## Post-launch Questions 

- How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
   - Increase in time on page is helpful, shows users are having more interaction with the controls and exploring the various accordions
   - Analytics show users are engaging with the accordions and selecting the "Update benefits" button to trigger the calculations, which is exactly what we wanted to happen
- What qualitative feedback have you gathered from users or other stakeholders, if any?
   - During recent usability testing efforts on the Comparison Tool, we've had opportunities to see users engage with, explore and update their benefits estimate, completely unprompted.  A number of times, as they've scanned the section they've mentioned what they expect to see within a specific accordion and those comments align with the actual contents. 
- Which of the assumptions you listed in your product outline were/were not validated?
   - VALIDATED: _Users will understand how to calculate their benefits with the updated UI_
   - VALIDATED: _Our solution will be an improvement over what exists currently. Tool will work better for most people – not degrade the current experience_
   - VALIDATED: _All accessibility concerns will be addressed_
   - VALIDATED: _The data that is being controlled and displayed won’t change. The questions and UI are the focus of this effort._
   - N/A: _Any legislated changes regarding how education benefits are calculated are excluded from this scope of work._
   - VALIDATED: _Work will be performed on the GIBCT profile page, does not include search results page._
   - VALIDATED - work did include adding the "Update benefits" button to the VET TEC profile page but no accordions were required due to how VET TEC benefits are estimated.  _Work will be focused primarily on the Estimate Your Benefits accordion, may include Program Selection accordion in VET TEC profile pages._
- How might your product evolve now or in the future based on these results? We're continuing to move toward improved accessibility across the Comparison Tool as a whole. Next up: search results page. 
