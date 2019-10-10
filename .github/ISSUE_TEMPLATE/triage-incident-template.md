---
name: Triage Incident Template
about: For incident triage on VSP
title: ''
labels: triage, triage-incident
assignees: ''

---

### Please read the [Reporting an incident to the Platform](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/reporting-an-incident-to-the-platform.md) for instructions on what types of issue should be submitted using this template.

### Status

[UNRESOLVED, RESOLVED]

### Severity Analysis

*Estimate of how critical this bug is*

- `sev 1` 
    - Immediate resolution needed
    - Critical incident
- `sev 2` 
    - Needs a special deploy
    - Needs SME
    - Regression that went uncaught in dev/staging
- `sev 3` 
    - Can go out in a regular deploy but still needs fixed ASAP
    - Can be put into the owning team's backlog and scheduled by PM

### User Impact 

- *Who is the user impacted by this problem?*
- *How does this problem affect the user?*

### Description

- *In one or two sentences, what is happening?*

### Steps to Reproduce

- *List steps required to reproduce the issue in question*

#### Expected Results

- *example:* 

  > The user is redirected to `profile`


#### Actual Results

- *example:* 

  > The user is redirected to `/` (the home page)


### Further Details
*Add any of the following as available:*

- Sentry Issue Link
- ServiceNow (or other source) link
- Components, Transaction, URL
- Platform, User Agent, Browser, Version
- Screen size, viewport, zoom level
- Screenshots

### Proposed Solution

- *Summary of solution*
- *Link to related tickets*
