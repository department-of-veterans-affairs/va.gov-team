# 21-4138 Form Inhearitence Discovery

## Now (../../2026)

### Table of Contents

- [Design Findings](#design-findings)
- [Technical Findings](#technical-findings)
- [Level of Effort](#level-of-effort)
- [Next](#next)

## Design Findings

- Design files set for staging as of Sep,2 2025 ([Staging 21-4138 Figma](https://www.figma.com/design/w2tRlZ5qJSOF968XoWzBRg/Staging-%7C-21-4138---Submit-a-statement-to-support-a-claim?node-id=3822-19206))
- No imposter components found at this time

## Technical Findings

### I. Component and Pattern Modernization
- No imposter components found in this form

### II. Code Quality and Maintenance
- ESLint and Manual Review
  Finding: Initial ESLint scan resulted in no errors but a few warnings. 
  
  Files: src/applications/simple-forms/21-4138/config/constants.js

- Potential ability to remove React Imports
  Finding: Currently Eslint rule is blocking the removal of React imports. This will require platform’s buy in to update the Eslint rule

  Files:
  src/applications/simple-forms/21-4138/config/constants.js
  src/applications/simple-forms/21-4138/containers/App.jsx
  src/applications/simple-forms/21-4138/containers/ConfirmationPage.jsx
  src/applications/simple-forms/21-4138/containers/IntroductionPage.jsx
  src/applications/simple-forms/21-4138/tests/unit/containers/ConfirmationPage.unit.spec.jsx
  src/applications/simple-forms/21-4138/tests/unit/containers/IntroductionPage.unit.spec.jsx

- Unnecessary React Imports
  Files:
  src/applications/simple-forms/21-4138/pages/personalInformation.js

- TypeScript and Environment Imports
  Finding: TypeScript error regarding the environment utility module.

  Files: 
    src/applications/simple-forms/21-4138/config/form.js
  
  Recommendation: Resolve the missing declaration file for @department-of-veterans-affairs/platform-utilities/environment to ensure proper TypeScript support.

- Redundant function
  In src/applications/simple-forms/21-0972/config/helpers.js, there is a function called claimantIsVeteran  and another called claimantIsNotVeteran. This can be reduced to just the first function and read the value of it for both cases.
  
  
  In src/applications/simple-forms/21-4138/containers/ConfirmationPage.jsx, we use useSelect to get formData so we can remove connect and mapStateToProps and remove unused propTypes

- Remove commented out lines
  In src/applications/simple-forms/21-4138/tests/e2e/fixtures/mocks/local-mock-responses.js, there are a few commented out lines. Need to be investigated to see if we can remove them

- Incorrect File Extension
  In src/applications/simple-forms/21-4138/routes.jsx, fix file extension on line 3

### III. Documentation and Readability
- Comments in the files make sense and are clear.

### IV. Technical Debt and Other Fixes
- Unskip Cypress tests in CI when the form is released in prod

### V. Lighthouse and Accessibility run
- [Lighthouse report](https://drive.google.com/file/d/1gjXu9ISOcm_9eVsSMEgj_p3D1JAiFgox/view?usp=sharing)
- The Lighthouse report shows no accessibility issues but 59/100 in performance. It is worth looking into the possibility to improve performance.

- Manual Wave a11y check shows no accessibility issues.

### Technical Debt Severity Prioritization

| Severity | Finding / Concern | Recommendation | Rationale|
| -------- | ------- | ------- |  ------- | 
| High  | Performance Degradation (Lighthouse Score): The flow had an overall Lighthouse Performance score of 59/100.   | Investigate and implement changes to improve form performance to prevent user abandonment due to load times. | Directly affects user experience (UX) and could lead to form abandonment, impacting veteran outcomes.
| Medium | Cypress tests are currently skipped (Most likely will be resolved when form launch)    | Unskip Cypress tests in CI when the form is released in prod| |
| Low | Eslint warning     | Resolve Eslint warning| Code clean up and improve maintainability.|
| Low | Unnecessary React Imports: Several files have needless imports of React.     |Remove needless React imports to align with modern React standards. | Code cleanup, slightly reduces bundle size, and aligns with current best practices.|
| Low | Typescript import error     |Resolve the missing declaration file  |Code clean up and improve maintainability. |
| Low | Redundant function     |Remove redundant functions in a few files | improve code readability  and aligns with current best practices.|
| Low | Commented out lines not removed     |Investigate if the commented out lines can be removed |Code clean up and improve readability. |
| Low | Incorrect file extension     | Fix file extension | Code clean up and improve maintainability.|



## Level of Effort

_Teams often start with T-shirt sizes during early planning, then refine into story points later._

- 👕 Design = Small
- 👕 Content = Small
- 👕 Monitoring = Small
- 👕 Engineering = Small


## Next
- Pathways to continue work: Blocked untill deployment
- Follow [forms team progress](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/21-4138/readme.md#current-state-of-things)
