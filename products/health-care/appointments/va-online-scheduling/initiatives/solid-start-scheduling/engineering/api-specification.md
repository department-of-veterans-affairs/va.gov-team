# Vets-website VASS API Specification

This document describes the API specifications for VASS scheduling, defining the request/response structures between vets-website and vets-api.

## API Endpoints

### GET /vass/v0/authenticate

Authenticates user with uuid, lastname, dob

**Request:**
**Response:**
```json
{...}
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
