# VA. gov Medical Records Data Sources Research Document

**Date:** January 14, 2026  
**Author:** MHV Medical Records Team  
**Status:** Draft  

---

## Executive Summary

This document provides a comprehensive comparison of medical records data displayed across six different sources/modalities on VA.gov:

1. **VA. gov Medical Records Pages (V1)** - Individual domain pages using `my_health/v1` APIs
2. **VA.gov Medical Records Pages (V2)** - Individual domain pages using `my_health/v2` APIs (Unified Health Data)
3. **Blue Button Report V1** (`my_health/v1`) - Legacy MHV Blue Button report
4. **Blue Button Report V2** (`my_health/v2`) - New Unified Health Data Blue Button report
5. **CCD via VHIE (V1)** - Continuity of Care Document from VistA
6. **CCD via Oracle Health (V2)** - Continuity of Care Document from Oracle Health (Cerner)

For each data category, this document details:
- Whether the data is available (✅ or ❌)
- The specific API endpoint used
- The authoritative data source
- The earliest data available (based on code analysis)

---

## Table of Contents

1. [Complete Comparison Table](#complete-comparison-table)
2. [Data Age Summary](#data-age-summary)
3. [API and Data Source Legend](#api-and-data-source-legend)
4. [Key Backend Clients](#key-backend-clients)
5. [Code References](#code-references)
6. [Limitations and Notes](#limitations-and-notes)

---

## Complete Comparison Table

### Lab & Test Results

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Chemistry/Hematology** | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic date limit - retrieves all available VistA data (VistA in use since 1980s) | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle Health<br>**Earliest:** Default `1900-01-01`; VistA data potentially back to 1980s; Oracle Health only from facility go-live (~2020+) | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit - retrieves all available VistA data | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle Health<br>**Earliest:** Default `1900-01-01`; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** `bluebutton/healthsummary/{icn}/{lastname}/xml`<br>**Source:** VistA PHR<br>**Earliest:** Snapshot of all available VistA data at generation time (potentially back to 1980s) | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only data from Oracle Health facility go-live dates (~2020+ for pilot sites) |
| **Microbiology** | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **Pathology** | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **Radiology** | ✅<br>**API:** `/v1/medical_records/radiology`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** No programmatic limit - all available VistA data | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** `/v1/medical_records/radiology`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **CVIX Radiology (images)** | ✅<br>**API:** `/v1/medical_records/imaging`<br>**Source:** CVIX (VistA Imaging)<br>**Earliest:** No programmatic limit - depends on when images were digitized/stored in VistA Imaging | ✅<br>**API:** `/v1/medical_records/imaging`<br>**Source:** CVIX (VistA Imaging)<br>**Earliest:** No programmatic limit - same as V1 (CVIX not yet in V2 UHD) | ❌<br>Not included in Blue Button report | ❌<br>Not included in Blue Button report | ❌<br>Not included in CCD | ❌<br>Not included in CCD |

### Care Summaries & Notes

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Discharge Summary** | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** UI explicitly states **"2013 and later"** - suggests known data limitation or policy decision | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** API default `1900-01-01`, but VistA data limited to **2013+** per UI; Oracle Health only ~2020+ | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** UI explicitly states **"2013 and later"** - known limitation | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** API default `1900-01-01`, but VistA data limited to **2013+**; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** **2013 and later** (stated limitation) | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **Physician Procedure Note** | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** **2013 and later** (stated in UI) | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** VistA:  **2013+**; Oracle:  ~2020+ | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** **2013 and later** | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** VistA: **2013+**; Oracle: ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** **2013 and later** | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Consult Result** | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** **2013 and later** (stated in UI) | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** VistA: **2013+**; Oracle: ~2020+ | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** **2013 and later** | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** VistA: **2013+**; Oracle: ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** **2013 and later** | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **After-Visit Summary (AVS)** | ❌<br>(Available via Appointments app) | ✅<br>**API:** UHD `/appointments/{id}/avs`<br>**Source:** Oracle Health<br>**Earliest:** Only ~2020+ (Oracle Health facility go-live dates only) | ❌<br>Not included | ✅<br>**API:** UHD `/appointments/{id}/avs`<br>**Source:** Oracle Health<br>**Earliest:** Only ~2020+ (Oracle Health facility go-live dates only) | ❌<br>Not included | ✅<br>**API:** UHD `/appointments/{id}/avs`<br>**Source:** Oracle Health<br>**Earliest:** Only ~2020+ |

### Vaccines/Immunizations

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **All vaccines** | ✅<br>**API:** `/v1/medical_records/vaccines`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data (potentially back to 1980s) | ✅<br>**API:** `/v2/medical_records/immunizations`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** `/v1/medical_records/vaccines`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit - all available VistA data | ✅<br>**API:** `/v2/medical_records/immunizations`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data (potentially 1980s+) | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |

### Allergies & Reactions

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Observed/Historical** | ✅<br>**API:** `/v1/medical_records/allergies`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data (potentially 1980s+) | ✅<br>**API:** `/v2/medical_records/allergies`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** `/v1/medical_records/allergies`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/allergies`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |

### Health Conditions

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Problem List** | ✅<br>**API:** `/v1/medical_records/conditions`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data (potentially 1980s+) | ✅<br>**API:** `/v2/medical_records/conditions`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** `/v1/medical_records/conditions`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/conditions`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |

### Vitals

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Blood Pressure** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Heart Rate/Pulse** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Breathing Rate** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Blood Oxygen (Pulse Ox)** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Temperature** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Weight** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Height** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |

### Medications

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **VA Prescriptions** | ❌<br>(Separate Medications app using `/v1/prescriptions`) | ❌<br>(Separate Medications app - V2 uses UHD `/medications`) | ✅<br>**API:** `/v1/prescriptions`<br>**Source:** MHV Rx API → VistA<br>**Earliest:** User-selectable; no programmatic limit - all available VistA Rx data | ✅<br>**API:** UHD `/medications`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA Rx data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **Non-VA Medications** | ❌<br>(Separate Medications app) | ❌<br>(Separate Medications app) | ✅<br>**API:** `/v1/prescriptions`<br>**Source:** MHV Rx API → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** UHD `/medications`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Clinic-Administered** | ❌<br>(Separate Medications app) | ❌<br>(Separate Medications app) | ✅<br>**API:** `/v1/prescriptions`<br>**Source:** MHV Rx API → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** UHD `/medications`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ❌<br>Not included | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |

### Appointments

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Upcoming** | ❌<br>(Separate Appointments app) | ❌<br>(Separate Appointments app) | ✅<br>**API:** `/vaos/v2/appointments`<br>**Source:** VAOS → VistA Scheduling<br>**Earliest:** **Hard-coded to -2 years to +13 months** - explicit date validation in frontend code | ✅<br>**API:** `/vaos/v2/appointments`<br>**Source:** VAOS → VistA Scheduling<br>**Earliest:** **Hard-coded to -2 years to +13 months** - same validation | ❌<br>Not included | ❌<br>Not included |
| **Past** | ❌<br>(Separate Appointments app) | ❌<br>(Separate Appointments app) | ✅<br>**API:** `/vaos/v2/appointments`<br>**Source:** VAOS → VistA Scheduling<br>**Earliest:** **Hard-coded to -2 years** - explicit frontend validation prevents older queries | ✅<br>**API:** `/vaos/v2/appointments`<br>**Source:** VAOS → VistA Scheduling<br>**Earliest:** **Hard-coded to -2 years** | ❌<br>Not included | ❌<br>Not included |

### Demographics

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Contact Info, Address** | ❌<br>Not displayed on Medical Records pages | ❌<br>Not displayed on Medical Records pages | ✅<br>**API:** `/v1/medical_records/patient/demographic`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** Current snapshot only (not historical) | ✅<br>**API:** `/v1/medical_records/patient/demographic`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** Current snapshot only | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** Snapshot at generation | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Snapshot (current data only) |

### Military Service

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Service History** | ❌<br>Not displayed on Medical Records pages | ❌<br>Not displayed on Medical Records pages | ✅<br>**API:** `/v1/medical_records/military_service`<br>**Source:** DMDC/VADIR (DoD)<br>**Earliest:** All service history available from DoD records | ✅<br>**API:** `/v1/medical_records/military_service`<br>**Source:** DMDC/VADIR (DoD)<br>**Earliest:** All service history from DoD | ❌<br>Not included | ❌<br>Not included |

### Account Summary

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **VA Treatment Facilities** | ❌<br>Not displayed on Medical Records pages | ❌<br>Not displayed on Medical Records pages | ✅<br>**API:** `/v1/medical_records/patient`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** Current facility associations only (not historical) | ✅<br>**API:** `/v1/medical_records/patient`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** Current associations only | ❌<br>Not included | ❌<br>Not included |

### Self-Entered Data

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Activity Journal, Allergies, Family History, etc.** | ❌<br>Not displayed on Medical Records pages | ❌<br>Not displayed on Medical Records pages | ✅<br>**API:** `/v1/medical_records/self_entered/*`<br>**Source:** MHV Self-Entered DB<br>**Earliest:** All time - whatever user has entered (MHV launched ~2003) | ❌<br>Not supported in V2 architecture | ❌<br>Not included | ❌<br>Not included |

### CCD Download

| Subcategory | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) | Blue Button Report V1 (`my_health/v1`) | Blue Button Report V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|---|
| **Health Summary** | ✅<br>**API:** `/v1/medical_records/ccd/generate` + `/download`<br>**Source:** VistA BB API<br>**Earliest:** Snapshot of all available VistA data at generation time (potentially 1980s+) | ✅<br>**API:** `/v2/medical_records/ccd/download`<br>**Source:** Oracle Health via UHD<br>**Earliest:** Only Oracle Health data (~2020+ facility go-live) | ✅<br>**API:** `/v1/medical_records/ccd/generate` + `/download`<br>**Source:** VistA BB API<br>**Earliest:** Snapshot of all available VistA data at generation time (potentially 1980s+) | ✅<br>**API:** `/v2/medical_records/ccd/download`<br>**Source:** Oracle Health via UHD<br>**Earliest:** Only Oracle Health data (~2020+ facility go-live) | ✅<br>**API:** `bluebutton/healthsummary/{icn}/{lastname}/xml`<br>**Source:** VistA BB API<br>**Earliest:** All available VistA data (potentially 1980s+) | ✅<br>**API:** `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live dates) |

---

## Data Age Summary

### What the Code Indicates About Earliest Data

| Data Source | What the Code Indicates About Earliest Data |
|---|---|
| **VistA (most domains)** | No programmatic date limits in API calls - retrieves all available data.  VistA has been in use since the 1980s, so data could potentially go back 30-40 years depending on facility and when records were digitized. |
| **VistA Care Notes** | UI explicitly states **"This report only includes care summaries and notes from 2013 and later"** - suggests a known data limitation, policy decision, or data migration cutoff. |
| **Oracle Health (Cerner)** | Only contains data from each facility's migration/go-live date.  Pilot sites started ~2020; rollout is ongoing. No historical VistA data is migrated to Oracle Health. |
| **Appointments (VAOS)** | **Hard-coded date validation**:  Frontend code explicitly limits queries to **-2 years (past)** and **+13 months (future)**.  Queries outside this range return empty results. |
| **Self-Entered Data (MHV)** | All user-entered data since MHV launched (~2003). No programmatic date limits. |
| **Military Service (DMDC/VADIR)** | Complete service history from DoD records - no date limitations indicated in code. |
| **Demographics/Account Summary** | Current snapshot only - these are not historical records, just current state. |

### Default Date Ranges by Modality

| Modality | Default Date Range | Notes |
|---|---|---|
| **VA. gov Medical Records Pages (V1)** | No explicit limit; returns all available FHIR records | Data availability depends on when records were entered into VistA |
| **VA.gov Medical Records Pages (V2)** | Backend default: `1900-01-01` to today | UHD service uses this range; combines VistA + Oracle Health data |
| **Blue Button Report V1 (`my_health/v1`)** | User-selectable: 3 mo, 6 mo, 12 mo, custom, or "all time" | Care notes limited to **2013+**; Appointments limited to **-2 years to +13 months** |
| **Blue Button Report V2 (`my_health/v2`)** | Backend default: `1900-01-01` to today | UHD service uses this range; VistA care notes still limited to **2013+** at source |
| **CCD via VHIE (V1 - VistA)** | Snapshot at generation time | Includes all available VistA PHR data at time of generation |
| **CCD via Oracle Health (V2)** | `1900-01-01` to today (configurable) | Only includes data from Oracle Health (Cerner) facilities |

---

## API and Data Source Legend

| API/Service | Full Path | Authoritative Data Source |
|---|---|---|
| **V1 Base Path** | `/my_health/v1/... ` | MHV FHIR Server → VistA |
| **V2 Base Path** | `/my_health/v2/...` | Unified Health Data (UHD) Service → VistA + Oracle Health |
| **MHV FHIR** | `MedicalRecords:: Client` | VistA via MHV FHIR bridge |
| **MHV BB Internal** | `BBInternal::Client` | VistA PHR Manager |
| **UHD Service** | `UnifiedHealthData::Service` | SCDF (VistA + Oracle Health combined) |
| **UHD Client** | `UnifiedHealthData::Client` | Oracle Health FHIR + VistA via SCDF |
| **VAOS** | `/vaos/v2/appointments` | VistA Scheduling Service |
| **CVIX** | `/v1/medical_records/imaging` | VistA Imaging (CVIX) |
| **DMDC/VADIR** | `/v1/medical_records/military_service` | DoD military service records |
| **MHV Self-Entered** | `/v1/medical_records/self_entered/*` | MHV Self-Entered Database (legacy) |

---

## Key Backend Clients

| Client Class | Data Sources | Used By |
|---|---|---|
| `MedicalRecords::Client` | VistA via MHV FHIR | V1 endpoints |
| `MedicalRecords::LighthouseClient` | Lighthouse FHIR | V1 with `use_oh_data_path=1` |
| `BBInternal::Client` | VistA PHR Manager | Blue Button, Demographics, CCD V1 |
| `UnifiedHealthData::Client` | SCDF (VistA + Oracle) | V2 endpoints |
| `UnifiedHealthData::Service` | Aggregates UHD Client | All V2 data retrieval |
| `PHRMgr::Client` | PHR Manager Status | Session/refresh status |

---

## Code References

| Reference | Location |
|---|---|
| UHD default date range (`1900-01-01`) | [lib/unified_health_data/service.rb lines 452-460](https://github.com/department-of-veterans-affairs/vets-api/blob/049cb4f6641d275cc79d598c9f18bb27070c1547/lib/unified_health_data/service.rb#L452-L465) |
| Frontend API paths (V1 & V2) | [src/applications/mhv-medical-records/api/MrApi.js](https://github.com/department-of-veterans-affairs/vets-website/blob/3903300ad7156b865918a1e6e68cce30c36c5313/src/applications/mhv-medical-records/api/MrApi.js) |
| Care notes "2013 and later" limitation | [src/applications/mhv-medical-records/util/pdfHelpers/blueButton.js line 93](https://github.com/department-of-veterans-affairs/vets-website/blob/b76f8ba171cb15d1a4f9335411f5a6fce269ea7e/src/applications/mhv-medical-records/util/pdfHelpers/blueButton.js#L93) |
| Appointments date validation (-2yr to +13mo) | [src/applications/mhv-medical-records/actions/blueButtonReport.js lines 60-77](https://github.com/department-of-veterans-affairs/vets-website/blob/3903300ad7156b865918a1e6e68cce30c36c5313/src/applications/mhv-medical-records/actions/blueButtonReport.js#L60-L77) |
| CCD V1 generation | [lib/medical_records/bb_internal/client.rb lines 175-186](https://github.com/department-of-veterans-affairs/vets-api/blob/049cb4f6641d275cc79d598c9f18bb27070c1547/lib/medical_records/bb_internal/client.rb#L175-L186) |
| CCD V2 download (Oracle) | [lib/unified_health_data/client.rb lines 58-62](https://github.com/department-of-veterans-affairs/vets-api/blob/049cb4f6641d275cc79d598c9f18bb27070c1547/lib/unified_health_data/client.rb#L58-L62) |
| V1 Routes | [modules/my_health/config/routes.rb lines 39-142](https://github.com/department-of-veterans-affairs/vets-api/blob/049cb4f6641d275cc79d598c9f18bb27070c1547/modules/my_health/config/routes.rb#L39-L142) |
| V2 Routes | [modules/my_health/config/routes.rb lines 1-18](https://github.com/department-of-veterans-affairs/vets-api/blob/049cb4f6641d275cc79d598c9f18bb27070c1547/modules/my_health/config/routes.rb#L1-L18) |

---

## Limitations and Notes

### Analysis Limitations

1. **Code-based analysis only**:  This document is based on analysis of the `vets-website` and `vets-api` GitHub repositories. Actual historical data depth in production systems would need to be verified by querying the databases directly or consulting with data stewards.

2. **Search result limitations**: Code search results may be incomplete.  Additional code paths or configurations may exist that are not captured in this analysis.

3. **Oracle Health rollout**: Oracle Health (Cerner) facility go-live dates vary.  The ~2020+ estimate is based on pilot site launches; actual data availability depends on when each specific facility migrated. 

### Key Observations

1. **Care Notes 2013 Limitation**: The UI explicitly states that care summaries and notes are only available from 2013 and later. This appears to be a known limitation or policy decision, not a technical constraint in the API.

2. **Appointments Hard-Coded Range**: The frontend code explicitly validates appointment date ranges to -2 years (past) and +13 months (future). Queries outside this range are rejected before reaching the API.

3. **V2 vs V1 Architecture**:
   - V1 uses MHV FHIR and BB Internal clients (VistA-only)
   - V2 uses Unified Health Data service (VistA + Oracle Health combined)

4. **Self-Entered Data**: Only available in V1; not supported in the V2 architecture.

5. **Oracle Health Data**: Only contains data from facility go-live dates; no historical VistA data is migrated to Oracle Health.

6. **CVIX Radiology Images**: Currently only available via V1 API (`/v1/medical_records/imaging`); not yet integrated into V2 UHD architecture.

### Key Differences Between V1 and V2 VA.gov Pages

| Aspect | VA.gov Medical Records Pages (V1) | VA.gov Medical Records Pages (V2) |
|---|---|---|
| **Data Source** | VistA only (via MHV FHIR) | VistA + Oracle Health (via UHD) |
| **Oracle Health Data** | ❌ Not included | ✅ Included |
| **Self-Entered Data** | Available via separate download | ❌ Not supported |
| **Default Date Range** | No explicit limit | `1900-01-01` to today |
| **Backend Client** | `MedicalRecords::Client` | `UnifiedHealthData::Service` |

### Further Research Needed

To get accurate information about actual historical data depth, consult with: 

- **VistA**:  OIT/EHRM teams - for actual data retention and availability
- **Oracle Health**:  EHRM team - for specific facility go-live dates
- **DMDC/VADIR**: DoD - for military service records data depth
- **VAOS**:  Scheduling team - for appointment data retention policies

---

## Revision History

| Date | Version | Author | Changes |
|---|---|---|---|
| 2026-01-14 | 1.0 | MHV Medical Records Team | Initial document |

---

## Additional Resources

- [vets-api unified_health_data code](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fvets-api+path%3Aunified_health_data&type=code)
- [vets-website medical records code](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fvets-website+path%3Amhv-medical-records&type=code)
- [vets-api my_health module](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fvets-api+path%3Amodules%2Fmy_health&type=code)
