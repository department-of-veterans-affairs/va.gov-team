# VA.gov Claims Status Tool - BenefitsClaimsController Architecture

This document outlines the architecture flow for a user accessing their claims status on VA.gov.

## High-Level Architecture

```mermaid
flowchart LR
    User[👤 User] --> VAGov[🌐 VA.gov Frontend]
    VAGov --> VetsAPI[🔧 vets-api]
    VetsAPI --> Controller[📋 BenefitsClaimsController]
    Controller --> LHService[☁️ Lighthouse Service]
    Controller --> DB[(🗄️ Database)]
    LHService --> External[External VA Systems]
```

## User Flow: Claim Status Tool - `/track-claims/your-claims` (Index)

```mermaid
sequenceDiagram
    participant User
    participant VAGov as VA.gov Frontend
    participant VetsAPI as vets-api
    participant Controller as BenefitsClaimsController
    participant LHService as Lighthouse Service
    participant DB as Database

    User->>VAGov: Navigate to VA.gov and login
    VAGov->>User: Authentication flow
    User->>VAGov: Login credentials
    VAGov->>User: Authenticated session

    User->>VAGov: Navigate to claims status page
    VAGov->>VetsAPI: GET /v0/benefits_claims
    Note over VetsAPI: Authorization check
    VetsAPI->>Controller: index action

    Controller->>LHService: get_claims()
    LHService-->>Controller: Claims data

    Controller->>Controller: update_claim_type_language()
    alt Feature flag enabled: cst_show_document_upload_status
        Controller->>DB: Query EvidenceSubmission records
        Controller->>Controller: add_has_failed_uploads()
        DB-->>Controller: Upload status data
    end

    Controller->>Controller: tap_claims() - Update EVSSClaim records updatedAt
    Controller->>DB: Create/update claim records
    Controller->>VAGov: JSON response with claims
    VAGov->>User: Display claims status page
```

## User Flow: Claim Status Tool - `/track-claims/your-claims/{id}` (Show)

```mermaid
sequenceDiagram
    participant User
    participant VAGov as VA.gov Frontend
    participant VetsAPI as vets-api
    participant Controller as BenefitsClaimsController
    participant LHService as Lighthouse Service
    participant DB as Database

    User->>VAGov: Navigate to individual claim page
    VAGov->>VetsAPI: GET /v0/benefits_claims/{id}
    Note over VetsAPI: Authorization check
    VetsAPI->>Controller: show action

    Controller->>LHService: get_claim(id)
    LHService-->>Controller: Individual claim data

    Controller->>Controller: update_claim_type_language()
    Controller->>Controller: rename_rv1() - Manual status override

    alt Feature flag enabled: cst_suppress_evidence_requests_website
        Controller->>Controller: suppress_evidence_requests()
    end

    Controller->>Controller: Set canUpload based on birls_id

    alt Feature flag enabled: cst_show_document_upload_status
        Controller->>DB: Query EvidenceSubmission records
        DB-->>Controller: Evidence submission data
        alt Feature flag enabled: cst_update_evidence_submission_on_show
            Controller->>LHService: Poll for updated evidence submission statuses
            LHService-->>Controller: Updated status data
            Controller->>DB: Update evidence submission records
        end
        Controller->>Controller: add_evidence_submissions()
    end

    Controller->>Controller: log_claim_details() - DataDog logging
    Controller->>Controller: tap_claims() - Update EVSSClaim record updatedAt
    Controller->>DB: Update claim record
    Controller->>VAGov: JSON response with claim details
    VAGov->>User: Display individual claim page
```

## User Flow: Submit 5103 Waiver - `/track-claims/your-claims/{id}/submit5103` (Submit5103)

```mermaid
sequenceDiagram
    participant User
    participant VAGov as VA.gov Frontend
    participant VetsAPI as vets-api
    participant Controller as BenefitsClaimsController
    participant LHService as Lighthouse Service

    User->>VAGov: Submit 5103 waiver for claim
    VAGov->>VetsAPI: POST /v0/benefits_claims/{id}/submit5103
    Note over VetsAPI: Authorization check
    VetsAPI->>Controller: submit5103 action

    Note over Controller: Log if user has no file number (BIRLS ID)

    Controller->>Controller: Parse JSON payload with optional trackedItemId

    Controller->>LHService: submit5103(id, trackedItemId)
    LHService-->>Controller: 5103 submission response

    Controller->>VAGov: JSON response
    VAGov->>User: Display submission confirmation
```

## User Flow: Failed Evidence Submissions - `/track-claims/failed_upload_evidence_submissions` (Failed Uploads)

```mermaid
sequenceDiagram
    participant User
    participant VAGov as VA.gov Frontend
    participant VetsAPI as vets-api
    participant Controller as BenefitsClaimsController
    participant LHService as Lighthouse Service
    participant DB as Database

    User->>VAGov: Navigate to failed uploads page
    VAGov->>VetsAPI: GET /v0/benefits_claims/failed_upload_evidence_submissions
    Note over VetsAPI: Authorization check
    VetsAPI->>Controller: failed_upload_evidence_submissions action

    alt Feature flag enabled: cst_show_document_upload_status
        Controller->>DB: Query failed EvidenceSubmission records for user
        DB-->>Controller: Failed evidence submissions

        loop For each failed submission
            Controller->>LHService: get_claim(claim_id) if not cached
            LHService-->>Controller: Claim data with tracked items
            Controller->>Controller: Build filtered evidence submission record
        end

        Controller->>VAGov: JSON response with filtered failed submissions
        alt Has failed submissions
            VAGov->>User: Display failed uploads information
        else No failed submissions
            VAGov->>User: Redirect to /track-claims/your-claims
        end
    else Feature flag disabled
        Controller->>VAGov: JSON response with empty array
        VAGov->>User: Redirect to /track-claims/your-claims
    end
```

## System Components

### Frontend (VA.gov)

- **VA.gov Frontend**: Single-page application that handles user authentication and displays claims status information

### Backend (vets-api)

- **BenefitsClaimsController**: Rails controller handling claims API endpoints
- **Lighthouse Service**: Integration with Lighthouse Benefits Claims API
- **EvidenceSubmission Model**: Database model for document upload tracking

## Key Features

### Authorization & Validation

- User must be authenticated with lighthouse access

### Data Processing

- Claim type language mapping for user-friendly display
- Document upload status tracking (behind feature flag)
- Evidence submission filtering and metadata processing

### Logging & Monitoring

- Detailed claim type logging for DataDog analytics
- Evidence request tracking for support purposes

## Feature Flags

### General CST:

- `cst_suppress_evidence_requests_website`: Controls evidence request suppression (show endpoint only)
- `cst_use_claim_title_generator_web`: Enables the claim title generator to add `displayTitle` and `claimTypeBase` to claim responses

### [Document Status Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Document%20Status%20Initiative.md)

- `cst_show_document_upload_status`: Controls document upload status display and evidence submission tracking
- `cst_update_evidence_submission_on_show`: Enables polling Lighthouse for updated evidence submission statuses when viewing a claim (show endpoint only)

## API Response Structure

The base response structure for claims data comes from the [Lighthouse Benefits Claims API](https://developer.va.gov/explore/api/benefits-claims/docs?version=current). The following sections describe the transformations applied to the Lighthouse response before returning it to the frontend.

### Index Endpoint (`GET /v0/benefits_claims`)

**Base Response:** [Lighthouse GET /benefits-claims](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)

**Response Transformations:**

| Transformation | Description | Feature Flag |
|----------------|-------------|--------------|
| `claimType` mapping | Replaces `claimType` values using `BenefitsClaims::Constants::CLAIM_TYPE_LANGUAGE_MAP` for user-friendly display | Default (when title generator disabled) |
| Add `displayTitle` | Adds human-readable claim title to `attributes.displayTitle` | `cst_use_claim_title_generator_web` |
| Add `claimTypeBase` | Adds base claim type classification to `attributes.claimTypeBase` | `cst_use_claim_title_generator_web` |
| Add `evidenceSubmissions` | Adds array of evidence submission records to `attributes.evidenceSubmissions` for each claim (see Evidence Submissions structure below) | `cst_show_document_upload_status` |

### Show Endpoint (`GET /v0/benefits_claims/{id}`)

**Base Response:** [Lighthouse GET /benefits-claims/{id}](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)

**Response Transformations:**

| Transformation | Description | Feature Flag |
|----------------|-------------|--------------|
| `claimType` mapping | Replaces `claimType` values using `BenefitsClaims::Constants::CLAIM_TYPE_LANGUAGE_MAP` for user-friendly display | Default (when title generator disabled) |
| Add `displayTitle` | Adds human-readable claim title to `attributes.displayTitle` | `cst_use_claim_title_generator_web` |
| Add `claimTypeBase` | Adds base claim type classification to `attributes.claimTypeBase` | `cst_use_claim_title_generator_web` |
| RV1 status override | Changes `status` to `NEEDED_FROM_OTHERS` for tracked items with `displayName` of "RV1 - Reserve Records Request" | Always applied |
| Suppress evidence requests | Removes tracked items with `displayName` values in `BenefitsClaims::Constants::SUPPRESSED_EVIDENCE_REQUESTS` | `cst_suppress_evidence_requests_website` |
| Add `canUpload` | Adds `attributes.canUpload` boolean based on presence of user's BIRLS ID | Always applied |
| Add `evidenceSubmissions` | Adds array of evidence submission records to `attributes.evidenceSubmissions` (see Evidence Submissions structure below) | `cst_show_document_upload_status` |

### Submit 5103 Endpoint (`POST /v0/benefits_claims/{id}/submit5103`)

**Request Payload:**

```json
{
  "trackedItemId": "string (optional)"
}
```

**Response:** Returns the Lighthouse service response directly without transformation. See [Lighthouse POST /benefits-claims/{id}/5103](https://developer.va.gov/explore/api/benefits-claims/docs?version=current).

### Failed Upload Evidence Submissions Endpoint (`GET /v0/benefits_claims/failed_upload_evidence_submissions`)

**Note:** This endpoint does not call Lighthouse directly. It queries local `EvidenceSubmission` records and enriches them with tracked item information from Lighthouse.

**Response Structure:**

When `cst_show_document_upload_status` feature flag is enabled, returns:

```json
{
  "data": [ /* Array of Evidence Submission objects (see Evidence Submissions Structure below) */ ]
}
```

When feature flag is disabled, returns: `{ "data": [] }`

### Evidence Submissions Structure

When `cst_show_document_upload_status` feature flag is enabled, the `evidenceSubmissions` array added to claims contains:

```json
{
  "acknowledgement_date": "timestamp",
  "claim_id": "integer",
  "created_at": "timestamp",
  "delete_date": "timestamp",
  "document_type": "string",
  "failed_date": "timestamp",
  "file_name": "string",
  "id": "integer",
  "lighthouse_upload": "boolean",
  "tracked_item_id": "integer",
  "tracked_item_display_name": "string",
  "tracked_item_friendly_name": "string",
  "upload_status": "string",
  "va_notify_status": "string"
}
```

**Note:** Evidence submissions are filtered to exclude duplicates that already appear in the claim's `supportingDocuments` (matched by `originalFileName`).
