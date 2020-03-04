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





## VBA benefits facilities naming schema - DRAFT

> This schema is a work in progress!! It requires more research.
> 
**Benefit systems**
- All locations are networked and should roll up to a benefits system.  
- Most networked areas do not currently have an official system name.  We may assign a system name based on the regional office name.
- A plain-language name (or short name) will be created and will be used for the digital experience in the H1, menu links, breadcrumb, browser title tag, and the URL.  The URL will exclude "VA" as part of the system name. 

**Facility names**
- All facilities have an official name that will be used everywhere. No short names or truncating of official names will be used.  
- The official name will be used in the H1, menu links, breadcrumb, browser title tag, and the URL.  

The example schema below is a hypothetical scenario.  It represents a RO facility network (i.e., RO is parent facility, with intake centers, campus offices, and other VBA facilities as children facilities that are all part of a benefits system; customers get access to the entire network). It should apply to _all_ RO systems.

Facility type  |  Official name  | Plain-language name | URL 
 -- | -- | -- | -- 
_Source:_<br>VAST | _Source:_<br>VAST | _Source:_<br>Drupal  | _Source:_<br>Facilities API
Benefits system | n/a | VA Winston-Salem benefits | www.va.gov/winston-salem-benefits
RO | Winston-Salem Regional Benefit Office | n/a | www.va.gov/winston-salem-benefits/locations/winston-salem-regional-benefit-office


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
