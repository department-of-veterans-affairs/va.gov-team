## API Discovery 
Fall 2019

[Draft Mappings of Taxonomy to Primary Stop Codes, VAOS, and Acccess to Care Classifications](https://airtable.com/shr1qe5J2DmyKkPum/tbl15hQgw2HkM1yF1?blocks=hide)

[LocatorAPI.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/api/LocatorApi.js)

[Config.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/config.js)

**People**
- Information Architecture: Mikki Northius, @Mikki on Slack
- Vets-api Brian Gryth (brian.gryth@adhocteam.us)

**Cemetery**
- Example: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/cemetery_data/cems.xml

**Dental**
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/dental_service_data

**Mental Health**
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/mental_health_data

**Facility Websites**
- https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/website_data/websites.csv

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
  
[Facility Locator Schema](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/data/fl-schema.md)

[Sample Objects returned from the VA Health Facility endpoint and the Choice Act Provider endpoint](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/data/data-sources/facility-data-samples.md)
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
- Endpoint: https://services3.arcgis.com/aqgBd3l68G8hEFFE/arcgis/rest/services/ChoiceActProviders/FeatureServer/0
- Total record count (where 1=1): 792859
- Default Spatial Reference: 102100
- UniqueProviderCode is not a unique identifier for a record or even a facility. It identifies a provider (i.e. a doctor/nurse/etc), but a query for a given UniqueProviderCode may return multiple records for a provider with different addresses (if that provider works at multiple offices) or multiple records with the same address and different Specialty categories (if that provider is e.g. both a family nurse pracititioner and a certified nurse midwife). This example query has both types of duplication - same address/multiple specialties, and different address/same specialties.
- UniqueProviderCode sometimes starts with backslash, unknown whether that's intentional.
- It looks like providers with multiple specialties are represented as above - with separate records under the same address. We will generate a full list of all specialty values once some more API integration is in place.


- Error Handling: Errors are logged to Sentry under the platform-api-<environment> projects.
- https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/ArcGIS.com.md

XML service in http://www.[location].va.gov/services - example http://www.miami.va.gov/services

