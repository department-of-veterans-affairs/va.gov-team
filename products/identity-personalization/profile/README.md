# Product Outline: The VA.gov Profile

Last Updated: July 26, 2022

### Communications

- **Github labels**: vsa-authenticated-exp; profile
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)

### Roles  
  
|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|Sharon Kasimow |Product Manager| sharon.kasimow@gcio.com|
|Christina Gednalske| Designer |christina.gednalske@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Adam Whitlock | FE Engineer| adam.whitlock@adhocteam.us |
|Tom Harrison | BE Engineer | tom.harrison@adhocteam.us |

---

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Opportunities](#opportunities)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Analytics](#analytics)
- [Projects](#projects)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#design)

---

## Overview

The [VA.gov profile](https://staging.va.gov/profile) provides a centralized place where users can see what information the VA knows about them, and where they can update that information as needed.

Currently, the VA.gov profile supports the following information:

- [Personal information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information)
- [Contact information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)
- [Military information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information)
- [Direct deposit information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)
- [Notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences)
- Account security
- [Connected apps (managed by the Lighthouse team)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/connected-apps-data)

### Is VA Profile the same thing as the VA.gov profile?

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

## Projects

[Please see our roadmap for all current and past projects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/profile-roadmap.md).

## Backend

### Backend Systems that Support the Profile

You can learn more about all of the backend systems that support the profile via the [Platform Developer Docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations).

The following information comes from VA Profile:

- Personal information
- Contact information
- Military information
- Notification preferences

The following information comes from EVSS:

- Direct deposit for comp & pen

The following information comes from BGS:

- Direct deposit for education

### How to Access and Test

- Login with [any staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) on https://staging.va.gov
- Visit https://staging.va.gov/profile/
- [Additional staging user information](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Administrative/vagov-users)

### Error Handling

- [List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

## Frontend

What information do we need here?

## Design 

### Sketch files

- [Personal information](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565)
- [Contact information](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655)
- [Military Information](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775)
- [Direct deposit](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131)
- [Notification settings](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c)
- [Account Security](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc)
- [Connected apps](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e)
