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

- [Summary](#summary)
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

## Executive Summary

#### Overview
Since the VA modernized its appeals process via the Appeals Modernization Act (AMA) in 2017, Claimants who disagree with a VA decision dated on or after February 19,2019 have had 3 decision review options: [Higher-Level Review](https://www.va.gov/decision-reviews/higher-level-review/), [Board Appeal](https://www.va.gov/decision-reviews/board-appeal/), and **Supplemental Claims**.

Supplemental claims allow Claimants to submit or identify new and relevant evidence and submit it to the VA where a reviewer will determine whether the new evidence changes the decision. Of the three decision review pathways, supplemental claims are the most widely used. More than 32,000 supplemental claims are filed each month (more than double then number of board appeals and higher-level reviews, combined!) which indicates that streamlining and enhancing this pathway has an outsized potential to impact the lives of Veterans and their families.

#### Strategic Alignment
**Benefits OKR**: Make the VAs claims experience better than the private sector's

**CTO Priority**: Reduce the time it takes for Veterans to find, use, and receive VA services.

## Problem Statement(s)

**I am a Claimant who has received an unfavorable decision on my original claim. Since I received a decision on my claim, I've obtained or identified new evidence that I believe is relevant to my case and I'd like the VA to give it another look, but there is no way to do that online. Moreover, the paper forms I have to fill out sometimes don't make sense, and ask me to provide personal information that I believe VA should already have. If I make a mistake on these forms (which is easy to do), it could delay a favorable decision by a significant amount of time (or prevent a favorable decision from being made to begin with).**

I am a VA software engineer building a web application for submitting a Supplemental Claim appeal request. I need a well-designed and documented, modern, and powerful API to send and receive data from my applications which are collecting the Claimant's data, so the request can be processed by internal VA systems.

I own a case management software product that enables my customers to help Veterans submit claims and appeals. I need a well-designed and documented, modern and powerful API so my software can submit supplmental claims forms to VA digitally, and so my customers don't have to print, mail, or fax the forms to VA. This process is frustrating and time-consuming.

I work at a VSO and spend my time helping Veterans through the complex benefit appeal process. I spend a lot of time helping Veterans fill out paper forms, then faxing them to VA. This process is frustrating as it is time consuming and not always easy to know when the documents have been received by VA.

## Desired User Outcomes

*Why would a user want to use this? What should users be able to do/achieve that they couldn't before?*

As a Claimant, I want the ability to submit a Supplemental Claim Decision Review of my claim online, without having to solicit professional help, so that I can save time and energy when I disagree with a VA decision on my claim.

As a Claimant, I want the claims I submit to be visible to me as they move through VA systems, and I want proactive communications about their progress.

As a Claimant, I want the VA to be able to easily interact with internal and external medical service providers to grab the medical records I indicate.

As a Claimant, I want the process of choosing and filing a decision review (and by extension supplemental claim) to be easily understandable.

As a VA.gov engineer, I want to be able to create a tool that helps a Claimant understand the benefit appeal process and allows them to easily submit a Supplemental Claim Decision Review. I will need a modern and performant API that interacts with the Benefit Appeal system in order to do so.

As a software vendor creating products to enable VSOs to help Claimants, I want to have a modern API that I can integrate with that will make submitting a Supplemental Claim Decision Review online quick and reliable. This will allow my software to provide more value to my VSO consumers.

As an accredited representative, I want to be able to use software tools to be able to quickly and easily submit a Supplemental Claim Decision Review for the Claimants I serve. I need this interaction to be reliable and to provide visibility into the status of the submission.

As a VA employee in charge of intaking Supplemental Claims, I want to spend less time manually processing 0995 forms. This will allow me to focus more of my time on higher priority tasks.

As a VSR or RVSR processing Supplemental Claims, I want to spend less time validating and clarifying data sent on Supplemental Claim Decision Review forms. Having data that has been previously validated will allow me to spend more time on higher priority tasks.

As a VSR or RVSR processing Supplemental Claims, I want the process of making an accurate rating decision to be as quick and easy as possible, so that Claimants receive decisions as quickly as possible.

@benefits-team-1

### Undesired user outcomes

*What do we want to avoid? What should we be cognizant or preventing?*

We don't want to create an unforeseen situation where VSRs or RVSRs are incentivized to make incorrecot or inaccurate decisions just to process a supplemental claim quicker.

We want users to choose the right (best) decision review option; that means we don't want users submitting supplemental claims if they don't have new and relevant evidence, but we also want to make sure they choose this options when appropriate :/

@benefits-team-1

## Desired Business outcomes

### Desired business outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?* 

The profile gives us a place to present a consolidated view of what we know about Veterans and other users instead of silo-ing it in benefit hubs.

### Undesired business outcomes

We don’t want the profile to become such a de facto place for Veteran information that we ignore larger mental models and intuitive IA. Over time, we should regularly assess whether certain information actually makes sense to live in the profile, or whether that information should live elsewhere based on where Veterans and other users most anticipate finding it. 

## Measuring Success

Current metrics we're tracking:

## Opportunities

How might we give Claimants who have received an unfavorable decision and have new evidence a quick, easy intuitive method to file a supplemental claim, that doesn't require  them to enter data the VA should already know, and that generally results in quicker more favorable outcomes?

How might we make submitting supplemental claims take as little input from the user as possible?

How might we give rating officials all of the data they need to make an immediate decision on a supplementatl claim?

How might we ensure Claimants are always in the loop about what's going on with their claim?

## Context and Decisions

#### Stakeholders
- Paul Shute: Director of Benefits Automation
- Alejandro Mendiolaflores: Lead Innovation Strategist
- Andrew Gray: Sr. Automation Strategist
- Marisa Prugsawan: Sr. Program Analyst
- Dustin Williams: Procedures/Maintanence Analyst
- Melissa Milenkovic: ?



#### Discovery Artifacts
[VA.gov Decision Review Research Readout](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Global/Decision%20Reviews/Research%20and%20Design/AMA-VFT_Discovery1-Research-Readout.pdf)
[Lighthouse Supplementatl Claims API Initiative Brief](https://community.max.gov/pages/viewpage.action?spaceKey=VAExternal&title=Supplemental+Claim+-+Initiative+Brief)

#### Open Questions

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
