# Initiative Brief - Facility Locator Search Improvements
>3Q 2023
## User Journey
Veterans use the Facility Locator as the single source of truth on VA.gov to find physical locations where s/he can receive benefits and services. Veterans expect search functionality that returns relevant and meaningful answers to their query with quick, relevant, and accurate information.

## User Stories / Use Cases
- As a Veteran using the Facility Locator, I want to specify the type of care I need using a complete and accurate list of services so that I can easily find a VA facility which offers it. 
- As a Veteran using the Facility Locator, I want to specify the type of care I need using plain language terms so that I can easily find a VA facility which offers it. 
- As a Veteran using the Facility Locator, I want to be able to filter the search results so that I can view the most relevant locations. 
- As a Veteran using the Facility Locator, I want the option of searching at a state level so that I can search a wider area. 
- As a Veteran using the mobile experience, I want to understand the relationship between search results and indicators on the map. 

## Project rationale
- Today, the Facility Locator displays the option to search for only 19 of the ~100 service types available to VA health facilities within the VA service taxonomy. An upcoming implementation of Lighthouse v1 will make it possible to leverage the taxonomy in CMS as the source of truth for VA services. 
- Data will be available to support Veterans who want to filter Community Care search results to more easily find certain types of providers, such as those who have completed specific training about caring for Veterans, or those who offer in home or telehealth options. We anticipate other types of filtering will be available in the future and want an option to easily expand this functionality. 
- Veterans may want to extend their search for cemeteries beyond the radius which is currently available. 

## Project scope and scale
### Separate features included in this design iteration
- Search result filter, initially to support Community care provider training, home health and telehealth designations, but designed for expansion in the future
- Typeahead search functionality, initially to support expanded VA health services plus new benefit taxonomy in the future
- State level search as requested by NCA
- Improved mobile map experience
### Outside scope
- Use of plain language terms in Community care searches

## Measuring Success
### Relevant OCTO Objectives
- Increase accessibility, reliability, and security of Veteran's digital services
- Reduce the time it takes for Veterans to find, use, and receive services
### Relevant Sitewide Objective
- Increase VA's ability to deliver consistent, accessible, quality information across the ecosystem
### Digital Experience Strategic Goals
- Veterans and their families can find a single authoritative source of information
- Veterans and their families trust the security, accuracy, and relevancy of VA digital services
### Relevant Facilities Team OKRs
**Objective: Veterans know where, how, and when they can receive services**
| Key result | Baseline | Feature launch date | 1 mo post-launch | 3 mos post-launch
| --- | --- | --- | --- | --- |
| # of health services searchable on FL | --- | --- | --- | --- |
| # of searches using new filter options | --- | --- | --- | --- |
| # of searches on FL using benefit service taxonomy | --- | --- | --- | --- |
### KPIs
| Key result | Baseline - Date (TBD)| 
| --- | --- | 
| Veteran satisfaction scores | pending |

## Dependencies
### Internal 
- Competing priorities and engineer resource constraints
- Taxonomy needs to support the full list of services with key words from common conditions, plain language names, Veteran-friendly naming, and service descriptions
### Partner dependencies
- Lighthouse v1 availability
- PPMS data availability 
  - Today, the number of providers who have received the Veteran-specific training is less than 1%. Until the training is more common, most searches will fail to return any results meeting the criteria and this filter will be likely to introduce more confusion than usefulness. 

## Risk factors

## Go-to-market Strategy
Rather than launching these design changes as a package of improvements, we intend to deploy them as separate features, as needed.
### Target Launch Date
What is your target launch date of your MVP/iteration?
What is your date for when you'll evaluate impact after launch?

## Results and Recommendations
### Results
TBD after launch
### Recommendations
TBD after launch
## Rejected Solutions
What other approaches did we consider and why were they rejected? 
## Definition of Done
- Changes to search results and map interaction are aligned with user expectations 
- Search performance is not negatively impacted.
- Veteran satisfaction scores are not negatively impacted. 
- Search results are relevant to urban and rural Veterans, regardless of facility or service type
