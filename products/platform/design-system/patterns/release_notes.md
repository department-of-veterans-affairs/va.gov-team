## Forms Library Release Notes

### Date: 11/25/2025
## Overview

- Updated user-facing text across form components and patterns to improve clarity, consistency, and accessibility. These changes affect labels, hints, and error messages for common form fields used throughout VA.gov.

**Impact**: All forms using web component patterns based on [guidance from content](https://design.va.gov/content-style-guide/form-labels)

- Before/after comparisons available in PR:[View screenshots in PR](https://github.com/department-of-veterans-affairs/vets-website/pull/40041)
- Full name field labels
- Email error messages
- SSN error messages
- International phone hint text
- Date error messages
---

## What Changed

### 1. Full Name Field Labels

Improved clarity for name input fields to be more inclusive of international naming conventions.

**Changes:**
- First name field: `"First name"` → `"First or given name"`
- Last name field: `"Last name"` → `"Last or family name"`

**Affected Components:**
- `fullNameUI()`
- All forms using the full name pattern

---

### 2. Email Field Error Messages

Standardized email validation messages to be more actionable and specific.

**Changes:**
- Required field error: `"Please enter an email address"` → `"Enter a valid email address without spaces using this format: email@domain.com"`
- Pattern validation error: Added `"Enter a valid email address without spaces using this format: email@domain.com"`

**Affected Components:**
- `emailUI()`
- All forms with email input fields

---

### 3. Social Security Number (SSN) Error Messages

Simplified and standardized SSN validation messages.

**Changes:**
- Pattern validation: `"Please enter a valid 9 digit Social Security number (dashes allowed)"` → `"Enter a valid 9-digit Social Security number (dashes allowed)"`
- Required field: `"Please enter a Social Security number"` → `"Enter a valid 9-digit Social Security number (dashes allowed)"`

**Improvements:**
- Removed "Please" for more direct tone
- Consistent hyphenation ("9-digit" vs "9 digit")

**Affected Components:**
- `ssnUI()`
- All forms collecting SSN information

---

### 4. Date of Birth Error Message

Simplified date of birth required field error message.

**Changes:**
- Required field: `"Please provide the date of birth"` → `"Provide a date of birth"`

**Rationale**: More concise and direct while maintaining clarity.

**Affected Components:**
- Date of birth fields
- Forms using memorable date pattern

---

### 5. International Phone Hint Text

Added helpful hint text for international phone number fields.

**Changes:**
- **New hint added**: `"For international numbers select or enter your country code"`

**Rationale**: Clarifies how to enter international phone numbers.

**Affected Components:**
- `internationalPhoneUI()`
- Forms with international phone support

---

### 6. SSN Hint Text

Retained and standardized hint text for SSN fields.

**Changes:**
- Hint text: `"You must enter a Social Security number or VA file number"`

**Affected Components:**
- SSN fields with VA file number option

---

### Files Modified 
**Web Component Patterns:**
- `src/platform/forms-system/src/js/web-component-patterns/datePattern.jsx`
- `src/platform/forms-system/src/js/web-component-patterns/emailPattern.jsx`
- `src/platform/forms-system/src/js/web-component-patterns/fullNamePattern.js`
- `src/platform/forms-system/src/js/web-component-patterns/phonePattern.jsx`
- `src/platform/forms-system/src/js/web-component-patterns/ssnPattern.jsx`

**Tests Updated:**
- `src/applications/ivc-champva/10-7959a/tests/unit/config/submitTransformer.unit.spec.js`
- `src/applications/ivc-champva/10-7959c/tests/unit/config/chapters/applicantIdentificationInfo/applicantIdentificationInfo.unit.spec.js`
- `src/applications/ivc-champva/shared/tests/pages/pageTests.spec.js`
- `src/applications/simple-forms/21-10210/tests/e2e/21-10210.cypress.spec.js`
- `src/applications/simple-forms/21P-0847/tests/e2e/21P-0847.cypress.spec.js`
- `src/applications/burials-ez/tests/cypress/fixtures/data/maximal-test.json`
- Additional test files updated for error message assertions


## Migration Guide

### For Form Developers

**No action required** for most forms. These changes are automatic for any form using the standard web component patterns:
- `fullNameUI()`
- `emailUI()`
- `ssnUI()`
- `dateOfBirthUI()`
- `internationalPhoneUI()`

### For Test Maintainers

If your tests assert on specific error messages or labels, you may need to update them:
