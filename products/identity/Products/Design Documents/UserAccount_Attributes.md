# UserAccount & UserVerification Attributes

## Summary
`UserAccount` and `UserVerification` objects are created and maintained from two different methods, Single Sign-On (SSOe) and Sign in Service (SiS) authentication workflows.

## UserAccount

| Attribute | Description | Single Sign-On (SSOe) | Sign in Service (SiS) |
| --- | --- | --- | --- |
| `icn` | Integration Control Number, this is used as a primary identifier for MPI queries. | The `icn` is retreived from the Eauth SAML headers during the authentication flow. | The `icn` is retreived from querying MPI with the `idme_uuid`, `logingov_uuid`, or `mhv_icn` (depending on authentication method). If an MPI record does not exist, a new MPI record with the user's credential information is created. |

## UserVerification
A `UserAccount` can have many `UserVerifications`. There will be one `UserVerification` per IDP UUID.

| Attribute | Description | Single Sign-On (SSOe) | Sign in Service (SiS) |
| --- | --- | --- | --- |
| `user_account_id` | Associated UserAccount | | |
| `idme_uuid` | A users UUID from ID.me | Retreived from the Eauth SAML headers during the authentication flow. | Retreived from the user attributes that is queried from ID.me |
| `logingov_uuid` | A users UUID from Login.gov | Retreived from the Eauth SAML headers during the authentication flow. | Retreived from the user attributes queried from Logon.gov |
| `mhv_uuid` | A users UUID from My HealtheVet | Retreived from the Eauth SAML headers during the authentication flow. | Retreived from the user attributes queried from My HealtheVet. |
| `dslogon_uuid` | A users UUID from DS Logon | Retreived from the Eauth SAML headers during the authentication flow. |  Retreived from the user attributes queried from DS Logon. |
| `backing_idme_uuid` | A users ID.me UUID when they authenticate with My HealtheVet or DS Logon | Retreived from the Eauth SAML headers during the authentication flow. | Retreived from the user attributes queried from My HealtheVet or DS Logon. |
