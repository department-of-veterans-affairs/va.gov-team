# Sample Triage Playbook

## 🎯 Overview

This sample playbook provides a standardized approach for triaging production issues, incidents, and alerts for VA.gov Health Care products. The goal is to quickly assess severity, identify impacted systems, and route issues to the appropriate teams. Use this as a starting point to create your team's customized triage playbook.

## 🚨 Initial Triage Steps

Do these steps first, within the first **5 minutes** of discovering an issue.

### 0. Start a slack thread

**Triager**: Create a dedicated Slack thread in the team channel to document triage progress and communications.

### 1. Assess Impact

**Triager**: Gather critical information to determine severity and report the following to slack

1. **Veteran Impact**: How many Veterans are affected? What functionality is broken? How broken is the experience?
2. **Severity**: Is this preventing critical functionality or causing minor degradation? Justify using the severity guidelines below.
3. **Duration**: When did this start? Is it ongoing or intermittent?

#### Severity Guidelines

Use this classification to determine response urgency, these are guidelines, not hard rules:

##### Severity 1 (Critical) 🔴

- **Definition**: Complete service outage or major functionality broken
- **Examples**:
  - Veterans cannot submit claims
  - Authentication is down
  - Payment processing completely failed
  - Data loss or corruption
- **Escalation**: All hands on deck, a teams meeting should be created immediately to coordinate response
- **Maintenance Window**: Consider initiating a maintenance window within the first few minutes if needed

##### Severity 2 (High) 🟠

- **Definition**: Significant degradation affecting multiple users
- **Examples**:
  - High error rates (>5%)
  - Performance degradation (latency >3x normal)
  - Feature partially broken for subset of users
- **Escalation**: Notify team leads, all relevant team members for active investigation within 15 minutes
- **Maintenance Window**: Consider initiating a maintenance window within the first 10-15 minutes if needed

##### Severity 3 (Medium) 🟡

- **Definition**: Minor issues affecting limited users
- **Examples**:
  - Intermittent errors (<2%)
  - Non-critical feature bugs
  - UI/UX issues that don't prevent task completion
  - Performance slowdowns (<2x normal)
- **Escalation**: High priority ticket is created slotted into the current sprint.

##### Severity 4 (Low) 🟢

- **Definition**: Cosmetic issues or minor bugs
- **Examples**:
  - Typos or formatting issues
  - Non-functional links in non-critical areas
  - Minor visual glitches
  - Documentation issues
- **Escalation**: Ticket is created and added to the backlog for future prioritization.

### 2. Collect and Share Diagnostic Information

Gather this information in the slack thread to help guide investigation.

#### Verify the issue

- [ ] Reproduce the issue if possible
- [ ] Check if issue is user-specific or widespread
- [ ] Verify issue exists in production (not just test environments)
- [ ] Confirm issue is new (not pre-existing)
- [ ] Verify no platform-wide outages

#### System Health

- [ ] Check monitoring dashboards for anomalies
- [ ] Review error logs and error rates
- [ ] Review APM traces
- [ ] Check API response times and status codes
- [ ] Verify dependent services are operational
- [ ] Check recent deployments or changes
- [ ] Verify Infrastructure metrics

#### User Impact

- [ ] Number of users affected (estimate or actual)
- [ ] Percentage of traffic impacted
- [ ] Geographic or demographic patterns
- [ ] User journey affected (authentication, forms, claims, etc.)
- [ ] Specific error messages users are seeing

#### Technical Details

- [ ] Error type (500s, 400s, 403s, timeouts, etc.)
- [ ] Affected endpoints or pages
- [ ] Browser/device patterns (if applicable)
- [ ] Network or infrastructure issues
- [ ] Database or cache issues

#### Check Recent Changes

- [ ] Review recent deployments (last 24 hours)
- [ ] Check merged PRs to production
- [ ] Verify infrastructure changes
- [ ] Check dependent service updates
- [ ] Review feature flag changes

### 3. Determine Resolution Path

Based on the severity and findings, decide on next steps. All next steps should assigned to a person and documented in the slack thread and added to tracking system as needed.

#### Severity 1-2

- Consider rolling back recent deployment if suspected cause
- If possible Create PR for immediate fix if possible and follow Out Of Band process
- Engage relevant engineers and stakeholders

#### Severity 3-4

- Create detailed ticket in tracking system
- Assign to appropriate team member
- Prioritize in current/upcoming sprint or backlog

### 4. After the incident is resolved

#### Immediate Actions

- [ ] Verify issue is fully resolved
- [ ] Confirm with affected users if possible
- [ ] Remove any maintenance windows
- [ ] Update monitoring and alerting if needed

#### Follow-up

- [ ] For Sev 1-2: Follow the post-mortem process
- [ ] For Sev 3-4: Document in issue for future reference
- [ ] Update documentation or runbooks based on learnings
- [ ] Create tickets for any follow-up work needed, such as tech debt or monitoring improvements

## Escalation Procedures and Templates

### Severity 1 (Critical) - Immediate Escalation

1. **Immediately**: Page on-call engineer via PagerDuty
2. **Within 5 min**: Post in team Slack channel using template below
3. **Within 10 min**: Notify OCTO leadership (Product Owner, Tech Lead, UX Lead)
4. **Within 10 min**: Create a Teams meeting for coordination
5. **Within 15 min**: Consider maintenance window if needed
6. **Continuous**: Post updates every 15-30 minutes

**Slack Template for Sev 1:**

```
🚨 SEVERITY 1 INCIDENT 🚨
@on-call @tech-lead @product-owner

ISSUE: [Brief description]
IMPACT: [X%] of Veterans affected - [specific functionality broken]
STARTED: [Timestamp or "approximately X minutes ago"]
SYSTEMS: [List affected systems]

On-call engineer is investigating. Updates will be posted in this thread every 15 minutes.
:thread:
```

### Severity 2 (High) - Notify Leadership

1. **Within 5 min**: Post in team Slack channel
2. **Within 10 min**: Notify team leads and OCTO leadership (Product Owner, Tech Lead, UX Lead)
3. **Within 15 min**: Begin investigation and post initial findings
4. **Within 30 min**: Consider maintenance window if needed
5. **Periodic**: Post updates every 30-60 minutes

**Slack Template for Sev 2:**

```
⚠️ High Priority Issue ⚠️
@team-leads

ISSUE: [Brief description]
IMPACT: [Estimated %] of users experiencing [specific issue]
STARTED: [Timestamp]
SYSTEMS: [List affected systems]

Team is investigating. Will post updates as we learn more.
:thread:
```

### Severity 3 (Medium) - Team Alert

1. **Within 1 hour**: Post in team Slack channel
2. **Within 4 hours**: Begin investigation
3. **Daily**: Post updates if investigation is ongoing

### Severity 4 (Low) - Standard Workflow

1. **Create ticket** in appropriate tracking system
2. **Add to backlog** for prioritization
3. **No immediate action** required

## Key Dashboards and Resources

### Monitoring Dashboards

- Links
- To
- Key
- Dashboards

### Communication Channels

- **Primary Team Channel**: Team-specific Slack channel
- **Platform Support**: [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)
- **Emergency**: PagerDuty alerts

### Documentation

- **Architecture Diagrams**: System integration maps
- **Service Status**: Upstream service health pages
- **Recent Changes**: GitHub PR history, deployment logs
- **Dependent Services**: List of third-party services with status pages and contacts
