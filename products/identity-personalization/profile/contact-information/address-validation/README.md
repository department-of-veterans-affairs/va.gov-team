# Project outline: Address validation

Last Updated July 19, 2022

## Table of Contents
- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Analytics](#analytics)
- [Status](#status)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Design](#design-and-use-cases)

## POCs

Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)

[See profile product outline for current team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles)

These are the folks that were responsible for the original work in 2019/2020:
     
|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Adam Whitlock | FE Engineer| adam.whitlock@adhocteam.us |
|Tom Harrison | BE Engineer| tom.harrison@adhocteam.us |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
|Jen Strickland | 508/Accessibility support| jennifer.strickland@adhocteam.us |
|Amy Rosenthal| Technical Analyst|Amy.Rosenthal@va.gov  |
|Christine Donovan| VA Profile contact/ OIT PM |  Christine.Donovan@va.gov |
|Mike Richards | VA Profile contact | michael.richard2@va.gov |

## Overview

The VA.gov profile supports address validation functionality when people update their contact information. This functionality aims to reduce the likelihood that people save  addresses to which mail can not be delivered.

Currently, this functionality does the following:

- Provides address validation that lets users know if the postal service may not recognize their address.
- Provides address suggestions to users if we have them.
- Allows users to go back and edit their address if their address is flagged as problematic.
- Allows users to override the determination that their address is problematic in the event that the user knows their address to be correct. 

## User Problem Statement

As a Veteran, I want to be able to update my address on VA.gov. If that address may not be recognized by the postal service, I want suggestions to know what I should save. I also want to be override determinations that my address is problematic in the event I know my address to be correct.

### User Goals

- As a veteran, I want to be able to update my address on VA.gov so I can receive communication from the VA.
- As a veteran, I want to know if the VA thinks there might be a problem with my address so I can make corrections as needed.
- As a veteran, I want to know if the VA has any address suggestions for me so I know what the postal service might recognize.
- As a veteran, I want to be able to override the determination that my address might not be valid if I know my address to be correct (example: moved to a new neighborhood that's not yet on the map).


## Analytics
- [GA dashboard for contact information](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)
- [GA dashboard for address validation](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/)

## Status

- Launched to 25% of users on 3/18/2020
- Launched to 50% of users on 3/25/2020
- Launched to 100% of users on 3/30/2020

### Timeline

- **Aug 2019**: Discovery begins
- **September 2019**: Initial design complete
- **October 2019**: User testing; build begins
  - Note: A FE bug prevented analytics from being tracked pre-October 9 for individual fields. This resulted in a lack of data for mailing address save failures before that date. We start to see analytics after this date.
- **December 2019**: QA planned but halted due to a significant amount of bugs; Also, VA Profile needed to make some changes and get us a new endpoint. 
- **Jan 2020**: VA Profile delivers new endpoint; Bug fixes complete
- **Feb 2020**: QA begins
- **March 2020**: Launch!

## How to Access and Test


[Read use case for information on how to test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md#how-to-reproduce)

## Error Handling

- [List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/engineering-docs/profile-error-codes.md)
- [Error code matrix](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/error-code-matrix.md)


## Service Level Objective

[Service Level Objective](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/engineering-docs/service-level-objective.md)

## API Calls and Dependent Systems

Candidate Address Validation uses the [VA profile address validation API](https://api.va.gov/services/address_validation/v2/) to get address suggestions and override keys. Override keys are sent to the [VA profile contact information API](https://www.vet360.va.gov/person-mdm-cuf-person-hub/cuf/person/contact-information/v1/addresses) in order to update the user's address.

## Design and use cases

- [Contact information sketch files](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=0-1&p=f&t=lEdNqkk7wYZu9pH4-0)
- [Use case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md)
- [User flow](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=0-1&p=f&t=lEdNqkk7wYZu9pH4-0)
