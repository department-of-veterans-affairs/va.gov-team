# Unit Test Coverage Report
## VA Form 21P-0537 - Marital Status Questionnaire for DIC Recipients

**Date:** October 3, 2025  
**Team:** Benefits Intake Optimization (BIOHEART)  
**Tested By:** @amponce

---

## Coverage Command

```bash
yarn test:unit src/applications/simple-forms/21p-0537 --coverage
```

---

## Overall Coverage Summary

| Category | Percentage | Covered/Total | Status |
|----------|-----------|---------------|--------|
| **Statements** | 96.06% | 122/127 | ✅ PASS |
| **Branches** | 88.31% | 68/77 | ✅ PASS |
| **Functions** | 94.11% | 32/34 | ✅ PASS |
| **Lines** | 96.52% | 111/115 | ✅ PASS |

**Platform Requirement:** All categories must be ≥80%

**Overall Status:** ✅ PASS - All categories exceed 80% threshold

---

## Coverage Screenshot

<img width="2016" height="477" alt="image" src="https://github.com/user-attachments/assets/1b306f62-f83c-4d21-858f-ae11d6a8fd6a" />

**Test Execution:** 118 passing tests (537ms)

---

## Detailed Coverage by Directory

### Root Directory (21p-0537/)
- **Statements:** 100% (9/9)
- **Branches:** 100% (0/0)
- **Functions:** 100% (4/4)
- **Lines:** 100% (9/9)

**Files:**
- `helpers.js` - 100% all metrics
- `routes.jsx` - 100% all metrics

### Config Directory (21p-0537/config/)
- **Statements:** 94.54% (52/55)
- **Branches:** 86.56% (58/67)
- **Functions:** 100% (13/13)
- **Lines:** 94.11% (48/51)

**Files:**
- `form.js` - 100% all metrics (8/8 statements, 4/4 branches, 6/6 functions)
- `prefill-transformer.js` - 100% all metrics (3/3 statements, 8/8 branches)
- `submit-transformer.js` - 93.18% statements, 83.63% branches, 100% functions, 92.5% lines

### Containers Directory (21p-0537/containers/)
- **Statements:** 92.3% (12/13)
- **Branches:** 100% (10/10)
- **Functions:** 83.33% (5/6)
- **Lines:** 92.3% (12/13)

**Files:**
- `App.jsx` - 100% all metrics
- `ConfirmationPage.jsx` - 83.33% statements, 100% branches, 66.66% functions
- `IntroductionPage.jsx` - 100% all metrics

### Pages Directory (21p-0537/pages/)
- **Statements:** 98% (49/50)
- **Branches:** 100% (0/0)
- **Functions:** 90.9% (10/11)
- **Lines:** 100% (42/42)

**Files with 100% Coverage:**
- `marriageInfo.js` - 20/20 statements, 5/5 functions
- `marriageRecognition.js` - 2/2 statements
- `phoneAndEmail.js` - 6/6 statements
- `recipientIdentifier.js` - 3/3 statements
- `recipientName.js` - 1/1 statements
- `remarriageQuestion.js` - 2/2 statements
- `spouseVeteranId.js` - 6/6 statements, 1/1 functions
- `terminationDetails.js` - 5/5 statements, 2/2 functions
- `terminationStatus.js` - 1/1 statements

**Files with Partial Coverage:**
- `spouseVeteranStatus.js` - 75% statements (3/4), 0% functions (0/1)

---

## Test Files Summary

### Total: 118 Tests Across 9 Files

| Test File | Tests | Coverage Focus |
|-----------|-------|----------------|
| `submit-transform.unit.spec.jsx` | 12 | Data transformation, SSN/phone formatting, date conversion |
| `form-config.unit.spec.jsx` | 34 | Conditional page dependencies, form structure validation |
| `ConfirmationPage.unit.spec.jsx` | 18 | Confirmation rendering, date formatting, conditional content |
| `prefill-transformer.unit.spec.jsx` | 12 | Profile data prefill, authenticated/unauthenticated scenarios |
| `pages.unit.spec.jsx` | 13 | Page configurations, required field functions |
| `IntroductionPage.unit.spec.jsx` | 11 | Introduction page rendering, save-in-progress integration |
| `routes.unit.spec.jsx` | 7 | Routing configuration, index route redirect |
| `App.unit.spec.jsx` | 5 | Main app container, form config integration |
| `helpers.unit.spec.jsx` | 5 | Helper functions (pageFocusScroll) |

---

## Areas with Excellent Coverage (95-100%)

- Data transformation logic (submit-transformer.js)
- Form configuration and conditional dependencies (form.js)
- All 34 conditional page dependency scenarios tested
- Prefill logic for both authenticated and unauthenticated users
- Page configurations and validation functions
- Routing and navigation logic
- Helper utilities

---

## Areas Below 100% (Still Above 80% Requirement)

**ConfirmationPage.jsx**
- Functions: 66.66% (2/3 covered)
- Reason: Some edge case handlers for undefined state
- Impact: Low - overall functions at 94.11%

**spouseVeteranStatus.js**
- Statements: 75% (3/4)
- Functions: 0% (0/1)
- Reason: Minor edge case in spouse veteran status page
- Impact: Minimal - pages directory overall at 98% statements

**submit-transformer.js**
- Branches: 83.63% (46/55)
- Reason: Some edge case branches for optional data handling
- Impact: None - still well above 80% requirement

---

## Test Execution Results

**Command:** `yarn test:unit src/applications/simple-forms/21p-0537`

**Results:**
- 118 tests passing
- 0 tests failing
- Execution time: 537ms

---

## Pull Requests

**Unit Tests PR:** https://github.com/department-of-veterans-affairs/vets-website/pull/39139
- Added 109 new tests (from 9 to 118 total)
- Increased coverage from baseline to 96.06%
- All four coverage categories exceed 80% requirement

**E2E Tests PR:** https://github.com/department-of-veterans-affairs/vets-website/pull/39115
- Complete Cypress test coverage for all user flows

---


