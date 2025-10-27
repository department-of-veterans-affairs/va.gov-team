## Purpose
This document defines the on-call process for the **Accredited Representative Crew (ARC)** — the team responsible for maintaining and improving tools that help accredited representatives assist veterans with benefits paperwork.

The on-call rotation ensures continuous coverage for alert triage, issue escalation, and overall system reliability following the MVP launch.

---

## 1. Rotation Length
- Each on-call rotation lasts **one sprint (two weeks)**.
- The rotation is announced during sprint planning.

---

## 2. Eligibility
- On-call rotations are **limited to full-stack developers** capable of triaging both frontend and backend issues.
- **Production access is not required**; only tech leads have production credentials.
- Non-full-stack contributors are excluded from the rotation.

---

## 3. Responsibilities During Rotation
The on-call developer acts as **first responder** for alerts, user reports, and system anomalies.

### Primary Duties
- Provide support to Candi if she gets notifications of issues from users.
- Monitor Slack alerts from Datadog in `#benefits-representative-facing-alerts, #benefits-representation-management-notifications`.
- Acknowledge alerts by reacting or commenting in Slack 🔗 [Guide for slack emojis](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md#define-an-on-call-rotation--monitor-errors-in-slack)
- Check the Datadog Dashboard for live status and service metrics:  
  🔗 [ARC Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/q3q-ft2-bdx/accredited-representative-portal-arp?fromUser=false&refresh_mode=sliding&from_ts=1757355186714&to_ts=1757959986714&live=true)
- Use the Datadog **Error Search** to review recent errors, stack traces, and request context.
- Attempt to **reproduce the issue in staging or local environments** before escalating.
- Document findings in the `#benefits-representative-facing-alerts` or `#benefits-representation-management-notifications` thread.
- Open a **GitHub Issue** for any confirmed, reproducible, or recurring issue.
- Escalate to the **tech lead** if:
  - The issue requires production access  
  - It affects multiple users or core workflows  
  - It cannot be reproduced in staging/local  

---

## 4. Escalation Process

| Trigger | First Step | Escalate To | Communication |
|----------|-------------|--------------|----------------|
| Datadog alert | Acknowledge in Slack → Review dashboard + error search → Try to reproduce in staging/local | Tech lead (if prod access needed) | `#benefits-representative-facing-alerts` |
| Email from ARC inbox | Validate, attempt reproduction in staging/local | Tech lead or Product | `#benefits-accredited-rep-crew` |
| Major outage or persistent error | Summarize findings in `#benefits-representative-facing-alerts` or `#benefits-representation-management-notifications` | Tech + Product leads | `#benefits-accredited-rep-crew` |
| Unknown alert or missing logs | Create GitHub Issue, note reproduction attempt | Tech lead | `#benefits-accredited-rep-crew` |

---

## 5. Tools & Access
Before your rotation, ensure you have:
- Slack: `#benefits-accredited-rep-crew`, `#benefits-representative-facing-alerts`, `#benefits-representation-management-notifications`
- [Datadog ARC Dashboard](https://vagov.ddog-gov.com/dashboard/q3q-ft2-bdx/accredited-representative-portal-arp?fromUser=false&refresh_mode=sliding&from_ts=1757355186714&to_ts=1757959986714&live=true)
- Datadog **Error Search** (for triage)
- GitHub permissions to create and label issues
- Access to staging/local environments for reproduction testing

---

## 6. On-Call Schedule
- Follows the sprint calendar (two-week cadence).
- The on-call calendar repeats and is updated each sprint in planning notes.

| Sprint | Dates | On-Call Developer (Full Stack) | Tech Lead (Escalation) |
|---------|--------|--------------------------------|-------------------------|
| Sprint 2 | Oct 21 – Nov 3 | Kevin | Holden |
| Sprint 3 | Nov 4 – Nov 17 | Greg | Kevin, Holden |
| Sprint 4 | Nov 18 – Dec 1 | Patrick | Kevin, Holden |
| Sprint 5 | Dec 2 – Dec 15 | Josh | Kevin, Holden |
| Sprint 6 | Dec 16 – Dec 29 | Holden | Kevin |
| Sprint 7 | Dec 30 – Jan 12 | Alex | Kevin, Holden |

---

## 7. Review & Improvement
During each sprint retrospective, the on-call developer provides a short report on alerts handled, investigations, and improvement opportunities.

This guide should evolve as tooling, team composition, or operational needs change.
