# User Identity

## Class Description
The `UserIdentity` class is designed to manage & hold a user's key attributes during the login process prior to a successful connection with MPI.
The attributes it holds are either sourced from IAM during an SSOe login or the CSP directly during a SiS login.
`UserIdentity` is designed to be as lightweight of a class as possible, carrying only attributes that are either not sourceable from MPI or can be used to query MPI and obtain a full set of user attributes.
After MPI connection the `UserIdentity` remains the backing source for the attributes it provides, OVER the MPI attribute. For more detail on specific attributes see the [User model documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/user-login).

## User Identity Attributes List

### Attribute Sourced from CSP directly
* email
* loa
* multifactor
* sign_in
* verified_at

### Attribute used to query MPI
- first_name
- middle_name
- last_name
- gender
- ssn
- birth_date
- uuid/idme_uuid/logingov_uuid
- icn/mhv_icn
- edipi

### Other
- sec_id - used to back up `Account`
- mhv_correlation_id - unsure, possibly could be removed
- mhv_account_type - used to determine internal LoA
