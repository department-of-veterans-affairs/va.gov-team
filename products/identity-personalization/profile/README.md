# Product Outline: The VA.gov Profile

**Last Updated: January 24, 2023**

## Table of Contents

- [POCs](#pocs)
- [Overview & features](#overview--features)
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

- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)

#### Roles  
  
|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|TBD |Product Manager|-|
|Berni Xiong| Delivery Manager|berni.xiong@agile6.com|
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Florence McCafferty| Designer |Florence.McCafferty@agile6.com|
|Adam Whitlock | FE Engineer| adam.whitlock@adhocteam.us |
|TBD| Full Stack Engineer |-|
|Tom Harrison | BE Engineer | tom.harrison@adhocteam.us |

---

## Overview & features

The [VA.gov profile](https://staging.va.gov/profile) provides a centralized place where users can see what information the VA knows about them, and where they can update that information as needed.

|Profile feature| Description | Backend tool | Backend tool contact info|
|---------------|-------------|--------------|--------------------------|
|[Nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) - Full name| Shows  the full name for all LOA3 users.| MPI| [#vsp-identity](https://dsva.slack.com/channels/vsp-identity) |
|[Nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) - Disability rating| Shows someone's disability rating, if applicable.| EVSS | [#benefits-disability-experience](https://dsva.slack.com/channels/benefits-disability-experience)| 
|[Nametag](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) - Military info|Shows someone's military branch, if applicable.|VA Profile | [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov)|
[Personal information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information)| Shows full name, date of birth, preferred name, gender identity, and disability rating| MPI for full name; VA Profile for gender identity and preferred name; EVSS for disability rating| MPI ([#vsp-identity](https://dsva.slack.com/channels/vsp-identity)); [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov); EVSS ([#evss-prod](https://dsva.slack.com/channels/evss-prod))|
|[Contact information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)| Shows home and mailing addresses, phone numbers, and email address| VA Profile| [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov)|
|[Military information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information)| Shows military branch(es) of service and service period(s)| VA Profile | [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov)
|[Direct deposit information: Comp & Pen](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)| Allows comp & pen payment recipients to update their direct deposit information| EVSS, but moving to Lighthouse | EVSS ([#evss-prod](https://dsva.slack.com/channels/evss-prod)); Lighthouse ([#vfs-evss-service-migration](https://dsva.slack.com/channels/vfs-evss-service-migration)) or Nichole Harris (harris_nichole@bah.com)
|[Direct deposit information: Education](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)| Allows education payment recipients to update their direct deposit information| BGS | Linda Ciston (linda.ciston@va.gov)|
|[Notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences)| Allows people to update whether they'd like to receive particular notifications, and in what format| VA Profile| [#va-profile](https://dsva.slack.com/channels/va-profile) or Mike Richard (Michael.Richard2@va.gov)|
|[Account security](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/README.md)| Allows people to verify their identity and add 2FA | N/A | If there is an identity-related issue, contact [#vsp-identity](https://dsva.slack.com/channels/vsp-identity)|
|[Connected apps](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/connected-apps)| Allows people to disconect third-party apps from their account | Lighthouse | Carey Otto (carey.otto@adhocteam.us)|

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

[Please see our roadmap for all current and past projects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/profile-roadmap.md).

## Analytics

These are the GA dashboards we use to track profile analytics:

- [Personal information GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/-x0K5pQPRTaQCa_WzXnEDg/a50123418w177519031p176188361/)
- [Contact information GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)
- [Address validation GA dashboard](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/)
- [Direct deposit for com & pen GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
- [Direct deposit for education GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/qEpkRFroTOSTpgaBDHXK4A/a50123418w177519031p176188361/)
- [Notification preferences GA dashboard](https://analytics.google.com/analytics/web/#/dashboard/LcYXUwF2Q8SQ59WQX6OTsw/a50123418w177519031p184624291/)
- [Account security GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/AuydfL6WR7WS_nXqNhC5GA/a50123418w177519031p176188361/)
- [Connected apps GA dashboard](https://analytics.google.com/analytics/web/#/dashboard/-7uuXRP8QJOLgqwi7s5OOg/a50123418w177519031p176188361/)

## Backend

### Backend Systems that Support the Profile

You can learn more about all of the backend systems that support the profile via the [Platform Developer Docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations).

The [Onboarding for BE Engineers](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile_onboarding_backend.md) document is available to help get BE engineers up to speed quickly.

The following information comes from **VA Profile**:

- Personal information
- Contact information
- Military information
- Notification preferences

The following information comes from **EVSS**:

- Direct deposit for comp & pen

The following information comes from **BGS**:

- Direct deposit for education

The following information is supported by **Lighthouse**:

- Connected apps

### How to Access and Test

- Login with [any staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) on https://staging.va.gov
- Visit https://staging.va.gov/profile/
- [Additional staging user information](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Administrative/vagov-users)

### Communication and Error Handling

[This document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/communication.md) reviews the communication workflow for the Profile page in VA.gov and explains improvements that were made to reduce requests that result in 403 errors.

- [List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

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
