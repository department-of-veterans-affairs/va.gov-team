# VAMC Pages Product Outline
>last updated September 2023

# Table of Contents
- [Product overview](#product-overview)
- [Product approach](#product-approach)
- [Value Propositions](#value-propositions)
- [Relevant initiatives](#relevant-initiatives)
- [Analytics](#analytics)
- [Roadmap](#roadmap)
- [Scope](#scope)
- [Artifacts](#artifacts)
- [Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/product/vamc-product-brief.md#team)

# Product overview
Modernized VAMC websites are comprehensive facility pages designed to meet the needs of Veterans, their families, and caregivers. The pages provide the location details needed to prepare a Veteran to visit and easy access to top tasks and digital health tools. They are powered by a custom Drupal content management system (CMS). Content is differentiated across levels of governance - VHA national, VAMC system and VAMC local facility. 

Additional inputs are
- the public-facing Lighthouse Facilities API for VA owned and operated facilities
- the VA service taxonomy within Drupal 

## History
Research indicated that the legacy Teamsite websites were not meeting the need of users. VHA Digital Media partnered with OIT Digital Experience Product Office to research, design, test, and build the new website design with Veterans, family members, caregivers, and patient advocates (900 participants over 9 months). The new website design  focused on top tasks and content that Veterans, families, and caregivers need most. Although the legacy webistes had hundreds of pages of content, 5-10 pages generated most of the traffic. Website analytics for the old websites revealed that users are mostly looking for health services, facilitiy services, contact information, and appointments and pharamcy information--all parts of the new website that have been prioritized in the redesign. 

The release of these pages began with the soft launch of the new Pittsburgh health care in September 2019. Initial veteran feedback and research was conducted on the Pittsburgh health system site in November/December 2019. National roll-out was completed in December 2021, with the exception of Lovell federal health and Manilla Outpatient Clinic. These pages intersect with the Facility Locator by linking to search results and replaced the facility detail pages.

This upgrade project was the collaboration of multiple product teams within VSA, including

- CMS Team: responsible for Drupal "core" (stops at content API) and editorial front-end
- VAMC Upgrade Team: responsible for content creation and mapping
- Facilities Team: responsible for Veteran-facing front end (from content API to Veteran-facing UI) Ownership of the front end work was transferred from the Public Websites team to the Facilities team following a decision to implement on VAMCs only (rather than globally).

## Product approach 
As the roll-out has been completed, responsibility for content and field staff communication is being transitioned to VHA Digitial Media. Now that we understand the full scope of the pages and how they have been used by editors, we are focused on

- opportunities to improve the Veteran experience, such as navigation and deep links for Cerner facilities
- opportunities to reduce duplicate content and ensure consistency, such as content hardening
- opportunities to partner with the CMS team to leverage facility and service data for use across the ecosystem

## Value propositions
### Problem Statement
As a Veteran, I need to learn more about my VA medical facility so that I understand what services are available and am prepared to visit. 
### Value to Veterans
- By providing accessible and easily navigable pages where Veterans can easily find information about facility locations and available services, we can enable faster access to care and more timely delivery of services.
- By providing complete, accurate and easy to understand information, we can prepare Veterans to visit a convenient location and receive services. 
### Value to business
- Increase the use of VA’s self-service tools
- Improve the experience Veterans have when interacting with the VA 
- Improve performance

## Relevant initiatives
- Lovell Federal health care
  - [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2022-2023-lovell/lovell-initiative-brief.md)
- Community Living Centers
  - [README](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/community-living-centers)
- Domiciliaries
  - [README](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/domiciliaries)
- Mobile health clinics
  - [Feature document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/feature-docs/mobile-health-clinics.md)
- VA health connect and other communication methods
  - [Feature document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/feature-docs/va-health-connnect-communications.md)

## Analytics
- [Baseline data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/analytics/vamc-baseline-analytics.md)
- [Annual data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/analytics/vamc-data.md)

## Roadmap
**Historical** 
- [2021 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/roadmaps/2021%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE.pdf)
- [1Q 2022 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/images/2022%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE%20-%20Unnamed%20Area%20(1).pdf)

**~3Q2023 Priority initiatives**
- Support migration from Lighthouse v0 to v1
- Iteration on VAMC operating status and VAMC banner alerts
- Lovell toggle adjustment
- Flagged facilities

**~4Q2023 Priority initiatives**
- VA police transparency #14327
- Make Facility API V1 avalilable to VetsAPI for other consumers (without sunsetting Facility API V0) #15344
- Editable facility level mental health phone number #9717
- Research to support Health chat

**Later**
- CMS is the source of truth for Mental health numbers 

## Scope 
### In Scope
- Front end displays and accessibility
### Out of Scope
- Completeness and quality of data provided by data owners.

## Artifacts
Key resources(TBD)

## Team
Product POCs 
- Product Owner: Michelle Middaugh
- Facility API/Lighthouse Product Owner: Dawn Pruitt 
- Product Manager: Jane Xiong 
- Zenhub label: Facilities, VAMC, va.gov frontend, Drupal engineering
- Slack channel: #sitewide-facilities
