**Date**: November 12, 2025

## TLDR

Datadog is enough. We don't need GA

- Type 1 errors happen immediately, so backend logs = user saw it
- Type 2 errors are stored in database, backend tracks when they occur
- Error codes map to specific messages we show users (`claims-status/utils/helpers.js` getUploadErrorMessage method)
- Small gap for Type 2 (can't confirm user came back to see alert) isn't worth adding GA

---

## What Datadog Tracks

### Backend Tracking
Type 1 and Type 2 Errors are both currently captured in the [[CST] Zero Silent Failures: Document Uploads](https://vagov.ddog-gov.com/dashboard/pps-nf7-ppr/cst-zero-silent-failures-document-uploads) Datadog dashboard.

**1. Rails Logs**  
File: `vets-api/lib/lighthouse/benefits_documents/service.rb:88-91`

```ruby
Rails.logger.info('file_name present?', file&.original_filename.present?)
Rails.logger.info('file extension', file&.original_filename&.split('.')&.last)
Rails.logger.info('file content type', file&.content_type)
```

Logs: File details, exceptions with stack traces, user info

All exceptions (DOC_UPLOAD_DUPLICATE, DOC_UPLOAD_INVALID_CLAIMANT, validation errors) get logged to Rails and sent to Datadog.

**2. Type 2 Failures in Database**  
File: `vets-api/app/models/evidence_submission.rb:27`

```ruby
scope :failed, -> { where(upload_status: 'FAILED') }
```

File: `vets-api/lib/lighthouse/benefits_documents/upload_status_updater.rb:106-116`

```ruby
def process_failure
  @pending_evidence_submission.update!(
    upload_status: BenefitsDocuments::Constants::UPLOAD_STATUS[:FAILED],
    failed_date: DateTime.now.utc,
    error_message: @lighthouse_document_status_response['error']
  )
end
```

Stores: claim_id, failed_date, file_name, document_type, error_message from Lighthouse

**3. Datadog APM Tracing**  
Files:

- `vets-api/app/sidekiq/lighthouse/document_upload_synchronous.rb:12-29`
- `vets-api/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb:147-153`

Tracks: Upload steps, timing, file sizes

### Frontend Tracking

**Datadog RUM**  
File: `vets-website/src/applications/claims-status/containers/ClaimsStatusApp.jsx:71-77`

- Tracks JavaScript crashes and performance
- Does NOT track when error components render

**Google Analytics**  
File: `vets-website/src/applications/claims-status/actions/index.js:451`

```javascript
recordEvent({ event: 'claims-upload-failure' });
```

- Generic failure event only
- No error code, no error type, no document type

---

## Error Types

### Type 1 (Immediate Upload Failures)

Errors that happen synchronously during upload request.

**Known errors with specific messages:**

1. `DOC_UPLOAD_DUPLICATE` → "You've already uploaded this file"  
   (`lighthouse/benefits_documents/service.rb:93-98`, `utils/helpers.js:1374-1388`)

2. `DOC_UPLOAD_INVALID_CLAIMANT` → "You can't upload files for this claim"  
   (`lighthouse/benefits_documents/service.rb:100-105`, `utils/helpers.js:1390-1408`)

**Unknown errors with generic message:**

3. All other errors → "We couldn't process the files... submit by mail or in person"  
   (`Type1UnknownUploadError.jsx:38-40`)

   Backend logs the actual exception details in Rails logs even though user sees generic message.

### Type 2 (Delayed Processing Failures)

Upload succeeds initially, but Lighthouse backend processing fails later (async).

- User sees: "We need you to submit files by mail or in person"  
  (`UploadType2ErrorAlert.jsx:28-30`)
- Fetched from: `/v0/benefits_claims/failed_upload_evidence_submissions`  
  (`actions/index.js:622-641`, `benefits_claims_controller.rb:101-107`)
- Behind feature flag: `cst_show_document_upload_status`
- Displayed for 30 days (`UploadType2ErrorAlert.jsx:64`)
- Error details from Lighthouse's `/uploads/status` endpoint stored in database

---

## Can Datadog Tell Us When Veterans See Errors?

### Type 1: Yes ✅

Backend logs error in same HTTP request that displays error to user. It's synchronous.

**If backend logged it, user saw it.**

Error code determines message:

- DOC_UPLOAD_DUPLICATE → specific "already uploaded" message
- DOC_UPLOAD_INVALID_CLAIMANT → specific "can't upload" message
- All other exceptions → generic "submit by mail" message

### Type 2: Mostly ⚠️

Backend logs when failure occurs and stores in database. User sees error later when they return to page.

**Gap**: Can't confirm user came back and saw the alert.

**Likelihood**: Most users check claim status regularly, so viewing rate is probably high.

---

## What We Can Answer with Datadog

✅ How often do Type 1 errors occur? (query Rails logs for DOC_UPLOAD_DUPLICATE, DOC_UPLOAD_INVALID_CLAIMANT, validation errors)  
✅ How often do Type 2 failures occur? (query database for FAILED status)  
✅ What message did user see? (map error code to message)  
✅ Error trends over time  
✅ Type 1 vs Type 2 breakdown

⚠️ No StatsD metrics for counting specific error types - would need to query Rails logs or database

---

## Acceptance Criteria Met

✅ **Reviewed Datadog dashboards/logs for error classifications**  
Confirmed: Rails logs for all errors, database records for Type 2 failures, APM tracing for performance

✅ **Confirmed logs provide needed granularity (per error message, Type 1 vs Type 2)**  
Yes - error codes map to specific messages, can distinguish Type 1 from Type 2

✅ **Documented gaps in backend visibility**  
Type 2: can't confirm user viewed alert (small gap, not critical for occurrence tracking)  
No StatsD counters - need to query Rails logs or database for counts  
Document type: stored in database for Type 2, not logged for Type 1

✅ **Provided recommendation**  
**Datadog only** - backend tracking sufficient for measuring error occurrences

---

## Key Files

**Backend:**

- `vets-api/lib/lighthouse/benefits_documents/service.rb` - DOC_UPLOAD_DUPLICATE/INVALID_CLAIMANT, upload logic
- `vets-api/lib/lighthouse/benefits_documents/upload_status_updater.rb` - Type 2 failure processing
- `vets-api/app/models/evidence_submission.rb` - Type 2 failures storage
- `vets-api/app/controllers/v0/benefits_claims_controller.rb` - Type 2 API endpoint
- `vets-api/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb` - Async upload processing

**Frontend:**

- `vets-website/src/applications/claims-status/utils/helpers.js:1373-1417` - Error message mapping
- `vets-website/src/applications/claims-status/actions/index.js` - Upload logic, GA events
- `vets-website/src/applications/claims-status/components/Type1UnknownUploadError.jsx` - Type 1 display
- `vets-website/src/applications/claims-status/components/UploadType2ErrorAlert.jsx` - Type 2 display
