# Search Monitoring Support Rotation

## Purpose
This document outlines the **Search Monitoring Support Rotation** process to ensure consistent oversight, timely detection of issues, and proactive communication with stakeholders regarding search performance and reliability.

By establishing this rotation, we aim to:

- Maintain visibility into search operations and performance.  
- Quickly identify and escalate issues.  
- Distribute monitoring responsibilities evenly across the team.  
- Reduce dependency on any single team member for search-related support.  

---

## Scope of Monitoring
The rotation covers the following areas of search system monitoring:

- Review of **logs, alerts, and metrics** related to search operations.  
- Verification of **index health and synchronization status**.  
- Review of **error rates**, **latency**, and **service availability**.  
- Investigation and documentation of any **anomalies or degradation**.  
- Communication of **incidents or noteworthy trends** to the broader team.  

---

## Responsibilities
During the assigned rotation period, the on-duty engineer is responsible for:

1. **Daily checks** of search-related dashboards and alerts.  
2. **Triaging any issues** detected during monitoring or reported by other teams.  
3. **Escalating significant problems** (e.g., service outages, data inconsistencies) to the engineering lead or incident channel.  
4. **Documenting findings** in the shared Search Monitoring Log (e.g., Confluence, Slack thread, or GitHub discussion).  
5. Providing a **brief summary at the end of the sprint**, including any issues encountered and follow-up actions needed.  

---

## Rotation Schedule
Rotation runs on a **per-sprint basis**. Each rotation starts on the first day of a sprint and ends on the last day of that sprint.  

| Sprint Period | Dates | Assigned Support Engineer |
|----------------|--------|-----------------------------|
| Sprint 1 | **Oct 24 – Nov 5, 2025** | **Ian Donovan** |
| Sprint 2 | **Nov 6 – Nov 19, 2025** | **Colin O’Sullivan** |
| Sprint 3 | **Nov 20 – Dec 3, 2025** | **Dwight Doran** |
| Sprint 4 | **Dec 4 – Dec 17, 2025** | **Ian Donovan** |
| Sprint 5 | **Dec 18, 2025 – Jan 7, 2026** *(includes holidays)* | **Colin O’Sullivan** |
| Sprint 6 | **Jan 8 - Jan 21, 2026** | **Ian Donovan** |
| Sprint 7 | **Jan 22 – Feb 4, 2026** | **Colin O’Sullivan** |
| Sprint 8 | **Feb 5 – Feb 18, 2026** | **Dwight Doran** |
| Sprint 9 | **Feb 19 – March 4, 2026** | **Ian Donovan** |
| Sprint 10 | **March 5 – March 18, 2026** | **Colin O’Sullivan** |

> Rotation order repeats after Sprint 5. Adjust as needed for holidays, vacations, or team capacity.

---

## Escalation Process
1. **Immediate Issues:** Notify the Search Team Slack channel (`#search-support`) and tag the engineering lead.  
2. **Critical Issues:** Follow the incident response process and open a ticket in GitHub tagged as `incident` and `search`.  
3. **Non-Urgent Findings:** Document in the monitoring log and flag for review during sprint planning.  

---

## Documentation & Tools
- **Dashboards:** [Link to Search Metrics Dashboard]()  
- **Logs:** [Link to AWS CloudWatch / Datadog / ELK dashboards]()  
- **Issue Tracking:** GitHub → [`search-monitoring`](#) label  
- **Rotation Reference:** This document stored in the `Search Team` documentation repo or Confluence page  

---

## Review & Continuous Improvement
After the first three rotation cycles, the team will:

- Gather feedback from participants.  
- Adjust scope, frequency, or responsibilities as needed.  
- Update this document to reflect any improvements.
