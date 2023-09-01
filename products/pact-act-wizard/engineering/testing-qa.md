# QA Artifact for PACT Act app
MVP launching TBD

## Overview of app and QA risks
The PACT Act app has moderate complexity from a testing perspective:
- Not authenticated
- Uses design system components
- No APIs
- Branching logic for display of questions and results pages

### React application complexity: moderate
The first question in the application is "When did you serve in the U.S. military?"

Based on the response, the user will be asked between 1 and 9 questions. We refer to this as "branching logic." There are two different answer types:

- Multi-select checkboxes (1 or more response)
- Radio buttons (1 response)

Every question also has its own branching logic. For instance, if a user selects "Yes" to a question, they will be guided down a different question path
or to a results screen. A different path exists for a "No" or "I'm not sure" response.

[This MURAL](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692989444688/0044b9825c82d8d23920601f68c41a61d047d681?sender=ue51e6049230e03c1248b5078) illustrates how the questions are connected to one another and to the results screens at the end.

## Our QA approach
**UX / interaction**

During development the team will manually test every user story that is implemented. So for example, the branching logic (the methods by which the question display is determined) will be thoroughly tested through a few different paths based on question responses.

We will also add automated tests to cover these cases to prevent regression. 

## Manual test cases
**UX validation**

- Navigation through most possible flows (all including the appropriate results screen)
  - "Yes" or checkbox(es) selected for each question
  - "No" or "I'm not sure" selected for each question
  - Combinations of the above
  - Results screen accordions are validated for proper open/close behavior as well as content
- Validation errors as expected
  - Yes/No/I'm not sure questions - one response must be selected to continue
  - Multi-checkbox questions - at least one response must be selected to continue`*`
- Deep linking prevention
  - If a user lands within the flow for any reason, they are redirected to the /introduction screen.

## Automated Test Coverage
### Unit Test Coverage
#### Shadow DOM Limitations

Unit testing PACT Act code will have its challenges, as the shadow DOM cannot be targeted in a unit test. 

Any actions requiring `<va-button>` clicks could not be tested as the actual `<button>` is contained in the shadow DOM. Our Back and Continue buttons are `<va-button>`s, so we could not simulate clicking them for form validation or navigation forward or backward.

The same problem exists in `<va-accordion>` and `<va-accordion-item>`, which is in the shadow DOM. This will limit our unit testing ability on the results pages.

As a result, tests for questions pages will be limited to a simple "did it load the correct HTML content?" check, and manual and end-to-end testing will be required for validating the correct functionality of `<va-button>`s and `<va-accordion>`s and their contents.

#### Utility: General utilities

The results page will use utilities that determine whether the correct data exists in order to be on that page (are all form inputs properly filled out?). 

Both utilities will be thoroughly unit tested [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/pact-act/tests/utils.unit.spec.js).

#### Unit Test Coverage Statistics
|Application (src/applications) | Lines | Functions | Statements | Branches |
|---|---|---|---|---|
|pact-act | TBD | TBD | TBD | TBD |

### Cypress Test Coverage

There will be a comprehensive [Cypress test suite](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/pact-act/tests/pact-act.cypress.spec.js). It will test the following scenarios:

1. Navigation through the flow selecting all "Yes" responses or 1 or more checkboxes to a results screen
2. Navigation through the flow selecting all "No" responses or 1 or more checkboxes to a results screen
3. Several combinations of different answers for the flow, making sure all results screens and flows are covered
4. Validation of correct data on results screen 1 (pages 1-2)
5. Validation of correct data on results screen 2
6. Validation of correct data on results screen 3
7. Radio button questions form validation
9. Multi-checkboxes questions form validation
10. Deep linking prevention - user attempts to link to a part of the form before filling out inputs that precede it
