# Contact Information Product Outline

Last Updated December 7, 2021

Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp); [#va-profile](https://dsva.slack.com/channels/va-profile)
     
## Roles

[See profile product outline for current team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles)


### Table of Contents

- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Measuring success](#measuring-success)
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
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

- [GA for contact submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-transaction/)
- [GA for contact submission failures](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-edit-failure&explorer-graphOptions.selected=analytics.nthDay/)
- [GA dashboard for address validation](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/arWBC7_-SkK3WHQuJQHQoQ/a50123418w177519031p176188361/)

## Projects

### Current projects & enhancements

None

### Completed projects & enhancements

|Project or enhancement|Status|
|----|----|
|[Add confirmation email for contact info updates](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/8383) | Launched June 2021 |
|[Add contact info FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23376)| Launched April 2021|
|[Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account) | Launch completed October 2020|
|[Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/product-outline.md) | Launch completed March 2020||
|[VA Profile (formerly Vet360) initial integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1) | Launch completed Summer 2018 |
|[Dashboard/Profile/Account MVPs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-mvp) | Launch completed Spring 2018 |

## How to Access and Test

[See profile product outline for information on how to test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#how-to-access-and-test)

## Error Handling

[List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

## Design 

- [Contact information sketch files](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655)
