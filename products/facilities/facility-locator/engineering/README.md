# README

## Index of links to key resources

### [Facility Locator engineering](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering)

- [Facility Locator issue response and technical diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/issue-response.md)
- [PPMS troubleshooting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/PPMS%20Troubleshooting.md)
- [Creating vcr tapes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/PPMS%20Troubleshooting.md)
- [Integration with Lighthouse](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/facility-locator-integration-with-lighthouse.md)
- [Using feature flags](https://depo-platform-documentation.scrollhelp.site/developer-docs/Using-feature-toggles-to-progressively-release-changes.590938137.html)
- [PPMS forum](https://dvagov.sharepoint.com/sites/OITDSOSPMPPMSDWS)




### [Platform Developer docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/)
- Platform documentation about infrastructure, integrations, testing, monitoring, and releasing as well as engineering processes, best practices, and standards.


## Backend documentation - NOV 2019
From https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/facility-locator-backend-documentation.docx

**TO DO: validate for modern world and update as needed**

**Endpoints**
•	Facility Locator data is being served up from the vets-api directly (version 0).
•	There is an existing effort to use the Facilities API (in `/modules` within the same application) for all VHA facility data.

**Data Sources**
•	VHA Facility data is assembled from several different sources, and they all end up in the local PostgreSQL database.
•	VHA Facility data is uploaded to the database through a daily Sidekiq job. (See the Moving VHA data sources document).
•	PPMS/Community Care data is queried through the PPMS Client – Provider Locator API
•	Cemetery, Dental, Mental Health, and Facility website data are pulled in from xml or csv files directly (`/lib/facilities/`). 
•	VC/VBA/NCA/VHA facility data is pulled in using the `MetadataClient` in the `/lib/facilities` folder.

**Data Response**
  Vets-API:
•	VHA Facility data is stored in the local PostgreSQL database in the `base_facilities` table and is returned as JSON using the `VAFacilitySerializer`.
•	PPMS/Community Care data is returned as JSON with the `ProviderSerializer`.
  Facilities-API:
•	Facility data is returned as either JSON, or GeoJSON based upon request type, using `FacilitySerializer` or `GeoSerializer`.

**Performance (issues and solutions)**
•	The main performance issues seem to be related to Kong (API Gateway), and may require more servers to be provisioned.
•	There are also further optimizations that can likely be done at the DB level and/or in the API itself.
•	Community Care requests call out to a 3rd-party API, are also creating a performance hit. A possible solution may be to set up a new daily Sidekiq jobs to pull down the PPMS data (or at least the Urgent Care and Pharmacy data) and load it into the local PostgreSQL database.
