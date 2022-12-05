# Account Security Product Outline

_Last updated October 26, 2022_
     
## Table of Contents

- [POCs](#)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Projects](#projects)
- [Analytics](#analytics)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)


## POCs
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)
- [This is currently managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

## Overview

Account security is a section of the profile where users can do the following:

- Verify their identity
- Add 2-factor authentication to their account
- View terms and conditions for health tools
- Find a link to their sign in service (eg. ID.me) to change their email address

Once these tasks are done, users can see that they've been completed. Otherwise, there aren't any other tasks that are part of account security at this time.

For more information on signing in see [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/gettingstartedidentity.md).

## User Problem Statement

As a user I need to:

- Verify my identity on VA.gov to get access to more tools.
- Add 2FA to my account to increase security.
- Change my sign-in email address.

## Projects

|Project or enhancement|Launch/Completion date|
|----|----|
|[Combine profile and account](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account#readme)| September 2020|

## Analytics
- [GA dashboard for account security](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/AuydfL6WR7WS_nXqNhC5GA/a50123418w177519031p176188361/)

## Backend
[Backend Technical Documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/account_security/backend_documentation.md)

There is no singular backend that supports this section. Largely, this section is a frontend that links off to various tools depending on whether the user has verified their identity or set up 2FA, or what sign-in service they use.

### Services

- We check DS Logon, MHV, ID.me, and Login.gov to determine whether a user has verified their identity or not, and whether or not to show them the full profile or only show them Account security with a prompt to verify their identity.
- We also check these services to see if 2FA has been set up.

### How to Access and Test

See [profile product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#how-to-access-and-test) and [profile staging users and test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile.md) for information on how to test account security

## Frontend

Depending on what service someone has used to sign in, we dynamically change the link we show under the "Sign-in email address" section. We point them to whatever service they are currently signed in with (eg. so if they sign in with ID.me, the link takes them to ID.me).

## Design and UX
- [Account Security Sketch files](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc)
- [Account Security Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/account-security/use-cases)

### Flow diagrams
- [High level flow diagram with screenshots](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/p/C518EEE8-2115-4CE4-B50A-5DD7E8410A18/canvas)
