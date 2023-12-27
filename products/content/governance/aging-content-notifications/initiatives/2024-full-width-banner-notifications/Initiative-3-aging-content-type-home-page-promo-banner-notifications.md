# Initiative 3: Implement Home Page Promo Banner Aging Content Notifications Using New Framework

## Elevator Statement

Using the new Framework developed in Initiative 1, wire up home page promo banners to the new framework and implement a 30-day timeframe & notifications.

## Overview
Content in general, and for the purpose of this Initiative, Home Page Promo Banners in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after the promotion it was created for has ended.

Currently, there is a Notification system set on a 365 day cadence from the banner's Created date or if subsequently edited, Last Edited date.

To provide timely information to Veterans and other users of VA.gov, and ensure banners are replaced and/or monitored, we need to implement the ability for the notification system to send notification emails based on a 30-day cadence specific to Home Page Promo Banner. Notifications will be sent three days before the 30th day (telling them they need to edit to add a note that it is still needed, or archive the banner by the thirtieth day), then the morning of the 30th day (telling them they need to either edit to add a note that the banner is still needed, or archive), and then finally when auto-archiving is implemented, a notification will be sent informing them when the banner is actually archived.

## Problem Statement
How might we ensure a better site-user experience by ensuring alignment to our VA.gov style guide. Encourage appropriate use of banners for time-sensitive items, in limited quantity. Any new Home Page Promo banner content type would be published for an initial thirty (30) day default timeframe that can then be extended by editing to add a note that the banner is still needed, which will reset the thirty (30) day window, and start the alerts again.

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
Editors are automatically notified when Home Page Promo banners they’ve published are expiring, and they are prompted to extend, or remove and update, with fresh content.

## Undesired Business Outcomes
Editors ignore the notification emails, and their content is not refreshed (and when the future auto-archive initiative is implemented, their content no longer displays).

## Measuring Success
90% of Home Page Promo banners are updated due to editors receiving notification emails, ensuring the content doesn’t become stale, or in the case where the banner is for an event or is timeboxed, is replaced at the end of the event end date.

### Key Performance Indicators (KPIs)
* KPIs TBD. This isn't something we can measure using Google Analytics, and may need to be a periodic manual review of content.
* 

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
Baseline Values consist of a list of current Home Page Promo banners in PROD, and then follow-up for the MVP will be confirming editors received notifications, and manually checking to see if they updated their content.

For this particular feature, there isn’t a way to obtain metrics from GA

### Objectives and Key results (OKRs)

- Objective:
  - Key result: Content editors received relevant notifications for Home Page Promo banners so they can ensure only relevant, current information is displayed/delivered via Home Page Promo banners so that Veterans, their caregivers, and other VA.gov users recognize that they should pay attention to Home Page Promo banners and they don't become invisible as stale or irrelavent.

## Assumptions

- Home Page Promo banners are to be used for timeboxed promotions, generally during the timeframe the banner is published. They should not continue to display after the promotion has ended.
- They should only display for thirty (30) days. If for some reason the time it's being displayed needs to extend past thirty (30) days, the editor needs to edit the content with a comment stating this, at which time the 'clock' is reset and it will display for another thirty days, and the notifications will be sent accordingly.
- If the editor isn't going to extend it, they will archive it.

## Solution Approach
- An MVP will be built that extends the current notification functionality, which will enable the future iterations of auto-archiving Home Page Promo banners, as well as implementing notifications for and auto-archiving of content blocks.
- We decided to start with Home Page Promo banners because there is already a notification framework developers may be able to leverage where notifications are sent 365 days from creation, or editing. of Home Page Promo banners.
 - We have explicitly decided not to include notifications for content blocks, or auto-archiving, because it would be too large a lift. We’re starting with an MVP so we can implement and release a minimum viable product, get feedback, and then continue with the other iterations.
- The solution will then extend to notifications for Home Page Benefit Promo blocks, as well as Home Page News Promo blocks, and finally to auto-archiving.
 
### How we are approaching the solution

#### High-level Requirements


| Short Description | Requirement | Additional Information |
|-------------------|------------------|-------------------|
| Content Editor receives email three (3) days prior to End date | **AS A** content editor who created a Home Page Promo banner content type, and who has not edited the content, **I WILL** receive an email alert three (3) days prior to the thirtieth day after content creation, instead of 365 days after, **SO THAT** I know I need to either need to (1) edit the content, adding a note that it's still needed, and thus resetting the thirty day window; or (2) archive my content. | Note that we aren't yet implementing auto-archiving, so there won't be any negative repurcussions until that it implemented/released. |
| Content Editor receives email at 12:01AM (0001) the morning of the end date | **AS A** content editor who created a Home Page Promo banner content type, and who has not edited the content, **I WILL** receive an email reminding me of the end date at 12:01AM (0001) the morning of the thirtieth day, **SO THAT** I know I need to either need to edit and extend the end date if applicable, or archive the content. | After auto-archiving is implemented, this notification email will alert the user that their content will be archived at 2359 that night. TBD email content.|
| Content Editor edits the banner with the intent of extending the published date range | **AS A** content editor who created a Home Page Promo banner content type, **I WILL** edit the banner and add a comment that the banner is still needed, **SO THAT** the published date range is reset to thirty days, e.g. the start date is 'today', and end date is thirty days later, inclusive, **AND** I will receive an email alert three (3) days prior to the thirtieth day after editing the content, instead of 365 days after. | Note that the alert emails will then be sent on the correct cadence, e.g. three days before the 'new' end date, morning of the 'new' end date, just before mignight of the 'new' end date (unless the editor again edits and resets the dates).|

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



---
   
## Screenshots

N/A

### Before
N/A

### After
N/A

### Artifacts

#### Tickets
- [Super Epic Aging content notifications for banners & blocks #16127](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16127)
  
  

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

