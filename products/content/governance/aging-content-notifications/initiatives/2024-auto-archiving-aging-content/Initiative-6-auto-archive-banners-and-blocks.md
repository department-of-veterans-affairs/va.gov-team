
# Initiative 6: Aging Content Auto-Archive Certain Banners & Blocks

## Elevator Statement
Configure Auto-archiving of Full-width Banners aka Full width alerts, the Home Page News Spotlight Block, and the Home Page Benefit Promo Block based on the expiration dates assigned to the particular content-type.

## Overview
Content in general, and for the purpose of this Initiative, content types of Full-width Banners, the Home Page News Spotlight Block, and the Home Page Benefit Promo Block in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after a campaign or event has passed. 

A new notification [framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-specify-timeframes/Initiative-1-mvp-aging-content-new-framework.md) has been created for the content types mentioned above, wherein specific notification timeframes may be assigned to specific content types.

To provide timely information to Veterans and other users of VA.gov, and ensure stale content isn't displayed to Veterans, their caregivers, family or survivors, we want content in a 'published' state that has an expiration date assigned to be auto-archived EOD on the content's expiration date.

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
Veterans, their caregivers and other users of VA.gov will see relevant, up-to-date content by auto-archiving content that has reached its timefram's end date.

## Undesired User Outcomes
Veterans, their caregivers and other users of VA.gov continue to see outdated, irrelevant information which degrades their confidence in VA.gov as a reliable source for information, forms, etc. and causes frustration.

## Desired Business Outcomes
If Editors don't take action to either extend or archive their content, then when the End Date is reached, the content will be auto-archived. Note that notifications to Editors is part of the [MVP Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/2024-specify-timeframes/Initiative-2-aging-content-type-banner-notifications.md)

## Undesired Business Outcomes
Editors who wish to extend their content forget to update it, and the content is auto-archived, resulting in the editor needing to recreate the banner or content block.

## Measuring Success
100% of full-width banners, the home page news spotlight block, and the home page benefit promo block (which aren't edited to then be extended by an editor) are auto-archived, thus ensuring no stale or outdated content is presented to Veterans.

### Key Performance Indicators (KPIs)
* KPIs TBD. This isn't something we can measure using Google Analytics, and may need to be a periodic manual review of content.

#### Baseline KPI Values
Baseline Values consist of a list of current Full-width banners, as well as the Home Page Benefit Promo block and Home Page News Spotlight block.

For this particular implementation, there isn’t a way to obtain metrics from GA.

### Objectives and Key results (OKRs)

- Objective:
  - Key result: Have relevant, current information displayed/delivered to Veterans, their caregivers, and other users of VA.gov via Full-width Banners, the Home Page News Spotlight block and the Home Page Benefit Promo block by not relying on editors to either update or manually archive content, thus ensuring only relevant, current content is displayed.

## Assumptions

- If Content editors need to extend the timeframe that their content displays, they will edit their content in order to 'reset' the timeframe before the content is auto-archived.
- Full-width banners are to be used for emergencies or actions a veteran needs to take, generally during the timeframe the banner is published. They should only display for seven (7) days and be auto-archived on Day 7, if the editor hasn't edited with the intent to 'reset' the 7-day timeframe.
- Home Page Benefit Promo blokcs are to be used for promotional information for Veterans. They should only display for seven (30) days and be auto-archived on Day 30, if the editor hasn't edited with the intent to 'reset' the 7-day timeframe.
- Home Page News Spotlight blokcs are to be used for news and information relevant to Veterans. They should only display for seven (30) days and be auto-archived on Day 30, if the editor hasn't edited with the intent to 'reset' the 7-day timeframe.

## In Scope for this Initiative:
Goal: Using the new framework for auto-archiving, configure the following content based on the notification timeframe assigned to it:
  - Full-width banner: this content type has been assigned a 7-day timeframe, and content will be auto-archived at 12:59:59 PM on Day 7 if the editor doesn't edit the content in order to 'reset' the timeline.
  - Home Page Promo Block:  this content type has been assigned a 30-day, and content will be auto-archived at 12:59:59 PM on Day 30 if the editor doesn't edit the content in order to 'reset' the timeline.
  - Home Page News Block: this content type has been assigned a 30-day, and content will be auto-archived at 12:59:59 PM on Day 30 if the editor doesn't edit the content in order to 'reset' the timeline.
 
### How we are approaching the solution
- By using the new auto-archiving framework.

#### High-level Requirements


| Short Description | Requirement | Additional Information |
|-------------------|------------------|-------------------|
| Content is auto-archived based on the timeframe assigned to it | **AS A** PO/PM, **I WANT** to know that content will be auto-archived on the last day of the timeframe assigned to it, **SO THAT** Veterans, their caregivers and other VA.gov users see only current, relevant information | |

--- 

## Launch Strategy

## Launch Dates
- *Target Launch Date*
  - Q2 2024 (an actual date will be determined soon)
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status
| Date | Status | Author |
|-------------------|------------------|-------------------|
| 12/28/2023 | Created Initiative | Fran Cross |
| |  |

### Key Decisions

| Decision | Date | Participants |
|----------|-------------|--------------------|



---
   
## Screenshots


### Before


### After


### Artifacts

#### Tickets

Associated Initiatives:
- [Initiative 1: (MVP) Aging Content New Framework for Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-specify-timeframes/Initiative-1-mvp-aging-content-new-framework.md)
- [Initiative 2: Implement Full-width Banner Aging Content Notifications Using New Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-full-width-banner-notifications/Initiative-2-aging-content-type-banner-notifications.md)
- [Initiative 3: Implement Home Page Benefit Promo Blocks Aging Content Notifications Using New Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-home-page-promo-blocks/Initiative-3-aging-content-home-page-promo-block-notifications.md)
- [Initiative 4: Implement Home Page News Spotlight Blocks Aging Content Notifications Using New Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/governance/aging-content-notifications/initiatives/2024-home-page-news-promo-block/Initiative-4-aging-content-home-page-news-spotlight-block.md)
- Initiative 5: Aging Content New Framework for Auto-Archiving Content (this document
- 

Epic:
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

