# Product outline: VA.gov & Mobile App Login

**Last Updated: April 22, 2024 -- created outline**
     
## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Projects](#projects)
- [Analytics](#analytics)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)


## POCs
- **Slack channel**: [#vsp-identity](https://dsva.slack.com/channels/vsp-identity)

## Overview

Signing into VA.gov and the VA Health and Benefits mobile app relies on a robust backend infrastructure, user-facing experience, and credential service provider (CSP) support.

### The backend infrastructure

Our backend infrastructure for authentication is supported by systems and services including the Master Person Index (MPI), [single sign-on](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/sso), [sign-in service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service), and our credential service providers.

For more on identity and authentication, please view our [getting started guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#getting-started-with-identity).

### Credential Service Providers (CSPs)

Currently, the universal sign-in page support four CSPs:

- ID.me
- Login.gov
- DS Logon
- My HealtheVet

CSPs are responsible for managing the actual credentials and identity verification processes that VA uses to match people to their VA records. This allows us to surface personalized information in peoples' VA.gov and mobile app accounts.

### User-facing experience

The user-facing sign-in experience covers all elements of the frontend experience of signing into VA.gov and the VA Health and Benefits app, including:

- The unified sign-in page 
- End-to-end sign-in flows
- Sign-in widgets found throughout VA.gov

Historically, [the sign-in experience on VA.gov is one of the lowest-rated experiences on VA.gov](https://va-gov.domo.com/page/1030131175?userId=66061986). Over time, our team hopes to mitigate that and drastically improve the experience of signing into VA.gov.

## User Problem Statement

- As a veteran, I want to quickly, easily, and securely sign into VA.gov and the VA Health and Benefits mobile app.
- As a veteran, I want to be able to switch between different VA websites without having to sign in more than once.
- As a veteran, I want to be able to quickly and easily verify my identity to access my personal information with VA.
- As a veteran, I want to be able to quickly fix any issues I have with sign in.

## Business goals

- Improve the customer support rating for the sign-in experience
- Provide a secure, reliable, and robust infrastructure to support authentication
- Provide guidance on the user-facing sign-in experience to teams implementing authenticated flows on VA.gov
- Ensure consistency and standards across the user-facing sign-in experience

## Team responsibilities

### Backend infrastructure

- Development, management, and maintenance of authentication and login infrastructure
- Support teams building identity and authentication-related integrations on the VA.gov platform
- Monitoring of authentication services
- Data reporting around login
- Support resolution of login issues reported to our team, whether those issues can be solved by or team or need to be triaged to MPI or CSPs

### User-facing experience

- Maintain, iterate on, and update the unified sign in page
- Provide a consistent experience with sign-in widgets found throughout VA.gov
- Unify end-to-end sign in flows
- Ensure that sign-in flows are implemented consistently across VA.gov
- Work with the design system to establish and codify standards around the sign-in experience

Please note that we work in close collaboration with Content, Accessibility, and Information Architecture (CAIA) on all content and IA-related needs. 

## Projects

TBD

## Analytics

- [Datadog: VA.gov Identity Stats](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1710600713657&to_ts=1713192713657&live=true)
- [Login Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/analytics/readme.md) -- this doc looks outdate. Do we need it anymore?


## Backend

- [Getting Started with Identity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/gettingstartedidentity.md)
- [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service)
- [Unified Sign in Pages](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/unified-sign-in-pages)
- [Single Sign-On (SSO)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/sso/)
- [Identity & Login Error Handling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/readme.md)
- [VA.gov API Authentication and Authorization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization.md) (primarily technical)
- [VA.gov API Authentication and Authorization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization-simplified.md) (less technical, more context)
- [ID.me/VA.gov Integration Configuration reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/idme-config.md)
- [User Data](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser) (swagger documentation)
- [User Serializer](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/serializers/user_serializer.rb#L97-L116)

### Additional Notes

* For localhost authentication, crypto is disabled by default. If you wish to enable crypto, you must acquire the `saml-rp.vetsgov.localhost` key and certificate which is located in credstash under `vets_api.localhost.idme_key` & `vets_api.localhost.idme_cert` - ask in [#vsp-operations](https://dsva.slack.com/channels/vsp-operations) slack channel for access.
* If you want to know a heck of a lot of details about MVI (Master Veteran Index), the [MVI Integration]() directory is the place to look.
* How to [add someone to MVI]()
* It is highly recommended that everyone on the VA.gov team attempts to identity proof themselves so that they can login to VA.gov in a production system. Identity proofing is available to everyone, independent of Veteran status.  If you are not a Veteran, you will not be matched in MVI but that's the expected behavior! You will simply not be able to see Veteran-specific items (e.g. secure messaging, Rx refills, etc.)
* To navigate VA.gov as an LOA3 identity proofed Veteran:
  * Pick a test account from [this table](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv) (scroll to the right for user/password columns)
  * Visit https://staging.va.gov (HTTP auth username is `veterans` and password is `am3rica`)
  * Click "Sign In"
  * Enter your chosen user/password in the ID.me dialog and click "Sign In"
  * On the "Confirm your identity" page, click "Continue" (you can leave "Text message" selected; this connect to the staging environment and is configured so no one will be messaged)
  * You should see a 6-digit confirmation automatically entered for you; click "Continue"
  * On the "VA.gov SAML Consumer" page, click "Allow"
  * You should now be logged in as an LOA3 identity proofed Veteran with an entry in MVI that allows you to see information for Veteran-specific items (e.g. secure messaging, Rx refills, etc)

## Frontend

- [Front-End Login and Logout Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/login/fe-login-and-logout.md)

## Design and UX

- [Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/design/readme.md)
- [User Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/research)
- [Single Sign-On (SSO)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/sso/)
- [Design system: Signed out vs. signed in templates](https://design.va.gov/templates/signed-out-vs-signed-in)
- [Sign-in-FAQ page](https://www.va.gov/sign-in-faq)
- [Placeholder for mockups]
- [Placeholder for flows]
- [Placeholder for use case documentation]
