# Product Outline Template
---

## Overview
Veterans will have the information they need to understand search results within the context of the search area and have a method to adjust the 

## Problem Statement

Following a change expected to be implemented as part of PPMS 10.0 in early November...
- when a Veteran uses the Facility Locator to search for a Community care facility, the list of search results will be limited to facilities within 250 miles. 

This is an issue because, _with current functionality_...
- there is no method to notify the Veteran about this search limitation.
- there is no accessible wayfor a user to trigger a new search after interacting with the map or changing location search parameters
- the map will continue to zoom out, autosearching for a result which could be an unreasonable distance from the Veteran

How might we....
make changes which support Veterans following this change, resolve other existing usability issues, and make  the search expereince better overall 

## Desired User Outcomes

_With this problem solved, what should users be able to do/achieve that they couldn't before?_

- Veterans will understand the search results in the context of the search area
- Veterans will have an accessible way to adjust centerpoint of the map and/or zoom level
- Veterans can trigger a search after adjusting search area

## Undesired User Outcomes

- Search results are confusing and/or misleading to Veterans. 
- The autosearch experience and perceived poor quality of search results create a negative impression about the Facility Locator for Veterans. 

## Desired Business Outcomes

- Improved relationship with stakeholders from the Office of Community Care

## Undesired Business Outcomes
 
 - Decreasing Veteran satisfaction scores
 - Stakeholder complaints

---
## Measuring Success

### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_

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

1. Update Mapbox to JS GL, then layer on the following enhancements [#14786](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14786)
   - A recent [Discovery effort](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8535) validated our assumption that a move to the JS GL version would provide enough value in the form of increased functionality, support and access to accessibility plug-ins to offset the level of effort. By upgrading the version first, we can maintain only the desired functionality to minimize throw-away code and allow us to test future enhancements in the context of the upgraded version. This upgrade will also enable access to an accessibility plug-in, which should help to resolve 508 defects.   

2. Decrease initial zoom radius from 80 miles to 40 miles [#14792](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14792). 
   - Future: Default zoom level based on facility type and/or location density. 
   
3. Implement accessible way for Veteran to adjust the centerpoint of map and zoom level 

4. Implement method for Veteran to trigger search after making adjustments. 

 


Create search UX wireframes [#14818]
Finalize search UX design [#14867]
Add filter to allow Veteran to specify radius [#14789]
Add some sort of visual indicator of search area [#14795]

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](#go-to-market-strategy)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch?*
  - 
---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
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

