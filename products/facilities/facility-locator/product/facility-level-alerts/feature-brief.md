# _Facility Locator Feature Brief for Facility Level Alerts

This document will focus on the new Facility Level alert feature for the Facility Locator
## Table of Contents

[User Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#user-journey)

[User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#user-stories--use-cases)

[Project Rationale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#project-rationale)

[Project Scope and Scale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#project-scope-and-scale)

[Not in Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#not-currently-in-scope)

[Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md.md#measuring-success)

[Dependencies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#dependencies)

[Risk factors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#risk-factors)

[Rejected Solutions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#rejected-solutions)

[Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#definition-of-done)

[Key Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-level-alerts/feature-brief.md#key-links)

### User Journey
- Access to VA facilities and services may have been impacted by COVID-19 and Veterans need up to date information as part of Facility Locator's search results.

### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*
- As a Veteran, I need to...
  - view up-to-date operating status for VA facilities so that I do not visit a location which has closed to in-person visits. 
  - Understand how policies and service offerings may have changed due to COVID-19 so that I know how to receive the services I need. 

### Project Rationale
_Why should this project be a priority?_ 
- Access to VA facilities and services may have been impacted by COVID-19.  
- Veterans need up to date information as part of Facility Locator's search results so that they do not visit facilities which are unable to serve them. 
- The VA may activate 4th Mission, potentially opening facilities and services to civilians, making this information more critical. 

**Stakeholder/Business drivers**
- Urgency is being driven by the rapidly changing COVID-19 environment 

### Project Scope and Scale
_What's in and what's out?_

**MVP**
- This feature will leverage two concepts already in use at VHA facilities: operating status and operating notes. These fields will be made available in Drupal, pulled in by the Facilities API and included in Facilityy Locator search results. 

Focused on solving the following problems:
- Displaying a visual indicator for VA facility-level operating status and additional detail for related policies and services

To address the following user stories: 
- As a Veteran, I want reliable facility-level operating status so that I know where and how I can be served. 

**Future Iterations**
- Workflow iterations for finding detailed operating notes

### Not currently in scope

### Measuring Success
_How will we know if we are successful?_

**Objective 2: Deliver meaningful facility information**
- Key Result #1: A user can find  facility-specific operating status and policies during an emergency. 

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

**Team/Internal dependencies**
  
**Partner dependencies**
  - The CMS team is responsible for making operating status and notes available in Drupal.  
  - The Lighthouse team is responsible for pulling the status and notes from Drupal and including them in the Facilities API. 
  - The operating status and/or additional notes will be the responsibility of the facility owners themselves. 
  
### Risk factors
  - The Facility Locator will be unable to display the operating status unless it is available via the Facilities API. 
  
### Rejected Solutions
*What other approaches did we consider and why were they rejected?*

### Definition of Done
- The Veteran must be able to view an indicator of operating status at a facility level. 
- The Veteran must be able to view details related to the facility level operating status. 
- Operating status indicator is included in search results.
- 
### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._

