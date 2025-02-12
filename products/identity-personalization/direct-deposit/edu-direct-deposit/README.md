# Project outline: Direct deposit for edu

`Deprecated 7/2024` - [see private repo for current direct deposit details](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md) ch33 was [migrated to CorpDB and combined with the C&P form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/ch33-bdn-corpdb-migration/README.md). Regardless of direct deposit type there is not a separate EDU form in the profile 

Last Updated December 7, 2021

## POCs

Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)

[See profile product outline for current team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles)

These are the folks that were responsible for the original work in 2020/2021:

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ) |Product Manager| ana@adhocteam.us |
|Jason Wolf|Product Manager| jwolf@governmentcio.com |
|Jim Adams | Designer | jadams@governmentcio.com |
|Sandra Hallie | FE Engineer | shallie@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Joseph Preisser| Edu contact| Joseph.Preisser@va.gov |
|Tammy Hurley| VBA Edu team | tammy.hurley1@va.gov | 
|Hope Coleman| VBA Edu team | Hope.Coleman@va.gov |

## Overview

We migrated direct deposit for education over to VA.gov from eBenefits in 2020/2021.

### User Goals

- Manage all direct deposite functionality in one place.

### Business Goals

- Move direct deposit for edu over to VA.gov so all functionality is in one place.
- Move direct deposit for edu over to VA.gov so we are one step closer to being able to retire eBenefits.

## Assumptions

- Direct deposit for edu functions similarly to direct deposit for comp & pen.
- There will likely be backend hiccups or complexity we haven't accounted for.
- Designing mockups will be simple. We should be able to use the new patterns set in the Profile 2.0 redesign.

## Questions

- Can people add direct deposit for edu on eBenefits if they are eligible but are currently receiving paper checks via mail?
- Who on the eBenefits team is the expert in direct deposit for edu?
- Can people at call centers update direct deposit for edu over the phone the way they can for comp & pen?

## Requirements

### In Scope

- Veterans need to be able to edit their direct deposit information for education benefits on VA.gov.
- Veterans need to be able to add direct deposit information for education benefits on VA.gov if they currently receive paper checks. (**confirm this**)
- Veterans should not be able to delete direct deposit information once it is added.
- We need to adjust how we are showing "View payment history" in the profile because we will have one link that applies to both comp & pen and education benefits.
- We need to be able to retire this feature on eBenefits at the end of this project. EBenefits should point to VA.gov to update direct deposit for edu.

### Out of Scope

- We will not be adding any new functionality to how direct deposit for edu is handled beyond add/edit functionality.
- We will not be consolidating direct deposit for comp & pen and edu even though it would be ideal to only have one direct deposit account.

## Solution Approach

- Lihan has done backend discovery to confirm that we can consume the necessary endpoints from BGS.
- Lihan will be able to complete the backend integration ahead of when design/frontend will be ready, so he will implement the necessary security precautions to make sure the edu endpoint can not be accessed by hackers on VA.gov.
- This will be a cross team effort between the eBenefits team and the authenticated experience team. Jim Adams will be doing design, and Jason Wolf will be PM. Lihan will be working on the backend, and Sandra or Erik will be working on the frontend.
- Jim will conduct discovery and confirm functionality and outstanding questions. We'll review those with the eBenefits team before moving into design. Beyond that, this project *should* be pretty traditional in terms of approach.

### Timeline

- **September 2020**: Discovery begins
- **October 2020**: Initial designs and VSP kickoff
- **November 2020**: Usability test prep and VSP usability test review
- **December 2020**: Usability testing; Build
- **January 2021**: QA
- **February 2021**: VSP reviews; UAT
- **March 2021**: Projected launch to 10%
- **April 2021**: Projected launch to 100%

## Measuring success

[See direct deposit product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md#measuring-success)

## Feature overview

[See direct deposit product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md#feature-overview).

## Design

### Before

![Direct deposit section of the profile without direct deposit for edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/direct-deposit-before.jpg)

### After

[See direct deposit product outline for latest design](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md#design)
