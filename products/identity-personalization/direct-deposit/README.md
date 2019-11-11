# Direct Deposit Product Outline
Last Updated August 20, 2019

## POCs
- GitHub Label: Direct Deposit  
- Slack channel: #vsa-authd-exp
- Keywords
     - Direct Deposit  
     - Profile Direct Deposit 
     - DD
     - C & P 
     - Compensation & Pension

|Name|Role|Email|
|----|----|-----|
|Lisa Koenigsberg|DSVA Lead| lisa.koenigsberg@va.gov |
|Samara Strauss |DSVA Lead Designer| samara.strauss@va.gov |
|Justin Pickett |Product Manager| jpickett@governmentcio.com |
|Arthur Green |Designer| jpickett@governmentcio.com |
|Nick Sullivan |Original Engineering Lead (now on Platform)| nick.sullivan@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Amen Ra | FE Engineer| ara@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
|Frank Bryceland | General eBenefits contact | Frank.Bryceland@va.gov |
|Melissa Rebstock | General eBenefits contact | Melissa.rebstock@va.gov |
|Michael Walker | eBenefits (Insignia) contact | Michael.Walker@va.gov |
|Toya McKoy| eBenifits Contract (Insignia) Office Representative | Toya.McKoy@va.gov |
|Courtney Rive | eBenefits (Insignia) Project Manager | Courtney.Rive@va.gov |



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
Due to large number of fraud cases and security concerns on eBenefits the Direct Deposit feature is being ported from eBenefits to VA.gov. The migration of Direct Deposit started as a desire for MFA, which Va.gov has. While eBenefits houses both Compensation & Pension functionality and GI Bill payment information, the MVP will only include Comp & Pension at this time.

The full background on Direct Deposit is found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/discovery-research)

## User Problem Statement
As a Veteran, I want to securely access and change my compensation and pension direct deposit information.

## Solution Goals
The Personal Information page of eBenefits, which contains the Direct Deposit functionality, closely resembles the look and functionality of the VA.gov Profile. It seems a natural fit for the VA Profile to be extended to contain a Direct Deposit section. 


### User Goals
- Va.gov Direct Deposit will be a secure way to access or change your compensation and pension direct deposit information.

## Hypothesis
- 2FA will be one of the major reasons for increase security of direct deposit on Va.gov.
- Moving direct deposit to VA.gov will reduce fraud cases.
- Moving direct deposit to VA.gov is more secure and better for Veterans.

## Requirements 
- Only LOA3 user with 2FA setup will have access the Direct Deposit section of the Profile. 
- Upon setup of 2FA or change the user will receive a email confirmation. **(need to verify)**
- When Direct Deposit information is changed an email confirmation will be set to the user. **(need to verify)**
- Both 2FA and change in Direct Deposit information emails will have information to report fraud.

## Constraints
- Fraud has requirements that need to be in place. 
  - Received list of requirements, team looking into those currently. More information [here](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/18971) **(need to update)**
- Need to speak with more people around the rules eBenfits had in place. (ie "Financially-incompetent Veteran") The conversation and rules can be found [here.](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/19029x) **(need to update)**

## Discovery Takeaways
- Initial Discovery notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/discovery-research)

## Decisions
At this time we are only adding Compensation & Pension and not Post-9/11 GI Bill because the payment methods associated with the Post-9/11 GI Bill have not been exposed in a consumable service, although this is still being researched. According to this [document](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/635f35ad555d0cdac50667ac48c92fef2b719c64/Products/Platform/EVSS%20Integration/meeting-notes/2017-06-21-EVSS-Vets.gov-meeting-notes.md#pciu), this data is stored in _LTS Ch33_. (__note: link points to vets.gov-team repo__)

## The Plan
- Work with the eBenfits to better understand needs of Veterans. 
- Implement a secure direct deposit feature for Compensation & Pension in the user profile.
- Port the Post-9/11 GI Bill direct deposit after more discovery.
- Test Test Test

## KPIs
### Objective
- Improve direct deposit security and decrease the number of cases of fraud.
### Tracking
- Work with the fraud team to see if there is an decrease in cases. (Need to see if we can access this.) **(need to update)**
---

# Implementation Info

## Status

**8/21/19**

As of 8/16/2019, VBA leadership has asked the DSVA team to launch the direct deposit functionality on VA.gov as quick as possible. We received clearance to pursue launch despite not yet having everything in place for the eBenefits fraud team.

Currently, our team is preparing for launch. Our work haulted in June just after user testing, so we are currently undergoing QA, 508 testing, UAT, and other [pre-launch tasks](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/17530).

**May 2019**

- Currently in Staging, not in Production.

- Conversations with the eBenfits team unearthed a few different rule that are in place on for direct deposit. Conversations will continue to find out what needs to be in place for direct deposit on VA.gov, but for an MVP is the goal. further notes from that conversation can be found [here.](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Profile/Direct%20Deposit/Meeting%20Notes/Direct%20deposit%20call%206.5.19.docx) (__note: link points to vets.gov-team repo__)

- Working with the ID.me team to improve security for MFA to protect Veterans from Fraudsters. Still to be decided if this will be included in the MVP. Work can be found in this [ticket](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/18797)

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

## How to Access and Test

**Staging**

- https://staging.va.gov/my-va/
- LOA3 with 2FA: Sign in with [any staging user](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/MVI%20Integration/reference_documents/mvi_stagingUsers_fullList.csv) and navigate to the profile (__note: link points to vets.gov-team repo__).
- LOA3 without 2FA: Will be promted to setup 2FA before accessing.
- LOA1: Create an account on staging and navigate to the profile. You will see a prompt to verify your identity since the profile is only available to users who have verified their identities.
- [QA Manual Testing Matrix](https://app.zenhub.com/files/31788863/7d925a6a-4824-4437-a80e-2dbaf2224dfa/download) spreadsheet


## Error Handling

### Showing direct deposit bank info

**Endpoint:** `GET ppiu/payment_information`

For any errors we get when trying to get the user's current direct deposit info, we show the following error message:
![get error](./dd%20payment%20info%20server%20error.png)

### Updating direct deposit bank info

**Endpoint:** `PUT ppiu/payment_information`

We also show error messages if errors come back from this endpoint. Depending on the error `key`s we get back, we might show special error messages.

If we get a `key` value of `'cnp.payment.flashes.on.record.message'` we show the following error message:
![put fraud error](./dd%20save%20error%20account%20flagged%20for%20fraud.png)

If we get a `key` value of `'payment.accountRoutingNumber.invalidCheckSum'` we show the following error message:
![put invalid routing error](./dd%20save%20error%20invalid%20routing%20number.png)

All other errors get the following message:
![put error](./dd%20save%20error%20general%20error.png)


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

