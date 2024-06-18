# Facilities API
Last updated: May 10, 2024

## Code
https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/facilities_api
Current versions: 
* V1 = maps to Lighthouse V0. LH V0 slated for deprecation June 14, 2024.
* V2 = maps to Lighthouse V1. Shipped May 10, 2024

## Customers
1. Facility Locator
2. 1010 Health apps team - PM: Heather Justice (May 2024)

## Data sources
- Lighthouse Facilities API (/va endpoint) -- Lighthouse centralizes data from a variety of other upstream sources, including: 
  - [**VHA**] VAST: source of truth for VHA facility locations, hours, status (open vs. closed), including VA Medical Centers, VA Clinics, and all types of Vet Centers. 
  - [**VBA**] Sandy's DB: source of truth for VBA facility locations, hours, status (open vs. closed). Sandy's DB is manually maintained by Michelle Middaugh. Long-term: Sandy's DB will be deprecated when VBA facility information is fully migrated to Drupal, modernized facilities are launched, and Drupal becomes source of truth.
  - [**NCA**] cem.va.gov: The NCA TeamSite, cem.va.gov, hosts two XML files that Lighthouse scrapes for NCA records, below, and LH augments that data with some fields pulled from CDW via the table SQL40.BISL_GIS_SpatialData.[DOEx].[v_FacilityLocator_NCA]:
    - national.xml which contains all National VA Cemeteries 
    - cems.xml which has State, Local, and Tribal Cemeteries
- PPMS / Community Care (/ccp endpoint)

### Inaccurate Data
Facility Locator documentation includes additional info on the [Process for reporting inaccurate data in Facility Locator ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/reporting-inaccurate-data.md).

### vets-API Facilities API v1
```mermaid
flowchart LR
    O(VAST) -->|Most VA facility names, addresses etc.| V
    P(CARMA) --> |Health services - Caregiver Support| V
    R(Legacy data source) -->|Health services - most others| V
    S(Sandy's DB)-->|Benefit services and benefit facility data| V
    T(NCA: cem.va.gov XML files) --> |NCA facilities | V
    U(PPMS) -->|Non-VA facility and service data| X
    V[Lighthouse Facility API v0] -->|VA facility and service data| X
    X[vets-api Facility API v1]

```

### vets-API Facilities API v2
```mermaid
flowchart LR
    O(VAST) -->|Most facility names, addresses etc.| W
    P(CARMA) --> |Health services - Caregiver Support| W
    S(Sandy's DB)-->|Benefit services| W
    M(NCA: cem.va.gov XML files) --> |NCA facilities | W
    U(PPMS) -->|Non-VA facility and service data| Y
    T(Drupal) -->|Health services - most others| W
    T -.->|Benefit services| W
    Q(???) -->|Health services - Mental health| W 
    W[Lighthouse Facility API v1] -->|VA facility and service data| Y
    Y[vets-api Facility API v2]
```

## Lighthouse Facilities API product dependencies / scope
In the event that Lighthouse Facilities API releases a new version or is deprecating an old endpoint, the following interactions need to be kept in mind and tested / updated accordingly:

### Products/features using facilities-api calls with LH Facilities API data

- Facility pages (VAMC, Vet Center, VBA Regional Offices):
  - Other locations list 
  - Mini map - LH request returns the lat/long used to generate the maps
- Facility Locator UI
  - Facilities returned from searches
  - Facility detail page contents for non-modernized facilities (currently: Cemeteries, Benefits offices), e.g. https://www.va.gov/find-locations/facility/nca_907
  - Urgent care > Service type filter options. These options are combined with PPMS data from outside LH API & presented as a single list.
  - Emergency care > Service type filter options. These options are combined with PPMS data from outside LH API & presented as a single list.
- CTA widget on healthcare apps pages (Medical records, Appointments, Prescription refill, Secure messaging, Lab/test results): uses Facility API user and calls facility-api in order to return Cerner facility data for logged in users 

### Products/features integrated directly with LH Facilities API data (_not_ via facilities-api):

- Facility pages data (VAMC, Vet Center, VBA Regional Office): e.g. name, location info, geocoding (pull)
- Facilities CMS migration (cms-overlay). Drupal does **not** route through the vets-api facilities-api. However: in cases where Drupal is the source of truth and provides data to Lighthouse, the facilities-api then also receives/ contains that info via the Lighthouse Facilities API.Includes:
  - Facility statuses (push)
  - Operating Status
  - Detailed Health Services (push)
  - Health Care System
    - health connect phone
  - Core Fields
    - Mental Health phone numbers (push)
    - Facility URL (not yet used)

More information on Drupal content models that interact with the Lighthouse Facilities API is available within Drupal's content model documentation: https://prod.cms.va.gov/admin/structure/cm_document?title=&documented_entity_op=contains&for=&stakeholder=All&pulled=All&pushed=1112&notes=

### Products/features NOT YET dependent on LH Facilities API data but roadmapped

- Facility Locator UI
  - Contents of the Service Type filter for any Facliity type - [#15541](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15541)

### Products/features NOT dependent on LH Facilities API data 

- Facility Locator UI
  - Contents of the Facility Type filter
- PPMS Community care, Community pharmacy, and provider training data, including Service type typeahead

