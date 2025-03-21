# Facility Locator Data & API Documentation README

The Facility locator uses data from a variety of data sources. Please, for the love, update information as you modify the implementation in the live product. 


## Data / API integration details
The table below should become a display of modern integration data for the Facility Locator, as a topline summary. 

| **Source** | **Contains** | **Owner** | **API endpoint** | **Notes** | **Do we use this now(3/21/25)** |
| --- | --- |--- | --- | --- |  --- |
| [Access to Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/access-to-care) | Wait times, satisfaction scores, services provided (except dental) | Project Manager: Theresa Baamonde (Theresa.Baamonde@microsoft.com) (still?) | wait times - https://www.accesstocare.va.gov/atcapis/v1.1/patientwaittimes | | We **DO NOT** use this directly, we use the lighthouse provided /services endpoint to capture this data 
[Healthcare services offered at VHA facilities](https://www.accesstopwt.va.gov/Shep/getRawData?location=*) | TODO: still true? -> Pulled daily through a Sidekiq job, temporarily placed in Redis, and then stitched into base_facilities table in Postgres. | | | | I do not think that we acquire this directly any longer. Lighthouse gets this data daily and merges with our list of services created by editors in Drupal. There are often conflicts between what Lighthouse returns as services for a facility and what is represented by editors. The question is, does Drupal read some list for base services. We should ask **@omahane or @dsasser**  |
| [Lighthouse Facilities API](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/lighthouse-facilities-api/lighthouse-integration.md) | All facility contact data (NCA, VBA, RCS, VHA); a subsection of Sandy's DB VBA data; V1: Services data | Lighthouse Facilities API team (#api-facilities in DSVA slack) | Lighthouse API documentation: https://developer.va.gov/explore/api/va-facilities | | Still used ✔️ |
| [Mapbox](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/mapbox/mapbox-implementation.md) | Provides map functionality by coordinates | | | | Still used ✔️|
| [PPMS (Provider Profile Management System) & Community Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/ppms-community-care/ppms-implementation.md) | Provider info | PPMS team | We use several PPMS endpoints for Pharmacy (paginated), Provider (unpaginated), and Place of Service (unpaginated) | | Still use ✔️ |
| [VBA ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/vba/) | | | | |
| Website URL CSV| Website URLs | Lighthouse maintains spreadsheet | Pulled daily from Lighthouse spreadsheet into vets-api. Merged daily by Sidekiq with base_facilities data in Postgres after the GIS/ArcGIS jobs run | |
| State Cemetery XML | Info on state cemeteries not managed by VA | External team maintains XML, updating it every 3 mos (https://www.cem.va.gov/cems/cems.xml) | | Pulled daily from an XML file that is checked into Lighthouse. Sidekiq transforms and inserts the data into base_facilities in Postgres. | Not sure about the base facilities. But I see the base_facilities SQL table in Sidekiq related information but not vets-api controllers that do anything with the data (Same for healthcare services above) |



**Facility Websites**
The Lighthouse Facilities API team maintains a CSV that articulates for each VHA/NCA/VBA Facility API ID, what is the official website for that facility. When new facilities publish new web pages, the Facilities team must submit change requests to the Lighthouse team, to update this CSV source of truth: 

~https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/website_data/websites.csv~ The CSV is controled by Lighthouse on a different system (possibly a different version control system). I'm not sure they actually have A CSV anymore or if they just update a database directly

Note (3/21/25): Why does this matter? When we operate the Facility Locator, we search Lighthouse and use the website data they return to point the user to the service. So that needs to be updated. Generally when we update the data to the lighthouse team it takes a day to get into the data (I believe they run a batch job every night with updates).


### PPMS and Lighthouse Mashups
- "Mash-up" searches for all urgent care locations (Community care/PPMS + VA) are performed on the front end.
- "Mash-up" searches for all emergency care locations (Community care/PPMS + VA) are performed on the front end

Mashups are difficult because the PPMS data is not paginated and does not return the total number of facilities found and the VA/Lighthouse data is paginated. As a result, we do not paginate the results and take the top 20 closest combined facilities. 


### Legacy locators
A variety of existing VA tools provide locators for different types of facilities. A summary of those is available in [Legacy Locators](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/legacy-locators.md)


## TODO: verify & cleanup
Ticketed: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18068<br/>
Jan 2024: the notes below, including the table, may all be out of date. Need to update as necessary for modern truth.<br/>
Mar 2024: The table is most certainly out of date. We no longer use ArcGIS for anything within faciliaty locator or even in Lighthouse and have removed any mention of it from the products as of March 2024.
Mar 2025: Crossed out GIS/ArcGIS/

### 2019 table
Last updated: November 2019

This table appears to be legacy discovery information, from before Facility Locator integrated with the Lighthouse Facilities API, and before CMS-generated facility pages were created. At that time, most facility pages were Facility Locator Detail pages (e.g. https://www.va.gov/find-locations/facility/vha_691GD), where the API ID for a facility generated the page. These pages included Access to Care data (wait times, satisfaction scores). On modernized facility pages, the Facility Locator now (2023) points to the modernized page and Access to Care data is no longer relevant to the Locator, but is instead integrated on the Facility CMS page. 

| **Source** | **Contains** | **Owner** | **API endpoint** | **Notes** |
| --- | --- |--- | --- | --- |
| ~~GIS~~ 	| VHA facility basic info (address, hours, lat/long, name, type) | | | Pulled daily through a Sidekiq job into the vets-api Postgres database |
| ~~ArcGIS~~  | VBA facility basic info (address, hours, lat/long, name, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov) | | Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ~~ArcGIS~~ | NCA facility basic info (address, hours, lat/long, name, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov)  | Cemetery: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/cemetery_data/cems.xml| Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ~~ArcGIS~~ | Vet Center facility basic info (address, hours, lat/long, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov) | | Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ~~SQL52~~ | Mental health phone number |  | https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/mental_health_data | ~~Pulled daily through a Sidekiq job after the GIS pull and stitched into the services for VHA facilities in base_facilities.~~ (_per Jeff Dunn, this work was not completed_) Updated manually and periodically from CDW resource |
| [Access to Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/data-sources/vha-data-source.md) | Wait times, satisfaction scores, services provided (except dental) | Project Manager: Theresa Baamonde (Theresa.Baamonde@microsoft.com) | | Pulled daily through a Sidekiq job, temporarily placed in Redis, and then stitched into base_facilities table in Postgres. <br/> 
wait times - https://www.accesstocare.va.gov/atcapis/v1.1/patientwaittimes <br/>
[Healthcare services offered at VHA facilities](https://www.accesstopwt.va.gov/Shep/getRawData?location=*)
[Access to Care satisfaction](https://www.accesstopwt.va.gov/Shep/getRawData?location=*) |
| Dental Services | Dental services | | https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/dental_service_data | Built from information in the old ArcGIS endpoint about which facilities offered Dental. In the future, this will be integrated into the CMS |
| Website URL CSV| Website URLs | Lighthouse maintains spreadsheet | Pulled daily from Lighthouse spreadsheet into vets-api. Merged daily by Sidekiq with base_facilities data in Postgres after the GIS/ArcGIS jobs run | |
| State Cemetery XL | Info on state cemeteries not managed by VA | External team maintains XML, updating it every 3 mos (https://www.cem.va.gov/cems/cems.xml) | | Pulled daily from an XML file that is checked into vets-api. Sidekiq transforms and inserts the data into base_facilities in Postgres. |
| PPMS | Community Care Provider info | PPMS |  | Web service | 


**Note Mar 21, 2025** Below, we don't actually use any of the URLs below in Facility-Locator except for the PPMS. And the URL they provide here doesn't actually work.

| **Source** | **URL** | **Access** |
| --- | --- | --- |
| VHA |  https://gis.va.gov/server/rest/services/VA/FacilitySitePoint_VHA/FeatureServer/0 | VA Network Access |
| NCA |  https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/NCA_Facilities/FeatureServer/0 | Public |
| VBA |  https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/VBA_Facilities/FeatureServer/0 | Public |
| Vet Centers |  https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/VHA_VetCenters/FeatureServer/0 | Public |
| Dental | | VA Network Access |
| Access to Care - Satisfaction | https://www.accesstopwt.va.gov/ | Public |
| Access to Care - Wait times | https://www.accesstocare.va.gov/ | Public |
| State cemeteries | https://www.cem.va.gov/cems/cems.xml | Public |
| PPMS | https://np.dws.ppms.va.gov/v1.0/$metadata | VA Network Access | 

Older doc: https://github.com/department-of-veterans-affairs/vets-contrib/blob/master/products/APIs/facility-locator/facilities-datasources.md


### RANDOM NOTES

* VHA Facility data is assembled from several different sources, and they all end up in the vets-api PostgreSQL database.
* VHA Facility data is uploaded to the Lighthouse on change via the POST queue on publish from Drupal 
* PPMS/Community Care data is queried through the PPMS Client – Provider Locator API
* Cemetery, Dental, Mental Health, and Facility website data are pulled in from Lighthouse 
* VC/VBA/NCA/VHA facility data is pulled from Lighthouse


## API data
Last update: March 2025

~~[Draft Mappings of Taxonomy to Primary Stop Codes, VAOS, and Acccess to Care Classifications](https://airtable.com/shr1qe5J2DmyKkPum/tbl15hQgw2HkM1yF1?blocks=hide)~~
Table does not work 3/21/25 - Not sure why we need this

[LocatorAPI.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/api/LocatorApi.js)

[Config.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/config.js)


- Facility Locator API ({vets-api-host e.g. api.va.gov}/**faciltiies_api/v2**/{va,ccp}) provides data to the Facility Locator application
- The Facility Locater API itself is stateless, and provides a clean, RESTful interface to one or more systems that are the source of truth for VA facility data. ~~VA stakeholders use these GIS systems as the data management tool to keep facility data up-to-date.~~
- There are two classes of facility relevant to this tool: VA facilities, and Non-VA "Choice Act" facilities. Information for the two classes of facility are provided by different data sources.
- This API does not align with the rest of vets-api in terms of any API-wide version paths, etc.
- There are three resource paths for this API:
  - Geographic facility search: POST /facilities_api/v2/va?<query>
    - Query terms:
      - Geographic extent
      - Facility type - top level filter selecting all/health/benefits/cemeteries
      - Specific services available - filter list of health/benefits service types
  - Facility detail: GET /facilities_api/v2/<facility_id>
    - Looks up a complete record of an individual facility by its unique ID (e.g. /facilities_api/v2/va/vha_603).
 - The bare GET /facilities_api or /facilities_api/v2 or /facilities_api/v2/va endpoint will be forbidden, as opposed to returning a list of all facilities.
 - The bare POST on /facilities_api/v2/va will return a paginated list of all facilities - defaulting to a page limit of 10 items 
- The API should define a maximum number of results to return for any given query. Otherwise a client could zoom out to the full extent of the US and generate a request all available VA facilities. Lighthouse and PPMS both have maximum limits, but they are unknown or may change
- When a map view is populated by a facility search, it only needs a subset of facility information to populate the map markers. The facility search endpoint can return a smaller record for each facility to cut down on traffic. However, since we populate the data in the results list next to the map on tablet and desktop views, this is not used.
-VA and Choice Act provider datasets have different lists of provider specialty services. If we want to provide a unified filtering mechansim we need an internal mapping between the service types.
  
[Facility Locator Schema](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/fl-schema.md)

-VA endpoint returns facilities with all the services available at that facility. The Choice Act endpoint returns providers, i.e. individual doctors/physician's assistants/etc; specifically each record identifies a single specialty of an individual provider at a single location. These individual records will need to be merged to create a useful record for map display.
 
**VA Health Facility (VHA) Object**
- `curl -d '{"type": "health"}' -H 'content-type: application/json' -X POST https://api.va.gov/facilities_api/v2/va`
- Total record count (where 1=1): 1386

**VA Cemetery (NCA) Object**
- `curl -d '{"type": "cemetery"}' -H 'content-type: application/json' -X POST https://api.va.gov/facilities_api/v2/va`
- Total Record Count: 316

**Choice Act Provider Object - now PPMS / CCP**
- Impossible to get number or list of all providers - requires an address or lat/long position -
- A 2023 report stated they had over 1.3 million providers in their database
- Their database is not accessible except via their Microsoft Azure application or via the API that has significant limitations
- Their developer dashboard has not been updated after their move to Microsoft Azure form Bing
- Most organizations use the Microsoft application and do not access their API
