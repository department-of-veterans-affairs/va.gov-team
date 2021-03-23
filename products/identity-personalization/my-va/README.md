# Product outline: My VA

Last updated March 23, 2021

### Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0; my-va-dashboard
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|AJ Jakabcin |Product Manager| ana@adhocteam.us |
|Liz Lantz |Discovery researcher| liz.lantz@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Sandra Hallie| FE Engineer|	shallie@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Opportunities & Priorities]()
- [User Outcomes]()
- [Business Outcomes]()
- [Measuring Success]()
- [Solution Narrative]()
- [Screenshots]()

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

[In progress]

## Solution Narrative

### Current Status

-	[The My VA 2.0 redesign](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md) is currently undergoing final design updates and frontend build. 

### Key Decisions

-	In October 2020, [we determined that My VA and the logged-in homepage would continue to live side-by-side](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md#logged-in-homepage--my-va-pivot) and that My VA would not replace the logged-in homepage at this time. The reasoning was three-fold: first, we hypothesized that people would still want access to the current homepage when they were logged in. Second, since many teams at the VA have input into the homepage, we were concerned that this might result in content that was not personally relevant to Veterans showing up on their My VA dashboards. Finally, the team was not confident in our ability to support two different versions (logged-in/logged-out) of the homepage at the same URL at this time.
 
## Screenshots

### Before
### After
