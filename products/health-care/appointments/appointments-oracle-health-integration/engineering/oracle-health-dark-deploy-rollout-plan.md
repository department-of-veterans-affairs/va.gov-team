# Appointments (UAE) Oracle Health Integration - Dark Deploy Rollout Plan

**Last Updated:** January 22, 2026  
**Status:** Draft  
**Product:** Appointments / Unified Appointments Experience (UAE)  
**Integration:** Oracle Health (Millennium)

---

## Executive Summary

This document outlines the phased rollout plan for enabling Oracle Health data integration for Appointments. This is a **"dark deploy"** - we are not telling Veterans that their data may be coming from different sources. Users will not be notified that their data source may change. The integration is designed to be completely transparent to end users.

**Key Principle:** Veterans' appointments may look different, but we are not asking them to report if something looks weird. We are relying on our own monitoring and validation to catch issues.

---

## 1. Who Are We Turning This On For?

### 1.1 Target Population

| Patient Type        | Flag Status                 | Data Source                | Impact                           |
| ------------------- | --------------------------- | -------------------------- | -------------------------------- |
| **Vista patients**  | Flag has no effect          | Vista scheduling (?)       | No change whatsoever             |
| **Oracle patients** | Flag enables Oracle routing | Oracle Health (Millennium) | Appointments fetched from Oracle |

### 1.2 What Veterans Will Experience

- **Same UI** - No visual changes to the appointments interface
- **Same workflow** - Booking, viewing, canceling appointments works identically
- **Data source is invisible** - Veterans don't know if they're hitting Vista or Oracle
- **No notification** - We are NOT telling Veterans "your data may come from different places"

---

## 2. Where Is Data Coming From?

- TODO: Build accurate diagrams showing data flow for Vista vs Oracle patients

---

## 3. What Are We Turning On? (Step-by-Step)

### The feature toggles

- TBD: Coming from team

### Step 1: Canary Release (1-5% of eligible users)

- [ ] Enable feature flag at 1-5%
- [ ] Random selection of all patients patients
- [ ] Monitor for any new error classes
- [ ] Go/No-Go decision before proceeding

### Step 3: Limited Rollout (20% of eligible users)

- [ ] Increase feature flag to 20%
- [ ] Monitor error rates against baseline
- [ ] Go/No-Go decision before proceeding

### Step 4: Full Rollout (100% of eligible users)

- [ ] Enable feature flag at 100%
- [ ] All Oracle/dual patients now using Oracle integration
- [ ] **Duration:** 1-2 weeks observation period
- [ ] Declare rollout complete if stable

### Step 5: Nudging Phase (Post-100%)

- [ ] Begin active user migration/notification efforts
- [ ] Only after team is comfortable with stability
- [ ] Timeline TBD based on Wave 2 completion

---

## 4. How Are We Monitoring?

### 4.1 Key Metrics We're Watching

| What We're Watching                   | Where We See It         | What's Normal | What's Concerning    |
| ------------------------------------- | ----------------------- | ------------- | -------------------- |
| API error rate                        | Existing Datadog alerts | Baseline ~X%  | Any increase         |
| Appointment fetch failures            | API logs                | Rare          | Any increase         |
| Appointment booking success rate      | Existing metrics        | Baseline ~X%  | Any decrease         |
| Appointment cancellation success rate | Existing metrics        | Baseline ~X%  | Any decrease         |
| Oracle API response times             | VAOS logs               | TBD ms        | Significant increase |
| Oracle API timeout rate               | VAOS logs               | Near zero     | Any timeouts         |

### 4.2 Alert Configuration

**Existing alerts continue to fire for Oracle patients** - no new alert configuration needed. Oracle patients trigger the same alerts as Vista patients because they go through the same VAOS layer.

### 4.3 Monitoring Dashboards

- TBD: Create or update dashboards to highlight Oracle-specific metrics

---

## 5. What Would Make Us Roll Back?

### 5.1 Immediate Rollback Triggers

| Trigger                                                    | Why It's Serious                   | Action             |
| ---------------------------------------------------------- | ---------------------------------- | ------------------ |
| **New class of errors** we didn't see in testing           | Unknown failure mode               | Immediate rollback |
| Errors when **fetching appointments** for Oracle patients  | Core functionality broken          | Immediate rollback |
| Errors when **booking appointments** for Oracle patients   | Veterans can't schedule care       | Immediate rollback |
| Errors when **canceling appointments** for Oracle patients | Veterans stuck with unwanted appts | Immediate rollback |
| **Unknown/unfamiliar error patterns**                      | Can't diagnose in real-time        | Immediate rollback |

---

## 6. Rollback Plan

### 6.1 How Rollback Works

```
┌─────────────────────────────────────────────────────────────┐
│  ROLLBACK = Disable Feature Flag                            │
│                                                             │
│  1. Turn off feature flag in front-end config               │
│  2. All users automatically revert to Vista-only flow       │
│  3. No data loss - Oracle data still in Oracle              │
│  4. Veterans notice nothing - rollback is invisible         │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Rollback Procedure

1. **Identify the issue** - What error/behavior triggered this?
2. **Disable feature flag** - Immediate action, no approval needed for on-call
3. **Verify rollback successful** - Confirm traffic routing back to Vista
4. **Document what happened** - Error logs, timestamps, affected users
5. **Investigate root cause** - Before any re-enablement
6. **Get PO approval** - Required before turning flag back on

### 6.4 Rollback Impact on Veterans

**None.** This is the beauty of a dark deploy:

- Veterans don't know the flag is on
- Veterans don't know when we roll back
- Their appointments still work either way
- No communication needed

---

### 7 Known Risks

- AVS is showing considerable latency for Oracle patients, we need to validate in the canary pahse and be ready to pivot if needed.
- Is the Travel Pay back office ready for OH claims?

## 10. Appendix

### A. Glossary

| Term             | Definition                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------------- |
| **Dark Deploy**  | Releasing to production without user notification; users don't know their data source changed |
| **UAE**          | Unified Appointments Experience                                                               |
| **VAOS**         | VA Online Scheduling                                                                          |
| **Nudging**      | Active user migration/notification efforts post-dark deploy                                   |
| **Dual Patient** | Veteran with records in both Vista and Oracle Health systems                                  |
| **Canary**       | Small percentage of traffic used to validate before wider rollout                             |
