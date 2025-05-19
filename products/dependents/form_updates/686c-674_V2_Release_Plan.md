# 686c/674 V2 Go/No-Go and Phased Release Plan

## Overview

The 686c/674 V2 release introduces significant backend and payload changes, including new form IDs, support for multiple 674s per claim, new attribute formats, and PDF generation logic updates. This plan outlines how we will assess readiness, phase the rollout, and monitor for potential issues.

---

## Launch Goals

- Route V2 submissions correctly to BGS and RBPS
- Auto-establish claims in VBMS with correct EP codes and metadata
- Generate accurate PDFs for all supported scenarios, including dual 674s
- Prevent silent failures or large-scale fallback to manual routing

---

## Key Risks and Mitigations

**Risk: Incorrect or malformed payloads cause unexpected routing behavior**  
Mitigation: Structured test payloads, end-to-end validation with RBPS

**Risk: Spike in claims routed to manual processing**  
Mitigation: Datadog alerting on `manual_vagov` values, regression coverage

**Risk: PDF generation or mapping errors in VBMS**  
Mitigation: Maximal payload verification, line-by-line field checks, targeted scenario reviews

**Risk: Feature flag inconsistencies lead to routing failures**  
Mitigation: Controlled rollout using `va_dependents_v2`, in-progress form handling review

---

## Success Criteria

### Pre-launch Go/No-go criteria

- Maximal payload PDF validated field by field
- Test cases validated by RBPS (routing + claim creation)
- Datadog alerting live for:
  - Spike in `manual_vagov` claims
  - Submission error anomalies
  - API failures or degraded routing

### Post-launch

- Submission error rate remains below 1%
- No increase in manual routing above baseline
- VBMS EP creation and PDFs behave as expected

---

## Early Warning Signals

- Unexpected rise in `manual_vagov` volume
- Increased submission or transmission failures
- Long tail of pending submissions with no claim activity
- Downstream reports of unreadable or missing PDFs
- Manual processing queue strain reported by BEP/RBPS

---

## Phased Rollout Strategy

**Canary Phase**  
Audience: Internal only  
Goal: Confirm end-to-end success on real infrastructure with small volume  
Trigger: Proceed when V2 routing, VBMS upload, and PDFs succeed for ~10 claims

**Stage 1**  
Audience: 1% of traffic  
Goal: Monitor for spikes in manual routing, PDF errors, or routing anomalies  
Trigger: Advance after 3–5 days of stability and no alerts

**Stage 2**  
Audience: 25% of traffic  
Goal: Validate system performance and routing at modest scale  
Trigger: Advance after 1 week of consistent metrics

**Stage 3**  
Audience: 50% of traffic  
Goal: Ensure parity with V1 behavior, uncover edge case issues  
Trigger: Proceed if error rates and routing remain stable

**Stage 4 (Full Release)**  
Audience: 100% of traffic  
Goal: Retire V1 logic, remove feature flag  
Trigger: Confirmed stability across submissions, routing, PDF generation, and downstream feedback

---

## Rollback Criteria

- Sustained submission error rate above 1%
- Surge in manual processing with no legitimate justification
- Validated cases not creating EPs in VBMS
- Negative feedback from downstream partners about claim quality or processing strain

---

## Responsibilities

- **Engineering (Evan Smith, Robin Garrison):** Ensure V2 submissions are tagged appropriately, implement and maintain alerting logic, investigate errors surfaced during rollout.
- **Monitoring and Observability (Tai Wilkin, Matt Knight):** Configure dashboards and alerts in DataDog, ensure V2-specific metrics are trackable, set thresholds for early warning signals.
- **Product (Jacob Worrell):** Coordinate go/no-go decision-making, ensure test coverage aligns with rollout scope, support prioritization of follow-up issues.
- **Stakeholder Coordination (Jacob Worrell, Caleb Roberts):** Validate downstream claim behavior, ensure government visibility into risk posture and post-launch behavior.
- **Team-wide:** All members are expected to respond to alerts and escalate anomalies surfaced during rollout.


---

## Additional Work Required Before Release

- Complete field-level validation of the maximal test case PDF
- Confirm logging and tagging is in place to segment V2 traffic in monitoring tools
- Finalize and send test tracker to RBPS with participant and proc IDs
- Confirm Datadog alerts for routing spikes, error rates, and PDF failures
- Verify feature flag logic behaves as expected across new and in-progress claims

---

## Notes

- Monthly volume for these forms is ~30,000. Our rollout strategy should validate behavior at scale while minimizing risk of harm to Veterans or strain on backend processors.
