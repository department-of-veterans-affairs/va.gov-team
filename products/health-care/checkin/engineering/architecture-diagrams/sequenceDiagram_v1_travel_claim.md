# Travel Claim Submission Flow

This diagram shows the complete flow from pre-check-in through travel claim submission.

## Flow Diagram

```mermaid
sequenceDiagram
    participant Client as Mobile Client
    participant Controller as TravelClaimsController
    participant Service as ClaimSubmissionService
    participant TPClient as TravelPayClient
    participant Cache as Redis Cache
    participant LoROTA as LoROTA API
    participant CHIP as CHIP API
    participant VEIS as VEIS OAuth
    participant BTSSS as BTSSS API

    Note over Client,BTSSS: Pre-Check-In Flow (stores ICN/station in Redis)

    Client->>Controller: 1. POST /v2/sessions<br/>(lastName, dob)
    Controller->>LoROTA: Create session
    LoROTA-->>Controller: Session token (encrypted cookie)
    Controller-->>Client: 200 OK (cie_session cookie)

    Client->>Controller: 2. GET /v2/patient_check_ins/:id<br/>(with cie_session cookie)
    Controller->>LoROTA: Get check-in data
    LoROTA-->>Controller: Appointment data (ICN, station_number)
    Controller->>Cache: Store ICN + station_number<br/>(by check_in_uuid)
    Controller-->>Client: 200 OK (appointment details)

    Note over Client,BTSSS: Travel Claim Submission Flow (V1 Synchronous)

    Client->>Controller: 3. POST /v1/travel_claims<br/>(uuid, appointment_date, facility_type)
    Controller->>Controller: Validate session (cie_session)
    Controller->>Service: submit_claim()

    Note over Service,BTSSS: Step 1: Get Appointment ID
    Service->>TPClient: send_appointment_request()
    TPClient->>TPClient: ensure_tokens!()

    alt Token in cache (hot path)
        TPClient->>Cache: fetch('token', expires_in: 54m,<br/>race_condition_ttl: 5m)
        Cache-->>TPClient: Cached VEIS token
    else Cache miss or stale (< 5m before expiry)
        TPClient->>Cache: Check cache (stale/empty)
        TPClient->>VEIS: POST /oauth2/token<br/>(client credentials)
        VEIS-->>TPClient: VEIS access_token
        TPClient->>Cache: Store token (54 min expiry)
        Note over TPClient,Cache: race_condition_ttl prevents<br/>concurrent mints here
    end

    TPClient->>VEIS: POST /api/v4/auth/system-access-token<br/>(VEIS token + ICN)
    VEIS-->>TPClient: BTSSS access_token
    TPClient->>BTSSS: POST /api/v3/appointments/find-or-add<br/>(BTSSS token)
    BTSSS-->>TPClient: appointment_id
    TPClient-->>Service: appointment_id

    Note over Service,BTSSS: Step 2: Create Claim
    Service->>TPClient: send_claim_request(appointment_id)
    TPClient->>BTSSS: POST /api/v3/claims<br/>(appointment_id)
    BTSSS-->>TPClient: claim_id
    TPClient-->>Service: claim_id

    Note over Service,BTSSS: Step 3: Add Expense
    Service->>TPClient: send_mileage_expense_request(claim_id)
    TPClient->>BTSSS: POST /api/v3/expenses/mileage<br/>(claim_id, date)
    BTSSS-->>TPClient: 200 OK
    TPClient-->>Service: Success

    Note over Service,BTSSS: Step 4: Submit Claim
    Service->>TPClient: send_claim_submission_request(claim_id)
    TPClient->>BTSSS: PATCH /api/v3/claims/:id/submit
    BTSSS-->>TPClient: Submission success
    TPClient-->>Service: Success

    Service->>Service: increment_success_metric()<br/>(worker.checkin.travel_claim.btsss.success)
    Service-->>Controller: { success: true, claimId: '...' }
    Controller-->>Client: 200 OK

    Note over Service,BTSSS: Error Handling
    alt BackendServiceException (API error)
        Service->>Service: increment_failure_metric()<br/>(worker.checkin.travel_claim.btsss.claim.failure)
        Service->>Service: increment_error_metric(@current_step)<br/>(appointment/claim_create/expense_add/claim_submit)
        Service-->>Controller: Raise exception
        Controller-->>Client: 4xx/502 error
    end
```

## Key Components

### Pre-Check-In (Steps 1-2)
- Creates authenticated session with LoROTA
- Retrieves and stores patient ICN and station number in Redis
- Required before travel claim can be submitted

### Travel Claim Submission (Step 3)
Synchronous 4-step process:
1. **Get Appointment**: Find or create appointment in BTSSS
2. **Create Claim**: Initialize claim for the appointment
3. **Add Expense**: Add mileage expense to claim
4. **Submit Claim**: Submit claim for processing

### Token Caching
- VEIS token cached in Redis with 54-minute expiration
- `race_condition_ttl: 5.minutes` prevents thundering herd during token refresh
- Cold start: 2-4 concurrent mints acceptable
- After warm-up: Only 1 mint per 54-minute cycle

### Metrics Tracked
- **Success**: `worker.checkin.travel_claim.btsss.success`
- **General Failure**: `worker.checkin.travel_claim.btsss.claim.failure`
- **Step-specific errors**:
  - `worker.checkin.travel_claim.btsss.appointment.error`
  - `worker.checkin.travel_claim.btsss.claim_create.error`
  - `worker.checkin.travel_claim.btsss.expense_add.error`
  - `worker.checkin.travel_claim.btsss.claim_submit.error`
- **Duplicate Claims**: `worker.checkin.travel_claim.btsss.duplicate`
