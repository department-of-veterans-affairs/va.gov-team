# Product Brief
FL Search experience, Phase 2: Usability and Accessibility
---

## Overview
Veterans searching for facilities using a mobile device will have a high quality and accessible experience consistent with industry standards for map-related searches. 

## Problem Statement
 The Facility Locator search experience has not been approached from a mobile-first perspective. The FL search experience could be better for mobile users. It is not aligned with Veteran expectations or other private industry map-based mobile search experiences. In a mobile month study, Veterans were not interested in using the map view of the Facility Locator. 


## Desired User Outcomes

_With this problem solved, what should users be able to do/achieve that they couldn't before?_

- Facility Locator searches on mobile devices will be consistent with user expectations for mobile map-related searches across the industry. 
- Veterans will see search results presented in a list view by default. 
- Veterans will have access to a map for more information. 
- Veterans will understand they can interact with the map to get additional information about locations. 
- Veterans will be able to easily clear field inputs
- Veterans will be able to opt-in to geolocation at the search level, rather than via browser.

## Desired Business Outcomes

- Increased Veteran satisfaction scores
- Improved stakeholder relationships

## Undesired Business Outcomes
 
 - Decreasing Veteran satisfaction scores
 - Stakeholder complaints

## Measuring Success

### Key Performance Indicators (KPIs)
_What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?_
_What are the most important metrics that track with this product/initiative's success?_
1. Veteran satisfaction scores

#### Baseline KPI Values
_Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

<details>
 <summary> 1. Veteran satisfaction scores, via Foresee </summary>
 
![5 star Feedback through January 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/Satsifaction%20through%20Jan%202021.png)

</details>

2. Number of legacy high severity map-related accessibility defects
- 508-defect-1 ❗ Launchblocker [SCREENREADER, KEYBOARD]: Map: All elements that can be operated by a mouse MUST be operable by keyboard [#6911](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6911)
- 508-defect-2 [SCREENREADER]: The map is announcing a lot of extra data on focus and each droplet needs a usable name [#515](https://github.com/department-of-veterans-affairs/va.gov-team/issues/515)
- 508-defect-2 Mapbox in keyboard user flow #16971 [#16971](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16971)
- 508-defect-2 [AXE-CORE]: Zoom In / Zoom Out controls MUST have their visible text as part of their accessible name [#6104](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6104)
- Accessibility: Search this area button [#16027](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16027)
- Inconsistent/buggy focus for "Search this area" button [#17665](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17963)
- [SCREENREADER] Announce zoom in/out context change (FL) [#17963](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17963)
- Implement Facility Locator error messages (post form system conversion) [#18351](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18351)


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

## Assumptions
_Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality_

- Veterans searching on FL using a mobile device want to view the facility list by default
- Veterans find access to a map valuable
- Veterans want to get additional location information by interacting with the map view
- Veterans need to clear field inputs
- Veterans want to opt-in to geolocation at search level, rather than via browser.

## Solution Approach

_What are you going to build now, and why have you decided to start there?_
_Why this solution / approach over other solutions / approaches?_
_What have you explicitly decided to not include in this initial set of functionality, and why?_
_How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?-

1. Resolve known legacy high severity accessibility issues
   - [SCREENREADER] Announce zoom in/out context change (FL) #17963
   - 508-defect-2 Mapbox in keyboard user flow #16971
   - Inconsistent/buggy focus for "Search this area" button #17665
2. Implement clear this field feature
3. Implement search-level "use my location" feature
4. Adopt the form system for Facility Locator to address error message accessibility and become consistent with design system format 
5. Design and test mobile-first search experience

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- Link to Release Plan (WIP)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
 
---

## Links to relevant documentation

## Solution Narrative

### Current Status

### Incident Response
[Link to technical documentation and incident response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/technical-documentation.md#incident-response)

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Facilities
- GitHub Label: 
- Slack channel: #vsa-facilities
- Product POCs:
  - DEPO Product Lead: Dave Conlon
  - Product Manager: Michelle Middaugh
  
- Stakeholders: 

</details>

#### Team Members

<details>
 
 DEPO Product Lead: Dave Conlon
 Product Manager: Michelle Middaugh
 Front end engineers
 - Michael Pelz-Sherman
 - Gibran Rodriguez
 Back end engineer
 - Lance Sanchez
 Design/Research
 - Leyda Hughes
 - Chris Logan
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
