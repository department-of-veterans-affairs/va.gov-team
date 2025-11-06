# Test Plan – VA Form 21P-530a Burial Allowance
## Application for Burial Allowance (State/Tribal Organizations)

**Prepared:** 2025-11-05
**Product/QA Owner:** Benefits Intake Optimization (BIOHEART)
**Target Release:** Public digital submission for VA Form 21P-530a
**Test Environment:** Staging (`staging.va.gov`, `staging-api.va.gov`)

---

## 1. Scope and Objectives

This test plan verifies the MVP functionality of the digitized VA Form 21P-530a, which allows state and tribal cemetery officials to apply for burial allowances for veterans. **Critical Feature:** This form supports **multiple service periods** for veterans who served in different branches or had multiple periods of active duty.

### In Scope
- Digital form submission via `/21p-530a-burial-allowance/`
- **Multiple service periods support** (array of service period objects)
- Form validation (client-side and server-side)
- PDF generation and download
- Lighthouse Benefits Intake API submission to PMC
- Public access (no authentication required)
- Feature flag functionality (`form_530a_enabled`)
- Rate limiting
- Error handling and user feedback

### Out of Scope
- Downstream Lighthouse/PMC processing
- Email notifications (not part of MVP)
- Performance/load testing
- Accessibility testing (covered separately)

---

## 2. Test Environment Setup

### Prerequisites
- **Environment:** Staging (`https://staging.va.gov`)
- **API Endpoint:** `https://staging-api.va.gov/v0/form21p530a/claims`
- **Feature Flag:** `form_530a_enabled` must be enabled in staging
- **Test Data:** Valid form data with multiple service periods
- **Browser:** Chrome (latest), Firefox (latest), Safari (latest)

### Test Accounts
- **No authentication required** – this is a public form for cemetery officials

### Test Data
**Sample Valid Form Data (with Multiple Service Periods):**
```json
{
  "veteranFullName": {
    "first": "Robert",
    "middle": "James",
    "last": "Anderson",
    "suffix": "Jr"
  },
  "veteranSocialSecurityNumber": "123456789",
  "veteranDateOfBirth": "1945-03-15",
  "deathDate": "2024-10-01",
  "placeOfBirth": "Chicago, IL",
  "servicePeriods": [
    {
      "serviceBranch": "Army",
      "dateEnteredService": "1963-06-01",
      "dateLeftService": "1967-05-31",
      "rankAtSeparation": "Sergeant",
      "placeEnteredService": "Fort Benning, GA",
      "placeLeftService": "Fort Carson, CO"
    },
    {
      "serviceBranch": "Army Reserve",
      "dateEnteredService": "1967-06-01",
      "dateLeftService": "1975-05-31",
      "rankAtSeparation": "Staff Sergeant",
      "placeEnteredService": "Chicago, IL",
      "placeLeftService": "Chicago, IL"
    }
  ],
  "cemeteryOrganizationName": "Illinois State Veterans Cemetery",
  "placeOfBurial": {
    "cemeteryName": "Illinois State Veterans Cemetery at Quincy",
    "cemeteryLocation": "Quincy, IL"
  },
  "burialDate": "2024-10-05",
  "recipientOrganization": {
    "name": "Illinois Department of Veterans' Affairs",
    "phone": "217-782-6641",
    "email": "dva.burial@illinois.gov",
    "address": {
      "street": "833 South Spring Street",
      "city": "Springfield",
      "state": "IL",
      "postalCode": "62704"
    }
  },
  "certificationSignature": "John Smith",
  "certificationTitle": "Cemetery Director",
  "certificationDate": "2024-11-05"
}
```

---

## 3. Test Cases

### 3.1 Feature Flag Tests

#### TC-530a-FF-001: Feature Flag OFF Blocks Access
**Objective:** Verify that the digital form is inaccessible when feature flag is disabled.

**Preconditions:**
- Feature flag `form_530a_enabled` is disabled

**Test Steps:**
1. Navigate to `/21p-530a-burial-allowance/`
2. Verify page response
3. Attempt API call: `POST /v0/form21p530a/claims`
4. Verify API response

**Expected Results:**
- Page returns 404 or "feature unavailable" message
- API returns 403 Forbidden
- No form content renders

**Pass Criteria:**
- Digital workflow fully hidden when flag off

---

#### TC-530a-FF-002: Feature Flag ON Enables Public Access
**Objective:** Verify that the digital form is accessible when feature flag is enabled.

**Preconditions:**
- Feature flag `form_530a_enabled` is enabled

**Test Steps:**
1. Visit `/21p-530a-burial-allowance/` in incognito mode (no sign-in)
2. Verify page loads
3. Verify "Start application" button present
4. Verify no authentication required

**Expected Results:**
- Introduction page renders
- Form accessible without login
- Instructions visible

**Pass Criteria:**
- Form accessible to public
- No authentication barrier

---

### 3.2 Multiple Service Periods Tests (CRITICAL)

#### TC-530a-MSP-001: Single Service Period Validation
**Objective:** Verify form accepts single service period.

**Test Steps:**
1. Navigate to military service section
2. Add one service period:
   - Branch: "Army"
   - Date entered: "06/01/1963"
   - Date left: "05/31/1967"
   - Rank: "Sergeant"
3. Click "Continue"

**Expected Results:**
- Single service period accepted
- No validation errors
- Form progresses normally

**Pass Criteria:**
- Minimum 1 service period requirement met
- Validation passes

---

#### TC-530a-MSP-002: Multiple Service Periods - Add Second Period
**Objective:** Verify user can add a second service period.

**Test Steps:**
1. Complete first service period (TC-530a-MSP-001)
2. Click "Add another service period"
3. Verify new service period form appears
4. Fill second period:
   - Branch: "Army Reserve"
   - Date entered: "06/01/1967"
   - Date left: "05/31/1975"
   - Rank: "Staff Sergeant"
5. Click "Continue"

**Expected Results:**
- "Add another service period" button functions
- New service period form appears
- Both periods saved
- Form progresses

**Pass Criteria:**
- UI supports adding multiple periods
- Data persists correctly

---

#### TC-530a-MSP-003: Multiple Service Periods - Three Periods
**Objective:** Verify form supports three or more service periods.

**Test Steps:**
1. Add first service period (Army, 1963-1967)
2. Add second service period (Army Reserve, 1967-1975)
3. Add third service period (National Guard, 1975-1980)
4. Click "Continue"
5. Review page and verify all three periods display

**Expected Results:**
- All three service periods accepted
- Review page lists all periods
- No UI/data corruption

**Pass Criteria:**
- Form handles 3+ service periods
- All data accurate

---

#### TC-530a-MSP-004: Service Period Required Fields Validation
**Objective:** Verify required field validation for each service period.

**Test Steps:**
1. Add service period
2. Leave service branch blank
3. Click "Continue"
4. Verify error: "Service branch is required"
5. Leave date entered blank
6. Verify error: "Date entered service is required"
7. Leave date left blank
8. Verify error: "Date left service is required"
9. Leave rank blank
10. Verify error: "Rank at separation is required"

**Expected Results:**
- Each required field validated
- Clear error messages
- Form blocks progression

**Pass Criteria:**
- All required service period fields validated
- Error messages identify specific field

---

#### TC-530a-MSP-005: Service Period Date Logic Validation
**Objective:** Verify date logic within each service period.

**Test Steps:**
1. Add service period
2. Enter date left before date entered (e.g., left: 1963, entered: 1967)
3. Click "Continue"
4. Verify error: "Date left service must be after date entered service"
5. For second service period, repeat with inverted dates
6. Verify error includes period identifier: "Service period 2: Date left service must be after date entered service"

**Expected Results:**
- Date order validated within each period
- Error messages identify specific service period
- Clear, actionable error text

**Pass Criteria:**
- Date logic validation works per period
- Period identifier in error message

---

#### TC-530a-MSP-006: Remove Service Period
**Objective:** Verify user can remove a service period.

**Test Steps:**
1. Add three service periods
2. Click "Remove" on second period
3. Verify second period removed
4. Verify remaining periods are first and third
5. Submit form
6. Verify only two periods in submission

**Expected Results:**
- Remove button functions
- Correct period removed
- Remaining data intact

**Pass Criteria:**
- Remove functionality works
- Data consistency maintained

---

#### TC-530a-MSP-007: API Validates servicePeriods Array
**Objective:** Verify API validates servicePeriods as array and rejects invalid structures.

**Test Steps:**
1. POST to API with servicePeriods = null
2. Verify 422 error: "Service periods are required"
3. POST with servicePeriods = {} (object instead of array)
4. Verify 422 error: "Service periods must be an array"
5. POST with servicePeriods = [] (empty array)
6. Verify 422 error: "At least one service period is required"

**Expected Results:**
- API validates array structure
- Clear error messages for each invalid structure

**Pass Criteria:**
- API enforces array requirement
- Validation comprehensive

---

#### TC-530a-MSP-008: API Validates Each Service Period
**Objective:** Verify API validates each service period in the array.

**Test Steps:**
1. POST with two service periods, second period missing branch
2. Verify 422 error: "Service period 2: Service branch is required"
3. POST with second period dates inverted
4. Verify 422 error: "Service period 2: Date left service must be after date entered service"

**Expected Results:**
- API validates each period independently
- Error messages identify specific period

**Pass Criteria:**
- Per-period validation works
- Error messages clear

---

#### TC-530a-MSP-009: PDF Generation with Multiple Service Periods
**Objective:** Verify PDF displays all service periods correctly.

**Test Steps:**
1. Complete form with three service periods
2. Submit and download PDF
3. Open PDF
4. Verify all three service periods appear in Section II

**Expected Results:**
- PDF contains all service periods
- Each period clearly delineated
- All fields populated correctly
- Readable and properly formatted

**Pass Criteria:**
- PDF handles multiple service periods
- All data visible

---

### 3.3 Form Navigation and Validation Tests

#### TC-530a-NAV-001: Complete Happy Path
**Objective:** Verify user can complete entire form successfully.

**Test Steps:**
1. Navigate to `/21p-530a-burial-allowance/` (incognito)
2. Click "Start application"
3. **Veteran Information Page:**
   - Enter veteran full name, SSN, DOB
   - Enter place of birth
   - Enter death date
   - Click "Continue"
4. **Military Service Page:**
   - Add two service periods (see TC-530a-MSP-002)
   - Click "Continue"
5. **Cemetery Information Page:**
   - Enter cemetery organization name
   - Enter cemetery name and location
   - Enter burial date
   - Click "Continue"
6. **Recipient Organization Page:**
   - Enter organization name, phone, email, address
   - Click "Continue"
7. **Certification Page:**
   - Enter signature, title, date
   - Click "Continue"
8. **Review & Submit Page:**
   - Review all data including both service periods
   - Click "Submit"

**Expected Results:**
- Each page loads without errors
- All data persists
- Review page displays all information including multiple service periods
- Submission succeeds
- Confirmation page displays with:
  - Confirmation number
  - Submission timestamp
  - PDF download link
  - Next steps

**Pass Criteria:**
- End-to-end workflow succeeds
- No console errors
- Confirmation number displayed

---

#### TC-530a-VAL-001: Required Field Validation - Veteran Information
**Objective:** Verify required field validation for veteran information.

**Test Steps:**
1. On veteran page, leave first name blank
2. Click "Continue"
3. Verify error: "Veteran first name is required"
4. Leave death date blank
5. Verify error: "Death date is required"
6. Leave SSN and VA file number blank
7. Verify error: "Either SSN or VA file number is required"

**Expected Results:**
- All required fields validated
- Clear error messages
- Form blocks progression

**Pass Criteria:**
- Required field validation works
- Error messages actionable

---

#### TC-530a-VAL-002: Death Date After Birth Date
**Objective:** Verify death date must be after birth date.

**Test Steps:**
1. Enter veteran DOB: "01/15/1945"
2. Enter death date: "01/01/1940" (before DOB)
3. Click "Continue"
4. Verify error: "Death date must be after date of birth"

**Expected Results:**
- Date logic validated
- Clear error message

**Pass Criteria:**
- Date validation works
- Error message clear

---

### 3.4 API Tests

#### TC-530a-API-001: Successful Submission with Multiple Service Periods
**Objective:** Verify API successfully processes submission with multiple service periods.

**Test Steps:**
1. POST to `/v0/form21p530a/claims` with payload containing two service periods
2. Inspect response
3. Verify database record
4. Verify Lighthouse job queued

**Expected Results:**
- HTTP 200 OK
- Response contains:
  - `confirmation_number` (UUID)
  - `guid` (UUID)
  - `submitted_at` (timestamp)
  - `regional_office` (PMC address array)
- Database: SavedClaim::Form21p530a created
- Sidekiq: Lighthouse::SubmitBenefitsIntakeClaim job queued with correct metadata

**Pass Criteria:**
- API processes multiple service periods
- Job queued successfully

---

#### TC-530a-API-002: Lighthouse Metadata Validation
**Objective:** Verify Lighthouse submission includes correct metadata.

**Test Steps:**
1. Submit form
2. Inspect Lighthouse job payload
3. Verify metadata structure

**Expected Results:**
- Metadata includes:
  - `veteranFirstName`, `veteranLastName`
  - `fileNumber` (SSN or VA file number)
  - `zipCode` (from organization address)
  - `source` = "va.gov"
  - `docType` = "21P-530a"
  - `businessLine` = "PMC"
  - `organizationName`

**Pass Criteria:**
- Metadata structure correct
- Business line = PMC
- Document type = 540 (Burial/Memorial Benefits)

---

### 3.5 PDF Generation Tests

#### TC-530a-PDF-001: PDF Generation with Multiple Service Periods
**Objective:** (Duplicate of TC-530a-MSP-009 - see above)

---

#### TC-530a-PDF-002: PDF Download Pre-Submission
**Objective:** Verify PDF can be downloaded before final submission.

**Test Steps:**
1. Complete form through review page
2. Click "Download PDF for review" (if available)
3. Open PDF

**Expected Results:**
- PDF downloads successfully
- Contains all entered data including multiple service periods
- Can be reviewed before submission

**Pass Criteria:**
- PDF generation works at review stage

---

### 3.6 Lighthouse Integration Tests

#### TC-530a-LH-001: Lighthouse Submission Success
**Objective:** Verify successful Lighthouse submission to PMC.

**Test Steps:**
1. Submit form
2. Monitor Sidekiq job processing
3. Verify Lighthouse submission

**Expected Results:**
- Job completes successfully
- Lighthouse returns benefits intake UUID
- StatsD metric `worker.lighthouse.submit_benefits_intake_claim.success` increments
- Submission routed to PMC

**Pass Criteria:**
- Lighthouse submission succeeds
- Routes to correct business line

---

#### TC-530a-LH-002: Lighthouse Failure Handling
**Objective:** Verify monitoring when Lighthouse fails.

**Test Steps:**
1. Induce Lighthouse failure (mock 500)
2. Submit form
3. Monitor job retries
4. Verify metrics and alerts

**Expected Results:**
- Initial API response remains 200 (user not blocked)
- Job retries
- StatsD metric `worker.lighthouse.submit_benefits_intake_claim.failure` increments
- Alert fires
- FormSubmissionAttempt shows failed state

**Pass Criteria:**
- Monitoring detects failure
- Alert triggers

---

### 3.7 Rate Limiting Tests

#### TC-530a-RATE-001: Rate Limiting for Submissions
**Objective:** Verify rate limiting prevents abuse.

**Test Steps:**
1. Submit form >10 times in an hour from same IP
2. Verify 429 response on 11th submission

**Expected Results:**
- HTTP 429 Too Many Requests
- Message: "You've reached the submission limit. Please try again later."
- Rate limit headers present

**Pass Criteria:**
- Rate limiting effective

---

### 3.8 Error Handling Tests

#### TC-530a-ERR-001: Network Error Handling
**Objective:** Verify graceful error handling when network fails.

**Test Steps:**
1. Begin submission
2. Disable network during submission
3. Observe error message

**Expected Results:**
- User-friendly error message
- Form data not lost
- User can retry

**Pass Criteria:**
- Error handled gracefully

---

### 3.9 Browser Compatibility Tests

#### TC-530a-BROWSER-001: Chrome Compatibility
**Objective:** Verify form works in Chrome.

**Test Steps:**
1. Open form in Chrome (latest)
2. Complete full submission with multiple service periods

**Expected Results:**
- Form loads correctly
- All interactions work
- Submission succeeds

**Pass Criteria:**
- No browser-specific issues

---

#### TC-530a-BROWSER-002: Firefox Compatibility
**Objective:** Verify form works in Firefox.

**Test Steps:**
1. Open form in Firefox (latest)
2. Complete full submission

**Expected Results:**
- Form works correctly

**Pass Criteria:**
- No browser-specific issues

---

#### TC-530a-BROWSER-003: Safari Compatibility
**Objective:** Verify form works in Safari.

**Test Steps:**
1. Open form in Safari (latest)
2. Complete full submission

**Expected Results:**
- Form works correctly

**Pass Criteria:**
- No browser-specific issues

---

### 3.10 Edge Cases and Boundary Tests

#### TC-530a-EDGE-001: Maximum Service Periods
**Objective:** Verify form handles maximum expected service periods.

**Test Steps:**
1. Add 5 service periods
2. Submit form
3. Verify PDF generation

**Expected Results:**
- Form accepts 5 periods
- PDF displays all 5 periods
- No performance degradation

**Pass Criteria:**
- Form handles multiple periods gracefully

---

#### TC-530a-EDGE-002: Special Characters in Service Period Fields
**Objective:** Verify handling of special characters.

**Test Steps:**
1. Enter place entered: "Fort O'Brien"
2. Enter rank: "Staff Sergeant (E-6)"
3. Submit and download PDF

**Expected Results:**
- Special characters accepted
- Display correctly in PDF

**Pass Criteria:**
- Special characters handled correctly

---

## 4. Test Execution Tracking

### Test Case Summary

| ID | Test Case | Priority | Status | Tester | Date | Notes |
|----|-----------|----------|--------|--------|------|-------|
| TC-530a-FF-001 | Feature Flag OFF | High | | | | |
| TC-530a-FF-002 | Feature Flag ON | High | | | | |
| **TC-530a-MSP-001** | **Single Service Period** | **Critical** | | | | |
| **TC-530a-MSP-002** | **Add Second Period** | **Critical** | | | | |
| **TC-530a-MSP-003** | **Three+ Periods** | **Critical** | | | | |
| **TC-530a-MSP-004** | **Period Required Fields** | **Critical** | | | | |
| **TC-530a-MSP-005** | **Period Date Logic** | **Critical** | | | | |
| **TC-530a-MSP-006** | **Remove Period** | **High** | | | | |
| **TC-530a-MSP-007** | **API Array Validation** | **Critical** | | | | |
| **TC-530a-MSP-008** | **API Per-Period Validation** | **Critical** | | | | |
| **TC-530a-MSP-009** | **PDF Multiple Periods** | **Critical** | | | | |
| TC-530a-NAV-001 | Happy Path Flow | High | | | | |
| TC-530a-VAL-001 | Required Fields | High | | | | |
| TC-530a-VAL-002 | Death Date Validation | High | | | | |
| TC-530a-API-001 | API Success | High | | | | |
| TC-530a-API-002 | Lighthouse Metadata | High | | | | |
| TC-530a-PDF-002 | PDF Pre-Submit | Medium | | | | |
| TC-530a-LH-001 | Lighthouse Success | High | | | | |
| TC-530a-LH-002 | Lighthouse Failure | High | | | | |
| TC-530a-RATE-001 | Rate Limiting | High | | | | |
| TC-530a-ERR-001 | Network Error | Medium | | | | |
| TC-530a-BROWSER-001 | Chrome | High | | | | |
| TC-530a-BROWSER-002 | Firefox | Medium | | | | |
| TC-530a-BROWSER-003 | Safari | Medium | | | | |
| TC-530a-EDGE-001 | Max Periods | Medium | | | | |
| TC-530a-EDGE-002 | Special Chars | Low | | | | |

**Total Test Cases:** 26
**Critical Priority:** 9 (all related to multiple service periods)
**High Priority:** 12
**Medium Priority:** 4
**Low Priority:** 1

---

## 5. Exit Criteria

Testing is considered complete when:

- [ ] **All critical-priority test cases pass** (especially multiple service periods)
- [ ] 95%+ of all test cases pass
- [ ] All critical and high-severity defects resolved
- [ ] **Multiple service periods functionality thoroughly validated** (UI, API, PDF)
- [ ] Lighthouse integration to PMC confirmed working
- [ ] PDF generation with multiple service periods verified
- [ ] Rate limiting confirmed effective
- [ ] Browser compatibility verified
- [ ] Form accessible without authentication
- [ ] Feature flag functionality verified
- [ ] QA sign-off obtained

---

## 6. Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Multiple service periods not handling edge cases** | Critical | Medium | Extensive testing with 1, 2, 3, 5+ periods; test array validation thoroughly |
| **PDF overflow with many service periods** | High | Medium | Test PDF with 5+ periods; verify continuation pages or truncation |
| Lighthouse PMC routing failure | High | Low | Test with mock responses; verify metadata correct |
| Service period date validation gaps | High | Medium | Test all date logic combinations per period |

---

## 7. Notes

- **Critical Feature:** **Multiple Service Periods** support is the most complex and critical aspect of this form
- **No Authentication Required:** This is a public form for cemetery officials
- **Business Line:** PMC (Pension Management Center) not CMP
- **Document Type:** 540 (Burial/Memorial Benefits)
- **Testing Priority:** Focus heavily on multiple service periods in all test areas (UI, validation, API, PDF)

---

**Test Plan Prepared By:** Benefits Intake Optimization - Aquia
**Date:** 2025-11-05
**Version:** 1.0
