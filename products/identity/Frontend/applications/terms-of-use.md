# Application: Terms of Use

## Background

In the past there was a shared terms and conditions hosted on My HealtheVet to faciliate a way to accept/deny terms and conditions as it pertains to health information.


## Purpose / Goals

The purpose or goal of the Terms of Use application is to provide a unified terms of use page where users can view, then accept or deny VA's online terms of use. This provides a binding-contract between VA users and the VA. 

> Note: This is now considered a System of Record (SoR)

**(Normal)**
- Terms of use actions - whether accepted or declined - should be shared across the entire VA ecosystem
- I should be able to view and read the terms of use unauthenticated
- I should be able to either accept or deny the terms of use
- I should be logged out and shown an error page if I deny VA's online terms of use
- I should be able deny VA's online terms of use when previously accepted

**(External redirect clients)**
- When navigating to my preferred external application (eg My HealtheVet, eBenefits), I am prompted to take action (accept or deny)
- I should have the same interaction when using the VA Mobile app and VA.gov (web)

**(My VA Health)**
- I should automatically be provisioned when navigating to My VA Health terms of use page
- I should be allowed to take action (accept or deny) if I have not accepted the agreement previously
- I should be shown an error page if any automatic account provision fails
- I should be shown an error page if I encounter any network or unknown errors


## User flow(s)
   
### High-level technical diagram

<details><summary>Terms of Use - (unauthenticated)</summary>

```mermaid
---
title: Terms of use (unauthenticated)
---
flowchart TD
    A[Somewhere] -->|User| B(Terms of Use page)
    B --> C[View and read]
```
</details>

<details><summary>Terms of Use - (middle authenticated)</summary>

```mermaid
---
title: Terms of use (middle auth)
---
flowchart TD
    A[Vets API or IAM] -->|User| B(Terms of Use page)
    B -- Check query params and session storage --> C[Display terms of use content]
    C -- Accept --> E[Send response to API]
    C -- Decline --> E
    E -- Accept: Check redirect URL in session storage is valid --> F[Redirect user to URL]
    E -- Decline: Log user out and redirec to proper ToU error page --> G[Sign out and redirect]
```
</details>

<details><summary>Terms of Use - (fully authenticated)</summary>
   
```mermaid
---
title: Terms of use (fully auth)
---
flowchart TD
    A[Somewhere] -->|User| B(Terms of Use page)
    B --> C[Display terms of use content]
    C -- Accept --> E[Send response to API]
    C -- Decline --> E
    E -- Accept --> F[Redirect user to VA.gov URL]
    E -- Decline --> G[Sign out and redirect to ToU error page]
```
</details>

<details><summary>Terms of Use - My VA Health</summary>

```mermaid
---
title: Terms of Use - My VA Health
---
flowchart TD
    A[Somewhere] -->|User| B(My VA Health - Terms of Use page)
    B -- If ssoeTarget query parameter is valid --> C{Make request to update user provisioning}
    C -- Success: User provisioned --> D[Redirect to ssoeTarget URL]
    C -- Success or Failure: User not provisioned --> E[Redirect to ToU error page: Code 111]
    C -- Failure: Agreement not accepted --> F[Display the Terms of Use for user action]
    C -- Failure: Other errors, network errors, etc --> G[Redirect to ToU error page: Code 110]
    F -- Accept --> Z[Send response to API]
    F -- Decline --> Z
    Z -- Accept --> Y[Redirect user to ssoeTarget URL]
    Z -- Decline --> X[Sign out and redirect to ToU error page]
```
</details>

## Engineering

- Main directory: `vets-website/src/applications/terms-of-use`

## Terminology

| **Word**    | **Definition**                                                                                                                     | **Reference** |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| LOA         | Level of Assurance                                                                                                                 | NIST doc      |
| IAL         | Identity Authentication Level                                                                                                      | NIST doc      |
