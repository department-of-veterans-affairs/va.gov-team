# Facilities Addresses: Data Sources and Google Maps

We receive addresses for VA facilities and community providers from several data sources. The format of those data when retrieved from the data sources can vary, and we also have variations in the way we format the data on the front end. This ultimately can affect the utility of the "Get directions on Google Maps" links that we use in the context of a facility address.

This document describes the current state of the code and Google Maps directions link construction to build a foundation for improving the code and making consistent URLs for Google Maps that work.

## "Get directions on Google Maps" links from content-build or next-build

### content-build

Directions links on all Drupal pages except for Events are built using this **content-build** template: [directions-google-maps.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/includes/directions-google-maps.liquid). 

The page's main template (which may not necessarily reference `directions-google-maps.liquid` directly) and an example page are also here for reference.

| Page type | Example URL | content-build template |
| --- | --- | --- |
| VA Health System | https://www.va.gov/new-york-harbor-health-care/ | [health_care_region_page.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/health_care_region_page.drupal.liquid) |
| VA Health System Locations | https://www.va.gov/boston-health-care/locations/ | [locations_listing.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/locations_listing.drupal.liquid) |
| VA Health Local Facility | https://www.va.gov/new-york-harbor-health-care/locations/harlem-va-clinic/ | [health_care_local_facility.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/health_care_local_facility.drupal.liquid) |
| Vet Center | https://www.va.gov/boston-vet-center/ | [vet_center.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/vet_center.drupal.liquid) |
| Vet Center Locations | https://www.va.gov/boston-vet-center/locations/ | [vet_center_locations_list.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/vet_center_locations_list.drupal.liquid) |
| VBA Facility | https://www.va.gov/portland-va-regional-benefit-office/ | [vba_facility.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/vba_facility.drupal.liquid) |

<br />

Directions links' `href` attributes are created from the below code:

```js
https://maps.google.com?saddr=Current+Location&amp;daddr={{ directionsLinkAddress | strip }}
```

The first part of the URL leading up to the curly braces is hardcoded. Within the curly braces (`{{ }}`), the `directionsLinkAddress` is a variable defined from the below attributes. The `| strip` removes any whitespace from the beginning or end of the result below. Every page type in the above table uses this exact structure (though the code may differ slightly based on how the GraphQL queries define the address information).

```js
{{ entity.fieldAddress.addressLine1 }}, {{ entity.fieldAddress.locality }}, {{ entity.fieldAddress.administrativeArea }} {{ entity.fieldAddress.postalCode }}
```

For most of the above pages, the parts of `entity.fieldAddress` are straightforward and construct clean URLs. For instance, at https://www.va.gov/new-york-harbor-health-care/, under **Locations** / Margaret Cochran Corbin VA Campus, the address deconstructs into the following parts:

| GraphQL data | Value |
| --- | --- |
| `entity.fieldAddress.addressLine1` | 423 East 23rd Street |
| `entity.fieldAddress.locality` | New York |
| `entity.fieldAddress.administrativeArea` | NY | 
| `entity.fieldAddress.postalCode` | 10010-5011 |

Those data create a URL like this: https://www.google.com/maps/dir/San+Antonio,+TX+78258/423+E+23rd+St,+New+York,+NY+10010/@34.6755261,-96.8542942,5z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x865c60493bc0a313:0x34d20f276cf23882!2m2!1d-98.4732718!2d29.6451457!1m5!1m1!1s0x89c2590c7f960175:0x7fd1b278c116d39b!2m2!1d-73.9768461!2d40.7370457!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D. 

That link successfully navigates to Google Maps for "423 E 23rd St, New York, NY 10010".

Things get a bit muddy when the `addressLine1` contains details that are not useful for driving directions, such as floor, room, suite or building title information. For example, at https://www.va.gov/new-york-harbor-health-care/locations/harlem-va-clinic/, under **Location and contact information**, the address deconstructs into the following parts:

| GraphQL data | Value |
| --- | --- |
| `entity.fieldAddress.addressLine1` | 55 West 125th Street, Community Resource & Referral Center (CRRC), 11th Floor, Room 1101 |
| `entity.fieldAddress.locality` | New York |
| `entity.fieldAddress.administrativeArea` | NY | 
| `entity.fieldAddress.postalCode` | 10027-4544 |

Those data create a URL like this: https://www.google.com/maps?saddr=Current+Location&daddr=55+West+125th+Street,+Community+Resource+&+Referral+Center+(CRRC),+11th+Floor,+Room+1101,+New+York,+NY+10027-4544, which does not completely load in Google Maps due to the floor and room numbers included.

In some cases, the floor, room, suite or building title information is properly included in the `addressLine2` part of the data, so it is not used to construct the directions URL. For example, at https://www.va.gov/pontiac-vet-center/, under **Location and contact information**, the address deconstructs into the following parts:

| GraphQL data | Value |
| --- | --- |
| `entity.fieldAddress.addressLine1` | 44200 Woodward Avenue |
| `entity.fieldAddress.locality` | Pontiac |
| `entity.fieldAddress.administrativeArea` | MI | 
| `entity.fieldAddress.postalCode` | 48341 |

Those data create a URL like this: https://www.google.com/maps/dir/San+Antonio,+TX+78258/44200+Woodward+Ave,+Pontiac,+MI+48341/@35.62183,-101.3635351,5z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x865c60493bc0a313:0x34d20f276cf23882!2m2!1d-98.4732718!2d29.6451457!1m5!1m1!1s0x8824bf133733568d:0x5e96babafbe1d27d!2m2!1d-83.2725494!2d42.6144592!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D that does work properly.

### next-build

Event detail pages' directions links are built using this next-build template: [googleMapsDirections/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/common/googleMapsDirections/index.tsx).


| Page type | Example URL | next-build template (if in prod) |
| --- | --- | --- |
| Event Detail (Facilities) | https://www.va.gov/hampton-health-care/events/77055/ | [event/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/layouts/event/index.tsx) |
| Event Detail (Outreach) | https://www.va.gov/outreach-and-events/events/76376/ | [event/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/layouts/event/index.tsx) |

In next-build, directions links href attributes are created from the below code:

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

Those data create a URL like this: https://www.google.com/maps/dir/San+Antonio,+TX+78258/Knell's+Ridge+Dr,+Chesapeake,+VA+23320/@31.2772056,-108.7761351,4z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x865c60493bc0a313:0x34d20f276cf23882!2m2!1d-98.4732718!2d29.6451457!1m5!1m1!1s0x89babc9c141c200f:0x9f861c252e9604ee!2m2!1d-76.2422479!2d36.7549009!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D that does work properly.

next-build gets all events data from Drupal, which has a few different ways of entering location information.

## "Get directions on Google Maps" links from vets-website


### Facility Locator

There are also Google Maps links in Facility Locator pages. They use this component for construction: [LocationDirectionsLink.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/facility-locator/components/search-results-items/common/LocationDirectionsLink.jsx) (for Facility Locator links). Below are some example pages where the URLs can be found.

The directions links on these pages use the following code for their `href` attributes:


```js

https://maps.google.com?saddr=${searchString}&daddr=${address}

```

The `searchString` represents whatever value was entered into the location input in the Facility Locator form (zip code or city, state). The `address` is formulated by a utility function called [buildAddressArray](https://github.com/department-of-veterans-affairs/vets-website/blob/dcbe7cf30e7aaae875b2292c6d61c182b7eced8d/src/platform/utilities/facilities-and-mapbox/index.js#L85). The different types of facilities can have different address formats from the API. The table below demonstrates how the information differs across facility types.

| Facility type | Address from API | Google Maps URL | URL works properly? |
| --- | --- | --- | --- |
|[VA health](https://www.va.gov/find-locations/?address=Harlem%2C%20New%20York%2C%20New%20York%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=10027&facilityType=health&latitude=40.810925&longitude=-73.94701&page=1&radius=66&serviceType&bounds%5B%5D=-74.32701&bounds%5B%5D=40.430924999999995&bounds%5B%5D=-73.56701000000001&bounds%5B%5D=41.190925) | <img width="400" alt="Screenshot 2025-03-07 at 11 36 01 AM" src="https://github.com/user-attachments/assets/5554717e-8795-440d-aa28-8a295c19550c" /> | [Link](https://www.google.com/maps/dir/Harlem,+New+York,+NY/NYC+Human+Resources+Administration+St.+Nicholas+Job+Center,+132+W+125th+St,+New+York,+NY+10027/@40.8099512,-73.9497955,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89c2f66e2188a29f:0xb408afef09e2702e!2m2!1d-73.9464769!2d40.8115504!1m5!1m1!1s0x89c2f60d5c81d175:0x5e95eceb2540b2db!2m2!1d-73.9472327!2d40.8083467!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D) | No, it directs to `NYC Human Resources Administration St. Nicholas Job Center, 132 W 125th St, New York, NY 10027` |
| [Urgent care](https://www.va.gov/find-locations/?address=Albany%2C%20New%20York%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=Albany%2C%20New%20York%2C%20United%20States&facilityType=urgent_care&latitude=42.649864&longitude=-73.75274&page=1&radius=65&serviceType&bounds%5B%5D=-74.13274&bounds%5B%5D=42.269864&bounds%5B%5D=-73.37274000000001&bounds%5B%5D=43.029864) | <img width="400" alt="Screenshot 2025-03-07 at 11 39 21 AM" src="https://github.com/user-attachments/assets/2cf38231-d7dc-4c77-b519-64cad3f2c4a3" /> | [Link](https://www.google.com/maps/dir/Albany,+New+York/50+New+Scotland+Ave,+Albany,+NY+12208/@42.6534529,-73.7851644,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89de0a34cc4ffb4b:0xe1a16312a0e728c4!2m2!1d-73.7544707!2d42.6518095!1m5!1m1!1s0x89de0a412c65fa63:0xae4421dd83ea843!2m2!1d-73.7746753!2d42.6524805!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D) | Yes |
| [Emergency care](https://www.va.gov/find-locations/?address=Augusta%2C%20Maine%2C%20United%20States&bounds%5B%5D%5B%5D=-98.875114&bounds%5B%5D%5B%5D=29.2467&bounds%5B%5D%5B%5D=-98.115114&bounds%5B%5D%5B%5D=30.0067&bounds%5B%5D%5B%5D%5B%5D=-99.245114&bounds%5B%5D%5B%5D%5B%5D=28.8767&bounds%5B%5D%5B%5D%5B%5D=-97.745114&bounds%5B%5D%5B%5D%5B%5D=30.3767&context=Augusta%2C%20Maine%2C%20United%20States&facilityType=emergency_care&latitude=44.314785&longitude=-69.77439&page=1&radius=65&serviceType&bounds%5B%5D=-70.15438999999999&bounds%5B%5D=43.934785&bounds%5B%5D=-69.39439&bounds%5B%5D=44.694785) | <img width="243" alt="Screenshot 2025-03-07 at 11 51 56 AM" src="https://github.com/user-attachments/assets/a1af3b0f-04a8-4694-90cc-881dde39c9ed" /> | [Link](https://www.google.com/maps?saddr=Augusta,+Maine,+United+States&daddr=690+MINOT+AVE+STE+1,+AUBURN,+ME+04210-3922) | Yes |
- [Community provider](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=provider&serviceType=152W00000X&latitude=29.6267&longitude=-98.495114&radius=20&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
- [Community pharmacy](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=pharmacy&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
- [VA benefits](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=benefits&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.895114&bounds%5B%5D=28.2267&bounds%5B%5D=-97.095114&bounds%5B%5D=31.026699999999998&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
- [VA cemeteries](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=cemetery&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
- [Vet Centers](http://va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=vet_center&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
- [VBA detail](https://www.va.gov/find-locations/facility/vba_362k)
- [VA cemeteries detail](https://www.va.gov/find-locations/facility/nca_854)

### Events Listings

The rest of the Google Maps links are in the Events listings React widget for the [Outreach and Events search results](https://www.va.gov/outreach-and-events/events/). They use this component: [ResultsWhereContent.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/696d470cc7ec0e7e817f831b3cdf658f65b29eea/src/applications/static-pages/events/components/Results/ResultsWhereContent.jsx#L46) (for Events listings)