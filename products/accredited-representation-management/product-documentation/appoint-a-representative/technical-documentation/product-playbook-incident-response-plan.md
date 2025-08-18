# Appoint a Representative Playbook/Incident Response Plan

## Product Description

**Product Overview:** [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/product-outline-appoint-a-representative.md)

## Contacts

- _All team members can also be reached via the Accredited Representation Management team DSVA Slack channel: [`#benefits-representation-management`](https://dsva.slack.com/archives/C05L6HSJLHM)_

### Team Members

- DSVA Product Lead: Jennifer Bertsch, jennifer.bertsch@va.gov
- Team Product Manager: Lindsay Li-Smith, lindsay.li-smith@oddball.io
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management#team-members)

### Outage Contacts:

- Accredited Representation Management team Tech Lead: Holden Hinkle, holden.hinkle@oddball.io
- Accredited Representation Management team Backend Engineer: Josh Fike, josh.fike@oddball.io
- Accredited Representation Management team Frontend Engineer: Colin O'Sullivan, colin.osullivan@adhocteam.us

## Troubleshooting

### Errors and Metrics

Errors and performance metrics for the 'Appoint a Representative' feature are captured through Sentry and Datadog respectively.

#### Error Logging

- **Sentry Integration:** Sentry captures any runtime errors and exceptions in the application.

#### Performance Metrics

- **Datadog Monitoring:** Datadog monitors the application's performance -- it track metrics like response times, server load, and API call frequencies.

- **ARM's Datadog Service:** ARM's Datadog service is called [_representation-management_](https://vagov.ddog-gov.com/apm/services/representation-management/operations/rack.request/resources?dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&deployments=qson%3A%28data%3A%28hits%3A%28selected%3Aversion_count%29%2Cerrors%3A%28selected%3Aversion_count%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%210%29&env=eks-prod&fromUser=false&groupMapByOperation=null&isInferred=false&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3Aservice%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&start=1732205570609&end=1732209170609&paused=true) and is part of the [_OCTO Benefits Portfolio_](https://vagov.ddog-gov.com/organization-settings/teams/02d65116-27e9-11ee-ad54-da7ad0900007/benefits) team.

- **Custom Datadog Dashboard:** [Appoint a Representative](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=true&refresh_mode=monthly&from_ts=1735718400000&to_ts=1737609578840&live=true)

### Issue Investigation Steps

This section outlines the steps to investigate and resolve issues related to the "Appoint a Representative" feature.

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

#### MVP

- Enables Appoint a Representative frontend - `appoint_a_representative_enable_frontend`
- Enables Appoint a Representative PDF generation endpoint - `appoint_a_representative_enable_pdf`
- Use the original veteran_x models to power Appoint a Rep entity search - `use_veteran_models_for_appoint`

#### V2

- Enables Appoint a Representative 2.0 features for the frontend and the backend - `appoint_a_representative_enable_v2_features`

## Security

PII and PHI is collected from authenticated users who start or complete the Appoint a Representative form flow; the data is encrypted and temporarily saved in the SiP (Save in Progress) forms table -- `in_progress_forms` -- in the VA.gov Postgresql database. Once the user either completes the form flow and downloads the PDF or submits the request online, the SiP record is deleted, otherwise, if the user never completes the form flow, from our understanding, the data is purged after 60 days.

When the request to generate the 21-22/21-22a PDF is made, the user's PII and PHI data is encrypted in transit via HTTPS but the data, including the generated PDF, is not persisted anywhere.
