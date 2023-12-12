# Initiative: Content Type Notifications for Aging Content

## Overview
Full-width banners in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after a campaign or event has passed. To provide timely information to Veterans and other users of VA.gov, and ensure banners are replaced and/or monitored, we need to implement date limits and notifications based on those limits.

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

## Solution Approach
- We are building an An MVP will be built that extends the current notification functionality, which will enable the future iterations of auto-archiving full-width banners, as well as implementing notifications for content blocks.
- We decided to start with full-width banners because there is already a notification framework developers may be able to leverage, and even if they can’t and need to build from scratch, it will be the smallest lift necessary in order to deploy something usable and meaningful.
 - We have explicitly decided not to include notifications for content blocks, or auto-archiving, because it would be too large a lift. We’re starting with an MVP so we can implement and release a minimum viable product, get feedback, and then continue with the other iterations.
- The solution will evolve to auto-archiving content, and then extending all functionality to content blocks.
 
### How we are approaching the solution
#### High-level Requirements



#### Questions
- Q: Default date range: For any content (including Full-width banners), do you want the default date range to auto-populate at 7 days,
 but be editable up to 10, 30, ? number of days to accommodate events or other celebration/recognitions that last an entire month, like National Military Appreciation Month, Military Family Month, Pride month, etc.?
  - A:
- Q: Notifications: Do we still want three notifications, and should they be at the same cadence regardless of the date range?
    - Example:  7 day date range = 1 reminder notification three days before end date; 1 reminder the morning of the end date; and when we
 get auto-archiving implemented in a future phase, a notification when the content is actually archived.
       - This would mean folks will get two notifications in one day, first thing in the morning and then late that night. Should we just send them one email on the morning of the end date telling them it will be archived at midnight that night?
    - Example: 30 day date range = 1 reminder X number of days.

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

