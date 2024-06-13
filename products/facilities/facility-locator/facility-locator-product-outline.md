# Facility Locator Product Outline
>last updated Jan 2024

# Table of Contents
- [Product overview](#product-overview)
- [Product approach](#product-approach)
- [Value Propositions](#value-propositions)
- [Analytics](#analytics)
- [Roadmap](#roadmap)
- [Scope and assumptions](#scope-and-assumptions)
- [Artifacts](#artifacts)
- [Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/facility-locator-product-outline.md#team)

# Product overview
The Facility Locator is an unauthenticated search tool which can be used to find VA facilities and services. It leverages 
- the public-facing Lighthouse Facilities API for VA owned and operated facilities
- a separate, external and non-public database, Provider Profile Management System (PPMS) for Community Care (VA network) locations
- map functionality from [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/)

Search results connect to modernized websites for VAMCs and Vet Centers or legacy detail pages which provide basic location and service information for VBA and cemeteries.

## History
The Facility Locator is the newer version of VA's Legacy directory and was previously powered by the non-public-facing Vets API. 
- Initial MVP tool launched 2016
- V2 launched: November 11th, 2016
- V3: June 2017: addition of wait time data and Vet Centers
- Community Care work: MVP milestone 10/23/2018
- 2023: Added PPMS Core Provider training data to vets-api (but not yet exposed to FE)

## Product approach 
With regard to new features and functionality, we use a data-driven approach to prioritize
- opportunities to display facility data which is accurate, meaningful, and relevant to Veteran decision-making
- search experiences that are mobile-first, accessibility-first and consistent with Veteran mental models

Since 2019, our mission has been to consolidate the many, many disparate finders and locator tools into one facility search tool. We will sunset the "Can't find what you are looking for?" escape hatch below the map once all searches can be performed by the Facility Locator.

## Value propositions
### Problem Statement
As a Veteran, I need to search for locations where I can receive VA benefits and services. 
### Value to Veterans
- By providing a single tool where Veterans can easily find information about facility locations and available services, we can enable faster access to care and more timely delivery of services.
- By providing complete, accurate and easy to understand information, we can prepare Veterans to visit a convenient location and receive services. 
### Value to business
- Increase the use of VA’s self-service tools
- Reach parity with all legacy Facility Locator tools and sunset old systems to reduce the cost of maintaining multiple facility locators
- Improve the experience Veterans have when interacting with the VA 
- Improve performance

## Analytics
- [Baseline data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/analytics/baseline-KPIs.md)
- [Annual data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/analytics/baseline-KPIs.md)
- [Quarterly data for 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/analytics/2023_data.md)

## Roadmap
**Historical** 
- [2021 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/roadmaps/2021%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE.pdf)
- [1Q 2022 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/images/2022%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE%20-%20Unnamed%20Area%20(1).pdf)

**~3Q2023**
- Test coverage and monitoring gap analysis

**~4Q2023**
- Enable consumers of Vets-API to leverage Lighthouse v1 functionality
  - Update Vets-API to Lighthouse v1 [#15000](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15000) 
- Implement Lighthouse v1, enabling the use of the VA service taxonomy and CMS for VA health and Vet Center service searches
  - Update Facility Locator search by service to allow plain language search [#14993](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15000)
- Enable Veterans to search for Community Care providers with training certification
  - Facility Locator iteration: Provider core training / PPMS data [#14225](https://app.zenhub.com/workspaces/sitewide-facilities-639f5253e4b702a32376339e/issues/gh/department-of-veterans-affairs/va.gov-cms/14225)
    - Blocked until adequate data is available
  
**Later**
- Add search by state [#14915]

## Scope and assumptions  
### In Scope
- Search functionality
- Display of facility details consumed by the Facility Locator.
- Connection to modernized facility pages
### Out of Scope
- Completeness and quality of data provided by data owners.
### Assumptions
- Findings from user research are representative of Veterans across the Veteran journey.
### Constraints
- Naming conventions are localized, rather than uniform
- Multi-disciplinary services
- Scattered data held in disparate systems
- Dependency on a separate VA business unit which owns the data
- Visibility of roadmap/timelines needed to coordinate around dependencies
- Community care searches rely on a complicated taxonomy based on NUCC codes. Efforts to partner with a clinical SME to simplify and flatten the service list have not gotten consistent or sustained traction.

## Access
- Live: https://www.va.gov/find-locations/
- Staging: https://staging.va.gov/find-locations/
- Front-end: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/facility-locator
- Backend: https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/controllers/v0/facilities
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities

## Artifacts
[Key resources](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/README.md#key-resources)

## Team
Product POCs 
- Product Owner: Michelle Middaugh
- Facility API/Lighthouse Product Owner: Dawn Pruitt 
- Product Manager: Jane Xiong 
- Zenhub label: Facilities, Facility Locator
- Slack channel: #sitewide-facilities
