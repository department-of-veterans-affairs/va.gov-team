# Test Plan – VA Form 21-0779 Nursing Home Information
## Request for Nursing Home Information in Connection with Claim for Aid and Attendance

**Prepared:** 2025-11-05
**Product/QA Owner:** Benefits Intake Optimization (BIOHEART)
**Target Release:** Public digital submission for VA Form 21-0779
**Test Environment:** Staging (`staging.va.gov`, `staging-api.va.gov`)

---

## 1. Scope and Objectives

This test plan verifies the MVP functionality of the digitized VA Form 21-0779, which allows nursing home staff to submit information for veterans claiming Aid and Attendance benefits.

### In Scope
- Digital form submission via `/21-0779-nursing-home-information/`
- Form validation (client-side and server-side)
- PDF generation and download
- Lighthouse Benefits Intake API submission
- Unauthenticated access (public form)
- Feature flag functionality (`form_0779_enabled`)
- Rate limiting
- Error handling and user feedback

### Out of Scope
- Downstream Lighthouse processing
- Email notifications (not part of MVP)
- Performance/load testing
- Accessibility testing (covered separately)

---

## 2. Test Environment Setup

### Prerequisites
- **Environment:** Staging (`https://staging.va.gov`)
- **API Endpoint:** `https://staging-api.va.gov/v0/form210779`
- **Feature Flag:** `form_0779_enabled` must be enabled in staging
- **Test Data:** Valid form data with fictional veteran and nursing home information
- **Browser:** Chrome (latest), Firefox (latest), Safari (latest)
- **Tools:** Browser DevTools, Postman for API testing

### Test Accounts
- **No authentication required** – this is a public form for nursing home staff

### Test Data
**Sample Valid Form Data:**
```json
{
  "veteranInformation": {
    "first": "John",
    "middle": "A",
    "last": "Doe",
    "dateOfBirth": "1940-01-15",
    "veteranId": {
      "ssn": "123456789"
    }
  },
  "claimantInformation": {
    "first": "Jane",
    "middle": "B",
    "last": "Doe",
    "dateOfBirth": "1942-05-20",
    "veteranId": {
      "ssn": "987654321"
    }
  },
  "nursingHomeInformation": {
    "nursingHomeName": "Sunrise Senior Living",
    "nursingHomeAddress": {
      "street": "123 Care Lane",
      "street2": "Building A",
      "city": "Springfield",
      "state": "IL",
      "country": "USA",
      "postalCode": "62701"
    }
  },
  "generalInformation": {
    "admissionDate": "2024-01-01",
    "medicaidFacility": true,
    "medicaidApplication": true,
    "patientMedicaidCovered": true,
    "medicaidStartDate": "2024-02-01",
    "monthlyCosts": "3000.00",
    "certificationLevelOfCare": true,
    "nursingOfficialName": "Dr. Sarah Smith",
    "nursingOfficialTitle": "Director of Nursing",
    "nursingOfficialPhoneNumber": "555-789-0123"
  }
}
```

---

## 3. Test Cases

### 3.1 Feature Flag Tests

#### TC-0779-FF-001: Feature Flag OFF Blocks Access
**Objective:** Verify that the digital form is completely inaccessible when feature flag is disabled.

**Preconditions:**
- Feature flag `form_0779_enabled` is disabled in staging

**Test Steps:**
1. Navigate to `https://staging.va.gov/21-0779-nursing-home-information/`
2. Verify page response
3. Attempt API call: `POST https://staging-api.va.gov/v0/form210779`
4. Verify API response

**Expected Results:**
- Page returns 404 or "feature unavailable" message
- No form content renders
- API returns 403 Forbidden

**Pass Criteria:**
- Digital workflow is fully hidden when flag off
- UI and backend are properly gated

---

#### TC-0779-FF-002: Feature Flag ON Exposes Public Form
**Objective:** Verify that the digital form is accessible when feature flag is enabled.

**Preconditions:**
- Feature flag `form_0779_enabled` is enabled in staging

**Test Steps:**
1. Visit `/21-0779-nursing-home-information/` in incognito mode (no sign-in)
2. Verify page loads
3. Verify "Start application" CTA is present
4. Verify no sign-in banner appears

**Expected Results:**
- Introduction page renders with instructions
- Form is accessible without authentication
- "Start application" button is visible
- No save-in-progress controls (unauthenticated)

**Pass Criteria:**
- Form accessible to public
- No authentication required
- Flag gating respected

---

### 3.2 Form Navigation and Flow

#### TC-0779-NAV-001: Complete End-to-End Happy Path
**Objective:** Verify user can complete entire form successfully without authentication.

**Test Steps:**
1. Navigate to `https://staging.va.gov/21-0779-nursing-home-information/` (incognito)
2. Click "Start application"
3. **Veteran Information Page:**
   - Enter veteran first name: "John"
   - Enter veteran middle name: "A"
   - Enter veteran last name: "Doe"
   - Enter veteran date of birth: "01/15/1940"
   - Enter veteran SSN: "123456789"
   - Click "Continue"
4. **Claimant Information Page:**
   - Enter claimant first name: "Jane"
   - Enter claimant middle name: "B"
   - Enter claimant last name: "Doe"
   - Enter claimant date of birth: "05/20/1942"
   - Enter claimant SSN: "987654321"
   - Click "Continue"
5. **Nursing Home Information Page:**
   - Enter nursing home name: "Sunrise Senior Living"
   - Enter address: "123 Care Lane, Building A, Springfield, IL 62701, USA"
   - Click "Continue"
6. **General Information Page:**
   - Enter admission date: "01/01/2024"
   - Select medicaid facility: Yes
   - Select medicaid application: Yes
   - Select patient medicaid covered: Yes
   - Enter medicaid start date: "02/01/2024"
   - Enter monthly costs: "3000.00"
   - Select certification level of care: Yes
   - Enter nursing official name: "Dr. Sarah Smith"
   - Enter nursing official title: "Director of Nursing"
   - Enter nursing official phone: "555-789-0123"
   - Click "Continue"
7. **Review & Submit Page:**
   - Review all entered information
   - Provide signature
   - Click "Submit"

**Expected Results:**
- Each page loads without errors
- Client validations enforce schema
- API call to `/v0/form210779` returns 200
- Confirmation page displays:
  - Confirmation number (GUID)
  - Submission timestamp
  - PDF download option
  - Key next-step guidance
- No console errors
- Success toast/confirmation appear

**Pass Criteria:**
- Entire journey completes without blocking errors
- Confirmation number is displayed
- PDF download link works

---

### 3.3 Validation Tests

#### TC-0779-VAL-001: Required Field Validation - Veteran Information
**Objective:** Verify required field validation for veteran information.

**Test Steps:**
1. On veteran information page, leave first name blank
2. Click "Continue"
3. Verify error message: "Veteran first name is required"
4. Leave SSN and VA file number blank
5. Click "Continue"
6. Verify error message: "Either SSN or VA file number is required"

**Expected Results:**
- Inline error appears for missing first name
- Inline error appears for missing SSN/VA file number
- Form does not progress
- Focus moves to error field

**Pass Criteria:**
- All required fields are validated
- Error messages are clear
- Form blocks progression until fixed

---

#### TC-0779-VAL-002: SSN Format Validation
**Objective:** Verify SSN validation enforces 9 digits only.

**Test Steps:**
1. Enter veteran SSN with dashes: "123-45-6789"
2. Click "Continue"
3. Verify error message
4. Enter SSN with letters: "12A456789"
5. Verify validation error

**Expected Results:**
- Error message: "SSN must be 9 digits without dashes"
- Client-side validation blocks non-numeric input
- Validation error references 9-digit requirement

**Pass Criteria:**
- Only 9-digit numeric SSN accepted
- Clear error messaging

---

#### TC-0779-VAL-003: Conditional Validation - Medicaid Fields
**Objective:** Verify conditional validation for medicaid-related fields.

**Test Steps:**
1. On general information page, mark medicaid facility = "Yes"
2. Omit medicaid start date
3. Click "Continue"
4. Verify conditional error appears

**Expected Results:**
- Error message: "Medicaid start date is required when facility is Yes"
- Conditional logic enforces dependent field

**Pass Criteria:**
- Conditional fields properly validated
- Dependencies respected

---

#### TC-0779-VAL-004: Required Boolean Field Validation
**Objective:** Verify boolean fields (medicaid-related) are required.

**Test Steps:**
1. Leave medicaid facility field unanswered (null)
2. Click "Continue"
3. Verify error appears
4. Leave medicaid application field unanswered
5. Click "Continue"
6. Verify error appears

**Expected Results:**
- Error message: "Medicaid facility status is required"
- Error message: "Medicaid application status is required"
- Boolean fields must be explicitly answered

**Pass Criteria:**
- Boolean fields cannot be null/unanswered
- Clear error messages

---

#### TC-0779-VAL-005: Nursing Home Address Validation
**Objective:** Verify complete address validation.

**Test Steps:**
1. On nursing home page, leave city blank
2. Click "Continue"
3. Verify error: "Nursing home city is required"
4. Leave postal code blank
5. Click "Continue"
6. Verify error: "Nursing home ZIP code is required"

**Expected Results:**
- All address fields validated
- Clear error messages for each missing field

**Pass Criteria:**
- Address validation comprehensive
- Error messages identify specific fields

---

### 3.4 API Tests

#### TC-0779-API-001: Successful Submission Persists Claim & Queues Lighthouse
**Objective:** Verify API successfully processes valid form submission.

**Test Steps:**
1. POST to `/v0/form210779` with fully populated payload (use fixture)
2. Inspect response
3. Verify `saved_claims` table has new record
4. Verify `form_submission_attempts` row created
5. Confirm Sidekiq queue contains `Lighthouse::SubmitBenefitsIntakeClaim` job
6. Check StatsD metric `api.form210779.success` increments

**Expected Results:**
- HTTP 200 OK
- Response JSON includes:
  - `confirmation_number` (UUID)
  - `guid` (UUID)
  - `submitted_at` (ISO 8601 timestamp)
  - `regional_office` (empty array)
- Database record created with `type = SavedClaim::Form210779`
- FormSubmissionAttempt row with state `pending`
- Lighthouse job enqueued

**Pass Criteria:**
- Submission pipeline executes without errors
- All integrations triggered

---

#### TC-0779-API-002: Validation Errors (422)
**Objective:** Verify API rejects invalid payloads with schema-aligned messages.

**Test Steps:**
1. Omit veteran SSN and VA file number
2. POST to `/v0/form210779`
3. Verify response
4. Omit nursing home address city
5. POST to `/v0/form210779`
6. Verify response

**Expected Results:**
- HTTP 422 Unprocessable Entity
- Error detail: "Either veteran SSN or VA file number is required"
- Error detail: "Nursing home city is required"
- Consistent error format (Committee + model validator)

**Pass Criteria:**
- Invalid payloads rejected
- Error messages align with validation rules

---

#### TC-0779-API-003: Feature Flag Gating (403)
**Objective:** Verify API respects feature flag globally.

**Test Steps:**
1. Disable feature flag `form_0779_enabled`
2. POST to `/v0/form210779` with valid payload
3. Verify response
4. Same for `/v0/form210779/download_pdf`

**Expected Results:**
- HTTP 403 Forbidden
- Error body indicates feature unavailable

**Pass Criteria:**
- API gated when flag disabled
- Consistent behavior across endpoints

---

### 3.5 PDF Generation Tests

#### TC-0779-PDF-001: Generate PDF with Veteran Sections
**Objective:** Verify PDF generation with veteran-completed sections.

**Test Steps:**
1. Prior to submission, POST to `/v0/form210779/download_pdf` with form data
2. Verify response
3. Open PDF and inspect contents

**Expected Results:**
- HTTP 200 OK
- Content-Type: application/pdf
- Content-Disposition includes `21-0779_<GUID>.pdf`
- PDF contains:
  - Sections I–IV: Veteran, claimant, nursing home, general info
  - Section V: Signature present
  - Sections VI–VIII: Blank with physician instructions overlay

**Pass Criteria:**
- Generated PDF usable by nursing home staff
- Temp file deleted after generation

---

#### TC-0779-PDF-002: PDF Generation Failure Handling
**Objective:** Verify graceful error response when PDF generation fails.

**Test Steps:**
1. Force `PdfFill::Filler.fill_ancillary_form` to raise error (mock or staging fault injection)
2. Issue download request
3. Verify response

**Expected Results:**
- HTTP 500 Internal Server Error
- Response body: `{ errors: [{ title: 'PDF Generation Failed', status: '500' }] }`
- Log entry recorded
- Temp files cleaned up

**Pass Criteria:**
- Error response graceful
- Cleanup occurs

---

### 3.6 Rate Limiting Tests

#### TC-0779-RATE-001: Rate Limiting UX
**Objective:** Verify rate limiting prevents abuse of public endpoint.

**Test Steps:**
1. Rapidly submit form more than 10 times in an hour from same IP (script)
2. Verify response on 11th submission
3. Attempt multiple PDF downloads >5/hour
4. Verify response

**Expected Results:**
- HTTP 429 Too Many Requests
- User-friendly message: "You've reached the submission limit. Please try again later."
- `X-RateLimit-Limit` header present
- Similar 429 message for PDF downloads

**Pass Criteria:**
- Rate limit messaging matches copy deck
- UI prevents repeated requests
- StatsD metric `form210779.rate_limit_exceeded` increments

---

#### TC-0779-RATE-002: Rate Limit Resets After Window
**Objective:** Verify throttle resets after time window.

**Test Steps:**
1. Trigger rate limit
2. Wait for window to expire (1 hour)
3. Submit form again

**Expected Results:**
- Form submission succeeds after window
- Rate limit resets

**Pass Criteria:**
- Throttle functioning correctly
- Reset mechanism works

---

### 3.7 Lighthouse Integration Tests

#### TC-0779-LH-001: Lighthouse Success Path
**Objective:** Verify successful Lighthouse submission.

**Test Steps:**
1. Submit form successfully
2. Allow Sidekiq job to process with mocked Lighthouse success
3. Monitor job logs and metrics

**Expected Results:**
- Job logs success
- StatsD metric `worker.lighthouse.submit_benefits_intake_claim.success` increments
- Payload delivered to Lighthouse with correct metadata:
  - `veteranFirstName`, `veteranLastName`
  - `fileNumber` (SSN or VA file number)
  - `zipCode` (from nursing home address)
  - `docType` = "21-0779"
  - `businessLine` = "CMP"

**Pass Criteria:**
- Job completes successfully
- Metadata correct
- Telemetry recorded

---

#### TC-0779-LH-002: Lighthouse Failure & Monitoring
**Objective:** Verify monitoring and alerting when Lighthouse fails.

**Test Steps:**
1. Induce Lighthouse failure (mock 500)
2. Submit form
3. Monitor Sidekiq job retries
4. Verify metrics and alerts

**Expected Results:**
- API initial response remains 200 (user not blocked)
- Sidekiq job retries
- StatsD metric `worker.lighthouse.submit_benefits_intake_claim.failure` increments
- QA6 Monitor C alerts Slack within 10 minutes
- FormSubmissionAttempt shows `failed` with error details

**Pass Criteria:**
- Monitoring pipeline detects failure
- Alert fires
- Asynchronous submission pipeline observable and recoverable

---

### 3.8 Error Handling Tests

#### TC-0779-ERR-001: Network Error Handling
**Objective:** Verify graceful error handling when network fails.

**Test Steps:**
1. Begin form submission
2. Disable network connection during submission
3. Observe error message

**Expected Results:**
- User-friendly error message: "Unable to submit form. Please check your connection and try again."
- Form data is not lost (browser-level if any)
- User can retry submission

**Pass Criteria:**
- Error handled gracefully
- Clear error message

---

#### TC-0779-ERR-002: Server Error Handling
**Objective:** Verify handling of 500 server errors.

**Test Steps:**
1. Submit form
2. Simulate 500 error from backend
3. Observe error message

**Expected Results:**
- Error message: "An error occurred. Please try again or contact support."
- Error is logged
- User receives helpful message

**Pass Criteria:**
- Error doesn't crash application
- User receives guidance

---

### 3.9 Browser Compatibility Tests

#### TC-0779-BROWSER-001: Chrome Compatibility
**Objective:** Verify form works in Chrome.

**Test Steps:**
1. Open form in Chrome (latest version)
2. Complete full submission flow
3. Verify all functionality works

**Expected Results:**
- Form loads correctly
- All interactions work
- Submission succeeds
- PDF downloads correctly

**Pass Criteria:**
- No browser-specific issues

---

#### TC-0779-BROWSER-002: Firefox Compatibility
**Objective:** Verify form works in Firefox.

**Test Steps:**
1. Open form in Firefox (latest version)
2. Complete full submission flow

**Expected Results:**
- Form loads correctly
- All interactions work
- Submission succeeds

**Pass Criteria:**
- No browser-specific issues

---

#### TC-0779-BROWSER-003: Safari Compatibility
**Objective:** Verify form works in Safari.

**Test Steps:**
1. Open form in Safari (latest version)
2. Complete full submission flow

**Expected Results:**
- Form loads correctly
- All interactions work

**Pass Criteria:**
- No browser-specific issues

---

### 3.10 Edge Cases and Boundary Tests

#### TC-0779-EDGE-001: Long Text Input
**Objective:** Verify handling of long text inputs.

**Test Steps:**
1. Enter very long nursing home name (>150 characters)
2. Enter very long monthly costs value
3. Submit form
4. Check PDF generation

**Expected Results:**
- Long text accepted up to reasonable limit
- PDF handles long text gracefully

**Pass Criteria:**
- No errors with long text
- PDF readable

---

#### TC-0779-EDGE-002: Special Characters
**Objective:** Verify handling of special characters.

**Test Steps:**
1. Enter name with apostrophe: "O'Brien"
2. Enter nursing home name with special characters: "Sunrise & Associates"
3. Submit form
4. Check PDF

**Expected Results:**
- Special characters accepted
- Characters display correctly

**Pass Criteria:**
- Special characters handled correctly

---

#### TC-0779-EDGE-003: Minimum Required Fields
**Objective:** Verify form works with only required fields filled.

**Test Steps:**
1. Fill only required fields
2. Skip all optional fields
3. Submit form

**Expected Results:**
- Form accepts submission
- PDF generates correctly

**Pass Criteria:**
- Minimum data submission works

---

## 4. Test Execution Tracking

### Test Case Summary

| ID | Test Case | Priority | Status | Tester | Date | Notes |
|----|-----------|----------|--------|--------|------|-------|
| TC-0779-FF-001 | Feature Flag OFF | High | | | | |
| TC-0779-FF-002 | Feature Flag ON | High | | | | |
| TC-0779-NAV-001 | Happy Path Flow | High | | | | |
| TC-0779-VAL-001 | Required Fields | High | | | | |
| TC-0779-VAL-002 | SSN Validation | High | | | | |
| TC-0779-VAL-003 | Conditional Validation | Medium | | | | |
| TC-0779-VAL-004 | Boolean Validation | High | | | | |
| TC-0779-VAL-005 | Address Validation | Medium | | | | |
| TC-0779-API-001 | API Success | High | | | | |
| TC-0779-API-002 | API Validation | High | | | | |
| TC-0779-API-003 | Feature Flag API | High | | | | |
| TC-0779-PDF-001 | PDF Generation | High | | | | |
| TC-0779-PDF-002 | PDF Error Handling | Medium | | | | |
| TC-0779-RATE-001 | Rate Limiting | High | | | | |
| TC-0779-RATE-002 | Rate Reset | Medium | | | | |
| TC-0779-LH-001 | Lighthouse Success | High | | | | |
| TC-0779-LH-002 | Lighthouse Failure | High | | | | |
| TC-0779-ERR-001 | Network Error | Medium | | | | |
| TC-0779-ERR-002 | Server Error | Medium | | | | |
| TC-0779-BROWSER-001 | Chrome | High | | | | |
| TC-0779-BROWSER-002 | Firefox | Medium | | | | |
| TC-0779-BROWSER-003 | Safari | Medium | | | | |
| TC-0779-EDGE-001 | Long Text | Low | | | | |
| TC-0779-EDGE-002 | Special Chars | Low | | | | |
| TC-0779-EDGE-003 | Min Required | Low | | | | |

**Total Test Cases:** 25
**High Priority:** 14
**Medium Priority:** 8
**Low Priority:** 3

---

## 5. Exit Criteria

Testing is considered complete when:

- [ ] All high-priority test cases pass
- [ ] 90%+ of all test cases pass
- [ ] All critical and high-severity defects are resolved
- [ ] Lighthouse integration confirmed working
- [ ] PDF generation verified accurate
- [ ] Rate limiting confirmed effective
- [ ] Browser compatibility verified (Chrome, Firefox, Safari)
- [ ] Form accessible without authentication
- [ ] Feature flag functionality verified
- [ ] QA sign-off obtained

---

## 6. Notes

- **No Authentication Required:** This is a public form for nursing home staff
- **No Email Notifications:** Not part of MVP
- **Rate Limiting Critical:** Essential for public endpoint security
- **Feature Flag:** Ensure `form_0779_enabled` toggled appropriately

---

**Test Plan Prepared By:** Benefits Intake Optimization - Aquia
**Date:** 2025-11-05
**Version:** 1.0
