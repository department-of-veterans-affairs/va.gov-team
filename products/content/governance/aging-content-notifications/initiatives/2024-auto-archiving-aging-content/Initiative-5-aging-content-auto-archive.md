
# Initiative 1: Aging Content New Framework for Auto-Archiving Content

## Elevator Statement
Allow for auto-archving of content based on the time frames assigned to a content-type

## Overview
Content in general, and for the purpose of this Initiative, content types of Full-width Banners, Home Page News Spotlight Blocks, and Home Page Benefit Promo Blocks in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after a campaign or event has passed. 

A new notification [framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-specify-timeframes/Initiative-1-mvp-aging-content-new-framework.md) has been created for the content types mentioned above, wherein specific notification timeframes may be assigned to specific content types.

To provide timely information to Veterans and other users of VA.gov, and ensure stale content archived if no action is taken by the editor/author, we need to implement the ability for the content to be auto-archived at the end of the last day of a particular content's assigned timeframe.

## Problem Statement
How might we ensure a better site-user experience by ensuring alignment to our VA.gov style guide. Although editors are encouraged to appropriately use Full-width Banners, the Home Page Benefit Promo Block, and the Home Page News Spotlight Block, they don't always update or archive the content as needed, which results in stale content for Veterans, their caregivers and other users of VA.gov. This erodes confidence in the information and value we provide Veterans and others.

#### Examples of Stale Content
**Stale Banners**
- How Veterans Can Register to Vote
- National Buddy Check Week (for one week in October; still up in late November)
- Recognizing LGBTQ+ Veterans During Pride Month (still up several months after Pride Month)
- It’s Time to “VAX to the MAX!” (outdated)

 **Stale Home Page News Spotlight Block**
 This news block navigates users to an article published in May 2023. An updated news article should have been published by now (Dec 2023).

 <img width="577" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/147188767/3b688d6c-7850-4c8f-9ab7-613239db6a9e">

## Desired User Outcomes
Veterans, their caregivers and other users of VA.gov will see relevant, up-to-date content.

## Undesired User Outcomes
Veterans, their caregivers and other users of VA.gov continue to see outdated, irrelevant information which degrades their confidence in VA.gov as a reliable source for information, forms, etc. and causes frustration.

## Desired Business Outcomes
If Editors don't take action to either extend or archive their content, then when the End Date/Time is reached, the content will be auto-archived. Note that notifications to Editors is part of the [MVP Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/2024-specify-timeframes/Initiative-2-aging-content-type-banner-notifications.md)

## Undesired Business Outcomes
Editors ignore the notification emails, and content they meant to extend is auto-archived and needs to be manually recreated (auto-archiving is permanent).

## Measuring Success
100% of full-width banners, the home page news spotlight block, and the home page benefit promo block which aren't edited to then be extended by an editor are auto-archived, thus ensuring no stale or outdated content is presented to Veterans.

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

## In Scope for the MVP:
Goal: Create a framework, either new or by adjusting the existing 365-day notification framework, to make timeframes and notifications configurable for different content types, such as full-width banners, home page promo blocks, and home page promo news. The framework should enable different timeframes to be assigned (via code, not by the editor) to each content type, if desired. The framework should be extendable to other content types, if desired in the future. Note that the auto-archiving mechanism will be in a future iteration.
 
- As mentioned above, the framework should be easily extendable to handle other content types besides the examples listed below, which will be implemented after the framework is completed.
  - Full-width banner: content type will be assigned a 7-day timeframe, with notifications sent to the editors three (3) days before Day 7, and the morning of Day 7
  - Home Page Promo Block:  content type is assigned a 21-day timeframe with notifications sent to the editors three (3) days before Day 21, and the morning of Day 21. (Note that 21 days is just being used as an example. (Note that this content block will actually be configured to 30 days; the 21 days mentioned above was just to illustrate that different timeframes may be assigned in the future.)
  - Home Page News Block: content type is assigned a 30-day timeframe with notifications sent to the editors three (3) days before Day 30, and the morning of Day 30. 
 
### How we are approaching the solution
- By either altering the existing framework, or creating a new framework.

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

