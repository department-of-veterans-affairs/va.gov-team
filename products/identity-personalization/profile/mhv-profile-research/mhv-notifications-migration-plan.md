# MHV notification settings migration plan - DRAFT

Last updated May 13, 2022

## Overview

Per our [MHV profile audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/recommendations.md), we've determined that the only thing from the MHV profile that we need to move over to VA.gov are the notification settings:

![MHV notification settings screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/MHV%20notification%20settings.jpeg)

This effort will involve the following:

- Adding the email notifications to VANotify
- Setting up the preferences in the VA Profile backend
- Migrating existing user preferences into the VA Profile backend
- Surfacing the preferences in the VA.gov interface

## When will this work start?

We'll need to submit an intake form for VA Profile and discuss this work with VANotify to get on everyone's roadmap. As such, this work will not likely start for at least a couple of months.

## Work required by each team

### VA.gov

- Coordinate effort between VA.gov, VA Profile, VANotify, MHV.
- Submit intake to VA Profile outlining the work.
- Updates to the VA.gov profile, including design, content, frontend, and backend (if applicable).
- Coordinate testing efforts and launch.

### VA Profile

- Implement MHV settings into the VA Profile backend.
- Work with MHV to migrate existing users' preferences into VA Profile.
- Connect VA Profile > VANotify.

### VANotify

- Add MHV email templates to the VANotify platform.
- Connect VANotify to backend systems that trigger the notifications.

### MHV

- Serve as SMEs/Stakeholders, providing guidance and approvals as necessary.
- Outline requirements and needs so that functionality is implemented correctly.
- Coordinate with VA Profile on migration of existing user preferences into VA Profile.

## Rough outline of this effort

- VA.gov meets with MHV to discuss profile audit findings and recommendations. We align on moving over MHV notification preferences to the VA.gov profile/VA Profile/VANotifiy.
