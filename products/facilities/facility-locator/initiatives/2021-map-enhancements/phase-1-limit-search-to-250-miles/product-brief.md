# Product Brief
Facility Locator Map Enhancements: Phase 1- Limit Search to 500 miles
---

## Overview
Veterans will have the information they need to understand search results within the context of the search area and have a method to adjust the location parameters as needed to make the outcome meaningful and relevant. 

## Problem Statement

Following a change expected to be implemented as part of PPMS 10.0 in early November...
- when a Veteran uses the Facility Locator to search for a Community care facility, the list of search results will be limited to facilities within 500 miles. 

This is an issue because, _with current functionality_...
- there is no method to notify the Veteran about this search limitation.
- there is no accessible way for a user to trigger a new search after interacting with the map or changing location search parameters
- the map will continue to zoom out, autosearching for a result which could be an unreasonable distance from the Veteran

How might we....
- make changes which support Veterans following this change
- resolve other existing usability issues
- make  the search expereince better overall 

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

<details>
 <summary> **User satisfaction** </summary>
 
![5 star Feedback through September 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/5-star-feedback-oct2020.png)

</details>

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:Veterans can find a Community care provider beyond the limit of the original search parameters
  - Key result: Improved veteran user satisfaction scores
  - Key result: Decrease total number of search requests (due to auto-firing of search due to map movement)
  - Key result: Decrease the number of PPMS search requests for the same care type (due to auto-zoom)
 


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

- Veterans want to see search results displayed on a map by default.
- Veterans want to be able to filter search results by distance. 
- The same optimal initial zoom level will apply to all facility types and location searches. 

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

**1. Update Mapbox to JS GL, then layer on the following enhancements [#14786](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14786)**
   - A recent [Discovery effort](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8535) validated our assumption that a move to the JS GL version would provide enough value through increased functionality, support and enhanced accessibility options to offset the level of effort. We will implement only the desired functionality during this process, rather than replicating the entire existing functionality. This allows us to prune away the unwanted usability quirks during the upgrade, saving us the future trouble of fixing the issues separately. By upgrading the version first, we will also minimize throw-away code and test future enhancements in the context of the new version. This upgrade will also enable access to an accessibility plug-in, which should help to resolve 508 defects.   

**2. Decrease initial zoom radius from 80 miles to ~40 miles [#14792](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14792).**
   - This is a one size fits all solution which is a bet about the optimal zoom level. Data layer analytics for current use and future Veteran research will be used to validate this hypothesis.
   
   - Future iteration: Default zoom level based on facility type and/or location density. 
   
**3. Implement accessible way for Veteran to adjust the centerpoint of map and zoom level** 
   - Design to be wireframed and prototyped for input and solutioning

**4. Implement method for Veteran to trigger search after making adjustments.**
   - Design to be wireframed and prototyped for input and solutioning


--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2021-map-enhancements/phase-1-limit-search-to-250-miles/release-plan.md) (#go-to-market-strategy)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
 
---

## Links to relevant documentation

- [Competitive analysis PDF](https://app.zenhub.com/files/133843125/315c0bd6-e7c8-4144-9222-19670e7b25e2/download) used to inform wireframes
- [Recommendations based on analysis with supporting visual examples](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2021-map-enhancements/Map%20Behavior%20-%20Recommendations.pdf)

## Solution Narrative

### Current Status

[Video of current functionality, October 2020](https://www.loom.com/share/ca23460f62bc4ad89091867976ba2c07)

### Incident Response (WIP)

Points of contact for system and dependent VA backends
Links to dashboards that help identify and debug application issues
Links to technical diagrams (checked into GitHub alongside your product documentation), including:
- An **architecture diagram**, showing involved systems and how they connect.
- For non-trivial flows (i.e. more than a single round-trip call from frontend → `vets-api` → VA Backend), a **sequence diagram** showing the ordered flow of data and operations between systems.
- Describe any new publicly-exposed endpoints (`vets-api` or otherwise):
- Describe any new interactions with dependent VA backends

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

