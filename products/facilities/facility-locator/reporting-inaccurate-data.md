# Process for reporting inaccurate data in Facility Locator

The process for reporting inaccurate location information depends on the type of facility and information. This information is accurate as of Lighthouse Facilities API v1.

Jump to:

* [Addresses, phone numbers, hours, map thumbnails &#8595; ]([#addresses-phone-numbers-hours-map-thumbnails)
* [Services &#8595; ](#services)
* [Facility status &#8595; ](#facility-status)
* [Facility & CMS Team workflows](#facilities--cms-team-workflows)

## Addresses, phone numbers, hours, map thumbnails

Facility type	|	Process
---	|	---
VHA Medical Centers | Email the name of the facility and the missing or inaccurate detail to Lighthouse at api@va.gov.
VHA Clinics | Email the name of the facility and the missing or inaccurate detail to Lighthouse at api@va.gov.
Vet Centers | Email the name of the facility and the missing or inaccurate detail to Lighthouse at api@va.gov.
Vet Center Outstations | Email the name of the facility and the missing or inaccurate detail to Lighthouse at api@va.gov.
Vet Centers Community Access Point  | Contact the CMS help desk (support@va-gov.atlassian.net) 
NCA Cemeteries | XML is source of truth for name and website only. All other data comes from CDW as source of truth. Email the name of the facility and the missing or inaccurate detail to NCA through the task tracker at OEMI Digital Services Task Tracker. Email ncawebservices@va.gov for their awareness, and please copy Michelle Middaugh, VA Product Owner at suzanne.middaugh@va.gov
VBA Regional Offices, Satellite Offices, VetSuccess on Campus, IDES sites, Veteran Readiness & Employment offices  | 	Contact the VBA Web Team (WEBADMIN.VBACO@va.gov). Please copy Michelle Middaugh, VA Product Owner at suzanne.middaugh@va.gov
Community care providers and pharmacies (usually non-VA facilities)	| Email the name of the facility and the missing or inaccurate detail to VHAOCCPPMSPROJBUSPOCS@VA.GOV. Please copy Michelle Middaugh, VA Product Owner at suzanne.middaugh@va.gov

 ## Services
 
 Facility type	|	Process
---	|	---
VHA Medical Centers | Contact the CMS help desk (support@va-gov.atlassian.net) and the sitewide-facilities team. They can assist in triaging this request. This may be a result of innacurate data in Lighthouse **or** inaccurate data provided by VAMC editors in the VAMC product
VHA Clinics | Contact the CMS help desk (support@va-gov.atlassian.net) and the sitewide-facilities team. They can assist in triaging this request. This may be a result of inacurate data in Lighthouse **or** inaccurate data provided by VAMC editors in the VAMC product
Vet Centers | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to RCS Central Office or the relevant editor
Vet Center Outstations | N/A - Services are associated with the main Vet Center, not with the Outstation
Vet Centers Community Access Point  | N/A - Services are associated with the main Vet Center, not with the Outstation
NCA Cemeteries | N/A - No services are associated
VBA Regional Offices, Satellite Offices, VetSuccess on Campus, IDES sites, Veteran Readiness & Employment offices  | 	Contact the VBA Web Team (WEBADMIN.VBACO@va.gov). Please copy Michelle Middaugh, VA Product Owner at suzanne.middaugh@va.gov
Community care providers and pharmacies (usually non-VA facilities)	| Email the name of the facility and the missing or inaccurate detail to VHAOCCPPMSPROJBUSPOCS@VA.GOV. Please copy Michelle Middaugh, VA Product Owner at suzanne.middaugh@va.gov
 
 ## Facility Status
 
  Facility type	|	Process
---	|	---
VHA Medical Centers | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to VHA Digital Media and the proper web editor
VHA Clinics | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to VHA Digital Media and the proper web editor
Vet Centers | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to RCS Central Office
Vet Center Outstations | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to RCS Central Office
Vet Centers Community Access Point  | Contact the CMS help desk (support@va-gov.atlassian.net) who can assist in routing this to RCS Central Office
NCA Cemeteries | Contact Lisa Hollenbeck (Lisa.Hollenbeck2@va.gov) in NCA 
VBA Regional Offices, Satellite Offices, VetSuccess on Campus, IDES sites, Veteran Readiness & Employment offices  | 	Contact the VBA Web Team (WEBADMIN.VBACO@va.gov)
Community care providers and pharmacies (usually non-VA facilities)	| N/A
Vet Centers Community Access Point  | N/A


## Facilities & CMS Team workflows

### Facilities team
If a discrepancy about a facility or service is reported, confirm whether the location is a VA health facility or community provider. 
- If it is related to a VA health facility, report to VHA DM. 
- If it is a community provider, follow the steps specified in 

Facility type	| Service |	Notes & Process
---	|	--- | ---
VHA Medical Centers | <ul><li> Audiology </li><li> Cardiology </li><li> Dermatology </li><li> Gastroenterology </li><li> Gynecology </li><li> Mental Health Care </li><li> Ophthalmology </li><li> Optometry </li><li> Orthopedics </li><li> Primary Care </li><li> Urology </li><li> Womens Health </li></ul> | <ul><li> A facility can indicate the availability of any of these services by adding or removing the service from the facility in Drupal. </li><li> If the service is not associated with the facility in Drupal, then the association exists with Access to Care (ATC)<sup>[1]</sup>. The ATC association between a service and facility will automatically dissolve if the billing code has not been used in the last 30 days. </li></ul>
VHA Medical Centers| <ul><li> Urgent care (UC) </li><li> Emergency care (ED)  </li></ul> | <ul><li>  A facility can indicate the availability of either service by adding or removing the service from the facility in Drupal.  </li><li> If the service is not associated with the facility in Drupal, then the association exists with ATC and LH must reach out to ATC to request a manual change to remove the service from the facility if the relationship is not valid. Unlike the above services, they are **not** auto-removed. <sup>[2]</sup> </li></ul>
VHA Medical Centers| <ul><li> Dental Services </li><li> Nutrition </li><li> Podiatry </li></ul> | T<ul><li>  A facility can indicate the availability of any of these services by adding or removing the service from the facility in Drupal.  </li><li> If the service is not associated with the facility in Drupal, then the association exists the DST table in CDW. </li><li> These should be auto-updating but discrepancies in these services  should be reported to LH. [TBD]. 
VHA Medical Centers| Caregiver Services | <ul><li> A facility can indicate the availability of caregiver servicces by adding or removing the service from the facility in Drupal. </li><li> The LH API source of truth for Caregiver services is an internal service and ultimately Caregiver Records Management Application (CARMA)<sup>[3]</sup>.Contact LH to resolve discrepancies outside of Drupal </li></ul> 

<sup>[1]</sup> Access to Care associates facilities with services through billing codes. 

<sup>[2]</sup> [LH Slack explainer thread](https://dsva.slack.com/archives/C02BTJTDFTN/p1718720223648529).

<sup>[3]</sup> Because of downstream dependencies, Drupal cannot be the source of truth for Caregiver services. Changing the process could result in depays in processing for caregiver program applications. 


### Helpdesk (CMS Team)
If a discrepancy about a facility or service is reported, confirm whether the location is a VA health facility or community provider. 
- If it is a community provider, see the Services process for [Community care providers and pharmacies](#services) 
- If Helpdesk (CMS team) learns about any incorrect Facility data in context of Editor contact, follow the steps as above.

If Editors haven’t taken action after CMS Team suggests next steps, CMS team should contact Facilities team to escalate to VHA DM team. Create a post in DSVA Slack, #facilities-support, and include the following:
 * Identify which facility needs Editor action (provide a link)
 * Ask for escalation to VHA DM
 * Tag Facilities DM & PM, and cc: CMS Team DM & PM
