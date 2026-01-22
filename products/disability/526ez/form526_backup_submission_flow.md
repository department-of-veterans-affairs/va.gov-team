# Form526 Backup Submission Process Flow

This document describes the complete flow of the `Form526BackupSubmissionProcess` including upload, status polling, and durations.

## High-Level Flow Diagram

```mermaid
flowchart TB
    subgraph Initial["Initial Submission Failure"]
        A[User Submits Form 526] --> B[SubmitForm526AllClaim Job]
        B -->|SUCCESS| C[Ancillary Jobs → Complete]
        B -->|EXHAUSTED/NON-RETRYABLE| D[queue_central_mail_backup_submission]
    end

    subgraph BackupSubmit["Backup Submission Process"]
        D --> E[Form526BackupSubmissionProcess::Submit]
        E -->|"retry: 14 (~27-35 hrs)"| F[Processor#process!]
        
        F --> G[gather_docs!]
        G --> G1[get_form526_pdf - L533]
        G --> G2[get_form4142_pdf - L107]
        G --> G3[get_form0781_pdfs - L228/L229]
        G --> G4[get_form8940_pdf - L149]
        G --> G5[get_uploads - Evidence]
        G --> G6[get_bdd_pdf - L023]
        
        G1 & G2 & G3 & G4 & G5 & G6 --> H[All PDFs Collected]
    end

    subgraph LighthouseUpload["Lighthouse Benefits Intake API"]
        H --> I[instantiate_upload_info_from_lighthouse]
        I -->|"POST /uploads"| J[Get Presigned URL + UUID]
        J -->|"15-min window"| K[upload_to_lh_claims_intake_api]
        K -->|"PUT to presigned URL"| L[Document Uploaded]
        L --> M[Store backup_submitted_claim_id = UUID]
    end

    subgraph Polling["Status Polling"]
        M --> N{Polling Jobs}
        
        N -->|"Daily 3 AM ET"| O[Form526StatusPollingJob]
        N -.->|"Weekly Sun 2 AM ET"| P["Form526ParanoidSuccessPollingJob<br/>⚠️ DEPRECATED - Being Removed"]
        
        O -->|"Bulk Status Check"| Q{Lighthouse Status?}
        
        Q -->|vbms| R[✅ accepted! - True Success]
        Q -->|success| S["⚠️ paranoid_success!<br/>(treated as success)"]
        Q -->|error/expired| T[❌ rejected! + Failure Email]
        
        S -.-> P
        P -.->|"Re-check"| U{Status Changed?}
        U -.->|vbms| R
        U -.->|error/expired| T
        U -.->|processing| V[Revert to Pending]
    end

    style A fill:#e1f5fe
    style R fill:#c8e6c9
    style T fill:#ffcdd2
    style S fill:#fff9c4
    style P fill:#e0e0e0,stroke:#9e9e9e,stroke-dasharray: 5 5
```

## Detailed Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant VetsAPI as Vets-API
    participant Submit as Submit Job<br/>(retry: 14)
    participant Processor
    participant LH as Lighthouse<br/>Benefits Intake API
    participant DB as Database
    participant Poller as Polling Jobs

    User->>VetsAPI: Submit Form 526
    VetsAPI->>VetsAPI: SubmitForm526AllClaim fails/exhausted
    VetsAPI->>Submit: queue_central_mail_backup_submission

    rect rgb(240, 248, 255)
        Note over Submit,Processor: Backup Submission (retries up to ~35 hrs)
        Submit->>DB: Form526Submission.benefits_intake_api!
        Submit->>DB: Create Form526JobStatus (pending)
        Submit->>Processor: Processor.new(submission_id).process!
        
        Processor->>Processor: gather_docs!
        Note right of Processor: Collects: 526, 4142, 0781,<br/>0781a, 8940, BDD, Evidence
        
        Processor->>LH: POST /uploads (request location)
        LH-->>Processor: {location: presigned_url, uuid: tracking_id}
        
        Note over Processor,LH: 15-minute upload window
        
        Processor->>LH: PUT presigned_url (multipart form-data)
        Note right of Processor: Includes metadata.json + PDFs
        LH-->>Processor: 200 OK
        
        Processor->>DB: Update backup_submitted_claim_id = UUID
        Submit->>DB: Update Form526JobStatus (success)
    end

    rect rgb(255, 248, 240)
        Note over Poller,LH: Daily Polling (3 AM ET)
        loop Every Day at 3 AM ET
            Poller->>DB: Query pending_backup scope<br/>(< 3 weeks old, has UUID, no resolution)
            Poller->>LH: POST /uploads/status (bulk check UUIDs)
            LH-->>Poller: [{uuid, status}, ...]
            
            alt status = "vbms"
                Poller->>DB: accepted! (backup_submitted_claim_status = accepted)
            else status = "success"
                Poller->>DB: paranoid_success!
            else status = "error" or "expired"
                Poller->>DB: rejected!
                Poller->>VetsAPI: Queue Form526SubmissionFailureEmailJob
            end
        end
    end

    rect rgb(230, 230, 230)
        Note over Poller,DB: ⚠️ DEPRECATED - Weekly Paranoid Success Check (Sunday 2 AM ET)<br/>Planned for removal - status reversions not observed in practice
        loop Every Sunday at 2 AM ET
            Poller->>DB: Query paranoid_success submissions
            Poller->>LH: POST /uploads/status
            alt status = "vbms"
                Poller->>DB: accepted! (upgrade to true success)
            else status = "error"
                Poller->>DB: rejected!
            else status = "processing"
                Poller->>DB: Clear status (revert to pending)
            end
        end
    end
```

## Timing & Durations

### End-to-End Timeline Summary

```mermaid
gantt
    title Form 526 Submission Timeline (Worst Case)
    dateFormat  YYYY-MM-DD HH:mm
    axisFormat %d %b

    section Phase 1: Primary Submit
    SubmitForm526AllClaim retries (16x) :crit, p1, 2024-01-01 00:00, 50h

    section Phase 2: Backup Submit
    Form526BackupSubmissionProcess retries (14x) :active, p2, after p1, 27h

    section Phase 3: Polling
    Daily status polling (up to 3 weeks) :p3, after p2, 21d
```

| Phase | Job | Max Retries | Max Duration | Cumulative |
|-------|-----|-------------|--------------|------------|
| **1. Primary Submission** | `SubmitForm526AllClaim` | 16 | ~2 days 2 hours | ~2 days 2 hours |
| **2. Backup Submission** | `Form526BackupSubmissionProcess::Submit` | 14 | ~27 hours | ~3 days 5 hours |
| **3. Status Polling** | `Form526StatusPollingJob` | N/A (scheduled) | Up to 3 weeks | ~24 days total |

**Worst-case time from user submission to final resolution: ~3.5 weeks**

---

### Phase 1: Primary Submit Job (`SubmitForm526AllClaim`)

**Sidekiq retry: 16** — retries for up to **~2 days 2 hours** (per code comment: "2d 1h 47m 12s")

Sidekiq uses exponential backoff: `(retry_count ** 4) + 15 + (rand(10) * (retry_count + 1))` seconds

| Retry # | Approximate Delay | Cumulative Time |
|---------|-------------------|-----------------|
| 1 | ~16 sec | 16 sec |
| 2 | ~31 sec | 47 sec |
| 3 | ~1 min | 2 min |
| 4 | ~4 min | 6 min |
| 5 | ~10 min | 16 min |
| 6 | ~22 min | 38 min |
| 7 | ~40 min | 1 hr 18 min |
| 8 | ~1 hr 8 min | 2 hr 26 min |
| 9 | ~1 hr 49 min | 4 hr 15 min |
| 10 | ~2 hr 47 min | 7 hr 2 min |
| 11 | ~4 hr 4 min | 11 hr 6 min |
| 12 | ~5 hr 44 min | 16 hr 50 min |
| 13 | ~7 hr 50 min | 24 hr 40 min |
| 14 | ~10 hr 27 min | 35 hr 7 min |
| 15 | ~13 hr 38 min | 48 hr 45 min |
| 16 | ~17 hr 27 min | **~66 hr (~2d 18h)** |

After exhaustion → triggers `queue_central_mail_backup_submission` → Phase 2

---

### Phase 2: Backup Submit Job (`Form526BackupSubmissionProcess::Submit`)

**Sidekiq retry: 14** — retries for up to **~27 hours**

| Retry # | Approximate Delay | Cumulative Time |
|---------|-------------------|-----------------|
| 1 | ~16 sec | 16 sec |
| 2 | ~31 sec | 47 sec |
| 3 | ~1 min | 2 min |
| 4 | ~4 min | 6 min |
| 5 | ~10 min | 16 min |
| 6 | ~22 min | 38 min |
| 7 | ~40 min | 1 hr 18 min |
| 8 | ~1 hr 8 min | 2 hr 26 min |
| 9 | ~1 hr 49 min | 4 hr 15 min |
| 10 | ~2 hr 47 min | 7 hr 2 min |
| 11 | ~4 hr 4 min | 11 hr 6 min |
| 12 | ~5 hr 44 min | 16 hr 50 min |
| 13 | ~7 hr 50 min | 24 hr 40 min |
| 14 | ~10 hr 27 min | **~35 hr (~1d 11h)** |

After success → stores `backup_submitted_claim_id` (Lighthouse UUID) → Phase 3

After exhaustion → sends `Form526SubmissionFailureEmailJob` (if flipper enabled)

---

### Phase 3: Status Polling

| Job | Schedule | Max Polling Duration | Purpose |
|-----|----------|---------------------|---------|
| `Form526StatusPollingJob` | **Daily at 3 AM ET** | **3 weeks** (`MAX_PENDING_TIME`) | Check Lighthouse status for pending submissions |
| ~~`Form526ParanoidSuccessPollingJob`~~ | ~~Weekly Sunday 2 AM ET~~ | ~~Ongoing~~ | ~~Re-verify submissions with `paranoid_success` status~~ |

> ⚠️ **DEPRECATION NOTICE:** `Form526ParanoidSuccessPollingJob` is planned for removal. Analysis has shown that Lighthouse statuses do not revert from `success` back to `processing` or other states in practice, making this re-verification unnecessary. The `paranoid_success` status will be treated equivalently to `accepted` going forward.

**Polling stops when:**
- Status becomes `vbms` → `accepted!` (true success)
- Status becomes `error` or `expired` → `rejected!` + failure email
- Submission is older than 3 weeks (falls out of `pending_backup` scope)

---

### Key Timeouts & Windows

| Parameter | Value | Description |
|-----------|-------|-------------|
| Upload Window | **15 minutes** | Time to upload after getting presigned URL from Lighthouse |
| MAX_PENDING_TIME | **3 weeks** | Submissions older than this aren't included in polling |
| STALE_SLA | **10 days** | Alert threshold for submissions still pending |
| PDF Max Size | **100 MB** | Maximum PDF file size for upload |
| API Timeout | **30 seconds** | Default HTTP timeout for Lighthouse calls |

## Lighthouse Status Values

```mermaid
stateDiagram-v2
    [*] --> pending: Upload Complete
    pending --> processing: Lighthouse Processing
    processing --> success: Initial Success
    processing --> error: Validation Failed
    processing --> expired: Processing Timeout
    success --> vbms: Reached VBMS
    success --> error: Late Failure
    vbms --> [*]: ✅ True Success
    error --> [*]: ❌ Rejected
    expired --> [*]: ❌ Rejected
```

| Status | Meaning | DB Action |
|--------|---------|-----------|
| `pending` | Uploaded, not yet processed | Continue polling |
| `processing` | Being processed by Lighthouse | Continue polling |
| `success` | Processed but not confirmed in VBMS | `paranoid_success!` |
| `vbms` | Confirmed in VBMS | `accepted!` (true success) |
| `error` | Processing failed | `rejected!` + failure email |
| `expired` | Timed out | `rejected!` + failure email |

## Document Types Uploaded

| Document | Doc Type Code | Lighthouse Type |
|----------|--------------|-----------------|
| Form 21-526EZ | `L533` | Main disability claim |
| Form 21-4142 | `L107` | Authorization for records |
| Form 21-0781 | `L228` | PTSD statement |
| Form 21-0781a | `L229` | Secondary PTSD statement |
| Form 21-8940 | `L149` | Unemployability claim |
| BDD Instructions | `L023` | Benefits Delivery at Discharge |
| Evidence | Varies | Supporting documents |

## Metadata Payload

```json
{
  "veteranFirstName": "John",
  "veteranLastName": "Doe",
  "fileNumber": "123456789",
  "zipCode": "12345",
  "source": "va.gov backup submission",
  "docType": "21-526EZ",
  "businessLine": "CMP",
  "claimDate": "2024-01-15",
  "forceOfframp": "true"
}
```
