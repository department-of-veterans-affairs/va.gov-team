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
        E -->|"retry: 14 (~3-4 days)"| F[Processor#process!]
        
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
        N -->|"Weekly Sun 2 AM ET"| P[Form526ParanoidSuccessPollingJob]
        
        O -->|"Bulk Status Check"| Q{Lighthouse Status?}
        
        Q -->|vbms| R[✅ accepted! - True Success]
        Q -->|success| S[⚠️ paranoid_success!]
        Q -->|error/expired| T[❌ rejected! + Failure Email]
        
        S --> P
        P -->|"Re-check"| U{Status Changed?}
        U -->|vbms| R
        U -->|error/expired| T
        U -->|processing| V[Revert to Pending]
    end

    style A fill:#e1f5fe
    style R fill:#c8e6c9
    style T fill:#ffcdd2
    style S fill:#fff9c4
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
        Note over Submit,Processor: Backup Submission (retries over ~3-4 days)
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

    rect rgb(248, 255, 240)
        Note over Poller,DB: Weekly Paranoid Success Check (Sunday 2 AM ET)
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

### Submit Job Retry Schedule (Sidekiq retry: 14)

| Retry # | Approximate Delay | Cumulative Time |
|---------|-------------------|-----------------|
| 1 | ~15 seconds | 15 sec |
| 2 | ~16 seconds | 31 sec |
| 3 | ~31 seconds | 1 min |
| 4 | ~1 minute | 2 min |
| 5 | ~2 minutes | 4 min |
| 6 | ~4 minutes | 8 min |
| 7 | ~8 minutes | 16 min |
| 8 | ~16 minutes | 32 min |
| 9 | ~32 minutes | 1 hr |
| 10 | ~1 hour | 2 hr |
| 11 | ~2 hours | 4 hr |
| 12 | ~4 hours | 8 hr |
| 13 | ~8 hours | 16 hr |
| 14 | ~11 hours | ~27 hr |

**Total time before exhaustion: ~3-4 days**

### Polling Schedule

| Job | Schedule | Purpose |
|-----|----------|---------|
| `Form526StatusPollingJob` | Daily at 3 AM ET | Check status of pending backup submissions |
| `Form526ParanoidSuccessPollingJob` | Weekly Sunday 2 AM ET | Re-verify "success" status submissions |

### Key Timeouts & Windows

| Parameter | Value | Description |
|-----------|-------|-------------|
| Upload Window | **15 minutes** | Time to upload after getting presigned URL |
| MAX_PENDING_TIME | **3 weeks** | Submissions older than this aren't polled |
| STALE_SLA | **10 days** | Alert threshold for stale submissions |
| PDF Max Size | **100 MB** | Maximum PDF file size |
| API Timeout | **30 seconds** | Default HTTP timeout |

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
