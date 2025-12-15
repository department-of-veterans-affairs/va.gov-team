# Oracle Health Medications - Categorization and Filtering Specification

## Overview

This specification defines how medications are categorized based on the `MedicationRequest.category` array and which categories are visible to Veterans in the medication list.

---

## Categorization Rules

Medication category is determined by the presence of specific coding values in the `MedicationRequest.category` array.

### Category Mapping

| Category Codes Present | Display Category | Description |
|------------------------|------------------|-------------|
| `community` AND `discharge` | **Outpatient Medication** | VA-prescribed medications for home use, dispensed by VA or retail pharmacies |
| `community` AND `patientspecified` | **Documented/Historical** | Non-VA medications documented from patient history |
| `charge-only` | **Pharmacy Charges** | Billing-only pharmacy entries |
| `outpatient` | **Clinical Medication** | Medications administered in outpatient clinical settings |
| `inpatient` | **Inpatient Medication** | Medications administered during inpatient stays |

### Categorization Logic

```
IF category is exactly ['community', 'discharge']:
    → Outpatient Medication

ELSE IF category is exactly ['community', 'patientspecified']:
    → Documented/Historical

ELSE IF category is exactly ['charge-only']:
    → Pharmacy Charges

ELSE IF category is exactly ['outpatient']:
    → Clinical Medication

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

| Display Category | Visible to Veteran? | Rationale |
|------------------|---------------------|-----------|
| **Outpatient Medication** | ✓ Yes | Primary VA prescriptions managed by Veterans |
| **Documented/Historical** | ✓ Yes | Provides complete medication history visibility |
| **Clinical Medication** | ✓ Yes | Relevant for Veterans to track administered medications |
| **Pharmacy Charges** | ✗ No | Billing entries, not actionable medications |
| **Inpatient Medication** | ✗ No | Administered during hospital stays, not self-managed |
| **Uncategorized** | ✓ Yes | Included pending further testing to determine appropriate handling |

### Filtering Logic

```
INCLUDE medication IF category is:
    - Outpatient Medication
    - Documented/Historical
    - Clinical Medication
    - Uncategorized

EXCLUDE medication IF category is:
    - Pharmacy Charges
    - Inpatient Medication
```

---

## Summary Table

| Category Codes | Display Category | Visible? |
|----------------|------------------|----------|
| `community` + `discharge` | Outpatient Medication | ✓ Yes |
| `community` + `patientspecified` | Documented/Historical | ✓ Yes |
| `outpatient` | Clinical Medication | ✓ Yes |
| `charge-only` | Pharmacy Charges | ✗ No |
| `inpatient` | Inpatient Medication | ✗ No |
| Other/None | Uncategorized | ✓ Yes |

---

## Implementation Notes

1. **Category code matching** should be case-insensitive
2. **Multiple categories** may be present; evaluate in the order specified above
3. **First match wins** - once a category is determined, stop evaluation
4. **Uncategorized medications** should be logged for review to determine appropriate long-term handling
