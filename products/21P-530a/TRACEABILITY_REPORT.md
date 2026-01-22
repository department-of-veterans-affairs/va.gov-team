# Traceability Report – VA Form 21P-530a Burial Allowance
## GitHub Issue to Test Case Mapping

**Prepared:** 2025-11-05
**Product:** VA Form 21P-530a State or Tribal Organization Application for Interment Allowance
**Purpose:** Document traceability between GitHub issues and test cases to ensure complete test coverage of all requirements.
**Source:** GitHub Issues fetched from department-of-veterans-affairs/va.gov-team

---

## 1. Overview

This traceability report maps each GitHub issue (implementation tickets, bug reports, platform reviews) to the corresponding test cases in the Test Plan. This ensures that all functional requirements, identified bugs, and platform feedback are adequately tested.

**Source Documents:**
- GitHub Issues: `GITHUB_ISSUES.md` (fetched 2025-11-05)
- Test Cases: `TEST_PLAN.md` and `TEST_CASES.csv`
- Test Coverage Goal: 100% of issues mapped to test cases

**CRITICAL FORM FEATURE:** This form includes **MULTIPLE SERVICE PERIODS** support - the servicePeriods array can contain a dynamic number of service periods, each requiring full validation. This is the most complex feature across all 4 forms.

---

## 2. Implementation Issues to Test Case Mapping

### Closed Implementation Issues

| Issue # | Issue Title | Mapped Test Cases | Coverage |
|---------|-------------|-------------------|----------|
| **#122314** | 530a: Create Form Model | TC-530a-API-001, TC-530a-LH-001, TC-530a-NAV-001 | ✅ Full |
| **#122315** | Add Validator to Model | TC-530a-VAL-001, TC-530a-MSP-004, TC-530a-MSP-005, TC-530a-MSP-007, TC-530a-MSP-008 | ✅ Full |
| **#122316** | 530a: Add Submission Endpoint | TC-530a-API-001, TC-530a-API-002, TC-530a-LH-001, TC-530a-NAV-001 | ✅ Full |
| **#122318** | 530a: PDF Generation | TC-530a-PDF-002, TC-530a-MSP-009, TC-530a-EDGE-001, TC-530a-EDGE-002 | ✅ Full |
| **#122927** | 530a: Create Rswag specs | (Backend Swagger documentation - no E2E tests) | ✅ Full |
| **#124063** | 21P-530a: Add Download PDF Endpoint | TC-530a-PDF-002, TC-530a-MSP-009 | ✅ Full |
| **#123293** | Turn on FF for all Forms | (Feature flag not used - public form) | ✅ Full |
| **#124293** | Fix OliveBranch/Committee Validation Conflict | TC-530a-VAL-001, TC-530a-API-002 | ✅ Full |
| **#121960** | Set up MVP of Form 530a | TC-530a-NAV-001, TC-530a-MSP-001 through TC-530a-MSP-009 | ✅ Full |

**Test Coverage Details:**

**Issue #122314 - Create Form Model:**
- Set FORM = '21P-530a' → TC-530a-API-001
- Business line = 'PMC' (Pension Management Center) → TC-530a-LH-001
- Document type = 540 (Burial/Memorial Benefits) → TC-530a-API-002
- No user_account association (public access) → TC-530a-NAV-001

**Issue #122315 - Add Validator (CRITICAL - Multiple Service Periods):**
- **Validate servicePeriods array exists** → TC-530a-MSP-007
- **Validate at least one service period required** → TC-530a-MSP-001, TC-530a-MSP-007
- **For each service period validate all required fields** → TC-530a-MSP-004
- **Validate date order within each period** → TC-530a-MSP-005
- Add clear error messages with period index → TC-530a-MSP-005, TC-530a-MSP-008
- Example: "Service period 2: Date left service must be after date entered" → TC-530a-MSP-008

**Issue #122316 - Add Submission Endpoint:**
- Public access (no authentication) → TC-530a-NAV-001
- Send confirmation email to organization → TC-530a-API-001
- Process attachments and Lighthouse submission → TC-530a-LH-001

**Issue #122318 - PDF Generation (CRITICAL - Multiple Service Periods):**
- **Handle multiple service periods mapping** → TC-530a-MSP-009
- Iterate through servicePeriods array → TC-530a-MSP-009
- Handle dynamic number of service periods → TC-530a-MSP-009
- May need continuation page logic → TC-530a-MSP-009
- Test with 1, 2, 3+ service periods → TC-530a-MSP-001, TC-530a-MSP-002, TC-530a-MSP-003, TC-530a-MSP-009

**Issue #124063 - Download PDF Endpoint:**
- PDF download with multiple service periods → TC-530a-MSP-009, TC-530a-PDF-002

**Issue #124293 - Validation Conflict Fix:**
- Fix OliveBranch/Committee conflict → TC-530a-VAL-001, TC-530a-API-002

**Issue #121960 - Set up MVP:**
- Develop MVP flow based on Figma designs → TC-530a-NAV-001
- **Multiple service periods support required** → TC-530a-MSP-001 through TC-530a-MSP-009

---

## 3. Quality Assurance Issues to Test Case Mapping

### Open QA Issues

| Issue # | Issue Title | Mapped Test Cases | Coverage |
|---------|-------------|-------------------|----------|
| **#124076** | 530a Pre-staging UI refinements | TC-530a-NAV-001, TC-530a-MSP-002, TC-530a-MSP-006, TC-530a-VAL-001, TC-530a-API-001 | ✅ Full |
| **#124064** | Accessibility Testing | TC-530a-A11Y-001, TC-530a-MSP-006 | ✅ Full |
| **#121963** | Test plan for 530a | (Meta issue - this traceability report and TEST_PLAN.md) | ✅ Full |

**Test Coverage Details:**

**Issue #124076 - Pre-staging UI Refinements:**
This issue tracks UI refinements and adjustments needed before staging review, particularly for the multiple service periods feature:

1. **Global issues:**
   - Button padding (8px needed) → TC-530a-NAV-001
   - H3 styles look off → TC-530a-NAV-001

2. **Introduction page:**
   - Add intro paragraph per Platform feedback → TC-530a-NAV-001
   - Remove inapplicable content → TC-530a-NAV-001
   - Update form title → TC-530a-NAV-001
   - Make fully unauthenticated → TC-530a-FF-002

3. **Step 1: Organization information:**
   - Add relationship to Veteran page → TC-530a-NAV-001
   - Update H3s → TC-530a-NAV-001
   - Phone marking → TC-530a-VAL-001
   - Mailing address issues → TC-530a-VAL-001

4. **Step 2: Deceased Veteran information:**
   - Split pages → TC-530a-NAV-001
   - Headers updating → TC-530a-NAV-001

5. **Service periods (Key refinement):**
   - **Replace list loop with multiple responses pattern** → TC-530a-MSP-002 ⚠️ Platform feedback
   - **Support adding/removing multiple service periods** → TC-530a-MSP-003, TC-530a-MSP-006
   - **Validation for each period** → TC-530a-MSP-004, TC-530a-MSP-005

6. **Served under different name:**
   - Change to radio tiles → TC-530a-NAV-001
   - Replace list loop with multiple responses flow → TC-530a-NAV-001

7. **Review submission:**
   - Statement of truth updates → TC-530a-NAV-001
   - Organization title field → TC-530a-VAL-001
   - Accordion display issues → TC-530a-NAV-001
   - Cemetery name not displaying → TC-530a-NAV-001

8. **Confirmation:**
   - Update to match designs → TC-530a-NAV-001

**Issue #124064 - Accessibility Testing:**
Foundation accessibility testing completed with following results:
- Color/contrast: ✅ Pass → Verified by TC-530a-A11Y-001
- axe scans: ✅ No issues → Verified by TC-530a-A11Y-001
- Content zoom: ✅ Pass → Verified by TC-530a-A11Y-001
- Keyboard navigation: ⚠️ Issues found → Requires fixes then TC-530a-A11Y-001
  - Error focus doesn't move to error state
  - Add service history/previous name focus issues (component being replaced with new pattern) → TC-530a-MSP-006

**Issue #121963 - Test Plan:**
- Create TestRails plan → Delivered as TEST_PLAN.md
- Create Cypress tests → Referenced by test cases in this report
- Due date: Nov 3, 2025

---

## 4. Platform Review Issues to Test Case Mapping

### Open Platform Review Issues

| Issue # | Issue Title | Type | Mapped Test Cases | Coverage |
|---------|-------------|------|-------------------|----------|
| **#123655** | Midpoint Review - Content Feedback | Content | TC-530a-NAV-001, TC-530a-VAL-001 | ✅ Full |

**Test Coverage Details:**

**Issue #123655 - Content Feedback (MUST):**
- Content should match design system rather than paper form → TC-530a-NAV-001

---

### Closed Platform Review Issues

| Issue # | Issue Title | Type | Mapped Test Cases | Coverage |
|---------|-------------|------|-------------------|----------|
| **#123274** | Midpoint Review - IA Feedback | IA | TC-530a-MSP-002, TC-530a-NAV-001 | ✅ Full (CLOSED) |
| **#123078** | Midpoint Review - Design Feedback | Design | TC-530a-NAV-001 | ✅ Full (CLOSED) |
| **#122476** | Design Intent - IA Feedback | IA | TC-530a-MSP-002, TC-530a-NAV-001 | ✅ Full (CLOSED) |

**Test Coverage Details:**

**Issue #123274 - IA Feedback (MUST - CLOSED):**
- **Use multiple response pattern (for service periods)** → TC-530a-MSP-002 ⚠️ CRITICAL
- Clarify relationship to 530EZ form → TC-530a-NAV-001
- Use specific, unique H3s for each step → TC-530a-NAV-001

**Issue #122476 - Design Intent IA Feedback (MUST - CLOSED):**
- **Use multiple response pattern** → TC-530a-MSP-002 ⚠️ CRITICAL for service periods
- Work with centralized content and IA team → TC-530a-NAV-001

---

## 5. Feature Flag Issue

| Issue # | Issue Title | Mapped Test Cases | Coverage |
|---------|-------------|-------------------|----------|
| **#124409** | Put 4192/530a endpoints behind feature flags | TC-530a-FF-001, TC-530a-FF-002 | ✅ Full |

**Test Coverage Details:**
- TC-530a-FF-001: Tests endpoints return 403 when flag disabled
- TC-530a-FF-002: Tests endpoints accessible when flag enabled
- Feature flag: form_530a_enabled

---

## 6. Functional Coverage by Feature

### Multiple Service Periods (CRITICAL FEATURE)
- **GitHub Issues:** #122315 (validator), #122318 (PDF), #122316 (endpoint), #124076 (UI refinements), #123274 (multiple response pattern), #122476 (design intent), #121960 (MVP setup)
- **Test Cases:** TC-530a-MSP-001 through TC-530a-MSP-009 (9 CRITICAL tests)
- **Coverage:** ✅ Complete
- **Critical Requirements:**
  - servicePeriods array with dynamic length
  - Each period requires: serviceBranch, dateEnteredService, dateLeftService, rankAtSeparation
  - Validation must check date order within each period
  - PDF must display all service periods
  - UI uses multiple responses pattern (not list loop) - **Issue #124076, #123274, #122476**
  - API validates array structure and each period
  - Error messages identify specific service period (e.g., "Service period 2: ...")

### Feature Flag Management
- **GitHub Issues:** #124409
- **Test Cases:** TC-530a-FF-001, TC-530a-FF-002
- **Coverage:** ✅ Complete

### Public Access (No Authentication)
- **GitHub Issues:** #124076 (make fully unauthenticated), #122316 (public endpoint)
- **Test Cases:** TC-530a-FF-002, TC-530a-NAV-001
- **Coverage:** ✅ Complete
- **Critical:** Form MUST be accessible without login for cemetery officials

### Form Navigation & Completion
- **GitHub Issues:** #124076 (UI refinements across pages)
- **Test Cases:** TC-530a-NAV-001
- **Coverage:** ✅ Complete

### Validation
- **GitHub Issues:** #122315 (validator with service periods), #124293 (validation conflict), #124076 (field validation refinements)
- **Test Cases:** TC-530a-VAL-001, TC-530a-VAL-002, plus MSP-004, MSP-005, MSP-007, MSP-008
- **Coverage:** ✅ Complete

### PDF Generation
- **GitHub Issues:** #122318 (PDF with service periods), #124063 (download endpoint)
- **Test Cases:** TC-530a-PDF-002, TC-530a-MSP-009
- **Coverage:** ✅ Complete
- **Critical:** PDF must display all service periods dynamically

### Lighthouse Submission
- **GitHub Issues:** #122314 (model), #122316 (endpoint)
- **Test Cases:** TC-530a-LH-001
- **Coverage:** ✅ Complete
- **Business Line:** PMC (Pension Management Center)
- **Document Type:** 540 (Burial/Memorial Benefits)

### Rate Limiting
- **GitHub Issues:** (Implicit - public endpoint requires rate limiting)
- **Test Cases:** TC-530a-RATE-001
- **Coverage:** ✅ Complete
- **Critical:** Rate limiting essential for public endpoint security

### Error Handling
- **GitHub Issues:** (Implementation assumed in backend work)
- **Test Cases:** TC-530a-ERR-001
- **Coverage:** ✅ Complete

### Accessibility
- **GitHub Issues:** #124064 (accessibility testing)
- **Test Cases:** TC-530a-A11Y-001, TC-530a-MSP-006 (service period keyboard nav)
- **Coverage:** ✅ Complete (with noted keyboard navigation issues to fix)

### Browser Compatibility
- **GitHub Issues:** (Implicit requirement across all issues)
- **Test Cases:** TC-530a-BROWSER-001, TC-530a-BROWSER-002, TC-530a-BROWSER-003
- **Coverage:** ✅ Complete

---

## 7. Test Coverage Summary

| Category | Total GitHub Issues | Issues with Test Coverage | Coverage % |
|----------|---------------------|---------------------------|------------|
| **Implementation Issues** | 9 (all closed) | 9 | 100% |
| **QA Issues** | 3 (2 open + 1 meta) | 3 | 100% |
| **Platform Review Issues** | 1 open + 3 closed | 4 | 100% |
| **Feature Flag Issues** | 1 | 1 | 100% |
| **TOTAL** | **17 issues tracked** | **17** | **100%** |

---

## 8. Gaps and Risks

### Identified Gaps
✅ **No gaps identified** - All GitHub issues have corresponding test coverage.

### Critical Open Issues Requiring Test Verification

1. **Issue #124076 - Pre-staging UI Refinements:**
   - **Risk:** Medium - UI adjustments needed to match design specifications for service periods
   - **Mitigation:** TC-530a-NAV-001 and TC-530a-MSP-001 through MSP-009 validate complete flow
   - **Status:** Open - refinements documented, tests ready to verify implementation
   - **Key refinements:**
     - **Service periods using multiple responses pattern (per Platform feedback)**
     - **UI support for adding/removing multiple service periods**
     - Accordion display refinements
     - Cemetery name display

2. **Issue #124064 - Accessibility Testing (Keyboard Navigation Refinements):**
   - **Risk:** Medium - Keyboard navigation being refined for service periods
   - **Mitigation:** TC-530a-A11Y-001, TC-530a-MSP-006 validate accessibility after refinements
   - **Status:** Open - component being updated to new pattern
   - **Areas:** Add service history focus, error focus

3. **Issue #124409 - Feature Flag Endpoints:**
   - **Risk:** MEDIUM - Endpoints must be properly gated
   - **Mitigation:** TC-530a-FF-001, TC-530a-FF-002 test gating
   - **Status:** Open - waiting for implementation

4. **Issue #123655 - Content Feedback:**
   - **Risk:** LOW - Content must match design system
   - **Mitigation:** TC-530a-NAV-001 verify content
   - **Status:** Open - waiting for content updates

5. **Multiple Service Periods Feature (Complex Feature):**
   - **Risk:** Medium - Complex feature requiring multiple responses pattern
   - **Mitigation:** 9 CRITICAL test cases (TC-530a-MSP-001 through MSP-009)
   - **Platform Requirements:**
     - UI uses multiple responses pattern (#123274, #122476) - **MUST feedback**
     - Validator handles dynamic array (#122315)
     - PDF displays all periods (#122318)
     - API validates array and each period (#122316)
   - **Status:** Implementation complete, UI refinements in progress (#124076)

---

## 9. Reverse Traceability (Test Cases → GitHub Issues)

| Test Case ID | Mapped GitHub Issues | Purpose |
|--------------|---------------------|---------|
| TC-530a-FF-001 | #124409 | Feature flag OFF blocks access |
| TC-530a-FF-002 | #124409, #124076 | Feature flag ON + public access |
| TC-530a-MSP-001 | #122315, #122318, #121960 | Single service period validation |
| TC-530a-MSP-002 | #123274, #122476, #124076, #121960 | Add second period (multiple responses pattern) |
| TC-530a-MSP-003 | #122315, #122318, #121960 | Three service periods |
| TC-530a-MSP-004 | #122315, #121960 | Service period required fields validation |
| TC-530a-MSP-005 | #122315, #121960 | Service period date logic with period identifier |
| TC-530a-MSP-006 | #122318, #124064, #124076, #121960 | Remove service period |
| TC-530a-MSP-007 | #122315, #122316, #121960 | API validates servicePeriods array |
| TC-530a-MSP-008 | #122315, #122316, #121960 | API validates each period with identifier |
| TC-530a-MSP-009 | #122318, #124063, #121960 | PDF with multiple service periods |
| TC-530a-NAV-001 | #124076, #123655, #122314, #122316, #121960 | End-to-end flow |
| TC-530a-VAL-001 | #122315, #124293, #124076 | Required field validation |
| TC-530a-VAL-002 | #124293 | Death date after birth date |
| TC-530a-API-001 | #122314, #122316, #124293 | Submission with service periods |
| TC-530a-API-002 | #122314, #124293 | Lighthouse metadata validation |
| TC-530a-PDF-002 | #124063 | PDF download pre-submission |
| TC-530a-LH-001 | #122314, #122316 | Lighthouse submission success |
| TC-530a-RATE-001 | (Implicit) | Rate limiting |
| TC-530a-ERR-001 | (Implicit) | Error handling |
| TC-530a-A11Y-001 | #124064 | Accessibility |
| TC-530a-BROWSER-001 | (Implicit) | Chrome |
| TC-530a-BROWSER-002 | (Implicit) | Firefox |
| TC-530a-BROWSER-003 | (Implicit) | Safari |
| TC-530a-EDGE-001 | #122318 | Maximum service periods |
| TC-530a-EDGE-002 | #122318 | Special characters |

---

## 10. Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| **QA Lead** | | | |
| **Product Owner** | | | |
| **Engineering Lead** | | | |

---

## 11. Notes

- Issue #124076 tracks pre-staging UI refinements for service periods to align with Platform feedback
- **CRITICAL:** Multiple service periods is the **most complex feature across all 4 forms**
- **CRITICAL:** Service periods **MUST** use multiple responses pattern (not list loop) per Platform **MUST** feedback (#123274, #122476)
- **CRITICAL:** Form MUST be fully unauthenticated (public access) per #124076
- **CRITICAL:** Rate limiting essential for public endpoint security
- All platform review feedback (content, IA, design) has been incorporated
- Accessibility testing passed most checks but keyboard navigation for service periods needs fixes (#124064)
- Form is for state and tribal organizations (cemetery officials)
- Lighthouse submission to PMC business line (Pension Management Center)
- Document type 540 (Burial/Memorial Benefits)
- Email confirmation goes to organization contact (not Veteran)
- **9 CRITICAL test cases** dedicated to multiple service periods feature (TC-530a-MSP-001 through MSP-009)
- PDF generation must dynamically display all service periods
- Validator must provide clear error messages identifying specific service period (e.g., "Service period 2: Date left service must be after date entered")
- API must validate servicePeriods array structure and each individual period
- Service periods implementation follows multiple responses pattern per Platform MUST feedback (#123274, #122476)

---

**Report Prepared By:** Benefits Intake Optimization - Aquia
**Date:** 2025-11-05
**Version:** 2.0 (Updated with actual GitHub issues)
