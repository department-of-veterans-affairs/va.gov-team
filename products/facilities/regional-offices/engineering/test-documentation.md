# Testing
## Overview of VBA Regional Benefit Offices product and complexity
The product is a page generated from CMS editor content using templates in content-build with one component being brought in from vets-website. The page is made up of several templates from other products as well as some new pieces. Much of the beginning of the VBA Regional Benefit Office page is centralized content in a departure from VAMC, e.g. the intro text is centralized and uniformed across all facilities, leading to more certainty in testing. Shared content like the top task links (e.g. make an appointment), the On-this-page contents, operating hours display, Medallia survey button, back-to-top component etc. make the product less complex to test. 

Generally, the simplicity of the page comes from:
1. Unauthenticated content
2. Unidirectional flow of content
3. Uses shared templates from other products as much as possible
4. Uses design system components as much as possible

The complexity of the page comes from:
1. React Component with API Calls (mapbox and vets-api) for Nearby VA Locations and Dynamic Content (i.e. if vets-api returns no close locations, we show the user a message indicating that fact rather than a list of far locations.)
2. Branching logic whether to display certain content on the page (i.e. if editor does not provide "Prepare for your visit" content we do not show the section)

React Component complexity:
The interactive complexity is simple, but the API dependence adds to its comprehensive complexity. Component testing with mock data is added for all scenarios.

The interactive elements on the page are limited to **accordions**, **links** and occasionally **operating status notifications**:
There are two forms of accordion sets on the page, one for "Prepare for your visit" (very limited complexity) and a few sets of "Service" accordions (moderate complexity). The "Prepare for your visit" accordion items represent a list of content that comes from WYSIWYG CMS editor content without any processing in content-build. The "Service" accordions are migrating to a centralized design with VAMC which now also have adopted the pattern of using the Service Location Paragraph type from CMS. While this makes them more complex than the WYSIWYG content from CMS, they contain logic is tested (see below about accordion testing). As we migrate VAMC to the shared Service Location Paragraph types we are consolidating automated testing and ensuring correctness with manual UX testing.

Links can be found throughout the page and, when possible, are using va-link components ensuring their reliability. However, in general, most links come from CMS content and make it difficult to test in an automated way, therefore it is the responsibility of the editor to ensure links are correct.

Unchanging elements on the page are limited to **spotlight cards**, **Benefits Hotline alert**, **Updates links container**, **Office hours**, are components when possible (e.g. alerts), and generally are just containers for links. These elements are fairly simple, but do often depend on content from the CMS as well.



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
6. 

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
    - (suggestion: A more comprehensive service location generator should be created which can test all possible values for field office visits, facility main phone number presence, etc).
  - tests presence and number of accordions with renderHTML

### Testing of React Component (vets-website)
- src/applications/static-pages/facilities/tests/NearbyLocations.unit.spec.jsx
Since VBA Nearby Location and Vet Center Nearby Locations share significant code, the testing was expanded to include conditions of failure or lack of data from the 3 vets-api calls the VBA code makes.

## Unit Coverage
|file | statements | branch  | funcs | lines | Uncovered |
|---|---|---|---|---|---|
|vbaFacility.js                                                           |     100 |      100 |     100 |     100 |                               |
|vbaFacility.graphql.js                                                   |   77.78 |        0 |       0 |   77.78 | 337,365 - strings that really shouldn't be tested |

## Unit Coverage images
Banner Tests
<img width="1661" alt="Banner Tests - VBA" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/dffba8b9-ca99-42f0-8ccc-e3f681293c48">
Accordion Tests
<img width="1675" alt="Accordion Tests - 12 expects in one describe:test" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/2ab6ef17-1c1a-40fc-864b-c5cf7ae18d89">
Unit Test Coverage
<img width="1726" alt="Page 1 - unit tests" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/7757a126-aed1-4345-bc99-73e2af917895">
<img width="1728" alt="Page 2 - unit tests" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/5606931/d79ea321-8c6b-4d59-b7d4-fff4e6d21551">
