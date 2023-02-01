# UserAccount & UserVerification Attributes

## Summary
`UserAccount` and `UserVerification` objects are created and maintained from two different methods, Single Sign-On (SSOe) and Sign in Service (SiS) authentication workflows.

## Single Sign-On (SSOe)

### UserAccount

| Attribute | Description | Notes |
| --- | --- | --- |
| `icn` | Integration Control Number, this is used as a primary identifier for MPI queries. | The `icn` is retreived from the Eauth SAML headers during the authentication flow. |

### UserVerification

| Attribute | Description | Notes |
| --- | --- | --- |
| `user_account_id` | Associated UserAccount | A `UserAccount` can have many `UserVerifications`. There will be one `UserVerification` per IDP UUID.  |
| `idme_uuid` | A users UUID from ID.me | Retreived from the Eauth SAML headers during the authentication flow. |
| `logingov_uuid` | A users UUID from Login.gov | Retreived from the Eauth SAML headers during the authentication flow. |
| `mhv_uuid` | A users UUID from My HealtheVet | Retreived from the Eauth SAML headers during the authentication flow. |
| `dslogon_uuid` | A users UUID from DS Logon | Retreived from the Eauth SAML headers during the authentication flow. |
| `backing_idme_uuid` | A users ID.me UUID when they authenticate with My HealtheVet or DS Logon | Retreived from the Eauth SAML headers during the authentication flow. |


## Sign in Service (SiS)

### UserAccount

| Attribute | Description | Notes |
| --- | --- | --- |
| `icn` | Integration Control Number, this is used as a primary identifier for MPI queries. | The `icn` is retreived from querying MPI with the `idme_uuid`, `logingov_uuid`, or `mhv_icn` (depending on authentication method). If an MPI record does not exist, a new MPI record with the user's credential information is created. |

### UserVerification

| Attribute | Description | Notes |
| --- | --- | --- |
| `user_account_id` | Associated UserAccount | A `UserAccount` can have many `UserVerifications`. There will be one `UserVerification` per IDP UUID. |
| `idme_uuid` | A users UUID from ID.me | Retreived from the user attributes that is queried from ID.me. |
| `logingov_uuid` | A users UUID from Login.gov | Retreived from the user attributes that is queried from Logon.gov .|
| `mhv_uuid` | A users UUID from My HealtheVet | Retreived from the user attributes that is queried from My HealtheVet. |
| `dslogon_uuid` | A users UUID from DS Logon | Retreived from the user attributes that is queried from DS Logon. |
| `backing_idme_uuid` | A users ID.me UUID when they authenticate with My HealtheVet or DS Logon | Retreived from the user attributes that is queried from My HealtheVet or DS Logon. |
