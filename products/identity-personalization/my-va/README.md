# Product outline: My VA

**Last updated: April 26, 2024 - updated projects**

### Communications

- **GitHub Label**: vsa-authenticated-exp; my-va-dashboard
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

[My VA is maintained by the authenticated experience team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team).


### Table of Contents

- [Overview](#overview)
- [My VA features](#my-va-features)
- [Opportunities & Priorities](#opportunities--priorities)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Projects](#projects)
- [Analytics](#analytics)
- [Platform Documentation](#Platform-Documentation)
- [Design](#Design)
- [Frontend](#Front-End)
- [Backend](#Back-End)
- [Security](#Security)
- [How to Access and Test](#How-to-Access-and-Test)


## Overview

When Veterans log into VA.gov, [they expect to be met with an experience that reflects their personal circumstances at the VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-want-a-page-that-is-focused-on-current-information-specific-to-them-rather-than-generalized-information-for-all-veterans). My VA aims to meet this expectation by providing Veterans with a direct route to their most critical tasks and updates.  

## My VA features

My VA aggregates information from across VA.gov. While our team pulls info from across the site, we do not actually manage any of these integrations. Parent tools and teams that manage each integration are listed below.

|My VA feature| Description | Parent tool on VA.gov | Backend systems | Backend partner contact info|
|-------------|-------------|--------------------|-----------------|------------------------------|
| Nametag - Full name| The [nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) pulls in the full name for all LOA3 users.| N/A|MPI| Go through [#vsp-identity](https://dsva.slack.com/channels/vsp-identity) instead of going straight to MPI|
|Nametag - Disability rating| The [nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) pulls in someone's disability rating, if applicable.| [View your VA disability ratings](https://staging.va.gov/disability/view-disability-rating/) | EVSS | Go through [#benefits-ce-disability_exp_1](https://dsva.slack.com/archives/C04KW0B46N5)|
|Nametag - Military info|The [nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) pulls in someone's military branch, if applicable.|[Military information section of the VA.gov profile](https://staging.va.gov/profile/military-information)| VA Profile | Go through the profile team, or contact VA Profile ([#va-profile](https://dsva.slack.com/channels/va-profile); main contact is Mike Richard) directly|
|~Notifications~ We decomissioned our MVP and have put notifications work on hold as of Fall 2023| ~This section displays recent notifications.~| ~Email/text notifications managed through VANotify~ | ~VANotify~| ~[#va-notifty-public](https://dsva.slack.com/channels/va-notifty-public); Bev Nelson (beverly.nelson@va.gov) or Melanie Jones (melanie.jones@oddball.io)~|
|Claim status| This shows someone's most recent claim status update and links to the claim status tool.| [Claim status](https://staging.va.gov/track-claims/your-claims) | Lighthouse | Go through [#benefits-claim-appeal-status](https://dsva.slack.com/channels/benefits-claim-appeal-status) |
|Health care -- Appointment info | This section shows someone's next upcoming appointment info, if applicable, and links to the appointment tool.| [VA Online Scheduling (VAOS)](https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/) | VAOS | Go through  [#appointments-team](https://dsva.slack.com/channels/appointments-team) (fka VAOS)|
|Health care -- Unread messages| This section shows if someone has unread messages, and links to the secure messaging tool.| N/A - Unread messages are currently in My Healthevet| MHV| Go through [#mhv-secure-messaging](https://dsva.slack.com/channels/mhv-secure-messaging)|
|Outstanding debts| This section shows someone's most recent debts and copays. | [Manage your VA debt](https://staging.va.gov/manage-va-debt/summary/)|DMDC for debts; Not sure for copays | Go through [#benefits-debt-resolution](https://dsva.slack.com/channels/benefits-debt-resolution)|
|Benefit payments |This section shows someone's most recent payment. |[View payment history](https://staging.va.gov/va-payment-history/payments/)| BGS | There is no VA.gov team managing this currently. Triage issues through Matt Self, OR contact BGS through an old email thread or by contacting Linda Ciston (linda.ciston@va.gov)|
|Saved applications| This section shows any benefit applications that have been started but not yet submitted on VA.gov. |N/A| Multiple systems | Ask in Slack if there are issues with a specific application.|


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
 
## Analytics

- [My VA Domo dashboard](https://va-gov.domo.com/auth/index?redirectUrl=%2Fpage%2F1167851935%3FuserId%3D1322887837)
- [My VA dashboard in Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/XOEdSZeVT9qyxQU5T29PNw/a50123418w177519031p176188361/_u.date00=20220525&_u.date01=20220531/)
- [Additional analytics resources](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/product/analytics)

## Projects

### Current projects

|Project|Epic|Status|
|----|----|---|
|My VA explorations| [#50758](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50758), [#31611](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31611) | Research & design exploration|
|[SiP configuration enhancements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/my-va-small-initiatives/save-in-progress-configuration-enhancement.md) | [#60509](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60509) | In development |
|[Forms status](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/benefit-application-drafts-forms-submission-status#project-outline-benefit-application-drafts--forms-submission-status-wip) (in partnership with Veteran Facing Forms) |[#60509](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60509) | In development |
|Notifications: badge indicator| [#63788](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63788)| In development |

### Completed projects & enhancements

<details>

<summary>Completed projects & enhancements</summary>

|Project|Epic|Launch/Completion date|
|----|----|----|
| [Link to MHV landing page from My VA + Cerner simplification](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-small-initiatives/my-va-support-of-MHV-on-va.gov-migration#linking-to-mhv-from-my-va--simplifying-the-cerner-experience) | [#62258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62258) | On hold | 
|[White card component implementation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-small-initiatives/my-va-white-card-component) | [#31611](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31611) | November 2023 |
|[Remove "notifications" section](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/mvp#project-outline-on-site-notifications-mvp)|[#30611](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30611) | October 3, 2023|
|[LOA1 updates to My VA](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-small-initiatives/LOA1-experience-updates)| [#63424](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63424)|October 3, 2023|
|[Updates to appointments links + Cerner alert](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-small-initiatives/my-va-support-of-MHV-on-va.gov-migration#updates-to-appointment-links-and-cerner-alert) | [#62258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62258) | September 2023 |
|[Dot indicator experiment + implementation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator/README.md) | [#63788](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63788) | September 2023 |
|[Benefit Application Drafts enhancments (Hiding the "what benefits does VA offer menu")](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-small-initiatives/benefit-application-drafts-updates)| [#60509](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60509)|September 2023|
|[Claim status EVSS > Lighthouse](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/claim-status-lighthouse-migration#readme)| [#54403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54403) | August 28, 2023 |
|[Show all sections all the time (aka My VA audit)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2022-audit#project-outline-my-va-audit-updates-and-documentation)| [#41934](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41934) | April 25, 2023 |
|Launch VAOS v2 integration | [#41202](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41202)|December 19, 2022|
|Update Cerner module to be powered by Drupal | [#47956](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47956)| Launched December 13, 2022|
|[Payments and debts V2](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history#v2-updating-payments-and-debts-to-address-usability-issues-may-2022---december-2022)| [#43332](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43337) | Launch completed December 12, 2022|
|[My VA redirect](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-redirect#readme)| [#41223](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41223) | Completed September 12, 2022|
|[Add payments & financials section to My VA](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history#mvp-adding-payments-and-debts-to-my-va-october-2021---may-2022-1)| [#43337](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43337) | Launch completed May 2022|
|[Action items discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/action-items-discovery#project-outline-action-items-discovery)| [#25886](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25886) | Completed August 2021|
|[My VA 2.0 redesign](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/README.md) | [#6326](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6326) | Launch completed July 2021 |
|[Dashboard/Profile/Account MVPs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-mvp) | | Launch completed Spring 2018 |

</details>

## Platform Documentation

- As members of the VFS teams we participate in the collaboartion cycle as we develop new features for My VA. Information regarding the collaboration cycle can be found [here](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/)
- Plaform Slack channel is [#vfs-platform-support](https://join.slack.com/share/enQtMzkwNjAzMjA2OTcxNi04MDhiNDE3ZThjNDY0NWYwMGI0ODVmYTk2NjIxODAwZDgxOWE4ZDFiMDI1YTY2M2U4N2VkYTg2Mjg4NTViMDZk)
- [Link to Product Playbook Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/Product_Playbook_Security.md) This is needed for each new feature to complete the privacy review

## Design

- [My VA use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases)
- [My VA Figma files](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=9-15723&mode=design)
- [My VA flows (starting with LOA1 user)](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0-7050&mode=design)
  - [Claims and appeals]
  - [Health care]
  - [Outstanding debts]
  - [Benefit payments]
  - [Education and training]
  - [Benefit application drafts]

    
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
 
 <details><summary>Implementation of Audit UX Improvements (reduction of conditional states) -- April 2023</summary>
 
 ![My VA audit UX improvements 2023](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/5ef20fa8-b0cc-4099-b8e3-df9782c71961)
 
 </details>

## Front End
- [General: Frontend - Getting started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend-getting-started.md)
- Latest FE documentation:
   - [White card use](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/my-va-small-initiatives/my-va-white-card-component/white-card-component-FE-documentation.md)
   - [LOA1 state](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/my-va-small-initiatives/LOA1-experience-updates/LOA1-FE-documentation.md)
   - [Claims and appeals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/claims-and-appeals-FE-documentation.md)
   - [Health Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/my-va-small-initiatives/my-va-support-of-MHV-on-va.gov-migration/FE-documentation/linking-to-mhv-from-my-va-health.md) (WIP)
   - [Outstanding Debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/outstanding-debts-FE-documentation.md)
   - [Benefit Payments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/benefit-payments-FE-documentation.md)
   - [Education & Training](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/education-and-training-FE-documentation.md)
   - [Benefit Application Drafts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/applications-FE-documentation.md#my-va-benefit-application-drafts-frontend-documentation) 

## Back End

- [My VA Backend Documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/my-va/backend_documentation.md#my-va-backend-documentation)
- [Platform Documentation on backend systems](https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations)
- [My VA 2.0 Architecture Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/Technical-diagrams/My-VA-architectural-diagram.md)

## Security
Latest security playbook: [My VA Health Care section - Dot Indicator on Unread Health Care Messages Security Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator/launch-materials/dot-indicator-on-my-va-security-playbook.md)

## How to Access and Test

- [Test Cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md) March 2023
- [Staging User Info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mv)
