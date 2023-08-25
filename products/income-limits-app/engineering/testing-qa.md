# QA Artifact for Income Limits app
MVP launching Q3 2023

## Overview of app and QA risks
The Income Limits app is a relatively simple app from a testing perspective:
- Not authenticated
- Uses design system components
- Simple API performs lookup based on inputs: year, zip code, - and number of dependents

Tables are exact copies of those of our source-of-truth system, the Veteran Enrollment System (VES).

### API complexity: low
The API takes 3 inputs and performs a lookup. If more than one value is retrieved for a particular county, it returns the highest one.

The API returns three values which are leveraged directly by the front-end product:
- Pension threshold
- National Means Test (NMT) threshold
- Geographic Means Test (GMT) threshold

The API does simple calculations based on values from database tables: 
- NMT and Pension thresholds – For >1 dependent, the API uses a per-dependent value to calculate
- GMT – if there is more than one row in the table for a given county, the API picks the highest value. For >7 dependents, it uses a per-dependent amount to calculate GMT.

Calculations are documented in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683232214853/cfc6da5007d8f99ee0bc83e261e118e7074ffa85?sender=uebde62ceb342c6477fb09406) and github.

### React application complexity: low
There is only one piece of conditional logic, what is referred to in this document as the “non-standard case” (aka Jonesboro case). 

GMT stands for Geographic Means Test threshold, a cost of living number set by HUD per U.S. county and looked up in our API by zip code. The GMT is meant to account for how the cost of living affects a Veteran's ability to pay for health care.
NMT is National Means Test, a single number across the country.

In most of the country, the GMT is higher than the NMT. In this typical case, there are 5 accordions on the Results screen. One of them covers different VA copay expectations in the range between the two numbers. 

However, in a few rural locations like Jonesboro, AR (where our designer lives: zip 72041), the numbers are flipped, and GMT < NMT. In those cases we don’t use GMT at all in the Results screen and we use NMT+10% for calculating the top range/accordion. The easily verifiable impact is that there are only 4 accordions in this case.

The mapping of the 3 API values to UI components on the Results screen are documented in [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683232214853/cfc6da5007d8f99ee0bc83e261e118e7074ffa85?sender=uebde62ceb342c6477fb09406).

## Our QA approach
**Calculations**

The Income Limits app provides the same functionality to Veterans that are provided to VA employees by an internal system, Veteran Enrollment System (VES). To validate calculations, we can compare our results to the same scenario in VES.

**UX / interaction**

During development the team manually tested every user story that was added. So for example, the implementation of the non-standard (Jonesboro) case ticket was thoroughly tested before being closed.

We also added automated tests to cover these cases to prevent regression. 

## Manual test cases
**Calculation validation**

- Current year, standard zip
- Current year, non-standard case 
- Past year, standard zip (72041)
- Past year, non-standard zip (72041)
- Dependents cases (variations below can be combined with cases above) – values driven by calculation/lookup variations noted above
  - 0
  - 1 
  - 2
  - \> 7 (e.g., 9)

Procedure: run Veteran scenario in Income Limits app on Staging and compare results to same scenario in the Veteran Enrollment System (VES).

**UX validation**

- Navigation through the entire current-year flow forward and backward
- Navigation through the entire past flow forward and backward
- Using the “edit” links on the Review page takes the user to the appropriate screen, then Continue returns directly to the Review page
  - Year
  - Zip
  - Dependents
- Year page form validation
  - Must make selection to continue
- Zip Code page form validation
  - 5 digits
  - Zip code is present in API database
- Dependents page form validation
  - Number between 0 and 99 required to continue
- Validation errors as expected:
  - Zip code validation - correct display of service errors (valid zip required)
  - Results validation - correct display of service error when year is invalid
  - Results validation - correct display of service error when zip code is invalid
  - Results validation - correct display of service error when dependents are invalid
  - Results validation - correct display of service error when the service times out
- Deep linking prevention
  - If a user lands within the flow for any reason, they are redirected to the /introduction screen.

## Automated Test Coverage
### Unit Test Coverage
#### Shadow DOM Limitations

Unit testing Income Limits code had its challenges, as the shadow DOM cannot be targeted in a unit test. 

Any actions requiring `<va-button>` clicks could not be tested as the actual `<button>` is contained in the shadow DOM. Our Back and Continue buttons are `<va-button>`s, so we could not simulate clicking them for form validation or navigation forward or backward.

The same problem exists in `<va-accordion>` and `<va-accordion-item>`, which is in the shadow DOM. This limited our unit testing ability on the Results page.

As a result, tests for the Year page, Zip Code page, Dependents page and Results page are all limited to a simple “did it load the correct HTML content?” check.

#### Review Page

We could test a bit more on the [Review page](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/income-limits/tests/ReviewPage.unit.spec.jsx). The data for each given form input is validated here. We’re also testing correct functionality when edit links are clicked.

#### Utility: Results Accordions

The Results page uses utilities to calculate values for its results accordions. These utilities were intentionally put into a new file for unit testability. [Each accordion is tested](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/income-limits/tests/results-accordions.unit.spec.js) in its entirety for the standard and non-standard case (when applicable). We’re also testing odd numbers for the thresholds because we have some rounding logic in the utilities.

#### Utility: General utilities

The Review and Results page use a utility that determines whether the correct data exists in order to be on that page (are all form inputs properly filled out?). 

There is also a utility for calculating the previous year based on the year selected, or the current year, depending on the flow used. This is helpful for content display.

Both utilities are thoroughly unit tested [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/income-limits/tests/utils.unit.spec.js).

#### Unit Test Coverage Statistics
|Application (src/applications) | Lines | Functions | Statements | Branches |
|---|---|---|---|---|
|income-limits | 56.72% | 50.00% | 57.30% | 43.04% |

### Cypress Test Coverage

There is a comprehensive [Cypress test suite](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/income-limits/tests/income-limits.cypress.spec.js). It tests the following scenarios:

1. Navigation through the entire current flow forward and backward
2. Navigation through the entire past flow forward and backward
3. Clicking Edit for Year on the Review page
4. Clicking Edit for Zip Code on the Review page
5. Clicking Edit for Dependents on the Review page
6. Validation of correct data on the Results page for standard flow
7. Validation of correct data on the Results page for non-standard (AKA Jonesboro) flow
8. Year page form validation
9. Zip Code page form validation
10. Dependents page form validation
11. Zip code validation - correct display of service errors
12. Results validation - correct display of service error when year is invalid
13. Results validation - correct display of service error when zip code is invalid
14. Results validation - correct display of service error when dependents are invalid
15. Results validation - correct display of service error when the service times out
16. Deep linking prevention - user attempts to link to a part of the form before filling out inputs that precede it

**Cypress flakiness**
As of 7/27/2023, the Cypress test is ignored in the pipeline, but all tests are passing locally. This is because there is a selector that is flaky and fails 4 out of 20 times. Instead of selecting the correct Income Limits element, it tries to select something in the global header. 16 out of 20 times this does not happen. To prevent blocking people from merging in, the tests are skipped for now. 

The flakiness may be completely resolved after the Platform team is able to upgrade Cypress to version 12. I tested this locally and it worked well, but we won’t know for sure until the upgrade is complete.

[Ticket for Platform Upgrade to Cypress 12](https://app.zenhub.com/workspaces/frontend-cop-backlog-6452b043f27c8b0011a25236/issues/gh/department-of-veterans-affairs/va.gov-team/59245).
