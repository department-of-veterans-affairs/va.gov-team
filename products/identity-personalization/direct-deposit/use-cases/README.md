# Direct Deposit Use Cases

**Last updated:** February 14, 2024

Direct deposit use case documentation is available in this directory. As of August 2024 this supports C&P as well as Chapter 33 EDU benefits with plans to support Chapter 35 in the future.

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

- [High-level flow](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile-Direct-Deposit?type=design&node-id=0%3A306&mode=design&t=JeBw2hRh9J5QSuL7-1)
- [Staging test accounts for direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-direct-deposit.md)

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 ID.me or Login.gov; No flags on their account
- [No compensation and pension or education payments detected](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-not-detected.md)
- Compensation and pension and/or education benefit payments detected
  - [Has not set up direct deposit (DD) for any payments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-dd-not-setup.md)
  - [Has set up DD for one, but not both benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-partial-setup.md)
  - [Has set up DD for both benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-complete-setup.md)
- [User needs to edit account information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)

### User logs in with DS Logon or MyHealtheVet; No flags on their account
- [User has logged in with My HealtheVet or DS Logon](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/gate-mhv-dslogon.md)

## Edge cases

### Flags 
- [LOA3 ID.me or Login.gov user tries to update their bank information, but they have a fraud or identity theft flag on their account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/flag-fraud.md)
#### Blockecd users 
[See documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

### Validation
- [LOA3 ID.me or Login.gov user tries to update their compensation and pension direct deposit information, and has entered a routing number that can't be matched with a bank](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md#save-error-routing-number-entered-is-invalid-and-cant-be-matched-to-a-bank)
- [LOA3 ID.me or Login.gov user tries to update their compensation and pension direct deposit information, but they don't have
 have valid home phone, work phone, and/or mailing address in profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/validation-address-phone.md)


### System
- [Something has gone wrong and VA.gov can't display any direct deposit information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/system-cant-display-dd.md)


# Direct Deposit Use Cases

**Last updated:** May 2025

Direct deposit use case documentation is available in this directory.

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, they will be directed to the Profile Account Security section.

- [High-level flow](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=0-1&t=GfWosOK54j3EaFyY-1)
- [Staging test accounts for direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-direct-deposit.md)

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 ID.me or Login.gov; No flags on their account
- [No compensation benefit payments detected](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-not-detected.md)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/Ineligible.jsx)
- Compensation benefit payments detected
  - [Has **not** set up direct deposit for any benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-dd-not-setup.md)
  - [Has set up direct deposit for benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-complete-setup.md)
- [User needs to edit account information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)

## Edge cases

### Flags 
- [Flagged: BGS has flagged the account for fraud](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/flag-fraud.md)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx)
- [Flagged: BGS has flagged the routing number for fraud](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx)

### Blockecd users 
- [See documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

### Validation
- [User tries to update their direct deposit information, and has entered a routing number that can't be matched with a bank](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md#save-error-routing-number-entered-is-invalid-and-cant-be-matched-to-a-bank)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx)
- [User tries to update their direct deposit information, but they don't have have valid home phone, work phone, and/or mailing address in profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/validation-address-phone.md)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx)

### System
- [Something has gone wrong and VA.gov can't display any direct deposit information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/system-cant-display-dd.md)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/TemporaryOutage.jsx)
