# Vets-website VASS API Specification

This document describes the API specifications for VASS scheduling, defining the request/response structures between vets-website and vets-api. 

## API Endpoints

### POST /vass/v0/request-otp

Requests a One-Time Code (OTP) to be emailed for a user's authentication. 

**Security Notes:**
- Rate limited to 3 requests per UUID per 15 minutes
- OTP expires after 10 minutes
- Previous OTP is invalidated when new one is requested
- UUIDs must be validated against VASS before sending OTP

**Request:**
- Method: `POST`
- Headers:
  - `Content-Type: application/json`
- Body:
```json
{
  "uuid": "c0ffee-1234-beef-5678",
  "lastname": "Smith",
  "dob": "1968-06-22"
}
```

**Response (Success):**
```json
{
  "data": {
    "message": "OTP sent to registered email address",
    "expiresIn": 600,
    "email": "e***@email.com"
  }
}
```
- `expiresIn`: Time in seconds until OTP expires (10 minutes)

**Response (Rate Limited):**
```json
{
  "errors": [
    {
      "code": "rate_limit_exceeded",
      "detail": "Too many OTP requests.  Please try again later.",
      "retryAfter": 900
    }
  ]
}
```
- `retryAfter`: Time in seconds before another request can be made

**Response (Invalid Credentials):**
```json
{
  "errors": [
    {
      "code": "invalid_credentials",
      "detail": "Unable to verify identity. Please check your information."
    }
  ]
}
```

**Response (Missing uuid):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: uuid"
    }
  ]
}
```

**Response (Missing last name):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: last_name"
    }
  ]
}
```

**Response (Missing dob):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: dob"
    }
  ]
}
```

---

### POST /vass/v0/authenticate-otp

Authenticates user by validating the One-Time Code (OTP).   
Returns a JWT token for further API access on success.

**Security Notes:**
- Maximum 5 OTP validation attempts before account lockout
- OTP is cleared from Redis immediately after successful validation
- Failed attempts are tracked per UUID
- JWT uses RS256 signing algorithm
- Token includes `jti` (JWT ID) for revocation capability

**Request:**
- Method: `POST`
- Headers:
  - `Content-Type: application/json`
- Body:
```json
{
  "uuid": "c0ffee-1234-beef-5678",
  "lastname": "Smith",
  "dob": "1968-06-22",
  "otp": "123456"
}
```

**Response (Success):**
```json
{
  "data": {
    "token": "<JWT token string>",
    "expiresIn": 3600,
    "tokenType": "Bearer"
  }
}
```
- `token`: JWT token to use as Bearer token for subsequent API calls (RS256 signed)
- `expiresIn`: Token expiration in seconds (1 hour)
- `tokenType`: Token type for Authorization header

**Response (Invalid OTP):**
```json
{
  "errors": [
    {
      "code": "invalid_otp",
      "detail": "Invalid or expired OTP.  Please try again.",
      "attemptsRemaining": 3
    }
  ]
}
```
- `attemptsRemaining`: Number of validation attempts left before lockout

**Response (Account Locked):**
```json
{
  "errors": [
    {
      "code": "account_locked",
      "detail": "Too many failed attempts.  Please request a new OTP.",
      "retryAfter": 900
    }
  ]
}
```
- `retryAfter`: Time in seconds before a new OTP can be requested (15 minutes)

**Response (OTP Expired):**
```json
{
  "errors": [
    {
      "code": "otp_expired",
      "detail": "OTP has expired. Please request a new one."
    }
  ]
}
```

**Response (Missing uuid):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: uuid"
    }
  ]
}
```

**Response (Missing last name):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: last_name"
    }
  ]
}
```

**Response (Missing dob):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: dob"
    }
  ]
}
```

**Response (Missing otp):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: otp"
    }
  ]
}
```


---

### POST /vass/v0/revoke-token

Revokes an active JWT token (logout functionality).

**Request:**
- Method: `POST`
- Headers:
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`

**Response (Success):**
```json
{
  "data": {
    "message": "Token successfully revoked"
  }
}
```

**Response (Invalid Token):**
```json
{
  "errors": [
    {
      "code": "invalid_token",
      "detail": "Token is invalid or already revoked"
    }
  ]
}
```

---

### GET /vass/v0/appointment-availablity

Retrieves available appointment time slots for an authenticated user.  Requires a Bearer Token received after successful authentication.

**Request:**
- Method: `GET`
- Headers:
  - `Authorization: Bearer <token>`

**Response:**
```json
{
  "data": {
    "appointmentId": "e61e1a40-1e63-f011-bec2-001dd80351ea",
    "availableTimeSlots": [
      {
        "dtStartUtc": "2024-07-01T14:00:00Z",
        "dtEndUtc": "2024-07-01T14:30:00Z"
      },
      {
        "dtStartUtc": "2024-07-01T15:00:00Z",
        "dtEndUtc": "2024-07-01T15:30:00Z"
      }
      // ... more slots
    ]
  }
}
```

- `dtStartUtc`: ISO8601 UTC datetime string indicating the start of the slot. 
- `dtEndUtc`: ISO8601 UTC datetime string indicating the end of the slot.

**Response (already booked for current cohort):**

```json
{
    "errors": [
        {
            "code": "appointment_already_booked",
            "detail": "already scheduled",
            "appointment": {
                "appointmentId": "e61e1a40-1e63-f011-bec2-001dd80351ea",
                "dtStartUTC": "2025-12-20T14:00:00Z",
                "dtEndUTC": "2025-12-20T14:30:00Z"
            }
        }
    ]
}
```

**Response (current date outside of cohort date ranges):**

```json
{
    "errors": [
        {
            "code": "not_within_cohort",
            "detail": "Current date outside of appointment cohort date ranges"
        }
    ]
}
```

**Response (no slots available):**

```json
{
    "errors": [
        {
            "code": "no_slots_available",
            "detail": "No available appointment slots"
        }
    ]
}
```

---

### GET /vass/v0/topics

Retrieves available topics for appointment booking or information.  Requires a Bearer Token received after successful authentication.

**Request:**
- Method: `GET`
- Headers:
  - `Authorization: Bearer <token>`

**Response:**
```json
{
  "data": {
    "topics": [
      {
        "topicId": "123",
        "topicName": "General Health"
      },
      {
        "topicId": "456",
        "topicName": "Mental Health"
      }
      // ...more topics
    ]
  }
}
```

- `topicId`: Unique identifier for the topic. 
- `topicName`: Name or description of the topic.

---

### POST /vass/v0/appointment

Submits a request for a new appointment. Requires a Bearer Token received after authentication.

**Request:**
- Method: `POST`
- Headers:
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`
- Body:
```json
{
  "topics": [
    "123",
    "456"
    // ...more topicIds
  ],
  "dtStartUtc": "2024-07-01T14:00:00Z",
  "dtEndUtc": "2024-07-01T14:30:00Z"
}
```
- `topics`: An array of topicId values related to the appointment.
- `dtStartUtc`: ISO8601 UTC datetime string for the appointment start. 
- `dtEndUtc`: ISO8601 UTC datetime string for the appointment end.

**Response:**
```json
{
  "data": {
    "appointmentId": "abcdef123456"
  }
}
```
- `appointmentId`: Unique identifier for the newly created appointment.

**Response (Missing topics):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: topics"
    }
  ]
}
```

**Response (Missing start time):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: dtStartUtc"
    }
  ]
}
```

**Response (Missing end time):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: dtEndUtc"
    }
  ]
}
```

**Response (Appointment save failed):**
```json
{
  "errors": [
    {
      "code": "appointment_save_failed",
      "detail": "Failed to save appointment"
    }
  ]
}
```

---

### GET /vass/v0/appointment/{appointmentId}

Retrieves details of a specific appointment by its unique identifier. Requires a Bearer Token received after authentication.

**Request:**
- Method: `GET`
- Headers:
  - `Authorization: Bearer <token>`
- Path Parameters:
  - `appointmentId`: The unique identifier of the appointment to retrieve.

**Response:**
```json
{
    "data": {
        "appointmentId": "e61e1a40-1e63-f011-bec2-001dd80351ea",
        "startUTC": "2025-12-24T10:00:00Z",
        "endUTC": "2025-12-24T10:30:00Z",
        "agentId": "353dd0fc-335b-ef11-bfe3-001dd80a9f48",
        "agentNickname": "Agent Smith",
        "appointmentStatusCode": 1,
        "appointmentStatus": "Confirmed",
        "cohortStartUtc": "2025-12-01T00:00:00Z",
        "cohortEndUtc": "2026-02-28T23:59:59Z"
    }
}
```

**Response (Appointment not found):**
```json
{
  "errors": [
    {
      "code": "appointment_not_found",
      "detail": "Appointment not found"
    }
  ]
}
```

**Response (Missing appointment id):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: appointment_id"
    }
  ]
}
```

- `appointmentId`: Unique identifier for the appointment.
- `topics`: Array of topics associated with the appointment.
- `dtStartUtc`: Start date and time (UTC, ISO8601). 
- `dtEndUtc`: End date and time (UTC, ISO8601).

---

### POST /vass/v0/appointment/{appointmentId}/cancel

Cancels an existing appointment. Requires a Bearer Token received after authentication. 

**Request:**
- Method: `POST`
- Headers:
  - `Authorization: Bearer <token>`
- Path Parameters:
  - `appointmentId`: The unique identifier of the appointment to cancel. 

**Response:**
```json
{
  "data": {
    "appointmentId": "abcdef123456"
  }
}
```
- `appointmentId`: The unique identifier of the cancelled appointment.

**Response (Cancellation failed):**
```json
{
  "errors": [
    {
      "code": "cancellation_failed",
      "detail": "Failed to cancel appointment"
    }
  ]
}
```

**Response (Missing appointment id):**
```json
{
  "errors": [
    {
      "code": "missing_parameter",
      "detail": "param is missing or the value is empty: appointment_id"
    }
  ]
}
```

---

### Unauthorized Responses

**Response (Invalid / malformed token):**
```json
{
    "errors": [
        {
            "code": "unauthorized",
            "detail": "Invalid or malformed token"
        }
    ]
}
```

**Response (Expired token):**
```json
{
    "errors": [
        {
            "code": "unauthorized",
            "detail": "Token has expired"
        }
    ]
}
```

---

### External Service Errors

**Response (Bad Gateway):**
```json
{
  "errors": [
    {
      "code": "vass_api_error",
      "detail": "Unable to connect to scheduling service"
    }
  ]
}
```

**Response (Service Unavailable):**
```json
{
  "errors": [
    {
      "code": "service_error",
      "detail": "Service temporarily unavailable"
    }
  ]
}
```

---

## Security Considerations

### Authentication Flow Security
- **OTC Generation**: 6-digit numeric codes, cryptographically random
- **OTC Storage**: Stored in Redis with 10-minute TTL
- **OTC Cleared**: Immediately after successful validation (single-use)
- **OTC Validation**: Maximum 5 attempts before 15-minute lockout
- **Rate Limiting**: 3 OTC requests per UUID per 15 minutes
- **JWT Algorithm**: HS256 (HMAC with SHA-256)
- **JWT Claims**: Includes `jti`, `exp`, `iat`, `sub` (uuid)
- **Token Expiration**: 1 hour (3600 seconds)

### Session Security
- **One Session Per Veteran**: Sessions keyed by UUID. Issuing a new token automatically invalidates previous tokens.
- **JTI Validation**: Each authenticated request validates the token's `jti` matches the active session. Stale tokens are rejected even if not expired.
- **Token Revocation**: `POST /revoke-token` endpoint allows explicit logout. Deletes session from Redis, immediately invalidating the token.

### Identity Validation
- **OTC Authentication**: Submitted `last_name` and `dob` are validated against values stored when OTC was requested. Prevents use of intercepted OTC without knowing veteran's identity.
- **Constant-Time Comparison**: OTC validation uses `ActiveSupport::SecurityUtils.secure_compare` to prevent timing attacks.

### Data Protection
- **Transport**: All endpoints require HTTPS/TLS 1.3+
- **PII Handling**: Last name and DOB validated server-side only. Only appointment information returned to client.
- **Error Messages**: Generic messages prevent information disclosure (e.g., invalid credentials vs. user not found)

### Endpoint Abuse Scenarios and Mitigations

| Endpoint | Abuse Scenario | Mitigation |
|----------|---------------|------------|
| `POST /request-otc` | UUID enumeration | Generic error messages regardless of UUID validity |
| `POST /request-otc` | OTC flooding / lockout | Rate limit: 3 requests per UUID per 15 minutes |
| `POST /authenticate-otc` | Brute force OTC | 5 attempt limit before 15-minute lockout |
| `POST /authenticate-otc` | Intercepted OTC | Identity re-validation (last_name + DOB must match) |
| `POST /authenticate-otc` | Timing attack | Constant-time comparison for OTC |
| `POST /revoke-token` | Unauthorized revocation | Requires valid JWT; only affects own session |
| `GET /appointment-availability` | Information disclosure | JWT authentication required |
| `POST /appointment` | Booking as another veteran | JWT `sub` claim binds session to specific UUID |

### Audit Trail
All security events logged in structured JSON with:
- `vass_uuid` - Veteran identifier for request correlation
- `jti` - JWT ID for session-level tracing
- `action` - Event type (e.g., `jwt_issued`, `auth_failure`, `invalid_otc`)

See [logging.md](./logging.md) for complete event reference.
