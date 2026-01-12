# VES Integration Product Outline

## Overview
VES (Veteran Enrollment System) is a VA-owned API that allows CHAMPVA applications to be submitted electronically as structured data. The IVC CHAMPVA Forms platform (VA.gov) is already integrated with PEGA, which functions as a document store and downstream intake workflow. Today, the system generates a populated PDF (plus any supporting documents) and submits those artifacts for processing through the existing PEGA pipeline.

Integrating VES introduces a second backend destination for CHAMPVA submissions. Instead of a single linear “submit to one place” workflow, we must submit:
- **PDF + supporting documents to PEGA**, and
- **structured JSON form data to VES** (no supporting documents)

This product outlines the approach and decisions needed to reliably support dual submission, preserve a smooth user experience, and ensure operational recoverability when one backend succeeds and the other fails.

---

## Problem Statement
The current workflow relies on generated PDFs and document uploads flowing through a single backend pipeline. This limits automation and increases manual effort downstream. Integrating with VES should provide a large efficiency boost to application review workflows, and unlocks technical connections that were previously unavailable.

Adding VES enables structured application ingestion but introduces complexity:
- Two independent systems must receive submission data.
- Failures can occur in either system, creating the risk of systems getting out of sync.
- The platform must support validation, retries, observability, and recovery while keeping the user experience stable.

How might we submit CHAMPVA forms to both PEGA and VES in a way that:
- preserves a consistent user experience,
- minimizes the chance of PEGA/VES data inconsistency,
- and provides clear operational paths for retries and intervention when needed?

---

## Desired User Outcomes
- Veterans can submit CHAMPVA forms successfully without needing to understand backend destinations.
- Veterans receive clear, fast feedback when an error prevents submission.
- Veterans are not blocked by transient downstream issues when their submission has already been accepted by the primary workflow.
- Veterans experience fewer delays caused by manual downstream handling.

---

## Undesired User Outcomes
- Veterans receive success messaging when their submission has actually failed entirely.
- Veterans receive confusing or inconsistent error messaging due to multiple backend systems.
- Veterans are asked to resubmit unnecessarily due to recoverable downstream issues.
- Veterans lose trust if submission appears successful but later processing fails silently.

---

## Desired Business Outcomes
- Structured form data is available in VES for faster automated processing and future retrieval workflows.
- Submission handling remains reliable even with two downstream systems.
- Operational overhead is reduced through retries, monitoring, and clear failure signals.
- Engineering avoids duplicative schema and workflow complexity by reusing existing components where appropriate.

---

## Undesired Business Outcomes
- Increased operational burden due to PEGA/VES inconsistencies.
- Higher support volume caused by ambiguous submission states.
- Data loss or inability to reconstruct payloads for resubmission.
- Increased error rates due to schema drift or validation gaps.

---

## Measuring Success

### Key Performance Indicators (KPIs)

#### Baseline KPI Values
To be established using current CHAMPVA submission operational data.
- Overall submission success rate (front-end)
- PEGA submission failure rate
- VES submission failure rate (initial + after retries)
- Retry success rate
- Median/95p latency for submission workflow
- Number of manual interventions required for VES submission failures

### Objectives and Key Results (OKRs)

Objective: Increase automation and structured ingestion for CHAMPVA forms  
- Key result: Increase percentage of submissions successfully delivered to VES
- Key result: Reduce manual downstream handling where structured ingestion applies

Objective: Maintain a reliable and understandable submission experience  
- Key result: 100% of failed submissions provide user-visible errors when submission cannot be accepted
- Key result: Reduce submission-related support contacts tied to “where is my application?”

Objective: Ensure operational recoverability and observability  
- Key result: All VES failures after PEGA success are recoverable via automated retries or identifiable for manual intervention
- Key result: Monitoring and alerting exists for failure modes

---

## Assumptions
- PEGA remains the primary “document + supporting docs” destination in the near term.
- VES failures will be less frequent than PEGA failures (because it is a simpler POST of structured data).
- Early validation in vets-api can prevent avoidable downstream failures and improve user experience.
- Some failure scenarios (PEGA success, VES failure) will require operational/manual intervention if retries fail.

---

## Solution Approach
This work implements a dual-backend submission pipeline aligned to the accepted integration approach and ADR decisions.

### 1. Submission Lifecycle (High Level)
1. Receive a form submission request
2. Perform **VES-specific validation** in vets-api (required fields / schema alignment)
   - If validation fails: return error to user (halt)
3. Submit to **PEGA** (PDF + supporting documents)
   - If PEGA fails: return error to user (halt)
4. Submit to **VES** (structured JSON)
   - If VES fails after PEGA success: return success to user, trigger async retries and monitoring

### 2. Existing PEGA Workflow (Baseline)
- Supporting documents uploaded separately and stored temporarily until final form submission
- On submit (UploadsController):
  - Find supporting documents for the transaction
  - Transform files (PDF conversion + rename to mask PII)
  - Construct the completed VA form using PdfFiller and JSON metadata
  - Upload completed form + supporting documents to PEGA-owned S3
  - Upload metadata file signaling files are ready for PEGA pickup

### 3. VES Submission (Added)
- VES receives only the structured VA form data (no supporting documents)
- A data converter utility constructs a new object modeled after the VES API schema
- The transformed JSON is submitted to VES following successful PEGA submission

### 4. Error Handling Strategy (Minimize Out-of-Sync Risk)
- Validate VES payload first:
  - If invalid for VES → fail fast, return error, do not submit anywhere
- Submit to PEGA next:
  - If PEGA fails → return error, do not submit to VES
- Submit to VES last:
  - If VES fails after PEGA success → user sees success; retries occur asynchronously
  - If retries exhaust → alerting + manual intervention path

This ordering reduces the chance of VES receiving data that PEGA does not (which would create inconsistency with the primary document workflow).

---

## Launch Strategy
- Internal review of integration behavior and failure modes (engineering + product)
- Coordinate rollout timing with VES team greenlight
- Validate monitoring/alerts before enabling broadly
- Release behind feature flags where appropriate
- Monitor early metrics and adjust retry thresholds/alerting as needed

---

## Incident Response / Rollback
- Feature flags used for VES submission and/or new validation behavior
- If issues arise:
  - Disable VES submission while maintaining PEGA-only pipeline
  - Triage and patch within 1–3 days depending on severity
  - Monitor dashboards and alerts continuously during rollout

---

## Launch Dates
- Target Launch Date: TBD
- Actual Launch Date: TBD
- Impact Review: TBD (post-launch data review)

---

## Solution Narrative

### Current Status
- PEGA submission workflow is established and operational.
- VES integration requires dual-backend submission logic, mapping utilities, and database support for retry/recovery.
- Work includes improving retry logic reuse, data mapping improvements, and schema updates for VES tracking.

### Key Decisions
- Validate for VES eligibility first, then submit to PEGA, then to VES.
- If VES fails after PEGA success, do not fail the user experience; rely on retries and operational monitoring.
- Store VES request payload and status alongside existing submission records to support resubmission and auditing.
- Use Sidekiq-based retries for post-success VES failures to reduce manual work and improve consistency.

---

## Screenshots
### Before

### After

---

## Communications
- Team Name: IVC Forms team
- GitHub Label: ivc-forms
- Slack channel: ivc-forms
- Product POCs: Mike Mooney
- Stakeholders: CHAMPVA Program, Design, Platform, Security

---

## Team Members
- DEPO Lead: Premal Shah
- PM: Mike Mooney
- Engineering: Kyle Brost, Derrick Ellerbie, Steve Long
- Research/Design: Renata Keck, Hieu Vo, Jessica Stump
