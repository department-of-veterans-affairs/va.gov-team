# Form 21-4140 Submission Playbook - Employment Questionnaire
_last updated: November 6, 2025_
## Audience
Team members responding to Datadog monitor alerts for Form 21-4140 (Employment Questionnaire) submission errors or production issues with the `employment_qxuestionairres` module.
# Required access
[OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
[DSVA Slack](https://dsva.slack.com)
Access to vets-api repository and logs (for deeper investigation)
# Background
Form 21-4140 is the “Employment Questionnaire” form used for reporting employment information related to VA benefits. The form is submitted through the `EmploymentQuestionnaires` module and processed via the Lighthouse Benefits Intake API.
**Key Components:**
**Module:** `modules/employment_questionnaires`
**Form ID:** `21-4140`
**API Endpoint:** `/employment_questionnaires/v0/claims` (POST)
**Alternative Endpoint:** `/employment_questionnaires/v0/form4140` (POST)
**Controller:** `EmploymentQuestionnaires::V0::ClaimsController`
**Background Job:** `EmploymentQuestionnaires::BenefitsIntake::SubmitClaimJob`
**Monitor Class:** `EmploymentQuestionnaires::Monitor`
**Feature Flag:** `employment_questionnaires_form_enabled` (Note: This form currently shares feature flags with medical expense reports)
# Datadog Metrics & Monitoring
## StatsD Keys
**API metrics:** `api.employment_questionnaires`
**Sidekiq metrics:** `worker.lighthouse.employment_questionnaires_intake_job`
**Service tag:** `employment-questionairres-application`
**Form ID tag:** `form_id:21-4140`
## Feature Flags
⚠️ **Note:** This module currently uses employment_questionnaires feature flags:
`employment_questionnaires_form_enabled` - Main toggle for form submissions
`employment_questionnaires_browser_monitoring_enabled` - Frontend monitoring
`employment_questionnaires_error_email_notification` - Error notifications to users
`employment_questionnaires_received_email_notification` - Confirmation emails
`employment_questionnaires_submitted_email_notification` - Submission emails
# Steps
## 1. Initial Triage
Open a tracking issue at [va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team/issues) for tracking and communication
Check Datadog for recent errors using the service tag `employment-questionairres-application` and form ID tag `form_id:21-4140`
Review the frequency and volume of errors - is this a spike or ongoing issue?
Check if the `employment_questionnaires_form_enabled` feature flag is enabled and functioning correctly (note the shared flag)
## 2. Check API Layer (Controller)
**Endpoints:**
`POST /employment_questionnaires/v0/claims`
`POST /employment_questionnaires/v0/form4140`
Common API-level issues:
**Authentication failures:** Check that user authentication is working (note: no explicit `before_action :authenticate_user!` - check if inherited)
**Feature flag disabled:** Verify `employment_questionnaires_form_enabled` is enabled (shared flag)
**Validation errors:** Look for `Common::Exceptions::ValidationErrors` - indicates invalid form data
**ActiveRecord::RecordNotFound:** Check if claims are being saved to the database correctly
**Datadog Query:**
```
service:employment-questionairres-application env:production status:error
```
**Key Log Messages to Search:**
`EmploymentQuestionnaires::Monitor` log entries with `create_attempt`, `create_validation_error`, `create_success`, or `create_error`
Controller errors in `EmploymentQuestionnaires::V0::ClaimsController`
## 3. Check Background Job Processing
**Job:** `EmploymentQuestionnaires::BenefitsIntake::SubmitClaimJob`
**Queue:** `low`
**Retry policy:** 16 retries (approximately 2 days, 1 hour, 47 minutes)
Common job-level issues:
**Benefits Intake API failures:** Check for Lighthouse API errors or timeouts
**PDF generation failures:** Issues with `to_pdf` or PDF stamping
**Attachment processing errors:** Problems with `process_document` or attachment validation
**Missing claim record:** `EmploymentQuestionnairesBenefitIntakeError` - claim not found in database
**Datadog Query:**
```
service:employment-questionairres-application source:worker.lighthouse.employment_questionnaires_intake_job
```
**Key Log Messages to Search:**
`track_submission_success` - successful submissions
`track_submission_retry` - retrying after failure
`track_submission_exhaustion` - job retries exhausted (critical)
`benefits_intake_uuid` tag - Lighthouse upload UUID for tracking
## 4. Check Lighthouse Benefits Intake Integration
The job uploads PDFs to the Lighthouse Benefits Intake API. Check for:
**Network timeouts:** Connection issues to Lighthouse API
**PDF validation failures:** Documents not meeting Benefits Intake specifications
**15-minute upload window:** Uploads must complete within 15 minutes of document generation
**Metadata issues:** Problems with `generate_metadata` or malformed submission data
**Benefits Intake UUID:** Check Datadog traces for the `benefits_intake_uuid` tag to track submissions in Lighthouse systems.
## 5. Check Email Notifications
If users report not receiving emails, verify feature flags:
`employment_questionnaires_received_email_notification`
`employment_questionnaires_submitted_email_notification`
`employment_questionnaires_error_email_notification`
⚠️ **Note:** Email notifications reference `EmploymentQuestionnaires::NotificationEmail` in the job code - this may be a bug or shared functionality.
## 6. Common Error Scenarios
### Scenario A: High Validation Error Rate
**Symptoms:** Many `create_validation_error` log entries
**Diagnosis:**
Check recent frontend changes - form schema mismatch?
Review validation rules in `EmploymentQuestionnaires::SavedClaim` model
Look for patterns in validation errors (specific fields failing)
**Resolution:**
If schema mismatch, coordinate with frontend team
If legitimate validation issue, may need hotfix to validation logic
### Scenario B: Lighthouse API Failures
**Symptoms:** Jobs retrying repeatedly, `track_submission_retry` entries
**Diagnosis:**
Check Lighthouse API status
Review error messages for API error codes
Check network connectivity to Lighthouse
**Resolution:**
If Lighthouse outage, monitor and wait for recovery (jobs will retry)
If persistent API issue, contact Lighthouse team
Check Sentry for detailed error traces
### Scenario C: PDF Generation Failures
**Symptoms:** Errors during `to_pdf` or `process_document`
**Diagnosis:**
Check for errors in `Va214140` PDF filler class
Review attachment processing errors
Verify PDF templates exist at expected paths
**Resolution:**
Check `/modules/employment_questionnaires/lib/employment_questionnaires/pdf_fill/pdfs/21-4140.pdf` exists
Review recent changes to PDF generation code
Check for PDF corruption or template issues
### Scenario D: Attachment Processing Failures
**Symptoms:** `track_process_attachment_error` log entries
**Diagnosis:**
Check `PersistentAttachments::Sanitizer` for sanitization failures
Review attachment file size/type restrictions
Look for malware/virus scan failures
**Resolution:**
Review attachment validation rules
Check ClamAV (antivirus) service status
Verify attachment storage (S3) is accessible
### Scenario E: Feature Flag Confusion
**Symptoms:** Form not working despite appearing enabled
**Diagnosis:**
The form uses `employment_questionnaires_form_enabled` flag - this may cause confusion
Check if the flag is disabled thinking it only affects medical expense reports
**Resolution:**
Verify `employment_questionnaires_form_enabled` is enabled
Note for future: this module should probably have its own feature flags
Consider filing a tech debt ticket to separate feature flags
## 7. Escalation
### Platform Team Contact
For infrastructure, Lighthouse API, or system-level issues:
Post in **#vfs-platform-support** Slack channel
Tag relevant platform engineers
Include: service tag, time range, error frequency, Datadog links
### Backend Team Contact
For code-level issues with the employment_questionnaires module:
Review recent PRs to `modules/employment_questionnaires`
Check git blame for recent changes to affected code
Post in **#benefits-portfolio** or relevant team channel
### Lighthouse Team Contact
For Benefits Intake API issues:
Check Lighthouse API status page
Contact via appropriate Lighthouse support channel
Provide `benefits_intake_uuid` from Datadog traces
## 8. Investigation Tools
### Datadog Dashboard Queries
```
# All employment questionairres events
service:employment-questionairres-application env:production
# Failed submissions
service:employment-questionairres-application status:error source:worker.lighthouse.employment_questionnaires_intake_job
# API errors
service:employment-questionairres-application status:error @http.url_details.path:/employment_questionnaires/v0/claims
# Track specific claim by ID
service:employment-questionairres-application @claim_id:<claim_id>
# Track specific submission by Lighthouse UUID
service:employment-questionairres-application @benefits_intake_uuid:<uuid>
```
### Rails Console Investigation
```ruby
# Find claim by ID
claim = EmploymentQuestionnaires::SavedClaim.find(<claim_id>)
# Check claim status
claim.inspect
# Find recent failed claims
EmploymentQuestionnaires::SavedClaim.where(‘created_at > ?’, 1.hour.ago).where(...)
# Check feature flag status (note the shared flag name)
Flipper.enabled?(:employment_questionnaires_form_enabled)
Flipper.enabled?(:employment_questionnaires_form_enabled, user)
```
### Sidekiq Web UI
Check queue depth for `low` queue (where SubmitClaimJob runs)
Review retry queue for stuck jobs
Check for dead jobs (retries exhausted)
## 9. Temporary Mitigation
If experiencing widespread failures:
**Disable feature flag** (temporary measure):
 ```ruby
 Flipper.disable(:employment_questionnaires_form_enabled)
 ```
 ⚠️ **WARNING: This will ALSO disable medical expense reports forms** - coordinate with stakeholders first
**Monitor retry queue** - jobs will automatically retry for ~2 days
**Manual reprocessing** - if needed after fix:
 ```ruby
 # Find failed claims and resubmit
 EmploymentQuestionnaires::SavedClaim.where(...).each do |claim|
  EmploymentQuestionnaires::BenefitsIntake::SubmitClaimJob.perform_async(claim.id, claim.user_account_uuid)
 end
 ```
## 10. Known Issues & Tech Debt
### Shared Feature Flags
The employment_questionnaires module currently shares feature flags with employment_questionnaires:
Flag name: `employment_questionnaires_form_enabled`
Impact: Disabling affects both forms
Recommendation: Create dedicated `employment_questionnaires_form_enabled` flag
### Notification Email Reference
The job code references `EmploymentQuestionnaires::NotificationEmail` instead of an employment-specific class:
File: `lib/employment_questionnaires/benefits_intake/submit_claim_job.rb` line 5
May indicate shared or copied code
Verify email notifications are working correctly for this form
## 11. Post-Incident
Update tracking issue with resolution details
Document any new error patterns or solutions
Consider adding new monitors or alerts if gaps identified
Update this playbook with lessons learned
If feature flag confusion was involved, prioritize separating flags
