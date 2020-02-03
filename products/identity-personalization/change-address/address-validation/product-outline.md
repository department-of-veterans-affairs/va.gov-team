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
|??? |Product Manager| ??? |
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

## How to Access and Test

**Staging**

- https://staging.va.gov/my-va/

## Error Handling

- Information regarding "error codes" can be found at this [link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/error-messaging/%20ErrorCodesForOverride_DRAFT-WithExamples.xlsx)

- [Address Validation sample txt files](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/change-address/address-validation/sample-txt-files)

Vet360 team and VA.gov team have determined to change the severity on address validation errors allowing more candidate address scenarios to pass through. 

## Service Level Objective

## API Calls and Dependent Systems

Candidate Address Validation uses the ______ API ()

## On Call Support

#vsp-platform-support and #vsa-authd-exp slack channels

## Design 

[Designs are in this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/change-address/address-validation/designs).

### Screenshots


