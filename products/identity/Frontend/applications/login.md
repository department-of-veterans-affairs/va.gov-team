# Application: Login

## Background

This is the page a user is directed to sign into VA.gov depending on their use case (commonly referred to as the Unified Sign-in Page or USiP)


## Purpose / Goals

The purpose or goal of the Login application is to kick-off the authentication experience for various users and usecases

- Authentication should be quick and easy-to-use
- I should be able to select and use the credential provider to authenticate with
- I should be able to view content to help me troubleshoot my issues
- I should be able to sign in on any external application


## User flow(s)

<details>
<summary><strong>Unified Sign-in Page (USiP)</strong></summary>

### User flow
1. User lands on the `/sign-in` page
2. We check a couple of different query parameters
  1. Does the `application` query parameter exist and what is it set to?
    1. Is the value of the application valid & known?
      1. If YES, grab the configuration for that application (external redirect)
      2. If NO, disregard the application value and use the default authentication (internal redirect)
  1. Does the `oauth` query parameter exist and what is it set to?
    1. Does the application allow OAuth to be its AuthBroker
      1. If YES, ensure the `oauth` query parameter is true
      2. If NO, ensure the `oauth` query parameter is not set to true
  1. Generate the proper API URL using the configuration files
  2. Redirect user to API for start of authentication flow

### Technical diagram
  ```mermaid
flowchart TD
    A[OCC App] & K[Oracle Health] & L[VA Mobile App] & M[Somewhere else] --> B(User navigates to /sign-in page)
    B --> C{What is application query parameter set to?}
    C -->|Known application| D[Grab the configuration file]
    C -->|Unknown application, or doesn't exist| E[Use the default configuration file]
    E --> |Internal redirect only| F{Which AuthBroker do we select - SSOe or SiS?}
    F --> |Generate API URL based on AuthBroker and configuration file| H[Navigate to API]
    H --> I[Navigate to CSP]
    D --> |External redirect only| F
```

</details>

**[Other user flows (protected)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/Frontend/login.md)**


## Engineering

- Main directory: `vets-website/src/applications/login`

## Terminology

| **Word**    | **Definition**                                                                                                                     | **Reference** |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| OAuth         | An open protocol to allow securation authorization in a simple and standard method from web & mobile applications                | ref     |
| Internal redirect   | Generally a redirect that navigates to only va.gov website                                                                 |      |
| External redirect   | Generally a redirect that navigates outside of va.gov domain (eg ebenefits.va.gov)                                         |      |
