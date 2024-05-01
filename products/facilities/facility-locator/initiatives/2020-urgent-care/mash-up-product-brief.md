# _Facility Locator Urgent Care Mash-up Feature Brief_

This document will focus on the urgent care mash-up iteration for the Facility Locator 
## Table of Contents

[User Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#user-journey)

[User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#user-stories--use-cases)

[Project Rationale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#project-rationale)

[Project Scope and Scale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#project-scope-and-scale)

[Not in Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#not-in-scope)

[Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#measuring-success)

[Dependencies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#dependencies)

[Risk factors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#risk-factors)

[Rejected Solutions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#rejected-solutions)

[Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#definition-of-done)

[Key Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-urgent-care/mash-up-product-brief.md#key-links)

### User Journey
- Following the Mission Act, eligible Veterans have access to urgent care benefits in their community and need help knowing where and how to receive care. 

### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*
- As a Veteran, I need to find the appropriate urgent care facility for my situation so I can use my benefits for care.

### Project Rationale
_Why should this project be a priority?_ 
- [User research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/urgent-care/research-findings.md) indicates Veterans want to see all urgent care facilities in a single list, rather than searching for VA locations or Community urgent care locations separately. 
- Analytics show search refinements have unexpectedly increased as a result of UX changes released as part of MVP. This may indicate that results are not as expected causing Veterans to search both service types. 
  - Between Oct 16, 2019-Nov 14, 2019, the rate of search refinements = 3.71% CCare vs 2.20%  health 
  - Between Feb 1, 2020-March 10, 2020 the rate of search refinements = 4.95% CCare provider, 9.75% urgent care, 15.22% pharmacy vs 2.4% health 


**Business drivers**
- The roadmap for Facility Locator moves toward a service-centered search experience, agnostic of the facility type. This mash-up is the first step down that path. 

**Findings from research conducted December 2019**
- Veterans are not aware of the type of care they can receive at urgent care facilities. There is a general lack of communication/education around the difference between community care providers and VA health care
- When prompted to choose an urgent care location to stitch a wound, a majority of participants mentioned that they would visit an ER or VA facility and not an Urgent Care location.
- Participants were drawn to location input and dropdowns and did not choose to filter their search results.
- Overlapping benefits cause confusion when visiting in-network providers.
- Internal language and inconsistent labeling cause users to hesitate when looking into facilities.
- Participants did not understand the difference between "retail" urgent care and urgent care until they were given a definition and example treatments

### Project Scope and Scale
_What's in and what's out?_

This mash-up iteration will return all urgent care locations, regardess of service type. This will require:
- Backend logic changes to return community care (PPMS) results and VA facilities (vets-API) within single results list.
- Frontend UX changes to remove the service type selection when Veterans select "Urgent care" as VA facility type. 
- Frontend UX changes will need to be made to appropriately display the community care alert for relevant locations only (not VA facilities). 
- Label changes to designate facility types within search results. 

### Not currently in scope
- Emergency care
- Remaining Community Care services

### Measuring Success
_How will we know if we are successful?_

**Key Result #1: Reduce urgent care search refinements to parity with community care refinements or better by July 1, 2020.**
Baseline search refinement rates
| Time period | CCare | Urgent care | Health |
| --- | --- | --- | --- |
| Oct 16, 2019 - Nov 14, 2019 |  3.71%  | | 2.2% | 
| Feb 1, 2020 - March 10, 2020 |  4.95%  | 9.75%  | 2.4% | 
| April 2020 |  5.97%  | 5.91%  | 2.61% | 
| May 2020 |  6.39%  | 5.55%  | 2.74% | 


**Key Result #2: User satisfaction will improve**
Average 5 star user satisfaction rating
| Time period | Average FL rating | Average VA.gov rating |  
| --- | --- | --- |
| March 2020 | 2.875 | 3.15 |
| April 2020 | 3.07 | 2.84 |
| May 2020 | 3.09 | 3.37 |

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_
  
### Risk factors
 
### Rejected Solutions

### Definition of Done
- The Veteran must be able to successfully search for an urgent care facility.
- High level location information for VA facilities and community urgent care locations appears in a single list of search results.
- The Veteran can view the name, address, phone number, directions, hours of operation and services offered for the chosen facility. 
- The Veteran can differentiate between VA facilities and community urgent care locations. 
- If the Veteran plans to visit a community urgnet care facility, he/she can access urgent care benefit information to take to the visit. 
- Veterans using assistive technology can achieve the stated goals above.  
- Existing functionality for searching VHA (including Vet Centers), VBA and NCA facilities will be maintained. 

### Key Links
- [UI: Consistent community urgent care results, regardless of path #9615](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9615)
- [Add to query parameters for FL troubeshooting #19366](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19366)
- [Merge and sort urgent care mash-up results on the FL front end #19959](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19959)
