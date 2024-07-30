# MHV Home -- Alerts

## Current and Proposed Alerts

Implemented | Conditions | View
--- | --- | ---
✅ | Not identity-verified (< LOA3) | ![](./assets/mhv-not-verified.png)
✅ | No VA patient facility registration | ![](./assets/mhv-not-registered-patient.png)
✅ | No associated MHV account | `no image, yet`
❌ | MHV basic credentials < LOA3 | ![](./assets/mhv-mhv-basic-credentials-not-loa3.png)
❌ | ID.me/Login.gov credentials < LOA3 | ![](./assets/mhv-idme-logingov-credentials-not-loa3.png)


## Authentication/Credential Service Providers

- ID.me
- Login.gov
- My HealtheVet National Portal API
- DS Logon


## Proposed Alert flow

We have collected a decent number of conditions that could generate an alert.
Rendering multiple alerts _will_ confuse users.

Below is pseudocode describing how we could render the single most relevant
alert to the user.

```
if MHV basic creds and not identity-verified then
  render "Sign in with a different account"

else if ID.me/Login.gov creds and not identity-verified then
  render "Verify and register"

else if not identity-verified then
  render "Verify your identity"

else if no facilities/not a VA patient then
  render "You don't have access"

else if no associated MHV account
  render "Register your account w/ MHV"

else
  no alert
```

A user must present identity-verified credentials (LOA3/IAL2) in order to access
health data (PHI) and personal information (PII). Check these conditions first
in the `if..else` chain.


## Suggested code refacoring

- Rename components that wrap `<va-alert />` with the prefix `Alert` (e.g. - `AlertNoMhvAccount`).

- Create an `AlertContainer` that renders the most relevant alert, using the provided pseudocode logic as a guide.
