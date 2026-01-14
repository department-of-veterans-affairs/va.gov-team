# VA. gov Medical Records Data Sources Research Document

**Date:** January 14, 2026  
**Author:** MHV Medical Records Team  
**Status:** Draft  

---

## Executive Summary

This document provides a comprehensive comparison of medical records data displayed across five different sources/modalities on VA.gov:

1. **Medical Records Pages (VA.gov)** - Individual domain pages (Labs, Notes, Vitals, etc.)
2. **Blue Button Report V1** (`my_health/v1`) - Legacy MHV Blue Button report
3. **Blue Button Report V2** (`my_health/v2`) - New Unified Health Data Blue Button report
4. **CCD via VHIE (V1)** - Continuity of Care Document from VistA
5. **CCD via Oracle Health (V2)** - Continuity of Care Document from Oracle Health (Cerner)

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

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Chemistry/Hematology** | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic date limit - retrieves all available VistA data (VistA in use since 1980s) | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit - retrieves all available VistA data | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle Health<br>**Earliest:** Default `1900-01-01`; VistA data potentially back to 1980s; Oracle Health only from facility go-live (~2020+) | ✅<br>**API:** `bluebutton/healthsummary/{icn}/{lastname}/xml`<br>**Source:** VistA PHR<br>**Earliest:** Snapshot of all available VistA data at generation time (potentially back to 1980s) | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only data from Oracle Health facility go-live dates (~2020+ for pilot sites) |
| **Microbiology** | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **Pathology** | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data | ✅<br>**API:** `/v1/medical_records/labs_and_tests`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **Radiology** | ✅<br>**API:** `/v1/medical_records/radiology`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** No programmatic limit - all available VistA data | ✅<br>**API:** `/v1/medical_records/radiology`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/labs_and_tests`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **CVIX Radiology (images)** | ✅<br>**API:** `/v1/medical_records/imaging`<br>**Source:** CVIX (VistA Imaging)<br>**Earliest:** No programmatic limit - depends on when images were digitized/stored in VistA Imaging | ❌<br>Not included in Blue Button report | ❌<br>Not included in Blue Button report | ❌<br>Not included in CCD | ❌<br>Not included in CCD |

### Care Summaries & Notes

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Discharge Summary** | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** UI explicitly states **"2013 and later"** - suggests known data limitation or policy decision | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** UI explicitly states **"2013 and later"** - known limitation | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** API default `1900-01-01`, but VistA data limited to **2013+** per UI; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** **2013 and later** (stated limitation) | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **Physician Procedure Note** | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** **2013 and later** (stated in UI) | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** **2013 and later** | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** VistA:  **2013+**; Oracle:  ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** **2013 and later** | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Consult Result** | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** **2013 and later** (stated in UI) | ✅<br>**API:** `/v1/medical_records/clinical_notes`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** **2013 and later** | ✅<br>**API:** `/v2/medical_records/clinical_notes`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** VistA:  **2013+**; Oracle:  ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** **2013 and later** | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **After-Visit Summary (AVS)** | ❌<br>(Available via Appointments app) | ❌<br>Not included | ✅<br>**API:** UHD `/appointments/{id}/avs`<br>**Source:** Oracle Health<br>**Earliest:** Only ~2020+ (Oracle Health facility go-live dates only) | ❌<br>Not included | ✅<br>**API:** UHD `/appointments/{id}/avs`<br>**Source:** Oracle Health<br>**Earliest:** Only ~2020+ |

### Vaccines/Immunizations

| Subcategory | Medical Records Pages (VA. gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **All vaccines** | ✅<br>**API:** `/v1/medical_records/vaccines`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data (potentially back to 1980s) | ✅<br>**API:** `/v1/medical_records/vaccines`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit - all available VistA data | ✅<br>**API:** `/v2/medical_records/immunizations`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data (potentially 1980s+) | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |

### Allergies & Reactions

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Observed/Historical** | ✅<br>**API:** `/v1/medical_records/allergies`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data (potentially 1980s+) | ✅<br>**API:** `/v1/medical_records/allergies`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/allergies`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |

### Health Conditions

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Problem List** | ✅<br>**API:** `/v1/medical_records/conditions`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data (potentially 1980s+) | ���<br>**API:** `/v1/medical_records/conditions`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/conditions`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; VistA potentially 1980s+; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |

### Vitals

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Blood Pressure** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit - all available VistA data | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Heart Rate/Pulse** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Breathing Rate** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Blood Oxygen (Pulse Ox)** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Temperature** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Weight** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Height** | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** No programmatic limit | ✅<br>**API:** `/v1/medical_records/vitals`<br>**Source:** MHV FHIR → VistA<br>**Earliest:** User-selectable; no limit | ✅<br>**API:** `/v2/medical_records/vitals`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |

### Medications

| Subcategory | Medical Records Pages (VA. gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **VA Prescriptions** | ❌<br>(Separate Medications app) | ✅<br>**API:** `/v1/prescriptions`<br>**Source:** MHV Rx API → VistA<br>**Earliest:** User-selectable; no programmatic limit - all available VistA Rx data | ✅<br>**API:** UHD `/medications`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01` default; Oracle Health only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available VistA Rx data | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live) |
| **Non-VA Medications** | ❌ | ✅<br>**API:** `/v1/prescriptions`<br>**Source:** MHV Rx API → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** UHD `/medications`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** All available | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |
| **Clinic-Administered** | ❌ | ✅<br>**API:** `/v1/prescriptions`<br>**Source:** MHV Rx API → VistA<br>**Earliest:** User-selectable; no programmatic limit | ✅<br>**API:** UHD `/medications`<br>**Source:** UHD → VistA + Oracle<br>**Earliest:** `1900-01-01`; Oracle only ~2020+ | ❌<br>Not included | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ |

### Appointments

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Upcoming** | ❌<br>(Separate Appointments app) | ✅<br>**API:** `/vaos/v2/appointments`<br>**Source:** VAOS → VistA Scheduling<br>**Earliest:** **Hard-coded to -2 years to +13 months** - explicit date validation in frontend code | ✅<br>**API:** `/vaos/v2/appointments`<br>**Source:** VAOS → VistA Scheduling<br>**Earliest:** **Hard-coded to -2 years to +13 months** - same validation | ❌<br>Not included | ❌<br>Not included |
| **Past** | ❌<br>(Separate Appointments app) | ✅<br>**API:** `/vaos/v2/appointments`<br>**Source:** VAOS → VistA Scheduling<br>**Earliest:** **Hard-coded to -2 years** - explicit frontend validation prevents older queries | ✅<br>**API:** `/vaos/v2/appointments`<br>**Source:** VAOS → VistA Scheduling<br>**Earliest:** **Hard-coded to -2 years** | ❌<br>Not included | ❌<br>Not included |

### Demographics

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Contact Info, Address** | ❌ | ✅<br>**API:** `/v1/medical_records/patient/demographic`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** Current snapshot only (not historical) | ✅<br>**API:** `/v1/medical_records/patient/demographic`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** Current snapshot only | ✅<br>**API:** BB Internal<br>**Source:** VistA PHR<br>**Earliest:** Snapshot at generation | ✅<br>**API:** UHD `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Snapshot (current data only) |

### Military Service

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Service History** | ❌ | ✅<br>**API:** `/v1/medical_records/military_service`<br>**Source:** DMDC/VADIR (DoD)<br>**Earliest:** All service history available from DoD records | ✅<br>**API:** `/v1/medical_records/military_service`<br>**Source:** DMDC/VADIR (DoD)<br>**Earliest:** All service history from DoD | ❌<br>Not included | ❌<br>Not included |

### Account Summary

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **VA Treatment Facilities** | ❌ | ✅<br>**API:** `/v1/medical_records/patient`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** Current facility associations only (not historical) | ✅<br>**API:** `/v1/medical_records/patient`<br>**Source:** MHV BB Internal → VistA<br>**Earliest:** Current associations only | ❌<br>Not included | ❌<br>Not included |

### Self-Entered Data

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Activity Journal, Allergies, Family History, etc.** | ❌ | ✅<br>**API:** `/v1/medical_records/self_entered/*`<br>**Source:** MHV Self-Entered DB<br>**Earliest:** All time - whatever user has entered (MHV launched ~2003) | ❌<br>Not supported in V2 architecture | ❌<br>Not included | ❌<br>Not included |

### CCD Download

| Subcategory | Medical Records Pages (VA.gov) | Blue Button V1 (`my_health/v1`) | Blue Button V2 (`my_health/v2`) | CCD via VHIE (V1 - VistA) | CCD via Oracle Health (V2) |
|---|---|---|---|---|---|
| **Health Summary** | N/A | ✅<br>**API:** `/v1/medical_records/ccd/generate` + `/download`<br>**Source:** VistA BB API<br>**Earliest:** Snapshot of all available VistA data at generation time (potentially 1980s+) | ✅<br>**API:** `/v2/medical_records/ccd/download`<br>**Source:** Oracle Health via UHD<br>**Earliest:** Only Oracle Health data (~2020+ facility go-live) | ✅<br>**API:** `bluebutton/healthsummary/{icn}/{lastname}/xml`<br>**Source:** VistA BB API<br>**Earliest:** All available VistA data (potentially 1980s+) | ✅<br>**API:** `/ccd/oracle-health`<br>**Source:** Oracle Health FHIR<br>**Earliest:** Only ~2020+ (facility go-live dates) |

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
| **Medical Records Pages (VA.gov)** | No explicit limit; returns all available FHIR records | Data availability depends on when records were entered into VistA |
| **Blue Button V1 (`my_health/v1`)** | User-selectable:  3 mo, 6 mo, 12 mo, custom, or "all time" | Care notes limited to **2013+**; Appointments limited to **-2 years to +13 months** |
| **Blue Button V2 (`my_health/v2`)** | Backend default: `1900-01-01` to today | UHD service uses this range; VistA care notes still limited to **2013+** at source |
| **CCD via VHIE (V1 - VistA)** | Snapshot at generation time | Includes all available VistA PHR data at
