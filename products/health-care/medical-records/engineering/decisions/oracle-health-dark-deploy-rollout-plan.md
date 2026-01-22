# Medical Records Oracle Health Integration - Dark Deploy Rollout Plan

**Last Updated:** January 22, 2026  
**Status:** Draft  
**Product:** Medical Records  
**Integration:** Oracle Health (Millennium)

---

## Executive Summary

This document outlines the phased rollout plan for enabling Oracle Health data integration for Medical Records. This is a "dark deploy" - users will not be notified that their data source may change. The integration is designed to be transparent to end users.

This rollout is coordinated with the Secure Messaging (SM), Medications and Appointments dark deploys as part of a broader Oracle Health integration initiative.

In this plan we will need to test and verfiy all 6 domains within Medical Records:

- Allergies
- Labs and Tests
- Care Notes
- Vaccines
- Vitals
- Conditions

Allergies and Labs and Tests are the priority domains to validate prior to rollout, as they are the most commonly used by Veterans or blocking for other products (e.g., Medications).

---

## 1. Current Architecture

### 1.1 Data Sources

Medical records are stored in **two canonical sources**:

| Source        | Database            | Users           |
| ------------- | ------------------- | --------------- |
| MHV (Legacy)  | MyHealtheVet tables | Vista patients  |
| Oracle Health | Millennium tables   | Oracle patients |

### 1.2 Data Flow by Patient Type

#### Vista Patients (Current/Unchanged)

```
Website/Mobile App → Vets API → MHV Patient API → MHV Database
```

#### Oracle and Vista Patients (New Integration)

```
Website/Mobile App → Vets API → SCDF → Millennium (via Oracle APIs) OR HDR VPR (for Vista data)
```

---

## 2. How Dark Deploy Works

### 2.1 Feature Flag Mechanism

We have 7 feature flags; one per domain and one global flag:

### 2.2 User Experience

- **Transparent to users** - they do not know if the flag is on or off

### 2.3 Who Is Affected

| Patient Type                   | Impact                                        |
| ------------------------------ | --------------------------------------------- |
| Vista-only patients            | Using SDCF to query HDR VPR to get VistA Data |
| Oracle-only patients           | Using SDCF to query Millennium to get OH Data |
| Dual patients (Vista + Oracle) | Using SCDF to get both VistA and OH Data      |
|                                |                                               |

---

## 3. Pre-Rollout Validation

> To do per domain

| Validation                | Status        | Notes                                       |
| ------------------------- | ------------- | ------------------------------------------- |
| Vista health data         | ⏳ Pending     | **BLOCKING** - Must complete before rollout |
| Lower environment testing | ✅ Complete    | All environments tested                     |
| Moderated testing         | ⏳ In Progress |                                             |
| Trusted user testing      | ⏳ In progress |                                             |

---

## 4. Dark Deploy (5% of users)

### Rollback plans

Rollback if:

- New class of errors when fetching medical records for Oracle patients
- Any unknown/unfamiliar error patterns
- Too many errors when fetching medical records for Oracle patients

### Wave 1A: Labs and Tests, Allergies, Care Notes (Dark Deploy Phase 1)

**Target Start:** Monday, January 27, 2026 (pending Vista health data validation)

Toggles to turn to 5%

| Item                       | Detail                                     |
| -------------------------- | ------------------------------------------ |
| isAcceleratingAllergies    | Set to 5% of all users to start using SCDF |
| isAcceleratingLabsAndTests | Set to 5% of all users to start using SCDF |
| isAcceleratingCareNotes    | Set to 5% of all users to start using SCDF |

### Wave 1B: Vitals, Conditions (Dark Deploy Phase 2)

**Target Start:** After validation of VistA data is complete

Toggles to turn to 5%

| Item                     | Detail                                     |
| ------------------------ | ------------------------------------------ |
| isAcceleratingVitals     | Set to 5% of all users to start using SCDF |
| isAcceleratingConditions | Set to 5% of all users to start using SCDF |

### Wave 1C Vaccines (alignment to LH data source)

**Target Start:** Monday, January 27, 2026

| Item                   | Detail                                   |
| ---------------------- | ---------------------------------------- |
| isAcceleratingVaccines | Set to X% of all users to start using LH |

Very fast rollout due to LH already being live with mobile.

### Wave 1C Vaccines (alignment to SCDF data source)

**Target Start:** When LH alignment is complete, dev is complete, and testing is complete

| Item                   | Detail                                     |
| ---------------------- | ------------------------------------------ |
| isAcceleratingVaccines | Set to 5% of all users to start using SCDF |

## 5. 20% Rollout and Each Step Thereafter

### Rollback plans

Rollback if:

- New class of errors when fetching medical records for Oracle patients
- Any unknown/unfamiliar error patterns
- Too many errors when fetching medical records for Oracle patients

**Note**: All domains should be moved at the same time

**Target Start:** After successful 5% rollout and monitoring period of at least ?????

Toggles to turn to 20%

| Toggle                     |
| -------------------------- |
| isAcceleratingVaccines     |
| isAcceleratingAllergies    |
| isAcceleratingLabsAndTests |
| isAcceleratingCareNotes    |
| isAcceleratingVitals       |
| isAcceleratingConditions   |

---

## 6. Monitoring & Observability

### 6.1 Key Metrics to Monitor

| Metric              | Source  | Alert Threshold            |
| ------------------- | ------- | -------------------------- |
| SCDF error rate     | datadog | Any increase from baseline |
| SCDF response times | datadog | TBD                        |

### Datadog Dashboard lists

- TBD

## Blockers for 5% rollout

- [ ] Vista health data validation complete
- [ ] Blue Button integration and validation complete
- [ ] Vaccine to LH alignment complete
- [ ] Vaccine to SCDF dev complete
- [ ] Dashboards and alerts are configured for SCDF routes
- [ ] Diagrams are completed to understand data flow changes

---

## Appendix

### A. Glossary

| Term         | Definition                                                   |
| ------------ | ------------------------------------------------------------ |
| SM           | Secure Messaging                                             |
| MHV          | MyHealtheVet                                                 |
| Millennium   | Oracle Health's clinical database system                     |
| Vista        | Legacy VA health information system                          |
| Dual Patient | Veteran with records in both Vista and Oracle Health systems |
| Nudging      | Active user migration/notification efforts post-dark deploy  |
| OCC          | Office of Connected Care                                     |
| MH3          | My HealtheVet 3.0                                            |
| SCDF         | The Spring Cloud Data Flow API                               |
|              |                                                              |
