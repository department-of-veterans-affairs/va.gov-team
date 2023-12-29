# Facility Locator Map Enhacements Phase 1 Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product brief: [Facility Locator Map Enhancements Phase 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2021-map-enhancements/phase-1-limit-search-to-250-miles/product-brief.md)

## Contents
<details>
<summary></summary>
  
- [Use Case A - Auto-Zoom and search limit](#use-case-a---auto-zoom-and-search-limit) 
- [Use Case B - Search-this-area button](#use-case-b---search-this-area-button)
- [Use Case C - Optimize map view](#use-case-c---optimize-map-view) 
- [Use Case D - Zoom and search this area](#use-case-d---zoom-and-search-this-area) 

</details>

## Use Case A - Auto Zoom and search limit

* **Description**
  - User initiates search -- gets results for all specified locations within 500-mi radius:
    - Map auto-zooms to display icons (black) for all results, as well as search-area-center pin (red).
    - Result-list includes all results -- not paginated.
  - User triggers another search with different parameter(s) -- gets new results for all specified locations within 500-mi radius:
    - Map pans to new search-area-center.
    - Subsequent behavior same as for initial search above.
  - User triggers search but no locations are found -- gets an error message with suggested next steps.
  
* **TestRail Test Case**: [C2148](https://dsvavsp.testrail.io/index.php?/cases/view/2148)
  
## Use Case B - Search-this-area button

* **Description**
  - After getting initial search results, User pans map to new area -- gets a button to manually trigger new search:
    - Map does NOT auto-initiate new search after pan.
    - Map displays a button for User to manually trigger new search of newly-displayed area.
    - Button-click triggers new search.  Subsequent behavior same as Use Case A initial search.

* **TestRail Test Case**: [C2698](https://dsvavsp.testrail.io/index.php?/cases/view/2698)

## Use Case C - Optimize map view

* **Description**
  - User triggers a 2nd search with same geographical area (city/state/zip) but different facility-type -- map auto-adjusts zoom-level for the new results.

* **TestRail Test Case**: [C2797](https://dsvavsp.testrail.io/index.php?/cases/view/2797)

## Use Case D - Zoom and search this area

* **Description**
  - After getting initial search results, User zooms map in to smaller area -- gets a button to manually trigger new search:
    - Behavior same as Use Case B - Search-this-area button.

* **TestRail Test Case**: [C2798](https://dsvavsp.testrail.io/index.php?/cases/view/2798)
