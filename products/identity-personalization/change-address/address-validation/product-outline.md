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
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
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

We expect to see the following:

- A reduction in the amount of returned USPS mail.
- A decrease in overall calls the National Call Center regarding errors from users not able to update their mailing address. 
- More accurate mailing address data for users. 

## Requirements 

- Only LOA3 user with 2FA setup will have access to the mailing address section of the Profile.
- We will show suggested addresses when we have them, but will not show them if they are not available.
- We will always allow users to go back and edit their address if we raise the address validation flag.

## Constraints

- Severity levels codes will need to be authorized to allow mailing addresses to be overriden when not initially recognized from the users input. 
- We can not highlight for users exactly what has been changed about their address in a suggested address, eg. highlighting that we've changed "St." to "Street."

## Discovery Takeaways

- Discovery was not documented, unfortunately.

## Decisions

- Address override will be allowed for all addresses, even bogus ones. We assume that users know best, and we also want to make sure people who move into new neighborhoods or remote neighborhoods that might not be recognized can save their addresses.

## The Plan
- Work with the VA Profile team to better understand needs of the API interaction.
- Implement a secure address change feature for the user in the user profile section.
- Test Test Test

## KPIs

### Objectives & Tracking
- **Objective**: Reduce the number of veterans that report to the call center that they can't save their addresses (#[6012](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6012))
  - **Tracking**: Work with the call center team team to see if there is an decrease in call in cases.
- **Objective**: Increase the amount of successful mailing address submissions.
  - **Tracking**: Track whether we see people using suggested addresses.
- **Objective**: Reduce the number of bad addresses being saved in VA profiles
  - **Tracking**: Low override; high rate of using suggestions or editing/saving addresses.
  - **Tracking**: Track the number of successful address form submissions increases.
- **Objective**: Reduce returned mail at the VA (Note: Not sure how to measure this).
  - **Tracking**: Not sure how to determine whether the overall rate of returned mail has decreased at the VA.

---

# Implementation Info

## Status

**Feb 2020**

- We are approaching QA and should be launching the feature shortly after that.

**Jan 2020**

- We decided to make it so all addresses can override the "invalid" determination since users know their addresses best.

## Solution Narrative

- **Aug 2019**: Discovery begins

- **September 2019**: Initial design complete

- **October 2019**: User testing; build begins

- **December 2019**: QA planned but halted due to a significant amount of bugs; Also, VA Profile needed to make some changes and get us a new endpoint. 

- **Jan 2020**: VA Profile delivers new endpoint; Bug fixes complete

- **Feb 2020**: QA begins

- **March 2020**: Launch!

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

**Override w/ suggestions**

![Override w/ suggestions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/designs/Override%3B%20Suggestions.png)

**Override w/ NO suggestions**

![Override w/ NO suggestions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/designs/Override%3B%20No%20suggestions.png)

**Add unit number w/ override**

![Add unit number w/ override](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/designs/Add%20missing%20unit%20number%20with%20override.png)

**Edit unit number w/ override**

![Edit unit number w/ override](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/designs/Edit%20bad%20unit%20number%20with%20override.png)
