# Error responses from vets-api

This document is meant as a temporary record of some of the unique error handling that we do for Community Care Direct Scheduling `/my-health/appointments/referrals-requests`

## Errors returned for draft appointment

Provider not found:

```
{
  "errors": [
    {
      "title": "Appointment creation failed",
      "detail": "Provider not found"
    }
  ]
}
```

Missing no slots or drive time  ```
{
  "data": {
    "id": "draft-123",
    "type": "draft_appointment",
    "attributes": {
      "provider": { /* provider details */ },
      "slots": null,
      "drivetime": null
    }
  }
} ```  Errors returned upstream for slots or drive time
```
{
  "errors": [{
    "title": "Appointment creation failed",
    "detail": "Could not create appointment",
    "meta": {
      "original_detail": "...",
      "original_error": "EPS error message",
      "code": 500,
      "backend_response": "..."
    }
  }]
}
```
