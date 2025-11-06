# Test Plan – VA Form 21-2680 Aid & Attendance Print Workflow
## Examination for Housebound Status or Permanent Need for Regular Aid and Attendance

**Prepared:** 2025-11-05
**Product/QA Owner:** Benefits Intake Optimization (BIOHEART)
**Target Release:** Veteran-facing digital capture & PDF generation for VA Form 21-2680
**Test Environment:** Staging (`staging.va.gov`, `staging-api.va.gov`)

---

## 1. Scope and Objectives

This test plan verifies the MVP functionality of the hybrid workflow for VA Form 21-2680, where veterans complete Sections I–V online, generate a pre-filled PDF, obtain physician completion offline, and later upload the finalized form through existing VA channels.

### In Scope
- Authenticated wizard (with Save-In-Progress) for veteran-completed sections (I-V)
- PDF generation with veteran sections filled, physician sections (VI-VIII) blank
- Feature flag functionality (`form_2680_enabled`)
- Rate limiting for PDF generation
- Clear instructions for offline physician completion
- Integration with existing upload system
- Error handling and user feedback

### Out of Scope
- Lighthouse submission (PDF-only workflow)
- Email notifications (not part of MVP)
- Physician section completion (offline manual process)
- Downstream PDF processing after upload
- Performance/load testing

---

## 2. Test Environment Setup

### Prerequisites
- **Environment:** Staging (`https://staging.va.gov`)
- **API Endpoint:** `https://staging-api.va.gov/v0/form212680/download_pdf`
- **Feature Flag:** `form_2680_enabled` must be enabled in staging
- **Test Data:** Valid form data for veteran sections
- **Browser:** Chrome (latest), Firefox (latest), Safari (latest)
- **Test Accounts:** LOA3 staging account (SIP requires authenticated user)

### Test Accounts
**Staging Credentials:**
- Email: `vets.gov.user+228@gmail.com`
- Password: (staging password)
- Account Type: LOA3 (authenticated veteran)

### Test Data
**Sample Valid Form Data:**
```json
{
  "veteranInformation": {
    "fullName": {
      "first": "John",
      "middle": "A",
      "last": "Doe"
    },
    "ssn": "123456789",
    "dateOfBirth": "1950-01-01"
  },
  "claimantInformation": {
    "fullName": {
      "first": "Jane",
      "last": "Doe"
    },
    "relationship": "Spouse",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "postalCode": "12345"
    }
  },
  "benefitInformation": {
    "claimType": "aidAndAttendance"
  },
  "veteranSignature": {
    "signature": "John A Doe",
    "date": "2025-11-05"
  }
}
```

---

## 3. Test Cases

### 3.1 Feature Flag & Authentication Tests

#### TC-2680-AUTH-001: Feature Flag OFF Preserves Legacy Experience
**Objective:** Verify legacy content appears when feature flag is disabled.

**Preconditions:**
- Feature flag `form_2680_enabled` is disabled

**Test Steps:**
1. Sign out of VA.gov
2. Navigate to the staging URL
3. Verify response

**Expected Results:**
- Legacy static/download content appears
- Digital wizard unavailable
- No Save-In-Progress controls

**Pass Criteria:**
- Both UI and backend gated when flag off

---

#### TC-2680-AUTH-002: Feature Flag ON Requires Sign-In
**Objective:** Verify feature flag on requires authentication.

**Preconditions:**
- Feature flag `form_2680_enabled` is enabled

**Test Steps:**
1. Visit staging URL while signed out
2. Verify redirect to sign-in page
3. Sign in with LOA3 credentials
4. Verify intro page renders
5. Confirm Save-In-Progress controls present
6. Click "Start your application"
7. Verify first chapter loads with SIP banner

**Expected Results:**
- Redirect to sign-in when not authenticated
- After login, intro page renders
- Save-In-Progress controls available
- Form wizard begins after "Start"

**Pass Criteria:**
- Login gating and feature flag work together
- SIP functionality present

---

### 3.2 Save-In-Progress Tests

#### TC-2680-SIP-001: Save and Resume Functionality
**Objective:** Verify Save-In-Progress persists and restores data.

**Test Steps:**
1. Sign in with LOA3 account
2. Start form and complete veteran and claimant chapters
3. Click "Save and exit"
4. Verify toast message appears
5. Navigate to My VA dashboard
6. Verify form appears in "Saved Forms" section
7. Click "Continue your application"
8. Verify prior data restored
9. Clear browser storage
10. Sign back in and resume form
11. Verify data restores from server

**Expected Results:**
- Toast confirms: "Your form has been saved"
- Form appears in Saved Forms
- Data pre-filled when resumed
- Server-side persistence (not local storage only)

**Pass Criteria:**
- SIP persistence works
- Data restoration accurate
- No errors in console

---

### 3.3 Form Navigation and Validation Tests

#### TC-2680-NAV-001: Happy Path to PDF Download Call-to-Action
**Objective:** Verify veteran can complete all sections and reach download CTA.

**Test Steps:**
1. Sign in with LOA3 account
2. Start form
3. **Veteran and Claimant Chapter:**
   - Enter veteran full name: "John A Doe"
   - Enter veteran SSN: "123456789"
   - Enter veteran DOB: "01/01/1950"
   - Enter claimant full name: "Jane Doe"
   - Select relationship: "Spouse"
   - Enter claimant address
   - Click "Save and continue"
4. **Benefit Type Chapter:**
   - Select claim type: "Aid and Attendance"
   - Click "Save and continue"
5. **Hospitalization Chapter:**
   - Enter hospitalization info (if applicable)
   - Click "Save and continue"
6. **Signature Chapter:**
   - Enter signature: "John A Doe"
   - Enter date: (current date)
   - Click "Save and continue"
7. **Review Page:**
   - Verify all entered data displayed correctly
   - Verify "Download your form" call-to-action present
   - Click "Download your form"

**Expected Results:**
- Each chapter progresses without errors
- Data persists between chapters
- Review page shows all data
- "Download your form" CTA present
- PDF download begins

**Pass Criteria:**
- SIP persistence and review flow operate correctly
- Download CTA functional

---

#### TC-2680-VAL-001: Required Field Validation
**Objective:** Verify required field validation.

**Test Steps:**
1. Attempt to progress without veteran SSN and VA file number
2. Verify blocking error
3. Select "Someone else" as claimant, omit claimant contact info
4. Verify conditional errors
5. Mark "Currently hospitalized = yes" but skip facility name
6. Verify validation error
7. Enter signature date older than 60 days
8. Verify inline error

**Expected Results:**
- Error: "Either SSN or VA file number is required"
- Conditional errors for claimant info when "Someone else"
- Error: "Facility name is required"
- Error: "Signature date cannot be older than 60 days"

**Pass Criteria:**
- Client validations match schema rules
- Conditional validation works
- Error messages clear

---

### 3.4 PDF Generation Tests

#### TC-2680-PDF-001: Successful PDF Generation
**Objective:** Verify PDF generates with veteran sections filled and physician sections blank.

**Test Steps:**
1. Complete form through review page
2. From review/confirmation step, capture payload posted to `/v0/form212680/download_pdf`
3. Issue POST with captured payload
4. Verify response
5. Open downloaded PDF
6. Inspect contents

**Expected Results:**
- HTTP 200 OK
- Content-Type: application/pdf
- Filename: `21-2680_<GUID>.pdf`
- PDF Contents:
  - **Sections I–V:** Populated with veteran data
  - **Signature:** Present
  - **Sections VI–VIII:** Blank with physician guidance overlay
- Temporary file cleaned up after response

**Pass Criteria:**
- PDF fidelity meets expectations
- Cleanup occurs
- Physician sections properly blank with instructions

---

#### TC-2680-PDF-002: PDF Validation Errors
**Objective:** Verify endpoint blocks invalid payloads.

**Test Steps:**
1. Remove veteran first name and retry download
2. Verify 422 error with descriptive message
3. Provide malformed SSN (non-numeric)
4. Verify 422 referencing format
5. Omit signature block
6. Verify 422 referencing missing signature/date

**Expected Results:**
- HTTP 422 Unprocessable Entity
- Clear error messages identifying missing/invalid fields

**Pass Criteria:**
- Endpoint blocks invalid payloads consistently
- Error messages match validation rules

---

#### TC-2680-PDF-003: Rate Limiting
**Objective:** Verify rate limiting prevents abuse.

**Test Steps:**
1. Request PDF multiple times rapidly (≥5/hour)
2. Verify 429 responses
3. Verify user-friendly messaging
4. Check `X-RateLimit-*` headers present
5. Confirm rate-limit metric increments (`form212680.rate_limit_exceeded`)
6. Retry after window resets
7. Verify download succeeds

**Expected Results:**
- HTTP 429 Too Many Requests after threshold
- Message: "You've reached the download limit. Please try again later."
- Headers indicate rate limit info
- StatsD metric increments

**Pass Criteria:**
- Throttling prevents abuse
- Recovers cleanly after window

---

#### TC-2680-PDF-004: PDF Generation Error Handling
**Objective:** Verify graceful error handling when PDF generation fails.

**Test Steps:**
1. Simulate `PdfFill::Filler` failure
2. Submit request
3. Verify response

**Expected Results:**
- HTTP 500 Internal Server Error
- Response body: `{ errors: [{ title: 'PDF Generation Failed', status: '500' }] }`
- Temp files removed
- Error logged in Datadog/Sentry

**Pass Criteria:**
- Failures surface cleanly
- No artifacts left behind

---

### 3.5 Instructions and Upload Integration Tests

#### TC-2680-INSTR-001: Download Instructions Display
**Objective:** Verify clear instructions are provided to veteran.

**Test Steps:**
1. Complete form and download PDF
2. Verify confirmation page displays instructions
3. Verify instructions include:
   - Step 1: Take PDF to physician
   - Step 2: Physician completes sections VI-VIII
   - Step 3: Upload completed form
   - Upload link: `https://staging.va.gov/upload-supporting-documents/`

**Expected Results:**
- Clear, step-by-step instructions
- Upload link functional
- Instructions accessible and understandable

**Pass Criteria:**
- Instructions guide veteran through offline workflow
- Upload link correct

---

#### TC-2680-UPLOAD-001: Upload System Integration
**Objective:** Verify link to existing upload system works.

**Test Steps:**
1. After downloading PDF, click upload link
2. Navigate to `https://staging.va.gov/upload-supporting-documents/`
3. Verify page loads
4. Attempt to upload sample completed PDF
5. Verify workflow unchanged

**Expected Results:**
- Upload page loads successfully
- Upload workflow functions correctly
- No regressions

**Pass Criteria:**
- Upload pipeline unaffected
- Integration point functional

---

### 3.6 Accessibility Tests

#### TC-2680-A11Y-001: Accessibility Smoke Test
**Objective:** Verify no high-severity accessibility issues.

**Test Steps:**
1. Run Axe DevTools on veteran information page
2. Run Axe on claimant relationship page
3. Run Axe on review page
4. Keyboard navigate through form
5. Confirm logical focus order
6. Test screen reader (VoiceOver/NVDA)
7. Verify progress indicator announces
8. Verify error summary accessible

**Expected Results:**
- No critical Axe violations
- Focus order logical
- Screen reader announces correctly
- Accessible widgets

**Pass Criteria:**
- No high-severity accessibility issues detected

---

### 3.7 Browser Compatibility Tests

#### TC-2680-BROWSER-001: Chrome Compatibility
**Objective:** Verify form works in Chrome.

**Test Steps:**
1. Open form in Chrome (latest version)
2. Sign in with LOA3 account
3. Complete full flow and download PDF

**Expected Results:**
- Form loads correctly
- All interactions work
- PDF downloads correctly

**Pass Criteria:**
- No browser-specific issues

---

#### TC-2680-BROWSER-002: Firefox Compatibility
**Objective:** Verify form works in Firefox.

**Test Steps:**
1. Open form in Firefox (latest version)
2. Sign in and complete flow

**Expected Results:**
- Form loads correctly
- All interactions work

**Pass Criteria:**
- No browser-specific issues

---

#### TC-2680-BROWSER-003: Safari Compatibility
**Objective:** Verify form works in Safari.

**Test Steps:**
1. Open form in Safari (latest version)
2. Sign in and complete flow

**Expected Results:**
- Form loads correctly
- All interactions work

**Pass Criteria:**
- No browser-specific issues

---

### 3.8 Edge Cases and Boundary Tests

#### TC-2680-EDGE-001: Long Text Input
**Objective:** Verify handling of long text inputs.

**Test Steps:**
1. Enter very long claimant name (>100 characters)
2. Enter very long address
3. Complete form and download PDF
4. Verify PDF handling

**Expected Results:**
- Long text accepted up to reasonable limit
- PDF handles long text gracefully (wrapping or truncation)

**Pass Criteria:**
- No errors with long text
- PDF readable

---

#### TC-2680-EDGE-002: Special Characters
**Objective:** Verify handling of special characters.

**Test Steps:**
1. Enter name with apostrophe: "O'Brien"
2. Enter address with special characters
3. Download PDF
4. Verify characters display correctly

**Expected Results:**
- Special characters accepted
- Characters display correctly in PDF

**Pass Criteria:**
- Special characters handled correctly

---

## 4. Test Execution Tracking

### Test Case Summary

| ID | Test Case | Priority | Status | Tester | Date | Notes |
|----|-----------|----------|--------|--------|------|-------|
| TC-2680-AUTH-001 | Feature Flag OFF | High | | | | |
| TC-2680-AUTH-002 | Feature Flag ON | High | | | | |
| TC-2680-SIP-001 | Save-In-Progress | High | | | | |
| TC-2680-NAV-001 | Happy Path Flow | High | | | | |
| TC-2680-VAL-001 | Required Fields | High | | | | |
| TC-2680-PDF-001 | PDF Generation | High | | | | |
| TC-2680-PDF-002 | PDF Validation | High | | | | |
| TC-2680-PDF-003 | Rate Limiting | High | | | | |
| TC-2680-PDF-004 | PDF Error Handling | Medium | | | | |
| TC-2680-INSTR-001 | Instructions Display | Medium | | | | |
| TC-2680-UPLOAD-001 | Upload Integration | Medium | | | | |
| TC-2680-A11Y-001 | Accessibility Smoke | Medium | | | | |
| TC-2680-BROWSER-001 | Chrome | High | | | | |
| TC-2680-BROWSER-002 | Firefox | Medium | | | | |
| TC-2680-BROWSER-003 | Safari | Medium | | | | |
| TC-2680-EDGE-001 | Long Text | Low | | | | |
| TC-2680-EDGE-002 | Special Chars | Low | | | | |

**Total Test Cases:** 17
**High Priority:** 10
**Medium Priority:** 5
**Low Priority:** 2

---

## 5. Exit Criteria

Testing is considered complete when:

- [ ] All high-priority test cases pass
- [ ] 90%+ of all test cases pass
- [ ] All critical and high-severity defects resolved
- [ ] PDF generation metrics validated
- [ ] Rate limiting confirmed effective
- [ ] Generated PDFs verified (Sections I–V populated, VI–VIII blank with instructions)
- [ ] Supporting-document upload stable
- [ ] Browser compatibility verified
- [ ] Save-In-Progress functionality confirmed
- [ ] QA sign-off obtained

---

## 6. Notes

- **PDF-Only Workflow:** No Lighthouse submission - PDF download only
- **Hybrid Process:** Veteran completes online → downloads PDF → physician completes offline → veteran uploads
- **Authentication Required:** LOA3 account needed for Save-In-Progress
- **Rate Limiting Important:** PDF generation is resource-intensive
- **Upload Integration:** Must coordinate with existing upload system

---

**Test Plan Prepared By:** Benefits Intake Optimization - Aquia
**Date:** 2025-11-05
**Version:** 1.0
