# Initiative 1: (MVP) Aging Content New Framework for Notifications

## Elevator Statement
Allow for content-type specific time frames for email reminders with unique messaging.

## Overview
Content in general, and for the purpose of this Initiative, content types of banners (full-width, home page promo, and hope page news) in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after a campaign or event has passed. Full-width banners should be used only for informational alerts or warning alerts.

Currently, there is a Notification system set on a 365 day cadence from set from the banner's  Created date or if subsequently edited, Last Edited date.

To provide timely information to Veterans and other users of VA.gov, and ensure banners are replaced and/or monitored, we need to implement the ability for the notification system to send notification emails based on a cadence specific to particular content types, e.g. Full-Width banners will only display for seven (7) days, and notifications will be sent three days before the 7th day (telling them they need to edit to add a note that it is still needed, or archive the banner by the seventh day), then the morning of the 7th day (telling them they need to either edit to add a note that the banner is still needed, or archive), and finally, when auto-archiving is implemented, a notification will be sent telling them the banner was archived. This will also be used for Home Page Promo Banners, and Home Page News Banners, which will be set at 30 day notification sequences (future stories/initiative to actually implement). Take note that if other banner types are created in the future, then this framework needs to be extendable to accommodate them as well.

## Problem Statement
How might we ensure a better site-user experience by ensuring alignment to our VA.gov style guide. Encourage appropriate use of banners for time-sensitive items, in limited quantity. Any new Full-width banner content type would be published for an initial seven (7) day default timeframe that can then be extended by editing to add a note that the banner is still needed, which will reset the seven day window, and start the alerts again.

#### Examples of Stale Banners
- How Veterans Can Register to Vote
- National Buddy Check Week (for one week in October; still up in late November)
- Recognizing LGBTQ+ Veterans During Pride Month (still up several months after Pride Month)
- It’s Time to “VAX to the MAX!” (outdated)

## Desired User Outcomes
Veterans, their caregivers and other users of VA.gov will see banners with only emergency or vital information helpful to them.

## Undesired User Outcomes
Veterans, their caregivers and other users of VA.gov continue to see outdated, irrelevant information which degrades their confidence in VA.gov as a reliable source for information, forms, etc. and causes frustration.

## Desired Business Outcomes
If Editors don't take action to either extend or archive their full-width banner content, then when the End Date/Time is reached, the content will be auto-archived. Note that notifications to Editors is part of the [MVP Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/2024-specify-timeframes/Initiative-2-aging-content-type-banner-notifications.md)

## Undesired Business Outcomes
Editors ignore the notification emails, and content they meant to extend is auto-archived and needs to be manually recreated (auto-archiving is permanent).

## Measuring Success
100% of full-width banners which aren't extended by an editor are auto-archived, thus ensuring no stale or outdated content is presented to Veterans.

### Key Performance Indicators (KPIs)
* KPIs TBD. This isn't something we can measure using Google Analytics, and may need to be a periodic manual review of content.
* 

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
Baseline Values consist of a list of current Full-width banners in PROD, and report on auto-archiving.

For this particular implementation, there isn’t a way to obtain metrics from GA.

### Objectives and Key results (OKRs)

- Objective:
  - Key result: Content editors ensure that relevant, current information is displayed/delivered via Full-width banners so that Veterans, their caregivers, and other VA.gov users recognize that they should pay attention to Full-width banners and they don't become invisible as stale or irrelavent.

## Assumptions

- Full-width banners are to be used for emergencies or actions a veteran needs to take, generally during the timeframe the banner is published.
- They should only display for seven (7) days; they should never be used for (month-long) celebrations or general news. If for some reason the time it's being displayed needs to extend past seven (7) days, the editor needs to edit the content and add a note in the Revision log message, then Save, at which time the 'clock' is reset and it will be good for another seven days.
- If the editor isn't going to extend it, they need to archive it, or the content will be auto-archived in a future story/implementation.

## Solution Approach
- MVP will be a framework that will enable, through code, different notification timeframes to be assigned to different content types. Future iterations will encompass enabling different notification timeframes for content blocks (home page promo and home page news), as well a auto-archiving full-width banners and content blocks. [Discovery here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-specify-timeframes/discovery-for-content-types-and-blocks-aging-content.md) 
- We decided to start with full-width banners because there is already a notification framework developers may be able to leverage, and even if they can’t and need to build from scratch, it will be the smallest lift necessary in order to deploy something usable and meaningful.
 - We have explicitly decided not to include in the MVP notifications for content blocks, or auto-archiving, because it would be too large a lift. We’re starting with an MVP so we can implement and release a minimum viable product, get feedback, and then continue with the other iterations.
 
### How we are approaching the solution

#### High-level Requirements


| Short Description | Requirement | Additional Information |
|-------------------|------------------|-------------------|
| Content editor sees informational text about the new 7 day timeframe for Full-width banners | **AS A** Content Editor, **I WANT** to know what the timeframe expectation for the content type I'm creating/editing, **SO THAT** I’m aware I will receive notifications within that timeframe alerting me that I should update and extend the time, or archive the banner. | |
| Content Editor receives email three (3) days prior to end date configured for the content type they are creating/editing | **AS A** content editor who created a content type where the timeframe is configured using the new notification framework, **I WILL** receive an email alert three (3) days prior to the End date of the date range assigned to the content type, **SO THAT** I know I need to either need to (1) edit the content, thus resetting the timeframe window; or (2) archive my content. | Note that we aren't yet implementing auto-archiving, so there won't be any negative repurcussions until that it implemented/released. |
| Content Editor receives email at 12:01AM (0001) the morning of the end date | **AS A** content editor who created a content type using the new notification framework, **I WILL** receive an email reminding me of the end date at 12:01AM (0001) the day of the end date, **SO THAT** I know I need to either need to edit and extend the end date if applicable, or archive the content. | After auto-archiving is implemented, this notification email will alert the user that their content will be archived at 2359 that night. TBD email content.|
| Content Editor edits the banner with the intent of extending the published date range | **AS A** content editor who created a content type using the new notification framework, **I WILL** edit the content, **SO THAT** the published date range is reset to <timeframe configured> days, e.g. the start date is 'today', and end date is configured timeframe-days later, inclusive. | Note that the alert emails will then be sent on the correct cadence, e.g. three days before the 'new' end date, morning of the 'new' end date, just before mignight of the 'new' end date (unless the editor again edits and resets the dates).|
| Developer edits the date range of a particular content type e.g. full width banner, home page promo banner, home page news banner | **AS A** drupal developer, **I NEED** the ability to change the date range of a content type of banner to any date range I want e.g. 7 days, or 21 days, or any range that's been decided upon, **SO THAT** the published date range is now the new date range, **AND** notificiation emails are still sent on the 3 day, morning of last day, (and when archived) cadence. | |


Note: Auto-archiving will be in a future initiative, and along with that functionality, a third notification email will be implemented that will be sent when the content is archived.



--- 

## Launch Strategy

## Launch Dates
- *Target Launch Date*
  - Q1 2024 (an actual date will be determined soon)
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status
2023-12-19: Groomed and edited this MVP initiative

### Key Decisions

| Decision | Date | Participants |
|----------|-------------|--------------------|
| Implementation will be split into iterations, with MVP consisting of Full-width Banner 7 day timeframe and notifications for Full-width banner content type, while also providing the ability for future implementation of other content types, and auto-archiving | 12/4/2023 | Dave Conlon |
| The following is excluded from the MVP: date limits and notifications for content blocks, auto-archiving full-width banners, other content types, or content blocks | 12/6/2023 | Dave Conlon |


---
   
## Screenshots


### Before


### After


### Artifacts

#### Tickets
- [Super Epic Aging content notifications for banners & blocks #16127](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16127)
    - [Aging Content - Banner: Implement (7) day timeframe for Full-width banners (MVP) #16417](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16417)
  
  

---

#### Communications

##### Team
- Team Name: Sitewide Public Websites
- GitHub Label: sitewide-public-websites
- Slack channel: #Sitewide-Public-Websites
- People:
  - OCTO-DE Leads: Dave Conlon & Danielle Theirry
  - OCTO-DE IA: Mikki Northuis
  - PM: Fran Cross (A6)
  - DM: Jill Adams (A6)
  - Engineering: Daniel Sasser, Chris Kim, Randi Mays, Michael Kinnunen
  - Design: Jordan Wood
  - Research: Cindy Merrill


##### Stakeholders: 
- Content Editors
- CAIA

