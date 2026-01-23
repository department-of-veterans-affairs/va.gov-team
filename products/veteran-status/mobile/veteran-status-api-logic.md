# Veteran Status Card (VSC) API logic — `/mobile/v0/veteran_status_card`

## Why this doc exists
The VSC eligibility and messaging rules changed. This document gives a clear overview of:
- the **previous mobile approach** (multiple endpoints + client-side decisioning)
- the **new approach** (one endpoint + server-side decisioning)
- how **SSC codes** affect whether the API returns a VSC payload or an alert payload

SSC mapping reference:

[Open the PDF](https://github.com/user-attachments/files/24809572/VSC.mapping.WIP._2026-01-16_18-43-03.pdf)

---

## Endpoint overview

### Previous mobile endpoints
The mobile app currently calls:
- `GET /v0/vet_verification_status`
- `GET /v0/military-service-history`

The app combines those responses to decide whether to show the VSC and which message to display.

### New mobile endpoint
The refactor introduces a single endpoint:
- `GET /mobile/v0/veteran_status_card`

This endpoint returns one of two payload types:
- `type: "veteran_status_card"` (show the VSC)
- `type: "veteran_status_alert"` (show an alert instead of the VSC)

---

## Response shape (mobile)

### Eligible response (`type: "veteran_status_card"`)
~~~json
{
  "type": "veteran_status_card",
  "veteran_status": "confirmed",
  "service_summary_code": "A1",
  "not_confirmed_reason": null,
  "attributes": {
    "full_name": "Jane Veteran",
    "disability_rating": 50,
    "latest_service": {
      "branch": "Army",
      "begin_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD"
    },
    "edipi": "1234567890"
  }
}
~~~

**Ineligible/error response** (`type: "veteran_status_alert"`)

~~~json
{
  "type": "veteran_status_alert",
  "veteran_status": "not confirmed",
  "service_summary_code": "D",
  "not_confirmed_reason": "PERSON_NOT_FOUND",
  "attributes": {
    "header": "You’re not eligible for a Veteran Status Card",
    "body": [
      { "type": "text", "value": "Our records don’t show you’re a Veteran." },
      { "type": "phone", "value": "866-279-3677", "tty": true },
      { "type": "link", "value": "Learn how to correct your records", "url": "https://example.com" }
    ],
    "alert_type": "warning"
  }
}
~~~

Notes:
- `service_summary_code` is the SSC value (when available).
- `not_confirmed_reason` is the reason the upstream eligibility check did not confirm the user (for example: `PERSON_NOT_FOUND`, `ERROR`, etc.).
- `attributes.alert_type` is the UI severity: `warning` or `error`.
- `attributes.body` is structured so mobile can render consistent rows:
  - `type: "text"` → render plain text via `value`
  - `type: "phone"` → render a phone row via `value` (and `tty` when applicable)
  - `type: "link"` → render a link via `value` + `url`

---

## What the new endpoint uses to decide
The `/mobile/v0/veteran_status_card` response is determined using:
- an upstream eligibility check (confirmed vs not confirmed + reason)
- the user’s SSC code (allowlist + message-mapping groups)

---

## High-level decision flow
1. Mobile calls `GET /mobile/v0/veteran_status_card`
2. If the upstream eligibility check is **confirmed** → return `type: "veteran_status_card"` with `veteran_status: "confirmed"`
3. If the upstream eligibility check is **not confirmed**:
   - If `not_confirmed_reason` is `PERSON_NOT_FOUND` → return `type: "veteran_status_alert"` (not eligible / not a Veteran)
   - If `not_confirmed_reason` is `ERROR` → return `type: "veteran_status_alert"` with `attributes.alert_type: "error"`
   - Otherwise:
     - If SSC is allowlisted → return `type: "veteran_status_card"` (show the card)
     - Else → return `type: "veteran_status_alert"` using the SSC groups below

---

## Happy path (when the VSC displays)
The VSC displays when the endpoint returns:
- `type: "veteran_status_card"` and `veteran_status: "confirmed"`

This happens when:
- the upstream eligibility check is confirmed, or
- the upstream check is not confirmed but the SSC code is allowlisted

---

## Something went wrong
A generic error state is returned when the endpoint returns:
- `type: "veteran_status_alert"` with `attributes.alert_type: "error"`

Common causes include:
- `not_confirmed_reason: ERROR`
- SSC in the record/upstream error group
- Unknown/unhandled SSC (fallback)

---

## Ineligibility messaging
If the endpoint returns:
- `type: "veteran_status_alert"` with `attributes.alert_type: "warning"`

…the user is ineligible or requires additional action. Messaging is driven by `not_confirmed_reason` and the SSC groupings below.

Support guidance should direct users to **VA.gov technical support** (instead of DMDC) when they need help with service record issues.

---

## SSC rules

| Scenario / SSC group | SSC codes | API result | `attributes.alert_type` | Messaging intent |
| --- | --- | --- | --- | --- |
| **Allowlist (eligible)** | `A1`, `A2`, `A3`, `A4`, `A5-`, `A1+`, `A3+`, `A4+`, `A3*`, `A4*`, `B1`, `B2`, `B3`, `B4`, `B5-`, `B1+`, `B3+`, `B4+`, `B5+`, `B3*`, `B4*`, `B5*`, `G1`, `G1+`, `G3+`, `G4+`, `G5+`, `R1`, `R2`, `R3`, `R4`, `R1+`, `R3+`, `R4+`, `R3*`, `R4*`, `D+` | `type: "veteran_status_card"` | N/A | Show the VSC |
| **Dishonorable discharge** | `A5`, `A5+`, `A5*`, `B5`, `G5`, `G5*`, `R5`, `R5+`, `R5*` | `type: "veteran_status_alert"` | `warning` | Not eligible (service/discharge requirements) |
| **Ineligible service** | `G2`, `G3`, `G4`, `G3*`, `G4*` | `type: "veteran_status_alert"` | `warning` | Not eligible (no eligible period of service) |
| **Unknown / missing info** | `U` | `type: "veteran_status_alert"` | `warning` | We don’t know if you’re eligible (missing info) |
| **EDIPI exists but no PNL** | `X` | `type: "veteran_status_alert"` | `warning` | We can’t match your records |
| **Currently serving** | `D`, `D*` | `type: "veteran_status_alert"` | `warning` | Not eligible (currently serving) |
| **Record / upstream error** | `VNA`, `DVN`, `DVU`, `CVI` | `type: "veteran_status_alert"` | `error` | Something went wrong |
| **Fallback (anything else)** | Any SSC not matched above | `type: "veteran_status_alert"` | `error` | Generic error messaging |

> Notes:
> - If the upstream eligibility check is confirmed, the endpoint returns the VSC regardless of SSC.
> - If the upstream eligibility check is not confirmed, SSC determines whether the endpoint still returns the VSC (allowlist) or returns an alert payload (groups above).

