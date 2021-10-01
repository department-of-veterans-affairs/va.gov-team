# Communications permissions (notification preferences): Product outline

Last Updated October 1, 2021

## POCs

- GitHub Label: va-profile; profile
- Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)
- Keywords
     - Communication permissions
     - Communication preferences
     - Notification preferences
   

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

**Objective: Allow Veteran's to easily customize how they communicate with the VA.**

- **Key result #1**: ~Launch notification preference settings MVP in the VA.gov profile in Q3 2021 (July – September).~
- **Key result #2**: Increase the number of profiles that have mobile phone numbers and email addresses by 15% each on a quarterly basis. [April 2021 baseline report from VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/data/VA%20Profile%20PowerBI%20Report%2011%20Current%20Contact%20Info%20Report.pptx)

|KPI/metric|Baseline as of 4/30/21| Baseline immediately before launch (date TBD) |% of profiles with this info at the end of Q4 2021 (Oct - Dec) | % of profiles with this info at the end of Q1 2022 (Jan - Mar)|
|----------|-------------|---------------|--------------|--------------|
|# of profiles with mobile phone saved in VA Profile backend|7,759,973/15,329,217 profiles (50.6%)|TBD|TBD|TBD|
|# of profiles with email addresses saved in VA Profile backend|6,367,462/15,329,217 profiles (41.5%)|TBD|TBD|TBD|

- **Key result #3**: 60% of first time users of notification preferences have set at least one of the ~four~ three notification preferences available at launch within the first quarter of launch.

|KPI/metric| Baseline immediately before launch (date TBD) |% of profiles with saved preferences at the end of Q4 2021 (Oct - Dec) | % of profiles with saved preferences at the end of Q1 2022 (Jan - Mar)|
|----------|---------------|--------------|--------------|
|% of profiles with notification preferences saved |0% (new feature)|TBD|TBD|

- **Key result #4**: Maintain at least a 95% success rate for successful saves of notification preference information.
- **Key result #5**: Maintain at least a 95% success rate for retrievals of notification preferences.

|KPI/metric|Success rates 1 month after launch| Success rates at the end of Q4 2021 (Oct - Dec) |Success rates at the end of Q1 2022 (Jan - Mar)|
|----------|-------------|---------------|-------------------|
|95% successful retreivals|TBD|TBD|TBD|
|95% successful saves|TBD|TBD|TBD|

# Implementation Info

## MVP approach

Please see the [communications preferences MVP doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md) for detailed documentation on the MVP requirements.

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
- **September 2021**: Development, Testing with partners, UAT planning

## Product Decisions

- [UX specific decision doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/design/notifications-ux-decisions.md)

## Technical Details

### How to Access and Test
### Error Handling
## Screenshots
### Before
This is a new feature, no **before** state.

### After

