# VSA Facilities Team transition document | March 2022

<br>

> The purpose of this transition document is to outline the current state of VSA-Facilities product development. It serves as a "front door" to documentation and resources collected during the course of product design and development. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development.

<br>

## Table of Contents

[Product portfolio and context](#product-portfolio-and-context)

[Facility Locator](#facility-locator)

[VAMC modernized pages](#vamc-modernized-pages)

[Vet Center pages](#vet-center-pages)

[Artifacts](#artifacts)

[Research and design](#research-and-design)

[Engineering](#engineering)

[Contacts](#contacts)

## Product portfolio and context 
Our products connect Veterans to VA locations where they can receive services and prepare them to visit those locations. The Facilities team portfolio includes the following unauthenticated products
- Facility Locator
- VAMC modernized pages
- Vet Center pages

[2021 Portfolio roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/roadmaps/2021%20FACILITIES%20TEAM%20ROADMAPPLANNING%20TIMELINE.pdf)

## Product documentation
[Facility Locator transition documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/facility-locator-transition.md) 

### Facility Locator product overview
The Facility Locator is an unauthenticated search tool which can be used to find VA facilities and services. It leverages the Facilities API for VA owned and operated facilities and connects to the Community Care Provider Profile Management System (PPMS) for VA network locations. Search results connect to modernized websites for VAMCs and Vet Centers or legacy detail pages which provide basic location and service information for VBA and cemeteries. Map functionality is provided by Mapbox.

### Facility Locator documentation and analytics
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)
- [Google Analytics dashboard](https://analytics.google.com/analytics/web/#/dashboard/Br4Erd4eRMePqyRXnLY5nA/a50123418w177519031p184317761/_u.date00=20210201&_u.date01=20210228&_.useg=builtin1,builtin28/)
- [Legacy DOMO dashboard](https://va-gov.domo.com/page/1129885232)
- [Mission Act DOMO Dashboard](https://va-gov.domo.com/page/1865233622?userId=1405356294) also contains community care search data from the Facility Locator
- [Mapbox](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/mapbox)

### Facility Locator product approach 

### Facility Locator product roadmap
Brief plain-language description of this product’s history and next steps

#### Now
- **Update Mapbox security** 
  - Epic [#33890](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33890)
- **Implement VA health connect number on Facility Locator using CMS as source of truth**
  - Issue [#35477](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33890)

#### Next 
- **Implement new Lighthouse v1 services endpoint (CMS -> Lighthouse -> Facility Locator)**
  - Epic [31901](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31901)
  - **Includies revisiting Revisit FL front end direct connection to Lighthouse**
    - Epic [#19065](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19065)
    - Background in [API key discussion thread](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9716) 
- **Update VBA search experience to increase [VBA service information](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37632) and [VBA facility information](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37633) based on taxonomy research** 
  - Epic [#4865](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4865)
  - [Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/commit/7cf1002b3974365c136481f8eb04ee6f225e77b0)

#### Later
- Task based search 

## VAMC modernized pages

### VAMC modernized pages product overview
Modernized VAMC websites are comprehensive facility pages designed to meet the needs of Veterans, their families and caregivers. The pages provide the location details needed before visiting and easy access to top tasks and digital health tools. They are powered by a custom Drupal content management system (CMS). Content is differentiated across levels of governance - VHA national, VAMC system and VAMC local facility. During the roll-out, the Facilities team had responsibility for the front-end, from content API to Veteran-facing UI.  

### VAMC modernized pages documentation and analytics
- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers)
- [Front end product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/product/front-end-product-brief.md)
- [DOMO Content dashboard](https://va-gov.domo.com/page/426422632)

### VAMC modernized pages product approach 

###  VAMC modernized pages product roadmap
Brief plain-language description of this product’s history and next steps

#### Now
#### Next 
#### Later

## Vet Center pages

### Vet Center pages product overview
Vet Center pages were created to establish web presence for this group of underutilized VA facilities and the services they deliver. The Vet Center MVP was informed by a group of 10 Vet Center outreach specialists and was intentionally designed to be lean, providing information about Vet Center services and the locations where they are available.  They are powered by a custom Drupal content management system (CMS). Content is differentiated across levels of governance - Vet Center national and local Vet Center facility.

- [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/vet-centers)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product/product-brief.md)
- [DOMO Content dashboard](https://va-gov.domo.com/page/426422632) 

### Vet Center pages product approach 

### Vet Center pages product roadmap
Brief plain-language description of this product’s history and next steps

#### Now
#### Next 
#### Later

---

## Artifacts
- [Team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/charter.md)
- [Facilities team Mural](https://app.mural.co/t/vsa8243/r/1580427682078)
- [Other]()

## Research and design
- [**Research and design hub page**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/vsa-ux-transition-doc.md)
- [Individual feature/initiative hub page]()
- [Individual feature/initiative hub page]()
- [Individual feature/initiative hub page]()

## Engineering
- [Facility Locator documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering)
- [Facility Locator issue response and technical diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/issue-response.md)

<br>

## Contacts

- Dave Conlon| david.conlon@va.gov -- Product owner
- Jessica Schiefer | Jessica.Schiefer@va.gov -- Communications, RCS (Vet Center POC)
- Kevin Walsh | kevin.walsh@civicactions.com -- CMS team POC
- Nancy Smith | nancy.smith@oddball.io | Mapbox POC

## Meetings

- Meeting title
   - Purpose
   - Frequency
- Meeting title
   - Purpose
   - Frequency
- Meeting title
   - Purpose
   - Frequency

## Open questions

- Open question lorem ipsum dolor sit amet?
- Open question lorem ipsum dolor sit amet?
- Open question lorem ipsum dolor sit amet?

<br>

---
