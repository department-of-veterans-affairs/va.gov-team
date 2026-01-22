# Regression Test Plan
## VA Form 21P-0537 - Marital Status Questionnaire for DIC Recipients

**Date:** 10/01/2025
**Team:** Benefits Intake Optimization (BIOHEART)


---

## Purpose

This form is brand new with no previous version. The regression test ensures the entry point integration does not break existing functionality.

---

## Regression Test: Entry Point Page

**Test:** Verify the supporting forms page still loads and functions correctly

**Steps:**
1. Navigate to https://staging.va.gov/supporting-forms-for-claims/
2. Verify page loads without errors
3. Verify all existing form links still work
4. Verify 21P-0537 link is present and functional

**Expected Result:** All supporting forms page functionality works as before, with new form added

---

## Regression Test: Platform Components

**Test:** Verify form uses standard platform components without issues

**Components Tested:**
- SaveInProgressIntro
- va-segmented-progress-bar
- Platform form validation
- Form submission flow

**Expected Result:**  - All platform components work as expected

---

## Regression Test: Submit Endpoint

**Test:** Verify submission to `/simple_forms_api/v1/simple_forms` works

**Steps:**
1. Submit completed form
2. Verify 200 response
3. Verify confirmation number returned

**Expected Result:** Submission successful, confirmation received

