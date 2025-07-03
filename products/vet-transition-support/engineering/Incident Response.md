# Incident Response Guidelines

## Overview

Appropriately managing incidents is an important part of maintaining the application and ensuring things run smoothly. An incident is any event that compromises the security, uptime, or performance of the app. This guide outlines the procedures for identifying, responding to, resolving, and learning from incidents impacting the `Discover your benefits` app on VA.gov.

## Identifying an Incident

Indicators of an Incident May Include:

- Monitoring alerts (e.g., Datadog, Sentry, Google Analytics anomalies)
- CI/CD pipeline failures relating to production builds/deployments
- Unexpected or broken functionality detected in automated tests or deployment checks
- Reports from VA.gov users (via feedback tools or tickets)
- Security vulnerabilities discovered in dependencies

If you're unsure whether something qualifies as an incident, err on the side of treating it as one.

## Immediate Actions

### Acknowledge and Communicate

Notify the team via the ([#ves-transition](https://dsva.slack.com/archives/C06C7RS27GD)) Slack channel. Start a Slack thread and/or a dedicated huddle if the issue is critical. From there, assign an Incident Commander (IC). This can be the person who identified the issue, or someone else better suited to lead.

The Incident Commander is responsible for coordinating the resolution effort and serving as the primary point of contact for anything related to the incident.

### Contain the Impact

Once the team has been notified, and an Incident Commander has been assigned, take the necessary steps to mitigate the impact. These may include:

- Reverting breaking changes (via GitHub revert or hotfix PR)
- Temporarily disabling features behind feature flags, if applicable
- Notifying stakeholders if the incident significantly impacts users

## Triaging and Troubleshooting

- Gather Logs and Metrics:

  - Use Sentry for tracking errors and client-side failures
  - Review logs and alerts in Datadog

- Determine Scope and Impact:

  - Which user groups are affected?
  - Is the issue localized to a feature, a release, or a particular environment?

- Validate Fixes:

  - Use local builds to confirm resolutions, and then validate in the `staging` environment before re-deploying to production

## Communication During an Incident

- Keep relevant Slack channels (most likely `#ves-transition`) updated throughout the incident
- If there’s user impact, prepare a short internal status update (who’s affected, what’s broken, estimated resolution)
- Continue to notify relevant stakeholders of progress and updates

## Post-Incident Actions

### Document the Incident

- File a postmortem in the team postmortem directory under `products/vet-transition-support/postmortems/YYYY-MM-DD-[brief-title].md`
- Include:
  - Summary
  - Timeline of events
  - Root cause
  - Resolution steps
  - Lessons learned
  - Preventative actions

### Create Follow-Up Tasks

- Add tickets to address root causes (e.g., add monitoring, fix tests, etc.)
- Assign owners and prioritize based on severity

## Resources

- [Platform guidance on writing postmortems](https://depo-platform-documentation.scrollhelp.site/developer-docs/sensitive-documentation-guidance#Sensitivedocumentationguidance-Postmortems)
- [Slack channel for `vets-website` deployment notifications](https://dsva.slack.com/archives/C02V265VCGH)(`#status-vets-website`)
- [Sentry error tracking](https://depo-platform-documentation.scrollhelp.site/developer-docs/tracking-application-errors-with-sentry)
- [VA Datadog dashboards](https://vagov.ddog-gov.com/)
