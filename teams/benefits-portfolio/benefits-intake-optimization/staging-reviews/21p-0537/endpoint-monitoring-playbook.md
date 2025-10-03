# Endpoint Monitoring Playbook
## VA Form 21P-0537 - Marital Status Questionnaire for DIC Recipients

**Date:** October 3, 2025  
**Team:** Benefits Intake Optimization (BIOHEART)  

[Brief description of form submission endpoint and any associated API calls - to be completed]

**Audience**

Team members responding to VA Form 21P-0537 Datadog monitor alerts.

* [Endpoint name(s) - to be completed]

**Required access**

*Access required to complete the steps in this playbook.* Intended for readers to review in advance.

* OCTO Datadog instance, read-only access
* "#benefits-intake-optimization" Slack channel (or relevant alert channel)
* Monitor
* Logs

**Steps**

**[Form submission/endpoint] alert goes off (Associated Monitor):**

**Diagnose issue**

1. Navigate to logs in Datadog
2. Filter out by time if necessary
3. Click on link to an erroring/suspect log
4. A panel will slide in from the right, at the bottom there is a "Logs" panel. You can view associated logs/traces here
5. If you need more info, click on a log in this panel, a new page will open
6. Now you're looking at a trace. Top right, is the "View in Context" button. This will show the log surrounded by other logs that happened before and after.

**Update [alert channel] Slack channel**

[Instructions for updating team on alert status - to be completed]

---
