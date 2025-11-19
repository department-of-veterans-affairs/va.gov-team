# 686c Picklist Go/No-Go and Phased Release Plan

## Overview

The Picklist enables a new feature to add prefilled dependent information to 686c removal flows, allowing Veterans to pick the dependents they want to remove from a prefilled list of known dependents, rather than filling out the dependent information manually. The goals of the Picklist are to reduce the number of off-ramps caused by entering mis-matched dependent information and to reduce the form burden associated with manually entering dependent information.

## Launch Goals

* Successfully submit 686c forms for users removing their dependents under various scenarios, including spouse/child/parent removals.
* Generate accurate 686c PDFs for all supported scenarios
* Prevent silent failures 

---

## Key Risks and Mitigations

**Risk: PDF generation or mapping errors**

Mitigation: Payload verification, field-level checks for common submission types

**Risk: Payloads fail downstream validation**

Mitigation: Full e2e testing in Staging environment and phased rollout in Production

---

## Success Criteria

### Pre-launch

* Successful generation of 686c pdfs when Staging users elect to remove their dependents
* Acceptance of form payloads by downstream systems in Staging
* Full e2e testing of form experience in Staging
* Datadog alerts configured for:

  * Silent failures
  * 500-series and 422 errors
  * /v0/dependents_applications/show endpoint failures
  * Overall error rate

### Launch user flow

[We also have a decision flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/picklist/transition-strategy.md#decision-flow-diagram)

| # | User type | `va_dependents_v3`<br> flipper status | Form in progress | Visible flow | Data migrated |
|---|---|---|---|---|---|
|1| Authenticated user | Enabled | Yes, v1 | v1 | No |
|2| Authenticated user | Enabled | Yes, v2 | v2 | No |
|3| Authenticated user | Enabled | Yes, v3 | v3 | v3 to v2 on submission only |
|4| Authenticated user | Enabled | No | v3 | v3 to v2 on submission only |
|5| Authenticated user | Disabled | Yes, v1 | v1 | No |
|6| Authenticated user | Disabled | Yes, v2 | v2 | No |
|7| Authenticated user | Disabled | Yes, v3 | v2 | No (v3 picklist data hidden & Veteran redirected back to veteran info page) |
|8| Authenticated user | Disabled | No | v2 | No |

### Post-launch

* Silent failures trigger alerts at any volume (0% threshold)
* Overall submission error rate does not exceed alert threshold (initial target benchmark: 30%)
* 500 series error rate does not exceed 5%
* 422 series error rate does not exceed 5%

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
- **Duration**: Until at least 10 internal 686c submissions with removal have been validated, including at least one submission for each removal condition removal, e.g., spouse/child/parent.
- **Advancement Criteria**:
  - Confirm PDF upload and acceptance for all internal test cases
  - No silent failures

**Stage A**
- **Audience**: 1% of live traffic
- **Duration**: Minimum 2 full business days
- **Advancement Criteria**:
  - No silent failures
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
- **Duration**: Indefinite
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

Depending on when we determine that a rollback is needed and how many Veterans are effected, we will take the following actions:

| Phase | Main action | Transform data? |
|---|:--:|---|
| Canary | Disable v3 toggle & Fix problem | No |
| Stage A (1%) | Disable v3 toggle & Fix problem | No&dagger; |
| Stage B (25%) | Disable v3 toggle & Fix problem | No&dagger; |
| Stage C (50%) | Disable v3 toggle & Fix problem | Consider&Dagger; |
| Stage D (100%) | Disable v3 toggle & Fix problem | Transform&Dagger; |

&dagger; A minimal number of users are effected for a short period of time

&Dagger; We have data utility functions to transform v3 to v2 data for submissions. We don't have any code implemented to convert in-progress v3 to v2 data currently

---

## Responsibilities

- **Engineering (Evan, Robin):** Maintain alert logic, investigate errors, ensure proper tagging of 686c submissions
- **Monitoring (Medina):** Build and maintain dashboards, configure alerts, confirm filtering logic
- **Product (Alan):** Drive go/no-go decisions, maintain readiness documentation, track follow-up work
- **Entire Team:** Expected to respond to alerts and surface anomalies immediately
