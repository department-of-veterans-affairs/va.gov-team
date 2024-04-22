# Product outline: Personal information in the VA.gov profile

**Last Updated:** February 15, 2024 (removed Sketch links)

## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User problem statements](#user-problem-statements)
- [Projects](#projects)
- [Analytics](#analytics)
- [Feature Overview](#feature-overview)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design--ux)

## POCs

- **Github labels**: authenticated-experience
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)  
### Authenticated experience

- [This is currently managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/README.md#team).

### VA Profile

|Name|Role|Email|
|----|----|-----|
|Barbie Flowers| IT Product Manager – VA Profile|barbara.flowers3@va.gov|
|Mike Richard| VA Profile PM | Michael.Richard2@va.gov|
|Josh Lindsey | VA Profile lead engineer| Joshua.Lindsey@va.gov|

### LGBTQ health services

|Name|Role|Email|
|----|----|-----|
|Lexi Matza | Deputy Director, LGBTQ Health Services | alexis.matza@va.gov |
|Michael Kauth| Director, LGBTQ Health Services |michael.kauth@va.gov|

### VEO

|Name|Role|Email|
|----|----|-----|
|Melissa Rebstock | VBA/VEO lead | melissa.rebstock@va.gov |
|Laurie Baker | VBA partner | laurie.baker@va.gov |

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

### User Goals
As a user, I want to be able to:

- View the personal information the VA has on file for me.
- Update my personal information as it changes.
- Update my personal information in one place and have it update everywhere at the VA.

## Projects

[For a list of current and past projects, please refer to the Profile section outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#projects).

## Analytics

- [Personal information Google Analytics dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/-x0K5pQPRTaQCa_WzXnEDg/a50123418w177519031p176188361/)
- [GA event examples for Personal info revision](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/analytics/GA-event-examples.md)

## Feature Overview

### What to know about this feature
- Personal information currently lives within the [VA.gov profile](https://staging.va.gov/?next=%2Fprofile%2Fdirect-deposit)
- This feature allows users to complete the following core tasks:
  - View the full name and birth date that the VA has on file for them
  - Add and edit their Preferred name
  - Add and edit their Gender identity
- To access this feature in the profile, users need to login to VA.gov with an identity-verified (LOA3) account.
- Personal information integrates through two different services:
  - We integration with the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/MVI.1886847049.html) for full name and date of birth.
  - We integrate with [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html) for preferred name and gender identity, though that information ultimately lives in and is owned by the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/MVI.1886847049.html).

## Backend
[Backend technical documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/personal_information/backend_documentation.md)

Personal information integrates through two different services:

- We integration with the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/MVI.1886847049.html) for full name and date of birth.
- We integrate with [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html) for preferred name and gender identity, though that information ultimately lives in and is owned by the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/MVI.1886847049.html).

### Preferred Name Validation Rules
The VA Profile API applies the following rules to the preferred name field:

| Message Key | Message Code | Description
| ------------| ------------ | ----------- |
| preferredName.NotNull | PRFN100 | Must not be null
| preferredName.ValidCharacters | PRFN102 | Must only contain alpha, -, acute, grave, diaeresis, circumflex, tilde (case sensitive)
| preferredName.Size | PRFN103 | Size must be between 1 and 25

Examples for each of the allowed accents:

| | | |
| ------------| ------------ | ----------- |
| Hyphen | - | Mary-Jo |
| Acute | á | Renée |
| Grave | à | Agnès |
| Circumflex | â | Siân |
| Tilde | ã | Nuñez |
| Diaeresis | ä | Noël |

### How to Access and Test

[Personal information staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile-personal-information.md)

To access the personal information section of the profile in staging:

1. Log in with any [staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv).
2. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.

## Frontend

Needs to be filled out by Adam.

## Design & UX

- [Design files](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0%3A98&mode=design&t=ZBL2UgsSlzGXuQlA-1)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-information/use-cases)
- [Personal information revision UX decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/design/personal-info-ux-decisions.md)

### Flow diagrams
- [Mobile page design file](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0%3A98&mode=design&t=ZBL2UgsSlzGXuQlA-1) shows the user flow
