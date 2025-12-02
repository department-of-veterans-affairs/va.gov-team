# Vets-website VASS API Specification

This document describes the API specifications for VASS scheduling, defining the request/response structures between vets-website and vets-api.

## API Endpoints

### POST /vass/v0/request-otc

Requests a One-Time Code (OTC) to be emailed for a user's authentication.

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

**Response:**
```json
{
  "data": {
    "message": "OTC sent to registered email address"
  }
}
```

---

### POST /vass/v0/authenticate-otc

Authenticates user by validating the One-Time Code (OTC).  
Returns a JWT token for further API access on success.

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
    "expiresIn": 3600
  }
}
```
- `token`: JWT token to use as Bearer token for subsequent API calls.
- `expiresIn`: Token expiration, in seconds.

**Response (Failure):**
```json
{
  "errors": [
    {
      "code": "invalid_otc",
      "detail": "Invalid OTC, please try again"
    }
  ]
}
```

---

### GET /vass/v0/appointment-availablity

Retrieves available appointment time slots for an authenticated user. Requires a Bearer Token received after successful authentication.

**Request:**
- Method: `GET`
- Headers:
  - `Authorization: Bearer <token>`

**Response:**
```json
{
  "data": {
    "availableTimeSlots": [
      {
        "dtStartUtc": "2024-07-01T14:00:00Z",
        "dtEndUtc": "2024-07-01T14:30:00Z"
      },
      {
        "dtStartUtc": "2024-07-01T15:00:00Z",
        "dtEndUtc": "2024-07-01T15:30:00Z"
      }
      // ...more slots
    ]
  }
}
```

- `dtStartUtc`: ISO8601 UTC datetime string indicating the start of the slot.
- `dtEndUtc`: ISO8601 UTC datetime string indicating the end of the slot.

### GET /vass/v0/topics

Retrieves available topics for appointment booking or information. Requires a Bearer Token received after successful authentication.

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
    "appointmentId": "abcdef123456",
    "topics": [
      {
        "topicId": "123",
        "topicName": "General Health"
      }
      // ...more topics
    ],
    "dtStartUtc": "2024-07-01T14:00:00Z",
    "dtEndUtc": "2024-07-01T14:30:00Z"
  }
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
