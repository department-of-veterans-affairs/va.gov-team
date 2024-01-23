# Contact Information Product Outline

**Last Updated: January 23, 2024**
     
## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Projects](#projects)
- [Analytics](#analytics)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)


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
* To access this feature in the profile, users need to login to VA.gov  with an identity-verified (LOA3)  account.
* Contact information is pulled from and written to the VA Profile API.
* Updates made in VA.gov profile contact information will sync with any other systems that are using the VA Profile API for contact information.
	* some benefits will require a separate phone call to update the address, [see the FAQ](https://www.va.gov/resources/change-your-address-on-file-with-va/#change-your-address-by-contact)  
* Email confirmations are sent when a Veteran updates their contact information.
* The only piece of contact information that can’t be deleted once added is a mailing address
* This feature doesn’t support international phone numbers 

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

[For a list of current and past projects, please refer to the Profile section outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#projects).

## Analytics
- [GA dashboard for contact information](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/3Z1vT6SlQqevdav1s72QwA/a50123418w177519031p176188361/)
- [GA dashboard for address validation](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/)

## Backend
[Backend Technical Documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/contact_information/backend_documentation.md)

### Services
- Contact information comes from [VA Profile](https://depo-platform-documentation.scrollhelp.site/getting-started/va-profile).
- Confirmation emails for when people update contact information come from [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html).

### How to Access and Test
[See profile product outline for information on how to test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#how-to-access-and-test)

## Frontend
Forms in contact info use the [VA Form Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-form-config-options)

## Design and UX
- [Desktop](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0%3A787&mode=design&t=UiWIZDzH64ulByY7-1) 
- [Mobile/user flow](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0%3A1&mode=design&t=UiWIZDzH64ulByY7-1)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/use-cases)
