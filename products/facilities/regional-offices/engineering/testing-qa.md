# Testing
## Overview of VBA Regional Benefit Offices product and complexity
The product is a page generated from CMS editor content using templates in content-build with one component being brought in from vets-website. The page is made up of several partial templates from other products as well as some new pieces. Much of the beginning of the VBA Regional Benefit Office page is centralized content in a departure from VAMC, e.g. the intro text is centralized and uniform across all facilities, leading to more certainty in testing. Shared content like the top task links (e.g. make an appointment), the On-this-page contents, operating hours display, Medallia survey button, back-to-top component etc. make the product less complex to test. 

Generally, the simplicity of the page comes from:
1. Unauthenticated content
2. Unidirectional flow of content
3. Uses shared templates from other products as much as possible
4. Uses design system components as much as possible

The complexity of the page comes from:
1. React Component with API Calls (mapbox and vets-api) for Nearby VA Locations and Dynamic Content (e.g. if vets-api returns no close locations, we show the user a message indicating that fact rather than a list of far locations.)
2. Branching logic whether to display certain content on the page (e.g. if editor does not provide "Prepare for your visit" content we do not show the section)

React Component complexity:
The interactive complexity is simple, but the API dependence adds to its comprehensive complexity. Component testing with mock data is added for all scenarios.

The interactive elements on the page are limited to **accordions**, **links** and occasionally **operating status notifications**:
There are two forms of accordion sets on the page, one for "Prepare for your visit" (very limited complexity) and a few sets of "Service" accordions (moderate complexity). The "Prepare for your visit" accordion items represent a list of content that comes from WYSIWYG CMS editor content without any processing in content-build. The "Service" accordions are migrating to a centralized design with VAMC which now also have adopted the pattern of using the Service Location Paragraph type from CMS. While this makes them more complex than the WYSIWYG content from CMS, they contain logic that is tested (see below about accordion testing). As we migrate VAMC to the shared Service Location Paragraph types we are consolidating automated testing and ensuring correctness with manual UX testing.

Links can be found throughout the page and, when possible, are using va-link components ensuring their reliability. However, in general, most links come from CMS content. WYSIWYG-generated links cannot be processed to use the DS va-link component, and make it difficult to test in an automated way (because of shadow roots), therefore it is the responsibility of the editor to ensure links are correct.

Unchanging elements on the page are limited to **spotlight cards**, **Benefits Hotline alert**, **Get Updates from the Veteran Benefits Administration container**, **Office hours**, are components when possible (e.g. alerts), and generally are just containers for links. These elements are fairly simple, but do often depend on content from the CMS as well.



## Test Plan
1. Since the contents of the VBA Regional Office Pages are dynamic (they can be created, removed, updated of all content, etc. by CMS editors), the contents of the pages cannot be tested by e2e tests.
2. Since the majority of the contents of the VBA Regional Office Pages are generated at build time using content-build, cypress e2e tests with mocking data cannot be used to test.
3. We use a combination of manual content-releases of VBA content on tugboats and automated Continuous Integration-based unit and component testing to verify that the segments of liquid templates render into correct HTML pages (does not allow for rendering React components). For React components we use regular component testing in the vets-website repository.
   
## Manual Testing
## Automated testing
1. The basis of automated tests for VBA pages use mock data (or snapshot-in-time data from CMS) that covers all template pieces that can be visible in a VBA page.
2. We run tests using the mocha test runner system.
3. A mocha test uses the `renderHTML` method that replicates the metalsmith process of building pages from drupal content. This allows us to build tests that verify the HTML structure of the page that would be the same as one built from downloaded CMS data.
    1. For example: since we wanted to make sure multiple banner types can appear on a page, we build a CMS node of a VBA facility with a banner alert and take a segment of the generated JSON from Drupal. We repeat this for all banner types. Then we use renderHTML to build the template pieces and 'expect' that each banner type appears when the mock data is present for it. Since banner templates are built on `<va-banner>` components, we are only able to test props of the Design System Components.
4. There is a limitation to testing via renderHTML because it does not pull in or load react components and it does not allow us to test deep in the shadow DOM. So for all Design System Components (which we rely on) we expect that the Design System Team has tested for certain accessibility  features. Our manual checks also verify the Design System Components are acting as expected.
5. To facilitate processing the drupal content into templated pages, we often use liquid filters. Whenever we create a liquid filter we add tests to the CI pipeline for that filter. We always cover null conditions and valid object types (because all data from Drupal comes as objects). You will see below the list of liquid filters added and the tests created.

## Regression Testing
Regression testing is built into the automated testing and the CI will not succeed in building and deploying the content if it does not comply with the automated testing. However, if CMS content is changed and is not congruent with the structure of the GraphQL the CI will not succeed. Testing should ensure for all potential options that an editor is presented with for the particular component in the VBA Regional Benefit Office pages.

## Testing currently existing as of 4/19/24
### Liquid filters
- processVbaServices
  - generates Facility service or Service Region or both with specific fieldVbaTypeOfCare and tests that services with correct types of care are grouped into correct object locations.
- processfieldCcCantFindBenefits
  - checks for null, valid object
- processCentralizedBenefitsHotline
  - checks for null, valid object
- processCentralizedUpdatesVBA
  - checks for null, valid object

### renderHTML
#### Banner
- src/site/layouts/tests/vba/template/vba_banner_test.unit.spec.js
  - Tested with renderHTML
    - dismissible info banner
    - dismissible warning banner
    - non-dissmisible warning banner

#### Accordions
- src/site/tests/vba/vba.unit.spec.js
  - tests accordions get generated from mock of VBA. Tests that accordions of specific types are created.
    - CONSIDER: Our team is considering creating a more comprehensive service location generator which can generate all possible values for field office visits, facility main phone number presence, etc. This will allow us to process all possible values in the service location accordions.
  - tests presence and number of accordions with renderHTML

### Testing of React Component (vets-website)
- src/applications/static-pages/facilities/tests/NearbyLocations.unit.spec.jsx
Since VBA Nearby Location and Vet Center Nearby Locations share significant code, the testing was expanded to include conditions of failure or lack of data from the 3 vets-api calls the VBA code makes.

## Unit Coverage
|file | statements | branch  | funcs | lines | Uncovered |
|---|---|---|---|---|---|
|vbaFacility.js                                                           |     100 |      100 |     100 |     100 |                               |
|vbaFacility.graphql.js                                                   |   80 |        0 |       0 |   80 | 340,368 - strings that really shouldn't be tested |

## Unit Coverage images
Banner Tests
<img width="1661" alt="Banner Tests - VBA" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/dffba8b9-ca99-42f0-8ccc-e3f681293c48">
Accordion Tests
<img width="1675" alt="Accordion Tests - 12 expects in one describe:test" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/2ab6ef17-1c1a-40fc-864b-c5cf7ae18d89">
Unit Test Coverage
<img width="1726" alt="Page 1 - unit tests" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/7757a126-aed1-4345-bc99-73e2af917895">
<img width="1728" alt="Page 2 - unit tests" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/d79ea321-8c6b-4d59-b7d4-fff4e6d21551">
Component Test coverage
<img width="1652" alt="Screenshot 2024-05-02 at 5 16 21 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/fa3e38d7-94d7-4197-a6de-fdddd4293674">

## Traceability
`+` = testing would catch and identify where error is
`-` = testing could be added to identify where error is
`!` = manual testing needed to show where an error is - editor needed

- 14948 - no test needed
- 15315 - tests covered processing data from graphql via liquid (if not processed correctly could not build) +
- 14940 - testing covered processing data from graphql via liquid (if not processed correctly could not build) +
- 14941 - testing of queries is not possible
- 15956 - testing of queries is not possible
- 16243 - decision to use renderHTML
- 14937 - banner testing covers all alert banner types +
- 14947 - testing of queries is not possible
- 14938 - covererd in 14937 +
- 16254 - testing meta content would only really be possible in cypress tests that we can't use - manual 
- 14942 - testing covered processing data from graphql via liquid (if not processed correctly could not build) +
- 14936 - Service Location accordion testing (separates SL into separate partial - phase 1- then later moves to shared partial - tests still cover representation both renderHTML and liquid filters) +
- 14957 - Mostly about testing consolidation of information from Facility Service SL and Regional Service SL paragraphs +
- 16921 - Prepare for your visit is purely looping over CMS content with pure DST components (tested). No specific test -
- 17103 - partial added for operating status is just a DST component. No specific test. Removed old usage of shared partial that was custom code. -
- 17162 - decision to use DST component instead of custom code
- 14933 - use CMS content no specific test due to CMS dependence. Fixes spacing on copy of partial from Vet Centers. 
- 16311 - analytics additions - no testing
- 17382 - Vet Centers and VBA ROs add spotlights in different order - manual testing since content is from CMS !
- 14929 - React component - adds component tests and consolidates Vet Center testing into NearbyVA Locations testing +
- 17511 - Modified Service Location testing to match desired outputs from CMS data !
- 17414 - Header added in absence of CMS content - manual testing since dependent on CMS presence absence of content !
- 17843 - Service Location delivery option values to match CMS content - CMS dependent - manual test (could add automated testing if we split the delivery options into partials) -
- 17710 - Online link separation from VAMC which uses the same template - manual testing (could add automated testing) -
- 17599 - testing of queries is not possible
- 17598 - Manage your benefits online link - could add testing if split into a partial (would need to include logic) -








