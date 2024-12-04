## VAMC Real-time Banners: QA artifact

launching Q4 2024

## Overview of app and QA risks

Currently VAMC banners are currently delivered as static content within static VAMC office pages and sub-pages. The Real-time Banners solution replaces these with a React widget that leverages a new API in vets-api. The banners will still derive from the same source of truth, the Drupal CMS, but will be deliverable in minutes rather than an hour or more, giving editors control over delivery of timely information to Veterans, such as a hurricane warning.

Simplicity:
- Unauthenticated content
- Unidirectional flow of content from Drupal CMS to vets-api
- Does not introduce new designs or markup (leverages existing DS components)

Complexity:
- React component with API calls (vets-api) for banner retrieval for a given page
- Display logic to determine if a banner should be displayed on a given page
- Removal of existing content-build banners

## Test Plan

1. Since VAMC offices and their page content are dynamic, and any respective banners can be created, removed, updated as needed by editors, VAMC pages with banners cannot be e2e tested.
2. Since VAMC offices are generated at build time using content-build, cypress e2e tests with mocking data cannot be used to test their respective placement on VAMC pages in an e2e test.
3. A combination of a CMS Feature Toggle and a Flipper allow for control over both the removal of static banner rendering in content-build (CMS Feature Toggle) and the display and use of the new React-based banners in vets-website (Flipper).

### Flipper and Feature Toggle ON
- All existing banners continue to display on the correct VAMC pages
- When a banner is published in Drupal, it displays on the FE in about 10 mins
- Banners are not duplicated - meaning 1 VAMC System does not display the same banner twice (once from the old process and once from Real-time Banners)
- A published banner displays on only the VAMC System(s) that is selected in Drupal
- An unpublished banner does not display on any VAMC System page
- When a banner is active on a VAMC System and the "Limit banner display to the home and the Operating status page(s)" checkbox is not checked, the banner should display on every page of the VAMC System
- When a banner is active on a VAMC System and the "Limit banner display to the home and the Operating status page(s)" checkbox is checked, the banner should only display on the VAMC System page and the VAMC Operating status page
- When a banner is created as type "Information", it displays on the FE using the blue "info" variant of the DS component (with all other appropriate props and displaying correctly)
- When a banner is created as type "Warning", it displays on the FE using the yellow "warning" variant of the DS component (with all other appropriate props and displaying correctly)
- When a banner is created and the "Alert dissmissable?" checkbox is **not checked**, the banner should not display with a close icon
- When a banner is created and the "Alert dissmissable?" checkbox is checked, the banner should display with a close icon in the top right corner. The banner should disappear when the icon is clicked on or when the icon is activated using the SPACE or ENTER keys
- "When a dissmissable banner is dismissed, a cookie is set with a key of "DISMISSED_BANNERS". When this is present:
  * The banner is not visible on the FE of the website
  * The banner will not be read by a screen reader
  * The banner is present in the DOM
  * The banner becomes visible again when the ""DISMISSED_BANNERS"" cookie is deleted"
- When a banner is created and the "Get updates on affected services and facilities" checkbox is checked, the banner should display a link with this same text at the bottom of the banner. This link should direct to the Operating status page
- The "Subscribe to email updates" checkbox is not respected and does not show anything on the FE
- When a banner is created and the "Find other VA facilities near you" checkbox is checked, the banner should display a CTA link with this same text at the bottom of the banner. This link should direct to the Facility Locator
- When a new banner is added with a link to a new page that has not yet been published, that link will 404 because the banner will publish before the page content. This is expected and ok

### Regression Testing
- Only one banner is published in Drupal at once and is displayed on the FE
- When a banner is created and the main "Email Updates" checkbox is checked, a row is added to the govdelivery queue
- When a banner is created and the main "Email Updates" checkbox is not checked, nothing is added to the govdelivery queue
- When a banner is created with the main "Email Updates" checkbox checked, a Situation Update is added, and the "Send email to subscribers via GovDelivery?" checkbox is checked for that update, a row is added to the govdelivery queue
- When a banner is created with the main "Email Updates" checkbox not checked, a Situation Update added, and the "Send email to subscribers via GovDelivery?" checkbox is checked for that update, nothing is added to the govdelivery queue
- When a Situation update is added to a banner, this content displays on the Operating status page with the appropriate time stamp.
- When multiple Situation updates are added to a banner, each is displayed on the Operating status page with the appropriate time stamp. The updates are displayed following the order in Drupal
- When Situation update and Situation Information content are both added to a banner, all of this content displays on the Operating status page. The Situation Update content displays first, and the Situation Information content displays second
- When the Situation information section is filled out in Drupal with no accompanying Situation Update, this content does not display on the Operating status page

## Automated Testing

### Unit Test Coverage

**Unit Tests under 80%**
As of 12-4-24. We expect to be able to solve for these before Staging Review.

BE
- modules/banners/app/sidekiq/banners/update_all_job.rb
- modules/banners/lib/banners/updater.rb 
- modules/banners/lib/banners.rb

FE
- createSituationUpdatesBanner.jsx
- situationUpdateBanner.jsx

#### Unit Test Coverage Statistics (BE)
[As of 12-4-24]

| File                           | % Covered | Lines  | Relevant Lines | Lines Covered | Lines Missed | Avg hits/line |
| ------------------------------ | ----------- | ------ | --------- | ---------- | -------- | ------------ |
|modules/banners/app/sidekiq/banners/update_all_job.rb | **0%** | 56 | 44 | 0 | 44 | 0.0 | 
|modules/banners/lib/banners/updater.rb                | **72.09%** | 80 | 43 | 31 | 12 | 0.91 | 
|modules/banners/lib/banners.rb                        | **75.00%** | 15 | 8 | 6 | 2 | 0.75 | 
|app/controllers/v0/banners_controller.rb              | **100.00%** | 23 | 12 | 12 | 0 | 1.75 | 
|modules/banners/app/models/banner.rb                  | **100.00%** | 53 | 19 | 19 | 0 | 1.79 | 
|modules/banners/lib/banners/builder.rb                | **100.00%** | 41 | 21 | 21 | 0 | 2.19 | 
|modules/banners/lib/banners/engine.rb                 | **100.00%** | 12 | 6 | 6 | 0 | 1.00 | 
|modules/banners/lib/banners/profile/vamc.rb           | **100.00%** | 24 | 5 | 5 | 0 | 1.40 | 
| Combined Coverage | **63.29%** |   |   |   |   |   |

#### Unit Test Coverage Statistics (FE)
[As of 12-4-24]

| File                           | % Statements | % Branches  | % Functions | % Lines |
| ------------------------------ | ----------- | ------ | --------- | ---------- |
| createSituationUpdatesBanner.jsx | **36.36%** | 33% | 50% | 36.36% | 
| situationUpdateBanner.jsx | **50%** | 100% | 0% | 50% | 