# Test Plan – VA Form 21-4192 Employment Information
## Request for Employment Information in Connection with Claim for Disability Benefits

**Prepared:** 2025-11-05
**Product/QA Owner:** Benefits Intake Optimization (BIOHEART)
**Target Release:** Form 21-4192 public employer submission
**Test Environment:** Staging (`staging.va.gov`, `staging-api.va.gov`)

---

## 1. Scope and Objectives

This test plan verifies the MVP functionality of the digitized VA Form 21-4192, which allows employers to submit employment information for veterans applying for Total Disability Individual Unemployability (TDIU) benefits.

### In Scope
- Digital form submission via `/21-4192-employment-information/`
- Form validation (client-side and server-side)
- PDF generation and download
- Lighthouse Benefits Intake API submission
- Email confirmation to employer
- Public access (no authentication required)
- Feature flag functionality (`form_4192_enabled`)
- Error handling and user feedback

### Out of Scope
- Downstream Lighthouse processing
- Email delivery testing (VANotify integration assumed working)
- Performance/load testing
- Accessibility testing (covered separately)

---

## 2. Test Environment Setup

### Prerequisites
- **Environment:** Staging (`https://staging.va.gov`)
- **API Endpoint:** `https://staging-api.va.gov/v0/form214192`
- **Feature Flag:** `form_4192_enabled` must be enabled in staging
- **Test Data:** Valid form data with fictional veteran and employer information
- **Browser:** Chrome (latest), Firefox (latest), Safari (latest)
- **Tools:** Browser DevTools for API inspection, Postman for direct API testing

### Test Accounts
- **No authentication required** – this is a public form for employers

### Test Data
**Sample Valid Form Data:**
```json
{
  "veteranInformation": {
    "fullName": {
      "first": "John",
      "middle": "M",
      "last": "Doe"
    },
    "ssn": "123456789",
    "dateOfBirth": "1980-01-01",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "postalCode": "12345"
    }
  },
  "employmentInformation": {
    "employerName": "Acme Corporation",
    "employerAddress": {
      "street": "456 Business Ave",
      "city": "Commerce City",
      "state": "CA",
      "postalCode": "54321"
    },
    "employerEmail": "hr@acme.com",
    "employerPhone": "555-987-6543",
    "typeOfWorkPerformed": "Software Developer",
    "beginningDateOfEmployment": "2015-01-15",
    "endingDateOfEmployment": "2023-06-30",
    "amountEarnedLast12MonthsOfEmployment": 75000,
    "timeLostLast12MonthsOfEmployment": "2 weeks",
    "hoursWorkedDaily": 8,
    "hoursWorkedWeekly": 40,
    "concessions": "Flexible hours, ergonomic desk",
    "terminationReason": "Medical disability",
    "dateLastWorked": "2023-06-30",
    "lastPaymentDate": "2023-07-15",
    "lastPaymentGrossAmount": 6250
  }
}
```

---

## 3. Test Cases

### 3.1 Feature Flag Tests

#### TC-4192-FF-001: Feature Flag OFF Blocks Access
**Objective:** Verify that the digital form is completely inaccessible when feature flag is disabled.

**Preconditions:**
- Feature flag `form_4192_enabled` is disabled in staging

**Test Steps:**
1. Navigate to `https://staging.va.gov/21-4192-employment-information/`
2. Verify page response

**Expected Results:**
- Page returns 404 or "feature unavailable" message
- No form content renders
- No React bundle loads

**Pass Criteria:**
- Digital form is completely hidden when flag is off
- No errors in browser console

---

#### TC-4192-FF-002: Feature Flag ON Exposes Form
**Objective:** Verify that the digital form is accessible when feature flag is enabled.

**Preconditions:**
- Feature flag `form_4192_enabled` is enabled in staging

**Test Steps:**
1. Navigate to `https://staging.va.gov/21-4192-employment-information/`
2. Verify page loads
3. Inspect page content

**Expected Results:**
- Introduction page loads successfully
- Form instructions are visible
- "Start application" button is present
- No authentication/sign-in required

**Pass Criteria:**
- Form is publicly accessible
- No errors in browser console

---

### 3.2 Form Navigation and Flow

#### TC-4192-NAV-001: Complete Form Happy Path
**Objective:** Verify user can complete entire form successfully.

**Preconditions:**
- Feature flag enabled
- Form is accessible

**Test Steps:**
1. Navigate to `https://staging.va.gov/21-4192-employment-information/`
2. Click "Start application"
3. **Veteran Information Page:**
   - Enter veteran first name: "John"
   - Enter veteran middle name: "M"
   - Enter veteran last name: "Doe"
   - Enter veteran SSN: "123456789"
   - Enter veteran DOB: "01/01/1980"
   - Enter veteran address (optional)
   - Click "Continue"
4. **Employer Information Page:**
   - Enter employer name: "Acme Corporation"
   - Enter employer address: "456 Business Ave, Commerce City, CA 54321"
   - Enter employer phone: "555-987-6543"
   - Enter employer email: "hr@acme.com"
   - Enter contact person name: "Jane Smith"
   - Enter contact person title: "HR Manager"
   - Click "Continue"
5. **Employment Details Page:**
   - Enter type of work: "Software Developer"
   - Enter beginning date: "01/15/2015"
   - Enter ending date: "06/30/2023"
   - Enter amount earned (last 12 months): "75000"
   - Enter time lost: "2 weeks"
   - Enter hours worked daily: "8"
   - Enter hours worked weekly: "40"
   - Click "Continue"
6. **Employment Concessions Page:**
   - Enter concessions/accommodations: "Flexible hours, ergonomic desk"
   - Click "Continue"
7. **Termination Information Page:**
   - Select termination reason: "Medical disability"
   - Enter date last worked: "06/30/2023"
   - Enter last payment date: "07/15/2023"
   - Enter last payment amount: "6250"
   - Click "Continue"
8. **Review Page:**
   - Review all entered information
   - Verify all data is displayed correctly
   - Check privacy policy checkbox
   - Enter signature: "Jane Smith"
   - Click "Submit"

**Expected Results:**
- Each page loads without errors
- Data persists between pages
- Review page displays all entered data correctly
- Submission succeeds
- Confirmation page displays with:
  - Confirmation number
  - Submission timestamp
  - "Download PDF" link
  - Next steps instructions

**Pass Criteria:**
- All pages load successfully
- Data validation works on each page
- Submission completes without errors
- Confirmation number is displayed
- No JavaScript errors in console

---

### 3.3 Validation Tests

#### TC-4192-VAL-001: Required Field Validation - Veteran Information
**Objective:** Verify required field validation for veteran information.

**Test Steps:**
1. Navigate to veteran information page
2. Leave veteran first name blank
3. Click "Continue"
4. Verify error message appears
5. Leave veteran last name blank
6. Click "Continue"
7. Verify error message appears
8. Leave veteran SSN and VA file number blank
9. Click "Continue"
10. Verify error message appears

**Expected Results:**
- Error message: "Veteran first name is required"
- Error message: "Veteran last name is required"
- Error message: "Either SSN or VA file number is required"
- Focus moves to first error field
- Red border appears around error fields

**Pass Criteria:**
- All required fields are properly validated
- Error messages are clear and actionable
- Form does not progress until errors are fixed

---

#### TC-4192-VAL-002: SSN Format Validation
**Objective:** Verify SSN format validation.

**Test Steps:**
1. Enter veteran SSN with dashes: "123-45-6789"
2. Click "Continue"
3. Verify error message
4. Enter veteran SSN with letters: "12A456789"
5. Click "Continue"
6. Verify error message
7. Enter veteran SSN with fewer than 9 digits: "12345"
8. Click "Continue"
9. Verify error message

**Expected Results:**
- Error message: "SSN must be 9 digits with no dashes"
- Form blocks non-numeric input
- Form validates length

**Pass Criteria:**
- Only 9-digit numeric SSN is accepted
- Clear error messages guide user

---

#### TC-4192-VAL-003: Email Format Validation
**Objective:** Verify employer email format validation.

**Test Steps:**
1. Navigate to employer information page
2. Enter invalid email: "invalid-email"
3. Click "Continue"
4. Verify error message
5. Enter email without domain: "test@"
6. Click "Continue"
7. Verify error message

**Expected Results:**
- Error message: "Please enter a valid email address"
- Validation occurs on blur or submit

**Pass Criteria:**
- Only valid email format is accepted
- Clear error message

---

#### TC-4192-VAL-004: Date Validation
**Objective:** Verify date field validation.

**Test Steps:**
1. Enter beginning date of employment in the future
2. Click "Continue"
3. Verify error message
4. Enter ending date before beginning date
5. Click "Continue"
6. Verify error message
7. Enter date in invalid format: "13/32/2025"
8. Click "Continue"
9. Verify error message

**Expected Results:**
- Error message: "Beginning date cannot be in the future"
- Error message: "Ending date must be after beginning date"
- Error message: "Please enter a valid date"

**Pass Criteria:**
- Date logic is validated correctly
- Clear error messages

---

#### TC-4192-VAL-005: Numeric Field Validation
**Objective:** Verify numeric field validation for amounts and hours.

**Test Steps:**
1. Enter non-numeric characters in "amount earned": "abc"
2. Verify field blocks input or shows error
3. Enter negative number in "hours worked daily": "-5"
4. Verify error message
5. Enter unrealistic hours in "hours worked weekly": "200"
6. Verify warning or validation

**Expected Results:**
- Non-numeric input is blocked or rejected
- Negative numbers are rejected
- Unrealistic values trigger validation

**Pass Criteria:**
- Only valid numeric input is accepted
- Reasonable range validation

---

### 3.4 API Tests

#### TC-4192-API-001: Successful Form Submission
**Objective:** Verify API successfully processes valid form submission.

**Prerequisites:**
- Postman or curl available
- Valid form data prepared

**Test Steps:**
1. Send POST request to `https://staging-api.va.gov/v0/form214192`
   ```bash
   curl -X POST https://staging-api.va.gov/v0/form214192 \
     -H 'Content-Type: application/json' \
     -H 'X-Key-Inflection: camel' \
     -d @valid_form214192.json
   ```
2. Inspect response

**Expected Results:**
- HTTP Status: 200 OK
- Response body contains:
  - `data.attributes.confirmation_number` (UUID)
  - `data.attributes.guid` (UUID)
  - `data.attributes.submitted_at` (ISO 8601 timestamp)
  - `data.attributes.regional_office` (empty array)
  - `data.attributes.form` = "21-4192"

**Pass Criteria:**
- Response matches expected schema
- Confirmation number is generated
- Response time < 3 seconds

---

#### TC-4192-API-002: Schema Validation Failure
**Objective:** Verify API rejects invalid form data with clear error messages.

**Test Steps:**
1. Send POST request with missing required field (e.g., `veteranInformation.dateOfBirth`)
2. Inspect response
3. Send POST request with invalid SSN format (e.g., "123-45-6789")
4. Inspect response

**Expected Results:**
- HTTP Status: 422 Unprocessable Entity
- Response body contains:
  - `errors` array
  - Each error has `title`, `detail`, `status`, `source` fields
  - Error message clearly identifies missing/invalid field

**Pass Criteria:**
- Invalid data is rejected
- Error messages are clear and actionable
- No claim is saved to database

---

### 3.5 PDF Generation Tests

#### TC-4192-PDF-001: PDF Generation Success
**Objective:** Verify PDF is generated correctly after submission.

**Test Steps:**
1. Complete form submission successfully (TC-4192-NAV-001)
2. On confirmation page, click "Download a copy of your VA Form 21-4192"
3. Save PDF file
4. Open PDF in PDF reader
5. Inspect PDF content

**Expected Results:**
- PDF downloads successfully
- Filename format: `21-4192_<GUID>.pdf`
- PDF contains all submitted data:
  - Veteran information on page 1
  - Employer information on page 1-2
  - Employment details on page 2
  - Employer signature on page 2
- All fields are populated correctly
- SSN is properly formatted
- Dates are in correct format

**Pass Criteria:**
- PDF generates without errors
- All data is accurately reflected
- PDF is readable and printable

---

#### TC-4192-PDF-002: PDF Download Pre-Submission
**Objective:** Verify employer can download PDF before final submission.

**Test Steps:**
1. Complete form through review page
2. Click "Download PDF for review" (if available)
3. Save and open PDF

**Expected Results:**
- PDF downloads successfully
- Contains all entered data
- Can be reviewed before submission

**Pass Criteria:**
- PDF generation works at review stage
- Data is accurate

---

### 3.6 Email Notification Tests

#### TC-4192-EMAIL-001: Confirmation Email Sent to Employer
**Objective:** Verify confirmation email is sent to employer after submission.

**Prerequisites:**
- Access to test email account or email monitoring tool

**Test Steps:**
1. Complete form submission with valid employer email: "test-employer@example.com"
2. Submit form successfully
3. Check email inbox for test-employer@example.com

**Expected Results:**
- Email received within 5 minutes
- Email subject: "VA Form 21-4192 Submitted Successfully for [Veteran Name]"
- Email body contains:
  - Employer name
  - Veteran name
  - Confirmation number
  - Date submitted
  - Next steps
  - VA contact information

**Pass Criteria:**
- Email is delivered successfully
- Email content is accurate and helpful

---

### 3.7 Lighthouse Integration Tests

#### TC-4192-LH-001: Lighthouse Submission Queued
**Objective:** Verify Lighthouse submission job is queued after form submission.

**Prerequisites:**
- Access to Sidekiq dashboard or job monitoring

**Test Steps:**
1. Submit form successfully
2. Check Sidekiq queue for `Lighthouse::SubmitBenefitsIntakeClaim` job
3. Verify job parameters

**Expected Results:**
- Job is enqueued immediately after submission
- Job contains correct claim ID
- Job processes successfully

**Pass Criteria:**
- Lighthouse job is queued
- Job completes without errors

---

#### TC-4192-LH-002: Lighthouse Submission Success
**Objective:** Verify form data is successfully submitted to Lighthouse Benefits Intake API.

**Prerequisites:**
- Access to Lighthouse logs or monitoring

**Test Steps:**
1. Submit form successfully
2. Monitor Sidekiq job processing
3. Check Lighthouse submission status

**Expected Results:**
- Job completes successfully
- Lighthouse returns benefits intake UUID
- Submission metadata includes:
  - `veteranFirstName`, `veteranLastName`
  - `fileNumber` (SSN or VA file number)
  - `businessLine` = "CMP"
  - `docType` = "21-4192"

**Pass Criteria:**
- Submission reaches Lighthouse
- Metadata is correct
- StatsD metric `worker.lighthouse.submit_benefits_intake_claim.success` increments

---

### 3.8 Error Handling Tests

#### TC-4192-ERR-001: Network Error Handling
**Objective:** Verify graceful error handling when network fails.

**Test Steps:**
1. Begin form submission
2. Disable network connection during submission
3. Observe error message

**Expected Results:**
- User-friendly error message: "Unable to submit form. Please check your connection and try again."
- Form data is not lost
- User can retry submission

**Pass Criteria:**
- Error is handled gracefully
- Clear error message
- User can recover

---

#### TC-4192-ERR-002: Server Error Handling
**Objective:** Verify handling of 500 server errors.

**Test Steps:**
1. Submit form
2. Simulate 500 error from backend (if possible)
3. Observe error message

**Expected Results:**
- Error message: "An error occurred while processing your submission. Please try again or contact support."
- Form data is preserved
- Error is logged for support

**Pass Criteria:**
- Error doesn't crash application
- User receives helpful message

---

### 3.9 Browser Compatibility Tests

#### TC-4192-BROWSER-001: Chrome Compatibility
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

#### TC-4192-BROWSER-002: Firefox Compatibility
**Objective:** Verify form works in Firefox.

**Test Steps:**
1. Open form in Firefox (latest version)
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

#### TC-4192-BROWSER-003: Safari Compatibility
**Objective:** Verify form works in Safari.

**Test Steps:**
1. Open form in Safari (latest version)
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

### 3.10 Edge Cases and Boundary Tests

#### TC-4192-EDGE-001: Long Text Input
**Objective:** Verify handling of long text inputs.

**Test Steps:**
1. Enter very long employer name (>100 characters)
2. Enter very long concessions description (>500 characters)
3. Submit form
4. Check PDF generation

**Expected Results:**
- Long text is accepted (up to reasonable limit)
- Text is properly displayed in form
- PDF handles long text gracefully (truncation or wrapping)

**Pass Criteria:**
- No errors with long text
- PDF is readable

---

#### TC-4192-EDGE-002: Special Characters
**Objective:** Verify handling of special characters in text fields.

**Test Steps:**
1. Enter name with special characters: "O'Brien-Smith"
2. Enter employer name with ampersand: "Smith & Associates"
3. Enter concessions with quotes: 'Employer provided "modified duties"'
4. Submit form
5. Check PDF

**Expected Results:**
- Special characters are accepted
- Characters display correctly in form and PDF
- No encoding issues

**Pass Criteria:**
- Special characters handled correctly
- No data corruption

---

#### TC-4192-EDGE-003: Minimum Required Fields
**Objective:** Verify form works with only required fields filled.

**Test Steps:**
1. Fill only required fields:
   - Veteran first name, last name, SSN, DOB
   - Employer name, address, email
   - Type of work, beginning date
2. Skip all optional fields
3. Submit form

**Expected Results:**
- Form accepts submission with only required fields
- PDF generates correctly
- No errors

**Pass Criteria:**
- Minimum data submission works
- Optional fields truly optional

---

## 4. Test Execution Tracking

### Test Case Summary

| ID | Test Case | Priority | Status | Tester | Date | Notes |
|----|-----------|----------|--------|--------|------|-------|
| TC-4192-FF-001 | Feature Flag OFF | High | | | | |
| TC-4192-FF-002 | Feature Flag ON | High | | | | |
| TC-4192-NAV-001 | Happy Path Flow | High | | | | |
| TC-4192-VAL-001 | Required Fields | High | | | | |
| TC-4192-VAL-002 | SSN Validation | High | | | | |
| TC-4192-VAL-003 | Email Validation | Medium | | | | |
| TC-4192-VAL-004 | Date Validation | Medium | | | | |
| TC-4192-VAL-005 | Numeric Validation | Medium | | | | |
| TC-4192-API-001 | API Success | High | | | | |
| TC-4192-API-002 | API Validation | High | | | | |
| TC-4192-PDF-001 | PDF Generation | High | | | | |
| TC-4192-PDF-002 | PDF Pre-Submit | Medium | | | | |
| TC-4192-EMAIL-001 | Email Confirmation | High | | | | |
| TC-4192-LH-001 | Lighthouse Queue | High | | | | |
| TC-4192-LH-002 | Lighthouse Submit | High | | | | |
| TC-4192-ERR-001 | Network Error | Medium | | | | |
| TC-4192-ERR-002 | Server Error | Medium | | | | |
| TC-4192-BROWSER-001 | Chrome | High | | | | |
| TC-4192-BROWSER-002 | Firefox | Medium | | | | |
| TC-4192-BROWSER-003 | Safari | Medium | | | | |
| TC-4192-EDGE-001 | Long Text | Low | | | | |
| TC-4192-EDGE-002 | Special Chars | Low | | | | |
| TC-4192-EDGE-003 | Min Required | Low | | | | |

**Total Test Cases:** 23
**High Priority:** 13
**Medium Priority:** 8
**Low Priority:** 2

---

## 5. Defect Tracking

### Defect Log Template

| ID | Severity | Summary | Steps to Reproduce | Expected | Actual | Status | Assigned | Date |
|----|----------|---------|-------------------|----------|--------|--------|----------|------|
| | | | | | | | | |

**Severity Levels:**
- **Critical:** Blocks testing, system crash, data loss
- **High:** Major functionality broken, no workaround
- **Medium:** Functionality impaired, workaround exists
- **Low:** Minor issue, cosmetic

---

## 6. Exit Criteria

Testing is considered complete when:

- [ ] All high-priority test cases pass
- [ ] 90%+ of all test cases pass
- [ ] All critical and high-severity defects are resolved
- [ ] Medium-severity defects have documented workarounds or accepted risks
- [ ] API integration with Lighthouse confirmed working
- [ ] PDF generation verified accurate
- [ ] Email notifications confirmed delivering
- [ ] Browser compatibility verified (Chrome, Firefox, Safari)
- [ ] Form accessible without authentication
- [ ] Feature flag functionality verified
- [ ] QA sign-off obtained

---

## 7. Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Lighthouse API downtime during testing | High | Low | Test with mock responses, have rollback plan |
| PDF generation service failure | High | Low | Test PDF generation separately, have fallback |
| Email delivery issues | Medium | Low | Use email monitoring service, test early |
| Browser-specific issues | Medium | Medium | Test all major browsers early |
| Data validation inconsistencies | High | Medium | Align frontend and backend validation early |

---

## 8. Notes

- **No Authentication Required:** This is a public form for employers - no VA.gov account needed
- **Public Access:** Form must be testable without logging in
- **Feature Flag:** Ensure `form_4192_enabled` is toggled appropriately for testing
- **Coordination:** Coordinate with frontend team for parallel testing
- **Lighthouse Testing:** May need mock Lighthouse responses for consistent testing

---

**Test Plan Prepared By:** Benefits Intake Optimization - Aquia
**Date:** 2025-11-05
**Version:** 1.0
