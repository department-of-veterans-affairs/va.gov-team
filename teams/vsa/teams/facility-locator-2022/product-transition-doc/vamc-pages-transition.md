# VSA VAMC pages product transition document | March 2022

<br>

> The purpose of this transition document is to outline the current state of VA.gov's modernized VAMC pages. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

<br>

## Table of Contents

[Product Overview](#VAMC-modernized-pages-product-overview)

[History](#history)

[Contacts](#contacts)

[Documentation and analytics](#documentation-and-analytics)

[Product approach](#product-approach)

[Product roadmap](product-roadmap)

[Artifacts](#artifacts)


## VAMC modernized pages product overview
Modernized VAMC websites are comprehensive facility pages designed to meet the needs of Veterans, their families and caregivers. The pages provide the location details needed before visiting and easy access to top tasks and digital health tools. They are powered by a custom Drupal content management system (CMS). Content is differentiated across levels of governance - VHA national, VAMC system and VAMC local facility. During the roll-out, the Facilities team had responsibility for the front-end, from content API to Veteran-facing UI.  

### History

Research indicated that the old VAMC websites were not meeting the need of users. VHA Digital Media partnered with OIT Digital Experience Product Office to research, design, test, and build the new website design with Veterans, family members, caregivers, and patient advocates (900 participants over 9 months). The new website design is focused on top tasks and content that Veterans, families, and caregivers need most. Of the hundreds of content pages each old VAMC website had, users were only going to about 5-10 pages. Website analytics for the old websites revealed that users are mostly looking for health services, facilitiy services, contact information, and appointments and pharamcy information--all parts of the new website that have been prioritized in the redesign. The release of these pages began with the soft launch of the new Pittsburgh health care in September 2019. Initial veteran feedback and research was conducted on the Pittsburgh health system site in November/December 2019. National roll-out was completed in December 2021, with the exception of Lovell federal health and Manilla Outpatient Clinic. These pages intersect with the Facility Locator by linking to search results and replaced the facility detail pages.

This upgrade project has been the collaboration of multiple product teams within VSA, including
- CMS Team: responsible for Drupal "core" (stops at content API) and editorial front-end
- VAMC Upgrade Team: responsible for content creation and mapping
- Facilities Team: responsible for Veteran-facing front end (from content API to Veteran-facing UI) _Ownership of the front end work was transferred from the Public Websites team to the Facilities team following a decision to implement on VAMCs only (rather than globally)._

## Contacts
Person | Email | Role |
---| --- | --- |
Dave Conlon | david.conlon@va.gov | Product owner
Jenny Heiland-Luedtke |jennifer.heiland-luedtke@va.gov | Deputy Director, VHA Digital Media
Kevin Walsh | Slack @Kevin Walsh | Sitewide CMS Product Manager
Clarence Maeng | Slack @Clarence Maeng | CMS Delivery Manager

## Documentation and analytics
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers)
- [Front end product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-vamc-upgrade/front-end-product-brief.md)
- [VAMC Transition documents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/vamc/vamc_transition_documents/VAMC_transition_final.md) | VAMC upgrade team | March 2022
- [Web Modernization Run Book](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/vamc/vamc_transition_documents/Web_Modernization_Run_Book.md)
- [DOMO Content dashboard](https://va-gov.domo.com/page/426422632)

## Product approach 

As the roll-out has been completed, responsibility for content and field staff communication is being transitioned to VHA Digitial Media. Now that we understand the full scope of the pages and how they have been used by editors, we are focused on 
- opportunities to improve the Veteran experience, such as navigation and deep links for Cerner facilities
- opportunities to reduce duplicate content and ensure consistency, such as content hardening 
- opportunities to partner with the CMS team to leverage facility and service data for use across the ecosystem

##  Product roadmap

[2021 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/roadmaps/2021%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE.pdf)
[1Q 2022 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/images/2022%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE%20-%20Unnamed%20Area%20(1).pdf)

The most critical path items are listed below but do not represent the total of issues on the backlog.


### Now
- **Address any accessibility defects found during** [Accessibility Production Review #36974](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36974)
- **Implement design iterations for hardened pages** including
  - **Medical records** - Epic [#37365](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37365)
    - Includes **Cerner link** [#35947](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35947)
  - **Billing and insurance** - Epic [#37366](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37366)
- **Lovell federal health care** - Epic [#34022](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34022) | [**Initiative brief**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2022-2023-lovell/lovell-initiative-brief.md)
    - _next up: research on dual eligibles to validate design for switching between DoD and VA experiences_
- **VAMC options for Veteran to communicate with the VA** - Epic [#26770](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26770)
    - _next up: Veteran research_
      - [_research plan_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/VAMC-communications-methods/Research-Plan.md) 
      - [_conversation guide_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/VAMC-communications-methods/Conversation-Guide.md)
- **Support for Cerner roll-out/EHRM single source of truth** - Epic [#31900](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31900)
    - Roseburg roll-out - planned for June 13, 2022
    - Columbus roll-out (TBD)

### Next 
- **Representing mobile VHA locations** - Epic [#21781](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21781) | [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2021-vamc-vha-mobile-redesign/initiative-brief.md)
- **Re-evaluate left nav menu (especially with regard to programs and locations)** - Epic [#9946](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9946) and [#30770](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30770)
- **Health service modalities (telehealth, virtual, mobile, etc)**

### Later

## Artifacts

### Product

- [VA Medical Centers README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/README.md#va-medical-centers-readme)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/product)
- [CMS VAMC Knowledge Base](https://prod.cms.va.gov/help/vamc)
- [CMS product sheets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/VA-CMS-Product-Sheets.pdf) | December 2020
- [Service taxonomy](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/services-taxonomy)

### Engineering
- [VA.gov-cms repo](https://github.com/department-of-veterans-affairs/va.gov-cms) contains docs for developers working on the CMS codebase.
- [VAMC product demo environment training](VACMS-product-demo-environments-training.pdf)

### Design-research
- [Research and design hub page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/vsa-ux-transition-doc.md) | March 2022
- [Lovell federal health feature document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/feature-docs/lovell-federal-health.md) | March 2022
- [Mobile health clinics feature document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/feature-docs/mobile-health-clinics.md) | March 2022
- [VA health connect communications feature document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/feature-docs/va-health-connect-communications.md) | March 2022
- [Discovery folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/discovery)
- [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/research)
- [Research summary](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/research#vamc-research-readme)
- [CMS research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms/research)

### CMS
- [Working with CMS team - Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/working-with-cms-team.md#working-with-cms-team---rules-of-engagement-roe)
- [Content management system README](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/cms#content-management-system)


