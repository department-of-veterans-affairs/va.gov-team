# Product outline: My VA

**Last updated: January 23, 2023 - added contact info for each feature**

### Communications

- **GitHub Label**: vsa-authenticated-exp; my-va-dashboard
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ)|Product Manager| ana@adhocteam.us |
|Bernadette Xiong| Delivery Manager | berni.xiong@agile6.com |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Angela Agosto |Designer| angela.agosto@adhocteam.us |
|Allison Lu| FE Engineer|	allison@cityfriends.tech |


### Table of Contents

- [Overview](#overview)
- [Opportunities & Priorities](#opportunities--priorities)
- [My VA features](#my-va-features)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Projects](#projects)
- [Measuring Success](#measuring-success)
- [Platform Documentation](#Platform-Documentation)
- [Design](#Design)
- [Frontend](#Front-End)
- [Backend](#Back-End)


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

## My VA features

|My VA feature| Description | Related VA.gov tool| OCTO team that manages this integration | Backend systems | Backend partner contact info|
|-------------|-------------|--------------------|----------------------------------------|-----------------|------------------------------|
| Nametag - Full name| The [nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) pulls in the full name for all LOA3 users.| N/A| #vsp-identity for all identity info, including full name |MPI| Go through #vsp-identity instead of going straight to MPI|
|Nametag - Disability rating| The [nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) pulls in someone's disability rating, if applicable.| [View your VA disability ratings](https://staging.va.gov/disability/view-disability-rating/) | #benefits-disability-experience| EVSS | Go through #benefits-disability-experience|
|Nametag - Military info|The [nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) pulls in someone's military branch, if applicable.|[Military information section of the VA.gov profile](https://staging.va.gov/profile/military-information)|Profile team| VA Profile | Go through the profile team, or contact VA Profile (#va-profile in Slack; main contact is Mike Richard) directly|
|Notifications| This section displays recent notifications.| Email/text notifications managed through VANotify | VANotify (#va-notifty-public)| VANotify| Bev Nelson (beverly.nelson@va.gov) or Melanie Jones (melanie.jones@oddball.io)|
|Claim status| This shows someone's most recent claim status update in the last and links to the claim and the claim status tool.| [Claim status](https://staging.va.gov/track-claims/your-claims) | #benefits-claim-appeal-status| EVSS | Go through #benefits-claim-appeal-status |
|Health care -- Appointment info | This section shows someone's next upcoming appointment info, if applicable.| [VA Online Scheduling (VAOS)](https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/) | #vaos-team| VAOS | Go through #vaos-team|
|Health care -- Unread messages| We show an alert in the health care section if someone has unread messages| N/A - Unread messages are currently in My Healthevet| #mhv-secure-messaging| MHV| Go through #mhv-secure-messaging|
|Outstanding debts| This section shows someone's most recent debts and copays. | [Manage your VA debt](https://staging.va.gov/manage-va-debt/summary/)| #benefits-debt-resolution| DMDC for debts; Not sure for copays | Go through #benefits-debt-resolution|
|Benefit payments |This section shows someone's most recent payment. | [View payment history](https://staging.va.gov/va-payment-history/payments/)| There is not a VA.gov team managing this currently. Triage issues through Matt Self as needed| BGS | For BGS, you can either reply to an old email thread, or contact Linda Ciston (linda.ciston@va.gov)|
|Saved applications| This section shows any benefit applications that have been started but not yet submitted on VA.gov. |All benefit applications on VA.gov | There is no one team that manages all benefit applications. If you have questions about a specific one, ask in Slack to find which team is responsible.| Multiple systems | Ask around in Slack if there are issues with a sepcific application.|


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
 
## Analytics

- [My VA Domo dashboard](https://va-gov.domo.com/auth/index?redirectUrl=%2Fpage%2F1167851935%3FuserId%3D1322887837)
- [My VA dashboard in Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/XOEdSZeVT9qyxQU5T29PNw/a50123418w177519031p176188361/_u.date00=20220525&_u.date01=20220531/)

## Projects

[Please see our roadmap for all current and past projects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/my-va-roadmap.md).

## Platform Documentation

- As members of the VFS teams we participate in the collaboartion cycle as we develop new features for My VA. Information regarding the collaboration cycle can be found [here](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/)
- Plaform Slack channel is [#vfs-platform-support](https://join.slack.com/share/enQtMzkwNjAzMjA2OTcxNi04MDhiNDE3ZThjNDY0NWYwMGI0ODVmYTk2NjIxODAwZDgxOWE4ZDFiMDI1YTY2M2U4N2VkYTg2Mjg4NTViMDZk)
- [Link to Product Playbook Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/Product_Playbook_Security.md) This is needed for each new feature to complete the privacy review

## Design

- [My VA use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases)
- [My VA Sketch files](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9)
- My VA flows
  - [Debts & copays](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/DPmvLk4)
  - [Benefit payments](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/YGgwY0O)

### Screenshots

<details><summary>Version 1.0</summary> 

![My VA 1.0 all widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/screenshots/Dashboard-Updated-All%20Features.png)
 
 </details>

<details><summary>Version 2.0 -- July 2021</summary> 

![My VA 2.0 All Sections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

</details>
 
<details><summary>Addition of Benefit payments and debts -- April 2022</summary>  

![My VA with benefits payments and debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/My%20VA_April%202022.jpeg)
 
</details>

<details><summary>Addition of Onsite Notifications and Payments and debts V2 -- December 2022</summary>
 
 ![My VA w/onsite notifications and payments V2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/19911c5a-6d17-40f2-94a4-7cefed5d7d7f.png)
 
 </details>

## Front End

- placeholder

## Back End

- [Platform Documentation on backend systems](https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations)
- [My VA 2.0 Architecture Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/Technical-diagrams/My-VA-architectural-diagram.md)

### How to Access and Test

- [Test Cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva.md)
- [Staging User Info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mv)
