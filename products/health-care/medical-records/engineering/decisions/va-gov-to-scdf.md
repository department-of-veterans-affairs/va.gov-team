# Medical Records Datasource

## TL;DR

We are staring with OH only users to SCDF in the near future. Vista only users will be rolled on a timeline measure in months from now. Our long term goal is to have all users on SCDF.

## Engineering North Stars

- Enabled Veterans to access their complete medical records regardless of datasource
- Rollout of new datasources in a monitored and measured process

## Current State

> As of Jan 2026

4 places Veterans can get their health data:

- **va.gov - Medical Records (MR)**
  - Pulling from PHR for VistA users (vaccines moving to LH to align with mobile)
  - Moving to SCDF for OH users
- **VAHB - Medical Records (VHAB - MR)**
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
- [ ] Restrict accelerated feature toggles to for OH users
- [ ] Update BB to use SCDF for OH users (if still applicable)
  - [ ] Allergies
  - [ ] Labs and Tests
  - [ ] Care Notes
  - [ ] Vaccines
  - [ ] Vitals
  - [ ] Conditions

expected completion: Feb 2026

### Key decisions and next steps

- Create documentation outlining the phases and steps needed to move all users to SCDF
  - These should be geared to help communication the plan to stakeholders and team members
- Update BB to use SCDF for only OH users (if still applicable)
- Update Vaccines to use SCDF

## Phase 2: Work out the issues

In this phase we will focus on identifying and resolving any issues that arise from the initial SCDF integration for OH users. This includes addressing data discrepancies, improving performance, and enhancing the user experience based on feedback.

Things we are **likely** (but not guaranteed) to happen:

- [ ] Address data discrepancies reported by Veterans or identified through monitoring
- [ ] Move all filtering of data to the client level (vets-api) to ensure consistency across datasources
- [ ] Optimize performance of SCDF data retrieval and display by converting/creating a FHIR data store
- [ ] Iterate on the current BB and CCD implementations to see how we can integrate them into a world with OH
- [ ] Start to rollout SCDF for VistA users on va.gov Medical Records

Expected completion: Months away

## Phase 3: VistA users to SCDF

In this phase we will focus on migrating VistA users to SCDF as their primary datasource for medical records. This will involve ensuring that SCDF can handle the data needs of VistA users and providing a seamless transition experience.

Things we are **likely** (but not guaranteed) to happen:

- [ ] Complete SCDF integration for VistA users on va.gov Medical Record
- [ ] Migrate all VistA users to SCDF as their primary datasource for medical records
- [ ] Decommission legacy datasources (PHR, BB) for medical records
