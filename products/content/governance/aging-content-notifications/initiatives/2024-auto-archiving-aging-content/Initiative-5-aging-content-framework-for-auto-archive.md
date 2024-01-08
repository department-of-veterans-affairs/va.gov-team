
# Initiative 5: Aging Content New Framework for Auto-Archiving Content

## Elevator Statement
Create a framework to allow for auto-archving of content based on the notification time frames assigned to a content-type

## Overview
Content in general, and for the purpose of this Initiative, content types of Full-width Banners, the Home Page News Spotlight Block, and the Home Page Benefit Promo Block in VA.gov become stale and aren’t monitored or updated on a regular cadence, allowing many of them to still display after a campaign or event has passed. 

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
Baseline Values consist of a list of current Full-width banners, as well as the Home Page Benefit Promo block and Home Page News Spotlight block.

For this particular implementation, there isn’t a way to obtain metrics from GA.

### Objectives and Key results (OKRs)

- Objective:
  - Key result: Content editors ensure that relevant, current information is displayed/delivered via Full-width Banners, the Home Page News Spotlight block and the Home Page Benefit Promo block so that Veterans, their caregivers, and other VA.gov users recognize that they should pay attention to the content, and they don't become invisible as stale or irrelavent.

## Assumptions

- Full-width banners are to be used for emergencies or actions a veteran needs to take, generally during the timeframe the banner is published. They should only display for seven (7) days and be auto-archived on Day 7, if the editor hasn't edited with the intent to 'reset' the 7-day timeframe.
- Home Page Benefit Promo blokcs are to be used for promotional information for Veterans. They should only display for seven (30) days and be auto-archived on Day 30, if the editor hasn't edited with the intent to 'reset' the 7-day timeframe.
- - Home Page News Spotlight blokcs are to be used for news and information relevant to Veterans. They should only display for seven (30) days and be auto-archived on Day 30, if the editor hasn't edited with the intent to 'reset' the 7-day timeframe.

## In Scope for this Initiative:
Goal: Create a framework for auto-archiving, either a new on, or by adding on to the new notification framework. The framework should be extendable to other content types, if desired in the future. It should accommodate any timeframe configured and then assigned for a particular content type, such as shown in examples below.
 
- As mentioned above, the framework should be easily extendable to handle other content types, as well as other timeframes (14, 21, any number, etc.) besides the examples listed below.
  - Full-width banner: content type has a a 7-day timeframe, and if the content editor hasn't manually archived the content, then at 11:59:59PM (23:59:59) on Day 7 the content will be auto-archived.
    - Note that the if the editor, within the 7 days, edits the content in order to 'reset' the timeline, basically restarting the 7 days,then the auto-archive will look at the 'new' end date/Day 7.
  - Home Page Promo Block:  content type has a a 30-day timeframe, and if the content editor hasn't manually archived the content, then at 11:59:59PM (23:59:59) on Day 30 the content will be auto-archived.
    - Note that the if the editor, within the 30 days, edits the content in order to 'reset' the timeline, basically restarting the 30 days,then the auto-archive will look at the 'new' end date/Day 30.
  - Home Page News Block: content type has a a 30-day timeframe, and if the content editor hasn't manually archived the content, then at 11:59:59PM (23:59:59) on Day 30 the content will be auto-archived.
    - Note that the if the editor, within the 30 days, edits the content in order to 'reset' the timeline, basically restarting the 30 days,then the auto-archive will look at the 'new' end date/Day 30.
- Note that actually configuring the various content types will be handled in future initiatives. This is purely to build the framework.
 
### How we are approaching the solution
- By either altering the existing framework, or creating a new framework.

#### High-level Requirements


| Short Description | Requirement | Additional Information |
|-------------------|------------------|-------------------|
| Content is auto-archived based on the timeframe assigned to it | **AS A** PO/PM, **I WANT** to know that content will be auto-archived on the last day of the timeframe assigned to it, **SO THAT** Veterans, their families, caregivers, and survivors see only current, relevant information | |

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

