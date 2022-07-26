# Contact Information Product Outline
Last Updated July 26, 2022
     
## Table of Contents

- [POCs](#)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Projects](#projects)
- [Analytics](#analytics)
- [Feature overview](#feature-overview)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design)


## POCs
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)
- [This is currently managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

## Overview
The contact information section of the VA.gov profile (https://www.va.gov/profile) allows users to view and update their:

- Mailing address
- Home address
- Home phone
- Mobile phone
- Work phone
- Contact email address (different from sign in)

The backend for this is powered by VA Profile (formerly Vet360), which is integrated with a handful of systems at the VA. This means that when a user updates their information in the VA.gov profile, it updates it multiple places at the VA so that veterans don't have many disparate addresses on file. Our integration with VA Profile launched in summer 2018.

As of June 2020:

- We only show the profile to users who have verified their identity (this includes contact information).
- Users can view and update their address, phone, and email information.
- Users can delete all contact information **except** the mailing address.

## User Problem Statement
- As a veteran at the VA, I want to make sure the VA has the right contact information for me so I can receive my benefits that come via mail, such as prescriptions and medical supplies. 
- As a veteran at the VA, I want to make sure the VA has the right contact information for me so I can receive important correspondence related to my benefits.

### User Goals
As a user, I want to be able to:

- View the contact information the VA has on file for me.
- Update my contact information as it changes.
- Update my contact information in one place and have it update everywhere at the VA.

## Projects

|Project or enhancement|Launch/Completion date|
|----|----|
|[Modal that asks if you want to update your mailing address when you update your home address](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33732)| July 2022|
|[Remove requirement for international postal code](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39775)| April 2022 |
|[Remove Fax number field from the profile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35975) | February 2022 |
|[Add confirmation email for contact info updates](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/8383) | Launched June 2021 |
|[Add contact info FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23376)| Launched April 2021|
|[Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/product-outline.md) | Launch completed March 2020||
|[Add APO/FPO/DPO options for military base addresses](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3209)| January 2020|
|[VA Profile (formerly Vet360) initial integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1) | Launch completed Summer 2018 |

## Analytics
- [GA dashboard for contact information](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)
- [GA dashboard for address validation](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/)

## Feature overview
### What to know about this feature
* Contact information currently lives within [the VA.gov profile](http://staging.va.gov/profile/direct-deposit) .
* This feature allows users to complete the following core tasks:
	- **Add and edit** their mailing address
	- **Add, edit, and delete** 
		- home address
		- home phone number
		- mobile phone number
		- work phone number
		- contact email address
* To access this feature in the profile, users need to login to  VA.gov  with an identity-verified (LOA3)  account.
* Contact information is pulled from and written to the VA Profile API.
* Updates made in VA.gov profile contact information will sync with any other systems that are using the VA Profile API for contact information.
* The only piece of contact information that can’t be deleted once added is a mailing address
* This feature doesn’t support international phone numbers 

## Backend
### Services
- Contact information comes from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).
- Confirmation emails for when people update contact information come from [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html).

### Error Handling
[List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

### How to Access and Test
[See profile product outline for information on how to test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#how-to-access-and-test)

## Frontend
Forms in contact info use the [VA Form Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-form-config-options)

## Design and UX
- [Contact information sketch files](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/use-cases)

### Flow diagrams
- [High-level add/edit flow with screenshots](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/v/AjzYMz/a/L0pm5qL/) (includes Address Validation)
- [Home address updated, mailing address does not match](https://app.mural.co/t/vsa8243/m/vsa8243/1648492872357/ccc5ced279f2062e7336460965ddc8681e6e9722?sender=u28f508d646c449cc1afe4873)
- [Address is marked as “bad” in VA Profile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/7yPo0rZ)
