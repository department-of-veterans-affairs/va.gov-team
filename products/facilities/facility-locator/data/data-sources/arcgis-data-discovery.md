# [ArcGIS](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems)

- va.gov products/apps impact: Facility locator queries data acquired from arcgis.com REST endpoints to populate facility locator map views and display facility detail pages. (https://www.va.gov/find-locations/)
- Vets.gov does not have a direct account/relationship with ESRI. Instead, VA's GeoBISL team is the account holder. GeoBISL is responsible for data and configuration management of the VA data hosted at arcgis.com. If arcgis.com as a whole is up but the VA REST endpoints are not responding properly it is likely to be a GeoBISL configuration issue.
- Integration Points: Facility locator queries the arcgis.com REST endpoints to populate facility locator map views and display facility detail pages.The map data is pulled once per day from ArcGIS and stored locally in vets-api's Postgres database. This means that vets-api is not subject to request latency due to slowness due to the ArcGIS external service for the facility locator service. It performs this sync using a set of Sidekiq jobs defined in app/workers/facilities and scheduled in config/sidekiq_scheduler.yml, both in the vets-api repository.

- GeoBISL DBA	Eddie Heath	eddie.heath@va.gov	202-461-0453
- GeoBISL POC	Michael Villeneuve	michael.villeneuve@va.gov	
- ArcGIS.com	ESRI Support	http://support.esri.com/contact-tech-support	888-377-4575

- Service Description: ArcGIS.com is a hosted map data endpoint provided by ESRI. It provides several REST endpoints from which vets.gov retrieves facility data including geographical coordinates and other attributes.
- Current status: The map data is pulled once per day from ArcGIS by Sidekiq jobs and stored locally in vets-api's Postgres database.
- How to access the service: The configuration for arcgis.com integration consists of the four REST endpoints that facility locator uses one per VA administration:
  - Veteran's Health Administration (VHA)
  - Veteran's Benefits Administration (VBA)
  - National Cemetery Administration (NCA)
  - Veteran Centers (VC)
 
 - The endpoints are configured in vets-api in config/settings.yml in the locators key.
