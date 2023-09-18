# Facility Locator Product Outline
>last updated September 2023

# Table of Contents
- [Product overview](#product-overview)
- [Product approach](#product-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)
- [Roadmap](#roadmap)
- [Scope and assumptions](#scope-and-assumptions)
- [Artifacts](#artifacts)
- [Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#team)

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

## KPIs

## Roadmap

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

## Team
Product POCs 
- Product Owner: Michelle Middaugh
- Facility API/Lighthouse Product Owner: Dawn Pruitt 
- Product Manager: Jane Xiong 
- Zenhub label: Facilities, Facility Locator
- Slack channel: #sitewide-facilities

## Artifacts
- [Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/Facility-Locator-product-guide-updated%2003.04.22.pdf) | March 2022
  - [Link to Product Guide Word version](https://dvagov-my.sharepoint.com/:f:/r/personal/suzanne_middaugh_va_gov/Documents/Facility%20Locator?csf=1&web=1&e=3BaPie) _requires VA network connection_
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/product)
- [Solution Narrative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/solution-narrative.md)- [Engineering folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering)
- [Research and design hub page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/vsa-ux-transition-doc.md) | March 2022
- [Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/design)
- [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research), beginning with this [README summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/README.md)# Discovery Takeaways
- [Discovery and Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research)
- Technical Documentation
- Product Specs
- [Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/design)
- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/roadmap.md)
- [Product Development Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md)
