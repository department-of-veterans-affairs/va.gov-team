# Debt Letters MVP Product Outline
Last Updated February 26, 2020

## Keywords/Labels
- GitHub Label: Debt Letters MVP 
- Slack channel: #vsa-bam-2
- Keywords
     - Debt Letters 
     - Debt
     - DMC

## POCs
|Name|Role|
|----|----|
|Matthew Self| DSVA Lead| 
|Leah Keeler | Product Manager|
|Cameron Testerman | BE Engineer|
|Amen Ra | FE Engineer|
|Mahariel Rosario | FE Engineer|
|Riley Orr | Designer|
|Becca Walsh | Designer|
|Melissa Rebstock | Veterans Experience Office (VEO) Executive Partner|
|Jason Hoge | Debt Mgmt Center (DMC) Contact|

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Decisions](#decisions)
- [The Plan](#the-plan)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Design](#design)
- [Screenshots](#screenshots)

---
 
# Executive Summary

There’s an overarching project called the Veteran Debt Processing Enhancement that was put into place due to several overarching legislative requirements specifically related to Veteran debt.  VA is working on a comprehensive solution across all administrations that encompasses all requirements, to include business process re-engineering and modernization of systems.
As an initial MVP, the DMC is looking to demonstrate forward progress on this initiative by implementing a solution that allows Veterans to more quickly and easily understand if and why they may have debts with the VA, and how to work with the VA to resolve them.

## User Problem Statement
### OPTIONS
- How might we make communications regarding debt accurate, timely, and clear, while treating Veterans with dignity and compassion?
- Veterans who have incurred a debt with the VA need a way to get accurate, timely, and clear information about the reason and status of that debt, along with their options for resolving it, while being treated with dignity and compassion.
- I am a Veteran who has incurred a debt with the VA for one reason or another, and I need to understand why and what my options for resolving it are. Currently, in addition to the information sometimes being inaccurate or out of date, the communications I receive from the VA about debt leave me feeling frustrated and demeaned.
- Those of our Veterans who have incurred a debt with the VA struggle to understand the reason for the debt and what their options are to resolve it because the communications about debt the VA sends are difficult to understand and slow to arrive. Our solution should focus on making all content and communication about debt accurate, timely, clear, and compassionate, so that Veterans can take appropriate action while maintaining their dignity.


## Solution Goals

- TBD
- 

### User Goals
- To have a single place through which I can manage any debts I have with the VA
- To be able to understand all of the communication about any debts I have with the VA
- To be able to understand and access all of the available paths to resolve any debts I have incurred
- To understand ahead of time what benefits and/or set of circumstances might lead to me incurring a debt with the VA
- To know as quickly as possible about changes to my debt status with the VA, to include newly filed debts, and changes to existing debts regardless of the cause of the change
- For the overall experience of handling a debt with the VA be as painless as possible instead of leaving me feeling frustrated and demeaned
- To receive consistently accurate information about the status of my account, regardless of the way in which that communication gets to me

## Hypotheses

- TBD

## Requirements 
### High-Level

- Digital "landing page" explaining the debt management process at the VA
- Veterans can view information about debts they owe the VA in a single place
- Veterans are automatically notified when new communications about debts are available to them, and given a way to navigate directly to the new communication on VA.gov
- Outgoing notifications about debt are configurable
- Veterans can understand the communications they receive from the VA about debts; they are plain-language, adhere to modern design practices, and engage with Veterans in an empathetic way
- Information delivered to Veterans about the status and nature of their debts is accurate and up-to-date

## Constraints

There are two main contraints known at this time, one coming from the business and one from the technical landscape within the VA.

Business: This problem affects Veterans as well as eligible dependents, however due to external pressures from Congress, there is a desire to limit the scope of this problem to indebted Veterans to expedite the process of launching something meaningful to Veterans. It's currently unclear how much wiggle room there is here; it's possible we might be able to address the concerns of non-Veterans without adding complexity to the problem or lengthening the delivery timeline

Technical: There are many different types communications about debt (typically referred to as "debt letters) that are sent out to Veterans. At this time, many of these have yet to be migrated into a central respository and organized in a reliable fashion. Because of this, the scope of this problem is limited to addressing only those letters types which ARE organized and accessible in a central respository (VBMS eFolder)


## Discovery Takeaways
- Initial Discovery notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/debt-letters-mvp/discovery-research)

## Decisions


## The Plan

## Roll-Out Approach

## KPIs

[KPI Process Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/d5625a8ebf6a4fc0ff21ce0830907de993593d21/teams/vsp/teams/insights-analytics/kpi-tracking/kpi-process.md)

[KPI Worksheet Template](
https://docs.google.com/spreadsheets/d/1LGN2TKNwmobdl4yhxjyd_bua22KUkW3K56RU7yHMNrk/edit#gid=1554481611)

[Sample KPI Worksheet (Disability and Appeals)](https://docs.google.com/spreadsheets/d/1kd9BINUvJYvSa5vO2a4gCjs2x8-6ouhVYXA_VFj4eDY/edit#gid=1554481611)

---

# Implementation Info

## Status

**February 2020**

On Wednesday, February 27, the Debt Letters MVP was officially assigned to BAM2 to be slotted in as our next project. We will be moving forward with the project. Our first major milestone will be creating and delivering a first draft roadmap to all stakeholders; the target window for delivering this roadmap is early March 2020.

## Solution Narrative

- **Sprint XX: (02/26/2020 - 03/10/2020)**:
  - Project officially passed intake and was assigned to BAM2
- **5/27/2019**: On staging 
- **6/24/2019**: Started Usability testing
- **July 2019**: Project put on hold while eBenefits worked on figuring out data requirements for the eBenefits fraud team
- **8/16/2019**: Request from VBA leadership to launch as soon as possible
- **8/19/2019**: Resumed development and began launch planning
- **8/20/2019**: Approval from eBenefits fraud team to move forward
- **8/21/2019**: QA begins
- **12/10/2019**: learned mroe detailed information regarding fraud error flags. More info can be located [Here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/fraud%20error%20keys.md)
- **12/16/2019**: Laucnhed to 100% of users
- **1/29/2020**: eBenefits removed direct deposit for comp and pen from their site.

## How to Access and Test

**Staging**

- https://staging.va.gov/my-va/
- LOA3 with 2FA: Sign in with [any staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv).
- LOA3 without 2FA: Will be prompted to setup 2FA before accessing.
- LOA1: Create an account on staging and navigate to the profile. You will see a prompt to verify your identity since the profile is only available to users who have verified their identities.
- [QA Manual Testing Matrix](https://app.zenhub.com/files/31788863/7d925a6a-4824-4437-a80e-2dbaf2224dfa/download) spreadsheet

## Error Handling

Error handling can be found [here](./error-handling/README.md).

## Service Level Objective

| Service&#160;Level&#160;Indicator | Service Level Objective |
| :-------------------------------- | ----------------------- |
| Availability | Should not exceed 5% 5xx error rates (as a percent of all requests) for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/c6827877dda83b878bf9a71f80e4703f7977beee/ansible/deployment/config/prometheus/rules/application.rules#L6) |
| Latency | Percent of requests served in under 2 seconds should not drop to or below 95% for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/c6827877dda83b878bf9a71f80e4703f7977beee/ansible/deployment/config/prometheus/rules/application.rules#L24) |
| Incident Response | Initial acknowledgement of the issue within 15 minutes of a triggered alert<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21) |

## API Calls and Dependent Systems

Direct Deposit uses the EVSS PPIU API (https://www.ebenefits.va.gov/wss-ppiu-services-web/rest/ppiuServices/v1) to retrieve and update a veteran's financial information.

We also use the govDelivery API to send emails.

## On Call Support

#vsp-platform-support and #vsa-authd-exp slack channels

## Design 

### Screenshots

#### Before 
![screen shot 2018-10-29 at 10 18 05 am](https://user-images.githubusercontent.com/21130918/47655714-fe548f80-db63-11e8-8812-3e2fe920f09f.png)

![screen shot 2018-10-29 at 10 19 58 am](https://user-images.githubusercontent.com/21130918/47655822-3a87f000-db64-11e8-98a4-ebebb2a8183c.png)

#### After 

The eBenefits Direct Deposit Secreen shots can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/discovery-research)

All the new VA.gov [direct deposit designs can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/design).

**Profile with direct deposit**
![Profile with direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit.png)

**Profile with direct deposit modal open**
![Direct deposit modal open](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit_Edit%20modal%20open.png)
