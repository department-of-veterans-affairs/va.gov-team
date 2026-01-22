# Secure Messaging Oracle Health Integration - Dark Deploy Rollout Plan

**Last Updated:** January 22, 2026  
**Status:** Draft  
**Product:** Secure Messaging (SM)  
**Integration:** Oracle Health (Millennium)

---

## Executive Summary

This document outlines the phased rollout plan for enabling Oracle Health data integration for Secure Messaging. This is a "dark deploy" - users will not be notified that their data source may change. The integration is designed to be transparent to end users.

---

## 1. Current Architecture

### 1.1 Data Sources

Messages are stored in **two canonical sources**:

| Source | Database | Users |
|--------|----------|-------|
| MHV (Legacy) | MyHealtheVet `messages` table | Vista patients |
| Oracle Health | Millennium tables | Oracle patients |

Adjacent data (message pools, triage groups, etc.) is stored in corresponding tables in both systems.

### 1.2 Data Flow by Patient Type

#### Vista Patients (Current/Unchanged)
```
Website/Mobile App → Vets API → MHV SM Patient API → MHV Database
```

#### Oracle Patients (New Integration)
```
Website/Mobile App → Vets API → SM Patient API → SM Exchange → Millennium (via Oracle Messaging APIs)
```

**Key Point:** The SM Exchange keeps the MHV message table synchronized with Oracle messages. For Oracle patients, messages still flow through MHV tables, but the **canonical source** is Millennium.

---

## 2. How Dark Deploy Works

### 2.1 Feature Flag Mechanism

When the feature flag is enabled on the front end:

1. A parameter is sent with session creation to SM Patient API
2. Parameter indicates: "This is an Oracle patient - use Oracle data"
3. SM Patient API routes requests appropriately based on this parameter

### 2.2 User Experience

- **Transparent to users** - they do not know if the flag is on or off
- **Dual users** (patients with both Vista and Oracle records): No impact to Vista messages
- Same data flow, same user interface, same experience

### 2.3 Who Is Affected

| Patient Type | Impact |
|--------------|--------|
| Vista-only patients | No change |
| Oracle-only patients | Messages route through Oracle integration |
| Dual patients (Vista + Oracle) | Oracle messages route through Oracle integration; Vista messages unchanged |

---

## 3. Pre-Rollout Validation Completed

| Validation | Status | Notes |
|------------|--------|-------|
| Lower environment testing | ✅ Complete | All environments tested |
| Moderated testing | ✅ Complete | Completed with observed users |
| Trusted user testing | ✅ Complete | Extended testing with trusted users |
| Message preload (all users) | ✅ Complete | High success rate; some failures for non-Oracle patients (expected) |
| Admin names hidden | ✅ Complete | Coded out per current list; awaiting coordinator review (low risk) |

---

## 4. Phased Rollout Schedule

### Phase 1: Canary (1-5% of users)
**Purpose:** Validate traffic flow and confirm all systems work as expected with live anonymous traffic

| Item | Detail |
|------|--------|
| Duration | TBD (minimum 24-48 hours recommended) |
| Population | Random 1-5% of eligible users |
| Success Criteria | No new error classes; existing monitoring shows normal patterns |
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
| Population | All eligible Oracle/dual patients |
| Monitoring | Continued observation for 1-2 weeks post-rollout |

---

## 5. Monitoring & Observability

### 5.1 Key Metrics to Monitor

| Metric | Source | Alert Threshold |
|--------|--------|-----------------|
| SM Patient API error rate (send messages) | Existing alerts | Any increase from baseline |
| SM Patient API error rate (fetch inbox/threads) | Existing alerts | Any increase from baseline |
| Oracle Messaging API response times | SM Exchange logs | TBD |
| Message sync failures | SM Exchange logs | Any failures |
| Oracle notification event service status | Oracle Health monitoring | Any outages |

### 5.2 Monitoring Tools

- **Same alerts apply** - Oracle users trigger the same alerts as Vista users
- SM Patient API monitoring (existing infrastructure)
- SM Exchange logs and metrics

### 5.3 Known Risk: Oracle Notification Event Service

The Oracle new message notification event service has experienced outages (e.g., weekend outage several weeks prior). Mitigation measures are in place, but this remains a monitored risk.

---

## 6. Rollback Plan

### 6.1 Rollback Trigger Criteria

Rollback is **NOT percentage-based**. Rollback is triggered by:

| Trigger | Action |
|---------|--------|
| **New class of errors** not seen in testing | Immediate rollback |
| SM Patient API errors when sending Oracle messages | Evaluate severity; rollback if persistent |
| SM Patient API errors when fetching inbox/threads for Oracle patients | Evaluate severity; rollback if persistent |
| Oracle notification event service outage | Monitor; use existing fallback mechanisms |
| Any unknown/unfamiliar error patterns | Immediate rollback for investigation |

### 6.2 Rollback Procedure

1. **Disable feature flag** on front end
2. Users automatically revert to non-Oracle flow
3. **User impact:** None visible - rollback is transparent
4. Investigate root cause before re-enabling

### 6.3 Rollback Decision Authority

| Role | Authority |
|------|-----------|
| On-call engineer | Can initiate immediate rollback |
| Product Owner | Must approve re-enablement after rollback |
| Engineering Lead | Final decision on rollback threshold interpretation |

---

## 7. Communication Plan

### 7.1 Internal Communication

| Audience | Timing | Method |
|----------|--------|--------|
| Engineering team | Before each phase | Slack/Teams notification |
| Product stakeholders | Before each phase | Email/meeting |
| On-call rotation | Before Phase 1 | Runbook update |

### 7.2 External Communication

**None** - This is a dark deploy. Users are not notified of the change.

---

## 8. Open Items & Dependencies

| Item | Status | Owner | Notes |
|------|--------|-------|-------|
| Coordinator review of hidden admin names list | Pending | Courtney | Low risk if not completed before rollout |
| Final pool name mapping confirmation | In Progress | Becky | Current list implemented; updates can be made post-deploy |
| Oracle patient definition alignment | Resolved | Engineering | Clarified: 200 DoD, 200 CRNR criteria |

---

## 9. Rollout Checklist

### Pre-Rollout
- [ ] All pre-validation testing complete
- [ ] Monitoring dashboards verified
- [ ] Alert thresholds confirmed
- [ ] On-call team briefed
- [ ] Rollback procedure documented and tested

### Phase 1 (Canary)
- [ ] Feature flag enabled at 1-5%
- [ ] Initial traffic validated (no errors)
- [ ] 24-48 hour observation period complete
- [ ] Go/No-Go decision documented

### Phase 2 (Limited)
- [ ] Feature flag increased to 20%
- [ ] Error rates within normal range
- [ ] 48-72 hour observation period complete
- [ ] Go/No-Go decision documented

### Phase 3 (Full)
- [ ] Feature flag enabled at 100%
- [ ] Post-rollout monitoring active
- [ ] 1-2 week observation period complete
- [ ] Rollout declared complete

---

## 10. Appendix

### A. Glossary

| Term | Definition |
|------|------------|
| SM | Secure Messaging |
| MHV | MyHealtheVet |
| SM Patient API | Secure Messaging Patient API - handles message operations |
| SM Exchange | Application that syncs Oracle messages to MHV tables |
| Millennium | Oracle Health's clinical database system |
| Vista | Legacy VA health information system |
| Dual Patient | Veteran with records in both Vista and Oracle Health systems |

### B. Related Documentation

- SM Patient API documentation
- SM Exchange technical specification
- Oracle Health Messaging API documentation
- Feature flag configuration guide

---

**Document Approvals**

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Owner | | | |
| Engineering Lead | | | |
| Operations Lead | | | |
