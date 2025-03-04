# Facilities Addresses: Data Sources and Google Maps

We receive addresses for VA facilities and community providers from several data sources. The format of those data when retrieved from the data sources varies widely, and we also have variations in the way we format the data on the front end to construct the "Get directions on Google Maps" links on Facilities pages.

This document describes the current state of the code and Google Maps directions link construction to build a foundation for improving the code and making consistent URLs.

## "Get directions on Google Maps" links on Drupal (content-build or next-build only) pages

Directions links on all Drupal pages except for Events are built from this content-build template: [directions-google-maps.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/includes/directions-google-maps.liquid). 

Event detail pages' directions links are built from this next-build template: [googleMapsDirections/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/common/googleMapsDirections/index.tsx).

Pages that use this template (some have multiple usages on the page) and how their links are constructed are outlined below.

| Page type | Example URL | content-build template | next-build template (if in prod) |
| --- | --- | --- | --- |
| VA Health System | https://www.va.gov/new-york-harbor-health-care/ | [health_care_region_page.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/health_care_region_page.drupal.liquid) | N/A |
| VA Health System Locations | https://www.va.gov/boston-health-care/locations/ | [locations_listing.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/locations_listing.drupal.liquid) | N/A |
| VA Health Local Facility | https://www.va.gov/new-york-harbor-health-care/locations/harlem-va-clinic/ | [health_care_local_facility.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/health_care_local_facility.drupal.liquid) | N/A |
| Vet Center | https://www.va.gov/boston-vet-center/ | [vet_center.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/vet_center.drupal.liquid) | N/A |
| Vet Center Locations | https://www.va.gov/boston-vet-center/locations/ | [vet_center_locations_list.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/vet_center_locations_list.drupal.liquid) | N/A |
| VBA Facility | https://www.va.gov/portland-va-regional-benefit-office/ | [vba_facility.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/vba_facility.drupal.liquid) | N/A |
| Event Detail (Facilities) | https://www.va.gov/hampton-health-care/events/77055/ | N/A | [event/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/layouts/event/index.tsx) |
| Event Detail (Outreach) | https://www.va.gov/outreach-and-events/events/76376/ | N/A | [event/index.tsx](https://github.com/department-of-veterans-affairs/next-build/blob/main/src/templates/layouts/event/index.tsx) |

### Directions URL construction

In content-build, directions links are constructed using the below code:

```js
https://maps.google.com?saddr=Current+Location&amp;daddr={{ directionsLinkAddress | strip }}
```

The first part of the URL is hardcoded for every URL. Within the curly braces (`{{ }}`), the `directionsLinkAddress` is a variable defined from the below attributes. The `| strip` removes any whitespace from the beginning or end of `directionsLinkAddress`.

```js
{{ entity.fieldAddress.addressLine1 }}, {{ entity.fieldAddress.locality }}, {{ entity.fieldAddress.administrativeArea }} {{ entity.fieldAddress.postalCode }}
```

For most of the above pages, the parts of `entity.fieldAddress` are straightforward and construct clean URLs. For instance, at https://www.va.gov/new-york-harbor-health-care/, under **Locations** / Margaret Cochran Corbin VA Campus, the address deconstructs into the following parts:

1. `entity.fieldAddress.addressLine1`: `423 East 23rd Street`
2. `entity.fieldAddress.locality`: `New York`
3. `entity.fieldAddress.administrativeArea`: `NY`
4. `entity.fieldAddress.postalCode`: `10010-5011`

Those data create a URL like this: https://www.google.com/maps/dir/San+Antonio,+TX+78258/423+E+23rd+St,+New+York,+NY+10010/@34.6755261,-96.8542942,5z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x865c60493bc0a313:0x34d20f276cf23882!2m2!1d-98.4732718!2d29.6451457!1m5!1m1!1s0x89c2590c7f960175:0x7fd1b278c116d39b!2m2!1d-73.9768461!2d40.7370457!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D. That link navigates to Google Maps for `423 E 23rd St, New York, NY 10010`.


## "Get directions on Google Maps" links in React widgets, or on React-generated pages

The remainder of the Google Maps links are built from this vets-website component: [LocationDirectionsLink.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/facility-locator/components/search-results-items/common/LocationDirectionsLink.jsx).

Pages that use this component:
- Within the [Facility Locator app](https://www.va.gov/find-locations):
  - [VA health facility results](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=health&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
  - [Urgent care facility results](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=urgent_care&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
  - [Emergency care facility results](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=emergency_care&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
  - [Community provider results](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=provider&serviceType=152W00000X&latitude=29.6267&longitude=-98.495114&radius=20&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
  - [Community pharmacy results](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=pharmacy&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
  - [VA benefits results](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=benefits&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.895114&bounds%5B%5D=28.2267&bounds%5B%5D=-97.095114&bounds%5B%5D=31.026699999999998&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
  - [VA cemeteries results](https://www.va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=cemetery&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
  - [Vet Centers results](http://va.gov/find-locations/?page=1&address=San%20Antonio%2C%20Texas%2078258%2C%20United%20States&facilityType=vet_center&serviceType&latitude=29.6267&longitude=-98.495114&radius=10&bounds%5B%5D=-99.245114&bounds%5B%5D=28.8767&bounds%5B%5D=-97.745114&bounds%5B%5D=30.3767&context=San%20Antonio%2C%20Texas%2078258%2C%20United%20States)
  - [VBA detail](https://www.va.gov/find-locations/facility/vba_362k)
  - [VA cemeteries detail](https://www.va.gov/find-locations/facility/nca_854)
| Outreach & Events Event Listings | https://www.va.gov/outreach-and-events/events/ |
| VA Health Event Listings | https://www.va.gov/hampton-health-care/events/ |

| Type of page | Example page | Code References |
| --- | --- | --- |
| VAMC System page | https://www.va.gov/boston-health-care/ | [health_care_region_page.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/layouts/health_care_region_page.drupal.liquid), [directions-google-maps.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/includes/directions-google-maps.liquid) |