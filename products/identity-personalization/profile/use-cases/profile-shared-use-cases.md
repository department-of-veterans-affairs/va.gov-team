# Profile shared use cases
**Last updated: July 2025**

## Overview
Included in this document are links to all shared VA.gov profile use cases. These use cases are to be reused throughout the profile in order to standardize the experience.


## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
#### Editing information
TBD


## Edge cases
### Validation
There are no shared validations.

### Flags
There are no shared flags.

### Errors
#### System errors
<details><summary>Backend system down</summary>

- **Use case:** Cannot connect to the back end.
- **Status code:**
   - 296: Success with some external service errors. External services could be: vet360_contact_information (Vet360), va_profile (MVI), veteran_status (EMIS). [Link to pull request.](https://github.com/department-of-veterans-affairs/vets-api/pull/2738)
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3147-17046&t=V3lMgUB50CWCTPrv-1)
- [Link to code]
- **Content:**

H2: This page isn't available right now

We’re sorry. Something went wrong on our end. Refresh this page or try again later.	

</details>

### Blocked users 
- [See documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)
