# _Search Results Improvement Feature Brief_ (WIP)

This document will focus on the Facility Locator Search Results Improvement project. 

## Table of Contents

[User Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#user-journey)

[User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#user-stories--use-cases)

[Project Rationale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#project-rationale)

[Project Scope and Scale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#project-scope-and-scale)

[Not in Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#not-currently-in-scope)

[Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#measuring-success)

[Dependencies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#dependencies)

[Risk factors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#risk-factors)

[Rejected Solutions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#rejected-solutions)

[Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#definition-of-done)

[Key Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-search-results-improvement/feature-brief.md#key-links)

### User Journey
Veterans use the Facility Locator as the single source of truth on VA.gov to find a physical locations where s/he can recieve services and information as part of their Veteran benefit. Veterans expect search functionality that returns relevant and meaningful answers to their query with quick, relevant, and accurate information. 

### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*

- As a Veteran using the Facility Locator, I need search results returned to me quickly so that I can have my need met. 
- As a Veteran using the Facility Locator, I need a list of results to guide my selection so that I can visit the most appropriate location. 
- As a Veteran using the Facility Locator, I want to view results relevant to my location so that I can visit a convenient location. 

 ### Project Rationale
_Why should this project be a priority?_ 
- The current implementation has significant latency, particularly for community care searches. 
- Search performance is impacted by the number of results returned and the search parameters/bounding box. These factors currently have default settings which have no clear business rationale and may not be aligned with user expectations. 
- User expectations may depend on location (urban vs rural) and/or type of facility searched. 
- Current functionality for FL is to query until results are found. This can lead to extended time to return results, an incorrect null search result and a frustrating user experience.
- It is difficult to optimize performance because the Facilities team does not have a clear line of sight end to end for troubleshooting and monitoring. 
- Parameters sent to Mapbox can be misunderstood, causing a return of results which are technically accurate but not aligned with user input. 

**Stakeholder/Business drivers**
- Time to search results is significantly longer than the standard in the private sector, particularly for community care searches. 
- The Office of Community Care has been dissatisfied with the usability and performance of the community care implementation. 
- Other business owners (NCA, VHA) have expressed their concern over latency and usability. 

**Findings from research conducted March 2020**

[Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/FL-Search-march2020/research-findings.md)
- The expected number of search results varies based on geographic location.
- The most likely use-case for the Facility Locator is when a person is traveling or researching an unfamiliar area.
- Participants did not refer to the Facility Locator when seeking help for a specific issue.
- The map is a secondary source for users to find a location.
- Participants are more likely to look for VA Medical Centers than non-VA locations.

### Project Scope and Scale
_What's in and what's out?_

**Q32020 Initiatives related to this work**
- Map improvements, such as implementation of geographic search suggestions 
- Forward Proxy monitoring

### Not currently in scope
- Major changes to search UX

### Measuring Success
**Q32020 OKRs related to this work**
- Increase in Veteran 5 star user ratings by x%
- Reduction in the time to render results from PPMS by x%. 

#### Baseline KPIs
- Increase in Veteran 5 star user ratings by x%
- Reduction in the time to render results from PPMS by x%

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

**Team/Internal dependencies**

- Competing priorities and engineer resource constraints 

**Partner dependencies**

- Availability of Mapbox functionality and features based on current contract and version
  
  ### Risk factors

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

## Target Launch Date
- *What is your target launch date of your MVP/iteration?*
- *What is your date for when you'll evaluate impact after launch?*

---


### Results and Recommendations
#### Results
- TBD after launch

#### Recommendations
- TBD after launch
--- 

#### Rejected Solutions
*What other approaches did we consider and why were they rejected?*
Alternative technology for the map feature
- Google maps is an option but cost-prohibitive



### Definition of Done
[ ] Changes to search results and map interaction are aligned with user expectations
[ ] Search performance is improved 
[ ] Search results are relevant to urban and rural Veterans, regardless of facility or service type

### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._

[February 2020 Research Plan and Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research/user-research/FL-Search-feb2020)

[Opportunity Workshop](https://app.mural.co/t/vsa8243/m/vsa8243/1580502575461/03379c1e29b71b4aa6363925df142502893b73f7)
- link to Mural board from brainstorming session






