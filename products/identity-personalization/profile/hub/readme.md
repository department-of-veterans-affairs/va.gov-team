# Feature Outline: Profile Hub

**Last Updated: 07/26/2023**

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

When we launched [profile 2.0]() in 2020, the profile went from a single page to a multi-page section. The URL `va.gov/profile` became obsolete, as we opted to land users right on the first page of the profile (at the time, a combined personal & contact information section), which had a more specific URL.

While people generally don't have problems using or navigating the profile, there have been two notable exceptions to this:

- In the mobile view, people often don't realize the profile menu is collapsed, and they think `Personal information` is the only section of the profile.
- For people that use screen readers, they expect to land on an H1 section header of `Profile` when they come to the section. But since we drop people right into `Personal information`, there is no `Profile` header. This breaks accessibility best practices.

This page should provide users a landing page for the VA.gov Profle surfacing high level details of the types of things they can do within each section of the VA.gov Profile. This should mirroring some practices we see on websites in healthcare, financial services, and consumer/shopping. 

## Problem statement

Without this Profile Hub, when users select "Profile" on other pages/parts of va.gov this sends them directly into the "Personal Information" subsection of the Profile which is a breech of best practices. Users then have to navigate to each page of the profile to know what is available within that section or they have to use search to locate the item they're looking for. Navigation is even more challenging in the case of screen reader users since the other sections of the Profile live above the H1 in the current page structure. Unless a screenreader user knows there is something above the H1 they may not know to look for it. 

By creating a Profile Hub page this will give users added context and will resolve the issues encountered with items living above the H1 header.

Additionally, some common things users are searching for within the profile are things that live in other pages of the profile. 

## User Outcomes

### Desired User Outcomes

*Why would a user want to use this? With this problem solved, what should users be able to do/achieve that they couldn't before?*

- This would help users navigate the various parts of their Profile and could reduce search for things in the profile. This would provide an overall better experience for screenreader users 

### Undesired User Outcomes

- Done wrong, the hub could become noisy, cluttered place that makes it harder for users to easily navigate to tools they're seeking 

## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Done right, the hub could be an important part of a more holistic authenticated experience. 

### Undesired Business Outcomes

- The hub becomes a disorganized.

## Analytics

- TBD we'd need to create the page first

## Projects

|Project|Epic|Launch date|
|---|---|---|
| | | |

## Design

- Link to latest sketch files
- Link to any documentation (needs to be created)

## Frontend
