# Facility Locator Data & API Documentation README

The Facility locator uses data from a variety of data sources. Please, for the love, update information as you modify the implementation in the live product. 


## Data / API integration details
The table below should become a display of modern integration data for the Facility Locator, as a topline summary. 

| **Source Implementation details** | **Contains** | **Owner** | **API endpoint** | **Notes** | 
--- | --- | --- | --- | ---
| [Lighthouse Facilities API](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/lighthouse-facilities-api/lighthouse-integration.md) | All facility contact data (NCA, VBA, RCS, VHA); a subsection of [Sandy's DB VBA data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/vba/vba-data-consistency-issues.md); VHA Services data | [LH Facilities API team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/lighthouse-facilities-api/lighthouse-integration.md#owners) | Lighthouse API documentation: https://developer.va.gov/explore/api/va-facilities | The LH Facilities API is integrated via the [vets-api Facilities API](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api). | 
| [PPMS (Provider Profile Management System) & Community Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/ppms-community-care/ppms-implementation.md) | Community Care Provider, Pharmacy, Urgent Care, and Emergency Care records | [PPMS team ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/ppms-community-care/ppms-implementation.md#owners--support) | We use several PPMS endpoints for Pharmacy (paginated), Provider (unpaginated), and Place of Service (unpaginated) | |
| [Mapbox](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/mapbox/mapbox-implementation.md) | Provides map functionality by coordinates | Software as a service via monthly subscription | We use many. Details in linked Mapbox page | |
| [Access to Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/engineering/data-and-api-integrations/access-to-care) | Wait times, satisfaction scores, services provided (except dental) | [ATC Owners](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/access-to-care/access-to-care-implementation.md#owners) | wait times - https://www.accesstocare.va.gov/atcapis/v1.1/patientwaittimes | We **DO NOT** use this directly, we use the lighthouse provided /services endpoint to capture this data. [More usage info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/access-to-care/access-to-care-implementation.md#usage-in-the-facility-locator)


### PPMS and Lighthouse Mashups
In some cases, a Facility Locator search needs to provide integrated search results pulled from 2 different API sources: PPMS, and Lighthouse. We call these "mashups".

Mashups are difficult because PPMS returns all facilities by location, paginated, and THEN filters by additional search criteria. In effect, this means our search results cannot be effectively paginated, and results do not return an accurate total number of facility matches. VA/Lighthouse data _is_ paginated. As a result: we do not paginate results for mash up searches. Instead, we display the top 20 closest combined facilities. 

Mashups include: 
- Urgent care: showing Community care/PPMS Urgent Care service matches, plus VA Health facilities that offer the Urgent Care service (from Lighthouse) on the front end.
- Urgent care: showing Community care/PPMS Emergency Care service matches, plus VA Health facilities that offer the Emergency Care service (from Lighthouse) on the front end.

### Legacy locators
A variety of existing VA tools provide locators for different types of facilities. A summary of those is available in [Legacy Locators](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/legacy-locators.md)

## API data 
**(SHOULD THIS MOVE TO https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api ?)**

Last update: March 2025

[LocatorAPI.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/api/LocatorApi.js)

[Config.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/facility-locator/config.js)


- Facilities API ({vets-api-host e.g. api.va.gov}/**faciltiies_api/v2**/{va,ccp}) provides data to the Facility Locator application
- The Facilities API itself is stateless, and provides a clean, RESTful interface to one or more systems that are the source of truth for VA facility data.
- There are two classes of facility relevant to this tool: VA facilities, and Non-VA Community Care facilities. Information for the two classes of facility are provided by different data sources.
- The vets-api Facilities API does not align with the rest of vets-api in terms of any API-wide version paths, etc.
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
