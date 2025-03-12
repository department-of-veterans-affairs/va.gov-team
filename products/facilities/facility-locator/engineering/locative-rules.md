# Locative / search rules used in Facility Locator
LAST UPDATED: March 2025

## Mapbox Implementation
Is documented in [products/facilities/facility-locator/engineering/data-and-api-integrations/mapbox/mapbox-implementation.md#facility-locator-location-searc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/data-and-api-integrations/mapbox/mapbox-implementation.md#facility-locator-location-search)

Includes notes on logic for which `place_types` (location entities) are handled, and how. 

## Lighthouse search radius
Be default, search parameters sent to Lighthouse return results within a 10-mile bounding box. 

The Facility Locator performs math to help translate bounding box into radius (is this true? We'll confirm with [#18068](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18068) )





# **TODO: 2023-12-18: Update info below for modern age or deprecate**

## Location NOT detected, NOT entered:

- Zoom - All US, No Points
- Driving Directions - No from - Redirect to google maps with start blank

## Location NOT detected, IS entered:

### State

- Zoom - zoom to contain state
- Driving Directions - No from - Redirect to google maps with start blank

### City

- Zoom - 50 miles (Nice to have: Zip Boundary Highlighted somehow)
- Driving Directions - From Geographic Center of City.


### Zip

- Zoom - 50 miles (Nice to have: Zip Boundary Highlighted somehow)
- Driving Directions - From Geographic Center of Zip.

### Full Address

- Zoom - 50 Miles
- Driving Directions - From address

## Location IS detected, NOT entered:

- Zoom - 50 miles
- Driving Directions - always from detected location

## Location IS detected, PLUS entered partial:

- Zoom - 50 miles
- Driving Directions - always from detected location

## Location IS detected, PLUS entered full:

- Zoom - 50 miles
- Driving Directions from entered address
