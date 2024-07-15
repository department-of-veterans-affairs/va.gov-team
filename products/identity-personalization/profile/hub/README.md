# Feature Outline: Profile Hub

**Last Updated: Feb 12, 2024** adding new GA4 report link

### Communications

- **Github labels**: authenticated-experience
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Analytics](#analytics)
- [Design](#design)
- [Frontend](#frontend)

## Overview

The profile hub serves as a landing page for the VA.gov Profile. It allows users to easily scan all sections of the profile without obfuscating this information behind a menu. 

## Problem statement

- As a mobile user, I can easily miss the mobile menu in the profile, which leads me to think that `Personal information` is the only section of the profile.
- As a person using a screen reader, I expect to see a `Profile` H1 when I go to the profile.

## User Outcomes

### Desired User Outcomes

*Why would a user want to use this? With this problem solved, what should users be able to do/achieve that they couldn't before?*

- On mobile, users can more easily scan for what is available in the profile.
- For people using screen readers, it will be much clearer that links to `Profile` landed them in the right place.

### Undesired User Outcomes

- Done wrong, the hub could become noisy, cluttered place that makes it harder for users to easily navigate to tools.

## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- This allows us to fix longstanding issues for mobile and screen reader users.
- This allows us to surface links associated with the profile without having to build whole new sections within the profile.
- This allows us to experiment with the hub model and whether it might be part of a more holistic authenticated experience. 

### Undesired Business Outcomes

- The hub becomes a dumping ground.

## Analytics

- Launch metrics can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/hub/mvp#measuring-success)
- Click data can be found at the bottom left of [this dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/_u.date00=20231119&_u.date01=20231128) < only working if we haven't migrated to GA4
- [GA4 click data report ](https://analytics.google.com/analytics/web/?authuser=0#/analysis/a50123418w177519031p176188361/edit/_K1zzMjpQ2qxlfcC--aNiw)

## Projects

|Project|Epic|Launch date|
|---|---|---|
|[Profile hub MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/mvp/README.md) |[#40593](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40593)|12/18/2023|

## Design

- [Desktop](https://figma.com/file/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?type=design&node-id=0-281&mode=design&t=UFySmtP5yDOLLP6a-0)
- [Mobile/user flow](https://www.figma.com/file/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?type=design&node-id=0-1&mode=design&t=UFySmtP5yDOLLP6a-0)
- Link to any documentation (needs to be created)

## Frontend
