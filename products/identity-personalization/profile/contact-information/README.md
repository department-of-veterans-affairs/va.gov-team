# Contact Information Product Outline

Last Updated April 13, 2022

Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp); [#va-profile](https://dsva.slack.com/channels/va-profile)
     
## Roles

[This is currently managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).


### Table of Contents

- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Measuring success](#measuring-success)
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Backend](#backend)
- [Error Handling](#error-handling)
- [Design](#design)

---
 
## Overview

The contact information section of the VA.gov profile (https://www.va.gov/profile) allows users to view and update their:

- Mailing address
- Home address
- Home phone
- Mobile phone
- Work phone
- Fax number
- Email address (for contact, not sign in)

The backend for this is powered by VA Profile (formerly Vet360), which is integrated with a handful of systems at the VA. This means that when a user updates their information in the VA.gov profile, it updates it multiple places at the VA so that veterans don't have many disparate addresses on file. Our integration with VA Profile launched in summer 2018.

As of June 2020:

- We only show the profile to users who have verified their identity (this includes contact information).
- Users can view and update their address, phone, and email information.
- Users can delete all contact information **except** the mailing address.

## User Problem Statement

As a veteran at the VA, I want to make sure the VA has the right contact information for me so I can receive my benefits that come via mail, things like prescriptions and medical supplies. I also want to make sure the VA has the right contact information for me so I can receive important correspondence related to my benefits.

### User Goals

As a user, I want to be able to:

- View what contact information the VA has on file for me.
- Update my contact information as it changes.
- Update my contact information in one place and have it update everywhere at the VA.

## Measuring success

- [GA dashboard for contact information](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)
- [GA dashboard for address validation](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/)

## Projects

[See profile product outline for full list of projects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#projects)

## How to Access and Test

[See profile product outline for information on how to test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#how-to-access-and-test)

## Backend

Contact information comes from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).

## Error Handling

[List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

## Design 

[Contact information sketch files](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655)
