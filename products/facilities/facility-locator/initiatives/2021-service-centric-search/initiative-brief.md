# Initiative Brief: Facility Locator service-centric search
#### Overview
It has long been recognized that the Facility Locator's facility-centric search is not consistent with the Veteran task-based mental model. _As a Veteran, I want to be able to search by service so that I can find a location that can meet my need._

**Related/Associated product(s)**
- [Facility Locator product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/facility-locator-product-outline.md)
- [EPIC #13801](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13801) 

**Resources**
Ideas from Hackathon, November 2020
- [Leyda Hughes](https://preview.uxpin.com/c300973e45a11d90a87d54bc788f6461da080480#/pages/134295035/simulate/sitemap?mode=i)
- [Michelle Middaugh](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/images/ba3ed474-79a2-4bad-bb21-a5f04cf89402-original.pdf) 

## Problem
### What is the problem and who is affected? And, what evidence do we have of the problem?

The Facility Locator currently forces Veterans to choose the type of facility they wish to search for. This assumes the following
- Veterans understand the organizational structure at the VA
- Services are offered at only one type of facility
- Veterans understand that they should perform more than one type of search to get a full list of options
    
Services are not fully or accurately mapped for all facility types. 
- The VA health service list has a small subset of the health service taxonomy. 
- Services which are currently available for searching aren't necessarily mapped accurately for all facilities. Searching for VA health facilities offering emergency services may not return a list of all facilities known to offer this type of care and may include facilities which do not. 
- Benefit services are not listed in plain language and may not be complete. 
- Community care searches rely on a typeahead functionality powered by a clinical/billing taxonomy which is not at all Veteran facing and does not map to VA health services.

### How does this initiative help further OCTO-DE's mission and goals?
- OCTO-DE objective: Provide accurate health service information for local facilities 
- OCTO-DE objective: Help Veterans manage their health services online

## Hypotheses
* By implementing a service-centric search experience in the Facility Locator, we can return an accurate, complete and facility-type agnostic set of facilities offering the service a Veteran seeks

## Outcomes
### Desired User Outcomes
* Veterans can use a task-based search to look for the closest VA facility offering that service, regardless of type 

---
## Current Facility Locator experience

Veterans must select a facility from a dropdown box

![image](https://user-images.githubusercontent.com/55411834/138356740-cf11d62f-630e-4d76-a708-c00f7ddecc6b.png)
   

Veterans can refine their search by selecting from the service-type drop down


![service type](https://user-images.githubusercontent.com/55411834/138357219-dfa482fb-f5ac-4388-8be3-2854d9d3339b.png)



## Measuring Success

### Key Performance Indicators (KPIs) (WIP)


|Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo) |
|------------|----------|--------|-------------------------------------|

---

## Dependencies

Making a service-centric search possible will require the following
* All services are complete and accurately mapped to facilities, including
  * VHA and Vet Centers
  * VBA 
  * NCA
  * Community Care
* Services use a common plain language/Veteran-friendly taxonomy (or can be mapped)
* Service data can be consumed by the Facility Locator
* New task-based UX design validated with Veteran feedback
* Front end implementation of validated design

### Assumptions/Risks

- **Value Risks** (will people use it): 
    - The Facility Locator is an established product which will have Search result sets should be more complete (including both VA Medical Centers and Vet Centers as facilities offering mental health counseling, for example). 
- **Usability Risks** (can people figure out how to use it):
    - By aligning the search experience with how Veterans - and humans in general - tend to search, the usability should be more intuitive. 
    
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
    - Identification of which services are broadly available 
    - Identifying best system to use as single source of truth

- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*


### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*



#### Initiative Launch Dates
NA - discovery only

- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*
VHA leadership

### Teams
VSA Facilities
Lighthouse
CMS

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
