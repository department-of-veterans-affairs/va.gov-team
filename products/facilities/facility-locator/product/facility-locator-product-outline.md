# VSA: Facility Locator Product Outline: WIP

GitHub Label: department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator
Zenhub label: vsa-facilities
Slack channel: DSVA/vsa-facilities

Product POCs: 
- VA.gov Lead: Chris Johnston 
- Product Owner: David Conlon 
- Supporting Product Owner: Andy Lewandowski 
- Facility API Product Owner: David Mazik 
- Product Manager: Michelle Middaugh 
# Table of Contents
- [Executive Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#executive-summary)
- User Problem Statement
- [Solution Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#solution-goals)
  - User Goals
  - Product Goals 
- [Assumptions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#assumptions)
- [Requirements and Constraints](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#requirements)
- [Discovery Takeaways](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#discovery-takeaways)
- Solution Approach
- [Value Propositions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#value-propositions)
  - User Value
  - Business Value
- [KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#kpis)
- [Implementation Information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#implementation-information)
  - Status
  - Solution Narrative
  - How to Access and Test
- [Resources and Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#resources-and-documentation)
- [Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/facility-locator-product-outline.md#team)
# Executive Summary
## User Problem Statement
As a Veteran, I'm unable to easily and quickly find information about facility locations and services.
# Solution Goals
## User Goals
- Veterans want to easily find information about facility locations and available services, using their own natural language.
- Veterans need the facility information to be complete, accurate and easy to understand. 
- Veterans want to see patient satisfaction ratings for health facilities.
- Veterans want to interact with one tool for all facility/services needs. 
- Veterans want to get directions to a facility. 
- Veterans want to find the mental health number for a facility. 
- Veterans want high-level information about facilities offering urgent and emergency care and other priority VA benefits and services. 
## Product Goals
- Eliminate bugs
- Improve performance
- Reach parity with all legacy Facility Locator tools
  - Sunset old systems to reduce the cost of maintaining multiple facility locators
- Complete consolidation of functionality 
  - Integrate urgent care facility and urgent care pharmacy facilities
  - Integrate legacy health care benefit pages (Community Care) into existing architecture/design and clarify each for user
  - Incorporate Mission Act-required facility drive time functionality
  - Incorporate Veteran-benefit eligibility information
- Improve data trasnparency and organization
  - Data-driven design to organize information
  - Integrate Facility API
  - Integrate services and facilities into UX
  - Implement VAMC facility page design
  - Implement Unified Services Taxonomy
# Assumptions
- Findings from user research are representative of Veterans across the Veteran journey.
# Requirements 
## In Scope
- Search functionality
- Display of facility details consumed by the Facility Locator. 
## Out of Scope
- Completeness and quality of data provided by data owners.
## Constraints
- Naming conventions are localized, rather than uniform
- Multi-disciplinary services
- Scattered data held in disparate systems
- Maintenance plan
- Reliability of data via GeoBISL
- Dependency on a separate VA business unit which owns the data
- Visibility of roadmap/timelines needed to coordinate around dependencies
# Discovery Takeaways
## Veteran Demographics
- 50% of Veterans are 65+ years of age
- Veterans have a lack of understanding about what is available. 
- This project is an opportunity to reconsider how and when the VA reaches out to veterans. Most receptive time might be a few months after “out-processing”. 
- Behavioral health support barriers
## [Google Analytics Baseline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/analytics-baseline.md)
## [Engineering Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/october-2019-discovery-summary.md#files-and-documents) 
The results of Discovery Sprints in October 2019 revealed the following
- Although Facility API is available, the Faciliy Locator is still using Vets-api. 
- There are a number of known usability and accessibility issues, many of which are related to the map feature. 
- Performance bottlenecks are attributed to Kong and the Community Care query process (which uses vets-api for a middleman with PPMS)
- A number of factors are negatively impacting data quality: 
  - Display and handling by Facility Locator
  - Inaccurate data sent via API
  - Missing data sent by API
  - Data organization, taxonomy and/or fields referenced 
## Product Discovery
The results of Discovery Sprints in October 2019 revealed the following
- A full list of facility locators to be evaluated for consolidation into the current Facility Locator tool. 
- The new Health Services Taxonomy will use 5 major categories of care: Primary Care, Mental Health, Specialty Care, Social Programs and Other and can be leveraged in future UX iterations. 
- In addition, mapping associates VA Specialty/Service/Programs with 1) patient friendly language, which will be useful in determining how to display the services and 2) stop codes, which will be useful in determining which locations provide the services.
- There are data discrepancies between facilities returned by searches in the legacy directory and current Facility Locator. 
## [Facility Locator User Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/user-research/user-research-findings.md)
Research regarding Veteran objectives and overall usability of the tool was conducted in November 2019 and found the following high level trends. 
- Veterans search by a specific service and by distance when choosing a location to visit. 
- Veterans need consistent information between online and physical locations and are skeptical of information presented on VA.gov. 
- The map is useful when it is interactive and when it shows landmarks relative to VA locations. 
- There is a need for multiple entry points to the Facility Locator tool. 
- There is a need to see some location information at a higher level. 
- Separate workflows and acccess to location information creates confusion when trying to find a VA location. 

Findings from a [usability and urgent care functionality study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/community-care/urgent-care/research/jun-2019/findings.md) conducted in June 2019 and a [Community Care study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/community-care) in May 2019 were also referenced. 
# Value Propositions
## User Value
- Enable faster access to care and more timely delivery of services
- By having an easy to use facility locator, Veterans can find facility information quicker and easier.
- Being able to search by service allows Veterans to quickly know what facilities can provide them care.
- Once scheduling is integrated, they will be able to quickly find a health facility and schedule an appointment.
- Improve the experience our users have when interacting with the VA.
  - There are over 45 different legacy facility locators across the VA. The new Facility Locator will improve the experience and allow the Veteran to search for all facilities on one map.
## Business Value
- Increase the use of VA’s self-service tools
- Have one tool that allows Veterans to find facilities, search for facilities by services and improve interaction with health facilities through scheduling and data transparency this project will increase the use of VA's self-service tools.
- Reduce cost of maintaining multiple locators across VA.
# [KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/kpi.md)
# Implementation Information
## Status
- Initial MVP tool launched 2016
- V2 launched: November 11th, 2016
- V3(June 2017): addition of wait time data and vet centers
- Community Care work: MVP milestone 10/23/2018
## [Solution Narrative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/solution-narrative.md)
## How to Access
- Live: https://www.va.gov/find-locations/
- Staging: https://staging.va.gov/find-locations/
- Front-end: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/facility-locator
- Backend: https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/controllers/v0/facilities
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities
# Resources and Documentation 
- [Discovery and Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research)
- Technical Documentation
- Product Specs
- [Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/design)
- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/roadmap.md)
- [Product Development Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md)
# Team
- VA.gov Lead: Chris Johnston
- Product Owner: David Conlon
- Supporting Product Owner: Andy Lewandowski
- Facility API Product Owner: David Mazik
- Facility API Product Manager: Jeff Dunn
- VSSC Analyst/Engineer: Chad Holmes 
- GEOBISL: Michael Villeneuve
- Product Manager: Michelle Middaugh
- VA UI Design Lead: Ryan Thurlwell
- UX/Design: Aricka Lewis
- Back End Engineer: Justin Ellis
- Front End Engineer: Gilbran Rodriguez
- VA Researcher(s)
- DevOps Engineer: Cameron Testerman
- Drupal CMS Team Product Manager: Stan Gardner
- Drupal CMS UX designer/engineer/content modeler: Kevin Walsh (VAMC Pittsburgh pilot)
- Drupal CMS Team Engineer: Ethan Teague
- API Team Engineers: Derek Hall, Nick Fasulo


