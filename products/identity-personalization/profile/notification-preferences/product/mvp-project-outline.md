# Notification preferences: MVP Project outline

Last Updated April 13, 2022

## POCs

- GitHub Label: va-profile; profile
- Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)
- Keywords
     - Communication permissions
     - Communication preferences
     - Notification preferences
     - Notification settings (actual name of feature on FE)
   

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ) |Product Manager| ana@adhocteam.us |
|Liz Lantz | Designer | liz.lantz@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Taylor Mitchell | FE Engineer| taylor.mitchell@gcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Mike Richard | VA Profile PM | Michael.Richard2@va.gov |
|Terry Bazemore | VA Profile Engineer |Terry.Bazemore@va.gov |

### Table of Contents
- [Overview](#overview)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Value Propositions](#value-propositions)
- [Measuring Success](#measuring-success)
- [Implementation Info](#implementation-info)
- [MVP Approach](#mvp-approach)
- [Status](#status)
- [Product Decisions](#product-decisions)
- [How to access and test](#how-to-access-and-test)
- [Backend](#backend)
- [Screenshots](#screenshots)


## Overview

The VA is ramping up their digital communications efforts, specifically through email and text. As a result, veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA Profile team is building a communications permissions engine that will integrate with the VA.gov profile frontend and allow veteran-managed settings to be saved and shared across systems at the VA.  

### User Goals

- As a veteran, I want to be able to see what types of communications I am eligible to receive.
- As a veteran, I want to be able to select where and how I receive those communication (eg. receive emails for claim updates; receive texts for appointment reminders).
- As a veteran, I only want to have to keep this information updated in one place.

### Business Goals

- Allow veterans to set and manage communication preferences from their VA.gov profile.
- Allow any updates veterans make to their permissions to be saved/accessed across the VA (through VA Profile backend).
- Set up an infrastructure for this functionality that is sustainable and allows us to scale easily over time.

## Assumptions

- Veterans expect to set notification preferences from the VA.gov profile.
- It will be fast and easy for us to add in new preferences after the initial infrastructure is in place.

## Questions

- Where do veterans expect to set and manage notification preferences?
- Given that all data will be pulled in dynamically from VA Profile (notification types, groupings, and "channels", ie email or text), how do we maintain content and usability integrity?

## Value Propositions

- Veterans will be able to update how they want to receive different types of communications from the VA.
- Since this is integrated through VA Profile, those preferences will be consumable across the VA. So, that means that veterans should only have to update these preferences in one place — either the VA.gov profile, through a call center, etc — and that info should get updated everywhere.

## Measuring success

These are OKRs and KPIs for the initial MVP launch of the communications permissions (notification preferences) feature:

- [Notification Settings GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/LcYXUwF2Q8SQ59WQX6OTsw/a50123418w177519031p184624291/)
- [Top events: Notification Settings page](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20211103&_u.date01=20211103&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22notifications%22,0%5D%5D&explorer-table.rowCount=50/)

**Objective: Allow Veteran's to easily customize how they communicate with the VA.**

- **Key result #1**: Increase the number of profiles that have mobile phone numbers and email addresses by 15% each on a quarterly basis. [April 2021 baseline report from VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/data/VA%20Profile%20PowerBI%20Report%2011%20Current%20Contact%20Info%20Report.pptx)

|KPI/metric|Baseline (4..30.21; 15,329,217 veterans)| Baseline immediately before launch (11.3.21; 15,739,528 veterans) |% of profiles with this info at 3 months (Nov - Jan) | % of profiles with this info at the end of Q1 2022 (Jan - Mar)|
|----------|-------------|---------------|--------------|--------------|
|# of profiles with mobile phone saved in VA Profile backend*|7,759,973 (50.6%)|8,121,902 (52%)|8,420,023 (50%)|TBD|
|# of profiles with email addresses saved in VA Profile backend*|6,367,462 (41.5%)|6,745,859 (43%)|6,963,396 (41%)|TBD|

_*As of November 2021, we get these stats from the VA Profile team as it's not data that's available to us in our systems/on our GA dashboards. Reach out to Michael Richard in the #va-profile DSVA slack channel for assistance._

- **Key result #2**: 60% of first time users of notification preferences have set at least one of the ~four~ three notification preferences available at launch within the first quarter of launch.

|KPI/metric| Baseline immediately before launch (date TBD) |% of profiles with saved preferences at the end of Q4 2021 (Oct - Dec) | % of profiles with saved preferences at the end of Q1 2022 (Jan - Mar)|
|----------|---------------|--------------|--------------|
|% of profiles with notification preferences saved |0% (new feature)|54%|TBD|

- **Key result #3**: Maintain at least a 95% success rate for successful saves of notification preference information.
- **Key result #4**: Maintain at least a 95% success rate for retrievals of notification preferences.

|KPI/metric|Success rates 1 month after launch| Success rates at the end of Q4 2021 (Oct - Dec) |Success rates at the end of Q1 2022 (Jan - Mar)|
|----------|-------------|---------------|-------------------|
|95% successful retreivals|99%|99%|TBD|
|95% successful saves|99%|99%|TBD|

# Implementation Info

## MVP approach

Please see the [communications preferences MVP doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/product/communications-permissions-mvp-definition.md) for detailed documentation on the MVP requirements.

## Status

- **November 2020**: Initial meeting with VA Profile.
- **December 2020**: Clarifying technical details and timelines with VA Profile.
- **January 2021**: Backend integration begins; full definition of MVP outlined.
- **February 2021**: Backend integration continues as we wait for API access from Terry; Team meets with Terry to discuss governance and group filtering.
- **March 2021**: Design begins
- **April 2021**: Initial design wrapped; worked with VANotify and VEText to understand MVP notification preference needs
- **June 2021**: Desktop usability study complete ([research artifacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research))
- **July 2021**: Development, design iterations
- **August 2021**: Development, design iterations, testing with partners
- **September 2021**: Development, Testing with partners, 
- **October 2021**: UAT planning and execution
- **November 2021**: Began phased launch (25%, 50%, 100%) Nov 3

## Product Decisions

- [UX specific decision doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/design/notifications-ux-decisions.md)

## How to Access and Test
- [Staging](https://staging.va.gov/profile/notifications)
- Testing documentation
     - [Notification settings test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences.md)
     - [Notification settings a11y test case documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences-a11y.md)

- [Production](https://va.gov/profile/notifications)

## Backend

Notification settings (communication permissions) come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).

### Error Handling
- [Error states](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/frontend#states)

## Screenshots

### Before
This is a new feature, no **before** state.

### After
<img width="628" alt="Screen Shot 2021-10-20 at 4 42 52 PM" src="https://user-images.githubusercontent.com/45603961/140571171-100fa36f-119e-4e53-83ee-116540ec3b08.png">

