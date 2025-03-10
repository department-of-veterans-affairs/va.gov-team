# Staging Review QA Artifacts for Mobile Maps Collab Cycle

## Overview of app and QA risks

The adjustments to the mobile map can be broken up into two types: 1) additions (pin selection, selected result below the map, and TTY number), 2) change (move from tabs to segmented control). In effect, the additions and changes make clicking on a map pin have an action (approximates current behavior on desktop/tablet with improvements for mobile), and replaces the outdated and problematic react tabs components that were not being updated (external dependencies and not in line with USWDS). The addition of the TTY number to results allows users to click that number in accordance with guidance from DST and USWDS.

### Additions risk and complexity: 

**Pin Selection / selected result display below the map**
Complexity: this feauture has the highest complexity of the changes since it deals with mapbox map behavior and changes to interactions. Since clicking on the map pins before did not work, the change requires that a few pieces of code were reorganized. The reorganization improved compartmentalization of pieces and testsability. E2E testing was significantly improved and increased for mobile map features as a result. The feature of reusing result items for the item appearing below the map means that no QA concerns were added. The testing of the ResultMapper that was contained into a separate function was significantly improved over the current state. No new API interactions occur.

Risk: The risk is minimal since it doesn't change the structure of the application, and simplifies testing and organization.

**TTY**
Complexity is very low and risk is equally very low. This is just adding a va-telephone component

### Changes risk and complexity

**Tabs -> Segmented Control**
Complexity and Risk: Moderate complexity, though it no longer relies on external dependencies to construct the tabs so we reduce risk that way. Risk of the changes are minimized because of restructuring that happened elsewhere with compartmentalization of the map rendering. So the risk of anything changing for QA and accessibility and funcitonality is very low.

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

If changes don't pass automated regression tests (as in cypress e2e tests or unit tests) we catch those immediately. For manual test-plan runs, we facilitate them on a per PR/feature basis so we know what changes cause failure.

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

Currently we do not have silent failures (besides a silent failure that is being handled in an after a silent failures audit and adding a visible failure warning and logging -- unrelated to this staging review).
