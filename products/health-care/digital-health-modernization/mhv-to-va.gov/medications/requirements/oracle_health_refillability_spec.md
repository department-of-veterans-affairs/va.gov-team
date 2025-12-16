# Oracle Health VA Dispensed Medications - Refillability Specification

## Overview

A medication is **refillable** only if **ALL** of the following conditions are met. The checks are ordered from most fundamental to most specific.

---

## Refillability Gate Checks (In Order)

### Gate 1: Medication Classification

**Condition:** Must be classified as an **Outpatient Medication**

See [Oracle Health Medications - Categorization and Filtering Specification](oracle_health_categorization_spec.md) for complete categorization rules.

| Classification | Refillable? |
|----------------|-------------|
| Outpatient Medication | Continue to next gate |
| Any other category | **NOT REFILLABLE** |

*Rationale: Only Outpatient Medications (VA-dispensed prescriptions for home use) can be refilled through the VA pharmacy system.*

---

### Gate 2: MedicationRequest Status (Primary Gate)

**Condition:** `MedicationRequest.status` must be `'active'`

| Status | Refillable? |
|--------|-------------|
| `active` | Continue to next gate |
| Any other status | **NOT REFILLABLE** |

*Rationale: Inactive, cancelled, completed, or on-hold requests cannot be refilled.*

---

### Gate 3: Validity Period (Expiration)

**Condition:** Prescription must NOT be expired

The prescription is NOT expired if:
- `MedicationRequest.dispenseRequest.validityPeriod.end` exists AND
- Current date/time ≤ `MedicationRequest.dispenseRequest.validityPeriod.end`

| Validity Period State | Refillable? |
|-----------------------|-------------|
| `validityPeriod.end` does not exist | **NOT REFILLABLE** |
| Current date > `validityPeriod.end` (expired) | **NOT REFILLABLE** |
| Current date ≤ `validityPeriod.end` (not expired) | Continue to next gate |

*Rationale: Expired prescriptions cannot be refilled; they require renewal instead.*

---

### Gate 4: Refills Remaining

**Condition:** Must have refills remaining greater than zero

Refills remaining is calculated as:
`MedicationRequest.dispenseRequest.numberOfRepeatsAllowed` minus the count of completed `MedicationDispense` resources (excluding the original fill)

```
refills_remaining = numberOfRepeatsAllowed - max(completed_dispenses - 1, 0)
```

Where `completed_dispenses` = count of `MedicationDispense` resources with `status == 'completed'`

| Refills Remaining | Refillable? |
|-------------------|-------------|
| `> 0` | Continue to next gate |
| `0` | **NOT REFILLABLE** |

*Rationale: If no refills remain, the patient must request a renewal instead of a refill.*

---

### Gate 5: Dispense History

**Condition:** Must have at least one `MedicationDispense` resource associated with the `MedicationRequest`

| MedicationDispense Count | Refillable? |
|--------------------------|-------------|
| `> 0` | Continue to next gate |
| `0` | **NOT REFILLABLE** |

*Rationale: A medication that has never been dispensed cannot be refilled. The initial fill must be processed first.*

---

### Gate 6: No In-Progress Dispense

**Condition:** Most recent `MedicationDispense` must NOT have an in-progress status

In-progress statuses are:
- `preparation`
- `in-progress`
- `on-hold`

The most recent dispense is determined by the latest `MedicationDispense.whenHandedOver` date.

| Most Recent `MedicationDispense.status` | Refillable? |
|-----------------------------------------|-------------|
| `completed` | Continue to next gate |
| `cancelled` | Continue to next gate |
| `declined` | Continue to next gate |
| `entered-in-error` | Continue to next gate |
| `stopped` | Continue to next gate |
| `unknown` | Continue to next gate |
| `preparation` | **NOT REFILLABLE** |
| `in-progress` | **NOT REFILLABLE** |
| `on-hold` | **NOT REFILLABLE** |

*Rationale: Cannot request a new refill while a previous dispense is still being processed or prepared.*

---

### Gate 7: No Pending Refill Request

**Condition:** Must NOT have a pending refill request (refill_status != 'submitted')

A pending refill request exists if:
- A `Task` resource exists with `intent='order'`, `status='requested'`, and `focus.reference` matching the parent `MedicationRequest`
- AND no `MedicationDispense` with `whenPrepared` or `whenHandedOver` date after the `Task.executionPeriod.start`

| Refill Status | Refillable? |
|---------------|-------------|
| `active` | **REFILLABLE ✓** |
| `expired` | Already failed Gate 3 or 4 |
| `refillinprocess` | Already failed Gate 6 |
| `submitted` | **NOT REFILLABLE** |
| Other statuses | **REFILLABLE ✓** |

*Rationale: Cannot request a new refill while a previous refill request is still pending.*

---

## Decision Tree

```mermaid
flowchart TD
    Start([Is Medication Refillable?]) --> Gate1

    Gate1{Gate 1:<br/>Medication Classification?}
    Gate1 -->|Documented/Historical| NotRefillable1[NOT REFILLABLE<br/>Non-VA Medication]
    Gate1 -->|Clinical/Inpatient/Pharmacy Charges/Other| NotRefillable1
    Gate1 -->|Outpatient Medication| Gate2

    Gate2{Gate 2:<br/>Status == 'active'?}
    Gate2 -->|No| NotRefillable2[NOT REFILLABLE]
    Gate2 -->|Yes| Gate3

    Gate3{Gate 3:<br/>validityPeriod.end exists<br/>AND not expired?}
    Gate3 -->|No validityPeriod.end| NotRefillable3a[NOT REFILLABLE]
    Gate3 -->|Expired| NotRefillable3b[NOT REFILLABLE<br/>Use renewal process]
    Gate3 -->|Yes, not expired| Gate4

    Gate4{Gate 4:<br/>Refills remaining > 0?}
    Gate4 -->|No| NotRefillable4[NOT REFILLABLE<br/>Use renewal process]
    Gate4 -->|Yes| Gate5

    Gate5{Gate 5:<br/>MedicationDispense count > 0?}
    Gate5 -->|No| NotRefillable5[NOT REFILLABLE]
    Gate5 -->|Yes| Gate6

    Gate6{Gate 6:<br/>Most recent dispense<br/>NOT in-progress?<br/>- Not preparation<br/>- Not in-progress<br/>- Not on-hold}
    Gate6 -->|No, has in-progress dispense| NotRefillable6[NOT REFILLABLE]
    Gate6 -->|Yes| Gate7

    Gate7{Gate 7:<br/>No pending refill request?<br/>refill_status != 'submitted'}
    Gate7 -->|No, has pending request| NotRefillable7[NOT REFILLABLE]
    Gate7 -->|Yes| Refillable[REFILLABLE ✓]

    style Refillable fill:#28a745,color:#fff
    style NotRefillable1 fill:#dc3545,color:#fff
    style NotRefillable2 fill:#dc3545,color:#fff
    style NotRefillable3a fill:#dc3545,color:#fff
    style NotRefillable3b fill:#dc3545,color:#fff
    style NotRefillable4 fill:#dc3545,color:#fff
    style NotRefillable5 fill:#dc3545,color:#fff
    style NotRefillable6 fill:#dc3545,color:#fff
    style NotRefillable7 fill:#dc3545,color:#fff
```

---

## Summary Table

| Gate | Condition (must be TRUE to pass) | Fail Result |
|------|----------------------------------|-------------|
| 1 | Medication is classified as **Outpatient Medication** (see [categorization spec](oracle_health_categorization_spec.md)) | NOT REFILLABLE |
| 2 | `MedicationRequest.status == 'active'` | NOT REFILLABLE |
| 3 | `MedicationRequest.dispenseRequest.validityPeriod.end` exists AND current date ≤ `validityPeriod.end` | NOT REFILLABLE |
| 4 | Refills remaining > 0 | NOT REFILLABLE |
| 5 | `MedicationDispense` count > 0 | NOT REFILLABLE |
| 6 | Most recent `MedicationDispense.status` is NOT `preparation`, `in-progress`, or `on-hold` | NOT REFILLABLE |
| 7 | No pending refill request (refill_status != 'submitted') | NOT REFILLABLE |

**If all gates pass → REFILLABLE ✓**

---

## Refill vs Renewal

Understanding when to use refill vs renewal:

| Scenario | Action |
|----------|--------|
| Refills remaining > 0 AND not expired | **REFILL** |
| Refills remaining == 0 AND not expired (or expired ≤ 120 days) | **RENEW** |
| Expired AND within 120 days of expiration | **RENEW** |
| Expired > 120 days | New prescription required |

See [Oracle Health VA Dispensed Medications - Renewability Specification](oracle_health_renewability_spec.md) for renewal eligibility rules.

---

## Related Specifications

- [Oracle Health Medications - Categorization and Filtering Specification](oracle_health_categorization_spec.md) - Medication category definitions
- [Oracle Health VA Dispensed Medications - Renewability Specification](oracle_health_renewability_spec.md) - Renewal eligibility rules
