# Form 21-8940V1 Submission Playbook - Increased Compensation Based on Unemployability
_last updated: November 6, 2025_  

## Audience 
Team members responding to Datadog monitor alerts for Form 21-8940V1 (Application for Increased Compensation Based on Unemployability) submission errors or production issues with the `increase_compensation` module.

# Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](https://dsva.slack.com)
- Access to vets-api repository and logs (for deeper investigation)

# Background
Form 21-8940V1 is the "Application for Increased Compensation Based on Unemployability" form. This is a NEW implementation (not to be confused with the older Form 8940 related to disability compensation claims). The form is submitted through the `IncreaseCompensation` module and processed via the Lighthouse Benefits Intake API.

**Key Components:**
- **Module:** `modules/increase_compensation`
- **Form ID:** `21-8940V1`
- **API Endpoint:** `/increase_compensation/v0/claims` (POST)
- **Controller:** `IncreaseCompensation::V0::ClaimsController`
- **Background Job:** `IncreaseCompensation::BenefitsIntake::SubmitClaimJob`
- **Monitor Class:** `IncreaseCompensation::Monitor`
- **Feature Flag:** `increase_compensation_form_enabled`

# Datadog Metrics & Monitoring

## StatsD Keys
- **API metrics:** `api.increase_compensation`
- **Sidekiq metrics:** `worker.lighthouse.increase_compensation_intake_job`
- **Service tag:** `increase-compensation-application`
- **Form ID tag:** `form_id:21-8940V1`

## Feature Flags
- `increase_compensation_form_enabled` - Main toggle for form submissions
- `increase_compensation_browser_monitoring_enabled` - Frontend monitoring
- `increase_compensation_error_email_notification` - Error notifications to users
- `increase_compensation_received_email_notification` - Confirmation emails
- `increase_compensation_submitted_email_notification` - Submission emails
- `increase_compensation_persistent_attachment_error_email_notification` - Attachment error notifications

# Steps

## 1. Initial Triage
- Open a tracking issue at [va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team/issues) for tracking and communication
- Check Datadog for recent errors using the service tag `increase-compensation-application` and form ID tag `form_id:21-8940V1`
- Review the frequency and volume of errors - is this a spike or ongoing issue?
- Check if the `increase_compensation_form_enabled` feature flag is enabled and functioning correctly

## 2. Check API Layer (Controller)
**Endpoint:** `POST /increase_compensation/v0/claims`

Common API-level issues:
- **Authentication failures:** Check that `before_action :authenticate_user!` is working
- **Feature flag disabled:** Verify `increase_compensation_form_enabled` is enabled for affected users
- **Validation errors:** Look for `Common::Exceptions::ValidationErrors` - indicates invalid form data
- **ActiveRecord::RecordNotFound:** Check if claims are being saved to the database correctly

**Datadog Query:**
```
service:increase-compensation-application env:production status:error
```

**Key Log Messages to Search:**
- `IncreaseCompensation::Monitor` log entries with `create_attempt`, `create_validation_error`, `create_success`, or `create_error`
- Controller errors in `IncreaseCompensation::V0::ClaimsController`

## 3. Check Background Job Processing
**Job:** `IncreaseCompensation::BenefitsIntake::SubmitClaimJob`
**Queue:** `low`
**Retry policy:** 16 retries (approximately 2 days, 1 hour, 47 minutes)

Common job-level issues:
- **Benefits Intake API failures:** Check for Lighthouse API errors or timeouts
- **PDF generation failures:** Issues with `to_pdf` or PDF stamping
- **Attachment processing errors:** Problems with `process_document` or attachment validation
- **Missing claim record:** `IncreaseCompensationBenefitIntakeError` - claim not found in database

**Datadog Query:**
```
service:increase-compensation-application source:worker.lighthouse.increase_compensation_intake_job
```

**Key Log Messages to Search:**
- `track_submission_success` - successful submissions
- `track_submission_retry` - retrying after failure
- `track_submission_exhaustion` - job retries exhausted (critical)
- `benefits_intake_uuid` tag - Lighthouse upload UUID for tracking

## 4. Check Lighthouse Benefits Intake Integration
The job uploads PDFs to the Lighthouse Benefits Intake API. Check for:
- **Network timeouts:** Connection issues to Lighthouse API
- **PDF validation failures:** Documents not meeting Benefits Intake specifications
- **15-minute upload window:** Uploads must complete within 15 minutes of document generation
- **Metadata issues:** Problems with `generate_metadata` or malformed submission data

**Benefits Intake UUID:** Check Datadog traces for the `benefits_intake_uuid` tag to track submissions in Lighthouse systems.

## 5. Check Email Notifications
If users report not receiving emails, verify feature flags:
- `increase_compensation_received_email_notification`
- `increase_compensation_submitted_email_notification`
- `increase_compensation_error_email_notification`
- `increase_compensation_persistent_attachment_error_email_notification`

Email sending is handled by `IncreaseCompensation::NotificationEmail` class.

## 6. Common Error Scenarios

### Scenario A: High Validation Error Rate
**Symptoms:** Many `create_validation_error` log entries
**Diagnosis:**
- Check recent frontend changes - form schema mismatch?
- Review validation rules in `IncreaseCompensation::SavedClaim` model
- Look for patterns in validation errors (specific fields failing)

**Resolution:**
- If schema mismatch, coordinate with frontend team
- If legitimate validation issue, may need hotfix to validation logic

### Scenario B: Lighthouse API Failures
**Symptoms:** Jobs retrying repeatedly, `track_submission_retry` entries
**Diagnosis:**
- Check Lighthouse API status
- Review error messages for API error codes
- Check network connectivity to Lighthouse

**Resolution:**
- If Lighthouse outage, monitor and wait for recovery (jobs will retry)
- If persistent API issue, contact Lighthouse team
- Check Sentry for detailed error traces

### Scenario C: PDF Generation Failures
**Symptoms:** Errors during `to_pdf` or `process_document`
**Diagnosis:**
- Check for errors in `Va218940v1` PDF filler class
- Review attachment processing errors
- Verify PDF templates exist at expected paths

**Resolution:**
- Check `/modules/increase_compensation/lib/increase_compensation/pdf_fill/pdfs/21-8940V1.pdf` exists
- Review recent changes to PDF generation code
- Check for PDF corruption or template issues

### Scenario D: Attachment Processing Failures
**Symptoms:** `track_process_attachment_error` log entries
**Diagnosis:**
- Check `PersistentAttachments::Sanitizer` for sanitization failures
- Review attachment file size/type restrictions
- Look for malware/virus scan failures

**Resolution:**
- Review attachment validation rules
- Check ClamAV (antivirus) service status
- Verify attachment storage (S3) is accessible

## 7. Escalation

### Platform Team Contact
For infrastructure, Lighthouse API, or system-level issues:
- Post in **#vfs-platform-support** Slack channel
- Tag relevant platform engineers
- Include: service tag, time range, error frequency, Datadog links

### Backend Team Contact
For code-level issues with the increase_compensation module:
- Review recent PRs to `modules/increase_compensation`
- Check git blame for recent changes to affected code
- Post in **#benefits-portfolio** or relevant team channel

### Lighthouse Team Contact
For Benefits Intake API issues:
- Check Lighthouse API status page
- Contact via appropriate Lighthouse support channel
- Provide `benefits_intake_uuid` from Datadog traces

## 8. Investigation Tools

### Datadog Dashboard Queries
```
# All increase compensation events
service:increase-compensation-application env:production

# Failed submissions
service:increase-compensation-application status:error source:worker.lighthouse.increase_compensation_intake_job

# API errors
service:increase-compensation-application status:error @http.url_details.path:/increase_compensation/v0/claims

# Track specific claim by ID
service:increase-compensation-application @claim_id:<claim_id>

# Track specific submission by Lighthouse UUID
service:increase-compensation-application @benefits_intake_uuid:<uuid>
```

### Rails Console Investigation
```ruby
# Find claim by ID
claim = IncreaseCompensation::SavedClaim.find(<claim_id>)

# Check claim status
claim.inspect

# Find recent failed claims
IncreaseCompensation::SavedClaim.where('created_at > ?', 1.hour.ago).where(...)

# Check feature flag status
Flipper.enabled?(:increase_compensation_form_enabled)
Flipper.enabled?(:increase_compensation_form_enabled, user)
```

### Sidekiq Web UI
- Check queue depth for `low` queue (where SubmitClaimJob runs)
- Review retry queue for stuck jobs
- Check for dead jobs (retries exhausted)

## 9. Temporary Mitigation

If experiencing widespread failures:

1. **Disable feature flag** (temporary measure):
   ```ruby
   Flipper.disable(:increase_compensation_form_enabled)
   ```
   ⚠️ **This will prevent all new submissions** - coordinate with stakeholders first

2. **Monitor retry queue** - jobs will automatically retry for ~2 days

3. **Manual reprocessing** - if needed after fix:
   ```ruby
   # Find failed claims and resubmit
   IncreaseCompensation::SavedClaim.where(...).each do |claim|
     IncreaseCompensation::BenefitsIntake::SubmitClaimJob.perform_async(claim.id, claim.user_account_uuid)
   end
   ```

## 10. Post-Incident

- Update tracking issue with resolution details
- Document any new error patterns or solutions
- Consider adding new monitors or alerts if gaps identified
- Update this playbook with lessons learned
