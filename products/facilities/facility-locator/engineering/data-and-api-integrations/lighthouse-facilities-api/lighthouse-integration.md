# Facility Locator - Lighthouse integration technical documentation
_Last updated: 2024-01-02_

Lighthouse API documentation: https://developer.va.gov/explore/api/va-facilities

[Lighthouse API diagram](https://github.com/department-of-veterans-affairs/lighthouse-facilities) for reference


### Lighthouse integration
Facility Locator is integrated with V1 of the facilities API. Epic = https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14507

Facility Locator calls to Lighthouse via the [vets-api facilities-api](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api) use the `VADOTGOV_FacilityLocator` is 4000/minute API consumer.
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
* Community Care requests call out to a 3rd-party API, are also creating a performance hit. A possible solution may be to set up a new daily Sidekiq jobs to pull down the PPMS data (or at least the Urgent Care and Pharmacy data) and load it into the local PostgreSQL database.


### Vets-api Endpoints
**2023-12-28: TODO: VERIFY the 3 bullets here and API endpoint specific notes below & clean up to modern accuracy** 
* VHA Facility data is stored in the local PostgreSQL database in the `base_facilities` table and is returned as JSON using the `VAFacilitySerializer`.
* Facility Locator data is being served up from the vets-api directly (version 0).
* There is an existing effort to use the Facilities API (in `/modules` within the same application) for all VHA facility data. [TODO: 2023: is this in use? This may be an outdated note]
* Facility data is returned as either JSON, or GeoJSON based upon request type, using `FacilitySerializer` or `GeoSerializer`.


**/facilities_api/v2/va** 
Used for searches in which Facility type =
- VA health
- VA benefits
- Cemeteries
- Vet Centers
- Urgent care + Service type = VA urgent care

**/facilities_api/v2/ccp/provider**
Used for searches in which Facility type =
- Community care providers (in VA’s network)

**/facilities_api/v2/ccp/specialties**
Used to populate the typeahead for searches in which Facility type =
- Community care providers (in VA’s network)

**/facilities_api/v2/ccp/pharmacy**
Used for searches in which Facility type =
- Community care pharmacies

**/facilities_api/v2/ccp/urgent_care** 
Used for searches in which Facility type =
- Urgent care + Service type = Community urgent care (in VA’s network)



Today, in the live Facility Locator product, any VHA data is provided by Lighthouse Facilities API. 
