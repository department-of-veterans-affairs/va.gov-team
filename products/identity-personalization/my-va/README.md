# Product outline: My VA

Last updated May 19, 2021

### Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0; my-va-dashboard
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ)|Product Manager| ana@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Taylor Mitchell| FE Engineer|	tmitchell@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Opportunities & Priorities](#opportunities--priorities)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [My VA data](#my-va-data)
- [Screenshots](#screenshots)

## Overview

My VA provides Veterans with a direct route to their most critical tasks and updates based on their unique circumstances at the VA.  

## Problem Statement

When Veterans log into VA.gov, [they expect to be met with an experience that reflects their personal circumstances at the VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-want-a-page-that-is-focused-on-current-information-specific-to-them-rather-than-generalized-information-for-all-veterans). However, they currently see a generalized homepage with tasks that may or may not apply to them. There is no way for them to easily see a consolidated view of their benefit statuses or the tasks that need their attention or action.

## Opportunities & Priorities

We can fix this by providing veterans with an action-focused personalized landing page when they are logged in to VA.gov. This landing page should do the following (in priority order):

### Top priority: Elevate action items 

There are two kinds of action items we need to prioritize:

**Actions a Veteran needs to take to help move along processes related to their benefits**: Veterans may or may not know they need to take these actions, so we need to prompt them accordingly.

**Examples**: Alerting Veterans to unread messages; Prompting Veterans to upload evidence to a disability claim.

**Actions a Veteran intends to take when they come to VA.gov**: Veterans come to VA.gov with their own set of priorities. We can elevate popular actions so that Veterans can easily complete common tasks on VA.gov.

**Examples**: Check claim status; refill a prescription; change an address.

### Communicate benefit status & updates that don’t require action

In addition to seeing important actions, Veterans expect to be able to quickly assess the current status of their benefits at the VA. They also expect to see updates to their benefits even if those updates do not require any action from them. 

**Examples of benefit status**: Whether a Veteran receives a benefit, has an application in progress, or has not received or applied for a benefit.

**Examples of updates that don’t require action**: A change in disability rating; A prescription has shipped.

### Suggestions

The VA may have suggestions for Veterans on how they can maximize their benefits or care, and some of these may make sense to elevate on My VA. However, these suggestions do not have anything to do with processes a Veteran might already have in flight, and these are lower priority than other notifications or benefit status information.

**Examples**: Sign up for a COVID vaccine; benefit eligibility or recommendations.

## User Outcomes

### Desired User Outcomes

_Why would a user want to use this?_

-	Primarily, a Veteran would want to use the personalized landing page described above because it would save them time when interacting with the VA. The more we surface, consolidate, alert, and guide up front, the quicker Veterans can complete tasks, receive benefits, and get back to their lives. 

_With this problem solved, what should users be able to do/achieve that they couldn't before?_

-	With this problem solved, Veterans will more easily be able to see if there is information that needs their attention at the VA, which may result in quicker task completion.
-	With this problem solved, Veterans will more easily be able to understand the current status of all their benefits at the VA at a glance instead of having to track this information down in different places.
-	With this problem solved, Veterans may be able to more fully engage with the VA.

### User statements

-	As a veteran, I want to be alerted if the VA needs me to do something so I can move along tasks related to my benefits and care (eg. upload claim evidence; refill a prescription, show up at an appointment).
-	As a veteran, I want to be alerted if the VA has updated something related to my benefits, even if I don’t need to do anything about it.
-	As a veteran, I want to see information and tasks that are personally relevant to my benefits when I log in to VA.gov
-	As a veteran, I want the VA to tell me whether there is a way I can maximize my benefits and care instead of the VA relying on me to do that work.

### Undesired User Outcomes

-	We do not want Veterans to feel that this page is another place they have to check or another place that may have duplicative information to other parts of the VA universe. We want this page to clarify, not cause confusion or add to their cognitive load.
-	Additionally, if the page becomes too cluttered or cumbersome, it may slow down Veterans instead of expediting their experience.

## Business Outcomes

### Desired Business Outcomes

_Why would your business want this to exist?_

-	Done well, a personalized landing page should help fulfill our second and third north star objectives: reducing time to outcomes and maximizing user satisfaction. 
With this problem solved, what should your business be able to do/achieve that they couldn't before?
-	Done well, a personalized landing page should help us more effectively guide Veterans to relevant tasks and benefit information that will help us maximize desired outcomes (eg. greater interactions and conversions). 

### Undesired Business Outcomes

-	We do not want this page to become a dumping ground for everything the business wants to get in front of users. This page should remain user-centric and prioritize [desired user journeys](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-are-primarily-interested-in-completing-healthcare-and-disability-related-tasks-such-as-messaging-ordering-medication-and-checking-claim-status) over getting everything we want in front of users.
-	We do not want this page to be co-opted by groups outside of VA.gov.
-	We do not want this page to be turned into a benefit eligibility engine.
 
## Measuring Success

### Really, really long term goals for My VA (10,000 foot view: Multi-year)

To inform our more immediate objectives with My VA in 2021, including the 2.0 launch, we need to keep in mind where we hope My VA will go over time. In the longer term, we’d like My VA to:

-	Be in such great shape that it can replace the homepage as a logged-in user’s main starting point/anchor.
-	Become a one-stop shop for users’ benefit-related action items, benefit status, and suggestions on how to get more out of their benefits.
-	Become a place where users can complete quick tasks related their benefits.

### What we can do in the next year to move towards the big, long term goals (1,000 foot view: All of 2021)

This year, we are not going to get My VA to a place where it can replace the homepage for logged-in users, nor is our immediate goal to allow for task completion on My VA, which would require a more mature page than we’re starting with.

However, we can make moves on moving My VA towards the one-stop shop for action items and benefit status by updating My VA so that it provides more direct, personalized routes to Veterans’ most critical updates and tasks.

### What we can do in the next  1- 2 quarters (100 foot view: Q2 – Q3 2021)

[My VA 2.0 Dashboard](https://analytics.google.com/analytics/web/#/dashboard/XOEdSZeVT9qyxQU5T29PNw/a50123418w177519031p176188361/)

**Objective: Update My VA so that it provides more direct, personalized routes to Veterans’ most critical updates and tasks.**

**Key Result #1** — Usage: Increase % of logged-in users visiting My VA from 6% pre-My VA 2.0 to 8% post-My VA 2.0 by Q3.

[My VA vs. Homepage Usage Report for Logged-in Users: Jan 2021 – March 2021](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20210101&_u.date01=20210331&_.useg=builtin1,useroZx0HcxxRpWtuNYX7IFkHA,userTBuj9_dPSF-sBQQO9Srv-g/)

|KPI/metric|Baseline: Q1 Jan - March 2021|Post-launch: Q3 July - September 2021| Post-launch: Q4 October - December 2021|
|----------|-------------|---------------|-------------------|
|% of logged-in users who visit My VA| 6%|7%|TBD|
|% of logged-in users interact with the homepage| 13% |15%|TBD|

Additionally, we want to see if adding a My VA link to the unauth nav impacts traffic to the page. So, as part of evaluating this KR, we want to add tracking to the new My VA link to the unauth nav.
[Top Events - Unauthenticated Clicks to My VA](https://analytics.google.com/analytics/web/#/savedreport/KPirHWA4RQWqO5YBJmIwOw/a50123418w177519031p176188361/_r.dsa=1&_.useg=userXZpoGov_R4K1a1Biwj2YNg&_.advseg=&_.sectionId=&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.filter=Navigation%20-%20Header%20-%20My%20VA)

**Key result #2** — Interaction: Increase overall clicks into claims, messages, appointment, and prescription CTAs. 

[My VA Interactions Report: Jan - March 2021](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210331&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&_r.drilldown=analytics.pagePath:www.va.gov~2Fmy-va~2F,analytics.eventCategory:Interactions/)

[My VA Interactions Report: July 15 - August 15 2021 (revised naming conventions, custom report)](https://analytics.google.com/analytics/web/?authuser=0#/savedreport/_qH7yauBREi4LUUwrzMGRg/a50123418w177519031p176188361/_u.date00=20210715&_u.date01=20210815&_r.dsa=1&_.advseg=&_.useg=&_.sectionId=&3426-table.plotKeys=%5B%5D/)

|KPI/metric|Baseline: Q1 Jan - March 2021|Post-launch: Q3 July - September 2021| Post-launch: Q4 October - December 2021|
|----------|-------------|---------------|-------------------|
|Clicks into individual claims ("view claim")| ~102K clicks|~205k|TBD|
|Clicks to view all claims ("Manage all your claims and appeals")| ~77K|~192k|TBD|
|Clicks to view all appointments ("Schedule and view your appointments")| ~20K|~42k|TBD|
|Clicks to view all messages ("You have n unread messages")| ~32K|~49k|TBD|
|Clicks to view all prescriptions ("Refill and track your prescriptions")|~20K|~40k|TBD|

**Key result #3** — Findability: Reduce search incidents for features that exist on My VA. None of the features on the page should be in the top 20 search terms for searches generate from My VA.

[My VA Search Report: Jan – March 2021](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-pages/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210331&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_r.drilldown=analytics.searchStartPage:www.va.gov~2Fmy-va~2F/)

|KPI/metric|Baseline: Q2 Apr - June 2021|Post-launch: Q3 July - September 2021| Post-launch: Q4 October - December 2021|
|----------|-------------|---------------|-------------------|
|Search rank for "disability rating” from My VA| #5|#24|TBD|
|Search rank for "rating” from My VA| #6|#25|TBD|
|Search rank for "disability” from My VA| #10|#39|TBD|
|Search rank for "claim” or "claims" from My VA| #16|#32|TBD|

This may also have an impact on [overall searches on VA.gov for logged in users](https://analytics.google.com/analytics/web/?authuser=0#/report/content-site-search-search-terms/a50123418w177519031p184624291/_u.date00=20210101&_u.date01=20210331&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25&_.useg=user8twPUpCZT8qMEc9RwdXoUg/).

|KPI/metric|Baseline: Q1 Jan - March 2021|Post-launch: Q3 July - September 2021| Post-launch: Q4 October - December 2021|
|----------|-------------|---------------|-------------------|
|Logged-in search rank for "disability rating” on all VA.gov| #9 & #15|#8 & #27|TBD|
|Logged-in search rank for "rating” on all VA.gov| #11|#13 & #15|TBD|
|Logged-in search rank for "disability” on all VA.gov| #21|#32 & #70|TBD|

**Key result #4** — Satisfaction: Increased user satisfaction score for My VA from 3.2 to 3.7 in ForeSee.

[My VA Foresee Report](https://cxsuite.foresee.com/client/projects/76647/analytics/respondents)

|KPI/metric|Baseline: Q1 Jan - March 2021|Post-launch: Q3 July - September 2021| Post-launch: Q4 October - December 2021|
|----------|-------------|---------------|-------------------|
|My VA Average ForeSee score| 3.2| TBD | TBD|

## Solution Narrative

### Initiatives

-	[The My VA 2.0 redesign](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md) is set to launch June 2021.
-	Discovery on [how to elevate action items](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/action-items-discovery#readme) is set to begin May 2021. 

### Key Decisions

-	In October 2020, [we determined that My VA and the logged-in homepage would continue to live side-by-side](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md#logged-in-homepage--my-va-pivot) and that My VA would not replace the logged-in homepage at this time. The reasoning was three-fold: first, we hypothesized that people would still want access to the current homepage when they were logged in. Second, since many teams at the VA have input into the homepage, we were concerned that this might result in content that was not personally relevant to Veterans showing up on their My VA dashboards. Finally, the team was not confident in our ability to support two different versions (logged-in/logged-out) of the homepage at the same URL at this time.

## How to Access and Test

[Staging user info and test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)

## My VA data

The My VA 2.0 redesign reflects existing integrations on VA.gov. This is the list of what is included as part of the My VA 2.0 redesign and what systems we rely on to get that information:

**Disability rating**

- **We show**: Overall disability rating
- **Parent tool**: [View your VA disability ratings](https://www.va.gov/disability/view-disability-rating/)

**Claim status**

- **We show**: Most recently updated claim; Overall number of open claims
- **Parent tool**: [Claim status tool](https://www.va.gov/claim-or-appeal-status/)

**Secure messages (health care)**

- **We show**: Total unread messages
- **Parent tool**: [MHV secure messaging tool](https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/secure-messaging-spotlight)

**Appointments (health care)**

- **We show**: Next appointment; Total upcoming appointments
- **Parent tool**: [VA Online Scheduling (VAOS)](https://www.va.gov/health-care/schedule-view-va-appointments/)

**Applications in progress**

- **We show**: Benefit applications people have started on VA.gov but have not completed
- **Parent tool**: All benefit applications on VA.gov
 
## Screenshots

### Version 1.0

![My VA 1.0 all widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/screenshots/Dashboard-Updated-All%20Features.png)

### Version 2.0

![My VA 2.0 All Sections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)
