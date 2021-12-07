# Project outline: Direct deposit for compensation & pension

Last Updated December 7, 2021

## POCs

Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)

[See profile product outline for current team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles)

These are the folks that were responsible for the original work in 2019/2020:

|Name|Role|Email|
|----|----|----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Brad Conley | FE Engineer| bconley@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Melissa Rebstock | eBenefits contact |Melissa.rebstock@va.gov|
|Michael Walker | EVSS contact |Michael.Walker10@va.gov|
|Joseph Preisser| Edu contact| Joseph.Preisser@va.gov |
|Adam Kinder | VBA Incident Team Lead | adam.kinder@va.gov|

### Table of Contents

- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Measuring success](#measuring-success)
- [Solution Narrative](#solution-narrative)
- [Feature Overview](#feature-overview)
- [Design](#design)

---
 
## Overview

We migrated direct deposit for compensation & pension over to VA.gov from eBenefits in 2019/2020 in an effort to improve security and reduce incidences of fraud.

## User Problem Statements

- As a Veteran, I want to securely access and change my direct deposit information so I can receive the money that I've earned from the VA.
- As a Veteran, I want to securely change my direct deposit information if I switch banks or need to receive money in a different bank account.
- As a Veteran who receives paper checks from the VA, I want to be able to switch to receive payments via direct deposit.

## Measuring success

[See direct deposit product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md#measuring-success)

## Solution narrative

- **March 2019**: Design and development begins
- **5/27/2019**: On staging 
- **5/2019**: Conversations with the eBenfits team unearthed a few different rule that are in place on for direct deposit. Conversations will continue to find out what needs to be in place for direct deposit on VA.gov, but for an MVP is the goal. Working with the ID.me team to improve security for MFA to protect Veterans from Fraudsters. Still to be decided if this will be included in the MVP. 
- There are on going conversations with the Fraud team on eBenfits. They expressed a desire to have IP address tracked in order to provide those to law enforcement to catch fraudsters. These conversations are still on going at this time. 
- **6/24/2019**: Started Usability testing
- **July 2019**: Project put on hold while eBenefits worked on figuring out data requirements for the eBenefits fraud team
- **8/16/2019**: VBA leadership has asked the DSVA team to launch the direct deposit functionality on VA.gov as quick as possible. We received clearance to pursue launch despite not yet having everything in place for the eBenefits fraud team. Currently, our team is preparing for launch. Our work haulted in June just after user testing, so we are currently undergoing QA, 508 testing, UAT, and other pre-launch tasks.
- **8/19/2019**: Resumed development and began launch planning
- **8/20/2019**: Approval from eBenefits fraud team to move forward
- **8/21/2019**: QA begins
- **9/25/19**: Intial roll out released to 10% of users
- **10/16/19**: Ramped up to 50% of users
- **12/2019**: We decided not to add additional gating for DS Logon users and need to check in with the fraud team to see whether fraud incidence have reduced.
- **12/5/2019**: We launched to 75% of users.
- **12/10/2019**: Learned more detailed information regarding fraud error flags. More info can be located [Here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/fraud%20error%20keys.md)
- **12/16/2019**: Launched to 100% of users. We also completed our investigation of the "routing number flagged for fraud" error and determined this was a result of a list of previously compromise routing numbers kept by the BGS team and had nothing to do with our tool. Given this, we were able to launch to all users.
- **1/29/2020**: eBenefits removed the direct deposit for comp & pen feature from the website and now send all users over to VA.gov.

## Feature overview

Initial Discovery notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/discovery-research)

For all other details, please view the main [product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md#feature-overview).

## Design 

[See direct deposit product outline for latest design](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/direct-deposit/README.md#design)

#### Before 

The eBenefits Direct Deposit Secreen shots can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/discovery-research)

All the new VA.gov [direct deposit designs can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/design).

**Profile 1.0 with direct deposit**
![Profile with direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit.png)

**Profile 1.0 with direct deposit modal open**
![Direct deposit modal open](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/design/Profile%20with%20direct%20deposit_Edit%20modal%20open.png)

#### After 

**Profile 2.0 with comp & pen**

![Direct deposit with comp & pen only](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/direct-deposit/Direct%20deposit.jpg)

![Direct deposit with comp & pen only_edit mode](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/design-specs/profile-images/direct-deposit/Direct%20deposit_edit%20in%20place.jpg)
