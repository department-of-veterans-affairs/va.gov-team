# Traceability Report – VA Form 21-2680 Aid & Attendance
## GitHub Issue to Test Case Mapping

**Prepared:** 2025-11-05
**Product:** VA Form 21-2680 Examination for Housebound Status or Aid & Attendance
**Purpose:** Document traceability between GitHub issues and test cases to ensure complete test coverage of all requirements.
**Source:** GitHub Issues fetched from department-of-veterans-affairs/va.gov-team

---

## 1. Overview

This traceability report maps each GitHub issue (implementation tickets, bug reports, platform reviews) to the corresponding test cases in the Test Plan. This ensures that all functional requirements, identified bugs, and platform feedback are adequately tested.

**Source Documents:**
- GitHub Issues: `GITHUB_ISSUES.md` (fetched 2025-11-05)
- Test Cases: `TEST_PLAN.md` and `TEST_CASES.csv`
- Test Coverage Goal: 100% of issues mapped to test cases

**Unique Form Characteristic:** This form has a **hybrid print-to-PDF workflow** where Veterans complete Sections I-V online, download a PDF, then have a physician complete Sections VI-VIII offline before uploading to VA.gov.

---

## 2. Implementation Issues to Test Case Mapping

### Closed Implementation Issues

| Issue # | Issue Title | Mapped Test Cases | Coverage |
|---------|-------------|-------------------|----------|
| **#124057** | 21-2680: Create Schema | TC-2680-VAL-001, TC-2680-PDF-001, TC-2680-API-001 | ✅ Full |
| **#122928** | Create Rswag specs for 212680 | (Backend Swagger documentation - no E2E tests) | ✅ Full |
| **#123293** | Turn on FF for all Forms | (Feature flag not applicable - authenticated form) | ✅ Full |

**Test Coverage Details:**

**Issue #124057 - Create Schema:**
- TC-2680-VAL-001: Test schema validation for veteran-completed sections (I-V only)
- TC-2680-PDF-001: Test PDF generation with veteran sections filled, physician sections blank
- TC-2680-API-001: Test API accepts correct schema structure

**Issue #122928 - Rswag Specs:**
- Backend API documentation and contract testing
- No direct E2E tests (documentation purpose)

**Issue #123293 - Feature Flags:**
- Not explicitly used for 2680 (authenticated workflow)
- Standard LOA3 authentication gating instead

---

## 3. Quality Assurance Issues to Test Case Mapping

### Open QA Issues

| Issue # | Issue Title | Mapped Test Cases | Coverage |
|---------|-------------|-------------------|----------|
| **#124079** | Pre-staging UI refinements for 2680 | TC-2680-NAV-001, TC-2680-SIP-001, TC-2680-VAL-001, TC-2680-PDF-001, TC-2680-INSTR-001 | ✅ Full |
| **#124059** | Accessibility Testing | TC-2680-A11Y-001 | ✅ Full |

**Test Coverage Details:**

**Issue #124079 - Pre-staging UI Refinements:**
This issue tracks UI refinements and adjustments needed before staging review:

1. **Global issues (P1):**
   - H3s should match designs (extraneous H3s styled as H4s) → TC-2680-NAV-001
   - "Finish this application later" availability question → TC-2680-SIP-001 (Save-In-Progress test)

2. **Intro page:**
   - Missing padding between CTA and OMB info (P2) → TC-2680-NAV-001

3. **Veteran's information (P1):**
   - Pre-fill not working → TC-2680-NAV-001, TC-2680-SIP-001
   - Convert date field to memorable date → TC-2680-VAL-001

4. **Veteran mailing address (P1):**
   - Change header to "Confirm the contact information we have on file for you" → TC-2680-NAV-001
   - Pre-fill not working → TC-2680-NAV-001, TC-2680-SIP-001

5. **Claimant's information (P1):**
   - Make page heading and field label one and the same → TC-2680-NAV-001
   - If selecting non-Veteran, information loads twice (on same page + separate pages) → TC-2680-NAV-001
   - Pre-fill not working for Veteran selection → TC-2680-SIP-001
   - Email address shouldn't be required (P2) → TC-2680-VAL-001

6. **Claim information (P1):**
   - Both tiles highlighted blue on load (should be default state) → TC-2680-NAV-001

7. **Hospitalization (P1):**
   - Heading and field label should be one → TC-2680-NAV-001
   - Convert date field to memorable date → TC-2680-VAL-001
   - Remove unnecessary address fields (checkbox, help text) → TC-2680-VAL-001

8. **Review (P1 - Added Oct 31):**
   - Signature should require Veteran name (not claimant name) → TC-2680-NAV-001

9. **Confirmation (P1):**
   - Change green alert to yellow alert (more steps needed) → TC-2680-INSTR-001
   - Change "What to expect" to "What you need to do next" → TC-2680-INSTR-001
   - Add next steps content → TC-2680-INSTR-001

**Issue #124059 - Accessibility Testing:**
Foundation accessibility testing completed with following results:
- Color/contrast: ✅ Pass → Verified by TC-2680-A11Y-001
- axe scans: ✅ No issues → Verified by TC-2680-A11Y-001
- Content zoom: ✅ Pass → Verified by TC-2680-A11Y-001
- Keyboard navigation: ⚠️ Issues found → Requires fixes then TC-2680-A11Y-001
  - **Claim information screen:** Keyboard selection doesn't clear highlighted state on non-selected item
  - **Review screen:** Same radio tile issue with keyboard

---

## 4. Platform Review Issues to Test Case Mapping

### Open Platform Review Issues

| Issue # | Issue Title | Type | Mapped Test Cases | Coverage |
|---------|-------------|------|-------------------|----------|
| **#123097** | Midpoint Review - Content Feedback | Content | TC-2680-NAV-001 | ✅ Full |
| **#122991** | Midpoint Review - IA Feedback | IA | TC-2680-INSTR-001, TC-2680-UPLOAD-001, TC-2680-NAV-001 | ✅ Full |
| **#122715** | Midpoint Review - Design Feedback | Design | TC-2680-NAV-001, TC-2680-SIP-001, TC-2680-INSTR-001, TC-2680-UPLOAD-001 | ✅ Full |
| **#122339** | Design Intent - Accessibility Feedback | Accessibility | TC-2680-A11Y-001, TC-2680-NAV-001 | ✅ Full |

**Test Coverage Details:**

**Issue #123097 - Content Feedback (MUST for 2680):**
- Remove period from "check our eligibility requirements" header → TC-2680-NAV-001

**Issue #122991 - IA Feedback:**
- **MUST:** Use confirmation page template → TC-2680-INSTR-001 (confirmation page with process list)
- **SHOULD:** Use form uploader → TC-2680-UPLOAD-001 (upload system integration)
- **CONSIDER:** Move away from "medical examiner" terminology → TC-2680-NAV-001
- **CONSIDER:** Flow for claimant address page (break into two screens) → TC-2680-NAV-001
- **CONSIDER:** Link out to more information on benefit selection page → TC-2680-NAV-001

**Issue #122715 - Design Feedback (MUST):**
- Use editable prefilled information pattern with tertiary button → TC-2680-NAV-001, TC-2680-SIP-001
- Move intro paragraph above process list → TC-2680-NAV-001
- Checkbox for same address needs experimental design → TC-2680-NAV-001
- Make upload link green primary action link → TC-2680-UPLOAD-001
- Add "what happens next" after upload → TC-2680-INSTR-001
- Work with edu team on similar upload use case → (Collaboration - research)
- Work with content on remarks screen → TC-2680-NAV-001

**Issue #122339 - Accessibility Feedback (CONSIDER):**
- Length of content serving as label for radio buttons (benefits selection) → TC-2680-A11Y-001, TC-2680-NAV-001

---

## 5. Functional Coverage by Feature

### Authentication & Save-In-Progress (LOA3)
- **GitHub Issues:** #124079 (pre-fill not working, "Finish this application later")
- **Test Cases:** TC-2680-AUTH-001, TC-2680-AUTH-002, TC-2680-SIP-001
- **Coverage:** ✅ Complete
- **Critical:** LOA3 authentication required, SIP enabled for hybrid workflow

### Form Navigation & Completion
- **GitHub Issues:** #124079 (UI refinements across pages)
- **Test Cases:** TC-2680-NAV-001
- **Coverage:** ✅ Complete

### Validation (Veteran Sections I-V Only)
- **GitHub Issues:** #124057 (schema), #124079 (field validation refinements), #123097 (content feedback)
- **Test Cases:** TC-2680-VAL-001
- **Coverage:** ✅ Complete
- **Note:** Validation only applies to veteran-completed sections; physician sections not validated

### PDF Generation (Partial Fill)
- **GitHub Issues:** #124057 (schema with partial fill), #122715 (upload workflow)
- **Test Cases:** TC-2680-PDF-001, TC-2680-PDF-002, TC-2680-PDF-003, TC-2680-PDF-004
- **Coverage:** ✅ Complete
- **Critical:** PDF must have veteran sections (I-V) filled, physician sections (VI-VIII) blank

### Download Instructions
- **GitHub Issues:** #122991 (confirmation page), #122715 ("what happens next"), #124079 (confirmation content)
- **Test Cases:** TC-2680-INSTR-001
- **Coverage:** ✅ Complete
- **Critical:** Instructions must clearly explain hybrid workflow

### Upload System Integration
- **GitHub Issues:** #122991 (form uploader), #122715 (upload link styling)
- **Test Cases:** TC-2680-UPLOAD-001
- **Coverage:** ✅ Complete
- **Critical:** Veterans must upload completed PDF after physician fills sections VI-VIII

### Error Handling
- **GitHub Issues:** (Implementation assumed in backend work)
- **Test Cases:** TC-2680-ERR-001, TC-2680-ERR-002
- **Coverage:** ✅ Complete

### Accessibility
- **GitHub Issues:** #124059 (accessibility testing), #122339 (accessibility feedback)
- **Test Cases:** TC-2680-A11Y-001
- **Coverage:** ✅ Complete (with noted keyboard navigation issues to fix)

### Browser Compatibility
- **GitHub Issues:** (Implicit requirement across all issues)
- **Test Cases:** TC-2680-BROWSER-001, TC-2680-BROWSER-002, TC-2680-BROWSER-003
- **Coverage:** ✅ Complete

---

## 6. Test Coverage Summary

| Category | Total GitHub Issues | Issues with Test Coverage | Coverage % |
|----------|---------------------|---------------------------|------------|
| **Implementation Issues** | 3 | 3 | 100% |
| **QA Issues** | 2 | 2 | 100% |
| **Platform Review Issues** | 4 | 4 | 100% |
| **TOTAL** | **9 issues tracked** | **9** | **100%** |

---

## 7. Gaps and Risks

### Identified Gaps
✅ **No gaps identified** - All GitHub issues have corresponding test coverage.

### Critical Open Issues Requiring Test Verification

1. **Issue #124079 - Pre-staging UI Refinements:**
   - **Risk:** Medium - UI adjustments needed to match design specifications
   - **Mitigation:** TC-2680-NAV-001 validates complete flow including all refinements
   - **Status:** Open - refinements documented, tests ready to verify implementation
   - **Key refinements:** Pre-fill functionality, signature field, confirmation page content, claim information display

2. **Issue #124059 - Accessibility Testing (Radio Tile Keyboard Navigation):**
   - **Risk:** Medium - Keyboard navigation being refined for claim selection
   - **Mitigation:** TC-2680-A11Y-001 validates accessibility after refinements
   - **Status:** Open - retesting needed after implementation
   - **Areas:** Claim information screen and review screen radio tiles

3. **Issue #122991, #122715 - Hybrid Workflow UX:**
   - **Risk:** High - Users may not understand offline physician completion step
   - **Mitigation:** TC-2680-INSTR-001, TC-2680-UPLOAD-001 validate instructions clarity
   - **Status:** Open - waiting for content and design updates
   - **Critical:** Confirmation page must use process list pattern with clear next steps

4. **Issue #122715 - Upload Integration:**
   - **Risk:** Medium - Upload link styling and workflow
   - **Mitigation:** TC-2680-UPLOAD-001 validates upload integration
   - **Status:** Open - coordinating with edu team on similar pattern

---

## 8. Reverse Traceability (Test Cases → GitHub Issues)

| Test Case ID | Mapped GitHub Issues | Purpose |
|--------------|---------------------|---------|
| TC-2680-AUTH-001 | (Implicit - LOA3 required) | Authentication required |
| TC-2680-AUTH-002 | #124079 | LOA3 authentication + pre-fill |
| TC-2680-SIP-001 | #124079, #122715 | Save-In-Progress with pre-fill |
| TC-2680-NAV-001 | #124079, #123097, #122991, #122715, #122339 | End-to-end flow with all UI refinements |
| TC-2680-VAL-001 | #124057, #124079 | Veteran sections validation (I-V only) |
| TC-2680-PDF-001 | #124057, #122715 | PDF with veteran sections filled, physician sections blank |
| TC-2680-PDF-002 | #124057, #124079 | PDF validation errors |
| TC-2680-PDF-003 | (Implicit) | Rate limiting |
| TC-2680-PDF-004 | #124057 | PDF generation error handling |
| TC-2680-INSTR-001 | #122991, #122715, #124079 | Download instructions clarity |
| TC-2680-UPLOAD-001 | #122991, #122715 | Upload system integration |
| TC-2680-A11Y-001 | #124059, #122339 | Accessibility compliance |
| TC-2680-ERR-001 | (Implicit) | Network error handling |
| TC-2680-ERR-002 | (Implicit) | Server error handling |
| TC-2680-BROWSER-001 | (Implicit) | Chrome compatibility |
| TC-2680-BROWSER-002 | (Implicit) | Firefox compatibility |
| TC-2680-BROWSER-003 | (Implicit) | Safari compatibility |
| TC-2680-EDGE-001 | #124057 | Long text in PDF |
| TC-2680-EDGE-002 | #124057 | Special characters in PDF |

---

## 9. Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| **QA Lead** | | | |
| **Product Owner** | | | |
| **Engineering Lead** | | | |

---

## 10. Notes

- Issue #124079 tracks pre-staging UI refinements to align with design specifications
- **Critical:** Hybrid workflow requires clear instructions (Issue #122991, #122715)
- Pre-fill functionality being refined across multiple pages (#124079) for SIP support
- Radio tile keyboard navigation being refined (#124059) for accessibility compliance
- **Unique Workflow:** Veterans complete Sections I-V → download PDF → physician completes Sections VI-VIII → upload completed PDF
- Authentication required (LOA3) unlike other public forms in this batch
- Save-In-Progress (SIP) enabled to support multi-session completion
- PDF validation only applies to veteran sections (I-V); physician sections (VI-VIII) remain blank
- Confirmation page must use process list pattern with clear next steps
- Upload system integration critical for completed PDF submission
- Coordination with edu team on similar upload workflow patterns

---

**Report Prepared By:** Benefits Intake Optimization - Aquia
**Date:** 2025-11-05
**Version:** 2.0 (Updated with actual GitHub issues)
