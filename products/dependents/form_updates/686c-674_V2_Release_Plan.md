# 686c/674 V2 Go/No-Go and Phased Release Plan

## Overview

The 686c/674 V2 release introduces significant backend and payload changes, including new form IDs, support for multiple 674s per claim, new attribute formats, and PDF generation logic updates. This plan outlines how we will assess readiness, phase the rollout, and monitor for potential issues.

---

## Launch Goals

* Route V2 submissions correctly to BGS and RBPS
* Auto-establish claims in VBMS with correct EP codes and metadata
* Generate accurate PDFs for all supported scenarios, including dual 674s
* Prevent silent failures or large-scale fallback to manual routing

---

## Key Risks and Mitigations

**Risk: Incorrect or malformed payloads cause unexpected routing behavior**

Mitigation: Structured test payloads, end-to-end validation with RBPS

**Risk: Spike in claims routed to manual processing**

Mitigation: Datadog alerting on `manual_vagov` rate, regression coverage

**Risk: PDF generation or mapping errors in VBMS**

Mitigation: Maximal payload verification, field-level checks for common submission types

**Risk: BE changes  lead to routing failures**

Mitigation: Controlled rollout using `va_dependents_v2`, review of in-progress form handling

---

## Success Criteria

### Pre-launch

* Maximal payload PDF validated field by field
* Test cases validated by RBPS (routing + claim creation)
* Datadog alerts configured for:

  * Manual routing rate
  * Backup pathway usage
  * Silent failures
  * 500-series and 422 errors
  * Overall error rate

### Post-launch

* Manual routing does not exceed 35 percent
* Backup pathway usage remains below 1.5 percent
* Silent failures trigger alerts at any volume (0 percent threshold)
* Overall submission error rate does not exceed alert threshold (initial target benchmark: 33 percent)
* 500 series error rate does not exceed X
* 422 series error rate does not exceed X
* VBMS EP creation and PDFs behave as expected

---

## Early Warning Signals

* Manual routing rate increases beyond 35 percent
* Backup pathway usage exceeds 1.5 percent
* Any silent failure events detected
* Spike in 422 or 500-series errors
* Drop in successful submissions or PDF uploads
* Downstream feedback about claim anomalies or delays

---

## Phased Rollout Strategy

**Canary Phase**
- **Audience**: Internal only
- **Duration**: Until at least 10 internal V2 submissions have been validated
- **Advancement Criteria**:
  - Confirm correct routing, EP creation, and PDF upload for all internal test cases
  - No silent failures
  - No increase in `manual_vagov` or error rates relative to baseline

**Stage 1**
- **Audience**: 1% of live traffic
- **Duration**: Minimum 2 full business days
- **Advancement Criteria**:
  - Manual routing rate ≤ 35%
  - Backup pathway usage ≤ 1.5%
  - Silent failures = 0
  - No alerts triggered on 422/500 error charts or overall error rate
  - Downstream confirmation from RBPS (if available)

**Stage 2**
- **Audience**: 25% of live traffic
- **Duration**: Minimum 2 full business days
- **Advancement Criteria**: Same as Stage 1

**Stage 3**
- **Audience**: 50% of live traffic
- **Duration**: Minimum 2 full business days
- **Advancement Criteria**: Same as Stage 1

**Stage 4 (Full Release)**
- **Audience**: 100% of live traffic
- **Duration**: Indefinite (V2 becomes default path)
- **Finalization Criteria**:
  - At least 2 full business days of stable performance at full volume
  - Retrospective review of alert history, downstream impact, and open bugs
  - PM and Engineering lead jointly confirm removal of feature flag

---

## Rollback Criteria

- Sustained submission error rate above alert threshold
- Manual routing or backup pathway usage exceeds expected benchmarks
- Downstream partners report failed EP creation or broken PDF output
- Silent failures detected without accompanying alerts
- Engineering determines critical fault based on system health or user impact

---

## Responsibilities

- **Engineering (Evan, Robin):** Maintain alert logic, investigate errors, ensure proper tagging of V2 claims
- **Monitoring (Tai):** Build and maintain dashboards, configure alerts, confirm filtering logic
- **Product (Jacob):** Drive go/no-go decisions, maintain readiness documentation, track follow-up work
- **Stakeholders (Sanja, Caleb):** Validate downstream impact, confirm VBMS and RBPS behavior
- **Entire Team:** Expected to respond to alerts and surface anomalies immediately
