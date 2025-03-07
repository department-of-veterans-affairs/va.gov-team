# VA National Cemetery Facility Product

NOT LAUNCHED

National Cemetery Administration (NCA) maintains 139 national cemeteries in 40 states (and Puerto Rico) as well as 33 soldier's lots and monument sites
VA national cemeteries are different from state Veteran cemeteries

NCA leadership still maintains the bulk of cemetery information in TeamSites. Cemetery content is not yet modernized for VA.gov. 

The facility locator is the primary entry point from VA.gov to Cemetery facility information. 

## Cemetery data
### Source of truth (March 2025)
NCA maintains an XML file with location and contact information, and hours and services offered, for all cemeteries.
Lighthouse Facilities API ingests that XML data. 

### In Drupal
The Drupal CMS runs a nightly migration to both read/write facility data to and from Lighthouse. Drupal receives cemetery data in that migration, and NCA facilities are stored as Draft nodes in Drupal, until a future modernization effort takes place. 

### On VA.gov
The facilities-api receives Cemetery data from Lighthouse Facilities API. Cemetery data is displayed in the Facility Locator, including (as of March 2025) burial status information as to whether a given cemetery is open for burials, cremations only, etc.

Because cemeteries do not have modernized pages, their information is displayed on VA.gov using the "Facility Locator detail page" template.


**Business partners:**

- Lisa Hallenbeck, NCA PO
- ?

## Future modernization effort
Will likely include:

- Research, design, and write new content for "Prepare for your visit" section
- Research, design, and write new NCA cemetery services taxonomy
- Research, design, and write (first draft/pilot) local facility content for each NCA service
- Update the NCA facility type in Drupal
- Build NCA cemetery services taxonomy in Drupal, and integrate into the Facilities API
- Build and publish new front-end VA National Cemetery facility product
- Research, design, write/or move other content from old sites (e.g., history and education content, PDFs and other files, etc.)

## Old/legacy cemetery websites

We need to reach parity with our new cemetery products so we can turn off all the old sites.

- Cemetery facility detail page: https://www.cem.va.gov/cems/nchp/riverside.asp
- Facility Locator facility detail page: https://www.va.gov/find-locations/facility/nca_901

