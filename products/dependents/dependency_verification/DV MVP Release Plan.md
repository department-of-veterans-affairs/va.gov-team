# DV MVP Go/No-Go and Phased Release Plan

## Overview

The DV MVP release introduces a new digital form to VA.gov the 21-0538. For MVP, we'll only be submitting this form on behalf of the user when the user is verifying all their dependent information is current and accurate.
## Launch Goals

* Successfully submit 0538 forms for users verifying their dependents (but not when they want to remove them)
* Generate accurate 0538 PDFs for all supported scenarios
* Prevent silent failures 

---

## Key Risks and Mitigations


**Risk: PDF generation or mapping errors**

Mitigation: Payload verification, field-level checks for common submission types

**Risk: Payloads fail downstream validation**

Mitigation: Full e2e testing in staging environment and phased rollout in production

---

## Success Criteria

### Pre-launch

* Successful generation of 0538 pdfs when staging users elect to verify their dependents
* Acceptance of form payloads by downstream systems in Staging
* Full e2e testing of form experience in Staging
* Datadog alerts configured for:

  * Silent failures
  * 500-series and 422 errors
  * Overall error rate

### Post-launch

* Silent failures trigger alerts at any volume (0 percent threshold)
* Overall submission error rate does not exceed alert threshold (initial target benchmark: 33 percent)
* 500 series error rate does not exceed X
* 422 series error rate does not exceed X

---

## Early Warning Signals

* Any silent failure events detected
* Spike in 422 or 500-series errors
* Drop in successful submissions or PDF uploads
* Downstream feedback about form anomalies or delays

---

## Phased Rollout Strategy

**Canary Phase**
- **Audience**: Internal only
- **Duration**: Until at least 10 internal 0538 submissions have been validated
- **Advancement Criteria**:
  - Confirm PDF upload and acceptance for all internal test cases
  - No silent failures

**Stage A**
- **Audience**: 1% of live traffic
- **Duration**: Minimum 2 full business days
- **Advancement Criteria**:
  - Silent failures = 0
  - No alerts triggered on 422/500 error charts or overall error rate
  - Downstream confirmation from BGS/BEP

**Stage B**
- **Audience**: 25% of live traffic
- **Duration**: Minimum 2 full business days
- **Advancement Criteria**: Same as Stage A

**Stage C**
- **Audience**: 50% of live traffic
- **Duration**: Minimum 2 full business days
- **Advancement Criteria**: Same as Stage A

**Stage D (Full Release)**
- **Audience**: 100% of live traffic
- **Duration**: Indefinite)
- **Finalization Criteria**:
  - At least 2 full business days of stable performance at full volume
  - Retrospective review of alert history, downstream impact, and open bugs
  - PM and Engineering lead jointly confirm removal of feature flag

---

## Rollback Criteria

- Sustained submission error rate above alert threshold
- Downstream partners report broken PDF output
- Silent failures detected without accompanying alerts
- Engineering determines critical fault based on system health or user impact

---

## Responsibilities

- **Engineering (Evan, Robin):** Maintain alert logic, investigate errors, ensure proper tagging of 0538 submissions
- **Monitoring (Tai):** Build and maintain dashboards, configure alerts, confirm filtering logic
- **Product (Jacob):** Drive go/no-go decisions, maintain readiness documentation, track follow-up work
- **Entire Team:** Expected to respond to alerts and surface anomalies immediately
