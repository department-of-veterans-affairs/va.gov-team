# Medications Oracle Health Integration - Dark Deploy Rollout Plan

**Last Updated:** January 22, 2026  
**Status:** Draft  
**Product:** Medications (RX)  
**Integration:** Oracle Health (Millennium)

---

## Executive Summary

This document outlines the phased rollout plan for enabling Oracle Health data integration for Medications. This is a "dark deploy" - users will not be notified that their data source may change. The integration combines Vista and Oracle Health medication data through Spring Cloud Dataflow.

---

## 1. Current Architecture

### 1.1 Data Sources

Medications are stored in **two canonical sources**:

| Source | System | Data Sync |
|--------|--------|-----------|
| Vista | Individual facility Vistas | HL7 transactions to MHV RX API; local copy stored in MHV database |
| Oracle Health | Millennium | FHIR APIs via Spring Cloud Dataflow |

### 1.2 Data Flow - Current State (Toggle Off)

#### Vista Medications
```
Website/Mobile App → Vets API → MHV RX API → MHV Database (synced from Vista via HL7)
```

### 1.3 Data Flow - With Toggle On

#### All Medications (Vista + Oracle)
```
Website/Mobile App → Vets API → Spring Cloud Dataflow
                                        ├─→ MHV RX API → MHV Database (Vista meds)
                                        └─→ Oracle Health FHIR APIs → Millennium (Oracle meds)
                                                    ↓
                              Combined package returned to Vets API
                              (Vista section + Oracle Health section)
```

**Key Point:** When the toggle is on, Vets API **only** calls Spring Cloud Dataflow, which then handles routing to both data sources. Vista data passes through unchanged - no munging or modification.

### 1.4 Refill Processing

#### Vista Refills (Toggle On)
```
Vets API → Spring Cloud Dataflow → "This is a Vista Med" → MHV RX API → Vista → Response
```

#### Oracle Refills (Toggle On)
```
Vets API → Spring Cloud Dataflow → "This is an Oracle Med" → HL7 message → Millennium → Response
```

---

## 2. How Dark Deploy Works

### 2.1 Toggle Behavior

When the toggle is enabled:
- Vets API routes **all** medication requests through Spring Cloud Dataflow
- Spring Cloud Dataflow determines med type and routes appropriately
- Vista data remains unchanged - SCDF acts as a pass-through
- Oracle data is fetched and combined with Vista data

### 2.2 User Experience

- **Transparent to users** - they do not know if the toggle is on or off
- Combined medication list shows both Vista and Oracle meds
- Refill actions work the same from user perspective

### 2.3 Impact by Patient Type

| Patient Type | Impact |
|--------------|--------|
| Vista-only patients | Minimal change - data passes through SCDF unchanged |
| Oracle-only patients | Medications fetched via FHIR APIs |
| Dual patients | Combined list from both sources |

---

## 3. Pre-Rollout Validation

| Validation | Status | Notes |
|------------|--------|-------|
| Oracle Health meds fetch | ✅ Complete | Tested in lower environments |
| Oracle Health refills | ✅ Complete | Tested with trusted users |
| Vista meds with toggle on | ⚠️ **REQUIRED** | Must confirm with 1-2 patients before rollout |
| Vista refills with toggle on | ⚠️ **REQUIRED** | Must confirm SCDF pass-through works |

### 3.1 Critical Pre-Rollout Gate

**Before any percentage rollout:**
- [ ] Confirm Vista medication list retrieval works with toggle on (1-2 test patients)
- [ ] Confirm Vista refill submission works with toggle on (1-2 test patients)

This validates that Spring Cloud Dataflow correctly passes through Vista requests to MHV RX API.

---

## 4. Known Error Classes

### 4.1 Timeout Errors (Spring Cloud Dataflow)

| Issue | Cause | User Impact | Resolution |
|-------|-------|-------------|------------|
| SCDF timeout on large meds list | Pulling full medication history | Error on screen | User refreshes; data appears (cached after downstream success) |

**Frequency:** Not super often, but occurs with large histories

### 4.2 DAS Layer Errors

| Issue | Cause | User Impact | Resolution |
|-------|-------|-------------|------------|
| HL7 service delays | DAS issues between SCDF and Oracle HL7 service | Error on screen; ~30 second processing delays | Retry usually succeeds |

**Note:** We have not seen successive failures or the same med failing repeatedly.

---

## 5. Phased Rollout Schedule

### Phase 1: Canary (1-5% of users)
**Purpose:** Validate traffic flow; confirm Vista pass-through works at scale

| Item | Detail |
|------|--------|
| **Pre-requisite** | Vista validation complete (see Section 3.1) |
| Duration | TBD (minimum 24-48 hours recommended) |
| Population | Random 1-5% of eligible users |
| Success Criteria | No new error classes; Vista meds working; refills processing |
| Decision Point | Proceed to Phase 2 or rollback |

### Phase 2: Limited Rollout (20% of users)
**Purpose:** Increase load to validate system stability at scale

| Item | Detail |
|------|--------|
| Duration | TBD (minimum 48-72 hours recommended) |
| Population | Random 20% of eligible users |
| Success Criteria | No new error classes; error rates within normal thresholds |
| Decision Point | Proceed to Phase 3 or rollback |

### Phase 3: Full Rollout (100% of users)
**Purpose:** Complete deployment to all eligible users

| Item | Detail |
|------|--------|
| Population | All users |
| Monitoring | Continued observation for 1-2 weeks post-rollout |

---

## 6. Monitoring & Observability

### 6.1 Key Metrics to Monitor

| Metric | Source | Priority |
|--------|--------|----------|
| Spring Cloud Dataflow response times | SCDF logs | High |
| SCDF timeout errors | SCDF logs | High |
| Refill success/failure rates | Vets API / SCDF | **Critical** |
| MHV RX API call success (Vista path) | MHV RX API | High |
| Oracle FHIR API response times | SCDF logs | High |
| DAS/HL7 service errors | SCDF logs | High |

### 6.2 Refill Sensitivity

**Refills are the most sensitive operation** - extensive observability is in place for refill processing. Monitor closely for:
- Failed refill submissions
- Repeated failures for the same medication
- New error patterns in refill flow

---

## 7. Rollback Plan

### 7.1 Rollback Trigger Criteria

Rollback is **NOT percentage-based**. Rollback is triggered by:

| Trigger | Action |
|---------|--------|
| **New class of errors** not seen in testing | Immediate rollback |
| Vista medications failing to load (SCDF pass-through broken) | Immediate rollback |
| Vista refills failing (SCDF pass-through broken) | Immediate rollback |
| Successive failures for same medication | Evaluate and likely rollback |
| Unknown/unfamiliar error patterns | Immediate rollback for investigation |

**Note:** Known timeout and DAS errors (Section 4) are expected and do not trigger rollback unless frequency significantly increases.

### 7.2 Rollback Procedure

1. **Disable toggle** - Vets API reverts to calling MHV RX API directly
2. Users automatically revert to Vista-only flow
3. **User impact:** Oracle meds no longer visible; Vista meds unaffected
4. Investigate root cause before re-enabling

### 7.3 Rollback Decision Authority

| Role | Authority |
|------|-----------|
| On-call engineer | Can initiate immediate rollback |
| Product Owner | Must approve re-enablement after rollback |
| Engineering Lead | Final decision on rollback threshold interpretation |

---

## 8. Renewal Functionality (Separate Timeline)

Prescription renewal is on a **separate rollout timeline** from the main medications dark deploy.

### 8.1 Renewal Scope

| Item | Detail |
|------|--------|
| Availability | 6 Oracle Health sites only |
| Visibility | Only shows for patients registered at those facilities |
| Status | Feature development complete; awaiting validation |

### 8.2 Renewal Rollout Prerequisites

- [ ] Business partner validation (Carnetta, Eric, Sylvia)
- [ ] Trusted user testing (TBD)
- [ ] Confirmation from stakeholders that release is approved

### 8.3 Renewal Rollout Plan

Once prerequisites are met:
- Follow same phased percentage approach (1-5% → 20% → 100%)
- Does **not** deploy at same time as refill/list functionality
- Deploys when ready, following its own timeline

---

## 9. Rollout Checklist

### Pre-Rollout
- [ ] Vista medication retrieval validated with toggle on (1-2 patients)
- [ ] Vista refill validated with toggle on (1-2 patients)
- [ ] Monitoring dashboards verified
- [ ] Alert thresholds confirmed
- [ ] On-call team briefed
- [ ] Rollback procedure documented and tested

### Phase 1 (Canary)
- [ ] Toggle enabled at 1-5%
- [ ] Vista medications loading correctly
- [ ] Vista refills processing correctly
- [ ] Oracle medications loading correctly
- [ ] 24-48 hour observation period complete
- [ ] Go/No-Go decision documented

### Phase 2 (Limited)
- [ ] Toggle increased to 20%
- [ ] Error rates within normal range
- [ ] No new error classes observed
- [ ] 48-72 hour observation period complete
- [ ] Go/No-Go decision documented

### Phase 3 (Full)
- [ ] Toggle enabled at 100%
- [ ] Post-rollout monitoring active
- [ ] 1-2 week observation period complete
- [ ] Rollout declared complete

---

## 10. Appendix

### A. Glossary

| Term | Definition |
|------|------------|
| RX | Prescriptions/Medications |
| MHV RX API | MyHealtheVet Prescriptions API |
| SCDF | Spring Cloud Dataflow - middleware that routes medication requests |
| Millennium | Oracle Health's clinical database system |
| Vista | Legacy VA health information system |
| DAS | Data Access Services - EHRM middleware between SCDF and Oracle HL7 services |
| HL7 | Health Level 7 - healthcare data exchange standard |

### B. Architecture Diagram Reference

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         TOGGLE OFF (Current)                            │
├─────────────────────────────────────────────────────────────────────────┤
│  User → Vets API → MHV RX API → MHV Database ← (HL7 sync) ← Vista      │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                         TOGGLE ON (New)                                 │
├─────────────────────────────────────────────────────────────────────────┤
│  User → Vets API → Spring Cloud Dataflow ─┬→ MHV RX API → Vista meds   │
│                                           └→ FHIR APIs → Oracle meds   │
│                                                    ↓                    │
│                              Combined response (Vista + Oracle)         │
└─────────────────────────────────────────────────────────────────────────┘
```

### C. Related Documentation

- Spring Cloud Dataflow configuration
- MHV RX API documentation
- Oracle Health FHIR API specifications
- Secure Messaging rollout plan (parallel effort)

---

**Document Approvals**

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Owner | | | |
| Engineering Lead | | | |
| Operations Lead | | | |
