# VBA Regional Offices Product Outline 

[Overview](#overview)

[Problem statement](#problem-statement)

[Description](#description)

[Approach](#approach)

[Assumptions](#assumptions-and-early-discussions)

[MVP Scope](#mvp-scope)

[Timeline](#timeline)

## Overview 
VBA Regional Office sites will be modernized, similarly to the modernization of VAMC sites and Vet Center sites. Modernized VBA sites will leverage existing CMS design patterns, improve accessibilty, provide an efficient moblie experience, and give Veterans and beneficiaries seeking access to their benefits more consistent, accurate, and timely information.

## Problem Statement
The legacy VBA RO sites are authored in Teamsite, have a dense and unweidly presentation, are not mobile optimized, are prone to accessibilty issues, and do not have a rigorous content model. 
How might we leverage what we've learned from VAMC and Vet Center modernization, and apply some of the same processes to produce RO pages consistent with other pages in the modernized experience. 

## Desired User Outcomes
* Veterans and beneficiaries visiting RO sites can easily find accurate and timely information they need to plan for a visit and to access their benefits
* Veterans and beneficiaries with accessiblity issues can navigate the site and find the answers they need
* Veterans and beneficiaries on mobile devices can accomplish all the tasks available on the desktop experience
* Veterans and beneficiaries have access to a consitent experience. Visiting one RO site informs visiting any other RO site, vistors know where to find the information they're looking for and do not have to learn new patterns at a different RO site

## Undesired User Outcomes
* Veterans and beneficiaries become frustrated using a RO website
* Site information is inaccurate or out of data
* Veterans and beneficiaries can not find the information they need to plan a visit
* Veterans and beneficiaries can not easiliy find a facility that offers the benefit they are looking for near them
* Veterans and beneficiaries travel farther than needed because they were not easily able to determine a facility nearer them offered the benefit they wanted
* Veterans and beneficiaries make an unnecessary visit to a VBA facility when they would have preferred to have their need met with online information or an online tool

## Desired Business Outcomes
- Reduced 508 issues 
- Decreased cases for the call center 
- CSAT consistent with or better than other pages in the modernized experience
- Well-defined services and consistent COPE text for VBA services 

## Undesired Business Outcomes
- Increased 508 issues
- Increased call center cases 
- CSAT lower than the average of other pages in the modernized experience
  
## Description

This is the new VA.gov facility product for VA's Facilities that offer Benefits Services

- VBA runs 58 Regional Offices, with hundreds of child facilities (i.e., intake sites, VocRehab sites, Vet Success on Campus sites, and others?)
- Like VAMCs, ROs are a network of facilities; the Regional Office is the parent facility, and other benefits facilities are children
- VBA's facilities are unique because they provide VA benefits help for all three administrations (i.e., they will help you apply for health care and get burial benefits)

### **Business partners:**
- Lew Boone, Interim Chief (9/1/2023), Digital Media and Design, VBA Strategic Engagement (lewis.boone@va.gov)
- Tanekwa Bournes, VBA Strategic Engagement & VBA facilities lead (tanekwa.bournes@va.gov) 
- Kenyonna Power, VBA Strategic Engagement (kenyonna.power@va.gov)
- Derek Hommema, VBA Office of Field Operations (Derek.Hommema@va.gov)
- Brigette Murray, VBA Office of Field Operations (Brigette.Murray@va.gov)

### **VBA Stakeholders:**
- Laura O'Shea, Office of Policy Overview at VBA (laura.oshea@va.gov)
- Jamie Statton, Office of Policy Overview at VBA (jamie.statton@va.gov)

### **Pilot MVP editors:**
as of 11/6/2023 from Tanekwa to Michelle

#### Albuquerque
- Michael.Nelson9@va.gov
- Cesar.Romero1@va.gov
- Scott.Lajiness@va.gov

#### Honolulu
- Aiko.Shibuya@va.gov
- Eileen.Asing@va.gov
- Melynn.McWilliams@va.gov

#### Houston
- Daniel.Irizarry@va.gov
- Thomas.Gibson@va.gov

#### National Capital Region
- Garcia.Williams@va.gov

### **Points of Contact from VBA RO pilot locations**
[VBA Pilot Sites Selection.xlsx](https://dvagov.sharepoint.com/:f:/s/VBAVA.govmodernization/ElGAcEivodBFn5vZuP69aFUBpanKqq02M4JLkimn5zMfiQ?e=TJh0ir) [VA SharePoint]

[08/21/23 list on Teams](https://dvagov.sharepoint.com/:x:/r/sites/SitewideFacilitiesTeam-FacilitiesProductSync/_layouts/15/Doc.aspx?sourcedoc=%7B75BA1C30-612E-47BF-8FDA-A9683892163F%7D&file=VBA%20MVP%20contacts%20August%202023.xlsx&action=default&mobileredirect=true)
| Houston          | 1/2       | Name                        | Email                   |
| ---------------- | ---------- | -------------------------- | ----------------------- |
| Anchorage        | Primary    | Kathleen “Kathie” Warren   | kathleen.warren1@va.gov |
| Anchorage        | Secondary  | vacant           |  |
| Albuquerque      | Primary    | Michael Nelson             | Michael.Nelson9@va.gov  |
| Albuquerque      | Secondary  | Scott Lajiness             | Scott.Lajiness@va.gov   |
| Honolulu         | Primary    | Melynn McWilliams               | Melynn.McWilliams@va.gov      |
| Honolulu         | Secondary  | Jametria McElroy           | Jametria.mcelroy@va.gov |
| Houston          | Primary    | Daniel Irizarry            | Daniel.Irizarry@va.gov  |
| Houston          | Secondary  | Thomas “David” Gibson      | Thomas.Gibson@va.gov    |
| Houston          | Additional | Steven Sunseri             | steven.sunseri@va.gov   |
| National Capital | Primary    | vacant              |   |
| National Capital | Secondary  | Joshua Carson              | Joshua.Carson@va.gov    |
| San Juan         | Primary    | Sharon Delgado             | sharon.delgado@va.gov   |
| San Juan         | Secondary  | Adrian Pons                | ADRIAN.PONS@va.gov      |


8/16/23: Additional invitees to Facilities/VBA RO recurring sync, list to be confirmed with stakeholders re: who are current primary / secondary:
- jamie.verity@va.gov, San Diego, Training Manager
- nykeisha.moore@va.gov, National Capital, VR&E Asst. Officer
- ramon.lopez2@va.gov, Portland, Management Analyst
- tykisha.tull@va.gov, National Capital, VSC Coach


## Approach
- Research, design, and define the facilities hierarchical structure as it relates to Veteran needs and understanding
- Research, design, and write new content/create content guidelines for field editors for location-specific content, for example "prepare for your visit" section and others
- Research, design, and write new content/create content guidelines for national editors for national COPE content
- Research, design, and extend the VA services taxonomy to include VBA services; write as-necessary
- Research, design, and write (first draft/pilot) local facility content for each benefit service
- Build pilot VBA facilities in Drupal
- Build and publish new front-end VBA facilities product(s)
- Sunset legacy sites
- Integrate VBA facilities from Drupal into the Facilities API as source of truth
- Identify current users of VBA_facilities CDW database, create sunset plan and deprecate VBA database

## Old/legacy Regional Office/benefits websites
We need to reach parity with our new Regional Office/benefits products so we can turn off all the old sites.
- Regional Office website: https://www.benefits.va.gov/ROWINSTONSALEM/index.asp
- Facility Locator RO facility detail page: https://www.va.gov/find-locations/facility/vba_318
- Facility Locator benefits facility detail page: https://www.va.gov/find-locations/facility/vba_318c

## Assumptions and early discussions
- VBA want to adopt the same facility system product template as the new VAMC product
  - Like VAMCs, ROs are a network of facilities; the Regional Office is the parent facility, and other benefits facilities are children *and this structure is important for the Veteran* (if this is the case, then it needs to be represented hierarchically in the Facilities API and Drupal)
- We need to design a Make An Appointment page that applies to all ROs
- VBA has "Satellite" Regional Office sites often located at VAMCs or Vet Centers
  - We need to figure out the user flows into VocRehab facilies and services, since users will be able to get to them from a VAMC site, RO sites, and Facility Locator
- VBA's Veteran Readiness and Employment sites are both stand-alone but also often times located at VAMCs or Vet Centers(VocRehab is built into the VHA health services taxonomy for this reason)
  - We need to figure out the user flows into VocRehab facilies and services, since users will be able to get to them from a VAMC site, RO sites, and Facility Locator
 
## MVP Scope
MVP scope is detailed in [Initiative - Design & Build VBA Regional Office MVP #10514](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10514).
[SE: Initiative - VBA Regional Office modernization #13029](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13029) includes post-MVP issues.

## Timeline
### Phase 1 - Discovery & MVP Definition
- [VBA Regional Offices: Discovery & MVP definition #9659](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9659)
- July 2022 - February 2023
- Selected [7 MVP sites](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9961#issuecomment-1242802953)
- Conducted generative [research with Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-8-veteran-facing/research-readout.pdf)
- Conducted generative [research with Public Contact Staff](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2022-9-public-contact/vba_public_contact_research.pdf)
- MVP scope established and [shared with VBA stakeholders](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12047#issuecomment-1451850564)

### Phase 2 - MVP Design & Development
- [VBA Regional Offices: Design & Develop MVP #10514](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10514)
- March 2023 - ongoing as of July 2023
- VA.gov front end design & development governed by Platform Collab Cycle
- Drupal CMS content model & editorial interface governed by CMS Collab Cycle
- VA Service Taxonomy additions governed by CAIA and Taxonomy council

### Phase 3 - Fast Follow & National Roll-out
- [VBA Regional Offices: Fast Follow #14477](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14477)
- Will begin after phase 2


## VBA Facility types

The data call in August 2021 defined these as the different types of VBA Facilities:
| VBA Facility type | Definition  |
| --- | --- |
| Regional Benefit Office | This is the main VBA facility of jurisdiction that provide a listing of all VA regional offices (RO), an email address for contacting the regional office director, and a listing of additional VA facilities located in each state. VA regional offices assist Veterans, Service Members and dependents with applying for benefits, compensation, education and training, Veteran readiness and employment, home loans, life insurance, pension, appeals, and other services. |
| Satellite Office  | This is a facility not within an RO that may primarily provide VR&E services, but also includes other services and VBA representatives from other business lines. |
| VetSuccess On Campus  | This facility is primarily a space where VBA staff is located on college and university campuses. The VSOC program provides a VA Vocational Rehabilitation Counselor (VRC) to each VSOC school. These VRCs are called VetSuccess on Campus (VSOC) Counselors. A VA Vet Center Outreach Coordinator is also provided, and co‐located on many campuses, to provide peer‐to‐peer counseling and referral services. |
| Veteran Readiness and Employment Office | This is a facility not within an RO that only provides Vocational Rehabilitation and Employment (VR&E) services that helps Veterans with service‐connected disabilities and an employment handicap prepare for, find and maintain suitable careers. |
| IDES Site | This facility works together with the Department of Defense (DoD) to make disability evaluation seamless with VA if a servicemember is found to be medically unfit for duty. IDES will provide a Veteran a proposed VA disability rating before they leave the service. |
| Pre‐Discharge Site  | This facility is a joint VA and DOD location to file a claim for disability compensation up to 180 days prior to separation or retirement from active duty or full time National Guard or Reserve duty (Titles 10 and 32).  |
| Seamless Transition Integrated Care Clinic (STICC)  | This facility is a transition clinic located in VHA facilities, there are VHA and VBA Rehab counselors as well as VBA Compensation and Benefits (Comp & Pen) personnel that assist transitioning servicemembers with benefit-related information. |

