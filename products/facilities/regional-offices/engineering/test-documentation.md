# Testing
# Test Plan
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
