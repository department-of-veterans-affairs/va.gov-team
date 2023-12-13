# Initiative: Full Width Banner Content Type Notifications - Aging Content (MVP)

## Overview
Full-width banners in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after a campaign or event has passed. To provide timely information to Veterans and other users of VA.gov, and ensure banners are replaced and/or monitored, we need to implement date limits and notifications based on those limits (banners should only display for seven (7) days

## Problem Statement
How might we ensure a better site-user experience by ensuring alignment to our VA.gov style guide. Encourage appropriate use of banners for time-sensitive items, in limited quantity. Any new Full-width banner content type would be published for an initial default timeframe (probably 7 days), that can then be extended.

## Desired User Outcomes
Veterans, their caregivers and other users of VA.gov will see only current information helpful to them.

## Undesired User Outcomes
Veterans, their caregivers and other users of VA.gov continue to see outdated, irrelevant information which degrades their confidence in VA.gov as a reliable source for information, forms, etc. and causes frustration.

## Desired Business Outcomes
Editors are automatically notified when full-width banners they’ve published are expiring, and they are prompted to extend, or remove and update, with fresh content.

## Undesired Business Outcomes
Editors ignore the notification emails, and their content is not refreshed (and when the future auto-archive initiative is implemented, their content no longer displays).

## Measuring Success
90% of full-width banners are updated due to editors receiving notification emails, ensuring the content doesn’t become stale, or in the case where the banner is for an event or is timeboxed, is replaced at the end of the event end date.

### Key Performance Indicators (KPIs)
* KPIs TBD. This isn't something we can measure using Google Analytics, and may need to be a periodic manual review of content.
* 
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
Baseline Values consist of a list of current Full-width banners in PROD, and then follow-up for the MVP will be confirming editors received notifications, and manually checking to see if they updated their content.

For this particular implementation, there isn’t a way to obtain metrics from GA

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 

---

## Assumptions

- Full-width banners are to be used for emergencies or actions a veteran needs to take, generally during the timeframe the banner is published.
- They should never be used for (month-long) celebrations or general news. 
- They should only display for seven (7) days. If for some reason the time it's being displayed needs to extend past seven (7) days, the editor needs to edit the content, at which time the 'clock' is reset and it will be good for another seven days. They must add a note stating why they are extending it.
- If the editor isn't going to extend it, they need to archive it.

## Solution Approach
- We are building an An MVP will be built that extends the current notification functionality, which will enable the future iterations of auto-archiving full-width banners, as well as implementing notifications for content blocks.
- We decided to start with full-width banners because there is already a notification framework developers may be able to leverage, and even if they can’t and need to build from scratch, it will be the smallest lift necessary in order to deploy something usable and meaningful.
 - We have explicitly decided not to include notifications for content blocks, or auto-archiving, because it would be too large a lift. We’re starting with an MVP so we can implement and release a minimum viable product, get feedback, and then continue with the other iterations.
- The solution will evolve to auto-archiving content, and then extending all functionality to content blocks.
 
### How we are approaching the solution

#### High-level Requirements


| Short Description | Requirement | Additional Information |
|-------------------|------------------|-------------------|
| Content Editor sees a date range when creating new full-width banner content | AS a content editor who is creating a content type of Full-width banner, I WILL see From/To date ranges required which will control the display of the banner, AND I will be able to edit the 'From' date, AND the To date will then default to seven (7) days in the future, AND will not be editable during creation of the the content | The from/to date fields will be required. The "From" date will be editable, but the "To" (end) date will not be editable. |
| Content Editor receives email three (3) days prior to end date | AS a content editor who created a full-width banner content type, I WILL receive an email alert three (3) days prior to the end date on (of the seven day date range), SO THAT I know I need to either need to (1) edit the content, thus resetting the seven day window; or (2) archive my content. | Note that we aren't yet implementing auto-archiving, so there won't be any negative repurcussions until that it implemented/released. |
| Content Editor receives email at 12:01AM (0001) the morning of the end date | AS a content editor who created a full-width banner content type, I WILL receive an email reminding me of the end date at 12:01AM (0001) the day of the end date, SO THAT I know I need to either need to edit and extend the end date if applicable, or archive the content. | After auto-archiving is implemented, this notification email will alert the user that their content will be archived at 2359 that night. TBD email content.|
| Content Editor receives email at 11:59PM (2359) the night of the end date alerting them their content was archived | AS a content editor who created a full-width banner content type, I WILL receive an email alert at 2359 the night of the end date alerting me that my content was auto-archived, SO THAT I know it is no longer displaying, and I can take whatever appropriate action at that time. | Note that although we will be implementing this notification, we don't want it to actually fire or be sent until auto-archiving is implemented (post-MVP). TBD email content. |
| Content Editor edits the banner with the intent of extending the published date range | AS a content editor who created a full-width banner content type, I WILL edit the banner, SO THAT the published date range is reset to seven days, e.g. the start date is 'today', and end date is seven days later, inclusive. | Note that the alert emails will then be sent on the correct cadence, e.g. three days before the 'new' end date, morning of the 'new' end date, just before mignight of the 'new' end date (unless the editor again edits and resets the dates).|




--- 

## Launch Strategy

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

| Decision | Date | Participants |
|----------|-------------|--------------------|
| Implementation will be split into iterations, with MVP consisting of Full-width Banner Date Limits and Notifications for Aging Content, while also providing the ability for future implementation of other content types | 12/4/2023 | Dave Conlon |
| The following is excluded from the MVP: date limits and notifications for content blocks, auto-archiving full-width banners, other content types, or content blocks | 12/6/2023 | Dave Conlon |


---
   
## Screenshots

### Before

N/A - brand new product

### After



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
- VEO: Adam Farina (with support of the Secretary)
- PACT Act partners within VBA and VHA
- Office of the General Council (OGC)
    
 Note: This is something that the Secretary is very interested in.

