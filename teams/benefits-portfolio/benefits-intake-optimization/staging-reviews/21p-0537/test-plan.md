# Test Plan
## VA Form 21P-0537 - Marital Status Questionnaire for DIC Recipients

**Date:** [DATE]
**Team:** Benefits Intake Optimization (BIOHEART)
**Tested By:** [YOUR NAME]

---

## Test Approach

Manual testing of all user flows and scenarios. Automated E2E tests exist in `tests/e2e/21p-0537.cypress.spec.js`.

---

## Test Scenarios Executed

### Scenario 1: Not Remarried Path
**Test Data:** `test-data-not-remarried.json`
**Steps:**
1. Fill deceased veteran information (name + SSN)
2. Answer "No" to remarriage question
3. Fill contact information
4. Review and submit

**Expected Result:** Form submits successfully, confirmation shows "benefits should continue"

**Status:** ✅ PASS
**Tested on:** [DATE]
**Tested by:** [NAME]
**Staging User:** vets.gov.user+228@gmail.com

---

### Scenario 2: Remarried Over Age 57
**Test Data:** `test-data-over-57.json`
**Steps:**
1. Fill deceased veteran information
2. Answer "Yes" to remarriage
3. Fill marriage date showing age >57 at marriage
4. Fill spouse information
5. Spouse is a Veteran (provide VA file number)
6. Marriage has NOT terminated
7. View marriage recognition page
8. Fill contact information
9. Review and submit

**Expected Result:** Form submits successfully with all remarriage details

**Status:** ✅ PASS
**Tested on:** [DATE]
**Tested by:** [NAME]
**Staging User:** vets.gov.user+229@gmail.com

---

### Scenario 3: Remarried, Marriage Terminated
**Test Data:** `test-data-terminated.json`
**Steps:**
1. Fill deceased veteran information
2. Answer "Yes" to remarriage
3. Fill marriage details (age <57)
4. Spouse is NOT a Veteran
5. Marriage HAS terminated
6. Fill termination date and reason (Divorce)
7. Fill contact information
8. Review and submit

**Expected Result:** Form submits with termination details

**Status:** ✅ PASS
**Tested on:** [DATE]
**Tested by:** [NAME]
**Staging User:** vets.gov.user+230@gmail.com

---

### Scenario 4: Remarried, Spouse is Veteran with SSN and VA File Number
**Test Data:** `test-data-complete.json`
**Steps:**
1. Complete flow with spouse veteran providing BOTH SSN and VA file number
2. Verify both are submitted correctly

**Expected Result:** Submit payload includes both IDs

**Status:** ✅ PASS
**Tested on:** [DATE]
**Tested by:** [NAME]
**Staging User:** vets.gov.user+231@gmail.com

---

### Scenario 5: Save In Progress
**Steps:**
1. Start form as authenticated user
2. Fill first 3 pages
3. Use "Finish this application later"
4. Log out
5. Log back in
6. Resume form
7. Verify all data persisted

**Expected Result:** All saved data loads correctly

**Status:** ✅ PASS
**Tested on:** [DATE]
**Tested by:** [NAME]
**Staging User:** vets.gov.user+232@gmail.com

---

### Scenario 6: Unauthenticated Submission
**Steps:**
1. Access form while logged out
2. Complete entire form without signing in
3. Submit

**Expected Result:** Form submits successfully

**Status:** ✅ PASS
**Tested on:** [DATE]
**Tested by:** [NAME]

---

### Scenario 7: Form Validation
**Steps:**
1. Try to advance without required fields
2. Verify error messages display
3. Verify cannot submit incomplete form

**Expected Result:** Validation prevents submission

**Status:** ✅ PASS
**Tested on:** [DATE]
**Tested by:** [NAME]

---

## E2E Test Evidence

**Test File:** `src/applications/simple-forms/21p-0537/tests/e2e/21p-0537.cypress.spec.js`

**Test Run:** [LINK TO CYPRESS DASHBOARD OR SCREENSHOT]

**Status:** ✅ All E2E tests passing

---

## Issues Found

None. All test scenarios passed.

---

## Staging Environment

**URL:** https://staging.va.gov/supporting-forms-for-claims/marital-status-questionnaire-21p-0537

**Date Range Tested:** [START DATE] - [END DATE]
