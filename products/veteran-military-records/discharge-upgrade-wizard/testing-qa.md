# QA Artifact for Discharge Upgrade Wizard
Conversion to Subtask pattern and CAIA Content Updates launching Q4 2024

## Overview of app and QA risks
The Discharge Upgrade Wizard app has **<minimum/moderate/high>** complexity from a testing perspective.

Simplicity:
- Not authenticated
- Uses design system components as much as possible
- No API calls

Complexity:
- Branching logic for display of questions and routing to results pages
- A review page where the user may click Edit to return to a question and change their answer.
- Dynamic content on results pages

### React application complexity: moderate
The first question in the application is "What was your branch of service?"

Based on the response, the user will be asked between <#> and <#> questions. We refer to this as "branching logic." There is one answer type:

- Radio buttons: 1 response per page

Three is also a review page, where the user has the chance to click Edit to return to a quesion and edit their answer. Depending on their new answer, they may then be presented with additinal pages of questions to answer before they are returned to the review screen.

Every question also has its own branching logic. Not all questions are Yes/No. For screens where the answers are Yes, No, or I'm not sure, if a user selects "Yes" to a question, they will be guided down a question path or to a results screen. A different path exists for a "No" or "I'm not sure" response.

[This Mural](URL) illustrates how the questions flow from one to the next and to the results screens at the end.
[This Mural](URL) illustrates the review screen edit flow.

## Our QA approach
**UX / interaction**

For every user story implemented, the team manually tested most question and results flows. Some questions have the same branching logic behavior if Yes, "No", or "I'm not sure" is selected, or if specific answers to military branch, reason for discharge, etc. are chosen.

We added automated tests (both unit tests and end-to-end tests) to cover all cases and to prevent regression. 

## Manual test cases
**UX validation**

- Navigation through most possible flows
  - Each individual possible answer was chosen on a page (non Yes/No/I'm not sure)
  - "Yes" or checkbox(es) selected for each question
  - "No" or "I'm not sure" selected for each question
  - Combinations of the above
  - Results screen accordions validated for proper open/close behavior and correct content
- Validation errors as expected for invalid responses
  - "Yes"/"No"/"I'm not sure" questions
  - Multi-checkbox questions
- Deep linking prevention
  - If a user lands within the flow for any reason, they are redirected to the `/introduction` screen

## Automated Test Coverage
### Unit Test Coverage
#### Shadow DOM Limitations **(CHRIS, ARE THESE A TRUE STATEMENTS? CAME FROM PAW)**

All VA design components use the shadow DOM for style encapsulation. Unit testing Discharge Upgrade Wizard code had its unit testing challenges as the shadow DOM cannot be targeted in a unit test. 

Any actions requiring `<va-button>` clicks cannot be unit tested as the `<button>` is contained in the shadow DOM. Our "Back" and "Continue" buttons are `<va-button>`s; we cannot simulate clicking them for form validation or navigation.

`<va-accordion>` and `<va-accordion-item>` expand/collapse behavior are limited as well, affecting coverage for the results pages.

As a result, tests for questions pages are limited to a simple "did it load the correct HTML content?" check. This includes testing the contents of dynamic accordions and other dynamic content on results set 1, pages 1-2.

#### Utility: General utilities **(CHRIS, ARE THESE A TRUE STATEMENTS? CAME FROM PAW)**

The results pages use utilities that determine whether the correct answers have been selected in order to be on that results page (are all form inputs properly filled out?). 

All utilities are completely covered by unit tests [here](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/pact-act/tests/utilities).

#### Unit Test Coverage Statistics **(CHIS, YOU'LL WANT TO CORRECT THE DUW NAME IN THE TABLE BELOW, AND ENTER THE STATS)**
|Application (src/applications) | Total Tests | Lines | Functions | Statements | Branches | Avg of All % |
|---|---|---|---|---|---|--|
|discharge-upgrade | | | |  |  | **%** |

### Cypress Test Coverage **CHRIS, YOU'LL WANT TO EDIT FOR DUW)

You can refer to [this Mural](url) in addition to this written explanation to understand how the Cypress tests are structured.

There are 25 comprehensive [Cypress test files](URL). For each of the possible answers to the first question about (ENTER FIRST QUESTION OR...), there is a corresponding folder (**A**) of Cypress suites. Within each of the folders are folders (**B**) for possible answers for those questions. At this level, the questions all have radio buttons, so each of the folders is "Yes", "No", or "I'm not sure." Within each of those folders are individual Cypress tests (**C**) covering an end-to-end flow for that answer. Below is an example of one group of Cypress tests.

- (**A**) "During both of these time periods" <- service period response
  - (**B**) 

The functionality tested within Cypress flows cover the below:
1.
