# MHV Home -- Alerts

## Current Alerts Types


Implemented | Conditions | View
--- | --- | ---
✅ | MHV basic credentials (LOA1) | ![](./assets/mhv-alert--mhv-basic-account.png)
✅ | ID.me: credentials < LOA3 | ![](./assets/mhv-alert--verify-and-register-idme.png)
✅ | Login.gov: credentials < LOA3 | ![](./assets/mhv-alert--verify-and-register-logingov.png)
✅ | DS_Logon: credentials < LOA3 and No VA patient facility registration | ![](./assets/mhv-alert--unverified.png)
✅ | No associated MHV account API Errors | ![](./assets/mhv-alert--mhv-account-api-actionable-error.png)<br>![](./assets/mhv-alert--mhv-account-api-error.png)

## Authentication Providers/Credential Service Providers (CSPs)

- ID.me
- Login.gov
- DS Logon

## Non-Patient Landing Page

As part of Milestone 2, we replaced the alert shown to identity-verified users without a registered VA facility with a `non-patient` Veterans landing page that provides access to downloadable PDF reports for "Self-Entered Information" (SEI) and DoD history.

## Alert flow for MHV Landing Page

We have collected a decent number of conditions that could generate an alert.
Rendering multiple alerts will confuse users, so only the most relevant alert should be shown.

Below is pseudocode describing how the MHV landing page renders the single most relevant alert to the user.

```mermaid
flowchart TD
    A[Start: User signs in] --> B{Identity-verified<br>and no facilities/not a VA patient?}
    B -- Yes --> B1["Non-Patient Veterans Landing Page"]
    B -- No --> C{MHV basic creds<br>and not identity-verified?}
    C -- Yes --> C1["Alert: You need to sign in with a different account"]
    C -- No --> D{ID.me/Login.gov creds<br>and not identity-verified?}
    D -- Yes --> D1["Alert: Verify your identity"]
    D -- No --> E{Not identity-verified<br>and no facilities/not a VA patient?}
    E -- Yes --> E1["Alert: Our records don't show any VA health data for you right now"]
    E -- No --> F{No associated MHV account?}
    F -- Yes --> F1["Alert: Error code xxx: Contact the My HealtheVet help desk<br/>or<br/>You can't access messages, medications, or medical records right now"]
    F -- No --> G["MHV Landing Page"]
```

A user must present identity-verified credentials (LOA3/IAL2) to access health data (PHI) and personal information (PII) on the MHV Landing Page. These conditions should be checked first in the if..else chain.


## Code organization

- Components that wrap `<va-alert />` are named with the prefix `Alert` (e.g. `AlertNoMhvAccount`).

- The main Alert component renders the single most relevant alert, following the logic described above.
