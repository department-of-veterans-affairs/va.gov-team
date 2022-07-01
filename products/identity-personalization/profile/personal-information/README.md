# Product outline: Personal information in the VA.gov profile

Last Updated: July 1, 2022

### Communications

- **Github labels**: vsa-authenticated-exp
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)

### Roles  
  
[This is currently managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

---

### Table of Contents

- [Overview](#overview)
- [User problem statements](#user-problem-statements)
- [Measuring success](#measuring-success)
- [Projects](#projects)
- [How to access and test](#how-to-access-and-test)
- [Backend](#backend)
- [Design](#design--ux)

---

## Overview

We pull in a small amount of personal information to the VA.gov profile. Some of this information is read-only and uneditable, as it is offical government record and used for identity purposes. Other information is read/write and allows the people to view and update.

Currently, we show:

- Full name (not editable)
- Date of birth (not editable)
- Preferred name (editable)
- Gender identity (editable)

## User problem statements 

- As a Veteran, I want to see what name and birth date the VA has on file for me.
- As a Veteran, I want to be able to let VA staff know how to address me.
- As a Veteran, I want to be able to let the VA know my gender identity.

## Measuring success

- [Personal information Google Analytics dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/-x0K5pQPRTaQCa_WzXnEDg/a50123418w177519031p176188361/)

## Projects

- [Personal information revisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md)

## How to Access and Test

[Personal information staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile-personal-information.md)

To access the personal information section of the profile in staging:

1. Log in with any [staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv).
2. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.

## Backend

Personal information integrates through two different services:

- Full name and date of birth come from the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/MVI.1886847049.html).
- Preferred name and gender identity come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).

## Design & UX

- [Personal information sketch files](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565)
- Use case documentation needed.
