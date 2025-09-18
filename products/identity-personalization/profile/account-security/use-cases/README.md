# Account Security Use Cases

**Last updated: September 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1758228617252/cee6a8bd1fb567f143ff56c66169db81a6f6ecc9?wid=0-1758228621582&outline=open)
- [Figma files](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-7850&t=vEzOY6Vc44fxJdc2-1)
- Test Rail QA

## Current experience
If the user is not LOA3, or has a blocked account, the only thing they can access in profile is the Account security section. Within Account security, they can access multifactor authentication and a link to their sign in service.

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- [LOA1: User views and completes tasks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/complete-tasks-loa1.md)

### User logs in with LOA3 account
- [LOA3 user views and completes tasks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/complete-tasks-loa3.md) 

### User has a blocked account
- [User has a blocked account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

## Edge cases
### Validation
There are no validation use cases for this feature.

### Flags
- LOA1 user information above.
- Blocked account user information above.

### Errors
- [Something has gone wrong and VA.gov can’t match user information with our records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/system-cant-match-user-information.md)
- [Something has gone wrong and MPI could not connect](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/system-cant-access-records.md)
- [System error: Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

---

<details><summary>Archive | Account Security Use Cases, February 2024</summary>
  
# Account Security Use Cases

**Last updated:** February 15, 2024

If the user is not LOA3, or has a blocked account, the only thing they can access in profile is the Account Security section. Within Account security, they can access multifactor authentication and a link to their sign in service. 

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- [User views and completes tasks - LOA1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/complete-tasks-loa1.md)

### User logs in with LOA3 account
- [User views and completes tasks: add multifactor authentication, view terms and conditions, or find a link to their sign in service (eg. ID.me) to manage their sign in information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/complete-tasks-loa3.md) 

### User has a blocked account
- [User has a blocked account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

## Edge cases

### Flags
There are no flags associated with this feature, but an account can be blocked based on flags we get from the backend. More details are available in the [blocked account use case documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md).

### Validation
There are no validation use cases for this feature.

### System
- [Something has gone wrong and VA.gov can’t match user information with our records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/system-cant-match-user-information.md)
- [Something has gone wrong and MPI could not connect](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/system-cant-access-records.md)

## Flow diagrams
- [High-level flow](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0%3A1&mode=design&t=iNSbLjANTt9uOIhh-1)

</details>
