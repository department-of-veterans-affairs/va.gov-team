# Contact Information Use Cases

`draft`

**Last updated:** July 7, 2022

Contact information use case documentation is available in this directory.

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

- High-level flow with screenshots (need to add link)

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
- User needs to add contact information (addresses, phone numbers, or contact email address)
- User needs to edit contact information (addresses, phone numbers, or contact email address)

## Edge cases
### Flags 
- Address is marked as “bad” in VA Profile

### Validation
- [Home address is updated but does not match Mailing address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/use-cases/README.md) 
- Postal services does not recognize an address
- A suggested address is provided

### System
- Something has gone wrong and VA.gov can't display any contact information
