# Cookie-based authentication broker

## Background
The cookie-based authentication broker was created to provide a better, faster and more secure authentications for users. Users who use My VA Health portal (Oracle Health, previously Cerner) for their main VA health care provider require an Single Sign-On (SSOe) integration with IAM which currently only supports SAML-based authentication brokering. Their are a few thousand users who use or are eligible to use the My VA Health portal.

In order to create a better user experience for ineligible My VA Health users - which is a vast majority of VA.gov users - a progressive enhancement will be created to enable the OAuth 2.0 authentication broker (sign-in service).

## High-level "how it works"
When a user signs in on VA.gov we do a simple check to determine their My VA Health eligiblity status and save that JWT-encoded value in an accessible cookie `CERNER_ELIGIBLE`

- If the user IS NOT eligible => We set the authentication broker to OAuth 2.0 flow
- If the user IS eligible => We set the authentication broker to SAML-based flow
- If the cookie is MISSING or its value is MALFORMED OR MISSING, => We set the authentication broker to the SAML-based flow

## Rollout plan
TBD - This should be completed by a PjM / PM

## Current status
TBD - This should be filled out once a rollout plan is created and the status of the feature toggle is enabled or disabled

## Technical diagrams

<details>
<summary><strong>Frontend</strong></summary>
  
<img width="1379" height="556" alt="Screenshot 2025-07-18 at 2 30 36 PM" src="https://github.com/user-attachments/assets/f679824c-fd18-44a0-a15a-8b838369e36a" />

</details>

<details>

<summary><strong>Backend</strong></summary><img width="1379" height="556" alt="backend-diagram" src="https://github.com/user-attachments/assets/a25d5644-5a4b-4057-91fc-042bfc5f1914" />


</details>

- Created by Alexander Garcia (@asg5704)
