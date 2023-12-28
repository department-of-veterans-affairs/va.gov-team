# _Facility Locator Emergency Care Mash-up Feature Brief_

This document will focus on the emergency care mash-up iteration for the Facility Locator 
## Table of Contents

[User Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#user-journey)

[User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#user-stories--use-cases)

[Project Rationale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#project-rationale)

[Project Scope and Scale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md.md#project-scope-and-scale)

[Not in Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#not-in-scope)

[Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#measuring-success)

[Dependencies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#dependencies)

[Risk factors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#risk-factors)

[Rejected Solutions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#rejected-solutions)

[Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#definition-of-done)

[Key Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/emergency-care-mash-up-product-brief.md#key-links)

### User Journey
- Following the Mission Act, eligible Veterans have access to emergency care benefits in their community and need help knowing where and how to receive care. 

### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*
- As a Veteran, I need to know where I am eligible to receive emergency care so I can have my medical needs addressed quickly without out of pocket costs.
- As a veteran I need to know what emergency rooms near me are part of VA’s Network so that in the event of an emergency I can make use of the MISSION Act emergency care benefit.

### Project Rationale
_Why should this project be a priority?_

**Background**
- A provider can request authorization within 72 hours of visit but authorization/coverage is dependent on criteria:
  - Location is "in network" (PC3 or Community care depending on geographic location)
  - Veteran is eligible
  - Visit qualifies as requiring emergency attention
  - VA services were not available

**Veteran Impact**
- Without authorization, Veteran is at risk of out of pocket costs and adverse credit impact
- Veteran can submit request for "consideration" if care provided out of network but authorization is not guaranteed and processing time is not automated and can take significantly longer

**Business Impact**
- Use of authorized emergency location reduces processing time (claims flow automatically w/o human intervention)
- Provider reimbursement rate is higher if visit is authorized (potential impact on provider willingness to cover services)

**Product Impact**
- The Facility Locator roadmap is moving toward a service-centered search experience, agnostic of the facility type. This work follows an urgent care mash-up which returns a list of the closest VA urgent care facilities, community urgent care facilities or both.    

### Project Scope and Scale
_What's in and what's out?_

This mash-up iteration will return emergency locations, regardess of service type. This will require:
- Backend logic changes to return community care (PPMS) results and VA facilities (Lighthouse) within single results list.
- Frontend UX changes to add "Emergency care" as VA facility type and a service type dropdown to select VA, Community urgent care and All
- Frontend UX changes will need to be made to appropriately display a link to learn more about the community emergency care benefit for relevant locations only (not VA facilities). 
- Addition of an alert containing caveats (that the list is not comprehensive, that Veterans should visit the closest emergency roo in the event of an emergency and that using "in network" facilities will provide a smoother billing/reimbursement experience)

### Not currently in scope

### Measuring Success
_How will we know if we are successful?_



### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

OCC defines Community emergency services as aligned with the following NUCC specialty codes: 
|Taxonomy Code | Group | Category | Specialty|
|-- | -- | -- | --|
| 261QE0002X | Ambulatory Health Care Facilities | Clinic/Center | Emergency Care
| 282N00000X | Hospitals | General Acute Care Hospital |  
| 282NC0060X | Hospitals | General Acute Care Hospital | Critical Access
| 282NC2000X | Hospitals | General Acute Care Hospital | Children
| 282NR1301X | Hospitals | General Acute Care Hospital | Rural
| 282NW0100X | Hospitals | General Acute Care Hospital | Women

The current PPMS API allows only 4 specialty codes to be sent in a single query. We've made a request to add the ability to send at least 5 speciality codes to avoid manking multiple queries and negatively impacting performance. This change is also needed to support VAOS community care scheduling. 

  
### Risk factors
- PPMS Change request needs to be granted and implemented. 
- VA emergency services should be aligned with Facility type = VA health + Service type  = Emergency care. However, not all facilities have populated available services through Lighthouse. 
 
### Rejected Solutions

### Definition of Done
- Veterans can search for a single list containing both VA and community care emergency options to prepare for being in a new area (to visit, while snowbirding or through relocation)
- Veterans will understand they go to any local emergency room for care
- Veterans will understand the Facility Locator list contains VA emergency rooms or community care "in-network" -> not a comprehensive list
- Veterans will understand that "in-network" community emergency care facilities have benefits (ie: simplified billing) that non-network emergency rooms do not
- Veterans will understand how to learn more about the community care emergency benefit (explained elsewhere) 
- Veterans using assistive technology can achieve the stated goals above.  
- Existing functionality for searching VHA (including Vet Centers), VBA and NCA facilities will be maintained. 

### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._
