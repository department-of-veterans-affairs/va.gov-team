# Facility Locator Engineering README 

## Key resources

**Basic architecture**
- [Facility Locator technical diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/technical-documentation.md)
- [Incident response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/technical-documentation.md#incident-response)
- [Backend Documentation (below)](https://github.com/department-of-veterans-affairs/va.gov-team/master/products/facilities/facility-locator/engineering/README.md#backend-documentation---nov-2019)
- [API data (below)](https://github.com/department-of-veterans-affairs/va.gov-team/master/products/facilities/facility-locator/engineering/README.md#api-data)
- [PPMS troubleshooting (below)](https://github.com/department-of-veterans-affairs/va.gov-team/master/products/facilities/facility-locator/engineering/README.md#ppms-troubleshooting)

**Feature functionality**

**Integrations**
- [Integration with Lighthouse](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/facility-locator-integration-with-lighthouse.md)


### Platform Developer docs
- [Platform Developer docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/) - Platform documentation about infrastructure, integrations, testing, monitoring, and releasing as well as engineering processes, best practices, and standards.
- [Vets-website feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide)



## Backend documentation - NOV 2019
From https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/facility-locator-backend-documentation.docx

**TO DO: validate for modern world and update as needed**

**Endpoints**
• Facility Locator data is being served up from the vets-api directly (version 0).
• There is an existing effort to use the Facilities API (in `/modules` within the same application) for all VHA facility data.

**Data Sources**
• VHA Facility data is assembled from several different sources, and they all end up in the local PostgreSQL database.
• VHA Facility data is uploaded to the database through a daily Sidekiq job. (See the Moving VHA data sources document).
• PPMS/Community Care data is queried through the PPMS Client – Provider Locator API
• Cemetery, Dental, Mental Health, and Facility website data are pulled in from xml or csv files directly (`/lib/facilities/`). 
• VC/VBA/NCA/VHA facility data is pulled in using the `MetadataClient` in the `/lib/facilities` folder.

**Data Response**
  Vets-API:
• VHA Facility data is stored in the local PostgreSQL database in the `base_facilities` table and is returned as JSON using the `VAFacilitySerializer`.
• PPMS/Community Care data is returned as JSON with the `ProviderSerializer`.
  Facilities-API:
• Facility data is returned as either JSON, or GeoJSON based upon request type, using `FacilitySerializer` or `GeoSerializer`.

**Performance (issues and solutions)**
• The main performance issues seem to be related to Kong (API Gateway), and may require more servers to be provisioned.
• There are also further optimizations that can likely be done at the DB level and/or in the API itself.
• Community Care requests call out to a 3rd-party API, are also creating a performance hit. A possible solution may be to set up a new daily Sidekiq jobs to pull down the PPMS data (or at least the Urgent Care and Pharmacy data) and load it into the local PostgreSQL database.


## API data
Last update: March 2022
**TODO: verify & update as necessary**

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
  
[Facility Locator Schema](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data/fl-schema.md)

[Sample Objects returned from the VA Health Facility endpoint and the Choice Act Provider endpoint](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data/data-sources/facility-data-samples.md)
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


## Mapbox implementation 


### Previous initiatives
- [March 2022: Mapbox Predictive Search Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/discovery/predictive-geolocation-discovery.md)

## PPMS troubleshooting

  - PPMS is making a change to their API
    - How to update the VCR tapes
  - Requests to PPMS are Failing
    - PPMS is returning a stack trace
    - The Breaker keeps tripping
    - PPMS is returning an empty body
    - PPMS requests are timing out
  - Requests to PPMS are SLOW
    - Forward Proxy is showing slow responses
    - PPMS says that they don’t see an issue
    - The [TIC](https://github.com/department-of-veterans-affairs/devops/blob/master/docs%2Faws-dx-transit-spoke-architecture%2Farchitecture.md)
  - PPMS Responses make no sense

### PPMS is making a change to their API
#### How to update the VCR tapes
  SSH into a staging box, make note of the internal IP Address. As a non root user run the `vcr.rb` script with the `-R` record flag. It will create the vcr tapes and copy them into the `/tmp` directory of the staging box.

  After the script has finished running run the same script with the `-D` download flag, it takes the IP Address as an argument. The script will then download the the vcr tapes into the current directory with the following naming convention: `#{datestamp}-#{offset}-ppms.yml` I found that keeping the tapes so you can compare the results was helpfull when trying to track down a change.

  Once you have the vcr tape downloaded to you machine copy it into the `vets-api` repo and replace the current script. You can then run the `rspec` test suite and fix any issues due to the data changes.

### General Troubleshooting
  These are the tools that I have used to diagnose problems
   - Access to the VA network (GFE or Citrix)
     - You can only access PPMS API docs from the VA Network
   - Access to AWS
     - We store the API keys in the ParamStore
     - PPMS APIs can be accessed from the vets-api vms hosted by amazon
   - Monitoring tools
     - [Graphana](http://grafana.vfs.va.gov/d/000000048/facility-locator-ppms?orgId=1)
     - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?query=is%3Aunresolved+FacilitiesApi&statsPeriod=14d)
   - Helpfull Scripts I've included
     - `vcr.rb` a single file bundler enabled app to generate vcr tapes outside `vets-api`
     - `request-to-curl` this is what I use to generate the `curl` command from any given url
   - Usefull things to know about `vets-api`
     - `FacilitiesApi::V1::PPMS::Configuration` includes some commented out Middleware
       - `curl` will log the request its attempting to make to `STDOUT`
       - `logger` logs the body of the response to `STDOUT`


### Requests to PPMS are Failing
  PPMS Requests are failing, You might notice then when monitoring Grafana, Sentry, or Datadog. These can be difficult to troubleshoot. You need to recreate the request and run it from a staging box. Remember to get the API keys from `ParamStore`. You can use the `vcr.rb` script to make some requests to PPMS and the bodies should help point you to the problem.

#### PPMS is returning a stack trace
  PPMS is having a major issue and `ppmsit@va.gov` needs to be notified ASAP.
  Make sure that the breaker isn't causing an issue (this is the reason we ratelimit requests from a given IP address)

#### PPMS is returning an empty body
  There are three things that may be having an issue.
  - PPMS
    - Does it work from the commandline (`curl`)?
    - Does it work from PPMSs SWAGGER page on the VA network?
      - you can't copy and paste into `citrix`
  - The Reverse Proxy
    - Check the request metrics in Grafana, do they seem normal?
    - Have there been any changes to the `ha-proxy` configs?

#### PPMS requests are timing out
  We have a really high timeout for a reason. But sometimes PPMS requests have taken over 2 minutes to return a response. When PPMS requests are timming out I recomend checking the Grafana Facilities dashboard. Is there a spike in response time? Do you have the same slow response if you make the request directly to PPMS without going through the reverse proxy? If you contact PPMS and they insist that the responses are fast on their end you may have an issue with the TIC. This has happened several times in the last two years and we haven't been able to get a consitant failure case to trouble shoot the problem.

