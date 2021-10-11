# Product Outline: VA.gov Profile

Last Updated October 11, 2021

### Communications
- GitHub Label: Profile
- Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp); [#va-profile](https://dsva.slack.com/channels/va-profile)
- Keywords
     - Profile
     - Profile 2.0
     - Contact information
     - Direct deposit
     - VA Profile (formerly Vet360)
     - Notification settings, communication permissions

### Roles  
  
|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DSVA Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ) |Product Manager| ana@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Lihan Li | BE Engineer | lihan@adhocteam.us |

---

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Opportunities](#opportunities)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Backend Systems that Support the Profile](#backend-systems-that-support-the-profile)
- [Design](#design)
- [Screenshots](#screenshots)
- [Release notes](#release-notes)

---

## Overview

The [VA.gov profile](https://staging.va.gov/profile) provides a centralized place where users can see what information the VA knows about them, and where they can update that information as needed.

Currently, the VA.gov profile supports the following information:

- Personal and contact information
- Military information
- Direct deposit information
- Account security
- Connected apps (managed by the Lighthouse team)

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

## Measuring Success

*What are the measurable targets you're aiming for that delivers value for Veterans?*

**Objective #1: To be the place where Veterans and other users can review all the information the VA knows about them, and reliably update (or learn how to update) outdated or incorrect information.**

- **Key result #1**: Finish integrating direct deposit for edu information into the VA.gov profile in **Q2 2021 (April – June)**.
- ~**Key result #2**: Add preferred medical facilities information to the VA.gov profile **Q3 2021 (July – September)**.~
- **Key result #3**: Maintain a 97%+ success rate on all user-generated updates/form submissions that happen from the VA.gov profile.
- **Key result #4**: Maintain a 97%+ success rate on retrieval of all information that is pulled into the profile.

**Address update KPIs**

[Address validation report](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/)

|KPI/metric|Q1 Jan - March 2021|Q2 April - June |Q3 July - September 2021| Q4 October - December 2021|
|----------|-------------|---------------|----------------|----------------|
|Mailing address: % of successful saves | 95.9%| 94.9% |TBD|TBD|
|Home address: % of successful saves | 98.3% | 98.1% |TBD|TBD|

**Direct deposit KPIs**

- [Direct deposit for comp & pen report](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/naG_-UneTxy50WvvIH0GGQ/a50123418w177519031p176188361/)
- [Direct deposit for edu report](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/UJwvqguWQMqJaGySJWq1VQ/a50123418w177519031p176188361/)


|KPI/metric|Q1 Jan - March 2021|Q2 April - June |Q3 July - September 2021| Q4 October - December 2021|
|----------|-------------|---------------|----------------|----------------|
| Comp & pen: % successful retrievals | 97.6%| 97.4% | | |
| Comp & pen: % successful saves | 87.7%*| 93.3% | | |
| Edu: % successful retrievals |N/A| 90.9% | | |
| Edu: % successful saves |N/A| 97.9% | | |

*This percentage is due to an error state in BGS that they don't want to get rid of around certain routing numbers having been flagged for fraud in a 2015 fraud ring. While these routing numbers are no longer an issue and the fraud team has recommended removing the error, it still exists and causes a significant amount of failures on VA.gov.

**Objective #2: To be the place where Veterans and other users can configure settings that allow them to customize their VA.gov experience.**

- **Key result**: Launch notification preference settings MVP in the VA.gov profile in **Q3 2021 (July – September)**.
     See [success metrics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md#measuring-success)for Notification Preferences 

## Solution Narrative

### Current projects

|Product/Project| Outline|
|----|----|
|Direct deposit for edu| [Direct deposit for edu outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/README.md)|
| Commmunications permissions/notifications preferences | [Notification preferences outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md) |

### Past projects

|Product/Project| Outline|
|----|----|
|Combine profile and account (Profile 2.0)| [Profile 2.0 outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/README.md)|
|Connected apps | [Connected apps outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/connected-apps-data/README.md)
|Address validation| [Address validation outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md)|
|Direct deposit for comp & pen | [Direct deposit for comp & pen outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md)|
|Contact information| [Contact information outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/README.md)|
|2018 MVP| [2018 MVP outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Profile/Readme.md)|
|Preferred medical facility| [Preferred facility outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md) |

### Timeline

- 2016/17 — Prototypical "account" page on Vets.gov.
- Spring 2018 - Original EMIS profile launched to Vets.gov.
- Summer 2018 — Profile backend transitioned to VA Profile (then- Vet360).
- 2019 — Direct deposit for comp & pen added to the profile.
- 2019/2020 – Address validation added to the Mailing and Home address fields.
- 2020 - Profile 2.0 redesign (launched Fall 2020).
- 2021 — Direct deposit for edu added to the profile (pending). Preferred facility and notification preferences in progress.

## How to Access and Test

- Login with [any staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) on https://staging.va.gov
- Visit https://staging.va.gov/profile/

## Error Handling

- [List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

## Backend Systems that Support the Profile

- Contact information comes from VA Profile.
- Direct deposit for comp & pen information comes from EVSS.
- Direct deposit for edu information comes from BGS.
- Personal information comes from MPI.
- Military information comes from eMIS.
- Notification settings (communication permissions) come from VA Profile.

## Design 

- [2018 designs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1/design)
- [2020 Profile 2.0 designs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design)

## Screenshots

![Personal and contact information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/personal-and-contact-information/pc-text%20checked.png)

![Military information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/military-information/Military%20Information.jpg)

![Direct deposit information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/direct-deposit/Direct%20deposit.jpg)

![Account security](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/account-security/Account%20Security%20-%20Identity%20Verified.jpg)

![Connected apps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/connected-apps/connected-apps-connected.jpg)

## Release Notes

[Published quarterly in this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Profile-release-notes.md)
