# Process for reporting inaccurate data in Facility Locator

The process for reporting inaccurate location information depends on the type of facility and information. This information is accurate as of Lighthouse Facilities API v1.

Jump to:

* [&#8595; Facility source of truth](facility-source-of-truth)
* [&#8595; VHA Medical Centers and Clinic data  ]([#vha-medical-centers-and-clinics)
* [&#8595; Vet Centers, Vet Center Outstations, and Community Access Points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/reporting-inaccurate-data.md#vet-centers-vet-center-outstations-and-community-access-points)
* [&#8595; VBA Regional Offices, Satellite Offices, VetSuccess on Campus, IDES sites, Veteran Readiness & Employment offices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/reporting-inaccurate-data.md#vba-regional-offices-satellite-offices-vetsuccess-on-campus-ides-sites-veteran-readiness--employment-offices)
* [&#8595; NCA Cemeteries](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/reporting-inaccurate-data.md#nca-cemeteries)
* [&#8595; Community care providers and pharmacies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/reporting-inaccurate-data.md#community-care-providers-and-pharmacies)

## Facility souce of truth

| Facility type | Source | 
| --- | --- |  
| VA health (VAMCs, CBOCs, etc) |  VAST -> VSSC -> BISL - > CDW -> Lighthouse  | 
| Vet Centers and Outstations |  VAST -> VSSC -> BISL - > CDW -> Lighthouse  | 
| Vet Center CAPs | Editor created in Drupal - no presence in VAST |
| VBA (Region offices, Satellites and other benefit location types) | Sandy's DB - > CDW -> Lighthouse  |
| NCA - national cemeteries | name and website from NCA XML - all other data from CDW XML file |
| NCA - state cemeteries | NCA XML file |
| Community care providers and pharmacies (usually non-VA facilities)	| PPMS 

## VHA Medical Centers and Clinics
|	Change needed | Process
| ---	|	--- | 
| New or closing facility |  Editor needs to contact VAST coordinator and request change to information in VAST | 
| Facility name, address, main phone number, or hours |  Editor needs to contact VAST coordinator and request change to information in VAST | 
| Mental health phone number | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to VHA Digital Media and the proper web editor who can make this update in Drupal: [How to add or edit a VAMC facility mental health phone number](https://prod.cms.va.gov/help/vamc/how-to-add-or-edit-a-vamc-facility-mental-health-phone-number) | 
| Map thumbnail | Email the name of the facility and scenario to Lighthouse at api@va.gov. | 
| Patient Satisfaction and Wait Time Data	| Contact Lighthouse team
| System or facility service 	| Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to VHA Digital Media and the proper web editor who can make this update in Drupal: [How to add, edit, or remove a VAMC facility health service](https://prod.cms.va.gov/help/vamc/how-to-add-edit-or-remove-a-vamc-facility-health-service)
 | Caregiver Services | Association with this service in the Facility Locator relies on the Caregiver Records Management Application (CARMA) as the source of truth. Contact LH to resolve discrepancies outside of Drupal </li></ul> 
| Operating status | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to VHA Digital Media and the proper web editor

## Vet Centers, Vet Center Outstations, and Community Access Points
|	Facility type | Change needed | Process
| ---	|	--- | --- | 
Vet Center or Vet Center Outstation | New or closing location | Editor needs to initiate a Request to Change Vet Center Information form, linked from the [VAST Updates – Readjustment Counseling Service (RCS) page](https://vaww.vetcenter.va.gov/vast-updates/) (requires network connection)
Vet Center or Vet Center Outstation | Facility name, address, main phone number, or hours | Editor needs to initiate a Request to Change Vet Center Information form, linked from the [VAST Updates – Readjustment Counseling Service (RCS) page](https://vaww.vetcenter.va.gov/vast-updates/) (requires network connection)
Vet Center or Vet Center Outstation  | Map thumbnail | Email the name of the facility and scenario to Lighthouse at api@va.gov. | 
Vet Center | Services 	| Editors can add and archive these in Drupal: [How to add or edit a Vet Center service](https://prod.cms.va.gov/help/vet-centers/how-to-edit-a-vet-center-service)
Vet Centers Community Access Point  | Adding new, editing location details, or archiving | Editors can edit these in Drupal: [How to add, change, remove, or restore a community access point](https://prod.cms.va.gov/help/vet-centers/how-to-add-change-remove-or-restore-a-community-access-point)
Vet Centers, Vet Center Outstations, and Community Access Points | operating status | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to RCS Central Office

## VBA Regional Offices, Satellite Offices, VetSuccess on Campus, IDES sites, Veteran Readiness & Employment offices 

| Change needed | Process
| ---	|	--- |
| Location name, address, phone, or hours | Contact Michelle Middaugh (email: suzanne.middaugh@va.gov) or #facilities-support channel |
| Location services  | Contact Michelle Middaugh (email: suzanne.middaugh@va.gov) or #facilities-support channel |
| Operating status | Contact the VBA Web Team (WEBADMIN.VBACO@va.gov) |

## NCA Cemeteries  

Email the name of the facility and the missing or inaccurate detail to NCA through the task tracker at OEMI Digital Services Task Tracker. Email ncawebservices@va.gov for their awareness, copy Michelle Middaugh, VA Product Owner at suzanne.middaugh@va.gov

## Community care providers and pharmacies 

Email the name of the facility and the missing or inaccurate detail to VHAOCCPPMSPROJBUSPOCS@VA.GOV. Please copy Michelle Middaugh, VA Product Owner at suzanne.middaugh@va.gov
