# MHV Home -- Alerts

## Current Alerts
✅ | Verified credentials = LOA3 and No VA patient facility registration | Non-Patient Veterans Page


Implemented | Conditions | View
--- | --- | ---
✅ | MHV basic credentials (LOA1) | ![](./assets/mhv-alert--mhv-basic-account.png)
✅ | ID.me: credentials < LOA3 | ![](./assets/mhv-alert--verify-and-register-idme.png)
✅ | Login.gov: credentials < LOA3 | ![](./assets/mhv-alert--verify-and-register-logingov.png)
✅ | DS_Logon: credentials < LOA3 and No VA patient facility registration | ![](./assets/mhv-alert--unverified.png)
✅ | No associated MHV account API Errors | ![](./assets/mhv-alert--mhv-account-api-actionable-error.png) ![](./assets/mhv-alert--mhv-account-api-error.png)

## Authentication Providers/Credential Service Providers (CSPs)

- ID.me
- Login.gov
- DS Logon

## Alert flow

We have collected a decent number of conditions that could generate an alert.
Rendering multiple alerts _will_ confuse users.

Below is pseudocode describing how we render the single most relevant
alert to the user.

```
if MHV basic creds and not identity-verified then
  render "You need to sign in with a different account"

else if ID.me/Login.gov creds and not identity-verified then
  render "Verify your identity"

else if not identity-verified and no facilities/not a VA patient then
  render "Our records don't show any VA health data for you right now"

else if no associated MHV account
  render "Error code xxx: Contact the My HealtheVet help desk" / "You can't access messages, medications, or medical records right now"

else
  no alert
```

A user must present identity-verified credentials (LOA3/IAL2) in order to access
health data (PHI) and personal information (PII). Check these conditions first
in the `if..else` chain.


## Code organization

- Components that wrap `<va-alert />` are named with the prefix `Alert` (e.g. - `AlertNoMhvAccount`).

- An `Alert` renders the most relevant alert, according to the provided pseudocode logic above.
