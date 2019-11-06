# October 2019 Facility Locator Discovery Sprint
_Sprint purpose: To build familiarity with the current product so the team has the best information possible to plan the next version of the product._

## Current state
- Facility Locator is intended to be VA's single source of truth for customers to find VA facilities and location details about all VA facilities, across VHA, VBA, and NCA. 
- It is the newer version of VA's old facility locator: https://www.va.gov/directory/guide/home.asp
- Many individual facility locators exist within Va.gov and consolidation of these separate systems has been initiated. 
- Data is pulled via various APIs. 
- Existing functionality has design and performance issues which contribute to Veteran frustration.
- Parallel modernization efforts for Unified taxonomy and VAMC facility page design can be leveraged. 

## Engineering Discovery
**Goal:** To investigate and document the current Facility Locator tool's
   - Front-end architecture
   - Back-end architecture, including data sources and any transformations or mappings of those data.

### What was learned
- We are still using vets-api
- Known usability issues are divided between those which can be addressed beginning the next sprint and those which are related to map feature. Mapbox is due for an upgrade which is blocked by a pending price structure change. 

**Performance bottlenecks**
  - Kong
  - Community Care query process (uses vets-api for middleman with PPMS)

**Data hierachy**
-Class for each facility type with a field for type (type -> facility type -> classification)
  - Example 1 VA_facility -> VA Health facility -> VAMC
  - Example 2 VA_facility -> VA Health facility -> Multi-specialty CBOC
- Data is essentially the same structure between vets API and Facility API
- Community Care responses do not distinguish between POS 17 and POS 20 facilities (i.e urgent care and pharmacy), which is leading to different data between Facility Locator and the TriWest locator.
  
### New questions
- Where is Kong hosted and who controls that process?
- What is data hierarchy for community care (Justin) and what level should we pull to accurately represent the community care locations (Dave/Michelle)? 

### [Files and documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering)

## Design Discovery (WIP)
**Goal:** To conduct a round of evaluative usability testing of the current Facility Locator tool in order to 
   - Understand bright spots and pain points 
   - Gain insights into how users expect the tool to work (e.g., search by facility name, search by services, search by task, etc.)

### What was learned
### New questions

### [Files and documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research/discovery-sprints/user-research)

## Product Discovery
**Goal:** To investigate and document the current Facility Locator tool's  
   - Data sources and data owners (i.e., people/offices/groups),
   - Exports or flat files of those data sources (or examples of the data)
   - Google Analytics reports on the tool's current usage.

### What was learned
**[Google Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/analytics-baseline.md)**
- Between July 10, 2019 - October 10, 2019, the current Facility Locator had 766,468 unique users, 48.6% were new visitors. 
- Work to surface information to search engines will be important
  - 25% of users arrive directly
- Reaching the Facility Detail page may not be the true measure of success
  - Viewed by 21.6% of users in current Facility Locator 
  - Viewed by 31% in legacy Facility Directory 
- 46% of users search for "All", 32% of users search "Health" 
- 89.21% of Community care searches do not include service type, 
- Vet Centers have the greatest number of search refinements (2x average) but refinements to Benefit and Community care searches are also high. 
- Average page load time in current Facility Locator = 4.01 sec

**[Data sources](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research/discovery-sprints/data-sources) and [Taxonomy](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research/discovery-sprints/taxonomy)**
- We've defined the full list of facility locators to be evaluated for consolidation into the current Facility Locator tool. 
- We've gained an understanding of the Health Services Taxonomy, organized under 5 major categories of care: Primary Care, Mental Health, Specialty Care, Social Programs and Other. 
- We've leatrned the mapping for the VA Specialty/Service/Programs to 1) patient friendly language, which will be useful in determining how to display the services and 2) stop codes which will be useful in determining which locations provide the services.
- There are data discrepancies between facilities returned by searches in the legacy directory and current Facility Locator. 

**Priorities**
- Now that we've assumed responsibility for urgent and emergency care issues and enhanvcements, the work has become a top priority. 

### New questions
- What is the acceptable data quality threshold for production?
- Do we log "null searches" and if so, what is the rate of occrrence?
- What should be considered a successful event?
- What is the root cause for data discrepancies between facility directory (legacy) and Facility Locator (current)? 



