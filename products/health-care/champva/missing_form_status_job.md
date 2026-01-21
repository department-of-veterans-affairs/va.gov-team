## Overview

The `MissingFormStatusJob` is a Sidekiq background job that identifies IVC CHAMPVA form submissions that have not received a status update from Pega (our downstream processing partner). It serves two purposes:

1. **Reconciliation**: Checks Pega's reporting API to identify "false positive" missing statuses (forms that Pega actually processed but failed to send us a callback)
2. **User Notification**: Sends failure notification emails to users whose submissions have been missing a Pega status for too long

---

## Schedule & Trigger

| Attribute | Value |
|-----------|-------|
| **Schedule** | Every 15 minutes |
| **Cron Expression** | `*/15 * * * *` |
| **Configuration** | `lib/periodic_jobs.rb` |
| **Configurable Toggle** | `Settings.ivc_forms.sidekiq.missing_form_status_job.enabled` |

The job is registered in `lib/periodic_jobs.rb`:
```ruby
mgr.register('*/15 * * * *', 'IvcChampva::MissingFormStatusJob')
```

### Job Start Determination

The job "starts" when `perform` is invoked by Sidekiq. A log entry is emitted immediately after querying for missing statuses:
```
IVC Forms MissingFormStatusJob - Job started - batch_count: <N>
```

If the feature flag is disabled, the job exits silently without logging.

---

## Workflow Position Relative to ZSF Email

```
User Submits Form
       ↓
Files uploaded to S3 (s3_status set)
       ↓
Pega picks up files from S3
       ↓
Pega processes and calls back via PegaController#update_status
       ↓
pega_status set to "Processed" → Confirmation email sent
       ↓
       ↓ (If callback never arrives...)
       ↓
MissingFormStatusJob runs (every 15 min)
       ↓
       ├─[If Pega API shows matching docs] → Reconcile: set pega_status = "Manually Processed"
       │
       └─[If Pega API does NOT show matching docs]:
              ↓
         Publish StatsD metric: ivc_champva.form_missing_status (with key tag)
              ↓
         [If elapsed_days >= 7 AND email_sent = false] → Send ZSF failure email to user
              ↓
         DataDog alert triggers on elevated ivc_champva.form_missing_status counts
```

### Relationship to ZSF Email

| Aspect | Details |
|--------|---------|
| **Position** | Runs AFTER expected Pega callback window |
| **Blocking?** | Non-blocking; runs asynchronously every 15 minutes |
| **Email Trigger** | Only sends failure email if `elapsed_days >= threshold` (default 7) AND `email_sent: false` |
| **Email Type** | Uses template `#{form_number}-FAILURE` (e.g., `10-10D-FAILURE`) |

There is also a separate job `NotifyPegaMissingFormStatusJob` that runs daily and notifies the Pega team (not users) about missing statuses after 2+ hours.

---

## Eligible Records

### Query Scope

Records are fetched via `MissingStatusCleanup#get_missing_statuses`:

```ruby
IvcChampvaForm.where(pega_status: nil).where('created_at < ?', 1.minute.ago)
```

The 1 minute exclusion window is to prevent false DataDog alerts on records that simply haven't been processed yet by Pega.

### Eligibility Criteria

| Filter | Value | Reason |
|--------|-------|--------|
| `pega_status` | `nil` | Only records without a Pega status update |
| `created_at` | `< 1 minute ago` | Ignore very recent submissions to allow time for callback |

### Batching

Records are grouped into **batches** by `form_uuid`. Each batch represents a single user submission, which may contain:
- Main form PDF
- Supporting document PDFs
- VES JSON file (excluded from Pega count comparison)

### Form Types

All IVC/VFMP digitized forms are supported:
- 10-10D
- 10-7959A
- 10-7959C
- 10-7959F-1
- 10-7959F-2

---

## Fields Read & Updated

### Fields Read from Local Database

| Field | Purpose |
|-------|---------|
| `form_uuid` | Batch grouping and Pega API lookup |
| `pega_status` | Determine if missing (nil = missing) |
| `created_at` | Calculate elapsed days |
| `email_sent` | Prevent duplicate failure emails |
| `file_name` | Logging and VES JSON filtering |
| `s3_status` | Logging/metrics |
| `form_number` | Email template selection |

### Fields Read from Pega Reporting API

The job queries Pega's reporting API with the `form_uuid` and a date window (`created_at ± 1 day`). The API returns an array of report objects:

```ruby
[
  { "Creation Date" => "2024-12-17T07:42:28.307000",
    "PEGA Case ID" => "D-XXXXX",
    "Status" => "Processed",
    "UUID" => "78444a0b-3ac8-454d-a28d-8d6f0e+" }  # Note: UUID may be truncated
]
```

Only the **count** of reports is used for comparison.

### Fields Updated on Our Side

| Field | When Updated | New Value |
|-------|--------------|-----------|
| `pega_status` | When Pega report count matches local count | `"Manually Processed"` |
| `email_sent` | When failure email is successfully sent | `true` |

---

## Behavior: Record Missing on Our Side but Exists in Pega

### Prerequisites

- Flipper flag `champva_enable_pega_report_check` must be enabled
- Batch must have at least one record

### Logic

1. Query Pega reporting API for the batch's `form_uuid`
2. Filter local batch to exclude VES JSON files (`*_ves.json`) since they're sent to VES, not Pega
3. Compare counts:
   - `local_pega_processable_count`: Number of local records excluding VES JSON
   - `pega_report_count`: Number of reports returned from Pega API

### Reconciliation Behavior

| Condition | Action | Status Change |
|-----------|--------|---------------|
| Counts match AND pega_count > 0 | Call `manually_process_batch(batch)` | `pega_status: nil → "Manually Processed"` |
| Counts don't match | Continue processing (no reconciliation) | No change |
| Pega API error | Log error, continue processing | No change |

### Logging on Reconciliation

```
IVC Forms MissingFormStatusJob - Pega report comparison - form_uuid: <uuid>, 
local_pega_processable_count: 2, pega_report_count: 2, counts_match: true, file_names: [...]

IVC Forms MissingFormStatusJob - Batch reconciled via Pega API - 
form_uuid: <uuid>, doc_count: 2, new_status: Manually Processed
```

### Timing/Ordering Nuances

- The job runs every 15 minutes, so reconciliation is **eventually consistent**
- Pega API is queried with a date window of `created_at ± 1 day` to account for timezone differences
- No retries within a single job run; failed API calls are logged and the batch is skipped for that run
- The job has `sidekiq_options retry: 3` for job-level retries on unhandled exceptions

---

## Behavior: Record Not Present in Pega

### When Pega Reports Zero Documents

| Condition | Result |
|-----------|--------|
| `pega_report_count: 0` | `counts_match` will be `false` (unless local also has 0, which is filtered out) |
| Status | **Remains `nil`** (unchanged) |
| Processing | Batch continues through threshold check |

### When Pega Reports Fewer Documents Than Local

| Condition | Result |
|-----------|--------|
| `pega_report_count < local_pega_processable_count` | `counts_match: false` |
| Status | **Remains `nil`** (unchanged) |
| Processing | Batch continues through threshold check |

### After Threshold is Exceeded

If a batch has been missing a Pega status for `>= failure_email_threshold_days` (default: 7 days):

1. A failure email is sent to the user using template `#{form_number}-FAILURE`
2. `email_sent` is set to `true` for all records in the batch
3. The batch will continue to appear in future job runs (since `pega_status` remains `nil`) but no additional emails are sent

### Exceptions

| Exception Type | Handling |
|----------------|----------|
| `IvcChampva::PegaApi::PegaApiError` | Logged, batch treated as "not in Pega" (counts don't match) |
| Other exceptions | Logged with backtrace, job continues with remaining batches |

---

## Configuration

| Setting | Path | Default | Description |
|---------|------|---------|-------------|
| Job enabled | `Settings.ivc_forms.sidekiq.missing_form_status_job.enabled` | - | Master on/off switch |
| Failure email threshold | `Settings.vanotify.services.ivc_champva.failure_email_threshold_days` | 7 | Days before sending failure email |
| Pega report check | Flipper: `champva_enable_pega_report_check` | - | Enable Pega API reconciliation |
| Verbose logging | Flipper: `champva_missing_status_verbose_logging` | - | Extra logging for small batches |

---

## Logging Summary

| Event | Log Level | Key Fields |
|-------|-----------|------------|
| Job started | INFO | `batch_count` |
| Processing batch | INFO | `form_uuid`, `form_number`, `elapsed_days`, `local_doc_count`, `email_sent`, `file_names` (if ≤10) |
| Pega report comparison | INFO | `form_uuid`, `local_pega_processable_count`, `pega_report_count`, `counts_match`, `file_names` |
| Batch reconciled | INFO | `form_uuid`, `doc_count`, `new_status` |
| Failure email sent | INFO | `form_uuid`, `form_number`, `elapsed_days` |
| Pega API error | ERROR | `form_uuid`, `error` |
| Job completed | INFO | (no additional fields) |
| Job error | ERROR | `message`, `backtrace` |

All logs use prefix `IVC Forms MissingFormStatusJob` for searchability.

---

## Related Jobs & Components

| Component | Purpose |
|-----------|---------|
| `NotifyPegaMissingFormStatusJob` | Daily job that notifies Pega team of missing statuses (after 2+ hours) |
| `PegaController#update_status` | Callback endpoint where Pega sends status updates |
| `MissingStatusCleanup` | Utility class for querying and updating missing status records |
| `PegaApi::Client` | Client for Pega reporting API |
