https://github.com/department-of-veterans-affairs/vets.gov-team/blob/ead0fe129bfee6b8e7eaae59d7f4f681a37dec15/Products/Global/Facilities_Locator/EngFiles/Facility%20Data%20Samples.md

https://github.com/department-of-veterans-affairs/va.gov-team/blob/03dd522fd1036a097d6370fc407d0b95a4a33e24/products/health-care/appointments/engineering/design_to_service_mapping_discovery.md

https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/facilities/facility-locator/product/api-discovery-links.md

## People
- Information Architecture: Mikki Northius, @Mikki on Slack

## Cemetery
- Example: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/cemetery_data/cems.xml

## Dental
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/dental_service_data

## Mental Health
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/mental_health_data

## Facility Websites
- https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/website_data/websites.csv

## [Facility API](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/ead0fe129bfee6b8e7eaae59d7f4f681a37dec15/Products/Global/Facilities_Locator/EngFiles/API%20Design.md)
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
- *The API should define a maximum number of results to return for any given query. Otherwise a client could zoom out to the full extent of the US and generate a request all available VA facilities. The backend GIS API supports a limit parameter, but it is unknown how results are ordered.*
- The backend GIS API returns a single feature type, essentially a large flat JSON object for each facility. We expect we will want to massage this format into something more structured for consumption by the front end application. Exact format is to be determined.
- When a map view is populated by a facility search, it only needs a subset of facility information to populate the map markers. The facility search endpoint can return a smaller record for each facility to cut down on traffic. However, there might be a benefit to returning the full record - the frontend could optimistically use that info for display in a detailed facility view without incurring another round trip. We will assess the relative sizes of the full and reduced records to decide what to do here.
-*VA and Choice Act provider datasets have different lists of provider specialty services. If we want to provide a unified filtering mechansim we need an internal mapping between the service types.*
  
#[Facility Locator Schema](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/ead0fe129bfee6b8e7eaae59d7f4f681a37dec15/Products/Global/Facilities_Locator/EngFiles/FL%20Schema.md)
 
