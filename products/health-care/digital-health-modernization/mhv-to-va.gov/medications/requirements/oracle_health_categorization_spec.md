# Oracle Health Medications - Categorization and Filtering Specification

## Overview

This specification defines how medications are categorized based on the `MedicationRequest.category` array, `intent`, and `reportedBoolean` fields, and which categories are visible to Veterans in the medication list.

---

## Categorization Rules

Medication category is determined by evaluating the following `MedicationRequest` fields:
- `category` - Array of coding values indicating medication context
- `intent` - The intent of the medication request (e.g., `order`, `plan`)
- `reportedBoolean` - Whether the medication was reported by the patient (`true`) or ordered by a provider (`false`)

### Category Mapping

| reportedBoolean | intent | Category Codes | Display Category | Renewal Eligible? | Description |
|-----------------|--------|----------------|------------------|-------------------|-------------|
| `false` | `order` | `community` + `discharge` | **VA Prescription** | ✓ Yes* | VA-prescribed medications for home use, dispensed by VA or retail pharmacies |
| `true` | `plan` | `community` + `patientspecified` | **Documented/Non-VA Medication** | ✗ No | Non-VA medications documented from patient history |
| `false` | `order` | `outpatient` | **Clinic Administered Medication** | ✓ Yes* | Medications administered in outpatient clinical settings |
| — | — | `charge-only` | **Pharmacy Charges** | ✗ No | Billing-only pharmacy entries |
| — | — | `inpatient` | **Inpatient Medication** | ✗ No | Medications administered during inpatient stays |

*\*Renewal eligibility requires additional criteria to be met. See [Renewability Specification](oracle_health_renewability_spec.md).*

### Categorization Logic

```
IF reportedBoolean = false 
   AND intent = 'order' 
   AND category is exactly ['community', 'discharge']:
    → VA Prescription (renewal eligible)

ELSE IF reportedBoolean = true 
   AND intent = 'plan' 
   AND category is exactly ['community', 'patientspecified']:
    → Documented/Non-VA Medication (NOT renewal eligible)

ELSE IF reportedBoolean = false 
   AND intent = 'order' 
   AND category is exactly ['outpatient']:
    → Clinic Administered Medication (renewal eligible)

ELSE IF category is exactly ['charge-only']:
    → Pharmacy Charges

ELSE IF category is exactly ['inpatient']:
    → Inpatient Medication

ELSE:
    → Uncategorized
```

*Note: Category arrays must match exactly in both values and count. Additional or missing codes result in Uncategorized.*

---

## Filtering Rules

Only specific medication categories are visible to Veterans in the medication list.

### Visibility Matrix

| Display Category | Visible to Veteran? | Renewal Eligible? | Rationale |
|------------------|---------------------|-------------------|-----------|
| **VA Prescription** | ✓ Yes | ✓ Yes* | Primary VA prescriptions managed by Veterans |
| **Documented/Non-VA Medication** | ✓ Yes | ✗ No | Provides complete medication history visibility; not VA-managed |
| **Clinic Administered Medication** | ✓ Yes | ✓ Yes* | Relevant for Veterans to track administered medications |
| **Pharmacy Charges** | ✗ No | ✗ No | Billing entries, not actionable medications |
| **Inpatient Medication** | ✗ No | ✗ No | Administered during hospital stays, not self-managed |
| **Uncategorized** | ✓ Yes | — | Included pending further testing to determine appropriate handling |

*\*Additional criteria must be met for renewal eligibility. See [Renewability Specification](oracle_health_renewability_spec.md).*

### Filtering Logic

```
INCLUDE medication IF category is:
    - VA Prescription
    - Documented/Non-VA Medication
    - Clinic Administered Medication
    - Uncategorized

EXCLUDE medication IF category is:
    - Pharmacy Charges
    - Inpatient Medication
```

---

## Summary Table

| reportedBoolean | intent | Category Codes | Display Category | Visible? | Renewal Eligible? |
|-----------------|--------|----------------|------------------|----------|-------------------|
| `false` | `order` | `community` + `discharge` | VA Prescription | ✓ Yes | ✓ Yes* |
| `true` | `plan` | `community` + `patientspecified` | Documented/Non-VA Medication | ✓ Yes | ✗ No |
| `false` | `order` | `outpatient` | Clinic Administered Medication | ✓ Yes | ✓ Yes* |
| — | — | `charge-only` | Pharmacy Charges | ✗ No | ✗ No |
| — | — | `inpatient` | Inpatient Medication | ✗ No | ✗ No |
| — | — | Other/None | Uncategorized | ✓ Yes | — |

*\*Additional criteria must be met. See [Renewability Specification](oracle_health_renewability_spec.md).*

---

## Implementation Notes

1. **Category code matching** should be case-insensitive
2. **Field evaluation order**: Check `reportedBoolean`, `intent`, then `category` in combination
3. **First match wins** - once a category is determined, stop evaluation
4. **Uncategorized medications** should be logged for review to determine appropriate long-term handling
5. **Renewal eligibility** is determined first by category, then by additional business rules defined in the [Renewability Specification](oracle_health_renewability_spec.md)
