# Product outline: My VA

Last updated March 14, 2022

### Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0; my-va-dashboard
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ)|Product Manager| ana@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Angela Agosto |Designer| angela.agosto@adhocteam.us |
|Taylor Mitchell| FE Engineer|	tmitchell@governmentcio.com |


### Table of Contents

- [Overview](#overview)
- [Opportunities & Priorities](#opportunities--priorities)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [My VA features](#my-va-features)
- [Screenshots](#screenshots)

## Overview

When Veterans log into VA.gov, [they expect to be met with an experience that reflects their personal circumstances at the VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-want-a-page-that-is-focused-on-current-information-specific-to-them-rather-than-generalized-information-for-all-veterans). My VA aims to meet this expectation by providing Veterans with a direct route to their most critical tasks and updates.  

## Opportunities & Priorities

My VA prioritizes the following:

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

-	Primarily, a Veteran would want to use My VA because it would save them time when interacting with the VA. The more we surface, consolidate, alert, and guide up front, the quicker Veterans can complete tasks, receive benefits, and get back to their lives. 

_With this problem solved, what should users be able to do/achieve that they couldn't before?_

-	Veterans will more easily be able to see if there is information that needs their attention at the VA, which may result in quicker task completion.
-	Veterans will more easily be able to understand the current status of all their benefits at the VA at a glance instead of having to track this information down in different places.
-	Veterans may be able to more fully engage with the VA.

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

-	My VA should help fulfill our second and third north star objectives: reducing time to outcomes and maximizing user satisfaction. 
-	My VA should help us more effectively guide Veterans to relevant tasks and benefit information that will help us maximize desired outcomes (eg. greater interactions and conversions). 

### Undesired Business Outcomes

-	We do not want this page to become a dumping ground for everything the business wants to get in front of users. This page should remain user-centric and prioritize [desired user journeys](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-are-primarily-interested-in-completing-healthcare-and-disability-related-tasks-such-as-messaging-ordering-medication-and-checking-claim-status) over getting everything we want in front of users.
-	We do not want this page to be co-opted by groups outside of VA.gov.
-	We do not want this page to be turned into a benefit eligibility engine.
 
## Measuring Success

- [Metrics for My VA redesing, Q2 - Q4 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md#okrs--kpis)
- [Metrics for adding payment and debt information, still TBD](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history#measuring-success)

## Solution Narrative

### Initiatives

|Project|Status|
|----|----|
|[Adding payment & debt information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history#readme)| QA/Pre-launch|
|[Action items discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/action-items-discovery#project-outline-action-items-discovery)|Completed August 2021|
|[My VA 2.0 redesign](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/README.md) | Launch completed July 2021 |
|[Dashboard/Profile/Account MVPs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-mvp) | Launch completed Spring 2018 |

### Key Decisions

-	In October 2020, [we determined that My VA and the logged-in homepage would continue to live side-by-side](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md#logged-in-homepage--my-va-pivot) and that My VA would not replace the logged-in homepage at this time. The reasoning was three-fold: first, we hypothesized that people would still want access to the current homepage when they were logged in. Second, since many teams at the VA have input into the homepage, we were concerned that this might result in content that was not personally relevant to Veterans showing up on their My VA dashboards. Finally, the team was not confident in our ability to support two different versions (logged-in/logged-out) of the homepage at the same URL at this time.

## How to Access and Test

[Staging user info and test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)

## My VA features

### "Nametag"

- The nametag pulls in someone's full name as well as military branch and disability rating, if applicable.
- **Backend system**: MPI for full name; eMIS for military information.

### Disability rating

- The disability rating is part of the nametag. We currently show percentage of service connected disability.
- **Parent tool**: [View your VA disability ratings](https://staging.va.gov/disability/view-disability-rating/)
- **Backend system**: EVSS

### Claim status

- This shows someone's most recent claim status update in the last 30 days and links off to the claim and the claim status tool.
- If someone has never filed a claim or has zero open claims, this section does not show.
- **Parent tool**: [Claim status](https://staging.va.gov/track-claims/your-claims)
- **Backend system**: EVSS

### Health care

- This section shows upcoming appointments and unread messages, if people have them. Otherwise, it shows links to these tools in addition to non-personalized links to refill prescriptions, file for travel reimbursement, view labs results, or download medical records.
- **Parent tools**: [VA Online Scheduling (VAOS)](https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/) for scheduling; [MyHealtheVet](https://sqa.eauth.va.gov/mhv-portal-web/eauth) for everything else

### Benefit payments and debts (staging only)

- This section shows someone's most recent payment within the last 30 days if they have one. It also shows outstanding debt information if they have any debt.
- There is also a link to update direct deposit information.
- **Parent tools**: [View payment history](https://staging.va.gov/va-payment-history/payments/) for benefit payments; [Debt management tool](https://staging.va.gov/manage-va-debt/your-debt/) for debts
- **Backend system**: BGS

### Apply for benefits

- This section shows any benefit applications that have been started but not yet submitted on VA.gov.
- This section also shows prompts to apply for VA health care, disability benefits, and education benefits to all users.
- **Parent tools**: All benefit applications on VA.gov
- **Backend system**: Each benefit application sends information to a different backend system, so if there is a problem with a particular application type, check in with the team that manages that application.

## Screenshots

### Version 1.0

![My VA 1.0 all widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/screenshots/Dashboard-Updated-All%20Features.png)

### Version 2.0 -- July 2022

![My VA 2.0 All Sections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### Addition of Benefit payments and debts
