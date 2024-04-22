# Sign-in: User-facing experience

**Last Updated: April 15, 2024 -- created outline**
     
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

As of spring 2024, there is no one managing the end-to-end user-facing sign in experience across VA.gov. As such, teams are going rogue and creating their own standards, and CAIA (Content, Accessibility, and Information Architecture) are being left to clean up the mess. With identity at the helm, we can accomplish the following goals:

- Improve the customer support rating for the sign-in experience
- Be a singular owner of the user-facing sign in experience so teams aren't going rogue
- Provide guidance on the user-facing sign-in experience to teams implementing authenticated flows on VA.gov
- Ensure consistency and standards across the user-facing sign-in experience

## Team responsibilities

- Maintain, iterate on, and update the unified sign in page
- Provide a consistent experience with sign-in widgets found throughout VA.gov
- Unify end-to-end sign in flows
- Ensure that sign-in flows are implemented consistently across VA.gov
- Work with the design system to establish and codify standards around the sign-in experience

Please note that we work in close collaboration with Content, Accessibility, and Information Architecture (CAIA) on all content and IA-related needs. 
  
## Credential Service Providers (CSPs)

Currently, the universal sign-in page support four CSPs:

- ID.me
- Login.gov
- DS Logon
- My HealtheVet

## Projects

TBD

## Analytics

- [Datadog: VA.gov Identity Stats](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1710600713657&to_ts=1713192713657&live=true)

## Backend

- [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service)
- [Unified Sign in Pages](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Unified%20Sign%20In%20Pages)
- [Single Sign-On (SSO)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/sso/)

## Frontend

TBD

## Design and UX

- [Single Sign-On (SSO)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/sso/)
- [Design system: Signed out vs. signed in templates](https://design.va.gov/templates/signed-out-vs-signed-in)
- [Placeholder for mockups]
- [Placeholder for flows]
- [Placeholder for use case documentation]
