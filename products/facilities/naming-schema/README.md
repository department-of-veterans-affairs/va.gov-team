# VA Facilities Naming Schema
How we are using official facility names, new plain-language short names, and new URLs across our digital facility product ecosystem.

> Pay attention to title case vs. sentence case--it's intentional!

**General Notes:**
- Official facility names will be used throughout the experience despite their inconsistency and length.  This will ensure that the name used in the digital experience matches that used in the physical experience.  It also ensures that if an honoree's name is part of the facility name, that we are fully recognizing that honoree and utilizing the name legally documented. 
- System names only apply to medical centers and and benefit offices, since they are part of a network of facilities.  Where "official" systems names do not exist, one will be created.  In addition, a "plain-language name"  (aka short name), will also be created for use within the digital experience.  The plain-language name will only apply to system names.

## VHA health care facilities naming schema

**Health care systems**
- All facilities in a network of VAMCs and clinics will roll up to a health care system.  
- Not all networked areas currently have an official system name.  Those networks will be assigned a system one based on the current subdomain label and input from the VISN. 
- A plain-language name (or short name) will be created and will be used for the digital experience in the H1, menu links, breadcrumb, browser title tag, and the URL.  The URL will exclude "VA" as part of the system name. 

**Facility names**
- All facilities have an official name that will be used everywhere. No short names or truncating of official names will be used.  
- The official name will be used in the H1, menu links, breadcrumb, browser title tag, and the URL.  

The example schema below is a hypothetical scenario. It represents a VAMC facility network (i.e., VAMC is parent facility, with health clinics as children facilities that are all a part of a health care system; customers get access to the entire network). It should apply to _most_ VAMC systems.

| Facility type      | Official name                                                   | Plain-language name           | Short Name                                | URL                                                                                                        |
|--------------------|-----------------------------------------------------------------|-------------------------------|-------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Source:VAST        | Source:VAST                                                     | Source:Drupal                 | Source:Drupal (Investigating Deprecation) | Source:Facilities API                                                                                      |
| Health care system | Pittsburgh Healthcare System                                    | VA Pittsburgh health care     | VA Pittsburgh (remove?)                   | www.va.gov/pittsburgh-health-care                                                                          |
| VAMC               | Pittsburgh VA Medical Center-University Drive                   | n/a - remove "nickname" field | n/a - remove                              | www.va.gov/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive                  |
| VAMC               | H. John Heinz III Department of Veterans Affairs Medical Center | n/a - remove "nickname" field | n/a - remove                              | www.va.gov/pittsburgh-health-care/locations/h-john-heinz-iii-department-of-veterans-affairs-medical-center |
| CBOC               | Beaver County VA Clinic                                         | n/a - remove "nickname" field | n/a - remove                              | www.va.gov/pittsburgh-health-care/locations/beaver-county-va-clinic/                                       |
| CBOC               | Belmont County VA Clinic                                        | n/a - remove "nickname" field | n/a - remove                              | www.va.gov/pittsburgh-health-care/locations/belmont-county-va-clinic                                       |





## VBA benefits facilities naming schema

Some VBA benefits facilities are standalone. Regional benefit offices are an example. Other VBA benefits facilities are located either:
1) inside facilities VA owns such as medical centers owned by VHA, or 
2) inside facilities VA does not own such as military hospitals or bases. 

> 
**Facility names**
<br></br>(TBD) For VBA offices, a plain-language name (or short name) will be created and used for the digital experience in the H1, menu links, breadcrumb, browser title tag, and the URL.  

Update from October 1, 2020:
* VBA and OFO, the Office of Field Operations, just approved [this naming scheme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/naming-schema/VBA-facilties-name_DRAFT-%20v9.docx). 
* First we are updating the [names of facilities inside VA facilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/naming-schema/VBA%20Facility%20Names_v4.xlsx). See column E "Inside other official VA Location."
* Next we will update the names of facilities not located inside VA facilities.

Update from September 22, 2023:
* Updated the chart to reflect current naming schema. [See full changelog](https://github.com/department-of-veterans-affairs/va.gov-team/pull/66167)

Update from February 2024:
* Updated the chart to reflect decisions made in [va.gov-cms/15752](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15752)

**For every example below, "at" is followed by the official location name. Official location names come from legislation, so we may not be able to change things that don't follow VA.gov style.** Example: Veterans' (should not have an apostrophe). 

Facility type  |  Shared location?  |  Official name | Name pattern | H1 & Breadcrumb | Associated text | URL 
 -- | -- | -- | -- | -- | -- | --
_Source:_ Sandy's Database | _Source:_ Sandy's Database | _Source:_ Sandy's Database |  | _Source:_ Drupal  | _Source:_ Drupal | _Source:_ Drupal
Regional office | Standalone | [Winston-Salem VA Regional Benefit Office](https://www.va.gov/find-locations/facility/vba_318) | [Region name] [Facility type] | Winston-Salem VA Regional Benefit Office | | va.gov/winston-salem-va-regional-benefit-office
Regional office | VHA or non-VA | [Anchorage VA Regional Benefit Office at Anchorage VA Medical Center](https://www.va.gov/find-locations/facility/vba_463) | [Region name] [Facility type] at [shared location name] | Anchorage VA Regional Benefit Office | Located at Anchorage VA Medical Center | va.gov/anchorage-va-regional-benefit-office
Satellite office | Standalone | [VA Regional Benefit Satellite Office at Sacramento](https://www.va.gov/find-locations/facility/vba_343e) | [Region name] [Facility type] | Sacremento VA Regional Benefit Satellite Office | | va.gov/sacremento-va-regional-benefit-satellite-office
Satellite office | VHA or non-VA | [VA Regional Benefit Satellite Office at New Bedford VA Clinic](https://www.va.gov/find-locations/facility/vba_304n) | [Region name] [Facility type] at [shared location name] | New Bedford VA Regional Benefit Satellite Office | Located at at New Bedford VA Clinic | va.gov/new-bedford-va-regional-benefit-satellite-office
VR&E office | Standalone | [Harrisburg Veteran Readiness and Employment Office](https://www.va.gov/find-locations/facility/vba_310g) | [Region name] [Facility type]
VR&E office | VHA or non-VA | [Veteran Readiness and Employment Office at Peoria Vet Center](https://www.va.gov/find-locations/facility/vba_328c) | [Facility type] at [shared location name]
Integrated Disability Evaluation System (IDES) Site | VHA or non-VA | [Integrated Disability Evaluation System (IDES) Site at Fort Drum](https://www.va.gov/find-locations/facility/vba_307f) | [Facility type] at [shared location name]
Pre-Discharge Site | VHA or non-VA | [Pre-Discharge Site at Twentynine Palms Marine Corps Air Ground Combat Center](https://www.va.gov/find-locations/facility/vba_344x) | [Facility type] at [shared location name]
Seamless Transition Integrated Care Clinic (STICC) | VHA or non-VA | [Seamless Transition Integrated Care Clinic (STICC) at Richard L. Roudebush VA Medical Center](https://www.va.gov/find-locations/facility/vba_326g) | [Facility type] at [shared location name]
VetSuccess on Campus | non-VA | [VetSuccess On Campus at University of Nevada, Las Vegas (UNLV)](https://www.va.gov/find-locations/facility/vba_354b) | [Facility type] at [shared location name]



## VHA Vet Center facilities naming schema - DRAFT

> This schema is a work in progress!! It requires more research.

**Systems**
- Vet Centers are not networked and do not roll up to a system, and therefore will not have a system name or utilize the plain-language name. 

**Facility names**
- All facilities have an official name that will be used everywhere. No short names or truncating of official names will be used.  
- The official name will be used in the H1, menu links, breadcrumb, browser title tag, and the URL.  
The example schema below is for a hypothetical Vet Center. It represents an individual VHA facility (i.e., not tied to a network).
- We may need to update the current facility names in VAST to include "VA".

Facility type |  Official facility name  | Plain-language name |  URL 
-- | -- | -- | -- 
_Source:_<br>VAST | _Source:_<br>VAST | _Source:_<br>Drupal |_Source:_<br>Facilities API
Vet Center | VA Baltimore Vet Center | n/a| www.va.gov/va-baltimore-vet-center 


## NCA cemetery facilities naming schema - DRAFT

> This schema is a work in progress!! It requires more research.

**Systems**
- Cemeteries are not networked and do not roll up to a system, and therefore will not have a system name or utilize the plain-language name. 

**Facility names**
- All facilities have an official name that will be used everywhere. No short names or truncating of official names will be used.  
- The official name will be used in the H1, menu links, breadcrumb, browser title tag, and the URL.  
The example schema below is for a hypothetical Vet Center. It represents an individual VHA facility (i.e., not tied to a network).
- We may need to update the current facility names in VAST to include "VA".
The example schema below is for a national cemetery. It represents an individual NCA facility (i.e., not a tied to network).

Facility type|  Official facility name | Plain-language name| URL
-- | -- | -- | -- 
_Source:_<br>VAST| _Source:_<br>VAST | _Source:_<br>Drupal | _Source:_<br>Facilities API
National cemetery | VA Riverside National Cemetery | n/a  | www.va.gov/va-riverside-national-cemetery 
