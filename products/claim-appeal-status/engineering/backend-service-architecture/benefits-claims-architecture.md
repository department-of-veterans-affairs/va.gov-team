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
        Controller->>Controller: add_evidence_submissions()
    end

    Controller->>Controller: log_claim_details() - DataDog logging
    Controller->>Controller: tap_claims() - Update EVSSClaim record updatedAt
    Controller->>DB: Update claim record
    Controller->>VAGov: JSON response with claim details
    VAGov->>User: Display individual claim page
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
- `cst_show_document_upload_status`: Controls document upload status display
- `cst_suppress_evidence_requests_website`: Controls evidence request suppression (show endpoint only)

## API Response Structure

### Index Endpoint (`/v0/benefits_claims`)
Returns JSON array with:
- List of all user claims with processed language mappings
- Upload failure status per claim (when `cst_show_document_upload_status` feature enabled)
- Basic claim information and tracked items

### Show Endpoint (`/v0/benefits_claims/{id}`)
Returns JSON object with:
- Individual claim details with processed language mappings
- Manual status overrides (RV1 items)
- Filtered evidence requests (when `cst_suppress_evidence_requests_website` feature enabled)
- `canUpload` flag based on user's BIRLS ID
- Evidence submission metadata (when `cst_show_document_upload_status` feature enabled)
- Detailed tracked items with status information
