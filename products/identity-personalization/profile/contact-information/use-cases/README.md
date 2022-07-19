# Contact Information Use Cases
**Last updated:** July 19, 2022

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
- [User needs to add contact information (addresses, phone numbers, or contact email address)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#adding-information)
- [User needs to edit contact information (addresses, phone numbers, or contact email address)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#editing-information)
- [User needs to remove contact information (home address, phone numbers, or contact email address)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#removing-information)

## Edge cases
### Flags 
- Address is marked as “bad” in VA Profile (use case docs to come post-research)

### Validation
- [Home address is updated but does not match Mailing address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/use-cases/README.md) 
- [Address can’t be confirmed with USPS, and a suggested address is found.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md#address-cant-be-confirmed-with-usps-and-a-suggested-address-is-found)
- [Address and/or unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md#address-andor-unit-number-cant-be-confirmed-with-us-postal-service-usps-and-a-suggestion-is-not-found)
- [Address is missing a unit number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md#address-is-missing-a-unit-number)

### System
- [Something has gone wrong and VA.gov can’t display any contact information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/system-cant-display-contact-info.md)
- [High incidences of address save failures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Address%20Save%20Failure%20Codes.md)

## Flow diagrams
- [High-level add/edit flow with screenshots](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/v/AjzYMz/a/L0pm5qL/) (includes Address Validation)
- [Home address updated, mailing address does not match](https://app.mural.co/t/vsa8243/m/vsa8243/1648492872357/ccc5ced279f2062e7336460965ddc8681e6e9722?sender=u28f508d646c449cc1afe4873)
- Address is marked as “bad” in VA Profile (link to come)
