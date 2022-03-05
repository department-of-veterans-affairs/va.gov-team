## What else is in this folder

- This is the folder for Tier 3 office content product. This folder will include decks, meeting notes, decisions, wireframes, etc. for tier 3 MVP 1.0 office content templates. 
- For research and other info conducted in 2019 with OPIA, go to the [Office Administration folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/office-administration) 
- [Tier 3 Strategy deck](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/tier-3-fom/VA-Tier-3-Strategy-OCTO-071421.pdf) presented to the Digital Modernization Council
- [Salesforce field mapping](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/tier-3-fom/salesforce-data-samples/field-mapping.md )
- Product Outline

# Product Outline

## Overview
The Online Offices Directory will provide a searchable structure on which to build Tier 3 content in addition to making the organizational structure of the VA accessible to all visitors.

## Problem Statement
Main drivers for creating an online Offices Directory:
1) The bulk of content sought by non-Veteran visitors from other government bodies (i.e., Tier 3 content) needs to be modernized in order to make it more useful and findable, thus indirectly serving Veterans.
2) Some content that was known to most directly affect Veterans (i.e., Tiers 1 & 2) remains on the less-accessible legacy TeamSite platform due to the modernized CMS's perceived lack of support for some Tier 3 content types.
3) Visitors trying to understand how the VA is structured can only find that information in a PDF called the Functional Organizational Manual (FOM) – see bottom of [this page](https://www.va.gov/VA-Functional-Organization-Manual-2020-4.pdf).

How might we create a more usable office-finding experience, and at the same time create a foundation for the migration of important content listed above?
 
## Desired User Outcomes

- Visitors of all kinds can find VA organizations and Offices easily.
- All Tier 1 & 2 content is unified and organized under a unified, consistent user experience.

## Undesired User Outcomes


## Desired Business Outcomes

- Office stakeholders perceive a foothold on the modernized CMS platform from which to modernize content they consider important.

## Undesired Business Outcomes


---
## Measuring Success


### Key Performance Indicators (KPIs)

- Reduced downloads of FOM PDF (functional org manual)
- Increase in % of users clicking-through to an Office landing page compared to existing traffic on [About VA > VA Organization page](https://www.va.gov/about_va/organizations.asp)
- Increased user flow from clicking "About VA" menu option through to an Office detail page (i.e., a link out to an Office's existing/legacy landing page if it exists)


#### Baseline KPI Values

TBD

### Objectives and Key results (OKRs)

- Objective: Modernize remaining VA.gov content to promote clarity, accessibility, and governance in a manner that optimally serves Veterans.
  - Key result: TBD
  - Key result: TBD

---

## Assumptions

TBD

## Solution Approach

- We will first build a proof-of-concept Office Directory based on an integration with the FOM database. Change management and disruption to user experiencd should be minimal. Also we can start understanding our users, whose behavior today is largely unknown since the information is in a PDF.
- As we monitor user behavior, we expect to add content types that will enable a first group of 3-4 "Pilot Offices" to migrate remaining Tier 1 & 2 content to the modern (Drupal) CMS.

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- TBD

--- 

## Go-to-market Strategy

For the first iteration of the Office Directory we don't expect any go-to-market requirements, since we will integrate with an existing data source and process (the FOM) and we're replacing an existing web page with another in-place.

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

See [Status and decisions.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/tier-3-fom/Status%20and%20decisions.md).

   
## Screenshots

### Before

<img width="651" alt="screenshot - About VA   VA Organizations" src="https://user-images.githubusercontent.com/4054752/150036492-e0b9e05c-0571-44b7-8080-53f8f12306ab.png">

---

### After

_Preliminary wireframe_:

<img width="377" alt="preliminary wireframe - Office Directory search" src="https://user-images.githubusercontent.com/4054752/150036726-9f74afc4-ac9d-402f-8f21-532da9684ecf.png">

---

#### Communications

<details>

- Team Name: Offices
- GitHub Label: 
- Slack channel: cms-offices
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

## Updates to scope 

### March 4, 2022

Due to limitations in the Salesforce (FOM) database providing our data, the decision was made to leave the Office Details page out of our MVP. Our MVP will consist of the Directory page only, and Office Names will be hyperlinked to each office's choice of the external web page.
Rationale:
- The FOM database is not expected to have text inputs (mission, activities, overview) consistent with the published FOM; formatting and final edit is done in an application we can't access programmatically.
- We have learned that Office hierarchy data in that database is expected to be kept up to date by the VIEWS app whenever the hierarchy changes.

