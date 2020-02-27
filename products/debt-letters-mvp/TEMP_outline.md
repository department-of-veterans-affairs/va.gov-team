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

## Hypothesis

- 2FA will be one of the major reasons for increase security of direct deposit on Va.gov.
- Moving direct deposit to VA.gov will reduce fraud cases.
- Moving direct deposit to VA.gov is more secure and better for Veterans.

## Requirements 

- We will only support direct deposit for compensation & pension to start. Direct deposit for Education/GI Bill benefits will continue to live on eBenefits.
- Users should be able to change their direct deposit information via the VA.gov profile. This includes routing number, account number, and account type.
- Users who currently receive paper checks should be able to switch to direct deposit via the VA.gov profile. 
- However, users can not switch back to paper checks from VA.gov if they already have direct deposit.
- Users can not delete direct deposit information.
- Only the following people can access direct deposit:
  - People eligible for compensation and pension benefits.
  - Users logged into VA.gov.
  - LOA3 users.
  - Users with 2FA.
- When direct deposit information is changed an email confirmation will be sent to the user.
- Direct deposit confirmation emails will have information to report fraud.


## Constraints

- The fraud team at the VA needed reports to be in place so that they could track and research fraud cases. This put about a two month pause on the project as the VA.gov identity team worked with ID.me to get APIs set up to be able to pull the information the needed when they needed it.

## Discovery Takeaways
- Initial Discovery notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/discovery-research)

## Decisions

At this time we are only adding Compensation & Pension and not Post-9/11 GI Bill because the payment methods associated with the Post-9/11 GI Bill are stored in _LTS Ch33_ but have not been exposed in a consumable service.

## The Plan

- Work with the eBenfits to better understand needs of Veterans. 
- Implement a secure direct deposit feature for Compensation & Pension in the user profile.
- Port the Post-9/11 GI Bill direct deposit after more discovery.
- Test Test Test

## PHASED ROLL OUT APPROACH

- Intial roll out released to 10% of users - 9.25.19
- Ramped up from 10% of users to 50% of users - 10.16.19
- Ramped up from 50% of users to 75% of users - 12.5.19
- Ramped up to 100% of users — 12.16.19

## KPIs

### Objective

- Improve direct deposit security and decrease the number of cases of fraud.
- Implement improved error messaging that will help direct users to the National Call Center if they are experieincing errors when attempting to update their Direct Deposit information. 
- Decrease "flagged for fraud" error rate. Information on this can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/fraud%20error%20keys.md)

### Tracking

[Direct Deposit GA dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/T7daIpzoRw2LOg1BVHJ0Dw/a50123418w177519031p187673796/)

- Work with the fraud team to see if there is an decrease in cases. (Need to see if we can access this.)

---

# Implementation Info

## Status

**January 2020**

On January 29, 2020, eBenefits removed the direct deposit feature from the website and now send all users over to VA.gov.

**Mid December 2019** 

- Direct deposit has been launched to 100% of users on VA.gov.
- We completed our investigation of the "routing number flagged for fraud" error and determined this was a result of a list of previously compromise routing numbers kept by the BGS team and had nothing to do with our tool. Given this, we were able to launch to all users.

**Early December 2019** 

- We launched to 75% of users.
- We decided not to add additional gating for DS Logon users and need to check in with the fraud team to see whether fraud incidence have reduced.
- The errors we're seeing are about 80% "account flagged" errors, which we won't be able to reduce.  Users have to call the help desk to unflag the account and are currently getting a message telling them take that action. 
- There are also some "bad routing number" errors that are also likely just that, an incorrectly entered routing number. 
- At the moment, the only one that might be erroneous would be the "bad home phone" errors. The solution we think would work for that is to adjust Google Analytics to better track those, and see if users update their phone number after receiving the error and are then able to update their DD info.

**8/21/19**

As of 8/16/2019, VBA leadership has asked the DSVA team to launch the direct deposit functionality on VA.gov as quick as possible. We received clearance to pursue launch despite not yet having everything in place for the eBenefits fraud team.

Currently, our team is preparing for launch. Our work haulted in June just after user testing, so we are currently undergoing QA, 508 testing, UAT, and other pre-launch tasks.

**May 2019**

- Currently in Staging, not in Production.

- Conversations with the eBenfits team unearthed a few different rule that are in place on for direct deposit. Conversations will continue to find out what needs to be in place for direct deposit on VA.gov, but for an MVP is the goal. 

- Working with the ID.me team to improve security for MFA to protect Veterans from Fraudsters. Still to be decided if this will be included in the MVP. 

- There are on going conversations with the Fraud team on eBenfits. They expressed a desire to have IP address tracked in order to provide those to law enforcement to catch fraudsters. These conversations are still on going at this time. 

## Solution Narrative

- **March 2019**: Design and development begins
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
