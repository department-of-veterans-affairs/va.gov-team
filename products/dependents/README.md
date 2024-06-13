
# Product Outline: 21-686c (Application Request to Add and/or Remove Dependents) and 21-674 (Request for Approval of School Attendance)

---

## Overview
The online 686c form allows Veterans to add or remove dependents from their VA benefits. The online form flow is integrated with the 21-674 form (Request for Approval of School Attendance), which is used when claiming benefits for a Veteran's child who is at least 18 years old, but under 23, and attending school.
- [About VA Form 21-686c (Application Request to Add and/or Remove Dependents)](https://www.va.gov/find-forms/about-form-21-686c/) 
- [About VA Form 21-674 (Request for Approval of School Attendance)](https://www.va.gov/find-forms/about-form-21-674/)

## Problem Statement
Dependent information is used accross many forms and experiences on VA.gov (pension, disability, VA profile, etc.), and there is no unified user experience when interacting with dependency information.

How might we provide a unified experience for Veterans when they need to view, add, remove, or update their dependent inforation across VA.gov?
 
## Desired User Outcomes

- The 686 and 674 online form flow submits information that can be successfully processed by downstream systems
- Claims that fail to submit are successfully processed through a backup submission flow
- Veterans have a positive experience when completing the 686/674 online forms
- Veterans do not encounter accessibility issues with completing the online 686/674 form
- Veterans have a cohesive experience on VA.gov when updating and viewing dependent information

## Undesired User Outcomes
- Online claims experience processing delays
- Veterans find the form experience confusing, frustrating, or too cumbersome
- Online claims are lost

## Desired Business Outcomes
- Online form submissions can be successfuly processed through RBPS

## Undesired Business Outcomes
- 686 and 674 online form submissions generate claim errors that prevent automated processing 

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| KPI                             | Baseline Value | Target Value | Actual Value | Link to Data Source |
|---------------------------------|----------------|--------------|--------------|---------------------|
| # of 686 online claims per year |                |              |              |                     |
| # of 674 online claims per year |                |              |              |                     |
| # of claim errors               |                |              |              |                     |
| # of session to complete claim  |                |              |              |                     |

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Online 686/674 claims are processed as quickly as possible (automated processing)
  - Key result: Average # of days to process an online 686 form
  - Key result: Average # of days to process an online 674 form

- Objective: Veterans have a positive experience when completing the online 686/674 form flow
  - Key result: 
  - Key result: 
---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- Complete usability baseline research to determine priorities for improvement
- Compelte accessibility audit to identify outstanding issues
- Complete form component audit to ensure all design system components are up-to-date

### Initiatives
- [2024 686 and 674 Online form Updates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/Initiative-Brief-686-674-Form-Updates.md)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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

---
   
## Screenshots

### Before
- [686/674 Form Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687976281975/2a9c6ca9ea6d955afa7977c777bbb72b15280903?sender=u934f98f179a86c76e6ee9592)

### After

---

#### Communications
- Team Name: Benefits Dependent Experience Team (Team Tree)
- GitHub Team Label: Tree
- GitHub Product Label: 686, 674
- Slack channel: benefits-dependents-management
- Product POCs: Laura Steele (product manager), Emily Theis (OCTO Lead)

#### Stakeholders
- Office/Department:
   - OCTO (Emily Theis, Julie Strotham, Steve Albers)
   - VBA (Brandi Traylor)
   - RBPS Team (TBD)

#### Team Members
 - DEPO Lead: Sarah Ortiz Shields
 - PM: Laura Steele
 - Engineering: Thomas Blackwell
 - Research/Design: Julie Pedtke, Ajia Wallace

