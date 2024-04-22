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
