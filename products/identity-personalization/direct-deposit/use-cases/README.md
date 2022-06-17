# Direct Deposit Use Cases
Direct deposit use case documentation is available in this directory.

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Common use cases
### User with 2-factor authentication (2FA), and no flags on their account
- No comp+pen or education payments detected
- Comp + pen, or education benefit payments detected
  - Has not set up direct deposit (DD) for any payments
  - Has set up DD for comp and pen, but not education
  - Receives comp + pen, or education benefit payments, has not set up DD for comp and pen, has set up education

### User without 2FA, and no flags on their account
- [User has logged in with My HealtheVet or DS Logon](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/direct-deposit-mhv-dslogon-gate.md)

## Edge cases
### Validation
- Does not have valid home phone, work phone, and/or mailing address in profile
### Flags
- [2FA user has a fiduciary/incompetent/deceased flag on their account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/direct-deposit-comp-pen-fiduciary-blocking.md) 
- 2FA user has a fraud or identity theft flag on their account

### System
- [Something has gone wrong and VA.gov can't display any direct deposit information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/direct-deposit-cant-display.md)
