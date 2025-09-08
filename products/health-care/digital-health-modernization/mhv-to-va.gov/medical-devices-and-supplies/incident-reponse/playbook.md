# Medical Supplies Reorder Playbook/Incident Response Plan

## Product Description

Medical Supply Reordering allows Veterans to order different medical device supplies on VA.gov. [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/READme.md).

## Contacts

- \_All team members can also be reached via the Accredited Representative Facing team DSVA Slack channel: [Medical Supplies Reorder](https://dsva.slack.com/archives/C05DFSM57FW) monitor alerts.

### Team Members

- DSVA Product Lead: Bryan Ivie, bryan.ivie@va.gov
- Team Product Manager: Michael Brodsky , michael.brodsky@va.gov
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/blob/deaa432a3a236835400a17925b228a1e8f81e1fe/teams/health-portfolio/medications-medical-devices-supplies/README.md#team-members)

### Outage Contacts:

- DSVA Product Lead: Bryan Ivie, bryan.ivie@va.gov
- DSVA Engineering Lead: Daniel Cloud, daniel.cloud@va.gov
- Team Product Manager: Michael Brodsky , michael.brodsky@va.gov
- pagerduty email/activation call (if available)

## Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
- [DSVA Pager Duty](https://dsva.pagerduty.com/)

## PagerDuty

- [Medical Supplies Reorder in Pager Duty (prod)](https://ecc.pagerduty.com/service-directory/PCSLIAU)
- [Medical Supplies Reorder in Pager Duty (staging)](https://ecc.pagerduty.com/service-directory/PTW3SO5)

## Troubleshooting

### Errors and Metrics

This section will focus on how to identify and measure errors and performance metrics for the Medical Supplies Reorder feature.
[DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/dfy-bgk-try/medications-device-ordering-pod)

[Dedicated Slack channel for alerts](https://dsva.slack.com/archives/C07BSFDCK2B)

#### Error Logging

- **Datadog Integration:** Ensure Datadog is properly integrated into both vets-api and vets-website. Datadog will capture any runtime errors, performance issues, or exceptions in the application.
- **Error Alerts:** Set up Datadog alerts to notify the team via email or Slack when critical errors occur or when error rates exceed a predefined threshold.
- **Error Types and Frequencies:** Regularly review error logs to identify common or recurring issues. Pay special attention to error types, frequencies, and the severity of impacts on users.

#### Performance Metrics

- **Datadog Monitoring:** Utilize Datadog to monitor the application's performance. Track metrics like response times, server load, and API call frequencies.
- **Thresholds and Anomalies:** Set performance thresholds in Datadog. Receive alerts when metrics fall outside of these thresholds, indicating potential performance issues.

### Issue Investigation Steps

This section outlines the steps to investigate and resolve issues related to the Medical Supplies Reorder.

#### Initial Assessment

- **Identify the Issue:** Use Datadog alerts to identify the issue. Determine whether it's an API failure, a frontend error, or a performance bottleneck.
- **Impact Analysis:** Assess the impact of the issue. Determine how many users are affected and the severity of the impact on the feature's functionality.

#### Detailed Investigation

- **Log Analysis:** Review Datadog logs to pinpoint the error's origin. Look for stack traces, error messages, and the conditions under which the error occurred.
- **Reproduction:** Attempt to reproduce the issue in a test environment based on the information from Datadog and user reports.
- **Cross-Reference Metrics:** Use Datadog to cross-reference performance metrics around the time the issue occurred. This can help identify if the issue is isolated or part of a larger systemic problem.

#### Resolution and Follow-Up

- **Fix Implementation:** Once the issue is identified and understood, develop a fix. This could involve code changes, configuration updates, or infrastructure adjustments.
- **Testing and Deployment:** Test the fix thoroughly in a staging environment before deploying to production.
- **Monitoring Post-Fix:** Closely monitor Datadog after deploying the fix to ensure the issue is resolved and no new issues have arisen.
- **Postmortem Analysis:** Conduct a postmortem analysis to understand the root cause and document learnings. Update the playbook accordingly to improve response for future incidents.

### Flipper Features and Rollback

- Flipper for the API endpoint
- Note: We will be in direct contact with all 13 pilot participants during the pilot phase. Any issues that arise, we will be able assist.

## Security

<!--  descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log sensitive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc. -->

No PII/PHI captured in this feature.

## Incident Response Steps

- React/comment on the monitor alert in Slack to let the team know you are aware and investigating the issue
- Review a list of recent monitor alerts, including other related platforms such as downstream services, va.gov platform issues, login.gov, etc.
- Check out the [Dashboard](https://vagov.ddog-gov.com/dashboard/dfy-bgk-try/medications-device-ordering-pod)
- Reach out to OCTO stakeholders in the [#vagov-supply-reordering](https://dsva.slack.com/archives/C05DFSM57FW) slack channel
- Begin to troubleshoot the error and root cause
  - If needed, begin coordination with the downstream API team in [#va-cto-supply-reordering-alerts](https://dsva.slack.com/archives/C07BSFDCK2B)
