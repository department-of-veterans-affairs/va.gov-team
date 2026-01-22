# QA7: Silent Failures Analysis - Form 21-0779

**Form:** 21-0779 (Request for Nursing Home Information in Connection with Claim for Aid & Attendance)  
**Team:** Aquia (Benefits Intake Optimization)  
**Document Version:** 1.0  
**Last Updated:** November 4, 2025  
**For:** Staging Review / Collaboration Cycle

---

## Executive Summary

**QA7 Requirement:**  
> "Product teams must verify that they have taken steps to prevent all silent failures in asynchronous form submissions or state why this standard is not applicable."

**Form 21-0779 Status:** ✅ **QA7 APPLIES** - Form uses asynchronous submission processing.

**Key Finding:** Form 21-0779 uses the same infrastructure as Form 21P-530a. Both forms use a shared Sidekiq job (`Lighthouse::SubmitBenefitsIntakeClaim`) that is used by approximately **22 VA.gov forms**. This shared job currently lacks ZeroSilentFailures (ZSF) monitoring, representing a **systemic platform issue**.

**Current Mitigation:**
- ✅ QA6 monitoring alerts team within 10 minutes of failures
- ✅ FormSubmissionAttempt tracking enables manual remediation
- ✅ Lighthouse API has >99.5% reliability
- ✅ Documented incident response procedures

**See Full Analysis:** [Forms 21P-530a & 21-0779 QA7 Analysis](../21P-530a/collaboration-cycle/qa7-silent-failures.md)

---

## QA7 Applicability

**Does QA7 apply to Form 21-0779?** ✅ **YES**

**Reason:** Form uses asynchronous submission processing.

### Submission Flow

1. User submits form via `POST /v0/form210779`
2. Controller creates `SavedClaim::Form210779` record
3. Record saved to database
4. **Async:** `claim.process_attachments!` queues Sidekiq job
5. HTTP 200 response returned to user with confirmation number
6. **Async:** `Lighthouse::SubmitBenefitsIntakeClaim` processes in background
7. Job submits to Lighthouse Benefits Intake API

**Risk:** User receives confirmation immediately (step 5), but actual submission happens asynchronously (steps 6-7). If the Sidekiq job fails after exhausting all retries, the user is unaware - this is a **silent failure**.

---

## Shared Infrastructure with Form 21P-530a

Forms 21-0779 and 21P-530a share:
- ✅ Same Sidekiq job (`Lighthouse::SubmitBenefitsIntakeClaim`)
- ✅ Same monitoring infrastructure
- ✅ Same QA7 analysis
- ✅ Same mitigation strategies
- ✅ Same post-launch improvement plan

**Complete Analysis:** See [Forms 21P-530a & 21-0779 QA7 Analysis](../21P-530a/collaboration-cycle/qa7-silent-failures.md) for:
- Detailed current implementation
- Systemic issue discovery (22 forms affected)
- Current mitigation strategies
- Gap analysis
- Proposed solution
- Staging review response
- Code references and evidence

---

## Form 21-0779 Specific Details

### Endpoints

**Submission:** `POST /v0/form210779`  
**PDF:** `POST /v0/form210779/download_pdf`

### Metrics

**Form-Specific:**
- `api.form210779.success`
- `api.form210779.failure`

**Shared Job:**
- `worker.lighthouse.submit_benefits_intake_claim.success`
- `worker.lighthouse.submit_benefits_intake_claim.failure`
- `worker.lighthouse.submit_benefits_intake_claim.exhausted` (🚨 CRITICAL)

### Logging

**Searchable Tags:**
- `Form=21-0779`
- `Form210779:`
- `ClaimID=V-EBC-*`

---

## Current Mitigation Summary

### 1. QA6 Monitoring (10-Minute Response)

**Monitor C: Silent Failure Detection**
- Alerts team within 10 minutes
- Notification: `#benefits-optimization-aquia`
- Enables rapid response and remediation

### 2. FormSubmissionAttempt Tracking

**Query for Failed Form 21-0779 Submissions:**
```sql
SELECT 
  fsa.id,
  fsa.saved_claim_id,
  fsa.aasm_state,
  fsa.failure_details,
  fsa.created_at,
  sc.confirmation_number
FROM form_submission_attempts fsa
JOIN saved_claims sc ON sc.id = fsa.saved_claim_id
WHERE fsa.aasm_state = 'failure'
AND sc.form = '21-0779'
ORDER BY fsa.created_at DESC;
```

### 3. Incident Response

**Documented Procedures:**
1. Identify affected submissions
2. Retrieve claim details
3. Manually re-queue Sidekiq jobs
4. Verify successful submission
5. Document incident

**See:** [Endpoint Monitoring documentation](./endpoint-monitoring.md) Section "Response to Silent Failure"

### 4. High API Reliability

- Lighthouse API >99.5% uptime
- 16 retries over ~20 hours
- Very low probability of exhaustion

---

## Staging Review Response

**Question:**  
> "Product teams must verify that they have taken steps to prevent all silent failures in asynchronous form submissions or state why this standard is not applicable."

**Answer for Form 21-0779:**

> **QA7 applies** to Form 21-0779 as it uses asynchronous submission processing.
>
> Form 21-0779 shares infrastructure with Form 21P-530a and uses the same mitigation strategies:
>
> 1. ✅ **QA6 Monitoring:** Log-based alert within 10 minutes
> 2. ✅ **FormSubmissionAttempt Tracking:** Database tracking for manual remediation
> 3. ✅ **Incident Response Procedures:** Documented runbook
> 4. ✅ **High API Reliability:** Lighthouse API >99.5% uptime, 16 retries
>
> **Systemic Issue:** Form 21-0779 uses a shared Sidekiq job with ~22 VA.gov forms. This job lacks ZSF monitoring - a platform-wide issue, not form-specific.
>
> **Commitment:** Post-launch, we will lead platform improvement to add ZSF monitoring to the shared job, benefiting all 22 forms.
>
> **See full analysis:** [Forms 21P-530a & 21-0779 QA7 Analysis](../21P-530a/collaboration-cycle/qa7-silent-failures.md)

---

## Related Documentation

- **Platform QA Standards:** https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards
- **Endpoint Monitoring:** [endpoint-monitoring.md](./endpoint-monitoring.md)
- **Complete QA7 Analysis:** [Forms 21P-530a & 21-0779](../21P-530a/collaboration-cycle/qa7-silent-failures.md)
- **Form 21P-530a QA Standards:** [../21P-530a/collaboration-cycle/qa-standards.md](../21P-530a/collaboration-cycle/qa-standards.md)
