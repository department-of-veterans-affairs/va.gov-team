# Initiative 2: Implement Full-width Banner Aging Content Notifications Using New Framework

## Elevator Statement

Using the new Framework developed in Initiative 1, wire up full-width banners to the new framework and implement a 7-day timeframe & notifications.

## Overview
Content in general, and for the purpose of this Initiative, Full-width banners in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after the alert is needed, or the banner is used for something other than its purpose. Full-width banners should be used only for informational alerts or warning alerts.

Currently, there is a Notification system set on a 365 day cadence from the banner's Created date or if subsequently edited, Last Edited date.

To provide timely information to Veterans and other users of VA.gov, and ensure banners are replaced and/or monitored, we need to implement the ability for the notification system to send notification emails based on a 7-day timeframe specific to Full-width Banner. 
  - The firest notification will be sent on Day 4 within the 7-day timeframe telling them they need to edit to add a note that it is still needed, or archive the banner by the seventh day
  - The second notification will be sent the morning of the 7th day telling them they need to either edit to add a note that the banner is still needed, or archive
  - The third notification (_not part of MVP,_ will be implemented after auto-archiving is implemented) will be sent informing them when the banner has een archived.

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
Editors are automatically notified when full-width banners they’ve published are expiring, and they are prompted to extend, or remove and update, with fresh content.

## Undesired Business Outcomes
Editors ignore the notification emails, and their content is not refreshed (and when the future auto-archive initiative is implemented, their content no longer displays).

## Measuring Success
90% of full-width banners are updated or archived due to editors receiving notification emails, ensuring the content doesn’t become stale, or in the case where the banner is for an event or is timeboxed, is replaced/archived at the end of the event end date.

### Key Performance Indicators (KPIs)
* KPIs TBD. This isn't something we can measure using Google Analytics, and may need to be a periodic manual review of content.

#### Baseline KPI Values
Baseline Values consist of a list of current Full-width banners in PROD, and then follow-up for the MVP will be confirming editors received notifications, and manually checking to see if they updated their content.

For this particular feature, there isn’t a way to obtain metrics from GA

### Objectives and Key results (OKRs)

- Objective:
  - Key result: Content editors received notifications for full-width banners so they can ensure only relevant, current information is displayed/delivered via Full-width banners, ensuring Veterans, their caregivers, and other VA.gov users recognize that they should pay attention to Full-width banners and they don't become invisible as stale or irrelavent. Upon receiving the notifications, editors will either archive, or update the banner to 'reset' the 7 day window.

## Assumptions

- Full-width banners are to be used for emergencies or actions a veteran needs to take, generally during the timeframe the banner is published; they should never be used for (month-long) celebrations or general news. 
- They should only display for seven (7) days. If for some reason the time it's being displayed needs to extend past seven (7) days, the editor needs to edit the content with a comment stating this, at which time the 'clock' is reset and it will display for another seven days, and the notifications will be sent accordingly.
- If the editor isn't going to extend it, they will archive it.

## Solution Approach
- An MVP will be built that extends the current notification functionality, implementing notifications for full-width banners. The first Initiative will build the framework, and this initiative is to use that framework to implement a 7-day timeframe specifically for full-width banners, wherein an editor will receive their first notification on Day 4 reminding them to update the banner and reset the 'clock', or to manually archive the banner.
 - We have explicitly decided not to include in the MVP notifications for content blocks or auto-archiving because it would be too large a lift. We’re starting with an MVP so we can implement and release a minimum viable product, get feedback, and then continue with the other iterations.
- The solution will then extend to notifications for Home Page Benefit Promo blocks, as well as Home Page News Promo blocks, and finally to auto-archiving.
 
### How we are approaching the solution

#### High-level Requirements

| Short Description | Requirement | Additional Information |
|-------------------|------------------|-------------------|
| Content Editor receives notification 3 days before expiration on the 7th day | **AS A** content editor who created a Full-width Banner content type, and who has not edited the content thus extending the timeframe, **I WILL** receive an email alert 3 days before the expiration date **SO THAT** I know I need to either (1) edit the content, adding a note that it's still needed, and thus resetting the 7 day window; or (2) archive my content. | Note that we aren't yet implementing auto-archiving, so there won't be any negative repurcussions until that it implemented/released. |
| Content Editor receives email the morning of the 7th day | **AS A** content editor who created a Full-width Banner content type and who has not edited the content thus extending the timeframe, **I WILL** receive an email the morning of the 7th day, **SO THAT** I know I need to either edit and extend the end date if applicable, or archive the content. | After auto-archiving is implemented, this notification email will alert the user that their content will be archived at 2359 that night. TBD email content.|
| Content Editor edits the banner with the intent of extending the published date range | **AS A** content editor who created a Full-width Banner content type, **I WILL** edit the Full-width Banner while still within the 7-day window and add a comment that the content is still needed, **SO THAT** the published date range is reset to 7 days from 'today', e.g. the start date is 'today', and end date is 7 days later, inclusive, **AND** I will receive an email alert three days prior to the 'new' expiration date | Note that the alert emails will then be sent on the correct cadence, e.g. three days before the 'new' end date, morning of the 'new' end date (unless the editor again edits and resets the dates).|

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
2024-02-29: Work will start in Sprint 105, which started on 2/28

### Key Decisions

| Decision | Date | Participants |
|----------|-------------|--------------------|
| Calculation of when a banner is expired will be based on "Save as published + 7" | 2024-02-22 | Dave Conlon |
| The recipients of the notifications will be the last modified editor | 2024-02-22 | Dave Conlon |
| Implementation will be split into iterations, with MVP consisting of Full-width Banner 7-day Notifications, while also providing the ability for future notification implementation of other content types | 12/4/2023 | Dave Conlon |
| The following is excluded from the MVP: ability to set date limits, notifications for Home Page Benefit Promo blocks, as well as Home Page News Promo blocks, auto-archiving of full-width banners, notifications for Home Page Benefit Promo blocks, as well as Home Page News Promo blocks | 12/6/2023 | Dave Conlon |



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
  - [EPIC Aging content MVP: Aging Content New Framework for Notifications](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16417)
    - [Aging Content] Build Dependent Components for Expired FWB MVP [#16417](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16417)
    - [Aging Content - Banner] Drupal: Implement Full Width Banner Aging Content Notification Email MVP [#15506](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15506)
    - 
  
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

