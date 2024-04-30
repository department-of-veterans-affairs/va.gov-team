# Testing currently existing as of 4/19/24

## Unit
### Liquid filters
- processVbaServices
  - generates Facility service or Service Region or both with specific fieldVbaTypeOfCare and tests that services with correct types of care are grouped into correct object locations.
- processfieldCcCantFindBenefits
  - checks for null, valid object
- processCentralizedBenefitsHotline
  - checks for null, valid object
- processCentralizedUpdatesVBA
  - checks for null, valid object

## renderHTML
### Banner
- src/site/layouts/tests/vba/template/vba_banner_test.unit.spec.js
  - Tested with renderHTML
    - dismissible info banner
    - dismissible warning banner
    - non-dissmisible warning banner

### Accordions
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
