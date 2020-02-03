# Candidate Address Validation Product Outline

## POCs
- GitHub Label: Address Validation
- Slack channel: #vsa-authd-exp
- Keywords
     - Candidate Address 
     - Address Validation 
     - Address Change 
     
|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DSVA Lead| samara.strauss@va.gov |
|??? |Product Manager| tressa.furner@adhocteam.us |
|Tressa Furner |Designer| jpickett@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Brad Conley | FE Engineer| bconley@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
|Jen Strickland | 508/Accessibility support| jennifer.strickland@adhocteam.us |
|Amy Rosenthal| Technical Analyst|Amy.Rosenthal@va.gov  |
|Christine Donovan| VA Profile contact/ OIT PM |  Christine.Donovan@va.gov |
|Mike Richards | VA Profile contact | michael.richard2@va.gov |

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
Currently the VA receives an excessive of returned USPS mail as undeliverable. The Veteran Experience Office (VEO) would like us to add address validation & suggestions to the VA.gov profile to reduce the likelihood that people save undeliverable addresses.

## User Problem Statement
As a Veteran, I want to be able to update my address of VA.gov. If that address may not be recognized by the postal service, I want suggestions to know what I should save. I also want to be override determinations that my address is problematic in the event I know my address to be correct.

## Solution Goals

- Provide address validation that lets users know if the postal service may not recognize their address.
- Provide address suggestions to users if we have them.
- Allow users to go back and edit their address if their address is flagged as problematic.
- Allow users to override the determination that their address is problematic in the event that the user knows their address to be correct. 

### User Goals

- As a veteran, I want to be able to update my address on VA.gov so I can receive communication from the VA.
- As a veteran, I want to know if the VA thinks there might be a problem with my address so I can make corrections as needed.
- As a veteran, I want to know if the VA has any address suggestions for me so I know what the postal service might recognize.
- As a veteran, I want to be able to override the determination that my address might not be valid if I know my address to be correct (example: moved to a new neighborhood that's not yet on the map).

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

- The errors we're seeing are about 80% "account flagged" errors, which we won't be able to reduce.  Users have to call the help desk to unflag the account and are currently getting a message telling them take that action. t
- There are also some "bad routing number" errors that are also likely just that, an incorrectly entered routing number. 
- At the moment, the only one that might be erroneous would be the "bad home phone" errors. The solution we think would work for that is to adjust Google Analytics to better track those, and see if users update their phone number after receiving the error and are then able to update their DD info.


## Solution Narrative

- The solution we think would work for that is to adjust Google Analytics to better track those, and see if users update their phone number after receiving the error and are then able to update their DD info.


## How to Access and Test

- Login with [vets.gov.user+130@gmail.com](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv#L132) on https://staging.va.gov
- Visit https://staging.va.gov/profile/
- Edit the "Mailing Address" or "Home address" under "Contact information"


## Error Handling

- Information regarding "error codes" can be found at this [link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/error-messaging/%20ErrorCodesForOverride_DRAFT-WithExamples.xlsx)

### Address suggestions

**Endpoint**: POST profile/address_validation

If a user's address does not return any suggested addresses we show the following error. If the user is sure the address is correct they can override the error and save the address as-is.  

![Address not found error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/av-readme-update/products/identity-personalization/change-address/address-validation/error%20messages/address%20not%20found.png)

If the API detects that the entered address is an apartment building but does not include an apartment number we show the following error:  
<br>
![Missing unit number error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/av-readme-update/products/identity-personalization/change-address/address-validation/error%20messages/missing%20unit%20number.png)

If the API does not recognize the entered apartment number the following error is shown:
<br>
<br>
![Bad unit number error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/designs/Edit%20bad%20unit%20number%20with%20override.png)

## Service Level Objective

| Service&#160;Level&#160;Indicator | Service Level Objective |
| :-------------------------------- | ----------------------- |
| Availability | Should not exceed 5% 5xx error rates (as a percent of all requests) for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/c6827877dda83b878bf9a71f80e4703f7977beee/ansible/deployment/config/prometheus/rules/application.rules#L6) |
| Latency | Percent of requests served in under 2 seconds should not drop to or below 95% for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/c6827877dda83b878bf9a71f80e4703f7977beee/ansible/deployment/config/prometheus/rules/application.rules#L24) |
| Incident Response | Initial acknowledgement of the issue within 15 minutes of a triggered alert<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21) |

## API Calls and Dependent Systems

Candidate Address Validation uses the VA profile address validation API (https://api.va.gov/services/address_validation/v2/) to get address suggestions and override keys. Override keys are sent to the VA profile contact information API (https://www.vet360.va.gov/person-mdm-cuf-person-hub/cuf/person/contact-information/v1/addresses) in order to update the user's address.



## On Call Support

#vsp-platform-support and #vsa-authd-exp slack channels

## Design 

[Designs are in this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/change-address/address-validation/designs).

### Screenshots


