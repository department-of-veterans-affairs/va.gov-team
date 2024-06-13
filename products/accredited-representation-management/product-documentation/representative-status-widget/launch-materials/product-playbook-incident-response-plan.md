# Representative Status Widget Playbook/Incident Response Plan

## Product Description

**Product Overview:** [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/product-outline-representative-status-widget.md)

## Contacts

- _All team members can also be reached via the Accredited Representation Management team DSVA Slack channel: [`#benefits-representation-management`](https://dsva.slack.com/archives/C05L6HSJLHM)_

### Team Members

- DSVA Product Lead: Jennifer Bertsch, jennifer.bertsch@va.gov
- Team Product Manager: Lindsay Li-Smith, lindsay.li-smith@oddball.io
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management#team-members)

### Outage Contacts:

- Accredited Representation Management team Lead Engineer: Holden Hinkle, holden.hinkle@oddball.io
- Accredited Representation Management team Backend Engineer : Josh Fike, josh.fike@oddball.io
- Accredited Representation Management team Backend Engineer : Jonathan VanCourt, jonathan.vancourt@adhocteam.us
- Accredited Representation Management team Frontend Engineer: Colin O'Sullivan, colin.osullivan@adhocteam.us

## Troubleshooting

### Errors and Metrics

This section will focus on how to identify and measure errors and performance metrics for the "Representative Status Widget" feature.

#### Error Logging

- **Sentry Integration:** Ensure Sentry is properly integrated into both vets-api and vets-website. Sentry will capture any runtime errors, performance issues, or exceptions in the application.
- **Error Alerts:** Set up Sentry alerts to notify the team via email or Slack when critical errors occur or when error rates exceed a predefined threshold (NOTIFICATIONS HAVE NOT BEEN SETUP YET).
- **Error Types and Frequencies:** Regularly review error logs to identify common or recurring issues. Pay special attention to error types, frequencies, and the severity of impacts on users.

#### Performance Metrics

- **Datadog Monitoring:** Utilize Datadog to monitor the application's performance. Track metrics like response times, server load, and API call frequencies.
- **Thresholds and Anomalies:** Set performance thresholds in Datadog. Receive alerts when metrics fall outside of these thresholds, indicating potential performance issues (NOTIFICATIONS HAVE NO BEEN SETUP YET).
- **User Journey Tracking:** Monitor key user journeys to ensure the feature is performing as expected. This can include tracking clicks to pages linked to within the widget.

#### Feedback Loop

- **User Feedback:** Incorporate user feedback regarding the "Representative Status Widget" feature provided through the 'Feedback' widget on the VA.gov website.
- **Analytics:** Use Google Analytics to track user engagement and behavior "Representative Status Widget" on various pages to monitor user engagement and behavior. This will provide insights into how users interact with the widget and identify potential areas for improvement.

### Issue Investigation Steps

This section outlines the steps to investigate and resolve issues related to the "Representative Status Widget".

#### Initial Assessment

- **Identify the Issue:** Use Sentry and Datadog alerts to identify the issue. Determine whether it's an API failure, a frontend error, or a performance bottleneck.
- **Impact Analysis:** Assess the impact of the issue. Determine how many users are affected and the severity of the impact on the feature's functionality.

#### Detailed Investigation

- **Log Analysis:** Review Sentry logs to pinpoint the error's origin. Look for stack traces, error messages, and the conditions under which the error occurred.
- **Reproduction:** Attempt to reproduce the issue in a test environment based on the information from Sentry and user reports.
- **Cross-Reference Metrics:** Use Datadog to cross-reference performance metrics around the time the issue occurred. This can help identify if the issue is isolated or part of a larger systemic problem.

#### Resolution and Follow-Up

- **Fix Implementation:** Once the issue is identified and understood, develop a fix. This could involve code changes, configuration updates, or infrastructure adjustments.
- **Testing and Deployment:** Test the fix thoroughly in a staging environment before deploying to production.
- **Monitoring Post-Fix:** Closely monitor Sentry and Datadog after deploying the fix to ensure the issue is resolved and no new issues have arisen.
- **Postmortem Analysis:** Conduct a postmortem analysis to understand the root cause and document learnings. Update the playbook accordingly to improve response for future incidents.

### Flipper Features and Rollback
- Enables the Representative Status Widget on the frontend - `representative_status_enabled`

## Security

No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
