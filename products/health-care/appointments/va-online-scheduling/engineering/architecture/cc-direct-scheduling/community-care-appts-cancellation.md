## Community Care (EPS) Appointment Cancellation

This document summarizes the current product direction and technical flow for cancelling Community Care (EPS/Wellhive) and VAOS appointments in vets-api.

### Goals

- Prevent data de-synchronization between VAOS and EPS by coordinating cancellations.
- Provide clear user feedback (via VA Notify) when cancellation fails.
- Maintain auditability with clear logs and (future) Wellhive trace usage.

### Sources of Truth

- We treat VAOS and EPS as independent sources that must both reflect the same appointment state. For a cancellation to be considered successful, both sources should end in a cancelled state.

### Key Assumptions

- We will have both appointment IDs (VAOS and EPS) when initiating cancellation.
- EPS requires a cancel reason; we will fetch valid reasons and select the one whose name equals "Patient".
- If EPS cancellation fails after VAOS has been cancelled, we will attempt to revert the VAOS cancellation to avoid split-brain state.
- If any step fails, we will notify the Veteran via VA Notify (email/SMS) from vets-api.

### References

- Wellhive Care Navigation API: `https://wellhive.github.io/api-docs/`

---

## Product-Level Flow (Happy Path and Failures)

```mermaid
flowchart TD

    A[Start: Cancellation Requested] --> B[Cancel in VAOS using VAOS Appointment ID]
    B -->|Success| C[Fetch EPS Cancel Reasons]
    B -->|Fail| F[Notify via VA Notify and return error to Frontend]

    C --> C1[Select cancelReasonId where name == Patient]
    C1 --> D[Cancel in EPS using EPS Appointment ID and cancelReasonId]

    D -->|Accepted| P[Poll EPS until state == cancelled or error]
    P -->|Cancelled| G[Done - both systems cancelled]
    P -->|Error/Timeout| E[Revert VAOS to previous state]
    E --> H[Notify via VA Notify and return error to Frontend]

    F --> I[End]
    G --> I
    H --> I
```

Notes:

- EPS requires a valid `cancelReasonId`: we first retrieve reasons from EPS for the given appointment, select the one with `name == "Patient"`, and use its ID for the cancellation call.
- If EPS cancellation fails after a successful VAOS cancellation, we attempt to revert VAOS to avoid divergence.
- If any API call fails along the way, we send a VA Notify message to the Veteran.

---

## Full Technical Sequence Diagram (with controllers/services and notifications)

```mermaid
sequenceDiagram
    participant Client as Frontend Client
    participant ApptController as VAOS AppointmentsController
    participant EpsController as EPS AppointmentsController
    participant ApptService as VAOS::V2::AppointmentsService
    participant EpsService as Eps::AppointmentService
    participant VAOS as VAOS API
    participant EPS as EPS API
    participant VANotify as VA Notify

    Note over Client: Client has both VAOS and EPS appointment IDs

    Client->>ApptController: PUT /vaos/v2/appointments/:vaosId { status: cancelled }
    ApptController->>ApptService: update_appointment(vaosId, cancelled)
    ApptService->>VAOS: PUT /appointments/:vaosId { status: cancelled }
    alt VAOS cancel succeeds
        VAOS-->>ApptService: 200 OK { status: cancelled }
        ApptService-->>ApptController: success

        Note over EpsController: Fetch cancel reasons to get cancelReasonId (name == Patient)
        ApptController->>EpsController: GET /eps_appointments/:epsId/cancel-reasons
        EpsController->>EpsService: get_cancel_reasons(epsId)
        EpsService->>EPS: GET /appointments/:epsId/cancel-reasons
        EPS-->>EpsService: 200 OK { cancelReasons: [...] }
        EpsService-->>EpsController: reasons
        EpsController->>EpsController: select reason where name == Patient

        EpsController->>EpsService: cancel_appointment(epsId, cancelReasonId)
        EpsService->>EPS: POST /appointments/:epsId/cancel { cancelReasonId }
        EPS-->>EpsService: 202 Accepted
        EpsService-->>EpsController: accepted

        Note over EpsService: Poll EPS Appointment.show until state == cancelled or error
        loop until cancelled or error (with timeout/backoff)
            EpsController->>EpsService: get_appointment(epsId)
            EpsService->>EPS: GET /appointments/:epsId
            EPS-->>EpsService: 200 OK { state | error }
            EpsService-->>EpsController: current state
        end

        alt EPS returns cancelled
            EpsController-->>ApptController: EPS cancelled
            ApptController-->>Client: 200 OK { both cancelled }
        else EPS returns error/timeout
            EPS-->>EpsService: 4xx or 5xx error
            EpsService-->>EpsController: error

            Note over ApptService: Revert VAOS to avoid split-brain
            EpsController->>ApptController: request VAOS revert
            ApptController->>ApptService: update_appointment(vaosId, previous_status)
            ApptService->>VAOS: PUT /appointments/:vaosId { status: previous_status }
            VAOS-->>ApptService: 200 OK
            ApptService-->>ApptController: reverted

            ApptController->>VANotify: send failure notification - EPS cancel failed, VAOS reverted
            ApptController-->>Client: 502 or 500 - cancel failed in EPS
        end
    else VAOS cancel fails
        VAOS-->>ApptService: 4xx or 5xx error
        ApptService-->>ApptController: error
        ApptController->>VANotify: send failure notification - VAOS cancel failed
        ApptController-->>Client: 502 or 500 - cancel failed in VAOS
    end
```

---

## Intended Use of VA Notify (on Failure)

When cancellation fails in either system, vets-api will send an email/SMS via VA Notify to the Veteran explaining that the cancellation could not be completed and what the next steps are (e.g., try again later or contact support). This mirrors our existing use of VA Notify in the appointment creation flow (confirmation/communication), but is focused on failure notification for cancellation.

Suggested copy themes (final copy owned by product/content):

- "We were unable to cancel your appointment at this time. Your original appointment remains scheduled."
- If VAOS cancelled but EPS failed (and we reverted VAOS): "We were unable to cancel your Community Care appointment. We restored your VA appointment to its previous status."

---

## Open Questions (for Product/Stakeholders)

1. Are VAOS and EPS to be treated as equal sources of truth for cancellation outcomes (i.e., both must be cancelled to call the operation successful)?
2. Exact error message copy and support instructions when cancellation fails.
3. Support escalation path: if EPS cancellation fails repeatedly, do we contact Wellhive support with a trace/transaction ID?
4. Can we always use the EPS reason with `name == "Patient"`, or do certain scenarios require a different reason?

---

## Technical Sequence (High Level)

1. Inputs: `vaosAppointmentId`, `epsAppointmentId`
2. Cancel VAOS appointment: `PUT /vaos/v2/appointments/:vaosAppointmentId { status: "cancelled" }`
   - If this fails → notify via VA Notify and stop
3. Fetch EPS cancel reasons: `GET /appointments/:epsAppointmentId/cancel-reasons`
   - Select the reason with `name == "Patient"` → `cancelReasonId`
4. Cancel EPS appointment: `POST /appointments/:epsAppointmentId/cancel { cancelReasonId }`
   - EPS responds 202 Accepted. Then poll `GET /appointments/:epsAppointmentId` until `state == cancelled` or error (with timeout/backoff). See Wellhive docs on cancellation polling [here](https://github.com/wellhive/api-docs#6-cancel-an-appointment).
   - If EPS returns error or polling times out → revert VAOS appointment to its prior state, then notify via VA Notify
5. Success: both systems reflect cancelled state

Logging & tracing:

- We log failures with masked IDs and context. Future enhancement: capture `X-Wellhive-Trace-Id` when available to aid Wellhive support correlation.

Risk considerations:

- If EPS fails and VAOS can’t be reverted, we could end up with conflicting states. Product decision needed for how to message the Veteran and coordinate follow-up.

Implementation notes:

- The polling pattern mirrors appointment submission polling already used in our booking flow; reuse the same backoff/timeout strategy for cancellation to keep behavior consistent.
