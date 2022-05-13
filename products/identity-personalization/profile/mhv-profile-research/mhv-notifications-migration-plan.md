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

## Work required by MHV

MHV will need to do the following. The work of VA.gov, VANotify, and VA Profile is outlined further below.

- Serve as SMEs/Stakeholders, providing guidance and approvals as necessary.
- Outline requirements and needs so that functionality is implemented correctly (**Note**: VA.gov will help facilitate this process).
- Coordinate with VA Profile on migration of existing user preferences into VA Profile.
- Determine strategy for how to handle notification settings in MHV after they are added to VA.gov (eg. pointing people to VA.gov to update this functionality).

## Rough outline of this effort

### Planning and coordination

- VA.gov meets with MHV to discuss profile audit findings and recommendations. We align on moving over MHV notification preferences to the VA.gov profile/VA Profile/VANotifiy.
- VA.gov meets with MHV to make sure we thoroughly understand existing MHV functionality, needs, and requirements.
- VA.gov regroups with VANotify to coordinate on this effort. VANotify determines where this might fit into their roadmap.
- VA.gov fills out an intake form for VA Profile. VA Profile determines where this might fit into their roadmap.

### Implementation

VA.gov / VANotify/ VA Profile all meet biweekly too coordinate on work. Each team does the following:

#### VA.gov

- Coordinates effort between VA.gov, VA Profile, VANotify, MHV.
- Updates to the VA.gov profile, including design, content, frontend, and backend (if applicable).
- Conducts usability testing.

#### VA Profile

- Implements MHV settings into the VA Profile backend.
- Works with MHV to migrate existing users' preferences into VA Profile.
- Connects VA Profile > VANotify.

#### VANotify

- Adds MHV email templates to the VANotify platform.
- Connects VANotify to backend systems that trigger the notifications.

### Testing and launch

Once the functionality is built as needed in VA.gov, VA Profile, and VANotify, we will need to:

- Conduct end-to-end QA and testing.
- Determine a launch strategy.
- Conduct user acceptance testing.
- Launch in a phased approach.
