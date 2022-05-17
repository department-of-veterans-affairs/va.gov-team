# MHV notification settings migration plan - DRAFT

Last updated May 13, 2022

## Overview

Per our [MHV profile audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/recommendations.md), we've determined that the only thing from the MHV profile that we need to move over to VA.gov is the notification settings:

![MHV notification settings screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/MHV%20notification%20settings.jpeg)

This effort will involve the following:

- Adding each email notification to VANotify.
- Setting up preferences in the VA Profile backend.
- Migrating existing user preferences into the VA Profile backend.
- Surfacing preferences in the VA.gov interface.

## When will this work start?

We'll need to submit an intake form for VA Profile and discuss this work with VANotify to get on everyone's roadmap. As such, this work will likely not start for at least a couple of months.

## Work required by MHV

MHV will need to do the following:

- Serve as SMEs/Stakeholders, providing guidance and approvals as necessary.
- Outline requirements and needs so that functionality is implemented correctly (**Note**: VA.gov will help facilitate this process).
- Coordinate with VA Profile on migration of existing user preferences into VA Profile.
- Determine strategy for how to handle notification settings in MHV after they are added to VA.gov (eg. pointing people to VA.gov to update this functionality).

## Rough outline of this effort

### Planning and coordination

- VA.gov will meet with MHV to discuss profile audit findings and recommendations. 
- VA.gov will meet with MHV to make sure we thoroughly understand existing MHV functionality, needs, and requirements for moving over notification preferences.
- VA.gov will regroup with VANotify to coordinate on this effort. VANotify will determine how this work will fit into their roadmap.
- VA.gov will fill out an intake form for VA Profile. VA Profile will determine how this work will fit into their roadmap.

### Implementation

VA.gov / VANotify/ VA Profile currently meet biweekly to coordinate on work. We'll continue to do so as we move over notification settings from MHV to VA.gov. As part of that, each team will do the following:

#### VA.gov will:

- Coordinate efforts between VA.gov, VA Profile, VANotify, and MHV.
- Update the VA.gov profile as needed, including design, content, frontend, and backend (if applicable).
- Conduct usability testing.

#### VA Profile will:

- Implement MHV settings into the VA Profile backend.
- Work with MHV to migrate existing users' preferences into VA Profile.
- Connect the VA Profile backend to VANotify.

#### VANotify will:

- Work with MHV to add email templates to the VANotify platform.
- Connect VANotify to backend systems that trigger the notifications.

### Testing and launch

Once the functionality is built as needed in VA.gov, VA Profile, and VANotify, we will need to:

- Conduct end-to-end QA and testing.
- Determine a launch strategy.
- Conduct user acceptance testing.
- Launch in a phased approach.
