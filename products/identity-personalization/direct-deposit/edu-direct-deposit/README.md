# Direct Deposit for Edu: Project Outline

Last Updated March 16, 2021

## POCs

- GitHub Label: Direct Deposit; Education
- Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)
- Keywords
     - Direct deposit for edu
     - Profile 
     - DD

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ) |Product Manager| ana@adhocteam.us |
|Jason Wolf|Product Manager| jwolf@governmentcio.com |
|Jim Adams | Designer | jadams@governmentcio.com |
|Sandra Hallie | FE Engineer | shallie@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Joseph Preisser| Edu contact| Joseph.Preisser@va.gov |
|Tammy Hurley| VBA Edu team | tammy.hurley1@va.gov | 
|Hope Coleman| VBA Edu team | Hope.Coleman@va.gov |

## The Problem

- Direct deposit for edu functionality still lives on eBenefits. Since we moved direct deposit for comp & pen to VA.gov last year, this means that veterans now need to update their direct deposit info in two different places.
- Historically, eBenefits has has issues around fraud + direct deposit. This is one of the major reasons we moved over direct deposit for comp & pen to VA.gov last year — VA.gov has greater security and requires 2FA for all users. With direct deposit for edu still on eBenefits, we're leaving that feature vulnerable.
- EBenefits is eventually going away, so we need to migrate all functionality over to VA.gov. Direct deposit for edu is still an outstanding project.

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

## Value Propositions

- Direct deposit for edu will be more secure on VA.gov.
- Migrating this feature to VA.gov moves us one step closer to being able to retire eBenefits.

## KPIs

WIP here: https://docs.google.com/spreadsheets/d/1B6c1rY-1l64cWhHO7D8WjA328zwfdAhSgKkPatIKmts/edit#gid=995745327

# Implementation Info

Please go to the overall [product outline for direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md#implementation-info).

## Screenshots
### Before

![Direct deposit section of the profile without direct deposit for edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/direct-deposit-before.jpg)

### After
