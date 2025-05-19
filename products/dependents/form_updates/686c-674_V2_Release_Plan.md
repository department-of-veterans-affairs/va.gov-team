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
* Error rate does not exceed alert threshold (initial target benchmark: 33 percent)
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
Audience: Internal only
Trigger: After \~10 claims, confirm submissions route correctly, PDFs upload, and no silent failures

**Stage 1**
Audience: 1% of live traffic
Trigger: 3–5 days of error-free operation with alerting in place

**Stage 2**
Audience: 25%
Trigger: One week of stable routing and PDF generation

**Stage 3**
Audience: 50%
Trigger: No alerting anomalies, VBMS and RBPS confirm healthy volume

**Stage 4 (Full Release)**
Audience: 100%
Trigger: Confirmed stability across submission types, routing paths, and PDF outputs

---

## Rollback Criteria

* Sustained submission error rate above alert threshold
* Manual routing or backup pathway usage exceeds expected benchmarks
* Downstream partners report failed
