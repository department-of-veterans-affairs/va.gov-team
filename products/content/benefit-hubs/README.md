# Product Outline Template

## Overview
Benefit Hubs describe available benefits provided by VA. Benefit Hubs include: 
* VA Benefits taxonomy
* Benefit Hub Landing pages
* Benefit hub menus
* Benefit Detail Pages that describe various aspects of the available benefit, including:
  * How to apply 
  * About
  * Eligibility
  * After you apply
 
Benefit Hubs are also integrated with the VA.gov homepage, and the VA.gov header megamenu.
 
### VA Benefits taxonomy
The VA Benefits taxonomy contains taxonomy terms that can contain their own metadata. This taxonomy is intended to act as a single source of truth for VA Benefits content that should appear in multiple places throughout Benefit Detail Pages, and the rest of VA.gov.

VA Benefits taxonomy Drupal interface: https://prod.cms.va.gov/admin/structure/taxonomy/manage/va_benefits_taxonomy/overview

As of Jan 2025, the VA Benefits taxonomy is partially populated in Drupal with metadata and terms, but is not yet integrated with any front-end templates on VA.gov.

### Benefit Hub Landing Pages
Benefit Hub Landing Pages contain high level content about each benefit, and are an entry point for site visitors to access more information on eligibility, how to apply, etc. 

Benefit Hub Landing Page content: https://prod.cms.va.gov/admin/content?title=&type=landing_page&moderation_state=published&owner=All

The list of all Benefit Hubs exists and is presented in a couple of places across VA.gov: 
* **Homepage**: includes a list of Hubs, managed via the [VA.gov home page benefit hub list menu](https://prod.cms.va.gov/admin/structure/menu/manage/home-page-hub-list)
* **Header megamenu**: includes a full section of Hub / detail page links, created via the [Header megamenu](https://prod.cms.va.gov/admin/structure/menu/manage/header-megamenu)

#### Benefit hub menus
Each Benefit Hub has an associated menu, which creates a left sidebar within that hub: 
* [Burials & Memorials hub](https://prod.cms.va.gov/admin/structure/menu/manage/burials-and-memorials-benef)
* [Careers & Employment hub](https://prod.cms.va.gov/admin/structure/menu/manage/careers-employment-benefits)
* [Disability hub](https://prod.cms.va.gov/admin/structure/menu/manage/disability-benefits-hub)
* [Education hub](https://prod.cms.va.gov/admin/structure/menu/manage/education-benefits-hub)
* [Family & Caregiver hub](https://prod.cms.va.gov/admin/structure/menu/manage/family-and-caregiver-benefits)
* [Health Care hub](https://prod.cms.va.gov/admin/structure/menu/manage/health-care-benefits-hub)
* [Housing Assistance hub](https://prod.cms.va.gov/admin/structure/menu/manage/housing-assistance-benefits)
* [Life Insurance hub](https://prod.cms.va.gov/admin/structure/menu/manage/life-insurance-benefits-hub)
* [Pension hub](https://prod.cms.va.gov/admin/structure/menu/manage/pension-benefits-hub)
* [Records hub](https://prod.cms.va.gov/admin/structure/menu/manage/records-benefits-hub)

#### Drupal / FE build documentation
The [Benefits Hubs Structure mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1735915490728/50e4d41a0029327d5cfbc87e4ce1df0c90ea1fee) shows how Drupal content structure maps to the VA.gov presentation of Benefit Hubs and Benefit Hub Detail Pages. 

### Benefit Detail Pages
The Benefit Detail Page is an older highly flexible Drupal content type, that allows for a very loose content structure. 

Future state epic to build more structure for Benefit Detail pages: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13752

Benefit Detail Page content: https://prod.cms.va.gov/admin/content?title=&type=page&moderation_state=published&owner=All


## Initiatives
Initiative information lives within the greater Benefit Hub product documentation: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/benefit-hubs/initiatives

---

## Benefit Hub Owners (Jan 2025)

### Content
- Owner: Sitewide Content & IA team (CAIA) owns the content for Benefit Hubs and Detail pages.
  - VA PO: Danielle Thierry, Beth Potts, Mikki Northuis (IA)
- GitHub Label: `Sitewide Content`
- Slack channel: #sitewide-content-accessibility-ia

### Software
- Owner: VA.gov Sitewide Product Team owns the Drupal and Front-end builds for Benefit Hub products.
  - VA PO: Michelle Middaugh
- GitHub Label: `sitewide`
- Slack channel: #sitewide-program
- Stakeholders: CAIA are the primary stakeholders and define product requirements for improvements to the Benefit Hub products.


### Stakeholders
VBA teams are stakeholders for content about specific benefits.





# Blank template to be populated


## Problem Statement
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)*

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.*
 
## Desired User Outcomes

- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes


## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes


---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*




## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

