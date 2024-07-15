# QA Artifact for PACT Act Wizard
MVP launching Q1 2024

## Overview of app and QA risks
The PACT Act app has **moderate** complexity from a testing perspective.

Simplicity:
- Not authenticated
- Uses design system components as much as possible
- No API calls

Complexity:
- Branching logic for display of questions and routing to results pages
- Dynamic content on results pages

### React application complexity: moderate
The first question in the application is "When did you serve in the U.S. military (including time spent in training)?"

Based on the response, the user will be asked between 1 and 9 questions. We refer to this as "branching logic." There are two answer types:

- Multi-select checkboxes: 1 or more response(s)
- Radio buttons: 1 response

Every question also has its own branching logic. If a user selects "Yes" to a question, they will be guided down a question path or to a results screen. A different path exists for a "No" or "I'm not sure" response.

[This Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692989444688/0044b9825c82d8d23920601f68c41a61d047d681?sender=ue51e6049230e03c1248b5078) illustrates how the questions flow from one to the next and to the results screens at the end.

## Our QA approach
**UX / interaction**

For every user story implemented, the team manually tested most question and results flows. Some questions have the same branching logic behavior if either "No" or "I'm not sure" is selected.

We added automated tests (both unit tests and end-to-end tests) to cover all cases and to prevent regression. 

## Manual test cases
**UX validation**

- Navigation through most possible flows
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
#### Shadow DOM Limitations

All VA design components use the shadow DOM for style encapsulation. Unit testing PACT Act code had its unit testing challenges as the shadow DOM cannot be targeted in a unit test.

Any actions requiring `<va-button>` clicks cannot be unit tested as the `<button>` is contained in the shadow DOM. Our "Back" and "Continue" buttons are `<va-button>`s; we cannot simulate clicking them for form validation or navigation.

`<va-accordion>` and `<va-accordion-item>` expand/collapse behavior are limited as well, affecting coverage for the results pages.

As a result, tests for questions pages are limited to a simple "did it load the correct HTML content?" check. This includes testing the contents of dynamic accordions and other dynamic content on results set 1, pages 1-2.

#### Utility: General utilities

The results pages use utilities that determine whether the correct answers have been selected in order to be on that results page (are all form inputs properly filled out?). 

All utilities are completely covered by unit tests [here](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/pact-act/tests/utilities).

#### Unit Test Coverage Statistics
|Application (src/applications) | Total Tests | Lines | Functions | Statements | Branches | Avg of All % |
|---|---|---|---|---|---|--|
|pact-act | 202 | 90.74% | 88.43% | 90.99% | 79.19% | **87.34%** |

### Cypress Test Coverage

You can refer to [this Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692989444688/0044b9825c82d8d23920601f68c41a61d047d681?sender=ue51e6049230e03c1248b5078) in addition to this written explanation to understand how the Cypress tests are structured.

There are 25 comprehensive [Cypress test files](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/pact-act/tests/cypress). For each of the possible answers to the first question about military service, there is a corresponding folder (**A**) of Cypress suites. Within each of the folders are folders (**B**) for possible answers for those questions. At this level, the questions all have radio buttons, so each of the folders is "Yes", "No", or "I'm not sure." Within each of those folders are individual Cypress tests (**C**) covering an end-to-end flow for that answer. Below is an example of one group of Cypress tests.

- (**A**) "During both of these time periods" <- service period response
  - (**B**) "Yes" <- most or all radio questions in the tests below have this response
    - (**C**) Flow A <- "Yes" to specific questions leading to results screen 1
    - (**C**) Flow B <- "Yes" to different questions leading to results screen 1
    - (**C**) Flow C <- "Yes" to specific questions leading to results screen 2
    - (**C**) Flow D <- "Yes" to specific questions leading to results screen 3

The functionality tested within Cypress flows cover the below:
1. Navigation through the flow selecting all "Yes" responses or 1 or more checkboxes leading to a results screen
2. Navigation through the flow selecting all "No" responses or 1 or more checkboxes leading to a results screen
3. Navigation through the flow selecting all "I'm not sure" responses or 1 or more checkboxes leading to a results screen
4. Several combinations of different answers for the flow, making sure all results screens and flows are covered
5. Validation of correct navigation to results screen 1 (pages 1-2)
6. Validation of correct navigation to results screen 2
7. Validation of correct navigation to results screen 3
8. Radio button questions form validation
9. Multi-checkboxes questions form validation
10. Deep linking prevention - user attempts to link to a part of the form before filling out inputs that precede it
