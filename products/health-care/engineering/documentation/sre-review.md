# [WIP] SRE Review Standards and Checklist

## Overview

This document outlines best practices and standards for Site Reliability Engineering (SRE) check-ins between product teams and lead engineers. Regular SRE reviews help ensure system reliability, performance, and operational excellence.

## Upfront disclaimer

This process is not intended to create extra work or bureaucracy for teams. The goal is to foster collaboration, identify risks early, and continuously improve system reliability. Teams should adapt the checklist and standards to fit their specific context and needs.

More importantly, this is also not a pass/fail exercise. The intention is to create a safe space for teams to discuss reliability openly and honestly, without fear of blame or punishment. We are all working towards the same goal of delivering reliable, high-quality products to our users and aware that the current state of systems is not perfect.

## Meeting Cadence

- **Frequency:** Bi-weekly or monthly, depending on system complexity and change frequency
- **Duration:** 45-60 minutes, depending on agenda
- **Attendees:** Team engineers, lead contractor engineers, Federal Engineers

## Key Metrics We Care About

For each API endpoint in vets-api(for web and mobile APIs), track:

- Uptime/Availability
- Latency (P50, P95, P99)
- Error Rates (4xx, 5xx)
  - expected vs unexpected errors
- Throughput (requests per second)
- Alert Volume and Response Times
- SLO/SLI Compliance
- Database growth and performance

For each web application:

- Page Load Times
  - First Contentful Paint (FCP)
    - With and without platform load times
- User Journey Success Rates
  - Time to complete key actions (e.g., form submissions)
  - Drop-off rates at critical steps
- Resource Utilization (CPU, Memory)

Monitoring and alerting effectiveness:

- Alert accuracy (signal vs noise)
- Incident response times
  - time to first acknowledgment
  - time to resolution
- Postmortem completion rates

## Pre-Meeting Preparation

### Team Responsibilities

For each meeting,, the team should prepare the following:

- [ ] Bring recent incident reports and postmortems
- [ ] Any new endpoints are added to the monitoring dashboard
- [ ] Identify areas where support is needed

## Rough Review Agenda

<!-- ### 1. Incidents and Postmortems (15 min)

**Discussion Points:**

- Review incidents since last check-in
- Postmortem completion status
- Action items from postmortems and their progress

**Best Practices:**

- Use blameless postmortem approach
- Focus on systemic improvements, not individual actions
- Track action items with clear owners and deadlines
- Celebrate incident prevention and quick resolution -->

### 1. Performance (10 min)

**Discussion Points:**

- Review the dashboard for changes in key metrics
  - System performance trends (latency, throughput)
  - Resource utilization (CPU, memory, disk, network)
- Capacity planning needs
- Database performance and growth
- API response times and error rates

**Best Practices:**

- Look at trends over time, not just current state
- Identify capacity constraints before they become issues
- Review peak usage patterns
- Plan for 2-3x current load

**Metrics to Review:**

- P50, P95, P99 latency
- Request rates and error rates
- Database query performance
- Resource utilization trends

### 1. Operational Excellence (10 min)

**Discussion Points:**

- On-call rotation health and burden
- Runbook quality and coverage
- Feature rollout and success rate
  - Rollback procedures and usage
- Technical debt impacting reliability
- Alert volume and quality (signal vs. noise)
- Response times to alerts
- Gaps in monitoring coverage
- Dashboard effectiveness
- SLO/SLI compliance

**Best Practices:**

- Keep runbooks up to date and tested
- Automate common operational tasks
- Prioritize technical debt that impacts reliability

**Checklist:**

- [ ] Are runbooks tested and up to date?
- [ ] Is there a plan to address reliability-impacting tech debt?

### 2. Monitoring and Alerting (10 min)

**Discussion Points:**

- Alert volume and quality (signal vs. noise)
- Response times to alerts
- Gaps in monitoring coverage
- Dashboard effectiveness
- SLO/SLI compliance

**Best Practices:**

- Review alert fatigue indicators (ack'd without action, false positives)
- Ensure alerts are actionable and have clear runbooks
- Monitor key user journeys, not just infrastructure
- Balance coverage with alert noise

**Checklist:**

- [ ] Are all critical user paths monitored?
- [ ] Do we have appropriate thresholds set?
- [ ] Are alerts documented with runbooks?
- [ ] Are we tracking error budgets?
- [ ] Are dashboards up to date and accessible?

## Documentation Standards

All SRE reviews should maintain:

1. **Postmortems:** Completed within 1 week of major incidents
2. **Action Item Tracker:** Shared document with status updates
3. **Runbook Repository:** Up-to-date operational procedures
4. **Dashboard Catalog:** Links to all key monitoring dashboards
5. **Architecture Diagrams:** Current system architecture and data flows

## Best Practices for SRE meetings

### Creating Psychological Safety

- Focus on systems and processes, not individuals
- Encourage sharing of mistakes and near-misses
- Celebrate good catches and prevention
- Ask "how can we make this easier?" rather than "why didn't you...?"

### Coming Prepared

- Have data and examples ready
- Be honest about challenges
- Don't hide problems or downplay issues
- Bring questions and requests for help

### Engaging Actively

- Participate in discussions, don't just report
- Share learnings and insights
- Ask for clarification when needed
- Provide context for decisions made

### Following Through

- Complete action items on time
- Communicate if deadlines need adjustment
- Update documentation and runbooks
- Share progress between meetings

## Related Resources

- [VA API Standards](https://code.va.gov/docs/default/component/va-api-standards/)
