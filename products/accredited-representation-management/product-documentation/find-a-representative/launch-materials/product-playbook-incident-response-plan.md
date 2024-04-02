# Find a Representative Playbook/Incident Response Plan

## Product Description

**Product Overview:** [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/product-outline-find-a-representative.md)

## Contacts

- _All team members can also be reached via the Accredited Representation Management team DSVA Slack channel: [`#benefits-representation-management`](https://dsva.slack.com/archives/C05L6HSJLHM)_

### Team Members

- DSVA Product Lead: Jennifer Bertsch, jennifer.bertsch@va.gov
- Team Product Manager: Lindsay Li-Smith, lindsay.li-smith@oddball.io
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management#team-members)

### Outage Contacts:

- Accredited Representation Management team Lead Engineer: Holden Hinkle, holden.hinkle@oddball.io
- Accredited Representation Management team Frontend Engineer: Colin O'Sullivan, colin.osullivan@adhocteam.us
- Accredited Representation Management team Backend Engineer : Jonathan VanCourt, jonathan.vancourt@adhocteam.us

## Troubleshooting

### Errors and Metrics

This section will focus on how to identify and measure errors and performance metrics for the "Find a Representative" feature.

#### Error Logging

- **Sentry Integration:** Ensure Sentry is properly integrated into both vets-api and vets-website. Sentry will capture any runtime errors, performance issues, or exceptions in the application.
- **Error Alerts:** Set up Sentry alerts to notify the team via email or Slack when critical errors occur or when error rates exceed a predefined threshold (NOTIFICATIONS HAVE NOT BEEN SETUP YET).
- **Error Types and Frequencies:** Regularly review error logs to identify common or recurring issues. Pay special attention to error types, frequencies, and the severity of impacts on users.

#### Performance Metrics

- **Datadog Monitoring:** Utilize Datadog to monitor the application's performance. Track metrics like response times, server load, and API call frequencies.
- **Thresholds and Anomalies:** Set performance thresholds in Datadog. Receive alerts when metrics fall outside of these thresholds, indicating potential performance issues (NOTIFICATIONS HAVE NO BEEN SETUP YET).
- **User Journey Tracking:** Monitor key user journeys to ensure the feature is performing as expected. This can include tracking the success rate of searches for accredited representatives.

#### Feedback Loop

- **User Feedback:** Incorporate user feedback regarding the "Find a Representative" feature provided through the 'Feedback' widget on the VA.gov website.
- **Analytics:** Use Google Analytics to track user engagement and behavior on the "Find a Representative" feature pages. This will help in understanding how users interact with the feature and where they might encounter issues.

### Issue Investigation Steps

This section outlines the steps to investigate and resolve issues related to the "Find a Representative" feature.

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
- Enables Find a Representative tool - `find_a_representative_enabled`
- Enables Find a Representative frontend - `find_a_representative_enable_frontend`
- Enables Flag a Representative feature for Find a Representative tool - `find_a_representative_flag_results_enabled`

### Useful Queries for Flagged Rep Data
Here's a list of useful queries against the `flagged_veteran_representative_contact_data` vets-api table. If you have access to vets-api production, connect to a pod terminal, run `bundle exec rails console`, then one of the following queries. If you don't have access to vets-api production, contact Platform Support via the 'Office of CTO @ VA #vfs-platform-support' Slack channel and ask them to run the queries for you.

#### Queries

#### List All Records
Use the following ActiveRecord query to get a list of all records.

```
RepresentationManagement::FlaggedVeteranRepresentativeContactData.all
```

#### List All Records That Have Not Been Updated
Use the following ActiveRecord query to get a list of all records that have not been updated.

```
RepresentationManagement::FlaggedVeteranRepresentativeContactData.where(flagged_value_updated_at: nil)
```

#### List All Records That Have Been Updated
Use the following ActiveRecord query to get a list of all records that have been updated.

```
RepresentationManagement::FlaggedVeteranRepresentativeContactData.where.not(flagged_value_updated_at: nil)
```

#### Delete Multiple Records
Use the following ActiveRecord statement to destroy multiple records at once. Simply replace the array of integers for `id` with an array of integers that contains the ids of the records you want to destroy.

```
RepresentationManagement::FlaggedVeteranRepresentativeContactData.where(id: [3, 4, 5]).destroy_all
```

## Security

No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
