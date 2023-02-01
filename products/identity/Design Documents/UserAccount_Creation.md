# UserAccount & UserVerification Creation

## Summary
`UserAccount` and `UserVerification` objects are created and maintained from two different methods, Single Sign-On (SSOe) and Sign in Service (SiS) authentication workflows.

## UserAccount

| Attribute | Description |
| --- | --- |
| `icn` | MPI Integration Control Number |

### Single Sign-On (SSOe)
The `icn` is retreived from the `SAML` that is returned from IAM during the authentication flow. `UserAccount` objects are then found or created in after login actions.

1. `V1::SessionsController#user_login` sets the `current_user` attributes (including `icn`) from the SAML and calls `V1::SessionsController#after_login_actions`.
2. `V1::SessionsController#after_login_actions` creates and runs a new `Login::UserVerifier` service object with the current_user's `icn`.
3. `Login::UserVerifier` service finds or creates a `UserAccount` with the current_user's `icn`.

### Sign in Service (SiS)
The `icn` is retreived from querying MPI. If an MPI record does not exist, one is created. The `icn` is then used to find or create a `UserAccount`.

1. `V0::SignInController#callback` calls `V0::SignInController#create_login_code`.
2. `V0::SignInController#create_login_code` gets `verified_icn` from `SignIn::AttributeValidator` service object.
3. `V0::SignInController#create_login_code` then creates and runs a new `SignIn::UserCreator` service object with the `verified_icn`.
4. `SignIn::UserCreator` service creates and runs a new `Login::UserVerifier` service object with a `user_verifier_object` containing the `verified_icn`.
5. `Login::UserVerifier` service finds or creates a `UserAccount` with the `verified_icn`.

## UserVerification
A `UserAccount` can have many `UserVerifications`. There will be one `UserVerification` per IDP UUID.
| Attribute | Description |
| --- | --- |
| `user_account_id` | Associated UserAccount |
| `idme_uuid` | A users UUID from ID.me |
| `logingov_uuid` | A users UUID from Login.gov |
| `mhv_uuid` | A users UUID from My HealtheVet |
| `dslogon_uuid` | A users UUID from DS Logon |

### Single Sign-On (SSOe)
The UUID is retreived from the SAML returned from IAM during the authentication flow. `UserVerification` objects are then created or updated in after login actions.

1. `V1::SessionsController#user_login` sets the current_user from the SAML and calls `V1::SessionsController#after_login_actions`.
2. `V1::SessionsController#after_login_actions` creates and runs new `Login::UserVerifier` service object with current user's IDP UUID.
3. `Login::UserVerifier` service updates or creates a `UserVerification` with the corresponding IDP UUID.

### Sign in Service (SiS)
The UUID is retreived from the IDP's user info and is used to create or update `UserVerification` objects in callbacks.

1. `V0::SignInController#callback` retreives user_info from the IDP and calls `V0::SignInController#create_login_code`.
2. `V0::SignInController#create_login_code` normalizes `user_attributes` (which contains the IDP UUID) then creates and runs a new `SignIn::UserCreator` service object with those attributes.
3. `SignIn::UserCreator` service creates and runs a new `Login::UserVerifier` service object with a `user_verifier_object` containing the IDP UUID.
4. `Login::UserVerifier` service updates or creates a `UserVerification` with the corresponding IDP UUID.

