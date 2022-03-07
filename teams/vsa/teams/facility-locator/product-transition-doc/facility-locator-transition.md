# VSA Facility Locator product transition document | March 2022

<br>

> The purpose of this transition document is to outline the current state of VA.gov's Facility Locator. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

<br>

## Facility Locator product overview
The Facility Locator is an unauthenticated search tool which can be used to find VA facilities and services. It leverages the Facilities API for VA owned and operated facilities and connects to the Community Care Provider Profile Management System (PPMS) for VA network locations. Search results connect to modernized websites for VAMCs and Vet Centers or legacy detail pages which provide basic location and service information for VBA and cemeteries. Map functionality is provided by Mapbox.

## Facility Locator documentation and analytics
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)
- [Google Analytics dashboard](https://analytics.google.com/analytics/web/#/dashboard/Br4Erd4eRMePqyRXnLY5nA/a50123418w177519031p184317761/_u.date00=20210201&_u.date01=20210228&_.useg=builtin1,builtin28/)
- [Legacy DOMO dashboard](https://va-gov.domo.com/page/1129885232)
- [Mission Act DOMO Dashboard](https://va-gov.domo.com/page/1865233622?userId=1405356294) also contains community care search data from the Facility Locator
- [Mapbox](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/mapbox)

## Facility Locator product approach 

## Facility Locator product roadmap
Brief plain-language description of this product’s history and next steps

[2021 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/roadmaps/2021%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE.pdf)

### Now
- **Update Mapbox security** - Epic [#33890](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33890)
- **Implement VA health connect number on Facility Locator using CMS as source of truth** - Issue [#35477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33890)

### Next 
- **Implement new Lighthouse v1 services endpoint (CMS -> Lighthouse -> Facility Locator)** - Epic [31901](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31901)
  - **Includies revisiting Revisit FL front end direct connection to Lighthouse** - Epic [#19065](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19065)
    - Background in [API key discussion thread](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9716) 
- **Update VBA search experience to increase [VBA service information](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37632) and [VBA facility information](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37633) based on taxonomy research** - Epic [#4865](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4865)
  - [Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/commit/7cf1002b3974365c136481f8eb04ee6f225e77b0)

### Later
- **Service-centric(task-based)search** Epic [#13801](https://github.com/department-of-veterans-affairs/va.gov-team/issues/#13801)
- **Add ability to return non-VAST locations, such as Vet Ceter community access points and VA health mobile stops** - Epic [#28088](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28088)

## Artifacts
- [Product Guide](TBD)
- [Issue response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/issue-response.md)
- [Error states](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/error_states.md)
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/product)
- [Engineering folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering)
- [Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/design)
- [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/research)

## Github labels
The following Github labels were used for Facility Locator issues
# vsa-facilities +
- # frontend
- # front-end-facility-locator
- # backend
- # facility-locator
- # facility-locator-ppms
