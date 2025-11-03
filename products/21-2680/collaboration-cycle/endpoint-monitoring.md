# Endpoint Monitoring - Form 21-2680

**Form:** 21-2680 (Examination for Housebound Status or Permanent Need for Regular Aid and Attendance)  
**Team:** Aquia (Benefits Intake Optimization)  
**Document Version:** 1.0  
**Last Updated:** November 4, 2025  
**For:** Staging Review / Collaboration Cycle

---

## Overview

This document outlines the endpoint monitoring strategy for Form 21-2680, ensuring compliance with VA.gov Platform QA Standard #6: Endpoint Monitoring.

**Key Architecture:** Form 21-2680 provides **PDF download functionality only**. There is no asynchronous submission endpoint, making the monitoring requirements simpler and more focused on PDF generation reliability.

**QA7 Applicability:** QA7 (Silent Failures) **does not apply** to Form 21-2680 because it does not use asynchronous submission processing.

---

## Endpoints

### 1. POST /v0/form212680/download_pdf (Download PDF)

**Purpose:** Generate and return PDF version of Form 21-2680

**Method:** POST  
**Authentication:** Optional (may be used pre-submission)  
**Rate Limiting:** Standard vets-api limits

**Request Body Example:**
```json
{
  "veteranFullName": { "first": "John", "last": "Doe" },
  "veteranSocialSecurityNumber": "123-45-6789",
  "dateOfBirth": "1950-01-15",
  "address": { ... },
  "medicalInformation": { ... },
  "careProvider": { ... }
}
```

**Success Response (200):**
- Content-Type: `application/pdf`
- Content-Disposition: `attachment; filename="21-2680_[UUID].pdf"`
- Body: PDF binary data

**Processing Flow:**
1. Controller receives form data
2. `PdfFill::Filler.fill_ancillary_form(parsed_form, uuid, '21-2680')` called
3. Signature stamped if present
4. PDF returned via `send_data`
5. Temporary file cleaned up
6. **All processing is synchronous** - user receives immediate feedback

**Failure Modes:**
- Invalid form data (400) - user notified immediately
- PDF generation error (500) - user notified immediately
- Template missing (500) - user notified immediately

**Code Reference:**
- Controller: `vets-api/app/controllers/v0/form212680_controller.rb`
- Model: `vets-api/app/models/form_profiles/va_212680.rb` (FormProfile, not SavedClaim)

---

## Key Difference from Other Aquia Forms

**Forms 21-4192, 21P-530a, 21-0779:**
- ✅ Have submission endpoints
- ✅ Use asynchronous processing (Sidekiq)
- ✅ Use shared `Lighthouse::SubmitBenefitsIntakeClaim` job
- ⚠️ Subject to silent failure risk (QA7 applies)

**Form 21-2680:**
- ✅ PDF download only
- ✅ Synchronous processing
- ✅ Immediate user feedback
- ✅ No silent failure risk (QA7 does not apply)

---

## Monitoring Instrumentation

### StatsD Metrics

**Form-Specific Metrics (Expected):**
```ruby
# Controller-level (synchronous PDF generation)
StatsD.increment("api.form212680.pdf.success")  # Successful PDF generation
StatsD.increment("api.form212680.pdf.failure")  # PDF generation failed
```

**Note:** Since Form 21-2680 only provides PDF functionality, metrics focus on PDF generation success/failure rather than form submission.

---

### Rails Logger Events

**Controller Logging (Expected):**
```ruby
# Success path
Rails.logger.info("Form 21-2680 PDF generated successfully", { 
  form: '21-2680',
  timestamp: Time.current 
})

# Error path
Rails.logger.error('Form212680: error generating PDF', {
  error: e.message,
  form_data: parsed_form_summary
})
```

**Searchable Tags in Datadog:**
- `Form212680:`
- `Form 21-2680`
- `PDF`
- `form212680`

---

### APM (Application Performance Monitoring)

**Automatic Instrumentation:**
- Request latency (p50, p95, p99)
- Error rates by endpoint
- PDF generation performance
- PdfFill service calls

**Key Traces:**
- `POST /v0/form212680/download_pdf` → PDF generation → File response

---

## Datadog Dashboard

### Dashboard Name
"Benefits Intake - Forms Backend (All Aquia Forms)"

**URL:** [Dashboard URL to be added after creation]

**Location:** Form 21-2680 has dedicated widgets within the unified dashboard covering all Aquia forms (21-4192, 21-2680, 21P-530a, 21-0779).

---

### Form 21-2680 Specific Widgets

#### Widget 1: PDF Generation Status (Timeseries)
- **Metrics:** 
  - `sum:api.form212680.pdf.success{*}` (Successful PDF Generations)
  - `sum:api.form212680.pdf.failure{*}` (Failed PDF Generations)
- **Visualization:** Stacked area chart
- **Timeframe:** Past 24 hours
- **Purpose:** Track PDF generation volume and failures

#### Widget 2: PDF Error Rate (Query Value)
- **Metric:** `sum:api.form212680.pdf.failure{*} / (sum:api.form212680.pdf.success{*} + sum:api.form212680.pdf.failure{*}) * 100`
- **Visualization:** Query value with conditional formatting
  - Green: < 1%
  - Yellow: 1-5%
  - Red: > 5%

#### Widget 3: PDF Generation Volume (Query Value)
- **Metric:** `sum:api.form212680.pdf.success{*}.as_count()`
- **Timeframe:** Past 24 hours
- **Purpose:** Total successful PDF generations

#### Widget 4: Recent PDF Errors (Log Stream)
- **Query:** `service:vets-api status:error "Form212680" "PDF"`
- **Display:** Most recent 10 errors
- **Purpose:** Quick error triage

#### Widget 5: PDF Generation Latency (Timeseries)
- **Metric:** `avg:trace.rack.request.duration{resource_name:"POST /v0/form212680/download_pdf"}`
- **Timeframe:** Past 1 hour
- **Purpose:** Monitor PDF generation performance

---

## Datadog Monitors

### Form 21-2680 Specific Monitors

#### Monitor 1: Low Traffic Detection
- **Name:** `[Aquia] Form 21-2680 - Anomalous Traffic Drop`
- **Type:** Anomaly Detection
- **Metric:** `sum:api.form212680.pdf.success{*}.as_rate()`
- **Alert Condition:** Traffic drops below expected baseline
- **Evaluation Window:** 1 hour
- **Notification:** `#benefits-optimization-aquia`
- **Purpose:** Detect if PDF downloads stop (frontend/routing issue)

#### Monitor 2: PDF Generation Failures
- **Name:** `[Aquia] Form 21-2680 - PDF Generation Failures`
- **Type:** Log Alert
- **Query:** `logs("service:vets-api status:error \"Form212680\" \"PDF\"").index("*").rollup("count").last("15m") > 5`
- **Threshold:** > 5 errors in 15 minutes
- **Notification:** `#benefits-optimization-aquia`
- **Purpose:** Alert on PDF generation issues

**Alert Message:**
```
{{#is_alert}}
⚠️ Form 21-2680 PDF generation failures detected

Count: {{value}} errors in 15 minutes

Action Required:
1. Check PDF template exists: lib/pdf_fill/forms/pdfs/21-2680.pdf
2. Review error logs for patterns
3. Test PDF generation manually
4. Verify PdfFill service health

Dashboard: [Link]
Logs: {{log.link}}

@slack-benefits-optimization-aquia
{{/is_alert}}
```

#### Monitor 3: High 5xx Error Rate
- **Name:** `[Aquia] Form 21-2680 - High 5xx Error Rate`
- **Type:** Metric Alert
- **Metric:** `sum:trace.rack.request.errors{resource_name:"POST /v0/form212680/download_pdf",http.status_code:5*}.as_count()`
- **Threshold:** > 10 errors in 5 minutes
- **Notification:** `#benefits-optimization-aquia`
- **Purpose:** Alert on application/infrastructure issues

**Alert Message:**
```
{{#is_alert}}
🚨 Form 21-2680 experiencing high 5xx error rate

Count: {{value}} errors in 5 minutes

Action Required:
1. Check application health
2. Review recent errors in logs
3. Verify PDF templates exist
4. Check PdfFill service status

@slack-benefits-optimization-aquia
{{/is_alert}}
```

---

## Incident Response

### Response to PDF Generation Failures (Monitor 2)

**Severity:** MEDIUM  
**Response Time:** Within 15 minutes

**Immediate Actions:**

1. **Verify PDF Template Exists**
   ```bash
   docker exec vets-api-web-1 ls -la lib/pdf_fill/forms/pdfs/21-2680.pdf
   ```

2. **Test PDF Generation Manually**
   ```bash
   curl -X POST http://localhost:3000/v0/form212680/download_pdf \
     -H "Content-Type: application/json" \
     -d @test/fixtures/form212680_valid.json
   ```

3. **Check Recent Logs**
   - Query Datadog: `service:vets-api status:error "Form212680" "PDF"`
   - Look for error patterns (missing template, data validation, etc.)

**Investigation:**

4. **Common Causes:**
   - Missing PDF template file
   - Corrupted template
   - PdfFill service issue
   - Invalid form data structure
   - Signature stamping failure

5. **Check PdfFill Service Health**
   ```bash
   docker exec vets-api-web-1 ps aux | grep pdf
   ```

**Remediation:**

6. **If Template Missing:**
   - Verify template in repository: `lib/pdf_fill/forms/pdfs/21-2680.pdf`
   - Redeploy if needed

7. **If Data Validation Issue:**
   - Review form data structure in logs
   - Check for schema changes or unexpected data types

8. **If PdfFill Service Issue:**
   - Restart PdfFill service
   - Check service logs for errors
   - Escalate to infrastructure team if persistent

**Communication:**

9. **Stakeholder Updates**
   - Post in `#benefits-optimization-aquia`
   - Notify product owner if impact > 20 users
   - Document resolution in incident log

---

### Response to Traffic Anomaly (Monitor 1)

**Severity:** MEDIUM  
**Response Time:** Within 10 minutes

**Actions:**

1. **Verify Alert Legitimacy**
   - Check if traffic drop is expected (off-hours, holiday)
   - Compare to historical patterns for PDF downloads

2. **Check Frontend**
   - Verify frontend deployed and accessible
   - Test PDF download button functionality
   - Check for JavaScript errors in browser console

3. **Check Backend**
   - Verify endpoint responding:
   ```bash
   curl -X POST https://staging-api.va.gov/v0/form212680/download_pdf \
     -H "Content-Type: application/json" \
     -d '{"test": "data"}'
   ```
   - Check recent logs for endpoint
   - Verify routes configured correctly

4. **Check Routing & Infrastructure**
   - Verify load balancer configuration
   - Check DNS resolution
   - Verify feature flags (if applicable)

**Remediation:**

5. **If Frontend Issue:**
   - Review recent frontend deployments
   - Check Sentry for frontend errors
   - Contact frontend team

6. **If Backend Issue:**
   - Review recent backend deployments
   - Check for route changes
   - Verify controller and model changes

7. **If Issue Found:**
   - Roll back recent deployment if it caused issue
   - Fix configuration if routing/DNS issue
   - Monitor recovery after fix applied

---

### Response to High 5xx Errors (Monitor 3)

**Severity:** HIGH  
**Response Time:** Within 5 minutes

**Immediate Actions:**

1. **Check Application Health**
   ```bash
   curl https://api.va.gov/health
   ```

2. **Review Recent Errors**
   - Query Datadog: `service:vets-api status:error resource_name:"POST /v0/form212680/download_pdf"`
   - Identify error patterns

3. **Check Infrastructure**
   - Disk space (PDF generation can be disk-intensive)
   - Memory usage
   - Database connectivity
   - File system permissions

**Investigation:**

4. **Identify Error Pattern**
   - All requests failing vs. intermittent
   - Specific error types (500, 502, 503, 504)
   - Correlation with deployments or traffic spikes

**Remediation:**

5. **If Disk Space Issue:**
   - Clear temporary files
   - Verify PDF cleanup is working
   - Check for orphaned PDF files

6. **If Deployment Issue:**
   - Review recent deployments
   - Check for code changes in controller or PDF generation logic
   - Roll back if necessary

7. **If Infrastructure Issue:**
   - Check PdfFill service status
   - Verify file permissions
   - Escalate to DevOps if needed

---

## Useful Queries

### Datadog Log Queries

**Find all Form 21-2680 PDF generations in last 24 hours:**
```
service:vets-api "Form 21-2680" "PDF"
```

**Find all Form 21-2680 errors:**
```
service:vets-api status:error "Form212680"
```

**Find PDF generation errors:**
```
service:vets-api status:error "Form212680" "PDF"
```

**Find errors by specific error type:**
```
service:vets-api status:error "Form212680" "template"
service:vets-api status:error "Form212680" "signature"
```

---

### Performance Queries

**Average PDF generation time:**
```
avg:trace.rack.request.duration{resource_name:"POST /v0/form212680/download_pdf"}
```

**P95 PDF generation time:**
```
p95:trace.rack.request.duration{resource_name:"POST /v0/form212680/download_pdf"}
```

**PDF generation throughput:**
```
sum:api.form212680.pdf.success{*}.as_rate()
```

---

## Validation Checklist

### Pre-Launch

- [ ] StatsD metrics instrumented (`api.form212680.pdf.success`, `api.form212680.pdf.failure`)
- [ ] Rails logging in place (PDF generation events, errors)
- [ ] APM tracing enabled
- [ ] Dashboard widgets created for Form 21-2680
- [ ] 3 form-specific monitors created (traffic, PDF failures, 5xx)
- [ ] Slack notifications configured (`#benefits-optimization-aquia`)
- [ ] Incident response procedures documented
- [ ] Team trained on monitoring and incident response
- [ ] PDF template verified in repository
- [ ] Manual PDF generation tested

### Post-Launch (Week 1)

- [ ] Daily dashboard review
- [ ] Monitor for false positive alerts
- [ ] Tune thresholds if needed
- [ ] Document any incidents
- [ ] Verify PDF generation performance acceptable
- [ ] Check for any PDF generation errors
- [ ] Validate cleanup of temporary files

---

## Contact Information

**Team:** Aquia (Benefits Intake Optimization)  
**Slack Channel:** `#benefits-optimization-aquia`

**Key Contacts:**
- Product Owner: [Name]
- Tech Lead: [Name]
- Backend Engineers: Cameron Testerman, [Others]
- Frontend Engineers: [Names]

**External Support:**
- Platform Support: `#vfs-platform-support`
- DevOps/Infrastructure: [Contact info]

---

## Why QA7 Does Not Apply

**QA7 Requirement:** "Product teams must verify that they have taken steps to prevent all silent failures in asynchronous form submissions..."

**Form 21-2680 Rationale:**
1. ✅ **No Asynchronous Submission:** Form 21-2680 does not submit data to VA systems. It only generates a PDF for download.
2. ✅ **Synchronous Processing:** All PDF generation is synchronous. Users receive immediate feedback (success or error).
3. ✅ **Immediate User Notification:** If PDF generation fails, the user sees an error immediately in the browser.
4. ✅ **No Silent Failure Risk:** There is no scenario where a user believes their form was successfully submitted when it was not, because there is no submission process.

**Conclusion:** QA7 is not applicable to Form 21-2680 because it does not use asynchronous form submission.

---

## Related Documentation

- **Platform QA Standards:** https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards
- **QA7 Silent Failures Analysis:** [qa7-silent-failures.md](./qa7-silent-failures.md)
- **QA Standards:** [qa-standards.md](./qa-standards.md)
