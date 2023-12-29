# Feature Brief for _Service Level Operating Status_

This document will focus on the service level operating status feature within VA.gov's Facility Locator.

## Table of Contents
[User Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#user-journey)

[User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#user-stories--use-cases)

[Project Rationale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#project-rationale)

[Project Scope and Scale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#project-scope-and-scale)

[Not in Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#not-currently-in-scope)

[Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#measuring-success)

[Dependencies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#dependencies)

[Risk Factors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#risk-factors)

[Rejected Solutions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#rejected-solutions)

[Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#definition-of-done)

[Key Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2020-facility-level-alerts/service-level-feature-brief.md#key-links)


### User Journey
- Access to VA facility services may have been impacted by COVID-19 (or other emergent situation) and Veterans need up to date information as part of Facility Locator's search results.

### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*
- As a Veteran, I need to...
  - view up-to-date operating status for services offered at my local VA facility so that I do not visit a location which has closed to in-person visits. 
  - Understand how service offerings may have changed due to COVID-19 so that I know how to receive the services I need. 

### Project Rationale
_Why should this project be a priority?_ 
- Access to services may vary within an individual VA facility. 
- Veterans need up to date information as part of Facility Locator's detail pages so that they do not visit facilities which are unable to serve them. 

**Stakeholder/Business drivers**
- Urgency is being driven by the rapidly changing COVID-19 environment 

### Project Scope and Scale
_What's in and what's out?_

This feature is an expansion of functionality existing within the Facility Locator and VAMC websites. This functionality was initiated in support of COVID-19 but can be applied during other situations, such as natural disasters (hurricane, earthquake, flood) or other emergencies, such as active shooter. 

**Operating status and operating notes**

These two existing concepts are available at the VA facility level within Drupal and pulled in by the Facilities API. 

This status is displayed:
- Within Facility Locator search results
- On Facility Locator detail pages
- On VAMC pages 

Facility Locator detail pages and VAMC pages feature information about the health services available at an individual facility. 

**MVP**
- MVP will expand the concept of facility-level operating status to the health service level within an individual VHA facility by displaying a visual indicator and text details on VHA facility detail pages within Facility Locator
- MVP will also include initial content modeling for facility health services

**Focused on solving the following problem(s):**
- A given facility may be available to serve Veterans but one or more health services may have altered hours, policies or in-person availability. 

**To address the following user stories:** 
- As a Veteran, I need to understand how the health services at my local VAMC has been impacted by an emergency situation so that I know how and where I can access the benefit. 

**Future Iterations**
- This health service status could be applied to
  - Display on VAMC rollout pages
- The concept of service-level operating status could be expanded to Vet Centers, Benefit or Cemetery locations

### Not currently in scope
- Application of this service level operating status beyond VA health services

### Measuring Success
_How will we know if we are successful?_

**Objective 2: Deliver meaningful facility information**
- Key Result: Reduction in the number of calls to the Contact Center inquiring about facility and/or service availability. 

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

**Team/Internal dependencies**
[TBD]
  
**Partner dependencies**
  - The CMS team is responsible for making operating status and notes available in Drupal.  
  - The Lighthouse team is responsible for pulling the status and notes from Drupal and including them in the Facilities API. 
  - The operating status and/or additional notes will be the responsibility of the facility owners themselves. 
  
### Risk factors
  - The Facility Locator will be unable to display the operating status unless it is available via the Facilities API. 
  
### Rejected Solutions
*What other approaches did we consider and why were they rejected?*

### Definition of Done
- The Veteran must be able to view an indicator of operating status at a health service facility level. 
- The Veteran must be able to view details related to the operating status. 
- Implementation is without Priorty-1 508 defects. 

### Key Links
[Draft design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/draft%20service%20status%20on%20facility%20detail%20page.png)
