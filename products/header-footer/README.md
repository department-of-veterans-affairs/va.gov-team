# Global header and footer

---

## Overview
The VA.gov header and footer are key navigational elements for VA.gov. 

The header and footer are not used exclusively on the modernized VA.gov, and are also 'injected' into many non-modernized TeamSites via a javascript application (proxy-rewrite). Example sites using the injected header/footer include: 
- https://benefits.va.gov/benefits/ 
- https://www.va.gov/health/
- https://www.cem.va.gov/ 

Note: Be aware that there are also "copycat" injected headers such as https://www.research.va.gov/ (as of 4/17/2023) that exist because the injection script cannot work on that site.


## Product Ownership
| | VA.gov header & footer | Injected header/footer | 
| --- | --- | --- |
| Content | Sitewide Content Team | Sitewide Content Team |
| Design & Research  | Sitewide Product Team in partnership with Design System Team | Sitewide Product Team in partnership with Design System Team |
| Build & compiled presentation (including analytics) | Design System Team | Design System Team | 
| Delivery | Design System Team - incl. anything visual, errors due to style or markup changes / introduction of components | Sitewide Product Team (via proxy-rewrite app) - incl. CORS errors, problems with injection, Drupal data structure errors in injection, or addition of new sites for injection | 

**Sitewide Content**
- OCTO Lead: Danielle Thierry
- OCTO Slack channel: #sitewide-content-accessibility-ia

**Sitewide Product Team**
 - OCTO Sitewide Lead: Michelle Middaugh
 - VA Design lead: Amanda Klausmeier
 - OCTO Slack channel: #sitewide-public-websites

**VA Design System Team**
 - OCTO Design System Team lead: Matt Dingee
 - OCTO Slack channel: #platform-design-system

### Other products within the header owned by other teams
The Header and Footer contain elements that are managed separately as standalone products and have their own product development cycles. Those include: 
* On-site search: Sitewide Product Team
* Veterans Crisis Line modal: Design System Team
* Authenticated menu and Login modal: Identity Team

## Problem Statement

- How might we create and maintain a header that supports Veteran "browse" behaviors that accurately reflect flows and information architecture?
- How might this header support the identity of VA?
- How might we create and maintain a header that increases the usage and throughput of VA services - especially that of self-service?
 
## Desired User Outcomes

- As a site visitor, I want to know that I am on a Federal website so that I have confidence in any information I learn from the site or provide to applications on the site.
- As a site visitor, I want to know that the content I am viewing is part of the official Veterans Affairs website so that I have confidence in the information I learn from the site or provide to applications on the site.
- As a site visitor, I want an intuitive menu so that I can easily navigate the site via my preferred "browse" site behavior.
- As a site visitor using a mobile device, I want an intuitive experience so that I can easily interact with the site without a header getting in the way of the content.
- As a site visitor, I expect content and actions in a header and footer to be consistent with best-in-class commercial websites to meet my expectations of interacting with VA.gov.

## Undesired User Outcomes
- High cognitive load
- Long page load times


## Desired Business Outcomes

- Facilitates the IA of VA.gov
- Easily maintained content that leverages the Drupal content management system and content publishing releases for most maintenance activities (rather than hard coded behavior that requires code release and deployment).
- Contains mandated information (e.g. FOIA, Privacy, No FEAR, etc) and supports Federal and VA policy (e.g. 21st century IDEA act, etc)
- Supports VA.gov design system needs
- Supports USWDS design system needs

## Undesired Business Outcomes

- Long turn-around times for content updates
- Link farm/dumping ground
- Creates site bloat that slows down the loading of the site

---
## Measuring Success


### Key Performance Indicators (KPIs)
* Funnel of "learn" tasks -> high time on page/interaction on page (aggregate)
* Completion rate of "learn" -> apply paths (aggregate)
* Completion rate of "manage" task funnels (aggregate)
* Maintain high CSAT scores

#### Baseline KPI Values
* 

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- 

--- 

## Launch Strategy
- Part of launch for VA.gov modernization in 2018

## Launch Dates

- *Actual Launch Date* 
  - November 11, 2018

---

## Solution Narrative



---

### Artifacts

#### Initiatives
- [2021 New Mobile Header](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2021-new-mobile-header/Initiative%20Briefing.md)
- [2024 Federal Standardized Header and Footer](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/initiatives/2024-federal-standardized-header-footer) - discontinued, did not ship

#### Research
- [2024 Federal Standardized Header/Footer Usability Testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2024-federal-standardized-header-footer/research)

---

### Key Decisions

---
   
## Screenshots

### Before

### After

---


#### Stakeholders
