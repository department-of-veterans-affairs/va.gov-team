# _Vet Center Product Brief_

## Table of Contents

* [Vet Center Foundational information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#project-rationale)
  * [Vet Centers and Satellites](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#vet-centers-and-satellites)
  * [User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#user-stories--use-cases)
  * [What constitutes a Vet Center](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#what-is-a-vet-center)
  * [Vet Center Services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#vet-center-services)
  * [Eligibility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#eligibility)
* [MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#mvp)
* [Vet Center 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#vet-center-2.0)

## About the product
- **Product owner:** Michelle Middaugh
- **Business partner:** Jessica Schiefer, VHA Vet Center Communications Officer (Jessica.Schiefer@va.gov)

## Vet Center Foundational information
- Vet Centers are stand-alone, community-based counseling centers that guide Veterans and their families through many of the major adjustments in lifestyle that often occur after a Veteran returns from combat. They provide a wide range of social and psychological services, including professional counseling to eligible Veterans, service members, including National Guard and Reserve components, and their families.
- Vet Center benefits never expire so Veterans can be engaged in services off/on or continuously throughout the journey.
- Vet Centers are under the VHA umbrella but they are not integrated into VAMC health care systems. Vet Centers 
- Vet Centers are under-utilized and under-promoted benefit/service for Veterans, even through they are often the first touchpoint an active service member and/or family has with the VA.

### Vet Centers and Satellites
- As of April 2024, there are 300 Vet Centers with three new locations planned this year.
- To support their proactive outreach efforts, Vet Centers may also have
  - one or more Outstation(s). These satellite locations are smaller versions of a Vet Center, with at least one full-time counselor providing services in a VA owned/operated physical space. Outstations are recorded in VAST. As of April 2024, there are 21 Outstations with six new locations planned this year. 
  - one or more Community Access Points (CAPS). These locations operate as community access points, with staff rotating to provide services in community-donated space part-time. These satellites are not in VAST - Drupal is the source of truth for these locations. As of April 2024, there are 528 CAPs documented in Drupal.  
  - Mobile Vet Centers (MVC), used for outreach and community disasters. These are documented in VAST. As of April 2024, there are 83 MVCs. 

### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*
- As a Veteran, I need to search for services so that I can successfully transition from military to civilian life or find assistance after a traumatic event.
- As a family member of an active duty service member, I need to find supportive services for issues related to my loved one's military experience. 

### Vet Centers services
- Vet Center services leverage the VA service taxonomy in Drupal. Some services overlap across facility types, although the way in which a service is provided at a Vet Center may be different than as provided at a Medical Center (e.g., non-clinical nature of services, emphasis on counseling, evidence-based therapeutic modalities, referral and connection to other VA or community benefits and services) 
- In general, services include:
  - Individual and group counseling for Veterans, service members, and their families
  - Family counseling for military related issues
  - Bereavement counseling for families who experience an active duty death
  - Military sexual trauma counseling and referral
  - Outreach and education including PDHRA, community events, etc.
  - Substance abuse assessment and referral
  - Employment assessment & referral
  - VBA benefits explanation and referral
  - Screening & referral for medical issues including TBI, depression, etc.

### Eligibility
- Veterans
- Service members (including National Guard and Reserves)
- Family members

**Eligibility criteria is distinct from VA health care**
- Veterans can have any character of discharge, do not need to be enrolled in VA health care, and do not need to have a service-connected disability to receive services. 

## MVP
- Prior to the 2020-2021 modernization initiative, Vet Centers did not have an online presence beyond the minimal information found on the Facility Detail pages within Facility Locator. Staff relied on the partnership and social media accounts (etc) of community partners or Public Affairs Officers at VA Medical Centers to promote activities. 
- MVP Vet Center pages were intentionally very lean to avoid overwhelming staff who were new to the role of web editors. 
- Scope for the modernization initiative
  - establish Veteran-facing taxonomy for Vet Center services
  - design and build new front-end VA Vet Center facility pages focused on locations and services
  - develop national and local content maintenance capabilities
  - train VA local and national staff to create and maintain content.
- The first pages were published in 7/14/2021. The national roll-out was completed on 1/27/2023. 

More information about this initiative is available in the [2020-2021 modernization product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/vet-centers/initiatives/2020-2021-modernization). 

## Vet Centers 2.0
- Vet Center pages have not been updated in any meaningful way since the national roll-out was completed.
- Vet Center editors and leadership continue to request access to features and enhancements which had been considered out of scope for MVP.
- We have not been able to iterate on these pages due to competing priorities and limitations caused by the content build.
- As of April 2024, with Accelerated publishing nearly production ready, we can begin planning Vet Center 2.0, beginning with design.
- Scope for this iteration (prioritization to be informed by design and engineering)
  - Visual differentiation from VAMC pages
  - Discoverability of satellite locations and the ability to associate services 
  - Salesforce integration, limited to the connection to the digital intake form
  - Events
  - Navigation to support these new features

### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._

- [Veteran Journey Map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)
- [Initiatives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/initiatives)
  - [2020-2021 modernization product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/vet-centers/initiatives/2020-2021-modernization)
  - [Vet Centers 2.0 Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/initiatives/vet-centers-2.0/initiative-brief.md)
