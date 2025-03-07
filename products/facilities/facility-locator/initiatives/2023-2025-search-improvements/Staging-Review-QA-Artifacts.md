# Staging Review QA Artifacts for Mobile Maps Collab Cycle

## Test plans (by feature)

- [x] [add TTY to search results](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18480)
  - Presence of accessibility feature (not present previously)
  - [x] [Run on 1/30/2025]()
- [x] [Change tabs to segmented button group](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20153)
  - Removes react-tabs (not a USWDS compliant / VA DST component) and now uses DST segmented control component
  - [x] [accessibility and functional testing run on 2/3/2025](https://github.com/department-of-veterans-affairs/vets-website/pull/34468#issuecomment-2634214377)
- [x] [Make mobile map markers interactive](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18444)
  - Adds ability to click on markers on map
  - Makes clicked marker change visibly
  - Adds section/result below map for clicked icon
  - [x] [accessibility and functional testing 2/13/2025](https://github.com/department-of-veterans-affairs/vets-website/pull/34362#issuecomment-2658335577)

## Traceability reports
(when a regression appears know why and where and what change caused it)


## E2E tests (per feature)

All e2e tests now test interactions of all potential flipper and on/off states

### Add TTY

<details><summary>In List View (verifies TTY exists and is correct value)</summary>
<img width="1369" alt="Screenshot 2025-03-05 at 1 12 17 PM" src="https://github.com/user-attachments/assets/dfa81dd5-616a-414d-96ec-314d85952829" />
</details>

<details><summary>In Map View (verifies TTY exists and is correct value on result item below map)</summary>
<img width="1659" alt="Screenshot 2025-03-05 at 1 10 37 PM" src="https://github.com/user-attachments/assets/40cc29fa-7c96-4a29-b841-a4794129058c" />
</details>


### Change to using Segmented control component and Mobile Map Markers

**Mobile/Mobile Map/Mobile Result List tests verify that segmented controls exist with flipper on and off and checks that behavior is maintained**

<details><summary>Mobile views</summary>
  <img width="1728" alt="mobile cypress" src="https://github.com/user-attachments/assets/d585c20c-1e27-47f1-a3c3-a3fc09de293c" />
</details>

<details><summary>Mobile Map View with and without segmented control - tests mobile map marker selection</summary>
  <img width="1728" alt="mobile-search-map-view cypress" src="https://github.com/user-attachments/assets/4a9c00b1-a1a8-4680-babb-d3c54ede0da2" />
</details>

<details><summary>Mobile List View with and without segmented control</summary>
  <img width="1728" alt="mobile cypress" src="https://github.com/user-attachments/assets/d585c20c-1e27-47f1-a3c3-a3fc09de293c" />
</details>


## Unit Test coverage 

**Segmented Button group/Control Component internal functioning is tested by DST as a DST component**

**Segmented Button Group/Control Component actions are tested by E2E above**

**Mobile Map Pin** 

- Search Result

<img width="861" alt="Screenshot 2025-03-07 at 12 52 47 PM" src="https://github.com/user-attachments/assets/a46a3086-d5da-4fa9-bb98-f99f9bb67218" />


**Mobile Map Result below map**

- Result Mapper decides what data to show (updated/separated into a component and tested with Mobile Map)

<img width="1718" alt="Screenshot 2025-03-07 at 2 41 27 PM" src="https://github.com/user-attachments/assets/6e927b5c-6b27-4be5-b9e8-06f41454cbac" />



## Endpoint Monitoring

All Endpoints (`/facilities_api/v2/va/**` and `/facilities_api/v2/ccp`) are monitored. Mapbox endpoints are not monitored because they are external to VA systems. We make synthetic queries in Datatdog to them, but we cannot assess their logs.

## Silent failures

Currently we do not have silent failures after a silent failures audit.
