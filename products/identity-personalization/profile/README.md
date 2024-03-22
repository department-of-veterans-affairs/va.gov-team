# Section Outline: The VA.gov Profile

**Last Updated: 3/19/2024 -- updated products and features**

## Table of Contents

- [POCs](#pocs)
- [Products & features](#products--features)
- [Is VA Profile the same thing as the VA.gov profile?](#is-va-profile-the-same-thing-as-the-vagov-profile)
- [Problem Statement](#problem-statement)
- [Opportunities](#opportunities)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Projects](#projects)
- [Analytics](#analytics)
- [Backend](#backend) 
- [Frontend](#frontend)
- [Design](#design)

---

### POCs

- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

#### Roles  
  
[The VA.gov profile is maintained by the authenticated experience team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team).

---

## Products & features

The [VA.gov profile](https://staging.va.gov/profile) provides a centralized place where users can see what information the VA knows about them, and where they can update that information as needed.

|Profile product/feature| Description | Backend tool | Backend tool contact info| Responsible Team |
|---------------|-------------|--------------|--------------------------|:-:|
|[Nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) - Full name| Shows  the full name for all LOA3 users.| MPI| [#vsp-identity](https://dsva.slack.com/channels/vsp-identity) | AE Profile |
|[Nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) - Disability rating| Shows someone's disability rating, if applicable.| Lighthouse | [#benefits-disability-experience](https://dsva.slack.com/channels/benefits-disability-experience)| AE Profile |
|[Nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) - Military info|Shows someone's military branch, if applicable.|VA Profile | [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov)| AE Profile |
|[Profile Hub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/README.md)|Main hub for linking to profile pages and content|n/a|n/a|  AE Profile |
[Personal information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information)| Shows full name, date of birth, preferred name, gender identity, and disability rating| MPI for full name; VA Profile for gender identity and preferred name; Lighthouse for disability rating| MPI ([#vsp-identity](https://dsva.slack.com/channels/vsp-identity)); [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov); Lighthouse ([#lighthouse-delivery-platform-support](https://dsva.slack.com/channels/lighthouse-delivery-platform-support))|  AE Profile |
|[Contact information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)| Shows home and mailing addresses, phone numbers, and email address| VA Profile| [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov)| AE Profile |
|[Personal Health Care Contacts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/021152e8d81407bec78b8ba5bad45e803de83338/products/identity-personalization/profile/personal-health-care-contacts/README.md)|     | VA Profile  |     | MHV Cartogrophy Team |
|[Military information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information)| Shows military branch(es) of service and service period(s)| VA Profile | [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov) |  AE Profile |
|Veteran Status Card| The veteran status card is part of the Military Info Page|      |    |  Veteran Status Card Team |
|[Direct deposit information: Comp & Pen](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)| Allows comp & pen payment recipients to update their direct deposit information| Lighthouse |  Lighthouse ([#lighthouse-delivery-platform-support](https://dsva.slack.com/channels/lighthouse-delivery-platform-support)) or Nichole Harris (harris_nichole@bah.com) |  AE Profile |
|[Direct deposit information: Education](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)| Allows education payment recipients to update their direct deposit information| BGS | Linda Ciston (linda.ciston@va.gov)|  AE Profile |
|[Notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences)| Allows people to update whether they'd like to receive particular notifications, and in what format| VA Profile| [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov)|  AE Profile |
|[Account security](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/README.md)| Allows people to verify their identity and add 2FA | N/A | If there is an identity-related issue, contact [#vsp-identity](https://dsva.slack.com/channels/vsp-identity)|  AE Profile |
|[Connected apps](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/connected-apps)| Allows people to disconect third-party apps from their account | Lighthouse | Carey Otto (carey.otto@adhocteam.us)| Lighthouse |
|[Editing as a subtask](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/editing-as-a-subtask/README.md)|Allows users to more seamlessly update information 'in place'. Example opening notification settings, seeing an alert that in order to receive notifications a phone number must be on file, following a link to add a number.| | | AE Profile |

## Is VA Profile the same thing as the VA.gov profile?

**No, VA Profile and the VA.gov profile are not the same thing and do not have a 1:1 relationship.**

- **VA Profile**: This is a backend system that was formerly known as Vet360. It came about in 2018 to act as a connector between a bunch of VA backends and frontends, so that veterans could update their info in one place and it would save everywhere (or almost everywhere). The VA Profile team is not part of the OCTO/DEPO contracts. They are an entirely separate team that we work with, and they work with a lot of other teams. 
- **The VA.gov profile** — The VA.gov profile is a section of VA.gov, which you can view at https://staging.va.gov/profile/personal-information with pretty much any staging user. The VA.gov profile is a **frontend only**; we do not store any information. We rely entirely on [various VA backend systems](#backend-systems-that-support-the-profile) to show and save data. VA Profile is only one of them, which we currently use to show and save contact information. 

## Problem Statement

*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address.*

Veteran data is a mess at the VA. It’s kept in hundreds of databases, and any given department or medical center may have access to different pieces of information. This makes it hard to understand the full picture of what the VA knows about any given Veteran/person.

## Opportunities

*"How might we... _______" statement re-framing the challenge as an opportunity.*

The VA.gov profile aims to solve for this by providing a centralized place that consolidates and displays the information the VA knows about a Veteran/person. It also provides paths to update information as needed, whether that is from the profile itself or outside of VA.gov (eg. in instances where someone needs to change an official government record).

## User outcomes

### Desired user outcomes

*Why would a user want to use this? What should users be able to do/achieve that they couldn't before?*

Instead of wondering whether the VA has the correct information for a given person, they can easily check and confirm this in the VA.gov profile. 

Also, if they see information that is incorrect, it’s quick and easy to update information from the VA.gov profile, much easier than needing to submit a paper form or having to go through a VA medical center to get information updated.

### Undesired user outcomes

We don’t want to force users to go to the Profile to view/edit information if that doesn’t feel intuitive in some cases, so one risk is that we use the profile as a de facto place for all Veteran information when they don’t anticipate finding it there.

## Business outcomes

### Desired business outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?* 

The profile gives us a place to present a consolidated view of what we know about Veterans and other users instead of silo-ing it in benefit hubs.

### Undesired business outcomes

We don’t want the profile to become such a de facto place for Veteran information that we ignore larger mental models and intuitive IA. Over time, we should regularly assess whether certain information actually makes sense to live in the profile, or whether that information should live elsewhere based on where Veterans and other users most anticipate finding it. 

## Projects

### Current projects

Current projects are actively managed in the AE Profile Github project, the chart below is not as actively managed. See [this page of the project for the roadmap by phase](https://github.com/orgs/department-of-veterans-affairs/projects/926/views/39), or see [this page for a classic gantt chart roadmap](https://github.com/orgs/department-of-veterans-affairs/projects/926/views/10). 

|Project|Status|
|----|----|
|Alert Consistency|Discovery|
|Enhanced Military Information|Design Intent (1/5/2024)/Dev|
|MHV Migration / Email as a Channel|Dev|  
|Maintenance Period Alerts|Dev|
|USWDS V3 Component Updates (technical debt)|Dev|
|Migrate to Figma (design technical debt)|Dev|


### Completed projects & enhancements

<details>

<summary>Completed projects & enhancements</summary>

#### General 

|Project or enhancement|Launch/Completion date|
|----|----|
|[CICD Pipeline - Product Isolation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62378)|January 2024|
|[Profile hub MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/mvp/README.md)|December 19, 2023|
|[Authenticated Menu Updates (adding Letters and Dependents)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/authenticated-menu/add-dependents-letter)|October 4, 2023|
|[Disability rating EVSS > Lighthouse migration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/evssMigrationToLH/README.md) |September 2023 |
|[Semantic list improvements](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19618)|March 2023|
|[MHV Profile research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research#readme)|Presented to stakeholders June 2022|
|[Updated layout and button styles for better screen reader experience](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23665) | July 2021 | 
|[Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account) |  October 2020|
|[Dashboard/Profile/Account MVPs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-mvp) | Launch completed Spring 2018 |

#### Personal information

|Project or enhancement|Launch/Completion date|
|----|----|
|[Personal Info page: Add full name and disability rating fields](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49651)| January 19, 2023|
|[Ability to view and update preferred name and gender identity in the VA.gov profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md)| June 2022|
|[Remove "Gender" (aka sex assigned at birth) from the profile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36009) | February 2022 |

#### Contact information

|Project or enhancement|Launch/Completion date|
|----|----|
|[Bad address indicator](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)|Launched completed October 24, 2022|
|[Restricted character set for address fields to certain alphabetic and alphanumeric characters](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45400)| August 2022|
|[Modal that asks if you want to update your mailing address when you update your home address](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33732)| July 2022|
|[Remove requirement for international postal code](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39775)| April 2022 |
|[Remove Fax number field from the profile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35975) | February 2022 |
|[Add confirmation email for contact info updates](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/8383) | Launched June 2021 |
|[Add contact info FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23376)| Launched April 2021|
|[Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/product-outline.md) | Launch completed March 2020||
|[Add APO/FPO/DPO options for military base addresses](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3209)| January 2020|
|[VA Profile (formerly Vet360) initial integration for contact information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1) | Launch completed Summer 2018 |

#### Military information

|Project or enhancement|Launch/Completion date|
|----|----|
|[Add DD214 link to military info page](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48782)| November 22, 2022|
|[Re-integrate military information through VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information/vaprofile-integration#readme) |August 2022|

#### Direct desposit information

|Project or enhancement|Launch/Completion date|
|----|----|
|[Direct deposit for comp & pen EVSS > Lighthouse migration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration#readmee)| October 10, 2023|
|[Remove conditional logic to show direct deposit section only to users who receive payments](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40722)| June 2022|
|[Direct deposit for edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/README.md) | Launch completed April 2021 |
|[Direct deposit for comp & pen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/compensation-pension-project-outline.md) | Launch completed Jan 2020|



#### Notification preferences

|Project or enhancement|Launch/Completion date|
|----|----|
|[Notification preferences: Default send & adding email as a channel](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/default-send#readme)|Launched November 2023|
|[Notification preferences: Editing as a subtask](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask)|Launched November 2023|
|[Add Board of Veteran's Appeals status update notification preference](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47441)|Live to 100% December 19, 2022|
[Notification preferences MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/README.md) | Launched November 2021 |


#### Account security

|Project or enhancement|Launch/Completion date|
|----|----|
|[Account Security: Update designs to support 508 updates](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51085)|Launched February 2, 2023|


</details>

## Analytics

### Domo
- [Profile Domo dashboard](https://va-gov.domo.com/auth/index?redirectUrl=%2Fpage%2F1834995012%3FuserId%3D66061986)
### GA 
- [Personal information GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/-x0K5pQPRTaQCa_WzXnEDg/a50123418w177519031p176188361/)
- [Contact information GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)
- [Address validation GA dashboard](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/)
- [Direct deposit for com & pen GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
- [Direct deposit for education GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/qEpkRFroTOSTpgaBDHXK4A/a50123418w177519031p176188361/)
- [Notification preferences GA dashboard](https://analytics.google.com/analytics/web/#/dashboard/LcYXUwF2Q8SQ59WQX6OTsw/a50123418w177519031p184624291/)
- [Account security GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/AuydfL6WR7WS_nXqNhC5GA/a50123418w177519031p176188361/)
- [Connected apps GA dashboard](https://analytics.google.com/analytics/web/#/dashboard/-7uuXRP8QJOLgqwi7s5OOg/a50123418w177519031p176188361/)

### Data Dog
- [AE Profile Data Dog Monitors](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?view=spans)

## Backend

- [Personal Info Frontend Docs (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/personal_information/backend_documentation.md)
- [Contact Info Frontend Docs (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/contact_information/backend_documentation.md)
- [Comp & Pen Direct Deposit (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/direct_deposit/backend_direct_deposit_comp_and_pen.md)
- [Education Direct Deposit (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/direct_deposit/backend_direct_deposit_education.md)
- [Notification Settings (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/profile/notification_settings)
- [Account Security (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/account_security/backend_documentation.md)
- Connected Apps (supported by Lighthouse)


## Frontend

- [Getting Started](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/engineering-docs/frontend-getting-started.md)
- [Personal Info Frontend Docs (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/personal_information/frontend_documentation.md)
- [Contact Info Frontend Docs (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/contact_information/frontend_documentation.md)
- [Direct Deposit (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/direct_deposit/frontend_documentation.md)
- [Notification Settings (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/frontend_documentation.md)
- [Account Security (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/account_security/frontend_documentation.md)
- [Connected Apps (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/connected_apps/frontend_documentation.md)
- [Service Maintenace and Outage Procedures for FE](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/engineering-docs/profile-service-maintenance-outage-procedures.md)
- [Feature Toggle Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/engineering-docs/feature-toggle-guidance.md)

## Design 

### Sketch files

- [Personal information](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565)
- [Contact information](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655)
- [Military Information](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775)
- [Direct deposit](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131)
- [Notification settings](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c)
- [Account Security](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc)
- [Connected apps](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e)

### Figma files
[Account Experience Figma Project containing all related AE products/features](https://www.figma.com/files/project/176473451/Account-Experience?fuid=1281705750009777247)
