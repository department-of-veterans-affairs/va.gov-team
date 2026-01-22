# Endpoint Monitoring - Form 21-4192

**Form:** 21-4192 (Request for Employment Information in Connection with Claim for Disability Benefits)  
**Team:** Aquia (Benefits Intake Optimization)  
**Document Version:** 1.0  
**Last Updated:** November 4, 2025  
**For:** Staging Review / Collaboration Cycle

---

## Overview

This document outlines the endpoint monitoring strategy for Form 21-4192, ensuring compliance with VA.gov Platform QA Standard #6: Endpoint Monitoring.

**Key Architecture:** Form 21-4192 uses a shared Sidekiq job (`Lighthouse::SubmitBenefitsIntakeClaim`) that is also used by Forms 21P-530a, 21-0779, and approximately 19 other VA.gov forms. This enables efficient, unified monitoring across all forms using this infrastructure.

**Status:** Form 21-4192 is **merged to master** and serves as the reference implementation for the other Aquia forms.

---

## Endpoints

### 1. POST /v0/form214192 (Submit Form)

**Purpose:** Accept and process employment information request submissions

**Method:** POST  
**Authentication:** Required (authenticated users)  
**Rate Limiting:** Standard vets-api limits

**Request Body Example:**
```json
{
  "veteranFullName": { "first": "John", "last": "Doe" },
  "veteranSocialSecurityNumber": "123-45-6789",
  "employerName": "Example Corporation",
  "employerAddress": { ... },
  "employmentDates": {
    "from": "2015-01-01",
    "to": "2023-12-31"
  },
  "additionalInformation": "..."
}
```

**Success Response (200):**
```json
{
  "data": {
    "id": "12345",
    "type": "saved_claims",
    "attributes": {
      "submitted_at": "2025-11-03T10:00:00Z",
      "regional_office": [],
      "confirmation_number": "V-EBC-12345",
      "guid": "abc123...",
      "form": "21-4192"
    }
  }
}
```

**Processing Flow:**
1. Controller validates request
2. `SavedClaim::Form214192.new(form: payload.to_json)` created
3. Saved to database
4. `claim.process_attachments!` called → Sidekiq job queued
5. HTTP 200 returned immediately to user
6. **Async:** `Lighthouse::SubmitBenefitsIntakeClaim` processes in background

**Failure Modes:**
- Validation errors (400) - immediate response, user notified
- Database errors (500) - immediate response, user notified
- Sidekiq job failures (silent) - caught by monitoring (see below)

**Code Reference:**
- Controller: `vets-api/app/controllers/v0/form214192_controller.rb` (lines 10-36)
- Model: `vets-api/app/models/saved_claim/form214192.rb` (lines 14-19)

---

### 2. POST /v0/form214192/download_pdf (Download PDF)

**Purpose:** Generate and return PDF version of employment information request

**Method:** POST  
**Authentication:** Optional (may be used pre-submission)  
**Rate Limiting:** Standard vets-api limits

**Request Body:** Same as submission endpoint (form data)

**Success Response (200):**
- Content-Type: `application/pdf`
- Content-Disposition: `attachment; filename="21-4192_[UUID].pdf"`
- Body: PDF binary data

**Processing Flow:**
1. Controller receives form data
2. `PdfFill::Filler.fill_ancillary_form(parsed_form, uuid, '21-4192')` called
3. Signature stamped via `PdfFill::Forms::Va214192.stamp_signature`
4. PDF returned via `send_data`
5. Temporary file cleaned up

**Failure Modes:**
- Invalid form data (400)
- PDF generation error (500)
- Template missing (500)

**Code Reference:**
- Controller: `vets-api/app/controllers/v0/form214192_controller.rb` (lines 38-57)

---

## Monitoring Instrumentation

### StatsD Metrics

**Form-Specific Metrics:**
```ruby
# Controller-level (immediate feedback)
StatsD.increment("api.form214192.success")  # Successful save + job enqueue
StatsD.increment("api.form214192.failure")  # Validation or save failure
```

**Implementation:**
- File: `vets-api/app/controllers/v0/form214192_controller.rb`
- Lines: 19 (success), 22 (failure)

**Shared Job Metrics (covers Form 21-4192 and other forms using same job):**
```ruby
# Sidekiq job level (async processing)
StatsD.increment("worker.lighthouse.submit_benefits_intake_claim.success")
StatsD.increment("worker.lighthouse.submit_benefits_intake_claim.failure")
StatsD.increment("worker.lighthouse.submit_benefits_intake_claim.exhausted")  # 🚨 CRITICAL
```

**Implementation:**
- File: `vets-api/app/sidekiq/lighthouse/submit_benefits_intake_claim.rb`
- Lines: 26-31 (retries_exhausted block)

---

### Rails Logger Events

**Controller Logging:**
```ruby
# Success path
Rails.logger.info("ClaimID=#{claim.confirmation_number} Form=#{claim.class::FORM}")
# => ClaimID=V-EBC-12345 Form=21-4192

# Error path
Rails.logger.error('Form214192: error submitting claim', {
  error: e.message,
  claim_errors: defined?(claim) && claim&.errors&.full_messages
})
```

**Implementation:**
- File: `vets-api/app/controllers/v0/form214192_controller.rb`
- Lines: 18 (success), 24-25 (error)

**Sidekiq Logging (Shared Job):**
```ruby
# Retries exhausted (CRITICAL - indicates silent failure)
Rails.logger.error(
  "Failed all retries on Lighthouse::SubmitBenefitsIntakeClaim, last error: #{msg['error_message']}"
)
```

**Implementation:**
- File: `vets-api/app/sidekiq/lighthouse/submit_benefits_intake_claim.rb`
- Lines: 27-29

**Searchable Tags in Datadog:**
- `Form=21-4192`
- `ClaimID=V-EBC-*`
- `Form214192:`
- `Lighthouse::SubmitBenefitsIntakeClaim`

---

### APM (Application Performance Monitoring)

**Automatic Instrumentation:**
- Request latency (p50, p95, p99)
- Error rates by endpoint
- Database query performance
- External API calls to Lighthouse Benefits Intake

**Key Traces:**
- `POST /v0/form214192` → SavedClaim creation → Sidekiq enqueue
- `POST /v0/form214192/download_pdf` → PDF generation
- Sidekiq: `Lighthouse::SubmitBenefitsIntakeClaim.perform`

---

## Datadog Dashboard

### Dashboard Name
"Benefits Intake - Forms Backend (All Aquia Forms)"

**URL:** [Dashboard URL to be added after creation]

**Location:** Form 21-4192 has dedicated widgets within the unified dashboard covering all Aquia forms (21-4192, 21-2680, 21P-530a, 21-0779).

---

### Form 21-4192 Specific Widgets

#### Widget 1: Submission Status (Timeseries)
- **Metrics:** 
  - `sum:api.form214192.success{*}` (Successful Submissions)
  - `sum:api.form214192.failure{*}` (Failed Submissions)
- **Visualization:** Stacked area chart
- **Timeframe:** Past 24 hours
- **Purpose:** Track submission volume and failures

#### Widget 2: Error Rate (Query Value)
- **Metric:** `sum:api.form214192.failure{*} / (sum:api.form214192.success{*} + sum:api.form214192.failure{*}) * 100`
- **Visualization:** Query value with conditional formatting
  - Green: < 1%
  - Yellow: 1-5%
  - Red: > 5%

#### Widget 3: Request Volume (Query Value)
- **Metric:** `sum:api.form214192.success{*}.as_count()`
- **Timeframe:** Past 24 hours
- **Purpose:** Total successful submissions

#### Widget 4: Recent Errors (Log Stream)
- **Query:** `service:vets-api status:error "Form214192"`
- **Display:** Most recent 10 errors
- **Purpose:** Quick error triage

#### Widget 5: Request Latency (Timeseries)
- **Metric:** `avg:trace.rack.request.duration{resource_name:"POST /v0/form214192"}`
- **Timeframe:** Past 1 hour
- **Purpose:** Monitor performance trends

---

### Shared Infrastructure Widgets

These widgets monitor the shared Sidekiq job used by Form 21-4192 and other forms:

#### Shared Job Processing Status
- **Metrics:**
  - `sum:worker.lighthouse.submit_benefits_intake_claim.success{*}`
  - `sum:worker.lighthouse.submit_benefits_intake_claim.failure{*}`
  - `sum:worker.lighthouse.submit_benefits_intake_claim.exhausted{*}` (CRITICAL)
- **Purpose:** Monitor async processing health

#### Shared Job Retries Exhausted (Query Value)
- **Metric:** `sum:worker.lighthouse.submit_benefits_intake_claim.exhausted{*}`
- **Color:** Red
- **Purpose:** 🚨 CRITICAL - Silent failure indicator

---

## Datadog Monitors

### Form 21-4192 Specific Monitors

#### Monitor 1: Low Traffic Detection
- **Name:** `[Aquia] Form 21-4192 - Anomalous Traffic Drop`
- **Type:** Anomaly Detection
- **Metric:** `sum:api.form214192.success{*}.as_rate()`
- **Alert Condition:** Traffic drops below expected baseline
- **Evaluation Window:** 1 hour
- **Notification:** `#benefits-optimization-aquia`
- **Purpose:** Detect if form stops receiving submissions (frontend/routing issue)

#### Monitor 2: PDF Generation Failures
- **Name:** `[Aquia] Form 21-4192 - PDF Generation Failures`
- **Type:** Log Alert
- **Query:** `logs("service:vets-api status:error \"Form214192\" \"PDF\"").index("*").rollup("count").last("15m") > 5`
- **Threshold:** > 5 errors in 15 minutes
- **Notification:** `#benefits-optimization-aquia`
- **Purpose:** Alert on PDF generation issues

#### Monitor 3: High 5xx Error Rate
- **Name:** `[Aquia] Form 21-4192 - High 5xx Error Rate`
- **Type:** Metric Alert
- **Metric:** `sum:trace.rack.request.errors{resource_name:"POST /v0/form214192",http.status_code:5*}.as_count()`
- **Threshold:** > 10 errors in 5 minutes
- **Notification:** `#benefits-optimization-aquia`
- **Purpose:** Alert on application/infrastructure issues

---

### Shared Infrastructure Monitors

These monitors cover Form 21-4192 and other forms using the same infrastructure:

#### Monitor A: High Error Rate (Shared Job)
- **Name:** `[Aquia Forms] High Error Rate - Shared Sidekiq Job`
- **Metric:** `sum:worker.lighthouse.submit_benefits_intake_claim.failure{*}.as_rate()`
- **Threshold:** > 5 failures per minute
- **Affects:** Forms 21-4192, 21P-530a, 21-0779
- **Notification:** `#benefits-optimization-aquia`

#### Monitor C: Silent Failures (CRITICAL)
- **Name:** `[Aquia Forms] Silent Failure - Sidekiq Retries Exhausted`
- **Type:** Log Alert
- **Query:** `logs("service:vets-api \"Failed all retries on Lighthouse::SubmitBenefitsIntakeClaim\"").index("*").rollup("count").last("10m") > 0`
- **Threshold:** > 0 occurrences
- **Affects:** Forms 21-4192, 21P-530a, 21-0779
- **Notification:** `#benefits-optimization-aquia` (+ PagerDuty if configured)
- **Purpose:** 🚨 CRITICAL - Detect silent failures requiring immediate remediation

**Alert Message:**
```
🚨🚨🚨 SILENT FAILURE DETECTED - Immediate Action Required 🚨🚨🚨

A submission has PERMANENTLY FAILED after exhausting all retries.
This represents a silent failure - the veteran received a confirmation but their claim was not submitted.

📊 Occurrences: {{value}} in the last 10 minutes

🔍 IMMEDIATE ACTIONS:
1. Check logs for claim IDs
2. Query FormSubmissionAttempt table for failed attempts
3. Identify affected veterans
4. Manually remediate submissions
5. Document in incident log

📝 Affected Forms: 21-4192, 21P-530a, 21-0779
⏰ Detected at: {{last_triggered_at}}
```

#### Monitor F: Infrastructure Health (Queue Depth)
- **Name:** `[Aquia Forms] Infrastructure Health - Sidekiq Queue Depth`
- **Metric:** `avg:sidekiq.queue.size{queue:lighthouse_benefits_intake}`
- **Threshold:** > 1000 jobs
- **Affects:** All forms using this queue
- **Notification:** `#benefits-optimization-aquia`

---

## Incident Response

### Response to Silent Failure (Monitor C - CRITICAL)

**Severity:** CRITICAL  
**Response Time:** Within 5 minutes

**Immediate Actions:**

1. **Identify Affected Submissions**
   ```sql
   SELECT id, saved_claim_id, form_type, created_at, failure_details
   FROM form_submission_attempts
   WHERE aasm_state = 'failure'
   AND form_type = '21-4192'
   AND updated_at > NOW() - INTERVAL '1 hour'
   ORDER BY updated_at DESC;
   ```

2. **Retrieve Claim Details**
   ```bash
   docker exec vets-api-web-1 rails console
   > SavedClaim::Form214192.find([claim_ids_from_query])
   ```

3. **Document Veterans Affected**
   - Extract confirmation numbers
   - Prepare for manual remediation

4. **Review Error Context**
   - Check Datadog logs for full error details
   - Determine if Lighthouse API or application issue

5. **Manual Remediation (if Lighthouse API is healthy)**
   ```ruby
   # Retrieve claim
   claim = SavedClaim::Form214192.find(claim_id)
   
   # Re-queue job manually
   Lighthouse::SubmitBenefitsIntakeClaim.perform_async(claim.id)
   ```

6. **Communication**
   - Post in `#benefits-optimization-aquia` immediately
   - Notify product owner within 15 minutes
   - Create P0 incident ticket
   - Coordinate veteran communication if needed

---

### Response to PDF Failures (Monitor 2)

**Severity:** MEDIUM  
**Response Time:** Within 15 minutes

**Actions:**

1. **Verify PDF Template Exists**
   ```bash
   docker exec vets-api-web-1 ls -la lib/pdf_fill/forms/pdfs/21-4192.pdf
   ```

2. **Test PDF Generation**
   - Manually test PDF endpoint with valid data
   - Check for template corruption or missing files

3. **Common Causes:**
   - Missing PDF template file
   - Corrupted template
   - PdfFill service issue
   - Invalid form data causing template fill errors

4. **Remediation:**
   - If template missing: Redeploy templates
   - If data issue: Validate form data structure
   - If PdfFill issue: Restart service or escalate

---

### Response to Traffic Anomaly (Monitor 1)

**Severity:** MEDIUM  
**Response Time:** Within 10 minutes

**Actions:**

1. **Verify Alert Legitimacy**
   - Check if traffic drop is expected (off-hours, holiday)
   - Compare to historical patterns

2. **Check Frontend**
   - Verify frontend deployed and accessible
   - Check for JavaScript errors
   - Test form submission manually

3. **Check Backend**
   - Verify endpoint responding
   - Check recent logs for endpoint
   - Verify routes configured correctly

4. **If Issue Found:**
   - Roll back recent deployment if caused issue
   - Fix configuration if routing/DNS issue
   - Monitor recovery after fix applied

---

## Useful Queries

### Datadog Log Queries

**Find all Form 21-4192 submissions in last 24 hours:**
```
service:vets-api "ClaimID=V-EBC-*" "Form=21-4192"
```

**Find all Form 21-4192 errors:**
```
service:vets-api status:error "Form214192"
```

**Find PDF generation errors:**
```
service:vets-api status:error "Form214192" "PDF"
```

**Find silent failures affecting Form 21-4192 (shared job):**
```
service:vets-api "Failed all retries on Lighthouse::SubmitBenefitsIntakeClaim"
```

---

### Database Queries

**Find recent Form 21-4192 submissions:**
```sql
SELECT id, form, confirmation_number, created_at, updated_at
FROM saved_claims
WHERE form = '21-4192'
AND created_at > NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC
LIMIT 100;
```

**Find failed Form 21-4192 submission attempts:**
```sql
SELECT 
  fsa.id,
  fsa.saved_claim_id,
  fsa.aasm_state,
  fsa.failure_details,
  fsa.created_at,
  sc.confirmation_number
FROM form_submission_attempts fsa
JOIN saved_claims sc ON sc.id = fsa.saved_claim_id
WHERE fsa.aasm_state = 'failure'
AND sc.form = '21-4192'
AND fsa.created_at > NOW() - INTERVAL '24 hours'
ORDER BY fsa.created_at DESC;
```

---

## Validation Checklist

### Pre-Launch (Completed)

- [x] StatsD metrics instrumented (`api.form214192.success`, `api.form214192.failure`)
- [x] Rails logging in place (ClaimID, form type, errors)
- [x] APM tracing enabled
- [x] Dashboard widgets created for Form 21-4192
- [x] 3 form-specific monitors created (traffic, PDF, 5xx)
- [x] Shared monitors verified covering Form 21-4192
- [x] Slack notifications configured (`#benefits-optimization-aquia`)
- [x] Incident response procedures documented
- [x] Team trained on monitoring and incident response

### Post-Launch (Ongoing)

- [ ] Daily dashboard review
- [ ] Monitor for false positive alerts
- [ ] Tune thresholds if needed
- [ ] Document any incidents
- [ ] Verify FormSubmissionAttempt tracking working

---

## Contact Information

**Team:** Aquia (Benefits Intake Optimization)  
**Slack Channel:** `#benefits-optimization-aquia`  
**PagerDuty:** `@pagerduty-aquia-oncall` (if configured)

**Key Contacts:**
- Product Owner: [Name]
- Tech Lead: [Name]
- Backend Engineers: Cameron Testerman, [Others]

**External Support:**
- Lighthouse API Support: `#benefits-api-support`
- Platform Support: `#vfs-platform-support`
- DevOps/Infrastructure: [Contact info]

---

## Related Documentation

- **Platform QA Standards:** https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards
- **QA7 Silent Failures Analysis:** [qa7-silent-failures.md](./qa7-silent-failures.md)
- **QA Standards:** [qa-standards.md](./qa-standards.md)
