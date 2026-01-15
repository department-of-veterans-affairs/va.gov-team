# Medical Records Datasource

## TL;DR

We are migrating all Medical Records users to SCDF. Oracle Health (OH) users will complete migration by **FY26 Q2 (Feb 2026)**. VistA users will follow in **FY26 Q3–Q4 (Summer 2026)**.

## Engineering North Stars

- Enable Veterans to access their complete medical records regardless of datasource and with no knowledge of underlying systems
- Use SCDF as the single source of truth for all medical records data
- Roll out new datasources in a monitored and measured process

## Current State

> As of Jan 2026

4 places Veterans can get their health data:

- **va.gov - Medical Records (MR)**
  - Pulling from PHR for VistA users (vaccines moving to LH to align with mobile)
  - Moving to SCDF for OH users
- **VAHB - Medical Records (VAHB - MR)**
  - Vaccines and allergies via LH
  - Moving to SCDF for all users
- **va.gov - Blue Button (BB)**
  - Client-side aggregation of PHR APIs
  - VistA only, holdover from MHV classic, future unclear
- **va.gov - Continuity of Care Document (CCD)**
  - HL7 C-CDA standard for sharing with non-VA providers
  - Supports VistA (v1) and Oracle Health (v2) users
  - Available in XML/HTML/PDF

## Current target

All medical records data for all users served via SCDF, with va.gov Medical Records as the primary Veteran-facing interface.

## Roadmap

### Phase 1: OH users to SCDF

> we are here, towards the end of this phase

During this phase we are creating an OH focused experience on va.gov Medical Records by integrating SCDF as the datasource for OH users. This includes implementing SCDF for key data categories, monitoring data accuracy, and restricting accelerated features to OH users.

- [x] Have SCDF in a MVP, production-ready state for OH users to view their VistA and OH data in va.gov Medical Records
- [ ] Complete SCDF integration for OH users on va.gov Medical Records
  - [x] Allergies
  - [x] Labs and Tests
  - [x] Care Notes
  - [ ] Vaccines (currently moving to LH, then SCDF)
  - [x] Vitals
  - [x] Conditions
- [ ] Add Medical Records on VAHB all behind accelerated feature toggles
  - [ ] Allergies
  - [x] Labs and Tests
  - [ ] Vaccines
- [x] Monitor and validate data accuracy and completeness
- [ ] Restrict accelerated feature toggles to OH users only
- [ ] Update BB to use SCDF for OH users
  - [ ] Allergies
  - [ ] Labs and Tests
  - [ ] Care Notes
  - [ ] Vaccines
  - [ ] Vitals
  - [ ] Conditions

**Expected completion: Feb 2026**

---

## Immediate Next Steps

> Actions required before Phase 2

| Action                                                    | Target Date |
| --------------------------------------------------------- | ----------- |
| Update Accelerated Toggles to be for OH user only         | Jan 2026    |
| Update BB to use SCDF for OH users                        | Feb 2026    |
| Update Vaccines to use SCDF                               | Jan 2026    |
| Complete this documentation for stakeholder communication | Jan 2026    |

## Phase 2: Stabilization & Optimization

Focus on resolving issues from Phase 1, improving performance, and preparing for VistA migration.

**Planned work:**

- [ ] Address data discrepancies reported by Veterans or identified through monitoring
- [ ] Move all filtering of data to the client level (vets-api) for consistency across datasources
- [ ] Optimize SCDF data retrieval and display by converting/creating a FHIR data store
- [ ] Define BB and CCD integration strategy for OH world
- [ ] Begin VistA user rollout preparation on va.gov Medical Records

**Expected completion: FY26 Q3 (Apr–Jun 2026)**

## Phase 3: VistA Users to SCDF

Migrate VistA users to SCDF as their primary datasource, completing the unified Medical Records experience.

**Planned work:**

- [ ] Complete SCDF integration for VistA users on va.gov Medical Records
- [ ] Migrate all VistA users to SCDF as their primary datasource
- [ ] Decommission legacy datasources (PHR, BB) for medical records

**Expected completion: FY26 Q4 (Jul–Sep 2026)**
