# QA Artifact for Discharge Upgrade Wizard

v2 launching Q4 2024

## Overview of app and QA risks

The Discharge Upgrade Wizard has **moderate** complexity from a testing perspective.

Simplicity:

- Not authenticated
- Uses design system components as much as possible
- No API calls

Complexity:

- Branching logic for display of questions and routing to results pages
- Dynamic content on results pages

### React application complexity: moderate

There are potentially 12 questions that can be asked in the wizard flow.

Questions throughout the wizard can branch based on the immediate answer to the question as well as previous answers in the wizard flow. Logic for navigation is built into the continue button when answering a question and will navigate to the appropriate question.

For example answering "I received a DD215 that shows my discharge upgrade or correction. But I want an updated DD214." instead of "I was discharged due to my sexual orientation (including under the Don’t Ask, Don’t Tell policy)." to the "Tell us why you want to change your discharge paperwork." will show a different question next in the wizard flow.

There are two answer types to these questions:

- Radio buttons: 1 response
- Dropdown select: 1 response

[This Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696352911500/80253b1c7200212cbcbcfb940d2cf4a29fed8417?sender=ua4eca0cc168eff677bd03940) illustrates how the questions flow from one to the next and to the review and results screens at the end.

## Our QA approach

**UX / interaction**

The team manually tested all flows and branching logic with each complete user story.
We tested edit question flows on the review page along with navigation when editing a question.

We added unit and end-to-end tests to cover all flows and branching logic to prevent regression.

## Manual test cases

**UX validation**

- Navigation through flows
  - Followed mural artifact to test flows and potential branching questions
  - Validated branching logic worked as expected
  - Result screen dynamic content validation along with external link and accordion open/close behavior
- Validation errors as expected for invalid responses
  - Dropdown and Radio button questions
- Review page and edit question logic
  - Validated editing a question works as expected and editing a branching question showed a new question if an answer was changed
  - Navigation when editing a question goes back to review page if answer was not changed
- Deep linking prevention
  - If a user lands within the flow for any reason, they are redirected to the `/introduction` screen

## Automated Test Coverage

### Unit Test Coverage

**Unit Tests under 80%**
The current percentage of test coverage is under 80% due to file sharing of the v1 code base of the DUW wizard. We decided to share the same folder as some of the original code will be used with the v2 wizard. Once we release and remove old code and cleanup the folder, the test coverage will be over the 80% threshold. 

#### Shadow DOM Limitations

All VA design elements use the shadow DOM for style isolation. This created challenges in unit testing the Discharge Upgrade Wizard, as the shadow DOM cannot be directly accessed in unit tests.

Any action involving `<va-button>` clicks is untestable because the `<button>` resides within the shadow DOM. Since our "Back" and "Continue" buttons are `<va-button>` components, we can't simulate clicks for form validation or navigation purposes.

Due to these limitations unit tests are simple correct HTML content checks.

#### Utility: General utilities

Utilities are used throughout the wizard and are all covered by unit tests:
[Helpers](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discharge-wizard/tests/v2/helpers)
[Utilities: Shared](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discharge-wizard/tests/v2/utilities/shared.unit.spec.js)
[Utilities: Answer Clean Up](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discharge-wizard/tests/v2/utilities/answer-cleanup.unit.spec.js)
[Utilities: Display Logic](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discharge-wizard/tests/v2/utilities/display-logic-questions.unit.spec.js)

#### Unit Test Coverage Statistics


| Application (src/applications) | Total Tests | Lines  | Functions | Statements | Branches | Avg of All % |
| ------------------------------ | ----------- | ------ | --------- | ---------- | -------- | ------------ |
| discharge-wizard               |             | 70.77% | 70.85%    | 70.85%     | 46.85%   | **%**        |

### Cypress Test Coverage

You can refer to [this Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696352911500/80253b1c7200212cbcbcfb940d2cf4a29fed8417?sender=ua4eca0cc168eff677bd03940) along with this written explanation to better understand the structure of the Cypress tests.

The [Cypress tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/discharge-wizard/tests/v2/cypress) have been broken down by flow, review and base navigation.

The flows folder we break down the main branching flows based on the answer to the discharge reason question and provide a main flow cypress test. These flows are shown in the mural doc and match the same logic.

The review folder provides end-to-end flow testing for editing a question and all edge case scenarios including navigation when choosing to edit an answer. This includes testing all branching questions and making sure editing a question works for all questions.

The functionality tested within Cypress flows cover the following:

1. Navigation through the wizard choosing discharge form update DD215 for discharge reason
2. Navigation through the wizard choosing discharge is unjust for discharge reason
3. Navigation through the wizard choosing sexual orientation for discharge reason
4. Navigation through the wizard choosing transgender for discharge reason
5. Combinations of different answers to branching questions for the main flow, making sure all other flows are covered
6. Radio button questions form validation
7. Multi-checkboxes questions form validation
8. Deep linking prevention - user attempts to link to a part of the form before filling out inputs that precede it
