# Vets-website VASS API Specification

This document describes the API specifications for VASS scheduling, defining the request/response structures between vets-website and vets-api. 

## API Endpoints

### POST /vass/v0/request-otc

Requests a One-Time Code (OTC) to be emailed for a user's authentication. 

**Security Notes:**
- Rate limited to 3 requests per UUID per 15 minutes
- OTC expires after 10 minutes
- Previous OTC is invalidated when new one is requested
- UUIDs must be validated against VASS before sending OTC

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
    "message": "OTC sent to registered email address",
    "expiresIn": 600,
    "email": "e***@email.com"
  }
}
```
- `expiresIn`: Time in seconds until OTC expires (10 minutes)

**Response (Rate Limited):**
```json
{
  "errors": [
    {
      "code": "rate_limit_exceeded",
      "detail": "Too many OTC requests.  Please try again later.",
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

---

### POST /vass/v0/authenticate-otc

Authenticates user by validating the One-Time Code (OTC).   
Returns a JWT token for further API access on success.

**Security Notes:**
- Maximum 5 OTC validation attempts before account lockout
- OTC is cleared from Redis immediately after successful validation
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
  "otc": "123456"
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

**Response (Invalid OTC):**
```json
{
  "errors": [
    {
      "code": "invalid_otc",
      "detail": "Invalid or expired OTC.  Please try again.",
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
      "detail": "Too many failed attempts.  Please request a new OTC.",
      "retryAfter": 900
    }
  ]
}
```
- `retryAfter`: Time in seconds before a new OTC can be requested (15 minutes)

**Response (OTC Expired):**
```json
{
  "errors": [
    {
      "code": "otc_expired",
      "detail": "OTC has expired. Please request a new one."
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
      "code": "missing_topics",
      "detail": "Topics are required"
    }
  ]
}
```

**Response (Missing start time):**
```json
{
  "errors": [
    {
      "code": "missing_start_time",
      "detail": "Start time is required"
    }
  ]
}
```

**Response (Missing end time):**
```json
{
  "errors": [
    {
      "code": "missing_end_time",
      "detail": "End time is required"
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
      "code": "missing_appointment_id",
      "detail": "Appointment ID is required"
    }
  ]
}
```

- `appointmentId`: Unique identifier for the appointment.
- `topics`: Array of topics associated with the appointment.
- `dtStartUtc`: Start date and time (UTC, ISO8601). 
- `dtEndUtc`: End date and time (UTC, ISO8601).

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


## Security Considerations

### Authentication Flow Security
- **OTC Generation**: 6-digit numeric codes, cryptographically random
- **OTC Storage**: Hashed in Redis with 10-minute TTL
- **OTC Validation**: Maximum 5 attempts before 15-minute lockout
- **Rate Limiting**: 3 OTC requests per UUID per 15 minutes
- **JWT Algorithm**: RS256 (RSA Signature with SHA-256)
- **JWT Claims**: Includes `jti`, `exp`, `iat`, `sub` (uuid)
- **Token Storage**: Active tokens stored in Redis for revocation capability
- **Token Expiration**: 1 hour (3600 seconds)

### Data Protection
- **Transport**: All endpoints require HTTPS/TLS 1. 3+
- **PII Handling**: Lastname and DOB validated server-side only
- **Credential Validation**: Timing-safe comparison to prevent timing attacks
- **Error Messages**: Generic messages to prevent information disclosure

### Implementation Requirements
1. All failed authentication attempts must be logged with UUID and timestamp
2. Successful authentications must be logged for audit purposes
3. OTC must be cleared from Redis immediately after successful validation
4. Previous OTC must be invalidated when new one is requested
5. JWT tokens must include `jti` claim for revocation tracking
6.  Revoked tokens must remain in Redis blacklist until expiration
7. UUID must be validated against VASS before sending OTC
