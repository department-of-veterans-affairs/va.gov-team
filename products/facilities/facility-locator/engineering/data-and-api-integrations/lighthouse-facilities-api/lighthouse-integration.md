# Facility Locator - Lighthouse integration technical documentation
Last updated: 2025-03-25

Lighthouse API documentation: https://developer.va.gov/explore/api/va-facilities

[Lighthouse API diagram](https://github.com/department-of-veterans-affairs/lighthouse-facilities) for reference

## Owners
Lighthouse Facilities API team 
VA PO: Dawn Pruitt
DSVA Slack channel: #cms-lighthouse
Contract team is turning over 3/31/25

### Lighthouse integration
The Lighthouse Facilities API is integrated via a [Facilities API in vets-api](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api). Versions are off by one. 
As of 2024: LH Facilities API V1 is integrated into vets-api Facilities API V2. Epic = https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14507

Facility Locator calls to Lighthouse via the vets-api 

facilities-api uses the `VADOTGOV_FacilityLocator` is 4000/minute API consumer.
`VADOTGOV_FacilityLocator` 
* As of Dec 2023, the rate limit is set to 4000/minute
* has a single key (vs. some API consumers may have multiple associated keys, with a single shared rate limit). 

### **Facility Website URLs**
The Lighthouse Facilities API team provides the URL for any given Facility's website. Those URLs are drawn from a few different sources: 
* VHA: Drupal VAMC Facility URL is the source of truth.
* VBA: Drupal VBA Facility URL is the source of truth. If not URL is sent to LH for a given facility, Lighthouse relies on [Sandy's DB](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/vba/vba-data-consistency-issues.md#2024-notes) instead.
* NCA: URLs are sourced from an XML provided by NCA, which are then mapped into Lighthouse's Websites CSV. 

## Performance (issues and solutions)
* The main performance issues seem to be related to Kong (API Gateway), and may require more servers to be provisioned.
* There are also further optimizations that can likely be done at the DB level and/or in the API itself.
* Community Care requests call out to a 3rd-party API (NOT LIGHTHOUSE), are also creating a performance hit. A possible solution may be to set up a new daily Sidekiq jobs to pull down the PPMS data (or at least the Urgent Care and Pharmacy data) and load it into the local PostgreSQL database (not currently done - 3/25/25).


### Vets-api Endpoints
* Facility Locator data is being served up from the vets-api via requests to Lighthouse and PPMS
* There is an existing effort to use the Facilities API (in `/modules` within the same application) for all VHA facility data. [Mar 2025 - not currently being discussed]
* Facility data is returned as JSON from the FacilitySerializer.


**/facilities_api/v2/va** 
Used for searches in which Facility type =
- VA health
- VA benefits
- Cemeteries
- Vet Centers
- Urgent care + Service type = VA urgent care
- Emergecy care + Service type = VA Emergency care

**/facilities_api/v2/ccp/provider (NOT Lighthouse)**
Used for searches in which Facility type =
- Community care providers (in VA’s network)

**/facilities_api/v2/ccp/specialties (NOT Lighthouse)**
Used to populate the typeahead for searches in which Facility type =
- Community care providers (in VA’s network)

**/facilities_api/v2/ccp/pharmacy (NOT Lighthouse)**
Used for searches in which Facility type =
- Community care pharmacies

**/facilities_api/v2/ccp/urgent_care (NOT Lighthouse)** 
Used for searches in which Facility type =
- Urgent care + Service type = Community urgent care (in VA’s network)

## Drupal & how it connects
Drupal data about Facilities is sent to Lighthouse via a nightly migration. We refer to that data as the "Overlay."
The VA.gov Facility Locator front-end then queries Lighthouse, and receives LH data which includes Drupal overlay data. 

Changes after a facility are published are added to the POST queue in drupal and sent to Lighthouse. Changes to lighthouse are relatively immediate in Facility locator.

More information is availble here: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api#productsfeatures-integrated-directly-with-lh-facilities-api-data-not-via-facilities-api

Today, in the live Facility Locator product, any VHA data is provided by Lighthouse Facilities API. 
