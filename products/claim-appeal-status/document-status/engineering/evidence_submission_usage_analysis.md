# EvidenceSubmission Model Usage Analysis

## Overview
The `EvidenceSubmission` model tracks document uploads to VA benefits claims through both the Lighthouse Benefits Documents API and the legacy (DEPRECATED) EVSS (Enterprise Veteran Self-Service) system. This document provides a comprehensive analysis of where and how the model is used throughout the vets-api codebase.

---

## Table of Contents
1. [Model Creation](#model-creation)
2. [Model Updates](#model-updates)
3. [Model Queries](#model-queries)
4. [Model Deletion](#model-deletion)
5. [Controllers](#controllers)
6. [Services](#services)
7. [Sidekiq Jobs](#sidekiq-jobs)
8. [Scheduled Jobs](#scheduled-jobs)
9. [Status Flow](#status-flow)
10. [Integration Points](#integration-points)
11. [Feature Flags](#feature-flags)
12. [Important Notes](#important-notes)
13. [Frontend Integration](#frontend-integration-vets-website)
14. [Summary Statistics](#summary-statistics)
15. [Additional Resources](#additional-resources)

---

## Model Creation

### 1. Lighthouse Benefits Documents Service
**File**: [`lib/lighthouse/benefits_documents/service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/service.rb#L163-L179)
**Method**: `create_initial_evidence_submission`
**Lines**: 163-179

```ruby
user_account = UserAccount.find(@user.user_account_uuid)
es = EvidenceSubmission.create(
  claim_id: document.claim_id,
  tracked_item_id: document.tracked_item_id&.first,
  upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:CREATED],
  user_account:,
  file_size: File.size(document.file_obj),
  template_metadata: { personalisation: create_personalisation(document) }.to_json
)
StatsD.increment('cst.lighthouse.document_uploads.evidence_submission_record_created')
```

**Trigger**: When a user uploads a document through the Lighthouse Benefits Documents API
**Feature Flag**: `cst_send_evidence_submission_failure_emails` AND not `cst_synchronous_evidence_uploads`
**Metrics**: `cst.lighthouse.document_uploads.evidence_submission_record_created`

### 2. EVSS Claim Service (DEPRECATED)
**File**: [`app/services/evss_claim_service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/services/evss_claim_service.rb#L134-L149)
**Method**: `create_initial_evidence_submission`
**Lines**: 134-149

```ruby
user_account = UserAccount.find(@user.user_account_uuid)
es = EvidenceSubmission.create(
  claim_id: document.evss_claim_id,
  tracked_item_id: document.tracked_item_id,
  upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:CREATED],
  user_account:,
  template_metadata: { personalisation: create_personalisation(document) }.to_json
)
StatsD.increment('cst.evss.document_uploads.evidence_submission_record_created')
```

**Trigger**: When a user uploads a document through the legacy EVSS system
**Feature Flag**: `cst_send_evidence_submission_failure_emails`
**Metrics**: `cst.evss.document_uploads.evidence_submission_record_created`

---

## Model Updates

### 1. Lighthouse Document Upload Job - Job Details
**File**: [`app/sidekiq/lighthouse/evidence_submissions/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb#L184-L192)
**Method**: `update_evidence_submission_with_job_details`
**Lines**: 184-192

```ruby
def update_evidence_submission_with_job_details(evidence_submission)
  evidence_submission.update!(
    upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:QUEUED],
    job_id: jid,
    job_class: self.class
  )
  StatsD.increment('cst.lighthouse.document_uploads.evidence_submission_record_updated.queued')
  self.class.add_log('QUEUED', evidence_submission.claim_id, evidence_submission.id, jid)
end
```

**When**: After document upload job is queued
**Status**: CREATED → QUEUED
**Metrics**: `cst.lighthouse.document_uploads.evidence_submission_record_updated.queued`

### 2. Lighthouse Document Upload Job - In Progress
**File**: [`app/sidekiq/lighthouse/evidence_submissions/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb#L197-L210)
**Method**: `update_evidence_submission_for_in_progress`
**Lines**: 197-210

```ruby
def update_evidence_submission_for_in_progress(response, evidence_submission)
  request_successful = response.body.dig('data', 'success')
  if request_successful
    request_id = response.body.dig('data', 'requestId')
    evidence_submission.update!(
      request_id:,
      upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:PENDING]
    )
    StatsD.increment('cst.lighthouse.document_uploads.evidence_submission_record_updated.added_request_id')
    self.class.add_log('PENDING', evidence_submission.claim_id, evidence_submission.id, jid)
  else
    raise StandardError
  end
end
```

**When**: After successful submission to Lighthouse API
**Status**: QUEUED → PENDING
**Metrics**: `cst.lighthouse.document_uploads.evidence_submission_record_updated.added_request_id`

### 3. Lighthouse Document Upload Job - Failure (Exhausted Retries)
**File**: [`app/sidekiq/lighthouse/evidence_submissions/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb#L63-L79)
**Method**: `update_evidence_submission_for_failure` (class method)
**Lines**: 63-79

```ruby
def self.update_evidence_submission_for_failure(evidence_submission, msg)
  current_personalisation = JSON.parse(evidence_submission.template_metadata)['personalisation']
  evidence_submission.update!(
    upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:FAILED],
    failed_date: DateTime.current,
    acknowledgement_date: (DateTime.current + 30.days),
    error_message: 'Lighthouse::EvidenceSubmissions::DocumentUpload document upload failure',
    template_metadata: {
      personalisation: update_personalisation(current_personalisation, msg['failed_at'])
    }.to_json
  )
  add_log('FAILED', evidence_submission.claim_id, evidence_submission.id, msg['jid'])
end
```

**When**: Job retries exhausted (after 2d 1h 47m 12s)
**Status**: CREATED/QUEUED → FAILED

### 4. EVSS Document Upload Job - Job Details (DEPRECATED)
**File**: [`app/sidekiq/evss/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L200-L208)
**Method**: `update_evidence_submission_with_job_details`
**Lines**: 200-208

```ruby
def update_evidence_submission_with_job_details(evidence_submission)
  evidence_submission.update!(
    upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:QUEUED],
    job_id: jid,
    job_class: self.class
  )
  StatsD.increment('cst.evss.document_uploads.evidence_submission_record_updated.queued')
  self.class.add_log('QUEUED', evidence_submission.claim_id, evidence_submission.id, jid)
end
```

**When**: After document upload job is queued
**Status**: CREATED → QUEUED
**Metrics**: `cst.evss.document_uploads.evidence_submission_record_updated.queued`

### 5. EVSS Document Upload Job - Success
**File**: [`app/sidekiq/evss/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L210-L217)
**Method**: `update_evidence_submission_for_success`
**Lines**: 210-217

```ruby
def update_evidence_submission_for_success(evidence_submission)
  evidence_submission.update!(
    upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:SUCCESS],
    delete_date: (DateTime.current + 60.days)
  )
  StatsD.increment('cst.evss.document_uploads.evidence_submission_record_updated.success')
  self.class.add_log('SUCCESS', evidence_submission.claim_id, evidence_submission.id, jid)
end
```

**When**: After successful upload to EVSS
**Status**: QUEUED → SUCCESS
**Sets**: `delete_date` to 60 days from now
**Metrics**: `cst.evss.document_uploads.evidence_submission_record_updated.success`

### 6. EVSS Document Upload Job - Failure (Exhausted Retries) (DEPRECATED)
**File**: [`app/sidekiq/evss/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L87-L106)
**Method**: `update_evidence_submission_for_failure` (class method)
**Lines**: 87-106

```ruby
def self.update_evidence_submission_for_failure(evidence_submission, msg)
  current_personalisation = JSON.parse(evidence_submission.template_metadata)['personalisation']
  evidence_submission.update!(
    upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:FAILED],
    failed_date: DateTime.current,
    acknowledgement_date: (DateTime.current + 30.days),
    error_message: 'EVSS::DocumentUpload document upload failure',
    template_metadata: {
      personalisation: update_personalisation(current_personalisation, msg['failed_at'])
    }.to_json
  )
  add_log('FAILED', evidence_submission.claim_id, evidence_submission.id, msg['jid'])
  message = "#{name} EvidenceSubmission updated"
  StatsD.increment('silent_failure_avoided_no_confirmation',
                   tags: ['service:claim-status', "function: #{message}"])
end
```

**When**: Job retries exhausted (after ~1 day)
**Status**: CREATED/QUEUED → FAILED

### 7. Upload Status Updater - Failed
**File**: [`lib/lighthouse/benefits_documents/upload_status_updater.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/upload_status_updater.rb#L106-L116)
**Method**: `process_failure`
**Lines**: 106-116

```ruby
def process_failure
  @pending_evidence_submission.update!(
    upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:FAILED],
    failed_date: DateTime.now.utc,
    acknowledgement_date: (DateTime.current + 30.days),
    error_message: @lighthouse_document_status_response['error'],
    template_metadata: {
      personalisation: update_personalisation
    }.to_json
  )
end
```

**When**: Lighthouse polling detects a failed upload
**Status**: PENDING → FAILED

### 8. Upload Status Updater - Success
**File**: [`lib/lighthouse/benefits_documents/upload_status_updater.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/upload_status_updater.rb#L125-L130)
**Method**: `process_upload`
**Lines**: 125-130

```ruby
def process_upload
  @pending_evidence_submission.update!(
    upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:SUCCESS],
    delete_date: (DateTime.current + 60.days)
  )
end
```

**When**: Lighthouse polling detects a successful upload
**Status**: PENDING → SUCCESS
**Sets**: `delete_date` to 60 days from now

### 9. VA Notify Email Callback - Success
**File**: [`app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb#L14-L19)
**Method**: `call` (class method)
**Lines**: 14-19

```ruby
when 'delivered'
  # Email successfully delivered - set delete_date for retention policy cleanup
  es.update(
    va_notify_status: BenefitsDocuments::Constants::VANOTIFY_STATUS[:SUCCESS],
    delete_date: DateTime.current + 60.days
  )
```

**When**: VA Notify confirms email delivery
**Sets**: `delete_date` to 60 days from now (enables automatic deletion)

### 10. VA Notify Email Callback - Failed
**File**: [`app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb#L20-L25)
**Method**: `call` (class method)
**Lines**: 20-25

```ruby
when 'permanent-failure', 'temporary-failure'
  # Email delivery failed - do NOT set delete_date so record is retained for manual intervention
  es.update(va_notify_status: BenefitsDocuments::Constants::VANOTIFY_STATUS[:FAILED])
```

**When**: VA Notify reports email delivery failure (permanent or temporary)
**Note**: Does NOT set `delete_date` so record is retained indefinitely for manual intervention

### 11. Failure Notification Email Job - Record Email
**File**: [`app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb#L58-L64)
**Method**: `record_email_send_success`
**Lines**: 58-64

```ruby
def record_email_send_success(upload, response)
  # Update evidence_submissions table record with the va_notify_id and va_notify_date
  # Note: delete_date is set in VANotifyEmailStatusCallback when delivery is confirmed
  upload.update(va_notify_id: response.id, va_notify_date: DateTime.current)
  message = "#{upload.job_class} va notify failure email queued"
  ::Rails.logger.info(message)
end
```

**When**: Email successfully queued with VA Notify

---

## Model Queries

### 1. Benefits Claims Controller - Evidence Submission Queries
**File**: [`app/controllers/v0/benefits_claims_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb)

**Query Locations**:
- [Line 133](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L133) - Get all failed submissions for user
- [Line 335](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L335) - Get all evidence submissions for claim(s)
- [Line 320](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L320) - Get status counts for claims
- [Lines 356-358](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L356-L358) - Get pending submissions with request_id for polling

```ruby
# Get all failed submissions for user (Line 133)
EvidenceSubmission.failed.where(user_account: current_user_account.id)

# Get all evidence submissions for claim(s) (Line 335)
EvidenceSubmission.where(claim_id: claim_ids)

# Get status counts for claims (Line 320)
evidence_submissions.group(:upload_status).count

# Get pending submissions for on-demand polling (Lines 356-358)
evidence_submissions.where(
  upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:PENDING]
).where.not(request_id: nil)
```

### 2. Evidence Submissions Controller
**Note**: The standalone `EvidenceSubmissionsController` does not exist in the CST codebase. Evidence submission queries for CST are handled through the `BenefitsClaimsController` endpoint `failed_upload_evidence_submissions`.

**Endpoint**: `GET /v0/benefits_claims/failed_upload_evidence_submissions`
**Controller Method**: [`failed_upload_evidence_submissions`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L116-L122)
**Lines**: 116-122

```ruby
def failed_upload_evidence_submissions
  if Flipper.enabled?(:cst_show_document_upload_status, @current_user)
    render json: { data: filter_failed_evidence_submissions }
  else
    render json: { data: [] }
  end
end
```

### 3. Document Upload Polling Job
**File**: [`app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb#L18-L21)
**Lines**: 18-21

```ruby
def perform
  successful_documents_before_polling = EvidenceSubmission.completed.count
  failed_documents_before_polling = EvidenceSubmission.failed.count
  pending_evidence_submissions = EvidenceSubmission.pending
  # ...
end
```

### 4. Delete Evidence Submission Records Job
**File**: [`app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb#L16-L30)
**Lines**: 16-30

```ruby
def perform
  record_count = EvidenceSubmission.all.count

  # Delete successful uploads that have reached their retention period
  deleted_success_records = delete_records_by_status(
    BenefitsDocuments::Constants::UPLOAD_STATUS[:SUCCESS]
  )

  # Delete failed uploads that have reached their retention period
  # (only those with delete_date set, meaning notification email was successfully sent)
  deleted_failed_records = delete_records_by_status(
    BenefitsDocuments::Constants::UPLOAD_STATUS[:FAILED]
  )
  # ...
end

def delete_records_by_status(status)
  EvidenceSubmission.where(
    delete_date: ..DateTime.current,
    upload_status: status
  ).destroy_all
end
```

**Note**: This job now deletes both SUCCESS and FAILED records when their `delete_date` has passed. For FAILED records, `delete_date` is only set when the failure notification email is successfully delivered.

### 5. Failure Notification Email Job
**File**: [`app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb#L32-L34)
**Lines**: 32-34

```ruby
# Fetches FAILED evidence submission records for BenefitsDocuments that dont have a va_notify_date
def failed_uploads
  @failed_uploads ||= EvidenceSubmission.va_notify_email_not_queued
end
```

### 6. VA Notify Email Status Callback
**File**: [`app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb#L8-L11)
**Lines**: 8-11

```ruby
def self.call(notification)
  es = EvidenceSubmission.find_by(va_notify_id: notification.notification_id)
  api_service_name = get_api_service_name(es.job_class)
  status = notification.status
  # ...
end
```

### 7. Benefits Documents Service - Duplicate Detection
**File**: [`lib/lighthouse/benefits_documents/service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/service.rb#L250-L272)
**Method**: `presumed_duplicate?`
**Lines**: 250-272

```ruby
def presumed_duplicate?(claim_id, file)
  user_account = UserAccount.find_by(id: @user.user_account_uuid)
  es = EvidenceSubmission.where(
    claim_id:,
    user_account:,
    upload_status: [
      BenefitsDocuments::Constants::UPLOAD_STATUS[:CREATED],
      BenefitsDocuments::Constants::UPLOAD_STATUS[:QUEUED],
      BenefitsDocuments::Constants::UPLOAD_STATUS[:PENDING]
    ]
  )
  return false unless es.exists?

  es.find_each do |submission|
    filename = JSON.parse(submission.template_metadata).dig('personalisation', 'file_name')
    if (filename == file.original_filename) &&
       (submission.file_size.nil? || submission.file_size == File.size(file))
      return true
    end
  end

  false
end
```

**Purpose**: Prevent duplicate file uploads by checking for existing submissions with same claim_id, user_account, file_name, and file_size

---

## Model Deletion

### Automatic Deletion - Delete Evidence Submission Records Job
**File**: [`app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb#L16-L43)
**Schedule**: Daily at 6:00 AM ET
**Lines**: 16-43

```ruby
def perform
  record_count = EvidenceSubmission.all.count

  # Delete successful uploads that have reached their retention period
  deleted_success_records = delete_records_by_status(
    BenefitsDocuments::Constants::UPLOAD_STATUS[:SUCCESS]
  )

  # Delete failed uploads that have reached their retention period
  # (only those with delete_date set, meaning notification email was successfully sent)
  deleted_failed_records = delete_records_by_status(
    BenefitsDocuments::Constants::UPLOAD_STATUS[:FAILED]
  )

  total_deleted = deleted_success_records.size + deleted_failed_records.size

  StatsD.increment("#{STATSD_KEY_PREFIX}.count", deleted_success_records.size, tags: ['status:success'])
  StatsD.increment("#{STATSD_KEY_PREFIX}.count", deleted_failed_records.size, tags: ['status:failed'])
  Rails.logger.info(
    "#{self.class} deleted #{total_deleted} of #{record_count} EvidenceSubmission records " \
    "(#{deleted_success_records.size} success, #{deleted_failed_records.size} failed)"
  )
end

private

def delete_records_by_status(status)
  EvidenceSubmission.where(
    delete_date: ..DateTime.current,
    upload_status: status
  ).destroy_all
end
```

### Deletion Criteria

**Records are deleted when ALL of the following are true**:
- ✅ `upload_status` = **SUCCESS** or **FAILED**
- ✅ `delete_date` ≤ **current date/time**

**Records that are NEVER automatically deleted**:
- ❌ **FAILED** submissions where failure notification email was NOT successfully delivered (no delete_date set)
- ❌ **PENDING** submissions (no delete_date set)
- ❌ **QUEUED** submissions (no delete_date set)
- ❌ **CREATED** submissions (no delete_date set)
- ❌ **SUCCESS** submissions before their retention period expires

### When is delete_date Set?

The `delete_date` is set to **60 days** in the following locations:

**For SUCCESS status:**

1. **Lighthouse Success** - [`lib/lighthouse/benefits_documents/upload_status_updater.rb:128`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/upload_status_updater.rb#L128)
   ```ruby
   delete_date: (DateTime.current + 60.days)
   ```

2. **EVSS Success** - [`app/sidekiq/evss/document_upload.rb:213`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L213)
   ```ruby
   delete_date: (DateTime.current + 60.days)
   ```

**For FAILED status (after successful email delivery):**

3. **VA Notify Email Callback - Delivered** - [`app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb:18`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb#L18)
   ```ruby
   delete_date: DateTime.current + 60.days
   ```

### Metrics & Logging

- **Metrics**:
  - `worker.cst.delete_evidence_submission_records.count` with tags `['status:success']` and `['status:failed']`
  - `worker.cst.delete_evidence_submission_records.error`
- **Log**: `"deleted X of Y EvidenceSubmission records (X success, Y failed)"`

### Data Retention Summary

| Status | delete_date Set When | Retention Policy | Automatic Deletion |
|--------|---------------------|------------------|-------------------|
| **SUCCESS** | Upload succeeds | 60 days after success | ✅ Yes (daily job at 6 AM) |
| **FAILED** (email delivered) | Failure email delivered | 60 days after email delivery | ✅ Yes (daily job at 6 AM) |
| **FAILED** (email NOT delivered) | Never | Indefinite | ❌ No |
| **PENDING** | N/A | Until completion | ❌ No |
| **QUEUED** | N/A | Until completion | ❌ No |
| **CREATED** | N/A | Until completion | ❌ No |

**⚠️ Important**: Failed evidence submissions where the failure notification email was NOT successfully delivered (permanent-failure or temporary-failure from VA Notify) accumulate in the database indefinitely unless manually cleaned up!

---

## Controllers

### 1. V0::BenefitsClaimsController
**File**: [`app/controllers/v0/benefits_claims_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb)

**Actions**:
- [`index`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L31-L57) - Fetches all claims, adds evidence submissions, reports metrics
- [`show`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L59-L97) - Fetches single claim, polls for status updates, adds evidence submissions
- [`failed_upload_evidence_submissions`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L116-L122) - Returns failed submissions for user

**Methods Using EvidenceSubmission**:
- [`failed_evidence_submissions`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L132-L134) - Queries failed submissions for current user
- [`add_evidence_submissions`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L188-L192) - Maps evidence submissions to formatted records
- [`filter_duplicate_evidence_submissions`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L194-L204) - Removes duplicates based on supporting documents
- [`filter_failed_evidence_submissions`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L229-L249) - Builds filtered list of failed submissions
- [`build_filtered_evidence_submission_record`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L251-L273) - Formats submission for response
- [`report_evidence_submission_metrics`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L319-L332) - Reports status metrics to DataDog
- [`fetch_evidence_submissions`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L334-L347) - Fetches evidence submissions for claim(s)
- [`update_evidence_submissions_for_claim`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L349-L374) - On-demand polling for pending submissions
- [`add_evidence_submissions_to_claims`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb#L448-L473) - Adds evidence submissions to claim responses

**Feature Flags**:
- `cst_show_document_upload_status` - Controls whether to show submission details
- `cst_update_evidence_submission_on_show` - Controls on-demand polling when viewing individual claims

### 2. V0::EvidenceSubmissionsController
**Note**: A standalone `EvidenceSubmissionsController` does not exist in the CST codebase. All evidence submission endpoints are handled through `BenefitsClaimsController`.

---

## Services

### 1. BenefitsDocuments::Service
**File**: [`lib/lighthouse/benefits_documents/service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/service.rb)

**Methods Using EvidenceSubmission**:
- [`submit_document`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/service.rb#L110-L153) - Validates document, checks for duplicates, creates initial evidence submission record
- [`create_initial_evidence_submission`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/service.rb#L163-L179) - Creates the record with metadata
- [`presumed_duplicate?`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/service.rb#L250-L272) - Checks for duplicate uploads
- [`can_create_evidence_submission`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/service.rb#L244-L248) - Checks feature flags

**Feature Flags**:
- `cst_send_evidence_submission_failure_emails` - Enables evidence submission tracking
- `cst_synchronous_evidence_uploads` - Disables async tracking (when enabled, no EvidenceSubmission record is created)

### 2. EVSSClaimService
**File**: [`app/services/evss_claim_service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/services/evss_claim_service.rb)

**Methods Using EvidenceSubmission**:
- [`upload_document`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/services/evss_claim_service.rb#L58-L84) - Creates initial evidence submission record
- [`create_initial_evidence_submission`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/services/evss_claim_service.rb#L134-L149) - Creates the record with metadata

**Feature Flags**:
- `cst_send_evidence_submission_failure_emails` - Enables evidence submission tracking

### 3. BenefitsDocuments::UpdateDocumentsStatusService
**File**: [`lib/lighthouse/benefits_documents/update_documents_status_service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/update_documents_status_service.rb)

**Purpose**: Updates evidence submission records based on Lighthouse polling responses
**Method**: `call` - Finds pending submissions by request_id and updates status using `UploadStatusUpdater`

### 4. BenefitsDocuments::UploadStatusUpdater
**File**: [`lib/lighthouse/benefits_documents/upload_status_updater.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/upload_status_updater.rb)

**Purpose**: Updates individual evidence submission status from Lighthouse polling
**Methods**:
- [`update_status`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/upload_status_updater.rb#L60-L69) - Main status update logic (only updates if status changed)
- [`process_failure`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/upload_status_updater.rb#L106-L116) - Updates record when upload fails
- [`process_upload`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/upload_status_updater.rb#L125-L130) - Updates record when upload succeeds

### 5. BenefitsDocuments::DocumentsStatusPollingService
**File**: [`lib/lighthouse/benefits_documents/documents_status_polling_service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/documents_status_polling_service.rb)

**Purpose**: Polls Lighthouse API for upload status updates
**Method**: `call` - Takes array of request_ids and returns status response from Lighthouse

---

## Sidekiq Jobs

### 1. Lighthouse::EvidenceSubmissions::DocumentUpload
**File**: [`app/sidekiq/lighthouse/evidence_submissions/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb)

**Purpose**: Uploads documents to Lighthouse Benefits Documents API
**Queue**: `low`
**Retry Policy**: [16 retries](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb#L17) over ~2 days
**Custom Retry Timing**: First 9 retries are delayed ~1 hour each (Lines 19-21)

**Evidence Submission Operations**:
- [Line 41](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb#L41) - Finds evidence submission by ID
- [Lines 184-192](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb#L184-L192) - Updates status to QUEUED when job starts
- [Lines 197-210](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb#L197-L210) - Updates status to PENDING after successful upload
- [Lines 63-79](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb#L63-L79) - Updates status to FAILED if retries exhausted

**Exhausted Retries Handler** (Lines 23-32):
- Finds evidence submission by ID from job args
- If evidence submission exists and feature flag enabled, calls `update_evidence_submission_for_failure`
- Otherwise calls `call_failure_notification` to send email via `Lighthouse::FailureNotification`

**Metrics**:
- `cst.lighthouse.document_uploads.evidence_submission_record_updated.queued`
- `cst.lighthouse.document_uploads.evidence_submission_record_updated.added_request_id`

### 2. EVSS::DocumentUpload
**File**: [`app/sidekiq/evss/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb)

**Purpose**: Uploads documents to EVSS API
**Queue**: `low`
**Retry Policy**: [16 retries](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L33) over ~1 day
**Custom Retry Timing**: First 9 retries are delayed ~1 hour each (Lines 35-37)

**Evidence Submission Operations**:
- [Line 58](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L58) - Finds evidence submission by ID
- [Lines 200-208](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L200-L208) - Updates status to QUEUED when job starts
- [Lines 210-217](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L210-L217) - Updates status to SUCCESS after successful upload (sets delete_date)
- [Lines 87-106](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb#L87-L106) - Updates status to FAILED if retries exhausted

**Exhausted Retries Handler** (Lines 39-49):
- Finds evidence submission by ID from job args (position 3)
- If evidence submission exists and feature flag enabled, calls `update_evidence_submission_for_failure`
- Otherwise calls `call_failure_notification` to send email via `EVSS::FailureNotification`

**Metrics**:
- `cst.evss.document_uploads.evidence_submission_record_updated.queued`
- `cst.evss.document_uploads.evidence_submission_record_updated.success`
- `silent_failure_avoided_no_confirmation` (on successful EvidenceSubmission update)

### 3. Lighthouse::EvidenceSubmissions::EvidenceSubmissionDocumentUploadPollingJob
**File**: [`app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb)

**Schedule**: Hourly (`0 * * * *`)
**Retry Policy**: 0 retries (job runs periodically, no need to retry)
**Purpose**: Polls Lighthouse API for status updates on pending uploads
**Batch Size**: 100 documents per batch

**Evidence Submission Operations**:
- [Lines 19-21](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb#L19-L21) - Gets counts before polling (completed, failed, pending)
- [Lines 25-35](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb#L25-L35) - Batches pending submissions in groups of 100
- [Lines 52-67](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb#L52-L67) - Calls polling service and update service
- Uses `BenefitsDocuments::DocumentsStatusPollingService` to poll Lighthouse
- Uses `BenefitsDocuments::UpdateDocumentsStatusService` to update records

**Metrics**:
- `worker.lighthouse.cst_document_uploads.pending_documents_polled`
- `worker.lighthouse.cst_document_uploads.pending_documents_marked_completed`
- `worker.lighthouse.cst_document_uploads.pending_documents_marked_failed`
- `worker.lighthouse.cst_document_uploads.polling_error`

### 4. Lighthouse::EvidenceSubmissions::FailureNotificationEmailJob
**File**: [`app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb)

**Schedule**: Daily at 12:05 AM ET (`5 0 * * *`)
**Retry Policy**: 0 retries (job runs daily)
**Purpose**: Sends failure notification emails to veterans for failed evidence submissions

**Evidence Submission Operations**:
- [Lines 32-34](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb#L32-L34) - Queries failed submissions without VA Notify emails using `EvidenceSubmission.va_notify_email_not_queued` scope
- [Lines 41-56](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb#L41-L56) - Sends email via VA Notify for each failed upload
- [Lines 58-64](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb#L58-L64) - Updates va_notify_id and va_notify_date on success

**VA Notify Configuration**:
- Template ID: `Settings.vanotify.services.benefits_management_tools.template_id.evidence_submission_failure_email`
- Callback: `Lighthouse::EvidenceSubmissions::VANotifyEmailStatusCallback`

### 5. Lighthouse::EvidenceSubmissions::VANotifyEmailStatusCallback
**File**: [`app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb)

**Purpose**: Callback handler for VA Notify email delivery status

**Evidence Submission Operations**:
- [Line 9](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb#L9) - Finds submission by va_notify_id
- [Lines 14-19](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb#L14-L19) - On 'delivered': Updates va_notify_status to SUCCESS **and sets delete_date to 60 days**
- [Lines 20-25](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb#L20-L25) - On 'permanent-failure' or 'temporary-failure': Updates va_notify_status to FAILED, does NOT set delete_date

**Status Handling**:
- `delivered` - Email successfully delivered, record will be auto-deleted after 60 days
- `permanent-failure` - Email delivery permanently failed, record retained indefinitely
- `temporary-failure` - Treated same as permanent failure (no retry mechanism currently)

**Metrics**:
- `api.vanotify.notifications.delivered`
- `api.vanotify.notifications.permanent_failure`
- `api.vanotify.notifications.temporary_failure`
- `api.vanotify.notifications.other`
- `callbacks.cst_document_uploads.va_notify.notifications.delivered`
- `callbacks.cst_document_uploads.va_notify.notifications.permanent_failure`
- `callbacks.cst_document_uploads.va_notify.notifications.temporary_failure`
- `callbacks.cst_document_uploads.va_notify.notifications.other`
- `silent_failure_avoided` (on delivered)
- `silent_failure` (on permanent_failure)

### 6. Lighthouse::EvidenceSubmissions::DeleteEvidenceSubmissionRecordsJob
**File**: [`app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb)

**Schedule**: Daily at 6:00 AM ET (`0 6 * * *`)
**Retry Policy**: 0 retries (job runs daily)
**Purpose**: Deletes submissions past their delete_date (60 days after success or successful email delivery)

**Evidence Submission Operations**:
- [Line 17](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb#L17) - Gets total count of all records
- [Lines 20-22](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb#L20-L22) - Deletes SUCCESS status records with delete_date <= current date
- [Lines 26-28](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb#L26-L28) - Deletes FAILED status records with delete_date <= current date

**Deletion Query**:
```ruby
def delete_records_by_status(status)
  EvidenceSubmission.where(
    delete_date: ..DateTime.current,
    upload_status: status
  ).destroy_all
end
```

**Metrics**:
- `worker.cst.delete_evidence_submission_records.count` with tags `['status:success']` - Number of SUCCESS records deleted
- `worker.cst.delete_evidence_submission_records.count` with tags `['status:failed']` - Number of FAILED records deleted
- `worker.cst.delete_evidence_submission_records.error` - Errors during deletion

**Logging**:
```ruby
Rails.logger.info(
  "#{self.class} deleted #{total_deleted} of #{record_count} EvidenceSubmission records " \
  "(#{deleted_success_records.size} success, #{deleted_failed_records.size} failed)"
)
```

**Important Notes**:
- ✅ Deletes **SUCCESS** status records (delete_date set on successful upload)
- ✅ Deletes **FAILED** status records **only if** failure notification email was successfully delivered (delete_date set by VANotifyEmailStatusCallback)
- ⚠️ **FAILED** submissions where email was NOT successfully delivered are never deleted automatically
- ⚠️ Records must be at least 60 days past their delete_date

---

## Scheduled Jobs

**File**: [`lib/periodic_jobs.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/periodic_jobs.rb)
**Timezone**: America/New_York (ET)

### 1. Delete Evidence Submission Records Job
[**Line 293**](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/periodic_jobs.rb#L293)
```ruby
mgr.register('0 6 * * *', 'Lighthouse::EvidenceSubmissions::DeleteEvidenceSubmissionRecordsJob')
```
**Schedule**: Daily at 6:00 AM ET
**Purpose**: Clean up old submissions (60+ days past delete_date)
**Deletes**: SUCCESS records and FAILED records (only those with successful email delivery)

### 2. Evidence Submission Document Upload Polling Job
[**Line 296**](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/periodic_jobs.rb#L296)
```ruby
mgr.register('0 * * * *', 'Lighthouse::EvidenceSubmissions::EvidenceSubmissionDocumentUploadPollingJob')
```
**Schedule**: Every hour at minute 0
**Purpose**: Poll Lighthouse for status updates on pending uploads

### 3. Failure Notification Email Job
[**Line 299**](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/periodic_jobs.rb#L299)
```ruby
mgr.register('5 0 * * *', 'Lighthouse::EvidenceSubmissions::FailureNotificationEmailJob')
```
**Schedule**: Daily at 12:05 AM ET
**Purpose**: Send failure notification emails to veterans for failed evidence submissions

---

## Status Flow

### Lighthouse Upload Flow
```
CREATED (initial creation)
   ↓
QUEUED (job picked up by Sidekiq)
   ↓
PENDING (successfully submitted to Lighthouse with request_id)
   ↓
   ├─→ SUCCESS (Lighthouse confirms successful processing via polling)
   │     └─→ delete_date = current + 60 days
   │           └─→ Deleted by DeleteEvidenceSubmissionRecordsJob after 60 days
   │
   └─→ FAILED (Lighthouse reports error via polling OR job retries exhausted)
         └─→ acknowledgement_date = current + 30 days
               └─→ FailureNotificationEmailJob sends email
                     ├─→ Email delivered (va_notify_status = SUCCESS)
                     │     └─→ delete_date = current + 60 days (set by VANotifyEmailStatusCallback)
                     │           └─→ Deleted by DeleteEvidenceSubmissionRecordsJob after 60 days
                     │
                     └─→ Email failed (va_notify_status = FAILED)
                           └─→ RETAINED INDEFINITELY (no delete_date set)
```

### EVSS Upload Flow
```
CREATED (initial creation)
   ↓
QUEUED (job picked up by Sidekiq)
   ↓
   ├─→ SUCCESS (EVSS confirms upload immediately)
   │     └─→ delete_date = current + 60 days
   │           └─→ Deleted by DeleteEvidenceSubmissionRecordsJob after 60 days
   │
   └─→ FAILED (EVSS reports error OR job retries exhausted)
         └─→ acknowledgement_date = current + 30 days
               └─→ FailureNotificationEmailJob sends email
                     ├─→ Email delivered (va_notify_status = SUCCESS)
                     │     └─→ delete_date = current + 60 days (set by VANotifyEmailStatusCallback)
                     │           └─→ Deleted by DeleteEvidenceSubmissionRecordsJob after 60 days
                     │
                     └─→ Email failed (va_notify_status = FAILED)
                           └─→ RETAINED INDEFINITELY (no delete_date set)
```

### Status Definitions

| Status | Description | Set By | Retention |
|--------|-------------|--------|-----------|
| **CREATED** | Record created, not yet queued | Service layer | Until completion |
| **QUEUED** | Sidekiq job has started processing | Document upload job | Until completion |
| **PENDING** | Successfully submitted to Lighthouse, awaiting processing | Document upload job (Lighthouse only) | Until completion |
| **SUCCESS** | Upload completed successfully | Polling job (Lighthouse) or upload job (EVSS) | **60 days**, then auto-deleted |
| **FAILED** (email delivered) | Upload failed, veteran notified | Upload job exhaustion handler or polling job | **60 days after email delivery**, then auto-deleted |
| **FAILED** (email not delivered) | Upload failed, notification failed | Upload job exhaustion handler or polling job | **Indefinite** (never auto-deleted) |

---

## Integration Points

### 1. Lighthouse Benefits Documents API
- **Endpoint**: `/uploads` (document submission)
- **Endpoint**: `/uploads/status` (status polling)
- **Used By**:
  - [`Lighthouse::EvidenceSubmissions::DocumentUpload`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb)
  - [`Lighthouse::EvidenceSubmissions::EvidenceSubmissionDocumentUploadPollingJob`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb)

### 2. EVSS Documents Service
- **Used By**: [`EVSS::DocumentUpload`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/document_upload.rb)
- **Status**: Legacy system, being phased out

### 3. VA Notify
- **Purpose**: Send failure notification emails
- **Template**: Evidence submission failure email
- **Callback**: Status updates via [`VANotifyEmailStatusCallback`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb)
- **Used By**: [`Lighthouse::EvidenceSubmissions::FailureNotificationEmailJob`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb)

### 4. DataDog
- **Metrics Reported**:
  - Upload counts by status
  - Job execution metrics
  - Email delivery metrics
  - Polling statistics
  - **Deletion metrics** (count of records deleted)
- **Tags**: `service:claim-status`, `team:cross-benefits-crew`

### 5. Lighthouse Benefits Claims API
- **Purpose**: Fetch claim details and tracked items
- **Used By**: Controllers to enrich evidence submission data

---

## Feature Flags

| Flag | Purpose | Impact | Default in Dev |
|------|---------|--------|----------------|
| `cst_send_evidence_submission_failure_emails` | Enable/disable evidence submission tracking | Controls whether EvidenceSubmission records are created | true |
| `cst_synchronous_evidence_uploads` | Use synchronous uploads instead of async | When enabled, bypasses async job and does NOT create EvidenceSubmission record | false |
| `cst_show_document_upload_status` | Show upload status in UI | Controls whether frontend sees submission details and whether `failed_upload_evidence_submissions` endpoint returns data | true |
| `cst_update_evidence_submission_on_show` | On-demand polling for pending submissions | When enabled, polls Lighthouse for status updates when viewing individual claims (in addition to hourly job) | true |
| `cst_send_evidence_failure_emails` | Enable failure emails when no EvidenceSubmission record | Used by `call_failure_notification` in upload jobs when EvidenceSubmission record doesn't exist | true |

---

## Important Notes

### Data Retention
- **Successful uploads**: Automatically deleted **60 days** after completion
  - `delete_date` is set when status becomes SUCCESS
  - Daily cleanup job runs at 6:00 AM ET
  - Uses `destroy_all` (triggers callbacks)
- **Failed uploads with successful email delivery**: Automatically deleted **60 days** after email delivery
  - `delete_date` is set by `VANotifyEmailStatusCallback` when VA Notify reports 'delivered' status
  - Same daily cleanup job handles these records
- **Failed uploads without successful email delivery**: **Retained indefinitely** - no automatic cleanup
  - ⚠️ This means failed records where email failed to deliver accumulate in the database
  - Manual cleanup may be needed periodically
- **Pending/Queued/Created uploads**: Retained until they reach a final state (SUCCESS or FAILED)
- **Acknowledgement date**: Set to 30 days after failure for failed uploads

### Error Handling
- **Type 1 Errors**: Errors before/during upload to external API (logged in job)
  - Set in document upload jobs when retries are exhausted
  - Examples: Network errors, authentication failures, file processing errors
- **Type 2 Errors**: Errors reported by Lighthouse API during processing (detected by polling)
  - Set by upload status updater when Lighthouse reports FAILED status
  - Examples: Invalid document format, VBMS processing errors

### Duplicate Detection
The system checks for duplicate uploads by comparing:
- Claim ID
- User account
- File name (from template_metadata personalisation)
- File size (if available)
- Current status (CREATED, QUEUED, or PENDING)

See: [`presumed_duplicate?`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/service.rb#L250-L272)

### Template Metadata Structure
```json
{
  "personalisation": {
    "first_name": "John",
    "document_type": "Birth Certificate",
    "file_name": "document.pdf",
    "obfuscated_file_name": "docXXXXnt.pdf",
    "date_submitted": "May 1, 2024 3:01 p.m. EDT",
    "date_failed": null
  }
}
```

---

## Related Models

### Notable Distinction
There are **TWO** different `EvidenceSubmission` models:

1. **`EvidenceSubmission`** (this model)
   - Location: [`app/models/evidence_submission.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/evidence_submission.rb)
   - Purpose: Tracks Claim Status Tool document uploads
   - Used by: vets-api core, Lighthouse/EVSS uploads

2. **`AppealsApi::EvidenceSubmission`**
   - Location: `modules/appeals_api/app/models/appeals_api/evidence_submission.rb`
   - Purpose: Tracks Appeals API evidence submissions
   - Used by: Appeals API module only
   - **NOT covered in this analysis**

---

## Frontend Integration (vets-website)

### Claims Status Tool Application
**Location**: `src/applications/claims-status/`

### Redux Actions
**File**: [`src/applications/claims-status/actions/index.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/actions/index.js)

**Key Actions**:
- `fetchFailedUploads` - Fetches failed evidence submissions from `/benefits_claims/failed_upload_evidence_submissions`
- `FETCH_FAILED_UPLOADS_PENDING` - Dispatched when fetch starts
- `FETCH_FAILED_UPLOADS_SUCCESS` - Dispatched with data on success
- `FETCH_FAILED_UPLOADS_ERROR` - Dispatched on failure

### Components Using Evidence Submissions
- `FilesPage.jsx` - Main files page that displays evidence submissions
- `FilesWeCouldntReceive.jsx` - Component showing failed uploads
- `FilesWeCouldntReceiveEntryPoint.jsx` - Entry point for failed uploads section
- `FileSubmissionsInProgress.jsx` - Shows pending/in-progress submissions
- `ClaimsListItem.jsx` - Individual claim card showing submission status
- `WhatYouNeedToDo.jsx` - Status tab component

### Utilities
**File**: [`src/applications/claims-status/utils/helpers.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/utils/helpers.js)

Contains helper functions for processing evidence submission data.

### Feature Flags (Frontend)
The frontend checks `cst_show_document_upload_status` via feature toggles to determine whether to:
- Display evidence submission status information
- Show the "Files we couldn't receive" section
- Include submission details in claim responses

### API Endpoints Used
- `GET /v0/benefits_claims` - Returns claims with `evidenceSubmissions` array
- `GET /v0/benefits_claims/{id}` - Returns single claim with `evidenceSubmissions` array
- `GET /v0/benefits_claims/failed_upload_evidence_submissions` - Returns failed submissions for current user

---

## Summary Statistics

- **Controllers**: 1 main controller (BenefitsClaimsController)
- **Services**: 5 services
- **Sidekiq Jobs**: 6 jobs
- **Scheduled Jobs**: 3 periodic jobs
- **Create Operations**: 2 locations (Lighthouse Service, EVSS Claim Service)
- **Update Operations**: 11 different update scenarios
- **Query Operations**: 7 different query patterns
- **Delete Operations**: 1 scheduled cleanup job (handles both SUCCESS and FAILED)
- **Feature Flags**: 5 flags
- **External APIs**: 3 integrations (Lighthouse Benefits Documents, EVSS, VA Notify)

---

## Additional Resources

- **Model Definition**: [`app/models/evidence_submission.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/evidence_submission.rb)
- **Constants**: [`lib/lighthouse/benefits_documents/constants.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/constants.rb)
- **Helpers**: [`lib/lighthouse/benefits_documents/utilities/helpers.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/utilities/helpers.rb)
- **Factory**: [`spec/factories/lighthouse/benefits_documents/evidence_submission.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/factories/lighthouse/benefits_documents/evidence_submission.rb)
- **Swagger Schema**: [`app/swagger/swagger/schemas/benefits_claims.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/swagger/swagger/schemas/benefits_claims.rb)
- **Migrations**:
  - [`db/migrate/20250116155354_create_evidence_submissions.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/db/migrate/20250116155354_create_evidence_submissions.rb)
  - [`db/migrate/20250128030020_change_data_types_for_evidence_submissions.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/db/migrate/20250128030020_change_data_types_for_evidence_submissions.rb)
  - [`db/migrate/20250506172106_add_needs_kms_rotation_fields_to_submissions_tables.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/db/migrate/20250506172106_add_needs_kms_rotation_fields_to_submissions_tables.rb)
  - [`db/migrate/20250507151848_add_needs_kms_rotation_indices_to_submission_tables.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/db/migrate/20250507151848_add_needs_kms_rotation_indices_to_submission_tables.rb)
  - [`db/migrate/20250703183404_add_file_size_to_evidence_submission.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/db/migrate/20250703183404_add_file_size_to_evidence_submission.rb)
