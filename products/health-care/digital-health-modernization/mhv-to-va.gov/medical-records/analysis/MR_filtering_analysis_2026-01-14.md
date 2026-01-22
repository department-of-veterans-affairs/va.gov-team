# Medical Records Data Filtering Research – VistA & Oracle Status Comparison and Signature Handling

## Overview

This document summarizes findings about how health record data is filtered in the VA medical records stack, specifically as seen in `vets-api`. It examines the relationship between record status ("final", "completed", etc.), signature/authentication, and readiness for patient consumption across VistA and Oracle Health (Cerner) data domains.

---

## Key Conclusions

- **vets-api filters out health records not ready for patient consumption.**  
  Filtering is primarily based on record "status" (such as `final`, `completed`, `active`, etc.), not on the explicit presence of an electronic signature.
- **"final" status is used as a proxy for clinical sign-off or result release.**  
  In VistA and Oracle clinical workflows, "final" usually means reviewed and released, but it does *not* guarantee the presence of a cryptographic or provider-authenticated signature in the API layer.
- **No evidence of filtering by digital signature or authentication flag.**  
  Signature checking is implemented (if at all) only in specific legal forms (PDFs), not in patient-facing clinical record APIs.

---

## VistA and Oracle Health Status Code Comparison

| Domain (FHIR Resource)             | VistA Statuses                         | Oracle (Cerner) Statuses                    | FHIR Unified Status Mapping           | Notes                                                              |
|------------------------------------|----------------------------------------|---------------------------------------------|--------------------------------------|--------------------------------------------------------------------|
| **Labs/Tests** (`DiagnosticReport`) | `final`, `amended`, `corrected`, `appended`, `preliminary`, `registered`, `partial`, `cancelled`, `entered-in-error`, `unknown` | `final`, `amended`, `corrected`, `preliminary`, `registered`, `partial`, `cancelled`, `entered-in-error`, `unknown` | Unified to: `final`, `amended`, `corrected`, `appended` (only these are shown to patients) | “Final” = ready for patient, typically after provider review.      |
| **Allergies** (`AllergyIntolerance`)| `active`, `inactive`, `resolved`, `entered-in-error`, `refuted`, `unknown`, `unconfirmed` | same as VistA                               | FHIR: `active`, `inactive`, `resolved`, etc.        | Usually already harmonized at ingestion.                           |
| **Vitals** (`Observation`)         | `final`, `amended`, `preliminary`, `cancelled`, `entered-in-error` | same as VistA                               | API usually only passes `final`.                     | “final” required for patient access.                               |
| **Clinical Notes** (`DocumentReference`)| `current`, `deprecated`, `entered-in-error`, `unknown`           | `current`, `superseded`, `entered-in-error`, `unknown`    | FHIR: `current`, `superseded`, etc.                | `deprecated` ≈ `superseded`.                                      |
| **Vaccines/Immunizations** (`Immunization`)| `completed`, `entered-in-error`, `not-done`, `in-progress`, `on-hold`, `stopped`, `unknown` | same as VistA                               | Harmonized: `completed`, `entered-in-error`, etc.    |                                                                |
| **Conditions/Problems** (`Condition`)| `active`, `recurrence`, `relapse`, `inactive`, `remission`, `resolved`, `entered-in-error`, `unknown` | same as VistA                               | FHIR: `active`, `inactive`, `resolved`, etc.        |                                                                |
| **Medications/Prescriptions** (`MedicationRequest`, `MedicationStatement`) | `active`, `on-hold`, `cancelled`, `completed`, `entered-in-error`, `stopped`, `draft`, `unknown`, `suspended`, `expired`, `pending`, `discontinued` | same as VistA | FHIR/API: `active`, `completed`, `cancelled`, etc. | Special handling for “discontinued”/“expired”.                   |

---

## Status Filtering Logic in vets-api

- Labs and test results:
  - Only records with `ALLOWED_STATUSES` (`final`, `amended`, `corrected`, `appended`) are exposed to patients.
  - See: `lib/unified_health_data/adapters/lab_or_test_adapter.rb`
- Vitals, allergies, notes, vaccines, prescriptions:
  - Only records with ready/active/completed statuses are shown.
  - “entered-in-error” and other intermediary/error statuses are excluded.

---

## On “final” Status and Sign-off

- ��final” status means the result/record is complete and released for clinical use per FHIR and EHR standards.
- In typical clinical practice, “final” records are reviewed and (often) signed by a provider, but this is managed within the EHR (e.g., VistA, Cerner) and isn’t always reflected in exported data or available as a signature field via API.
- **vets-api does not expose or require electronic signatures** as a condition for patient-facing visibility; “final” is accepted as sufficient for patient readiness.

---

## No Signature or Sign-off Filtering for Health Data

- No logic in the medical records API checks for digital signatures or sign-off metadata for patient health records (labs, vitals, allergies, notes, etc.).
- “Signed” or “authenticated” metadata is only relevant in certain document workflows (legal PDFs, forms) but not in clinical record feeds.

---

## References

- [FHIR DiagnosticReport Status Codes](https://hl7.org/fhir/valueset-diagnostic-report-status.html)
- [FHIR Observation Status Codes](https://hl7.org/fhir/valueset-observation-status.html)
- [FHIR Condition Status Codes](https://hl7.org/fhir/condition.html)
- [Example lab/test adapter in vets-api](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/unified_health_data/adapters/lab_or_test_adapter.rb)
- [VistA documentation – laboratory result workflow](https://www.va.gov/vdl/documents/Clinical/CPRS-Chart/)


## FHIR Standard: Signature Field Support by Health Record Domain

### Does the FHIR standard for each health record domain include a signature field?

| FHIR Resource / Domain         | Native Signature Field? | How Responsibility/Sign-off is Indicated              | Digital Signature Support via Extension?                       | Notes                                                                                                              |
|-------------------------------|:-----------------------:|------------------------------------------------------|:--------------------------------------------------------------:|--------------------------------------------------------------------------------------------------------------------|
| `DiagnosticReport` <br> (Labs, Tests, Imaging)        | No                    | `resultsInterpreter`, `performer`                     | Yes (e.g., [`Provenance.signature`](https://hl7.org/fhir/provenance.html)) or [Signature extension](https://hl7.org/fhir/extension-signature.html) | Status "final" means complete and released; digital signature possible with extensions but not standard.            |
| `Observation` <br> (Vitals, Results, Metrics)         | No                    | `performer`                                           | Yes                                                           | No standard field for signature; signer may be in `performer`; digital signature via Provenance/extension optional. |
| `AllergyIntolerance`                                  | No                    | `recorder`, `asserter`                                | Yes                                                           | Responsibility indicated via provider/person recorded, not cryptographic signature.                                 |
| `DocumentReference` <br> (Clinical Notes, Image Reports) | No (core)             | `author`, `attester`                                  | Yes                                                           | Can embed signed documents (e.g., PDF) in `content.attachment`; sign-off via extension or Provenance if present.    |
| `Immunization` <br> (Vaccines)                        | No                    | `performer`                                           | Yes                                                           | No signature field; provider in `performer`.                                                                        |
| `Condition` <br> (Problems/Diagnoses)                 | No                    | `asserter`                                            | Yes                                                           | No signature; person responsible is named.                                                                          |
| `MedicationRequest`, `MedicationStatement` <br> (Prescriptions) | No            | `recorder`, `requester`, `informationSource`          | Yes                                                           | No standard signature; prescriber field available; digital signature with extension possible.                       |

**Key Points:**
- **No major clinical resource in “core” FHIR includes a built-in cryptographic signature field.**
- **Sign-off/responsibility** is modeled via participant references (`performer`, `recorder`, `author`, etc.), not by signature.
- **Digital signatures** can be attached using the [`Signature`](https://hl7.org/fhir/datatypes.html#Signature) type or extensions, or in supporting resources like [`Provenance`](https://hl7.org/fhir/provenance.html). This is not commonly implemented in VA data integrations.
- **"final" status** is used as a proxy for release/review, but does not mean a digital signature is present.

**References:**
- [FHIR Signature DataType](https://hl7.org/fhir/datatypes.html#Signature)
- [FHIR Provenance Resource](https://hl7.org/fhir/provenance.html)
- [FHIR Extension: Signature](https://hl7.org/fhir/extension-signature.html)
- [FHIR DiagnosticReport](https://hl7.org/fhir/diagnosticreport.html)
- [FHIR DocumentReference](https://hl7.org/fhir/documentreference.html)
- [FHIR Observation](https://hl7.org/fhir/observation.html)
- [FHIR AllergyIntolerance](https://hl7.org/fhir/allergyintolerance.html)
- [FHIR Condition](https://hl7.org/fhir/condition.html)
- [FHIR MedicationRequest](https://hl7.org/fhir/medicationrequest.html)

---


*Prepared by: Marci McGuire, 2026-01-14*

For edit history and further contributions, see:  
[va.gov-team/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/analysis](https://github.com/department-of-veterans-affairs/va.gov-team/tree/main/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/analysis)
