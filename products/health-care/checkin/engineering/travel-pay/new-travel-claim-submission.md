# Travel Claim V1 Backend Flow

## Overview

This document outlines the new V1 backend flow for submitting travel claims, which replaces the current single asynchronous endpoint approach with a coordinated sequence of 6 specific API calls to the Travel Pay API (BTSSS).

## Current State vs. New Flow

- **Current**: Single asynchronous endpoint that handles everything in one call
- **New**: Orchestrated sequence of 6 specific API calls in a specific order with proper error handling and state management

## Integration with Check-In Session

The new flow leverages the existing check-in session infrastructure to provide a seamless user experience:

- **Authentication**: Reuses existing LoROTA JWT validation
- **Patient Data**: Uses cached ICN (Individual Control Number) and facility information
- **Session Management**: Inherits all check-in context and appointment details
- **Audit Trail**: Full traceability from check-in to claim submission

## The 6 sequential external requests to the Travel Pay API

### Step 1: OAuth2 Token (`/oauth2/token`)

**Purpose**: Obtain initial OAuth2 access token for system-to-system authentication

**Method**: `POST`

**Endpoint**: `/oauth2/token`

**Required Parameters**:

- `grant_type`: `client_credentials`
- `client_id`: VA system client identifier
- `client_secret`: VA system client secret
- `scope`: Required OAuth2 scope

**Returns**:

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

**Integration**:

- Uses existing `TravelClaim::TokenClient` infrastructure
- Facility type determines client number (OH vs. standard)
- Token cached in Redis for reuse

---

### Step 2: System Access Token (`/api/v4/auth/system-access-token`)

**Purpose**: Get a system-level access token specifically for the Travel Pay API

**Method**: `POST`

**Endpoint**: `/api/v4/auth/system-access-token`

**Required Headers**:

- `X-Correlation-ID`: UUID for request tracing (uses check-in session UUID)
- `Content-Type`: `application/json`

**Required Body**:

```json
{
  "systemAccessRequest": {
    "clientId": "va-system-identifier",
    "clientSecret": "va-system-secret"
  }
}
```

**Returns**:

```json
{
  "data": {
    "accessToken": "btsss-v4-token",
    "expiresAt": "2024-01-15T10:00:00Z",
    "tokenType": "Bearer"
  }
}
```

**Integration**:

- Uses OAuth2 token from Step 1 for authentication
- ICN from check-in session for patient identification
- Token cached with non-PHI key for security

---

### Step 3: Find or Add Appointment (`POST /api/v3/appointments/find-or-add`)

**Purpose**: Locate existing appointment or create new one in Travel Pay system

**Method**: `POST`

**Endpoint**: `/api/v3/appointments/find-or-add`

**Required Headers**:

- `X-Correlation-ID`: UUID for request tracing
- `Authorization`: `Bearer {system_access_token}` (from Step 2)
- `Content-Type`: `application/json`

**Required Body**:

```json
{
  "appointmentDateTime": "2024-01-15T10:00:00Z",
  "facilityStationNumber": "123"
}
```

**Optional Body Fields**:

- `appointmentType`: Type of appointment
- `isComplete`: Whether appointment is completed

**Returns**:

```json
{
  "data": [
    {
      "id": "appointment-uuid-123",
      "appointmentDateTime": "2024-01-15T10:00:00Z",
      "facilityId": "facility-uuid",
      "facilityName": "VA Medical Center",
      "appointmentName": "Primary Care Visit",
      "isCompleted": true
    }
  ]
}
```

**Integration**:

- `appointmentDateTime` ← Check-in session appointment date
- `facilityStationNumber` ← Session `station_number` from Redis
- `appointmentName` ← Derived from appointment data or default value
- Returns array of matching appointments (use first one)

---

### Step 4: Create Claim (`POST /api/v3/claims`)

**Purpose**: Create the travel claim record in the system

**Method**: `POST`

**Endpoint**: `/api/v3/claims`

**Required Headers**:

- `X-Correlation-ID`: UUID for request tracing
- `Authorization`: `Bearer {system_access_token}` (from Step 2)
- `Content-Type`: `application/json`

**Required Body**:

```json
{
  "appointmentId": "appointment-uuid-123",
  "claimName": "Travel Reimbursement - Primary Care Visit",
  "claimantType": "Veteran"
}
```

**Returns**:

```json
{
  "data": {
    "claimId": "claim-uuid-456"
  }
}
```

**Integration**:

- `appointmentId` ← UUID from Step 3 response
- `claimName` ← Derived from appointment context (5-300 chars)
- `claimantType` ← Determined from patient demographics
- `claimId` becomes required for subsequent steps

---

### Step 5: Add Mileage Expense (`POST /api/v3/expenses/mileage`)

**Purpose**: Add mileage expense details to the claim

**Method**: `POST`

**Endpoint**: `/api/v3/expenses/mileage`

**Required Headers**:

- `X-Correlation-ID`: UUID for request tracing
- `Authorization`: `Bearer {system_access_token}` (from Step 2)
- `Content-Type`: `application/json`

**Required Body**:

```json
{
  "claimId": "claim-uuid-456",
  "dateIncurred": "2024-01-15T10:00:00Z",
  "description": "Round trip travel to VA Medical Center for primary care appointment",
  "tripType": "RoundTrip"
}
```

**Returns**:

```json
{
  "data": {
    "expenseId": "expense-uuid-789"
  }
}
```

**Integration**:

- `claimId` ← UUID from Step 4 response
- `dateIncurred` ← Check-in session appointment date
- `description` ← Derived from facility/appointment context (5-2000 chars)
- `tripType` ← Likely "RoundTrip" based on current implementation
- `expenseId` for potential future expense management

**Error Handling**:

- 400: Bad request (missing required fields)
- 401: Unauthorized
- 403: Forbidden
- 408: Request timeout
- 429: Too many requests
- 500: Server error
- 502: Bad gateway

---

### Step 6: Submit Claim (`PATCH /api/v3/claims/{claimId}/submit`)

**Purpose**: Finalize and submit the claim for processing

**Method**: `PATCH`

**Endpoint**: `/api/v3/claims/{claimId}/submit`

**Required Headers**:

- `X-Correlation-ID`: UUID for request tracing
- `Authorization`: `Bearer {system_access_token}` (from Step 2)
- `Content-Type`: `application/json`

**Path Parameters**:

- `claimId`: UUID from Step 4 (required)

**Returns**:

```json
{
  "data": {
    "claimId": "claim-uuid-456"
  }
}
```

**Integration**:

- `claimId` ← UUID from Step 4 response
- Final step that activates the claim for processing
- No additional body parameters required

## Data Flow and Dependencies

### Sequential Dependencies

Each step depends on the successful completion of the previous step:

1. **OAuth2 Token** → Required for Step 2
2. **System Access Token** → Required for Steps 3-6
3. **Appointment ID** → Required for Step 4
4. **Claim ID** → Required for Steps 5-6
5. **Expense ID** → Optional for future reference
6. **Claim Submission** → Final activation

## Implementation Considerations

### New V1 Controller

- **Route**: `POST /check_in/v1/travel_claims`
- **Parameters**: `uuid` (session identifier), `appointment_date` (optional)
- **Authentication**: Reuse existing session authorization
- **Response**: Immediate acknowledgment with job ID for tracking
