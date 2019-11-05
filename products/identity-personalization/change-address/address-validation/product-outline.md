# Candidate Address Validation Product Outline

## POCs
- GitHub Label: Address Validation
- Slack channel: #vsa-authd-exp
- Keywords
     - Candidate Address Validation  
     - Address Change 
     
|Name|Role|Email|
|----|----|-----|
|Lisa Koenigsberg|DSVA Lead| lisa.koenigsberg@va.gov |
|Samara Strauss |DSVA Lead Designer| samara.strauss@va.gov |
|Justin Pickett |Product Manager| jpickett@governmentcio.com |
|Arthur Green |Designer| jpickett@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Amen Ra | FE Engineer| ara@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
|Amy Rosenthal|            |Amy.Rosenthal@va.gov  |

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
Currently the VA receives an excessive of returned USPS mail as undeliverable and the VEO would like to augment the va.gov address process to include additional validation and methods for users to update.

## User Problem Statement
As a Veteran, I want securely access and manage my mailing address information and have the ability to override the system when my submitted address is not recognized by the system.  

## Solution Goals
Provide a simple and easy way to manage mailing address submissions to reduce the amount of returned snail mail. Also provide the correct error messaging guiding the users to correct the issue in the event a mailing address cannot be updated.

### User Goals
- Va.gov candidate address validation will be a secure way to access and manage mailing address information in the system. Provide a easy understandble way for the user to take actionalbe steps to get their mailing information updated and corrected when an error has occured. 

## Hypothesis
- Reduction in the amount of returned USPS mail.
- A decrease in overall calls the National Call Center regarding errors from users not able to update their mailing address. 
- The system will have more accurate mailing address data for users by implementing the correct solutions to capture the right mailing address information when inputed by the user. 


## Requirements 
- Only LOA3 user with 2FA setup will have access to the mailing address section of the Profile.
- When mailing address information is changed an email confirmation will be set to the user.


## Constraints
- Severity levels codes will need to be authorized to allow mailing addresses to be overriden when not initially recognized from the users input. 


## Discovery Takeaways
- Initial Discovery notes can be found [here]()

## Decisions
- 

## The Plan
- Work with the Vets360 team to better understand needs of the API interaction.
- Implement a secure address change feature for the user in the user profile section.
- Test Test Test

## KPIs
### Objective
- Improve the ability to manage address information and decrease the number of returned snail mail cases.
- Decrease overall call volume to National Call Center regarding mailing address update errors. 
- Google analytics insight will show a increase in successful mailing address submissions. 

### Tracking
- Work with the call center team team to see if there is an decrease in call in cases.
- Work with Google Analytics team to see if the percentages are increasing in success rates for users updating their mailing addresses successful by following the error messaging provided to the user when they are not able to initially save their mailing address.
---

# Implementation Info

## Status


## Solution Narrative

- 


## How to Access and Test

**Staging**

- https://staging.va.gov/my-va/


## Error Handling


## Service Level Objective

## API Calls and Dependent Systems

Candidate Address Validation uses the ______ API ()



## On Call Support

#vsp-platform-support and #vsa-authd-exp slack channels

## Design 

[Designs are in this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/change-address/address-validation/designs).

### Screenshots


