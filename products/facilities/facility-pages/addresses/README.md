# Facility Addresses: Data Sources and Google Maps directions
Related ticket: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20080


**Problem**: We use "Get directions on Google Maps" links for VA and non-VA facilities across many Sitewide products, and some of those links do not work on Google Maps.

**Research goal**: Gather information about how the data flows from its source to the front end (browser) to understand where problems exist and how we can solve them.

Each section below describes what we know about address data by facility type, where it displays on VA.gov and how it is transformed to create the Google Maps links. Note that this document focuses on the code that Sitewide owns and controls. Anything outside of the front end code and Facilities API (in vets-api), such as Lighthouse and down to the database layer, is not covered here.

## Summary / BLUF

There are four ways that we create Google Maps links in the front end for Sitewide:
1. content-build shared template (used by Facilities products except Facility Locator and FL detail pages)
2. next-build shared template (Event detail pages only)
3. vets-website Facilities application code (Facility Locator and FL detail pages)
4. vets-website Events widget (Event search results, both global outreach and Facility-specific)

From all of those places we see broken links primarily due to bad data in the data sources. The primary reason links break is inclusion of information not needed for street navigation in the data used to create the link, such as:
- Floor numbers
- Room numbers
- Building name
- Suite numbers
- Special characters (such as ampersands `&`)

The focus of Google Maps links should be the numeric street address and street name. Google has extensive algorithms in place to try to correctly interpret a wide range of inputs for Google Maps and will sometimes use building information to try to find results and ignore the given street address, navigating to the wrong location. The simpler the data we can give it, the better.

I did not find any meaningful transformation on facilities address data in vets-api or in any of the front end repositories used by Sitewide. There are some improvements we can make to our code, but the most helpful data transformation should happen at the database layer if we can access it. 

Trying to clean up the data itself at any other layer is brittle and not recommended. For instance, if Sitewide tried to uniformly remove floor numbers from the address data in vets-api or the front end, we would need to handle scenarios where someone might have used "Floor, "Flr" and any capitalization of those or other possible abbreviations for "floor." We would also need to handle "11th floor" or "Floor 11," and consider scenarios where "floor" might appear as part of a street name and should not be removed.

See **Recommendations** at the bottom of this document.

## VA health (VAMCs, CBOCs, etc.)

### Database / API information
- VAST -> VSSC -> BISL -> CDW -> Lighthouse
- New stations in VAST get a preliminary lat/long but the official geocoded attributes come from GSSC on monthly basis
- Lighthouse does daily validation on (mailing) address (using "VA address validator")

### Example pages in production

| Page type | Example page | How URLs are constructed | Page context where directions link(s) are included |
| --- | --- | --- | --- |
| VA Health System | https://www.va.gov/new-york-harbor-health-care/ | [content-build URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-content-build-or-next-build) | Locations |
| VA Health System Locations | https://www.va.gov/boston-health-care/locations/ | [content-build URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-content-build-or-next-build) | Main locations, Health clinic locations, Other nearby VA locations |
| VA Health Local Facility | https://www.va.gov/new-york-harbor-health-care/locations/harlem-va-clinic/ | [content-build URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-content-build-or-next-build) | Location and contact information |
| Facility Locator: VA Health | [Example](https://www.va.gov/find-locations/?address=Harlem%2C%20New%20York%2C%20New%20York%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=10027&facilityType=health&latitude=40.810925&longitude=-73.94701&page=1&radius=66&serviceType&bounds%5B%5D=-74.32701&bounds%5B%5D=40.430924999999995&bounds%5B%5D=-73.56701000000001&bounds%5B%5D=41.190925) | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Result card |


## Vet Centers and Outstations, Vet Center CAPS

### Database / API information
- **Vet Centers and Outstations**: VAST -> VSSC -> BISL -> CDW -> Lighthouse
- **Vet Center CAPS**: Editor created in Drupal - no presence in VAST
- New stations in VAST get a preliminary lat/long but the official geocoded attributes come from GSSC on monthly basis
- Lighthouse does daily validation on (mailing) address (using "VA address validator")

### Example pages in production

| Page type | Example page | How URLs are constructed | Page context where directions link(s) are included |
| --- | --- | --- | --- |
| Vet Center | https://www.va.gov/boston-vet-center/ | [content-build URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-content-build-or-next-build) | Location and contact information |
| Vet Center Locations | https://www.va.gov/boston-vet-center/locations/ | [content-build URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-content-build-or-next-build) | Main location, Other nearby Vet Centers |
| Facility Locator: Vet Centers | [Example](http://va.gov/find-locations/?address=San%20Francisco%2C%20California%2C%20United%20States&bounds%5B%5D%5B%5D=-122.799359&bounds%5B%5D%5B%5D=37.399238&bounds%5B%5D%5B%5D=-122.039359&bounds%5B%5D%5B%5D=38.159238&bounds%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=30.0067&context=San%20Francisco%2C%20California%2C%20United%20States&facilityType=vet_center&latitude=37.779238&longitude=-122.419359&page=1&radius=67&serviceType&bounds%5B%5D=-122.799359&bounds%5B%5D=37.399238&bounds%5B%5D=-122.039359&bounds%5B%5D=38.159238) | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Result card |




## Community Care Providers & Pharmacies

[Upstream data sources](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api#upstream-data-sources) describes the connection with PPMS (for Community Care providers and services) and the Lighthouse Facilities API from which the Sitewide APIs pull data.

Note that VA health facilities can be mixed in with Facility Locator search results for urgent care and emergency care, such as when a VA hospital is the nearest emergency care facility. VAST is the data source for those. PPMS is used for non-VA facilities that are in the VA network.

| Page type | Example page | How URLs are constructed | Page context where directions link(s) are included |
| --- | --- | --- | --- |
| Facility Locator: Urgent Care | [Example](https://www.va.gov/find-locations/?address=Albany%2C%20New%20York%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=Albany%2C%20New%20York%2C%20United%20States&facilityType=urgent_care&latitude=42.649864&longitude=-73.75274&page=1&radius=65&serviceType&bounds%5B%5D=-74.13274&bounds%5B%5D=42.269864&bounds%5B%5D=-73.37274000000001&bounds%5B%5D=43.029864) | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Result card |
| Facility Locator: Emergency Care | [Example](https://www.va.gov/find-locations/?address=Augusta%2C%20Maine%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=Augusta%2C%20Maine%2C%20United%20States&facilityType=emergency_care&latitude=44.314785&longitude=-69.77439&page=1&radius=65&serviceType&bounds%5B%5D=-70.15438999999999&bounds%5B%5D=43.934785&bounds%5B%5D=-69.39439&bounds%5B%5D=44.694785) | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Result card |
| Facility Locator: Community Providers | [Example](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=provider&serviceType=152W00000X&latitude=29.6267&longitude=-98.495114&radius=20&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States) | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Result card |
| Facility Locator: Community Pharmacies | [Example](https://www.va.gov/find-locations/?page=1&address=San%20Francisco%2C%20California%2C%20United%20States&facilityType=pharmacy&serviceType&latitude=37.779238&longitude=-122.419359&radius=67&bounds%5B%5D=-122.799359&bounds%5B%5D=37.399238&bounds%5B%5D=-122.039359&bounds%5B%5D=38.159238&context=San%20Francisco%2C%20California%2C%20United%20States) | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Result card |





## VBA (Region offices, Satellites and other benefit location types)

### Database / API information
- Sandy's DB - > CDW -> Lighthouse
- Lighthouse does daily validation on (mailing) address (using "VA address validator")

### Example pages in production

| Page type | Example page | How URLs are constructed | Page context where directions link(s) are included |
| --- | --- | --- | --- |
| VBA Facility | https://www.va.gov/portland-va-regional-benefit-office/ | [content-build URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-content-build-or-next-build) | Location and contact information, Other nearby VA locations |
| Facility Locator: VBAs | [Example](https://www.va.gov/find-locations/?address=San%20Francisco%2C%20California%2C%20United%20States&bounds%5B%5D%5B%5D=-122.799359&bounds%5B%5D%5B%5D=37.399238&bounds%5B%5D%5B%5D=-122.039359&bounds%5B%5D%5B%5D=38.159238&bounds%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=30.0067&context=San%20Francisco%2C%20California%2C%20United%20States&facilityType=benefits&latitude=37.779238&longitude=-122.419359&page=1&radius=137&serviceType&bounds%5B%5D=-123.199359&bounds%5B%5D=36.999238&bounds%5B%5D=-121.639359&bounds%5B%5D=38.559238) | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Result card |
| Facility Locator: detail pages for VBAs | https://www.va.gov/find-locations/facility/vba_343at | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Facility detail |





## VA cemeteries

### Database / API information
- **NCA national cemeteries**: name and website from NCA XML - all other data from CDW XML file
- **NCA state cemeteries**: NCA XML file

| Page type | Example page | How URLs are constructed | Page context where directions link(s) are included |
| --- | --- | --- | --- |
| Facility Locator: detail pages for VA cemeteries | https://www.va.gov/find-locations/facility/nca_854 | [vets-website URL construction](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#directions-links-from-vets-website) | Facility detail |




## Directions links from content-build or next-build

### content-build pages

Directions links' `href` attributes are created from this code snippet:

```js
https://maps.google.com?saddr=Current+Location&amp;daddr={{ directionsLinkAddress | strip }}
```

The `directionsLinkAddress` is a variable defined from the below attributes. The `| strip` removes any whitespace from the beginning or end of that variable.

```js
{{ entity.fieldAddress.addressLine1 }}, {{ entity.fieldAddress.locality }}, {{ entity.fieldAddress.administrativeArea }} {{ entity.fieldAddress.postalCode }}
```

Every content-build "Get directions on Google Maps" URL uses `addressLine`, `locality`, `administrativeArea` and `postalCode` retrieved from Drupal to construct the URLs.

For most URLs, the constituent parts of `entity.fieldAddress` are straightforward and construct clean URLs. For instance, at https://www.va.gov/new-york-harbor-health-care/, under **Locations** / Margaret Cochran Corbin VA Campus, the address deconstructs into the following parts:

| GraphQL data | Value |
| --- | --- |
| `entity.fieldAddress.addressLine1` | 423 East 23rd Street |
| `entity.fieldAddress.locality` | New York |
| `entity.fieldAddress.administrativeArea` | NY | 
| `entity.fieldAddress.postalCode` | 10010-5011 |

Those data create this URL: https://www.google.com/maps/dir/San+Antonio,+TX+78258/423+E+23rd+St,+New+York,+NY+10010/@34.6755261,-96.8542942,5z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x865c60493bc0a313:0x34d20f276cf23882!2m2!1d-98.4732718!2d29.6451457!1m5!1m1!1s0x89c2590c7f960175:0x7fd1b278c116d39b!2m2!1d-73.9768461!2d40.7370457!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D. 

That URL successfully navigates to Google Maps for "423 E 23rd St, New York, NY 10010."

URL construction encounters problems when the `addressLine1` contains details that are not useful for street navigation, such as floor, room, suite or other building information. For example, at https://www.va.gov/new-york-harbor-health-care/locations/harlem-va-clinic/, under **Location and contact information**, the address deconstructs into the following parts:

| GraphQL data | Value |
| --- | --- |
| `entity.fieldAddress.addressLine1` | 55 West 125th Street, Community Resource & Referral Center (CRRC), 11th Floor, Room 1101 |
| `entity.fieldAddress.locality` | New York |
| `entity.fieldAddress.administrativeArea` | NY | 
| `entity.fieldAddress.postalCode` | 10027-4544 |

Note that `addressLine1` includes floor and room information.

Those data create this URL: https://www.google.com/maps?saddr=Current+Location&daddr=55+West+125th+Street,+Community+Resource+&+Referral+Center+(CRRC),+11th+Floor,+Room+1101,+New+York,+NY+10027-4544, which does not completely load in Google Maps.

<img width="410" alt="Screenshot 2025-03-10 at 11 19 46 AM" src="https://github.com/user-attachments/assets/db2c97eb-43e6-492b-82d1-ff858c1d7c18" />

In some cases, the floor, room, suite or other building information is properly included in the `addressLine2` part of the data, so it is not used to construct the directions URL. For example, at https://www.va.gov/pontiac-vet-center/, under **Location and contact information**, the address deconstructs into the following parts:

| GraphQL data | Value |
| --- | --- |
| `entity.fieldAddress.addressLine1` | 44200 Woodward Avenue |
| `entity.fieldAddress.locality` | Pontiac |
| `entity.fieldAddress.administrativeArea` | MI | 
| `entity.fieldAddress.postalCode` | 48341 |

Those data create this URL: https://www.google.com/maps/dir/San+Antonio,+TX+78258/44200+Woodward+Ave,+Pontiac,+MI+48341/@35.62183,-101.3635351,5z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x865c60493bc0a313:0x34d20f276cf23882!2m2!1d-98.4732718!2d29.6451457!1m5!1m1!1s0x8824bf133733568d:0x5e96babafbe1d27d!2m2!1d-83.2725494!2d42.6144592!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D.

That URL successfully navigates to Google Maps for "44200 Woodward Ave, Pontiac, MI 48341."

<hr />

### next-build pages

Event detail pages' directions links are built using this next-build template: [googleMapsDirections/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/common/googleMapsDirections/index.tsx).


| Page type | Example URL | next-build template (if in prod) |
| --- | --- | --- |
| Event Detail (Facilities) | https://www.va.gov/hampton-health-care/events/77055/ | [event/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/layouts/event/index.tsx) |
| Event Detail (Outreach) | https://www.va.gov/outreach-and-events/events/76376/ | [event/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/layouts/event/index.tsx) |

In next-build, directions links' `href` attributes are created from the below code:

```js

const directionsString = [
  addressObj?.address_line1,
  addressObj?.locality,
  addressObj?.administrative_area,
]
  .filter(Boolean)
  .join(', ')
```

In an ideal case, the addresses are constructed simply from their parts on pages such as https://www.va.gov/hampton-health-care/events/77055/. Under the **Where** section, the address is formed as a single string:

```
70 Knells Ridge Road, Chesapeake, VA
```

The address deconstructs into the following parts:

| GraphQL data | Value |
| --- | --- |
| `addressObj.address_line1` | 70 Knells Ridge Road |
| `addressObj.locality` | Chesapeake |
| `addressObj.administrative_area` | VA | 

Those data create this URL: https://www.google.com/maps/dir/San+Antonio,+TX+78258/Knell's+Ridge+Dr,+Chesapeake,+VA+23320/@31.2772056,-108.7761351,4z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x865c60493bc0a313:0x34d20f276cf23882!2m2!1d-98.4732718!2d29.6451457!1m5!1m1!1s0x89babc9c141c200f:0x9f861c252e9604ee!2m2!1d-76.2422479!2d36.7549009!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D that does work properly.

<br />

`next-build` gets all `address_line1`, `locality` and `administrativeArea` data from Drupal, which has a few different ways of storing editor-controlled location information.

#### Drupal Events address input

**1. VA facilities**

<img width="700" alt="Screenshot 2025-03-06 at 12 46 26 PM" src="https://github.com/user-attachments/assets/98a0f32e-df76-4a35-842e-ddfe51bc18e7" />

**2. Non-VA locations**

<img width="700" alt="Screenshot 2025-03-06 at 12 57 32 PM" src="https://github.com/user-attachments/assets/20160867-1fe5-4388-9f51-b0a065241d8e" />

**3. Online**

<img width="700" alt="Screenshot 2025-03-06 at 12 57 37 PM" src="https://github.com/user-attachments/assets/9977be1a-341f-495e-ab3d-da401ded8023" />

<hr />

## Directions links from vets-website


### Facility Locator

Google Maps links in Facility Locator pages use this component for construction: [LocationDirectionsLink.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/facility-locator/components/search-results-items/common/LocationDirectionsLink.jsx).

The directions links use the following code for their `href` attributes:


```js

https://maps.google.com?saddr=${searchString}&daddr=${address}

```

The `searchString` represents whatever value was entered into the location input in the Facility Locator form (zip code or city, state). The `address` is formulated by a utility function called [buildAddressArray](https://github.com/department-of-veterans-affairs/vets-website/blob/dcbe7cf30e7aaae875b2292c6d61c182b7eced8d/src/platform/utilities/facilities-and-mapbox/index.js#L85). The different types of facilities can have different address formats from the API. The `Address from API` column in the table below shows the address data structure in the API response for each type of facility used in the Facility Locator application.

Note that Facility Locator search results are built with data directly from vets-api (not Drupal) which fetches information ultimately from the source database.

| Facility type | Address structure from API | Data source | Google Maps URL | Address used for maps URL | URL works properly? |
| --- | --- | --- | --- | --- | --- |
|[VA health (results item)](https://www.va.gov/find-locations/?address=Harlem%2C%20New%20York%2C%20New%20York%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=10027&facilityType=health&latitude=40.810925&longitude=-73.94701&page=1&radius=66&serviceType&bounds%5B%5D=-74.32701&bounds%5B%5D=40.430924999999995&bounds%5B%5D=-73.56701000000001&bounds%5B%5D=41.190925) | <img width="400" alt="Screenshot 2025-03-07 at 11 36 01 AM" src="https://github.com/user-attachments/assets/5554717e-8795-440d-aa28-8a295c19550c" /> | VAST -> VSSC -> BISL -> CDW -> Lighthouse | [Link](https://www.google.com/maps/dir/Harlem,+New+York,+NY/NYC+Human+Resources+Administration+St.+Nicholas+Job+Center,+132+W+125th+St,+New+York,+NY+10027/@40.8099512,-73.9497955,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89c2f66e2188a29f:0xb408afef09e2702e!2m2!1d-73.9464769!2d40.8115504!1m5!1m1!1s0x89c2f60d5c81d175:0x5e95eceb2540b2db!2m2!1d-73.9472327!2d40.8083467!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D) | 55 West 125th Street, Community Resource & Referral Center (CRRC), 11th Floor, Room 1101, New York, NY 10027-4544 | No, Google tries to navigate to the incorrect address at `NYC Human Resources Administration St. Nicholas Job Center, 132 W 125th St, New York, NY 10027` |
| [Urgent care (results item)](https://www.va.gov/find-locations/?address=Albany%2C%20New%20York%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=Albany%2C%20New%20York%2C%20United%20States&facilityType=urgent_care&latitude=42.649864&longitude=-73.75274&page=1&radius=65&serviceType&bounds%5B%5D=-74.13274&bounds%5B%5D=42.269864&bounds%5B%5D=-73.37274000000001&bounds%5B%5D=43.029864) | <img width="400" alt="Screenshot 2025-03-07 at 11 39 21 AM" src="https://github.com/user-attachments/assets/2cf38231-d7dc-4c77-b519-64cad3f2c4a3" /> | VAST -> VSSC -> BISL -> CDW -> Lighthouse | [Link](https://www.google.com/maps/dir/Albany,+New+York/50+New+Scotland+Ave,+Albany,+NY+12208/@42.6534529,-73.7851644,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89de0a34cc4ffb4b:0xe1a16312a0e728c4!2m2!1d-73.7544707!2d42.6518095!1m5!1m1!1s0x89de0a412c65fa63:0xae4421dd83ea843!2m2!1d-73.7746753!2d42.6524805!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D) | 50 NEW SCOTLAND AVE # MC192, ALBANY, NY 12208-3403 | Yes. Google Maps removes the `# MC192` when loading the map and navigates to `50 New Scotland Ave, Albany, NY 12208` |
| [Emergency care (results item)](https://www.va.gov/find-locations/?address=Augusta%2C%20Maine%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=Augusta%2C%20Maine%2C%20United%20States&facilityType=emergency_care&latitude=44.314785&longitude=-69.77439&page=1&radius=65&serviceType&bounds%5B%5D=-70.15438999999999&bounds%5B%5D=43.934785&bounds%5B%5D=-69.39439&bounds%5B%5D=44.694785) | <img width="243" alt="Screenshot 2025-03-07 at 11 51 56 AM" src="https://github.com/user-attachments/assets/a1af3b0f-04a8-4694-90cc-881dde39c9ed" /> | VAST -> VSSC -> BISL -> CDW -> Lighthouse | [Link](https://www.google.com/maps?saddr=Augusta,+Maine,+United+States&daddr=690+MINOT+AVE+STE+1,+AUBURN,+ME+04210-3922) | 690 MINOT AVE STE 1, AUBURN, ME 04210-3922 | Yes. Google Maps knows to translate "Ste" to `#` and navigates to `Central Maine Healthcare Orthopedics, 690 Minot Ave # 1, Auburn, ME 04210` |
| [Community provider (results item)](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=provider&serviceType=152W00000X&latitude=29.6267&longitude=-98.495114&radius=20&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States) | <img width="317" alt="Screenshot 2025-03-10 at 9 56 05 AM" src="https://github.com/user-attachments/assets/ea8988e5-d6c6-4384-9b54-b706d5b3da90" /> | [PPMS](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api#upstream-data-sources) | [Link](https://www.google.com/maps/dir/San+Antonio,+TX+78258/810+Knights+Cross+Dr+%23101,+San+Antonio,+TX+78258/@29.6390202,-98.5044176,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x865c60493bc0a313:0x34d20f276cf23882!2m2!1d-98.4732718!2d29.6451457!1m5!1m1!1s0x865c620d359ae179:0xa96e2b201b14b158!2m2!1d-98.4938012!2d29.6321116!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D) | 810 Knights Cross Dr Ste 101, San Antonio, TX 78258 | Yes. Google Maps knows to translate "Ste" to `#` and navigates to `810 Knights Cross Dr #101, San Antonio, TX 78258` |
| [Community pharmacy (results item)](https://www.va.gov/find-locations/?page=1&address=San%20Francisco%2C%20California%2C%20United%20States&facilityType=pharmacy&serviceType&latitude=37.779238&longitude=-122.419359&radius=67&bounds%5B%5D=-122.799359&bounds%5B%5D=37.399238&bounds%5B%5D=-122.039359&bounds%5B%5D=38.159238&context=San%20Francisco%2C%20California%2C%20United%20States) | <img width="266" alt="Screenshot 2025-03-10 at 10 13 16 AM" src="https://github.com/user-attachments/assets/9a25139e-c291-4fb8-9f13-b2da0a8b9168" /> | [PPMS](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facilities-api#upstream-data-sources) | [Link](https://www.google.com/maps?saddr=San+Francisco,+California,+United+States&daddr=1380+HOWARD+ST+RM+130,+SAN+FRANCISCO,+CA+94103) | 1380 HOWARD ST RM 130, SAN FRANCISCO, CA 94103 | No, the link doesn't work because of the inclusion of `RM 130` in the street address. Google tries to navigate to `1380 HOWARD ST RM 130, SAN FRANCISCO, CA 94103`. Confirmed the map works when `RM 130` is taken out. |
| [VBA / VA benefits (results item)](https://www.va.gov/find-locations/?address=San%20Francisco%2C%20California%2C%20United%20States&bounds%5B%5D%5B%5D=-122.799359&bounds%5B%5D%5B%5D=37.399238&bounds%5B%5D%5B%5D=-122.039359&bounds%5B%5D%5B%5D=38.159238&bounds%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=30.0067&context=San%20Francisco%2C%20California%2C%20United%20States&facilityType=benefits&latitude=37.779238&longitude=-122.419359&page=1&radius=137&serviceType&bounds%5B%5D=-123.199359&bounds%5B%5D=36.999238&bounds%5B%5D=-121.639359&bounds%5B%5D=38.559238) | <img width="386" alt="Screenshot 2025-03-10 at 10 27 35 AM" src="https://github.com/user-attachments/assets/33e205af-5da3-4d6f-8bb4-109ceb6ae079" /> | Sandy's DB - > CDW -> Lighthouse | [Link](https://www.google.com/maps/dir/San+Francisco,+California/VA+Oakland+Regional+Office,+North+Tower,+1301+Clay+St,+Oakland,+CA+94612/@37.7981747,-122.4267573,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x80859a6d00690021:0x4a501367f076adff!2m2!1d-122.4194155!2d37.7749295!1m5!1m1!1s0x808f80b045585ae9:0xe28d912e327d43e2!2m2!1d-122.2745457!2d37.804969!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D) | 1301 Clay Street, North Tower, 12th floor Room 1200, Oakland, CA 94612 | Yes. Google Maps takes out the floor and room information and navigates to `VA Oakland Regional Office, North Tower, 1301 Clay St, Oakland, CA 94612` |
| [VA cemeteries (results item)](https://www.va.gov/find-locations/?address=San%20Francisco%2C%20California%2C%20United%20States&bounds%5B%5D%5B%5D=-122.799359&bounds%5B%5D%5B%5D=37.399238&bounds%5B%5D%5B%5D=-122.039359&bounds%5B%5D%5B%5D=38.159238&bounds%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=30.0067&context=San%20Francisco%2C%20California%2C%20United%20States&facilityType=cemetery&latitude=37.779238&longitude=-122.419359&page=1&radius=133&serviceType&bounds%5B%5D=-124.85811429470711&bounds%5B%5D=35.851701768115944&bounds%5B%5D=-119.98060370529289&bounds%5B%5D=39.706774231884054) | <img width="329" alt="Screenshot 2025-03-10 at 10 29 09 AM" src="https://github.com/user-attachments/assets/dca8b0be-4078-42b8-8aae-a2046a2edeba" /> | NCA national cemeteries: name and website from NCA XML - all other data from CDW XML file, NCA state cemeteries: NCA XML file | [Link](https://www.google.com/maps?saddr=San+Francisco,+California,+United+States&daddr=1+Lincoln+Blvd,+Presidio+of+San+Francisco,+San+Francisco,+CA+94129) | 1 Lincoln Blvd, Presidio of San Francisco, San Francisco, CA 94129 | Yes (note that physical address is used). Google navigates to `1 Lincoln Blvd, San Francisco, CA 94129` |
| [Vet Centers (results item)](http://va.gov/find-locations/?address=San%20Francisco%2C%20California%2C%20United%20States&bounds%5B%5D%5B%5D=-122.799359&bounds%5B%5D%5B%5D=37.399238&bounds%5B%5D%5B%5D=-122.039359&bounds%5B%5D%5B%5D=38.159238&bounds%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D%5B%5D%5B%5D=30.0067&context=San%20Francisco%2C%20California%2C%20United%20States&facilityType=vet_center&latitude=37.779238&longitude=-122.419359&page=1&radius=67&serviceType&bounds%5B%5D=-122.799359&bounds%5B%5D=37.399238&bounds%5B%5D=-122.039359&bounds%5B%5D=38.159238) | <img width="279" alt="Screenshot 2025-03-10 at 10 30 37 AM" src="https://github.com/user-attachments/assets/a82d3eaf-79ab-4b8b-97cd-17068fe3fab0" /> | Vet Centers and Outstations: VAST -> VSSC -> BISL -> CDW -> Lighthouse, Vet Center CAPS: Editor created in Drupal - no presence in VAST | [Link](https://www.google.com/maps?saddr=San+Francisco,+California,+United+States&daddr=7200+Bancroft+Ave,+Suite+269,+Oakland,+CA+94605) | 7200 Bancroft Ave, Suite 269, Oakland, CA 94605 | Yes. Google navigates to `7200 Bancroft Ave #269, Oakland, CA 94605` |
| [VBA (detail page)](https://www.va.gov/find-locations/facility/vba_343at) | <img width="509" alt="Screenshot 2025-03-10 at 10 33 11 AM" src="https://github.com/user-attachments/assets/b5f8da7e-888a-4f94-9711-938f83e1ea1f" /> | Sandy's DB - > CDW -> Lighthouse | [Link](https://www.google.com/maps?saddr=undefined&daddr=104+Bodin+Circle,+Travis+Airman+&+Family+Readiness+Center+-+Building+778,+Travis+Air+Force+Base,+CA+94535) | 104 Bodin Circle, Travis Airman & Family Readiness Center - Building 778, Travis Air Force Base, CA 94535 | No, the `&` in the second part of the address tells Google to treat the rest of the address as another parameter and Google tries to navigate to `104 Bodin Circle, Travis Airman`. Source location is undefined here ([ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20836)). Even with the ampersand encoded properly, Google still navigates incorrectly to the wrong address likely due to the building information being included. |
| [VA cemeteries (detail page)](https://www.va.gov/find-locations/facility/nca_854) | <img width="307" alt="Screenshot 2025-03-10 at 11 11 17 AM" src="https://github.com/user-attachments/assets/d23f099a-58f0-4f24-a7c2-24f1d576051d" /> | NCA national cemeteries: name and website from NCA XML - all other data from CDW XML file, NCA state cemeteries: NCA XML file | [Link](https://www.google.com/maps?saddr=undefined&daddr=VAMC,+3600+Memorial+Blvd,+Kerrville,+TX+78028) | VAMC, 3600 Memorial Blvd, Kerrville, TX 78028 | No, but it is broken because the source location is undefined ([ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20836)). Google tries to navigate from an undefined source to `Kerrville VA Medical Ctr, 3600 Memorial Blvd, Kerrville, TX 78028`. With a defined source, this URL works. |

In the [buildAddressArray](https://github.com/department-of-veterans-affairs/vets-website/blob/dcbe7cf30e7aaae875b2292c6d61c182b7eced8d/src/platform/utilities/facilities-and-mapbox/index.js#L85) utility function, there are two code paths for creating the address string. If the data structure includes `address1`, `address2` and has a `physical` and/or `mailing` address, it is a "facility" type in the code. These data structures typically correspond to VAMC system locations, Vet Centers, etc. The alternative data structure are typically not official VA facilities but in-network health care facilities that are referred to as "provider" types in the code.

If the facility is a "facility" type with a physical address, the `buildAddressArray` function gathers the `address1`, `address2`, `address3`, `city`, `state` and `zip` and sends it back. If the facility is a "provider" type, the function gathers the `street`, `city`, `state` and `zip` and sends it back.

### Events Listings

The rest of the Google Maps links are in the Events listings React widget for the [Outreach and Events search results](https://www.va.gov/outreach-and-events/events/). They use this component: [ResultsWhereContent.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/696d470cc7ec0e7e817f831b3cdf658f65b29eea/src/applications/static-pages/events/components/Results/ResultsWhereContent.jsx#L46) (for Events listings).

The location information is extracted by a utility function in vets-website called [deriveEventLocations](https://github.com/department-of-veterans-affairs/vets-website/blob/8aef282b367dfa6c78bd8d6c54732da8fb2c4305/src/applications/static-pages/events/helpers/index.js#L266).

Event Listings address information comes from Drupal queries, and the utility function above has a couple of different ways of handling the data structure.

#### VA facilities

CMS example: https://prod.cms.va.gov/node/73876/edit

If an event takes place at a VA facility, the editor can search and select the name of a VA facility that has address information tied to it in Drupal. They do not need to manually enter any address information. They can separately add building, floor or room information. See the screenshots under [Drupal Events address input](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#drupal-events-address-input) for examples of how this data appears in the CMS.

On the front end, the data structure for an event at a VA facility might look something like this:

<img width="402" alt="Screenshot 2025-03-11 at 4 40 50 PM" src="https://github.com/user-attachments/assets/4c944fa5-bef9-4454-979b-968a65076e62" />

In this case, the address for the maps URL will end up in this format:

```js
'2400 Canal Street New Orleans, LA
```

The [Google Maps URL](https://maps.google.com/?saddr=Current+Location&daddr=2400%20Canal%20Street%20New%20Orleans,%20LA) for the above data structure will work as expected and Google will navigate to `2400 Canal St, New Orleans, LA 70119`.

#### Non-VA facilities

CMS example: https://prod.cms.va.gov/node/77579/edit

If an event takes place at a non-VA facility, the editor will need to enter specific address information in an address line 1 and line 2 field, as well as city and state. There is a separate field for building, floor or room information as well. See the screenshots under [Drupal Events address input](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/addresses/README.md#drupal-events-address-input) for examples of how this data appears in the CMS.

On the front end, the data structure for an event at a non-VA facility might look something like this:

<img width="342" alt="Screenshot 2025-03-11 at 4 44 50 PM" src="https://github.com/user-attachments/assets/c61900f9-4196-4497-bd06-ec7fd4dcd86a" />

In this case, the `deriveEventLocations` function will return an address structured like this:

```js
'861 Glenrock Road #Suite 220 Norfolk, VA'
```

The [Google Maps URL](https://maps.google.com/?saddr=Current+Location&daddr=861%20Glenrock%20Road%20#Suite%20220%20%20Norfolk,%20VA) for the above data structure will not work as expected due to the `#Suite` included. When that part is removed from the address, the map directs to `861 Glenrock Road, Norfolk, VA` as expected.

## Considerations

Google Maps links can also be constructed using a latitude and longitude, which we do have available in the context of facilities products. Using this data instead of potentially polluted addresses would mean far fewer broken links. There are considerable drawbacks to this approach, however:

- Example: [Pre-Discharge Site at Travis Air Force Base](https://www.va.gov/find-locations/?page=1&address=San%20Francisco%2C%20California%2C%20United%20States&facilityType=benefits&serviceType&latitude=37.779238&longitude=-122.419359&radius=137&bounds%5B%5D=-123.199359&bounds%5B%5D=36.999238&bounds%5B%5D=-121.639359&bounds%5B%5D=38.559238&context=San%20Francisco%2C%20California%2C%20United%20States) (4th result): this facility's Google Maps link does not currently work in production due to a couple of problems with its address data. Converting to a latitude/longitude URL with the given data from the API results in this Google Maps link instead: https://www.google.com/maps/dir/?api=1&destination=38.2685782,-121.9668204, which navigates to `106 Bodin Cir` instead of `104 Bodin Cir`.
- Example: [Audie L. Murphy Memorial Veterans' Hospital](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=emergency_care&serviceType&latitude=29.6267&longitude=-98.495114&radius=70&bounds%5B%5D=-98.875114&bounds%5B%5D=29.2467&bounds%5B%5D=-98.115114&bounds%5B%5D=30.0067&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States) (8th result): this facility's Google Maps link currently works correctly in production. Converting to a latitude/longitude URL with the given data from the API results in this Google Maps link instead: https://www.google.com/maps/dir/29.622272,-98.4973312/29.5084191,-98.5806826/@29.5655242,-98.6288906,12z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D which navigates to `7540-7530 Mertin Minter` instead of `7400 Mertin Minter`. The address in the directions is less specific and clear and could lead to confusion for anyone referencing it.


## Follow-up Items

- Google has [some documentation](https://developers.google.com/maps/documentation/urls/get-started) on how to construct Google Maps URLs without using their API. In particular, we need to [make sure our URLs are properly encoded](https://developers.google.com/maps/documentation/urls/get-started#constructing-valid-urls) for specific special characters such as `&`. If we can get access to the data sources, we can better identify which characters we need to handle and create a ticket.


## Recommendations

- Identify use cases for including `address2` and `address3` in vets-website URL construction (best identified by looking at the data in the databases). If there aren't any:
  1. don't include them in the generation of the URLs
  2. move any floor, room, suite and building info from `address1` values in the databases into `address2` or `address3` instead
- Facility Locator detail pages (VA cemeteries and some VBAs) have broken Google Maps links because the start location is undefined due to a code defect. I created a ticket to address this: [#20836](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20836)
