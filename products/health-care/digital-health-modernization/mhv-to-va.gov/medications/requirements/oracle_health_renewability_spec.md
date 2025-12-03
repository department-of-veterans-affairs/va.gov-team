# Oracle Health VA Dispensed Medications - Renewability Specification

## Overview

A medication is **renewable** only if **ALL** of the following conditions are met. The checks are ordered from most fundamental to most specific.

---

## Renewability Gate Checks (In Order)

### Gate 1: MedicationRequest Status (Primary Gate)

**Condition:** `MedicationRequest.status` must be `'active'`

| Status | Renewable? |
|--------|------------|
| `active` | Continue to next gate |
| Any other status | **NOT RENEWABLE** |

*Rationale: Inactive, cancelled, or completed requests cannot be renewed.*

---

### Gate 2: Documented Medications

**Condition:** Must NOT be a documented/Non-VA medication (`MedicationRequest.reportedBoolean == true`)

| Medication Type | Renewable? |
|-----------------|------------|
| VA-dispensed medication | Continue to next gate |
| Documented/Non-VA medication | **NOT RENEWABLE** |

*Rationale: Medications documented from outside VA or non-VA sources are not managed through VA renewal process.*

---

### Gate 3: MedicationRequest Category

**Condition:** `MedicationRequest.category` must be one of the following:
- `outpatient`
- `community`
- `discharge`

| Category | Renewable? |
|----------|------------|
| `outpatient` | Continue to next gate |
| `community` | Continue to next gate |
| `discharge` | Continue to next gate |
| Any other category | **NOT RENEWABLE** |

*Rationale: Only outpatient-type prescriptions are eligible for patient-initiated renewals.*

---

### Gate 4: Dispense History

**Condition:** Must have at least one MedicationDispense associated with the request

| Dispense Count | Renewable? |
|----------------|------------|
| `> 0` | Continue to next gate |
| `0` | **NOT RENEWABLE** |

*Rationale: A medication that has never been dispensed cannot be renewed.*

---

### Gate 5: Refills Remaining

**Condition:** Must have zero refills remaining (use existing logic)

| Refills Remaining | Renewable? |
|-------------------|------------|
| `0` | Continue to next gate |
| `> 0` | **NOT RENEWABLE** |

*Rationale: If refills are available, patient should use the refill process, not renewal.*

---

### Gate 6: Active Processing

**Condition:** No active refill request or in-progress dispense

The medication is **NOT RENEWABLE** if ANY of the following are true:
- A refill has been requested via web or mobile
- Any dispense has status `in-progress`
- Any dispense has status `preparation`

| Processing State | Renewable? |
|------------------|------------|
| No active processing | Continue to next gate |
| Refill requested via web/mobile | **NOT RENEWABLE** |
| Any dispense `in-progress` | **NOT RENEWABLE** |
| Any dispense in `preparation` | **NOT RENEWABLE** |

*Rationale: Cannot request renewal while a previous request is still being processed.*

---

### Gate 7: Validity Period

**Condition:** Must NOT be more than 120 days past the validity period end date

A prescription is within the renewal window if:
- The validity period has not yet ended (prescription is not expired), OR
- The validity period ended within the last 120 days

| Time Relative to Validity End | Renewable? |
|-------------------------------|------------|
| Before validity end (not yet expired) | **RENEWABLE ✓** |
| 0-120 days after validity end | **RENEWABLE ✓** |
| More than 120 days after validity end | **NOT RENEWABLE** |

*Rationale: Prescriptions expired more than 120 days ago require a new prescription, not a renewal.*

---

## Decision Tree

```mermaid
flowchart TD
    Start([Is Medication Renewable?]) --> Gate1

    Gate1{Gate 1:<br/>Status == 'active'?}
    Gate1 -->|No| NotRenewable1[NOT RENEWABLE]
    Gate1 -->|Yes| Gate2

    Gate2{Gate 2:<br/>NOT documented/Non-VA?}
    Gate2 -->|No| NotRenewable2[NOT RENEWABLE]
    Gate2 -->|Yes| Gate3

    Gate3{Gate 3:<br/>Category IN<br/>'outpatient', 'community',<br/>'discharge'?}
    Gate3 -->|No| NotRenewable3[NOT RENEWABLE]
    Gate3 -->|Yes| Gate4

    Gate4{Gate 4:<br/>Dispense count > 0?}
    Gate4 -->|No| NotRenewable4[NOT RENEWABLE]
    Gate4 -->|Yes| Gate5

    Gate5{Gate 5:<br/>Refills remaining == 0?}
    Gate5 -->|No| NotRenewable5[NOT RENEWABLE]
    Gate5 -->|Yes| Gate6

    Gate6{Gate 6:<br/>No active processing?<br/>- No web/mobile refill<br/>- No in-progress dispense<br/>- No preparation dispense}
    Gate6 -->|No| NotRenewable6[NOT RENEWABLE]
    Gate6 -->|Yes| Gate7

    Gate7{Gate 7:<br/>Within 120 days of<br/>validity period end?}
    Gate7 -->|No| NotRenewable7[NOT RENEWABLE]
    Gate7 -->|Yes| Renewable[RENEWABLE ✓]

    style Renewable fill:#28a745,color:#fff
    style NotRenewable1 fill:#dc3545,color:#fff
    style NotRenewable2 fill:#dc3545,color:#fff
    style NotRenewable3 fill:#dc3545,color:#fff
    style NotRenewable4 fill:#dc3545,color:#fff
    style NotRenewable5 fill:#dc3545,color:#fff
    style NotRenewable6 fill:#dc3545,color:#fff
    style NotRenewable7 fill:#dc3545,color:#fff
```

---

## Summary Table

| Gate | Condition | Fail Result |
|------|-----------|-------------|
| 1 | `MedicationRequest.status == 'active'` | NOT RENEWABLE |
| 2 | Medication is NOT documented/Non-VA | NOT RENEWABLE |
| 3 | `MedicationRequest.category` IN (`outpatient`, `community`, `discharge`) | NOT RENEWABLE |
| 4 | Dispense count > 0 | NOT RENEWABLE |
| 5 | Refills remaining == 0 | NOT RENEWABLE |
| 6 | No web/mobile refill requested AND no dispense `in-progress` or `preparation` | NOT RENEWABLE |
| 7 | Current date - validity period end ≤ 120 days | NOT RENEWABLE |

**If all gates pass → RENEWABLE ✓**
