# Initiative 3: Implement Home Page Benefit Promo Blocks Aging Content Notifications Using New Framework

## Elevator Statement
Using the new Framework developed in Initiative 1, wire up Home Page Benefit Promo Blocks to the new framework and implement a 30-day timeframe & notifications.

## Problem Statement
How might we ensure a better site-user experience by ensuring alignment to our VA.gov style guide. Encourage appropriate use of banners for time-sensitive items, in limited quantity. Any new Home Page Benefit Promo Block content types will be published for an initial thirty (30) day default timeframe that can then be extended by an editor editing the content to add a note that the content is still needed, which will reset the thirty day window, and start the alerts again.

## Overview
For the purpose of this Initiative, Home Page Benefit Promo Blocks (and content in general) in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after the promotion or event they were created for is over.

To provide timely information to Veterans and other users of VA.gov, and to ensure Home Page Benefit Promo Blocks are replaced when appropriate and/or monitored, we need to implement the ability for the notification system to send notification emails based on a 30-day timeframe specific to Home Page Benefit Promo Blocks. Notifications will be sent three days before the 30th day (telling them they need to edit and add a note that it is still needed, or archive the banner by the 30th day), then the morning of the 30th day (telling them they need to either edit to add a note that the banner is still needed, or archive). 

#### Examples of Stale Home Page Benefit Promo Blocks
TBD

## Desired User Outcomes
Veterans, their caregivers and other users of VA.gov will see Home Page Benefit Promo blocks with current, timely information.

## Undesired User Outcomes
Veterans, their caregivers and other users of VA.gov continue to see outdated, irrelevant information which degrades their confidence in VA.gov as a reliable source for information, forms, etc. and causes frustration.

## Desired Business Outcomes
Editors are automatically notified when Home Page Benefit Promo Blocks they’ve published are due to expire, and they are prompted to extend, or archive and then publish fresh content.

## Undesired Business Outcomes
Editors ignore the notification emails, and their content is not refreshed (and when the future auto-archive initiative is implemented, their content is auto-archived and no longer displays).

## Measuring Success
90% of Home Page Benefit Promo Blocks are updated due to editors receiving notification emails, ensuring the content doesn’t become stale, or in the case where the block is for an event or is timeboxed, is replaced at the end of the event end date.

### Key Performance Indicators (KPIs)
* KPIs TBD. This isn't something we can measure using Google Analytics, and may need to be a periodic manual review of content.
  

#### Baseline KPI Values
Baseline Values consist of a list of current Home Page Benefit Promo Blocks in PROD, and then follow-up for the MVP will be confirming editors received notifications, and manually checking to see if they updated their content. Note that for this particular feature, there isn’t a way to obtain metrics from GA.

### Objectives and Key results (OKRs)

- Objective:
  - Key result: Content editors received relevant notifications for Home Page Benefit Promo Blocks so they can ensure only relevant, current information is displayed/delivered via Home Page Benefit Promo Blocks so that Veterans, their caregivers, and other VA.gov users recognize that they should pay attention to Home Page Benefit Promo Blocks and they don't become invisible as stale or irrelavent.

## Assumptions

- Home Page Benefit Promo Blocks are to be used timely, relevant information relevant to Veterans benefits.
- The editor is not able to define the timeframe; it will be configured to 30 days using the new framework. If for some reason the time it's being displayed needs to extend past thirty (30) days, the editor needs to edit the content with a comment stating this, at which time the 'clock' is reset and it will display for another thirty days, and the notifications will be sent accordingly.
- If the editor isn't going to extend it, they will archive it.

## Solution Approach
- Based on the framework built in Initiative 1, Home Page Benefit Promo blocks are assigned/configured with 30-day notifications.
 
### How we are approaching the solution

#### High-level Requirements


| Short Description | Requirement | Additional Information |
|-------------------|------------------|-------------------|
| Content Editor receives email three (3) days prior to expiration date | **AS A** content editor who created a Home Page Benefit Promo Block content type, and who has not edited the content thus extending the timeframe, **I WILL** receive an email alert three (3) days prior to the 30th day after content creation **SO THAT** I know I need to either (1) edit the content, adding a note that it's still needed, and thus resetting the 30 day window; or (2) archive my content. | Note that we aren't yet implementing auto-archiving, so there won't be any negative repurcussions until that it implemented/released. |
| Content Editor receives email the morning of the 30th day | **AS A** content editor who created a Home Page Benefit Promo Block content type, and who has not edited the content, thus extending the timeframe, **I WILL** receive an email the morning of the 30th day, **SO THAT** I know I need to either edit and extend the end date if applicable, or archive the content. | After auto-archiving is implemented, this notification email will alert the user that their content will be archived at 2359 that night. TBD email content.|
| Content Editor edits the banner with the intent of extending the published date range | **AS A** content editor who created a Home Page Benefit Promo Block content type, **I WILL** edit the Home Page Benefit Promo Block and add a comment that the content is still needed, **SO THAT** the published date range is reset to 30 days from 'today', e.g. the start date is 'today', and end date is 30 days later, inclusive, **AND** I will receive an email alert three (3) days prior to the 'new' 30th day after editing the content, instead of 365 days after. | Note that the alert emails will then be sent on the correct cadence, e.g. three days before the 'new' end date, morning of the 'new' end date (unless the editor again edits and resets the dates).|

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

TBD example

### Before
N/A

### After
N/A

### Artifacts

#### Tickets
- [Super Epic Aging content notifications for banners & blocks #161230](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/161230)
  
---

#### Communications

##### Team
- Team Name: Sitewide Public Websites
- GitHub Label: sitewide-public-websites
- Slack channel: #Sitewide-Public-Websites
- People:
  - OCTO-DE Leads: Dave Conlon
  - OCTO-DE IA: Mikki Northuis
  - PM: Fran Cross (A6)
  - DM: Jill Adams (A6)
  - Engineering: Daniel Sasser, Chris Kim, Randi Mays, Michael Kinnunen
  - Design: Jordan Wood


##### Stakeholders: 
- Content Editors
- CAIA

