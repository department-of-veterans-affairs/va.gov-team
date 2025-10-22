# Test Plan  
### VA Form 21P-0601 – Application for Accrued Amounts Due a Deceased Beneficiary  

**Date:** October 21, 2025  
**Team:** Benefits Intake Optimization (BIOHEART)  
**Prepared by:** @amponce  

---

## Test Approach  
Manual testing of all user flows and scenarios was conducted in the staging environment.  
Automated E2E tests are implemented in `tests/e2e/21p-0601.cypress.spec.js`.

---

## Test Scenarios Executed  

### Scenario 1: Complete Application – Spouse Claimant with Multiple Children  
**Test Data:** `test-data-spouse-with-children.json`  

**Steps:**  
1. Answer “No” to already filed question.  
2. Answer “No” to unpaid creditors.  
3. Fill veteran identification (name, SSN, VA file number).  
4. Answer “No” – beneficiary is not the veteran.  
5. Fill beneficiary information (name, date of death).  
6. Fill claimant information (name, DOB, SSN, address, phone, email).  
7. Select relationship: Spouse.  
8. Answer “No” to waiving substitution.  
9. Select surviving relatives: Children (2).  
10. Fill details for each child (name, relationship, DOB, address).  
11. Answer “No” to claiming reimbursement.  
12. Add remarks about pending claim.  
13. Review and submit.  

**Expected Result:** Form submits successfully with all claimant and surviving relatives details.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 2: Beneficiary is Veteran  
**Test Data:** `test-data-beneficiary-is-veteran.json`  

**Steps:**  
1. Answer “No” to already filed.  
2. Answer “No” to unpaid creditors.  
3. Fill veteran identification.  
4. Answer “Yes” – beneficiary **is** the veteran.  
5. Skip beneficiary name/death date (auto-filled).  
6. Fill claimant information.  
7. Select relationship and surviving relatives.  
8. Complete and submit.  

**Expected Result:** Form recognizes beneficiary as veteran and skips duplicate fields.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 3: Already Filed Application  
**Test Data:** `test-data-already-filed.json`  

**Steps:**  
1. Answer “Yes” to already filed question.  
2. Verify alert/message displays about prior filing.  
3. Continue with rest of form.  
4. Submit.  

**Expected Result:** Form displays appropriate messaging and allows submission.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 4: Unpaid Creditors  
**Test Data:** `test-data-unpaid-creditors.json`  

**Steps:**  
1. Answer “No” to already filed.  
2. Answer “Yes” to unpaid creditors.  
3. Verify alert/message displays about eligibility.  
4. Continue with rest of form.  
5. Submit.  

**Expected Result:** Form displays appropriate messaging about unpaid creditors.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 5: Claimant Waives Substitution  
**Test Data:** `test-data-waive-substitution.json`  

**Steps:**  
1. Complete eligibility and identification sections.  
2. Fill claimant information.  
3. Answer “Yes” to waiving substitution.  
4. Complete and submit.  

**Expected Result:** Waiver preference is captured in submission.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 6: Multiple Surviving Relatives (Spouse, Children, Parents)  
**Test Data:** `test-data-all-relatives.json`  

**Steps:**  
1. Complete eligibility and identification.  
2. Select all relative types: Spouse, Children, Parents.  
3. Fill details for spouse, two children, and two parents.  
4. Complete and submit.  

**Expected Result:** Form handles multiple relatives of different types correctly.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 7: No Surviving Relatives  
**Test Data:** `test-data-no-relatives.json`  

**Steps:**  
1. Complete eligibility and identification.  
2. Select “None” for surviving relatives.  
3. Skip relatives details section.  
4. Complete and submit.  

**Expected Result:** Form allows submission with no surviving relatives.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 8: Claiming Reimbursement for Expenses  
**Test Data:** `test-data-reimbursement.json`  

**Steps:**  
1. Complete all identification sections.  
2. Answer “Yes” to claiming reimbursement.  
3. Fill expense details (nature, amounts, paid/unpaid).  
4. Fill debt information if applicable.  
5. Complete and submit.  

**Expected Result:** Form captures expense and debt information correctly.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 9: Save In Progress  
**Steps:**  
1. Start form as authenticated user.  
2. Fill first several pages.  
3. Use “Finish this application later.”  
4. Log out and back in.  
5. Resume form from My VA.  
6. Verify all data persisted correctly.  
7. Complete and submit.  

**Expected Result:** All saved data loads correctly upon resume.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  
**Staging User:** `vets.gov.user+228@gmail.com`  

---

### Scenario 10: Unauthenticated Submission  
**Steps:**  
1. Access form while logged out.  
2. Complete the entire form without signing in.  
3. Submit successfully.  

**Expected Result:** Form submits successfully for unauthenticated users.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  

---

### Scenario 11: Form Validation  
**Steps:**  
1. Attempt to advance without required fields (SSN, names, dates).  
2. Verify error messages display appropriately.  
3. Try invalid data formats (SSN, phone, dates).  
4. Verify cannot submit incomplete form.  
5. Verify validation on all conditional fields.  

**Expected Result:** Validation prevents submission and shows helpful error messages.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  

---

### Scenario 12: Data Transformation Verification  
**Steps:**  
1. Submit form with various data formats.  
2. Verify SSN is split correctly (`XXX-XX-XXXX`).  
3. Verify phone and date formats are correct.  
4. Check submission payload matches expected schema.  

**Expected Result:** All data transforms correctly in the submission payload.  
**Status:** ✅ PASS  
**Tested on:** October 21, 2025  
**Tested by:** @amponce  

---

## E2E Test Evidence  
**Test File:** `src/applications/simple-forms/21p-0601/tests/e2e/21p-0601.cypress.spec.js`  
**Test Run:**  

<img width="1650" height="597" alt="601_cypress_tests" src="https://github.com/user-attachments/assets/71c81ff0-51cb-44a2-a121-df0f6aeacb67" />

**Status:** ✅ All E2E tests passing  

---

## Issues Found  
None. All test scenarios passed successfully.

---

## Staging Environment  
**URL:** [https://staging.va.gov/supporting-forms-for-claims/application-for-accrued-benefits-21p-0601](https://staging.va.gov/supporting-forms-for-claims/application-for-accrued-benefits-21p-0601)  
**Feature Flag:** `form21p0601` (currently enabled on staging)

---

## Notes  
- Form successfully handles all conditional paths (eligibility, beneficiary status, relative types, reimbursement).  
- Save-in-progress functionality works correctly for authenticated users.  
- Unauthenticated users can complete and submit the form.  
- All data transformations (SSN, phone, dates) work as expected.  
- Validation prevents submission with missing or invalid data.  
- Confirmation page displays appropriate messaging based on submission data.  

---
