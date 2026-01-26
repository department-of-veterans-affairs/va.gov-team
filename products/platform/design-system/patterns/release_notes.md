## Forms Library Release Notes

## Release Date: December, 2025

### va-file-input
- Support for HEIC file upload
- Decryption support for password on the backend

### Release Date: Week of 12/1/2025
## Overview

- Updated user-facing text across form components and patterns to improve clarity, consistency, and accessibility. These changes affect labels, hints, and error messages for common form fields used throughout VA.gov.

**Impact**: All forms using web component patterns based on [guidance from content](https://design.va.gov/content-style-guide/form-labels)

- Before/after comparisons available in PR:[View screenshots in PR](https://github.com/department-of-veterans-affairs/vets-website/pull/40041)
- Full name field labels
- Email error messages
- SSN error messages
- International phone hint text

---
|         | Before | After |
| ------- | ------ | ----- |
| Full Name  |<img width="1057" height="1294" alt="image" src="https://github.com/user-attachments/assets/6c90fa6d-f655-47be-bcac-88adfff1b14c" />|<img width="1057" height="1294" alt="image" src="https://github.com/user-attachments/assets/a761f474-99ce-47be-af58-6d7838c6c702" />|
| Email |<img width="1057" height="1294" alt="image" src="https://github.com/user-attachments/assets/7a19d767-5fee-4d48-8718-dae9b9128961" />|<img width="1111" height="1294" alt="image" src="https://github.com/user-attachments/assets/dc1adc2d-eb4d-4e4a-89f2-19f3a7760e62" />|
| Int. Phone |<img width="1057" height="1294" alt="image" src="https://github.com/user-attachments/assets/76d33340-3435-4df9-bf6c-0113a4805fa6" />|<img width="1111" height="1294" alt="image" src="https://github.com/user-attachments/assets/f062e564-6538-4cf5-9258-485129be20f9" />|
| SSN |<img width="1056" height="1294" alt="image" src="https://github.com/user-attachments/assets/d8d71029-ea3b-449a-9965-fd0e0899d5b5" />|<img width="1111" height="1294" alt="image" src="https://github.com/user-attachments/assets/05cd2adb-3abb-4dca-9a73-9b7bba703066" />|


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
- `internationalPhoneUI()`

### For Test Maintainers

If your tests assert on specific error messages or labels, you may need to update them:
