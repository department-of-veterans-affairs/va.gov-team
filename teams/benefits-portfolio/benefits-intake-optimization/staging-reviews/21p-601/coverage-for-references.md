# Coverage for References  
## VA Form 21P-0601 – Application for Accrued Amounts Due a Deceased Beneficiary  

**Date:** October 21, 2025  
**Team:** Benefits Intake Optimization (BIOHEART)

This document maps user behaviors to test cases. Each scenario reflects intended product functionality and is verified through unit tests, E2E tests, and manual testing.

---

## User Story to Test Mapping  

### As a claimant, I want to indicate if I've already filed this form so VA knows my filing status  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – transforms `hasAlreadyFiled` correctly  
  - `form-config.unit.spec.jsx` – conditional page logic for eligibility paths  
  - `pages-eligibility.unit.spec.jsx` – `hasAlreadyFiled` page validation  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – complete eligibility determination flow  
- **Manual Test:**  
  - Test Plan – eligibility scenarios  
- **PR:**  
  - Merged to staging  

---

### As a claimant, I want to report unpaid creditors so VA can determine eligibility  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – transforms `hasUnpaidCreditors` correctly  
  - `form-config.unit.spec.jsx` – conditional logic for unpaid creditors path  
  - `pages-eligibility.unit.spec.jsx` – `hasUnpaidCreditors` page validation  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – unpaid creditors flow  
- **Manual Test:**  
  - Test Plan – eligibility scenarios  
- **PR:**  
  - Merged to staging  

---

### As a claimant, I want to provide the veteran’s identification information  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – handles veteran SSN, VA file number, and combined identifiers  
  - `pages-veteran-beneficiary.unit.spec.jsx` – veteran identification page tests  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – veteran identification paths  
- **Manual Test:**  
  - Test Plan – veteran information scenarios  
- **PR:**  
  - Merged to staging  

---

### As a claimant, I want to specify whether the beneficiary is the veteran  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – transforms `beneficiaryIsVeteran` correctly  
  - `form-config.unit.spec.jsx` – conditional logic for beneficiary/veteran paths  
  - `pages-veteran-beneficiary.unit.spec.jsx` – beneficiary identification tests  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – beneficiary is/isn’t veteran flows  
- **Manual Test:**  
  - Test Plan – beneficiary scenarios  
- **PR:**  
  - Merged to staging  

---

### As a claimant, I want to provide my identification and relationship to the deceased  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – transforms claimant identification correctly  
  - `pages-claimant.unit.spec.jsx` – claimant identification, contact, and relationship page tests  
  - `form-config.unit.spec.jsx` – required field validation for claimant information  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – complete claimant information flow  
- **Manual Test:**  
  - Test Plan – claimant information scenarios  
- **PR:**  
  - Merged to staging  

---

### As a claimant, I want to indicate if I want to waive substitution rights  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – transforms `wantsToWaiveSubstitution` correctly  
  - `pages-claimant.unit.spec.jsx` – waiver question validation  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – waiver selection paths  
- **Manual Test:**  
  - Test Plan – waiver scenarios  
- **PR:**  
  - Merged to staging  

---

### As a claimant, I want to provide information about surviving relatives  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – transforms surviving relatives data correctly  
  - `pages-relatives.unit.spec.jsx` – relatives overview and details with custom functions  
  - `form-config.unit.spec.jsx` – conditional logic for multiple relatives  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – multiple surviving relatives flow  
- **Manual Test:**  
  - Test Plan – surviving relatives scenarios (spouse, children, parents)  
- **PR:**  
  - Merged to staging  

---

### As a claimant, I want to report living expenses and debts  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – transforms expenses and debts correctly  
  - `pages-expenses-debts.unit.spec.jsx` – expenses, debts, and remarks pages  
  - `form-config.unit.spec.jsx` – conditional logic for reimbursement claims  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – expenses and debts flow  
- **Manual Test:**  
  - Test Plan – financial information scenarios  
- **PR:**  
  - Merged to staging  

---

### As an authenticated user, I want to save my progress  
**Covered by:**  
- **Unit Tests:**  
  - `IntroductionPage.unit.spec.jsx` – `SaveInProgressIntro` rendering tests  
  - Platform save-in-progress functionality  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – save/resume testing  
- **Manual Test:**  
  - Test Plan – save in progress scenario  
- **PR:**  
  - Merged to staging  

---

### As a user, I want my form data validated before submission  
**Covered by:**  
- **Unit Tests:**  
  - `form-config.unit.spec.jsx` – conditional dependencies tests  
  - `pages-*.unit.spec.jsx` – required field validation across all page tests  
  - Platform validation (web component patterns)  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – validation on all required fields  
- **Manual Test:**  
  - Test Plan – form validation scenarios  
- **PR:**  
  - Merged to staging  

---

### As a user, I want my data properly formatted for submission  
**Covered by:**  
- **Unit Tests:**  
  - `submit-transform.unit.spec.jsx` – transformer logic tests for SSN splitting, phone formatting, date conversion, and currency handling  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – end-to-end submission  
- **Manual Test:**  
  - Test Plan – all scenarios verify successful submission  
- **PR:**  
  - Merged to staging  

---

### As an unauthenticated user, I want to complete the form without signing in  
**Covered by:**  
- **Unit Tests:**  
  - `prefill-transformer.unit.spec.jsx` – authenticated and unauthenticated scenarios  
  - `IntroductionPage.unit.spec.jsx` – renders successfully for logged-out user  
- **E2E Tests:**  
  - `21p-0601.cypress.spec.js` – unauthenticated flow  
- **Manual Test:**  
  - Test Plan – unauthenticated submission scenario  
- **PR:**  
  - Merged to staging  

---

### As a user, I want prefill to work with my profile data  
**Covered by:**  
- **Unit Tests:**  
  - `prefill-transformer.unit.spec.jsx` – comprehensive tests for:  
    - complete profile prefill  
    - partial profile data handling  
    - missing email/phone handling  
    - unauthenticated fallback to mock data  
- **Manual Test:**  
  - Test Plan – tested with authenticated staging users  
- **PR:**  
  - Merged to staging  

---

### As a user, I want the confirmation page to show appropriate messaging  
**Covered by:**  
- **Unit Tests:**  
  - `ConfirmationPage.unit.spec.jsx` – comprehensive tests including confirmation number, submission date, contact info, and print functionality  
- **Manual Test:**  
  - Test Plan – confirmation page scenarios  
- **PR:**  
  - Merged to staging  

---

## Test Coverage Summary  

| Category | Coverage |
|-----------|-----------|
| Total Unit Tests | 222 tests across 13 test files |
| Unit Test Coverage | Statements: 91.93%, Branches: 83.33%, Functions: 93.33%, Lines: 94.11% |
| E2E Tests | Complete flow coverage in Cypress |
| Manual Tests | Staging validation with real test users |
| Total User Stories | 14 |
| Stories with Test Coverage | 14 (100%) |

---

## Test File Breakdown  

| Test File | Tests | Purpose |
|------------|--------|----------|
| submit-transform.unit.spec.jsx | - | Data transformation for submission |
| form-config.unit.spec.jsx | - | Conditional page dependencies |
| ConfirmationPage.unit.spec.jsx | - | Confirmation page rendering and logic |
| prefill-transformer.unit.spec.jsx | - | User profile data prefill |
| pages-eligibility.unit.spec.jsx | - | Eligibility determination pages |
| pages-veteran-beneficiary.unit.spec.jsx | - | Veteran and beneficiary identification |
| pages-claimant.unit.spec.jsx | - | Claimant identification, contact, relationship |
| pages-relatives.unit.spec.jsx | - | Surviving relatives overview and details |
| pages-expenses-debts.unit.spec.jsx | - | Expenses, debts, and remarks pages |
| IntroductionPage.unit.spec.jsx | - | Introduction page rendering |
| routes.unit.spec.jsx | - | Routing configuration |
| App.unit.spec.jsx | - | Main app container |
| helpers.unit.spec.jsx | - | Helper functions |
| **Total** | **222** |  |

---

## Related Documentation  
- Test Plan – detailed manual test scenarios  
- Unit Test Coverage Report – coverage metrics and screenshots  
- Regression Test Plan – regression testing summary  
- Accessibility Testing – WCAG validation results  

---
