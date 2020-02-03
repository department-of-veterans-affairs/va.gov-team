# Direct Deposit Product Outline
Last Updated December 10, 2019

## POCs
- GitHub Label: Direct Deposit  
- Slack channel: #vsa-authd-exp
- Keywords
     - Direct Deposit  
     - Profile Direct Deposit 
     - DD
     - C & P 
     - Compensation & Pension

|Name|Role|
|----|----|
|Lisa Koenigsberg|DSVA Lead| 
|Samara Strauss |DSVA Lead Designer|
|Justin Pickett |Product Manager|
|Nick Sullivan |Original Engineering Lead (now on Platform)|
|Erik Hansen | FE Engineer|
|Lihan Li | BE Engineer |
|Tze-chiu Lei | QA Analyst |
|Frank Bryceland | General eBenefits contact |
|Melissa Rebstock | General eBenefits contact |
|Michael Walker | eBenefits (Insignia) contact |
|Toya McKoy| eBenifits Contract (Insignia) Office Representative |
|Courtney Rive | eBenefits (Insignia) Project Manager |

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

Due to large number of fraud cases and security concerns on eBenefits the Direct Deposit feature is being ported from eBenefits to VA.gov. The migration of Direct Deposit started as a desire for MFA, which VA.gov has. While eBenefits houses both Compensation & Pension functionality and GI Bill payment information, the MVP will only include Comp & Pension at this time.

The full background on Direct Deposit is found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/discovery-research)

## User Problem Statement

- As a Veteran, I want to securely access and change my compensation and pension direct deposit information so I can receive the money that I've earned from the VA.

## Solution Goals

- We will house direct deposit in the VA.gov user profile.
- All users need to be LOA3 and have enabled 2FA to use the feature. 

### User Goals

- VA.gov Direct Deposit will be a secure way to access or change your compensation and pension direct deposit information.

## Hypothesis

- 2FA will be one of the major reasons for increase security of direct deposit on Va.gov.
- Moving direct deposit to VA.gov will reduce fraud cases.
- Moving direct deposit to VA.gov is more secure and better for Veterans.

## Requirements 

- Only LOA3 user with 2FA setup will have access the Direct Deposit section of the Profile. 
- When Direct Deposit information is changed an email confirmation will be set to the user. 
- Direct Deposit information emails will have information to report fraud.

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

### Showing direct deposit bank info

**Endpoint:** `GET ppiu/payment_information`

For any errors we get when trying to get the user's current direct deposit info, we show the following error message:
![get error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/error-messaging/dd%20payment%20info%20server%20error.png)

### Updating direct deposit bank info

**Endpoint:** `PUT ppiu/payment_information`

We also show error messages if errors come back from this endpoint. Depending on the error `key`s we get back, we might show special error messages.

If we get a `key` value of `'cnp.payment.flashes.on.record.message'` we show the following error message:
![put fraud error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/error-messaging/dd%20save%20error%20account%20flagged%20for%20fraud.png)

If we get a `key` value of `'payment.accountRoutingNumber.invalidCheckSum'` we show the following error message:
![put invalid routing error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/error-messaging/dd%20save%20error%20invalid%20routing%20number.png)

All other errors get the following message:
![put error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/error-messaging/dd%20save%20error%20general%20error.png)

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

[Designs are in this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/design).

### Screenshots

#### Before (Profile)
![screen shot 2018-10-29 at 10 18 05 am](https://user-images.githubusercontent.com/21130918/47655714-fe548f80-db63-11e8-8812-3e2fe920f09f.png)

![screen shot 2018-10-29 at 10 19 58 am](https://user-images.githubusercontent.com/21130918/47655822-3a87f000-db64-11e8-98a4-ebebb2a8183c.png)

#### The eBenefits Direct Deposit Secreen shots can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/discovery-research)

**Profile with direct deposit**
![Profile with direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit.png)

**Profile with direct deposit modal open**
![Direct deposit modal open](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit_Edit%20modal%20open.png)
