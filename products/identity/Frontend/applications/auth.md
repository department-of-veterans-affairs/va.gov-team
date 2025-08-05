# Application: Auth

## Background

This is the page a user is directed to setup their session on VA.gov after they finish entering their credentials and multifactor authentication code.


## Purpose / Goals

The purpose or goal of the Auth application is to confirm a user is authenticated and redirect them to the appropriate page which can be either internal to VA.gov or external to a VA-partner site (My VA Health, VA Mobile: Health and Benefits App, etc)

- Authentication should be quick and easy-to-use
- I should be able to authenticate when using either LOA1/IAL1 (non-verified) or LOA3/IAL2 (verified) accounts
- I should be redirected to the page I started on
- I should be redirected to the `/my-va` page when I started on the homepage
- I should see an error page with actionable steps when I can't authenticate


## User flow(s)

### Success (internal)
TBD

### Success (external)

### Failure

### High-level user flow
```mermaid
flowchart TD
    A[From either ID.me or Login.gov] -->|User| B(Auth page)
    B --> C{Is there an error?}
    C -->|Yes| D[Render an error message]
    C -->|No| E{Is the redirect internal or external?}
    E --> F{Internal redirect}
    E --> G{External redirect}
    F --> |Redirect to homepage OR My VA page|H[VA.gov]
    F --> |Redirect to starting page|H[VA.gov]
    G --> |My VA Health|I[Update provisioning and redirect]
    G --> |All other apps|J[Redirect to external VA-partner website]
```

## Engineering

- Main directory: `vets-website/src/applications/auth`

## Terminology

| **Word**    | **Definition**                                                                                                                     | **Reference** |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| LOA         | Level of Assurance                                                                                                                 | NIST doc      |
| IAL         | Identity Authentication Level                                                                                                      | NIST doc      |

