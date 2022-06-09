# Product Outline: Supplemental Claims

Last Updated: June 9, 2022

### Team Communications

- **Government lead**: Matthew Self (Benefits Crew)
- **Slack channel**: [#benefits-team-1](https://dsva.slack.com/channels/benefits-team-1)
- **Github labels**: benefits-team-1

### Roles  
  
|Name|Role|Email|
|----|----|-----|
|Matthew Self |Product Owner, Gov't Lead| matthew.self2@va.gov |
|Sade Ragsdale |Product Manager| sade@coforma.io|
|Pam Hastings| Research & Design |pamela.hastings@adhocteam.us |
|Robin Garrison |FE Engineer| robin.garrison@adhocteam.us |
|Scott Meyers | FE Engineer| scott.meyers@coforma.io |
|Sam Cormier | BE Engineer | sam.cormier@coforma.io |
|Rocio de Santiago | BE Engineer | rocio@coforma.io |
|Josh Kim | A11y lead | josh.kim@adhocteam.us |

---

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Opportunities](#opportunities)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Projects](#projects)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Backend Systems that Support the Profile](#backend-systems-that-support-the-profile)
- [Design](#design)

---

## Overview

Since the VA modernized its appeals process via the Appeals Modernization Act (AMA) in 2017, Claimants who disagree with a VA decision dated on or after February 19,2019 have had 3 decision review options: [Higher-Level Review](https://www.va.gov/decision-reviews/higher-level-review/), [Board Appeal](https://www.va.gov/decision-reviews/board-appeal/), and **Supplemental Claims**.

Supplemental claims allow Claimants to submit or identify new and relevant evidence and submit it to the VA where a reviewer will determine whether the new evidence changes the decision. Of the three decision review pathways, supplemental claims are the most widely used. More than 32,000 supplemental claims are filed each month (more than double then number of board appeals and higher-level reviews, combined!) which indicates that streamlining and enhancing this pathway has an outsized potential to impact the lives of Veterans and their families.

## Problem Statement(s)

I am a Claimant who has received an unfavorable decision on my original claim. For various reasons (time, money, convenience, control) I would like to file a decision review request myself, but there is no way to do that online. Moreover, the paper forms I have to fill out sometimes don't make sense, and ask me to provide personal information that I believe VA should already have. If I make a mistake on these forms (which is easy to do), it could delay a favorable decision by a significant amount of time (or prevent a favorable decision from being made to begin with).

I am a VA.gov software engineer building a web application for submitting a Supplemental Claim appeal request. I need a well-designed, intuitive, and comprehensive API to send the data gathered from my web application so the request can be processed by internal VA systems.

I own a case management software product that enables my customers to help Veterans submit claims and appeals. I need a well-designed, intuitive, and comprehensive API so my software can submit appeals forms to VA digitally, and so my customers don't have to print, mail, or fax the forms to VA. This process is frustrating and time-consuming.

I work at a VSO and spend my time helping Veterans through the complex benefit appeal process. I spend a lot of time helping Veterans fill out paper forms, then faxing them to VA. This process is frustrating as it is time consuming and not always easy to know when the documents have been received by VA.

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

Current metrics we're tracking:

-

## Projects

[Please see our roadmap for all current and past projects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/roadmap/profile-roadmap.md).

## How to Access and Test

- Login with [any staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) on https://staging.va.gov
- Visit https://staging.va.gov/profile/
- [Additional staging user information](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Administrative/vagov-users)

## Error Handling

- [List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

## Backend Systems that Support the Profile

- Contact information comes from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).
- Direct deposit for comp & pen information comes from the [Enterprise Veterans Self Service (EVSS)](https://depo-platform-documentation.scrollhelp.site/developer-docs/EVSS.1887240213.html).
- Direct deposit for edu information comes from the [Benefit Gateway Service (BGS)](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html).
- Personal information comes from the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/MVI.1886847049.html).
- Military information comes from the [Enterprise Military Information Service (eMIS)](https://depo-platform-documentation.scrollhelp.site/developer-docs/EMIS.1887174669.html).
- Notification settings (communication permissions) come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).
- Confirmation emails for when people update contact information and direct deposit information come from [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html).

## Design 

- [Personal information](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565)
- [Contact information](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655)
- [Military Information](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775)
- [Direct deposit](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131)
- [Notification settings](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c)
- [Account Security](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc)
- [Connected apps](https://www.sketch.com/s/479aa6d6-a7a7-4d82-acf1-c06a6699655e)
