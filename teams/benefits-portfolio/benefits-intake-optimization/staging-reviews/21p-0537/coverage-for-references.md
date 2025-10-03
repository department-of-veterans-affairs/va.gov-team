# Coverage for References
## VA Form 21P-0537 - Marital Status Questionnaire for DIC Recipients

**Date:** October 3, 2025  
**Team:** Benefits Intake Optimization (BIOHEART)

---

This document maps user behaviors to test cases. Each scenario reflects intended product functionality and is verified through unit tests, E2E tests, and manual testing.

---

## User Story to Test Mapping

### As a DIC recipient, I want to report that I have not remarried so my benefits continue

**Covered by:**
- **Unit Tests:**
  - `submit-transform.unit.spec.jsx` - "transforms not remarried submission correctly"
  - `form-config.unit.spec.jsx` - Tests conditional page logic for not remarried path
  - `ConfirmationPage.unit.spec.jsx` - "should show not remarried message when hasRemarried is false"
- **E2E Tests:**
  - `21p-0537.cypress.spec.js` - Complete not remarried flow
- **Manual Test:**
  - Test Plan - Scenario 1: Not Remarried Path
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139
  - E2E tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39115

---

### As a DIC recipient who remarried after age 57, I want to report my remarriage details

**Covered by:**
- **Unit Tests:**
  - `submit-transform.unit.spec.jsx` - "transforms remarried over 57 data correctly"
  - `form-config.unit.spec.jsx` - 34 tests covering all conditional dependencies
  - `marriageInfo` page tests - Required fields and validation
  - `ConfirmationPage.unit.spec.jsx` - "should show remarried message when hasRemarried is true"
- **E2E Tests:**
  - `21p-0537.cypress.spec.js` - Remarried over 57 complete flow
- **Manual Test:**
  - Test Plan - Scenario 2: Remarried Over Age 57
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139
  - E2E tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39115

---

### As a DIC recipient whose remarriage ended, I want to report my marriage termination

**Covered by:**
- **Unit Tests:**
  - `submit-transform.unit.spec.jsx` - "transforms terminated marriage data correctly"
  - `form-config.unit.spec.jsx` - "should show correct pages for remarried, spouse not veteran, marriage terminated"
  - `terminationDetails` page tests - Required fields for termination date and reason
- **E2E Tests:**
  - `21p-0537.cypress.spec.js` - Terminated marriage flow
- **Manual Test:**
  - Test Plan - Scenario 3: Remarried, Marriage Terminated
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139
  - E2E tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39115

---

### As a DIC recipient married to a Veteran, I want to provide my spouse's VA information

**Covered by:**
- **Unit Tests:**
  - `submit-transform.unit.spec.jsx` - "handles spouse veteran SSN correctly"
  - `submit-transform.unit.spec.jsx` - "handles spouse veteran VA file number correctly"
  - `submit-transform.unit.spec.jsx` - "handles both spouse veteran identifiers"
  - `form-config.unit.spec.jsx` - "spouseVeteranId page should be visible when hasRemarried is true and spouseIsVeteran is true"
  - `spouseVeteranId` and `spouseVeteranStatus` page tests
- **E2E Tests:**
  - `21p-0537.cypress.spec.js` - Spouse veteran identification paths
- **Manual Test:**
  - Test Plan - Scenario 4: Spouse is Veteran with SSN and VA File Number
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139
  - E2E tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39115

---

### As an authenticated user, I want to save my progress

**Covered by:**
- **Unit Tests:**
  - `IntroductionPage.unit.spec.jsx` - 11 tests covering SaveInProgressIntro rendering
  - Platform save-in-progress functionality (established platform feature)
- **E2E Tests:**
  - `21p-0537.cypress.spec.js` - Save/resume testing
- **Manual Test:**
  - Test Plan - Scenario 5: Save In Progress
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139
  - E2E tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39115

---

### As a user, I want my form data validated before submission

**Covered by:**
- **Unit Tests:**
  - `form-config.unit.spec.jsx` - 34 tests covering all conditional dependencies
  - `pages.unit.spec.jsx` - 13 tests covering required field functions
  - Platform validation (established via web-component-patterns)
- **E2E Tests:**
  - `21p-0537.cypress.spec.js` - Validation on all required fields
- **Manual Test:**
  - Test Plan - Scenario 7: Form Validation
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139
  - E2E tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39115

---

### As a user, I want my data properly formatted for submission

**Covered by:**
- **Unit Tests:**
  - `submit-transform.unit.spec.jsx` - 12 tests covering all transformer logic
  - Tests SSN splitting, phone formatting, date conversion, signature handling
- **E2E Tests:**
  - `21p-0537.cypress.spec.js` - End-to-end submission
- **Manual Test:**
  - Test Plan - All scenarios verify successful submission
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139
  - E2E tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39115

---

### As an unauthenticated user, I want to complete the form without signing in

**Covered by:**
- **Unit Tests:**
  - `prefill-transformer.unit.spec.jsx` - 12 tests covering authenticated and unauthenticated scenarios
  - `IntroductionPage.unit.spec.jsx` - "renders successfully for logged out user"
- **E2E Tests:**
  - `21p-0537.cypress.spec.js` - Unauthenticated flow
- **Manual Test:**
  - Test Plan - Scenario 6: Unauthenticated Submission
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139
  - E2E tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39115

---

### As a user, I want prefill to work with my profile data

**Covered by:**
- **Unit Tests:**
  - `prefill-transformer.unit.spec.jsx` - 12 comprehensive tests including:
    - Complete profile prefill
    - Partial profile data handling
    - Missing email/phone handling
    - Unauthenticated fallback to mock data
- **Manual Test:**
  - Test Plan - Tested with authenticated staging users
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139

---

### As a user, I want the confirmation page to show appropriate messaging

**Covered by:**
- **Unit Tests:**
  - `ConfirmationPage.unit.spec.jsx` - 18 comprehensive tests including:
    - Confirmation number display
    - Submission date formatting
    - Conditional content based on remarriage status
    - Contact information display
    - Print functionality
- **Manual Test:**
  - Test Plan - All scenarios verify confirmation page
- **PR:**
  - Unit tests: https://github.com/department-of-veterans-affairs/vets-website/pull/39139

---

## Test Coverage Summary

| Category | Coverage |
|----------|----------|
| **Total Unit Tests** | 118 tests across 9 test files |
| **Unit Test Coverage** | Statements: 96.06%, Branches: 88.31%, Functions: 94.11%, Lines: 96.52% |
| **E2E Tests** | Complete flow coverage in Cypress |
| **Manual Tests** | 7 scenarios on staging with real test users |
| **Total User Stories** | 10 |
| **Stories with Test Coverage** | 10 (100%) |

---

## Test File Breakdown

| Test File | Tests | Purpose |
|-----------|-------|---------|
| `submit-transform.unit.spec.jsx` | 12 | Data transformation for submission |
| `form-config.unit.spec.jsx` | 34 | Conditional page dependencies |
| `ConfirmationPage.unit.spec.jsx` | 18 | Confirmation page rendering and logic |
| `prefill-transformer.unit.spec.jsx` | 12 | User profile data prefill |
| `pages.unit.spec.jsx` | 13 | Individual page configurations |
| `IntroductionPage.unit.spec.jsx` | 11 | Introduction page rendering |
| `routes.unit.spec.jsx` | 7 | Routing configuration |
| `App.unit.spec.jsx` | 5 | Main app container |
| `helpers.unit.spec.jsx` | 5 | Helper functions |
| **Total** | **118** | |

---

## Related Documentation

- [Test Plan](./test-plan.md) - Detailed manual test scenarios
- [Unit Test Coverage Report](./unit-test-coverage.md) - Coverage metrics and screenshots
- [Regression Test Plan](./regression-test-plan.md) - Regression testing
- [Accessibility Testing](./accessibility-testing.md) - A11y validation
