# _Search Results Improvement Feature Brief_ (WIP)

This document will focus on the Facility Locator Search Results Improvement project. 

## Table of Contents

[User Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#user-journey)

[User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#user-stories--use-cases)

[Project Rationale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#project-rationale)

[Project Scope and Scale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#project-scope-and-scale)

[Not in Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#not-currently-in-scope)

[Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#measuring-success)

[Dependencies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#dependencies)

[Risk factors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#risk-factors)

[Rejected Solutions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#rejected-solutions)

[Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#definition-of-done)

[Key Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/search-results-improvement/feature-brief.md#key-links)

### User Journey
Veterans use the Facility Locator as the single source of truth on VA.gov to find a physical locations where s/he can recieve services and information as part of their Veteran benefit. Veterans expect search functionality that returns relevant and meaningful answers to their query with quick, relevant, and accurate information. 

### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*

- As a Veteran using the Facility Locator, I need search results returned to me quickly so that I can have my need met. 
- As a Veteran using the Facility Locator, I need a list of results to guide my selection so that I can visit the most appropriate location. 
- As a Veteran using the Facility Locator, I want to view results relevant to my location so that I can visit a convenient location. 

 
### Project Rationale
_Why should this project be a priority?_ 
- The current implementation has significant latency, particularly for community care searches
- Search performance is impacted by the number of results returned and the search parameters/bounding box. These factors currently have default settings which have no clear business rationale and may not be aligned with user expectations. 
- User expectations may depend on location (urban vs rural) and/or type of facility searched. 
- Current functionality for FL is to query until results are found. This can lead to extended time to return results, an incorrect null search result and a frustrating user experience.

**Stakeholder/Business drivers**
- Time to search results is significantly longer than the standard in the private sector, particularly for community care searches. 
The Office of Community Care has been dissatisfied with the usability and performance of the community care implementation. 
- Other business owners (NCA, VHA) have expressed their concern over latency and usability. 

**Findings from research conducted March 2019**
TBD 

### Project Scope and Scale
_What's in and what's out?_
- Setting default for number of search results
- Setting default for map parameters
- Search parameters determined through user interaction with map
- Enable "no results found" for search

### Not currently in scope
- Major changes to search UX

### Measuring Success
_How will we know if we are successful?_

### KPIs
- Time to return results
- User satisfaction (Foresee)

#### Baseline KPIs
- GA / Domo Link - ?

### OKRs

**Objective 2: Enhance the search process**
KEY RESULT: Time for delivery of search results will improve by (TBD) by (date)
KEY RESULT: User satisfaction ratings for the Facility Locator search page will increase to (TBD) by (date).  

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

**Team/Internal dependencies**

- Competing priorities and front end resource constraints 

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


### Definition of Done
[ ] Changes to search results and map interaction are aligned with user expectations
[ ] Search performance is improved through new default settings for bounding box and number of search results
[ ] Search results are relevant to urban and rural Veterans, regardless of facility or service type

### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._

[February 2020 Research Plan and Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research/user-research/FL-Search-feb2020)

[Opportunity Workshop](https://app.mural.co/t/vsa8243/m/vsa8243/1580502575461/03379c1e29b71b4aa6363925df142502893b73f7)
- link to Mural board from brainstorming session






