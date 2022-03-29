# Health Services Taxonomy: Community care Feature Brief (WIP)

This document will focus on the implementation of Health Services Taxonomy into Facility Locator search functionality 

## Table of Contents

[User Journey](#user-journey)

[User Stories](#user-stories)

[Project Rationale](#project-rationale)

[Measuring Success](#measuring-success)

[Dependencies](#dependencies)

[Key Links](#key-links)

### User Journey
Veterans use the Facility Locator as the single source of truth on VA.gov to find a physical locations where s/he can recieve services and information as part of their Veteran benefit. Veterans expect search functionality that returns relevant and meaningful answers to their query with quick, relevant, and accurate information. 

### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*
- As a Veteran using the Facility Locator, I need to be able to search for community care providers using Veteran facing language. 

 ### Project Rationale
_Why should this project be a priority?_ 
- Currently, community care providers are searched using a typeahead which is based on NUCC codes which is not intuitive or in plain language.
- VA health facilities, by comparison, are searched using a concise list of service types based on research and using Veteran facing language. 
- Implementing the existing [VHA health services taxonomy](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/services-taxonomy) will provide a more friendly and consistent search experience

**Stakeholder/Business drivers**
- The Office of Community Care has been dissatisfied with the usability and performance of the community care implementation. 

### Measuring Success
**Q32020 OKRs related to this work**
- By mapping 100% of NUCC codes (and other PPMS variables) to Health Services Taxonomy during 3Q2020, we can support our long term goal of Veterans in searching for community care providers using Veteran friendly language. 

#### Baseline KPIs
- Currently no mapping exists between NUCC and the VHA Health Services Taxonomy

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

**Partner dependencies**

- This mapping will require cooperation with Office of Community Care. 

### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._

[More information on the VHA Health Services Taxonomy](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/services-taxonomy)

[Health Services taxonomy research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/services-taxonomy/health-taxonomy-research)

[An Exploration of Healthcare (and other) Services across VA Facilities Websites: (Taxonomy Presentation)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/health-taxonomy/Exploration%20of%20Health%20Care%20Services%20on%20VA.gov.pptx)
