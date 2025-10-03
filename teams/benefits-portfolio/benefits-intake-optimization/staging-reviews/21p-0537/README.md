# README
## VA Form 21P-0537 - Marital Status Questionnaire for DIC Recipients
## Staging Review Artifacts

**Team:** Benefits Intake Optimization (BIOHEART)  
**Form URL:** https://staging.va.gov/supporting-forms-for-claims/marital-status-questionnaire-21p-0537  
**Date:** October 3, 2025

---

## Overview

This directory contains all QA artifacts required for the Platform Staging Review of VA Form 21P-0537. The form allows Dependency and Indemnity Compensation (DIC) recipients to report their marital status to the VA.

---

## Platform QA Standards

All artifacts in this directory meet the requirements outlined in the [Platform QA Standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards).

**Staging Review Ticket:** [#120221](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120221)

---

## Testing Artifacts

### Required Documentation

| Artifact | Status | Location |
|----------|--------|----------|
| **Unit Test Coverage Report** | ✅ Complete | [unit-test-coverage.md](./unit-test-coverage.md) |
| **Test Plan** | ✅ Complete | [test-plan.md](./test-plan.md) |
| **Regression Test Plan** | ✅ Complete | [regression-test-plan.md](./regression-test-plan.md) |
| **Coverage for References** | ✅ Complete | [coverage-for-references.md](./coverage-for-references.md) |
| **Summary (Defects) Report** | ✅ Complete | [summary-defects-report.md](./summary-defects-report.md) |
| **Accessibility Testing** | ✅ Complete | [accessibility-testing.md](./accessibility-testing.md) |
| **E2E Tests** | ✅ Complete | See source code links below |

---

## Test Coverage Summary

### Unit Tests
- **Total Tests:** 118 tests across 9 test files
- **Statements:** 96.06% (122/127)
- **Branches:** 88.31% (68/77)
- **Functions:** 94.11% (32/34)
- **Lines:** 96.52% (111/115)
- **Status:** ✅ All categories exceed 80% requirement

### E2E Tests
- **Status:** ✅ Complete Cypress test coverage
- **Coverage:** All user flows tested

### Manual Testing
- **Scenarios Tested:** 7 complete user flows
- **Status:** ✅ All scenarios pass
- **Environment:** Staging
- **Test Users:** Real VA staging test users

### Accessibility Testing
- **Standard:** WCAG 2.1 Level AA
- **Automated:** 0 axe violations



---

## Source Code

### Pull Requests

**Unit Tests:** [PR #39139](https://github.com/department-of-veterans-affairs/vets-website/pull/39139)
- Added 109 new unit tests
- Increased coverage from baseline to 96.06%
- 118 total passing tests

**E2E Tests:** [PR #39115](https://github.com/department-of-veterans-affairs/vets-website/pull/39115)
- Complete Cypress test suite
- All user flows covered

### Test Files Location

```
src/applications/simple-forms/21p-0537/
├── tests/
│   ├── unit/
│   │   ├── App.unit.spec.jsx (5 tests)
│   │   ├── ConfirmationPage.unit.spec.jsx (18 tests)
│   │   ├── form-config.unit.spec.jsx (34 tests)
│   │   ├── IntroductionPage.unit.spec.jsx (11 tests)
│   │   ├── helpers.unit.spec.jsx (5 tests)
│   │   ├── routes.unit.spec.jsx (7 tests)
│   │   ├── pages.unit.spec.jsx (13 tests)
│   │   ├── prefill-transformer.unit.spec.jsx (12 tests)
│   │   └── submit-transform.unit.spec.jsx (12 tests)
│   └── e2e/
│       └── 21p-0537.cypress.spec.js
```

---

## Quick Start - Running Tests

### Unit Tests
```bash
# Run all unit tests
yarn test:unit src/applications/simple-forms/21p-0537

# Run with coverage
yarn test:unit src/applications/simple-forms/21p-0537 --coverage

# Run specific test file
yarn test:unit src/applications/simple-forms/21p-0537/tests/unit/submit-transform.unit.spec.jsx
```

### E2E Tests
```bash
# Run Cypress tests
yarn cy:run --spec src/applications/simple-forms/21p-0537/tests/e2e/21p-0537.cypress.spec.js
```

---

## Form Details

**Form Number:** VA Form 21P-0537  
**Form Title:** Marital Status Questionnaire for DIC Recipients  
**Purpose:** Report remarriage or marital status changes for DIC benefit eligibility

**User Flows:**
1. Not remarried (benefits continue)
2. Remarried after age 57 (may maintain benefits)
3. Remarried before age 57, marriage terminated (benefits may be restored)
4. Spouse is a Veteran (requires VA identification)

---

## Key Features Tested

- ✅ Conditional page routing based on user responses
- ✅ Save-in-progress functionality
- ✅ Prefill from user profile
- ✅ Authenticated and unauthenticated user flows
- ✅ Data transformation for submission
- ✅ Form validation
- ✅ Accessibility (keyboard, screen reader, color contrast)
- ✅ Confirmation page with conditional messaging
- ✅ VADS component usage

---

## Testing Timeline

| Phase | Date | Status |
|-------|------|--------|
| Unit Test Development | September 2025 | ✅ Complete |
| E2E Test Development | September 2025 | ✅ Complete |
| Manual Testing | October 2025 | ✅ Complete |
| Accessibility Testing | October 2025 | ✅ Complete |
| Documentation | October 3, 2025 | ✅ Complete |
| Staging Review | October 7, 2025 | 🔄 Scheduled |

---

## Defects

**Total Defects Found:** 0

All testing phases completed with zero defects. See [summary-defects-report.md](./summary-defects-report.md) for details.

---

## Platform Standards Compliance

| Standard | Requirement | Status |
|----------|-------------|--------|
| Unit Test Coverage | ≥80% all categories | ✅ 96.06% statements, 88.31% branches, 94.11% functions, 96.52% lines |
| Test Plan | Required | ✅ Complete |
| Regression Test Plan | Required | ✅ Complete |
| Traceability Reports | Required | ✅ Complete |
| E2E Test Participation | ≥1 test | ✅ Complete suite |
| Accessibility | WCAG 2.1 AA | ✅ 0 violations |

---

## Contact

**Product Owner:** [Name]  
**Engineering Lead:** @amponce  
**Team Slack:** #benefits-intake-optimization

---

## Additional Resources

- [Platform QA Standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards)
- [Staging Review Process](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)
- [VA Design System](https://design.va.gov/)
- [Form 21P-0537 Product Documentation](../../products/simple-forms/21p-0537/)

---

**Last Updated:** October 3, 2025  
**Status:** Ready for Staging Review ✅
