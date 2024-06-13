[# Initiative 1: (MVP) Aging Content Notifications New Framework

## Elevator Statement
Allow for content-type specific time frames for email reminders with unique messaging.

## Overview
Content in general, and for the purpose of this Initiative, content types of Full-width banners in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after a campaign or event has passed. Full-width banners should be used only for informational alerts or warning alerts.

Currently, there is a Notification system set on a 365 day cadence from set from the banner's  Created date or if subsequently edited, Last Edited date.

To provide timely information to Veterans and other users of VA.gov, and ensure banners are replaced and/or monitored, we need to implement the ability for the notification system to send notification emails based on a cadence specific to particular content types, e.g. Full-Width banners will only display for seven (7) days, and notifications will be sent three days before the 7th day (telling them they need to edit to add a note that it is still needed, or archive the banner by the seventh day), then the morning of the 7th day (telling them they need to either edit to add a note that the banner is still needed, or archive). 

If possible, this should be extendable to accommodate Home Page Benefit Promo Blocks, and Home Page News Spotlight Blocks which will be set at 30 day notification sequences (future stories/initiative to actually implement). Take note that if other banner types are created in the future, then this framework needs to be extendable to accommodate them as well.

If not possible, then another framework to accommodate blocks should be created post-MVP.

## Problem Statement
How might we ensure a better site-user experience by ensuring alignment to our VA.gov style guide. Encourage appropriate use of banners for time-sensitive items, in limited quantity. Any new Full-width banner content type would be published for an initial seven (7) day default timeframe that can then be extended by editing to add a note that the banner is still needed, which will reset the seven day window, and start the alerts again.

#### Examples of Stale Banners
- How Veterans Can Register to Vote
- National Buddy Check Week (for one week in October; still up in late November)
- Recognizing LGBTQ+ Veterans During Pride Month (still up several months after Pride Month)
- It’s Time to “VAX to the MAX!” (outdated)

## Desired User Outcomes
Veterans, their caregivers and other users of VA.gov will see banners with only emergency or vital information helpful to them, and display relevant, timely information.

## Undesired User Outcomes
Veterans, their caregivers and other users of VA.gov continue to see outdated, irrelevant information which degrades their confidence in VA.gov as a reliable source for information, forms, etc. and causes frustration.

## Desired Business Outcomes
When editors receive the notification emails regarding their content, they do one of two things; either edit their content so that the timeframe is 'reset' for another X number of days (the timeframe associated to the specific content they are working on), or they archive the content.

## Undesired Business Outcomes
Editors ignore the notification emails, and content they meant to extend is auto-archived and needs to be manually recreated (auto-archiving is permanent).

## Measuring Success
50% of full-width banners are either extended or manually archived by an editor either when they receive the reminder email on day 4, or the reminder email on day 7, thus ensuring no stale or outdated content is presented to Veterans.

### Key Performance Indicators (KPIs)
* KPIs TBD. This isn't something we can measure using Google Analytics, and will need to be a periodic manual review of content.

  
#### Baseline KPI Values
Baseline Values cwill onsist of a list of current Full-width banners in PROD, and report on auto-archiving.

For this particular implementation, there isn’t a way to obtain metrics from GA.

### Objectives and Key results (OKRs)

- Objective:
  - Key result: Content editors ensure that relevant, current information is displayed/delivered via Full-width Banners so that Veterans, their caregivers, family and/or survivors recognize that they should pay attention to Full-width banners and they don't become invisible as stale or irrelavent.

## Assumptions

- Full-width banners are to be used for emergencies or actions a veteran needs to take, generally during the timeframe the banner is published.
- They should only display for seven (7) days; they should never be used for (month-long) celebrations or general news. If for some reason the time it's being displayed needs to extend past seven (7) days, the editor needs to edit the content and add a note in the Revision log message, then Save, at which time the 'clock' is reset and it will be good for another seven days.
- If the editor isn't going to extend it, they need to archive it. Note that in a future initiative, content will be auto-archived on the 'expiration' date.

## In Scope for the MVP:
Goal: Create a framework, either new or by adjusting the existing 365-day notification framework, to make timeframes and notifications configurable for different content types, with full-width banners being the MVP goal.

The framework should enable different timeframes to be assigned (_via code, not by the editor_) to each content type, and should be extendable to other content types in the future, such as other banner types and content blocks. 

Note that implementing on the individual content-types and the auto-archiving mechanism will be in future iterations.
 
- As mentioned above, the framework should be easily extendable to handle other content types besides the examples listed below. The actual implementation of the various content types mentioned below will be in future stories/initiatives, and implemented after the framework is completed.
  - Full-width banner: content type will be assigned a 7-day timeframe, with notifications sent to the editors on Day 4, and the morning of Day 7. 
  - Home Page Promo Block: content type is assigned a 30-day timeframe with notifications sent to the editors three (3) days before Day 30, and the morning of Day 30. 
  - Home Page Spotlight News Block: content type is assigned a 30-day timeframe with notifications sent to the editors three (3) days before Day 30, and the morning of Day 30.
       - Note that after auto-archiving is implemented, a third notification will be sent when the content is actually auto-archived telling the editor such.
 
### How we are approaching the solution
- By either altering the existing framework, or creating a new framework.

#### High-level Requirements


| Short Description | Requirement | Additional Information |
|-------------------|------------------|-------------------|
| Content Editor receives an email three (3) days prior to expiration date configured for the content type they are creating/editing | **AS A** content editor who created a content type where the timeframe is configured using the new notification framework, **I WILL** receive an email alert three (3) days prior to the expiration date of the date range assigned to the content type, **SO THAT** I know I need to either need to (1) edit the content, thus resetting the timeframe window; or (2) archive my content. | Note that we aren't yet implementing auto-archiving, so there won't be any negative repurcussions until that's implemented/released. |
| Content Editor is receives an email at the morning of the expiration date | **AS A** content editor who created a content type using the new notification framework, **I WILL** receive an email on morning of the expiration date reminding me of the expiration date **SO THAT** I either edit to extend the timeframe, or archive the conten. | After auto-archiving is implemented, this notification email will alert the user that their content will be archived at 2359 that night. TBD email content.|
| Content Editor is able to edit the banner with the intent of extending the published date range | **AS A** content editor who created a content type using the new notification framework, **I WILL** edit the content, **SO THAT** the published date range is reset to <timeframe configured> days, e.g. the start date is 'today', and end date is configured timeframe-days later, inclusive. | Note that the alert emails will then be sent on the correct cadence, e.g. three days before the 'new' expiration date, morning of the 'new' expiration date.
| Developer is able to assign any date range to a particular content type e.g. full width banner, home page promo banner, home page news banner | **AS A** drupal developer, **I NEED** the ability to set or change the date range of a content type of banner to any date range I want e.g. 7 days, or 21 days, or any range that's been decided upon, **SO THAT** the published date range is now the new date range, **AND** notificiation emails are still sent 3 days prior to expiration, and the morning of expiration. | |

Note: Extending the (or building a new) framework to accommodate Content Blocks is in a future initiative. Auto-archiving will be in a future initiative, and along with that functionality, a third notification email will be implemented that will be sent when the content is archived.
--- 

## Launch Strategy

## Launch Dates
- *Target Launch Date*
  - Q1 2024 for this framework (an actual date will be determined soon)
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status
2024-02-39: Framework implementation completed and awaiting release; this will complete this initiative, and work begins on Initiative 2 in Sprint 105
2023-12-19: Groomed and edited this MVP initiative

### Key Decisions

| Decision | Date | Participants |
|----------|-------------|--------------------|
| Implementation will be split into iterations, with MVP consisting of Full-width Banner 7 day timeframe and notifications for Full-width banner content type, while also providing the ability for future implementation of other content types. | 12/4/2023 | Dave Conlon |
| The following is excluded from the MVP: date limits and notifications for content blocks, auto-archiving full-width banners, other content types, or content blocks | 12/6/2023 | Dave Conlon |


---
   
## Screenshots


### Before


### After


### Artifacts

#### Tickets
- [[EPIC] Aging Content Notifications Framework (MVP) #15653](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15653)
  - [[SPIKE] Create a notification (aging content) framework that's flexible, configurable by content type #16623](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16623)
  - [Create Architecture Plan for Aging Content Notification Framework](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16885)
  - [Install ECA Drupal modules](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17115)
  - [Create Views Result Condition Plugin for ECA ](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17116)
 

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

](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-specify-timeframes/Initiative-1-mvp-aging-content-new-framework.md)https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-specify-timeframes/Initiative-1-mvp-aging-content-new-framework.md
