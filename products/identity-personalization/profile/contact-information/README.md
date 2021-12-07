# Contact Information Product Outline

Last Updated December 7, 2021

Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp); [#va-profile](https://dsva.slack.com/channels/va-profile)
     
## Roles

[See profile product outline for current team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles)

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [OKRs & KPIs](#okrs--kpis)

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

The contact information section of the VA.gov profile (https://www.va.gov/profile) allows users to view and update their:

- Mailing address
- Home address
- Home phone
- Mobile phone
- Work phone
- Fax number
- Email address (for contact, not sign in)

The backend for this is powered by VA Profile (formerly Vet360), which is integrated with a handful of systems at the VA. This means that when a user updates their information in the VA.gov profile, it updates it multiple places at the VA so that veterans don't have many disparate addresses on file. Our integration with VA Profile launched in summer 2018.

## User Problem Statement

As a veteran at the VA, I want to make sure the VA has the right contact information for me so I can receive my benefits that come via mail, things like prescriptions and medical supplies. I also want to make sure the VA has the right contact information for me so I can receive important correspondence related to my benefits.

## Solution Goals

As the VA, we want to:

- Have the most up-to-date contact information for veterans, so we can make sure important benefit information gets to the right place.

### User Goals

As a user, I want to be able to:

- View what contact information the VA has on file for me.
- Update my contact information as it changes.
- Update my contact information in one place and have it update everywhere at the VA.

## Hypothesis

Unfortunately, we don't have any documentation on this from the original 2018 work.

## Requirements 

As of June 2020:

- Only show the profile to users who have verified their identity (this includes contact information).
- Allow users to view address, phone, and email information.
- Allow users to update this information from the profile.
- Allow users to delete all elements of contact information **except** the mailing address.

## Constraints

Right now, VA Profile only integrates with some systems at the VA. Veterans still will have to update their contact info in multiple places if they have certain benefits. We outline this in the profile.

## Discovery Takeaways

2018 discovery wasn't documented. For profile 2.0 discovery, [go to the 2019 Personalization 2.0 strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md#observations-profileaccount).

## OKRs & KPIs

### GA dashboards

- [GA for contact submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-transaction/)
- [GA for contact submission failures](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-edit-failure&explorer-graphOptions.selected=analytics.nthDay/)
- [GA dashboard for address validation](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/arWBC7_-SkK3WHQuJQHQoQ/a50123418w177519031p176188361/)

### Objective

**People can easily verify what  contact information the VA has on file for them and update it as necessary so that they receive all correspondence with the VA.**

"An easy way to keep my info current at the VA" 

### Key results – Engagement

These are just average metrics since we did not have KRs documented for the original 2018 launch or the VA Profile (formerly Vet 360) integration.

- Number of mailing addresses updates should be about 5K per week.
- Number of home addresses updates should be about 5K per week.
- Number of mobile phone numbers updates should be about 2K per week.
- Number of email addresses updates should be about 2K per week.

*KPI*
- Number of users who update their addresses/phone numbers/email addresses.

*Bets*
- Feature contact information on the first page of the profile.
- Allow easy editing and updating of information.
- Integrate with VA Profile so that contact info updates sync with multiple backends at the VA.

### Key results - System performance

These are just average metrics since we did not have KRs documented for the original 2018 launch or the VA Profile (formerly Vet 360) integration.

- Rate of successful address submissions should be 97% or above.
- Rate of successful phone number submissions should be 97% or above.
- Rate of successful email address submissions should be 97% or above.

*KPIs*
- Number of successful address/phone/email submissions.
- Number of errors for updating addresses/phone/email.

*Bets*
- Integrate with VA Profile so that contact info updates sync with multiple backends at the VA.
- Add address validation to the mailing address and home address fields.

### Key results - Address validation

These are the KRs from the address validation project, which are also documented on the [address validation outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/address-validation#okrs--kpis).

- Rate of mailing address failures should drop from ~17% to ~10%. **Goal met**
- Rate of home address failures should drop from 10% to 5%. **Goal met**
- For address suggestions, rate of users choosing the suggested address should be 95% or above. **Goal met**

*KPI*
- Number of successful mailing/home address submissions.
- Number of errors for updating mailing/home addresses.
- Number of times address validation is needed.
- Number of times address is suggested.
- Number of times suggested address is used.

*Bet*
- Add address validation to the mailing address and home address fields.

---

# Implementation Info

## Status

- Details of the 2018 work can be found in the [old profile product outline in the vets.gov-team repo](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Profile/Readme.md).
- Details of the 2019 address validation (candidate address) work can be found in the [address validation product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md).
- Details of the 2020 profile 2.0 redesign can be found in the [current profile product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/README.md).

## Solution Narrative

- 2016/17 — Prototypical "account" page on Vets.gov.
- Spring 2018 - Original EMIS profile launched to Vets.gov.
- Summer 2018 — Profile backend transitioned to VA Profile (then- Vet360).
- 2019/2020 – Address validation added to the Mailing and Home address fields.
- Fall 2020 - Contact information visually redesigned as part of the profile 2.0 overhaul.

## How to Access and Test

- Login with [any staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) on https://staging.va.gov
- Visit https://staging.va.gov/profile/

## Error Handling

- [List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

## Service Level Objective

## API Calls and Dependent Systems

- Contact information is suppported by VA Profile on the backend.

## On Call Support

#vsp-platform-support and [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp) slack channels

## Design 

- [2018 designs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1/design)
- [2020 Profile 2.0 designs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design)
