# EvidenceSubmission Model Fields

## Overview
The `EvidenceSubmission` model manages the upload and tracking of evidence documents submitted by veterans to support their benefits claims. This model integrates with Lighthouse Benefits Documents API and VA Notify for notifications.

## Database Table: `evidence_submissions`

### Primary Key
| Field | Type | Description |
|-------|------|-------------|
| `id` | bigint | Auto-generated primary key |

### Foreign Keys
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `user_account_id` | uuid | NOT NULL, foreign key, indexed | References the `user_account` table |

### Job/Processing Fields
| Field | Type | Description |
|-------|------|-------------|
| `job_id` | string | Sidekiq job identifier for async processing |
| `job_class` | string | Name of the job class handling the submission |
| `upload_status` | string | Current status of the upload (see status values below) |

### Document/Request Identifiers
| Field | Type | Notes | Description |
|-------|------|-------|-------------|
| `request_id` | integer | Changed from string in migration 20250128030020 | Lighthouse Benefits Documents API request ID |
| `claim_id` | integer | Changed from string in migration 20250128030020 | VA claim identifier |
| `tracked_item_id` | integer | Changed from string in migration 20250128030020 | Tracked item identifier in the claim system |

### Encryption/Metadata Fields
| Field | Type | Description |
|-------|------|-------------|
| `template_metadata_ciphertext` | json | Encrypted template metadata using Lockbox encryption |
| `encrypted_kms_key` | text | AWS KMS encryption key for securing sensitive data |
| `needs_kms_rotation` | boolean | Flag indicating if KMS key needs rotation (default: false, NOT NULL, indexed) |

### VA Notify Fields
| Field | Type | Description |
|-------|------|-------------|
| `va_notify_id` | string | VA Notify notification ID for failure notifications |
| `va_notify_status` | string | Status of the VA notification |
| `va_notify_date` | datetime | Timestamp when notification was sent |

### Status/Tracking Dates
| Field | Type | Description |
|-------|------|-------------|
| `delete_date` | datetime | Scheduled deletion date for the submission record |
| `acknowledgement_date` | datetime | Date when the submission was acknowledged |
| `failed_date` | datetime | Timestamp when the submission failed |

### Error Handling
| Field | Type | Description |
|-------|------|-------------|
| `error_message` | string | Detailed error message if submission failed |

### File Information
| Field | Type | Added | Description |
|-------|------|-------|-------------|
| `file_size` | integer | Migration 20250703183404 | Size of the uploaded file in bytes |

### Timestamps
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `created_at` | datetime | NOT NULL | Timestamp when record was created |
| `updated_at` | datetime | NOT NULL | Timestamp when record was last updated |

### Virtual Fields
| Field | Type | Description |
|-------|------|-------------|
| `template_metadata` | hash/json | Decrypted version of `template_metadata_ciphertext` (via Lockbox) |

---

## Upload Status Values

Defined in [`lib/lighthouse/benefits_documents/constants.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/constants.rb):

### UPLOAD_STATUS Constants
| Key | Value | Description |
|-----|-------|-------------|
| `CREATED` | `'CREATED'` | Internal status - the evidence submission record is created |
| `QUEUED` | `'QUEUED'` | Internal status - the evidence submission record has been given a job ID |
| `PENDING` | `'IN_PROGRESS'` | Lighthouse status - the workflow is currently executing |
| `SUCCESS` | `'SUCCESS'` | Lighthouse status - the workflow has completed all steps successfully |
| `FAILED` | `'FAILED'` | The submission encountered a non-recoverable error (used by both internal and Lighthouse) |

### VANOTIFY_STATUS Constants
| Key | Value | Description |
|-----|-------|-------------|
| `FAILED` | `'FAILED'` | VA Notify notification failed to send |
| `SUCCESS` | `'SUCCESS'` | VA Notify notification sent successfully |

---

## Model Associations

```ruby
belongs_to :user_account
```

---

## Model Scopes

| Scope | Query | Description |
|-------|-------|-------------|
| `created` | `where(upload_status: 'CREATED')` | Records with CREATED status |
| `queued` | `where(upload_status: 'QUEUED')` | Records with QUEUED status |
| `pending` | `where(upload_status: 'IN_PROGRESS').where.not(request_id: nil)` | Records with IN_PROGRESS status and a non-null request_id |
| `completed` | `where(upload_status: 'SUCCESS')` | Records with SUCCESS status |
| `failed` | `where(upload_status: 'FAILED')` | Records with FAILED status |
| `va_notify_email_queued` | `where(upload_status: 'FAILED').where.not(va_notify_date: nil).where.not(va_notify_id: nil)` | Failed records that have a VA Notify notification queued (both date and id present) |
| `va_notify_email_not_queued` | `where(upload_status: 'FAILED', va_notify_id: nil, va_notify_date: nil)` | Failed records without a VA Notify notification (both date and id are nil) |

---

## Model Methods

### Instance Methods

```ruby
completed?
# Returns true if upload_status is 'SUCCESS'

failed?
# Returns true if upload_status is 'FAILED'

pending?
# Returns true if upload_status is 'IN_PROGRESS' and request_id is present
```

---

## Security Features

- **Encryption**: Uses Lockbox with KMS for encrypting sensitive metadata (`has_encrypted :template_metadata`)
- **Key Management**: Leverages AWS KMS for key management (`has_kms_key`)
- **Key Rotation**: Supports KMS key rotation via `needs_kms_rotation` flag
- **Foreign Key Constraint**: Ensures data integrity with user_account relationship

---

## Database Indexes

| Index Name | Column(s) | Description |
|------------|-----------|-------------|
| `index_evidence_submissions_on_user_account_id` | `user_account_id` | Foreign key index for user account lookups |
| `index_evidence_submissions_on_needs_kms_rotation` | `needs_kms_rotation` | Index for KMS rotation queries |

---

## Total Field Count

- **Database Columns**: 21
- **Virtual Fields**: 1
- **Total**: 22 fields

---

## Migration History

1. **20250116155354** - Initial creation of `evidence_submissions` table with 18 columns
2. **20250128030020** - Changed `request_id`, `claim_id`, and `tracked_item_id` from string to integer
3. **20250506172106** - Added `needs_kms_rotation` boolean column (default: false, NOT NULL)
4. **20250507151848** - Added index on `needs_kms_rotation` column
5. **20250703183404** - Added `file_size` integer column

---

## Related Files

- **Model**: [`app/models/evidence_submission.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/evidence_submission.rb)
- **Constants**: [`lib/lighthouse/benefits_documents/constants.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/constants.rb)
- **Upload Job**: [`app/sidekiq/lighthouse/evidence_submissions/document_upload.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/document_upload.rb)
- **Polling Job**: [`app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/evidence_submission_document_upload_polling_job.rb)
- **Status Updater**: [`lib/lighthouse/benefits_documents/upload_status_updater.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/upload_status_updater.rb)
- **Delete Records Job**: [`app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/delete_evidence_submission_records_job.rb)
- **Failure Notification Job**: [`app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb)
- **VA Notify Callback**: [`app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/lighthouse/evidence_submissions/va_notify_email_status_callback.rb)


