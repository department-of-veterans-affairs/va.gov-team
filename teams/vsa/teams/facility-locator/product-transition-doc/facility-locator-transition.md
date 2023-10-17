# VSA Facility Locator product transition document | March 2022

NO LONGER MAINTAINED

<br>

> The purpose of this transition document is to outline the current state of VA.gov's Facility Locator. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

<br>

## Table of Contents

[Product Overview](#facility-locator-product-overview)

[History](#history)

[Documentation and analytics](#documentation-and-analytics)

[Contacts](#contacts)

[Product approach](#product-approach)

[Product roadmap](product-roadmap)

[Artifacts](#artifacts)

[Github labels](#github-labels)

## Facility Locator product overview
The Facility Locator is an unauthenticated search tool which can be used to find VA facilities and services. It leverages the public-facing [Lighthouse Facilities API](https://developer.va.gov/explore/facilities) for VA owned and operated facilities. A separate, external and non-public database, Provider Profile Management System (PPMS), provides Community Care (VA network) locations. Search results connect to modernized websites for VAMCs and Vet Centers or legacy detail pages which provide basic location and service information for VBA and cemeteries. Map functionality is provided by [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/). 

The Community care search typeahead uses a complicated taxonomy based on NUCC codes. Efforts to partner with a clinical SME to simplify and flatten the service list have not gotten consistent or sustained traction. 

### History
It is the newer version of [VA's Legacy directory](https://www.va.gov/directory/guide/home.asp) and was previously powered by the non-public-facing Vets API. Our mission in 2019 was to consolidate the many, many disparate finders and locator tools into one facility search tool. We plan to sunset the "Can't find what you are looking for?" escape hatch below the map once all searches can be performed by the Facility Locator. 

## Facility Locator documentation and analytics
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)
- [Google Analytics dashboard](https://analytics.google.com/analytics/web/#/dashboard/Br4Erd4eRMePqyRXnLY5nA/a50123418w177519031p184317761/_u.date00=20210201&_u.date01=20210228&_.useg=builtin1,builtin28/)
- [Legacy DOMO dashboard](https://va-gov.domo.com/page/1129885232)
- [Mission Act DOMO Dashboard](https://va-gov.domo.com/page/1865233622?userId=1405356294) also contains community care search data from the Facility Locator
- [Mapbox](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering/mapbox)
- [Error states](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/error_states.md#error-states-and-steps-for-resolution)
- [Issue response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/technical-documentation.md#incident-response)
- [Process for reporting inaccurate data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/reporting-inaccurate-data.md)
- [PPMS forum](https://dvagov.sharepoint.com/sites/OITDSOSPMPPMSDWS)

## Contacts
Person | Email | Role |
---| --- | --- |
Dave Conlon | david.conlon@va.gov | Product owner
Nancy Smith | nancy.smith@oddball.io | Mapbox POC

## Facility Locator product approach 

With regard to new features and functionality, we prioritize
- opportunities to display facility data which is accurate, meaningful, and relevant to Veteran decision-making
- search experiences that are mobile-first, accessibility-first and consistent with Veteran mental models

## Facility Locator product roadmap
 
[2021 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/roadmaps/2021%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE.pdf)
[1Q 2022 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/images/2022%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE%20-%20Unnamed%20Area%20(1).pdf)

The most critical path items are listed below but do not represent the total of issues on the backlog.

### Now

- **Update Mapbox security** 
    - Epic [#33890](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33890) -> _currently blocked. See [Mapbox token conversion proposal](https://vfs.atlassian.net/wiki/spaces/FTT/pages/2139783260/MapboxToken+Conversion+Guide+Proposal+draft)_
- **Implement VA health connect number on Facility Locator using CMS as source of truth** 
   - Issue [#38962](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38962)

### Next 

- **Implement new Lighthouse v1 services endpoint (CMS -> Lighthouse -> Facility Locator)** 
  - Epic [31901](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31901)
  - Revisit FL front end direct connection to Lighthouse 
    - Epic [#19065](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19065) 
    - [Facility Locator-Lighthouse integration document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/facility-locator-integration-with-lighthouse.md)
- **Update VBA search experience to increase VBA service and facility information**
   - Epic [#4865](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4865)
   - Increase VBA service information [#37632](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37632)
   - Increase VBA service information [#37633](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37633)
   - Facility Locator expected behavior for VBA "all services" searches [#38433](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38433)
   - [Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/76fa860bb3ac62ad58c94c2f2b480d5296c5a1c8/products/facilities/facility-locator/research/user-research/services-benefits-taxonomy-USERS/VBA-service-labels-usability-research-findings.md)
- **Restore pagination for urgent care and emergency care** 
   - Issue [#32760](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31901)
- **Implement more robust monitoring**
   - Epic [#10870](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10870)

### Later

- **Service-centric (task-based) search**
   - Epic [#13801](https://github.com/department-of-veterans-affairs/va.gov-team/issues/#13801) | [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/80d947c076470728ec4bf84275d32769f1a75545/products/facilities/facility-locator/service-centric-search/initiative-brief.md)
- **Add ability to return non-VAST locations, such as Vet Center community access points and VA health mobile stops** 
   - Epic [#28088](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28088)
- **PPMS Taxonomy Mapping**
   - Epic [#9995](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9995)
- **Telehealth data availability in PPMS**
   - Epic [#17946](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17946)
- **Online scheduling API**
    - EPIC [#27454](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27454)

## Artifacts
- [Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/Facility-Locator-product-guide-updated%2003.04.22.pdf) | March 2022
  - [Link to Product Guide Word version](https://dvagov-my.sharepoint.com/:f:/r/personal/suzanne_middaugh_va_gov/Documents/Facility%20Locator?csf=1&web=1&e=3BaPie) _requires VA network connection_
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/product)
- [Engineering folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering)
- [Research and design hub page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/vsa-ux-transition-doc.md) | March 2022
- [Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/design)
- [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research), beginning with this [README summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/README.md)
