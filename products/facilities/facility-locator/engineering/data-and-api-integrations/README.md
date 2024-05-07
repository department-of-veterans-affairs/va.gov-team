# Facility Locator Data & API Documentation README

The Facility locator uses data from a variety of data sources. Please, for the love, update information as you modify the implementation in the live product. 


## Data / API integration details
The table below should become a display of modern integration data for the Facility Locator, as a topline summary. 

| **Source** | **Contains** | **Owner** | **API endpoint** | **Notes** |
| --- | --- |--- | --- | --- |
| [Access to Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/access-to-care) | Wait times, satisfaction scores, services provided (except dental) | Project Manager: Theresa Baamonde (Theresa.Baamonde@microsoft.com) (still?) | wait times - https://www.accesstocare.va.gov/atcapis/v1.1/patientwaittimes <br/>
[Healthcare services offered at VHA facilities](https://www.accesstopwt.va.gov/Shep/getRawData?location=*) | TODO: still true? -> Pulled daily through a Sidekiq job, temporarily placed in Redis, and then stitched into base_facilities table in Postgres. |
| [Lighthouse Facilities API](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/lighthouse-facilities-api/lighthouse-integration.md) | All facility contact data (NCA, VBA, RCS, VHA); a subsection of Sandy's DB VBA data; V0/V1: Services data | Lighthouse Facilities API team (#api-facilities in DSVA slack) | Lighthouse API documentation: https://developer.va.gov/explore/api/va-facilities | |
| [Mapbox](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/mapbox/mapbox-implementation.md) | Provides map functionality by coordinates | | | |
| [PPMS (Provider Profile Management System) & Community Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/ppms-community-care/ppms-implementation.md) | Provider info | PPMS team |  | |
| [VBA ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/vba/) | | | | |
| Website URL CSV| Website URLs | Lighthouse maintains spreadsheet | Pulled daily from Lighthouse spreadsheet into vets-api. Merged daily by Sidekiq with base_facilities data in Postgres after the GIS/ArcGIS jobs run | |
| State Cemetery XL | Info on state cemeteries not managed by VA | External team maintains XML, updating it every 3 mos (https://www.cem.va.gov/cems/cems.xml) | | Pulled daily from an XML file that is checked into vets-api. Sidekiq transforms and inserts the data into base_facilities in Postgres. |



**Facility Websites**
The Lighthouse Facilities API team maintains a CSV that articulates for each VHA/NCA/VBA Facility API ID, what is the official website for that facility. When new facilities publish new web pages, the Facilities team must submit change requests to the Lighthouse team, to update this CSV source of truth: 

https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/website_data/websites.csv


### PPMS and Lighthouse Mashups
- "Mash-up" searches for all urgent care locations (Community care/PPMS + VA) are performed on the front end.
- "Mash-up" searches for all emergency care locations (Community care/PPMS + VA) are performed on the front end


### Legacy locators
A variety of existing VA tools provide locators for different types of facilities. A summary of those is available in [Legacy Locators](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/legacy-locators.md)


## TODO: verify & cleanup
Ticketed: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18068
Jan 2024: the notes below, including the teable, may all be out of date. Need to update as necessary for modern truth.
Mar 2024: The table is most certainly out of date. We no longer use ArcGIS for anything within faciliaty locator or even in Lighthouse and have removed any mention of it from the products as of March 2024.

### 2019 table
Last updated: November 2019

This table appears to be legacy discovery information, from before Facility Locator integrated with the Lighthouse Facilities API, and before CMS-generated facility pages were created. At that time, most facility pages were Facility Locator Detail pages (e.g. https://www.va.gov/find-locations/facility/vha_691GD), where the API ID for a facility generated the page. These pages included Access to Care data (wait times, satisfaction scores). On modernized facility pages, the Facility Locator now (2023) points to the modernized page and Access to Care data is no longer relevant to the Locator, but is instead integrated on the Facility CMS page. 

| **Source** | **Contains** | **Owner** | **API endpoint** | **Notes** |
| --- | --- |--- | --- | --- |
| GIS 	| VHA facility basic info (address, hours, lat/long, name, type) | | | Pulled daily through a Sidekiq job into the vets-api Postgres database |
| ArcGIS  | VBA facility basic info (address, hours, lat/long, name, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov) | | Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ArcGIS | NCA facility basic info (address, hours, lat/long, name, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov)  | Cemetery: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/cemetery_data/cems.xml| Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ArcGIS | Vet Center facility basic info (address, hours, lat/long, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov) | | Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ~~SQL52~~ | Mental health phone number |  | https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/mental_health_data | ~~Pulled daily through a Sidekiq job after the GIS pull and stitched into the services for VHA facilities in base_facilities.~~ (_per Jeff Dunn, this work was not completed_) Updated manually and periodically from CDW resource |
| [Access to Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/data-sources/vha-data-source.md) | Wait times, satisfaction scores, services provided (except dental) | Project Manager: Theresa Baamonde (Theresa.Baamonde@microsoft.com) | | Pulled daily through a Sidekiq job, temporarily placed in Redis, and then stitched into base_facilities table in Postgres. <br/> 
wait times - https://www.accesstocare.va.gov/atcapis/v1.1/patientwaittimes <br/>
[Healthcare services offered at VHA facilities](https://www.accesstopwt.va.gov/Shep/getRawData?location=*)
[Access to Care satisfaction](https://www.accesstopwt.va.gov/Shep/getRawData?location=*) |
| Dental Services | Dental services | | https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/dental_service_data | Built from information in the old ArcGIS endpoint about which facilities offered Dental. In the future, this will be integrated into the CMS |
| Website URL CSV| Website URLs | Lighthouse maintains spreadsheet | Pulled daily from Lighthouse spreadsheet into vets-api. Merged daily by Sidekiq with base_facilities data in Postgres after the GIS/ArcGIS jobs run | |
| State Cemetery XL | Info on state cemeteries not managed by VA | External team maintains XML, updating it every 3 mos (https://www.cem.va.gov/cems/cems.xml) | | Pulled daily from an XML file that is checked into vets-api. Sidekiq transforms and inserts the data into base_facilities in Postgres. |
| PPMS | Provider info | | | Web service | 


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
* VHA Facility data is uploaded to the database through a daily Sidekiq job. (See the Moving VHA data sources document).
* PPMS/Community Care data is queried through the PPMS Client – Provider Locator API
* Cemetery, Dental, Mental Health, and Facility website data are pulled in from xml or csv files directly (`/lib/facilities/`). 
* VC/VBA/NCA/VHA facility data is pulled in using the `MetadataClient` in the `/lib/facilities` folder.


## API data
Last update: March 2022
**TODO: verify & update as necessary**

[Draft Mappings of Taxonomy to Primary Stop Codes, VAOS, and Acccess to Care Classifications](https://airtable.com/shr1qe5J2DmyKkPum/tbl15hQgw2HkM1yF1?blocks=hide)

[LocatorAPI.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/api/LocatorApi.js)

[Config.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/config.js)


- Facility Locator API provides data to the Facility Locator application
- The Facility Locater API itself is stateless, and provides a clean, RESTful interface to one or more GIS systems that are the source of truth for VA facility data. VA stakeholders use these GIS systems as the data management tool to keep facility data up-to-date.
- There are two classes of facility relevant to this tool: VA facilities, and Non-VA "Choice Act" facilities. Information for the two classes of facility are provided by different data sources (both ArcGIS-based) with differing feature schemas.
- This API will align with the rest of vets-api in terms of any API-wide version paths, etc. So a proposed path of /foo should be understood to be relative to any additional vets-api prefix (currently /v0).
- There are two resource paths for this API:
  - Geographic facility search: GET /facilities?<query>
    - Query terms:
    - Geographic extent
    - Facility type - top level filter selecting all/health/benefits/cemeteries
    - Specific services available - filter list of health/benefits service types
  - Facility detail: GET /facilities/<facility_id>
    - Looks up a complete record of an individual facility by its unique ID.
 - The bare GET /facilities endpoint will be forbidden, as opposed to returning a list of all facilities.  
- The API should define a maximum number of results to return for any given query. Otherwise a client could zoom out to the full extent of the US and generate a request all available VA facilities. The backend GIS API supports a limit parameter, but it is unknown how results are ordered.
- The backend GIS API returns a single feature type, essentially a large flat JSON object for each facility. We expect we will want to massage this format into something more structured for consumption by the front end application. Exact format is to be determined.
- When a map view is populated by a facility search, it only needs a subset of facility information to populate the map markers. The facility search endpoint can return a smaller record for each facility to cut down on traffic. However, there might be a benefit to returning the full record - the frontend could optimistically use that info for display in a detailed facility view without incurring another round trip. We will assess the relative sizes of the full and reduced records to decide what to do here.
-VA and Choice Act provider datasets have different lists of provider specialty services. If we want to provide a unified filtering mechansim we need an internal mapping between the service types.
  
[Facility Locator Schema](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/fl-schema.md)

-VA endpoint returns facilities with all the services available at that facility. The Choice Act endpoint returns providers, i.e. individual doctors/physician's assistants/etc; specifically each record identifies a single specialty of an individual provider at a single location. These individual records will need to be merged to create a useful record for map display.
 
**VA Health Facility (VHA) Object**
- Endpoint: https://maps.va.gov/server/rest/services/PROJECTS/Facility_Locator/MapServer/0
- Total record count (where 1=1): 1176
- Default Spatial Reference: 4326
- StationID is a unique identifier across all health facilities.

**VA Cemetery (NCA) Object**
- Endpoint: https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/NCA_Facilities/FeatureServer/0
- Total Record Count: 140
- Default Spatial Reference: 102100
- CEMETERY_I (Cemetery ID) is a stable facility identifier. There are a couple of records with duplicate IDs due to cemeteries that have multiple disjoint parcels represented with distinct records.
- Note separate facility address and mailing address.

**Choice Act Provider Object**
- Endpoint: https://services3.arcgis.com/aqgBd3l68G8hEFFE/arcgis/rest/services/ChoiceActProviders/FeatureServer/0 <-- 2023-12-28: broken link. Is this now PPMS?
- Total record count (where 1=1): 792859
- Default Spatial Reference: 102100
- UniqueProviderCode is not a unique identifier for a record or even a facility. It identifies a provider (i.e. a doctor/nurse/etc), but a query for a given UniqueProviderCode may return multiple records for a provider with different addresses (if that provider works at multiple offices) or multiple records with the same address and different Specialty categories (if that provider is e.g. both a family nurse pracititioner and a certified nurse midwife). This example query has both types of duplication - same address/multiple specialties, and different address/same specialties.
- UniqueProviderCode sometimes starts with backslash, unknown whether that's intentional.
- It looks like providers with multiple specialties are represented as above - with separate records under the same address. We will generate a full list of all specialty values once some more API integration is in place.


- Error Handling: Errors are logged to Sentry under the platform-api-<environment> projects.
- https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/ArcGIS.com.md

XML service in http://www.[location].va.gov/services - example http://www.miami.va.gov/services



## How the API file is made
TODO: This is 2019 data. Is it true? Do we need it? If so, update / integrate, and if not, delete.

From email from Jane Newman , 10/10/2019:

Data Downloaded 2/11/19: How the API is made: from chris johnston: 

1/ Facility Locator and Facilities API call into a database on AWS

2/ That db gets a daily dump from the Corporate Data Warehouse (CDW)
- An intervening step involving a tool called GeoBISL? 

3/ Corporate Data Warehouse gets its data from a variety of sources, for example:
- VAMC hours and addresses come from the VAST (Veteran’s Administration Site Tracking, maybe?) database.
  - VAST has this data updated periodically by site managers, following a pretty stringent set of rules which allow up to 90 days for changes to be requested, reviewed, approved and entered (though in my experience it doesn’t take this long). 
  - There is an automatic daily job that updates the Facility data in CDW
  - Random: There is also a distro list sent out twice a week that includes a JSON file and SQL script representing changes in VAMC data since the previous update. Unsure who consumes this.
 - Benefits Regional Offices (RO) get this data updated in CDW directly by a guy in VBA who runs a SQL script when there’s a change
 - VAMC services get this data from [??? have not figured this out yet ???]
 
 https://airtable.com/tblmcwLiZWPbYwowt/viwAt8ypjHdku5nMP?blocks=hide

