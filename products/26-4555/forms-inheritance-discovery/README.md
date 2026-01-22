# 26-4555 Form inheritance discovery

## Now (12/15/2025)

### Table of Contents

- [Design Findings](#design-findings)
- [Technical Findings](#technical-findings)
- [Level of Effort](#level-of-effort)
- [Next](#next)
- [Epics](#epics)

## Design Findings

Category: Design

- Figma components largely comply with expected VADS component standards,
  to-do items from forms team.

Category: User flow

- Update sign-in component flows (Currently figma is in a future state
  (that has since changed) and does not match production)

Category: Design patterns

- Check prefill notice in the form. Doesn't match figma.
- Check autosave notice under stepper. Staging says "in-progress ID number",
  Figma says "application ID number"
- Save in progress notice on staging calls it an application ID number,
  but it uses the same "in-progress ID" from the top of the page.

Category: Content

- Confirm with CAIA that "application" is the right use on this form

## Technical Findings

Detailed technical analysis of VA Form 26-4555 codebase.

### Pre-Discovery Issues

Issues identified before this discovery and already tracked.

### Imposter Components Audit: PASSED

This form was audited for imposter components. **No imposter components were found.**

The form correctly uses VADS web components:

| Pattern                        | Location                   |
| ------------------------------ | -------------------------- |
| `fullNameNoSuffixUI()`         | personalInformation1.js    |
| `dateOfBirthUI()`              | personalInformation1.js    |
| `ssnUI()`                      | personalInformation2.js    |
| `addressUI()`                  | contactInformation1.js     |
| `phoneUI()`, `emailUI()`       | contactInformation2.js     |
| `yesNoUI()`                    | livingSituation1.js, etc.  |
| `currentOrPastDateUI()`        | previousSahApplication2.js |
| `checkboxGroupUI()`            | remarks.js                 |
| `<va-alert>`, `<va-telephone>` | ConfirmationPage.jsx       |

**This form can serve as a reference implementation for VADS compliance.**

## Discovery Findings

### 1. Content Compliance

#### 1.1 Expired OMB Control Number (CRITICAL)

**File:** `containers/IntroductionPage.jsx:15-19`

```javascript
const ombInfo = {
  resBurden: '10',
  ombNumber: '2900-0132',
  expDate: '6/20/2024',  // EXPIRED
};
```

**Impact:** Form cannot be legally used with expired OMB number.

**Action:** Update immediately or remove from production.

#### 1.2 Hardcoded Phone Numbers (CRITICAL)

**File:** `containers/ConfirmationPage.jsx:19, 28, 39, 66`

**Issue:** Phone number "877-827-3702" hardcoded in 4 places.

**Impact:** Changes require code modifications instead of content updates.

#### 1.3 Hardcoded Content (CRITICAL)

**File:** `containers/IntroductionPage.jsx:6-13, 21-29`

**Issue:** Form content and help instructions hardcoded in component.

#### 1.4 Status Messages (MEDIUM)

**File:** `containers/ConfirmationPage.jsx:24-41`

**Issue:** Three status branches (REJECTED, DUPLICATE, default) hardcoded.

### 2. Code Quality & Legacy Patterns

#### 2.1 Mixed Redux Patterns (CRITICAL)

**File:** `containers/ConfirmationPage.jsx:3, 9, 109-115`

**Issue:** Uses both `connect()` HOC and `useSelector` hook redundantly.

```javascript
import { connect, useSelector } from 'react-redux';
// Line 9: useSelector usage
// Lines 109-115: mapStateToProps and connect HOC
```

#### 2.2 Enzyme Usage (HIGH)

**File:** `tests/containers/ConfirmationPage.unit.spec.jsx:4, 35, 70, 90`

**Issue:** Uses `mount()` from Enzyme alongside React Testing Library.

**Impact:** Enzyme is deprecated, creates inconsistent test patterns.

#### 2.3 hasOwnProperty Anti-pattern (HIGH)

**File:** `config/submit-transformer.js:1, 38`

```javascript
/* eslint-disable no-prototype-builtins */
if (transformedData.hasOwnProperty('otherConditions')) {
  delete transformedData.otherConditions;
}
```

**Should use:** `Object.prototype.hasOwnProperty.call()` or `in` operator.

#### 2.4 PropTypes Not Enforced (MEDIUM)

**File:** `containers/ConfirmationPage.jsx:90-107`

**Issue:** PropTypes defined but nested `response` property not properly typed.

### 3. Form System Compliance

#### 3.1 Downtime Service Mismatch (HIGH)

**Files:**

- `config/form.js:187` - Uses `externalServices.sahsha`
- `containers/App.jsx:15` - Uses `externalServices.lighthouseBenefitsIntake`

**Issue:** Two different external services monitored for downtime in the same form.

**Impact:** Inconsistent downtime handling.

### 4. Platform Integration

#### 4.1 Minimal Prefill Transformer (HIGH)

**File:** `config/prefill-transformer.js:2-16`

**Issue:** Only prefills veteran personal info (17 lines).

**Missing:**

- Previous applications data
- Living situation
- Phone contact info

#### 4.2 Missing Error Boundary (HIGH)

**Issue:** No error boundary implementation.

**Impact:** JavaScript errors crash entire form.

#### 4.3 Missing Feature Toggle Runtime (MEDIUM)

**Issue:** No runtime feature toggle check in App.jsx.

#### 4.4 Missing DataDog RUM Integration (MEDIUM)

**Issue:** No DataDog Real User Monitoring integration for form analytics.

**Impact:** Limited visibility into user behavior, form abandonment,
and performance metrics.

### 5. Accessibility

#### 5.1 Custom Styled Labels (MEDIUM)

**File:** `sass/4555-adapted-housing.scss:9-35`

**Issue:** Custom CSS targeting specific form IDs:

- `#root_previousSahApplicationDate-label`
- `#root_previousSahApplicationAddress__title`
- `#root_previousHiApplicationDate-label`
- `#root_previousHiApplicationAddress__title`
- `#root_careFacilityAddress__title`

**Impact:** ID selectors and negative margins could affect screen readers.

#### 5.2 Missing ARIA Labels (MEDIUM)

**File:** `containers/ConfirmationPage.jsx:24-41`

**Issue:** Conditional content blocks have no aria labels or roles.

#### 5.3 Heading Hierarchy (LOW)

**File:** `pages/remarks.js:35`

**Issue:** `<va-additional-info>` with no explicit heading hierarchy.

### 6. Testing Coverage

#### 6.1 Inconsistent Test Approach (HIGH)

**Location:** `tests/pages/` (10 files)

**Issue:** Most tests use generic `testNumberOfWebComponentFields()`.

**Missing:**

- Conditional page visibility tests
- Required field validation tests
- Error message display tests
- Data transformation tests

#### 6.2 ConfirmationPage Test Issues (HIGH)

**File:** `tests/containers/ConfirmationPage.unit.spec.jsx:84-101`

**Issue:** Test expects error but doesn't verify error message.

#### 6.3 Submit Transformer Tests (MEDIUM)

**File:** `tests/config/submit-transformer.unit.spec.jsx:7-14`

**Issue:** Only tests maximal case.

**Missing:**

- Empty remarks
- otherConditions only
- Checkbox combinations

### 7. Code Organization

#### 7.1 Remarks Transformation Logic (MEDIUM)

**File:** `config/submit-transformer.js:11-25`

**Issue:** Complex nested string building logic.

```javascript
function appendRemarksString() {
  // Nested function using closure over remarkString
  // Logic to append "; " separator mixed with transformation
}
```

**Should:** Extract to utility function with documentation.

## Positive Findings

- VADS Compliant - All pages use web-component-patterns correctly
- Good Structure - Pages use split naming (1/2) consistently
- Clean Organization - 11 pages properly organized in `/pages/`
- Minimal Container Code - Logic in pages/config, not containers
- Well-Organized Constants - Field objects and lists
- Platform Integration - Uses `footerContent`, save-in-progress, `currentOrPastDateUI()`
- Mobile Responsive - Platform address/phone patterns

## Platform Pattern Gaps

| Aspect              | Current           | Recommended                  |
| ------------------- | ----------------- | ---------------------------- |
| Config Structure    | Flat (3 files)    | Modular subdirs              |
| Barrel Exports      | None              | Comprehensive index.js files |
| Page Export Style   | Default export    | Named exports + barrel       |
| JSDoc Coverage      | ~10%              | ~90%                         |
| Transformer Helpers | Minimal (~50 LOC) | Modular (300+ LOC)           |
| Prefill Transformer | Minimal (17 LOC)  | Full (160+ LOC)              |
| Error Handling      | None              | Error constants + boundary   |
| README              | None              | Comprehensive docs           |

## Non-Issues (Platform-Level)

The following were initially flagged but confirmed as platform-level concerns:

| Item                    | Reason                            |
| ----------------------- | --------------------------------- |
| `devOnly` props         | Standard pattern across VA forms  |
| `delete` operator usage | Standard in submit transformers   |

## Dependencies Summary

This form has only 3 dependencies on `simple-forms/shared/`:

| Dependency                 | Replacement      |
| -------------------------- | ---------------- |
| `IntroductionPageView`     | Custom component |
| `GetFormHelp`              | Local component  |
| `sharedTransformForSubmit` | Platform import  |

**No page definitions depend on simple-forms shared code.**

## Level of Effort

### Issue Summary

| Category                       | Critical | High  | Medium | Low   |
| ------------------------------ | -------- | ----- | ------ | ----- |
| Code Quality & Legacy Patterns | 1        | 2     | 1      | 0     |
| Form System Compliance         | 0        | 1     | 0      | 0     |
| Accessibility                  | 0        | 0     | 2      | 1     |
| Testing Coverage               | 0        | 2     | 1      | 0     |
| Code Organization              | 0        | 0     | 1      | 0     |
| Platform Integration           | 1        | 2     | 2      | 0     |
| Content Compliance             | 3        | 0     | 1      | 0     |
| Imposter Components            | 0        | 0     | 0      | 0     |
| **Total**                      | **5**    | **7** | **9**  | **1** |

### Tshirt size estimation

_Teams often start with T-shirt sizes during early planning,
then refine into story points later._

- 👕 Small = Design
- 👕 Medium = Content
- 👕 Small = Monitoring
- 👕 Large = Engineering

### Additional notes

Design flow and Figma components largely comply with expected VADS standards.
This form passed the imposter components audit and can serve as a reference
implementation for VADS compliance. Key concerns are the expired OMB control
number (CRITICAL), hardcoded content, and testing coverage gaps.

## Next

- Write tickets for epic
- Architectural decision record (ADR) decouple APIs from simple-forms engine
- Identify research opportunities
- Review user stories and writing KPI's
- Plan roadmap

## Epics

The following epics track the work identified in this discovery:

- [VA Form 26-4555 Adapted Housing Grant - Technical Debt](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129649)
- [feat(26-4555): Add Datadog RUM browser monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129662)
