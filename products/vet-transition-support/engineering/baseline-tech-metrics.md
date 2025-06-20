The purpose of this document is to determine how best to track the project’s [baseline metrics](https://docs.google.com/spreadsheets/d/1thjziKGDsql-H0U7YhAMGI4M5ymZZ3LO8o-0cpD6Yfc/edit?gid=0#gid=0).

# Tasks

*   Determine what features we want to track 

    *   Determine what additional features we want to track

    *   [Analytics team writeup of tracked features](https://docs.google.com/document/d/14jj6wEmqPiPrpMFX2Mq25aW8thvr1l9tbjB-iRe22W4/edit?tab=t.0). (Mikal to create condensed version)

    *   [GA Dashboards displaying the tracked features.](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/elcziEc8RiGSOmpQhEx5OA)

    *   Once this task [EMSVT-462](https://jira.devops.va.gov/browse/PTEMSVT-462) is merged into production, will will have separate tracking for Apply Now and Learn More links

*   What errors/metrics will we track?  ([https://jira.devops.va.gov/browse/PTEMSVT-485](https://jira.devops.va.gov/browse/PTEMSVT-485))

    *   What constitutes an error?

    *   What constitutes a failed deployment?

    *   What constitutes an incident?

    *   Follow up tasks

        *   Investigate error tracking in Sentry

            *   What errors do we track in Sentry?

            *   Are there any default error tracking metrics for our app?

            *   Create tickets to implement tracking these metrics

        *   Research datadog error/metric tracking

            *   How do we set up our backend tracking metrics?

            *   What metrics should we track in Datadog

            *   What frontend metrics can we track here?

            *   Create tickets to implement tracking these metrics

*   Setup Sentry team ([https://jira.devops.va.gov/browse/PTEMSVT-486](https://jira.devops.va.gov/browse/PTEMSVT-486)) 

    *   SOCKS access

    *   Designate team Sentry admin

    *   [Create a Sentry team](https://depo-platform-documentation.scrollhelp.site/developer-docs/tracking-application-errors-with-sentry)

*   Implement [DORA metrics](https://www.datadoghq.com/knowledge-center/dora-metrics/#what-are-dora-metrics) using Datadog

    *   It is possible to implement these metrics in Datadog, but requires us to do the work ourselves. The Datadog team is working on an implementation of these metrics. We will need to work with them on our implementation, so that we can seamlessly integrate with theirs when it is ready.

    *   [Slack thread](https://dsva.slack.com/archives/C01G6J7UGGH/p1749052607736779) containing information

    *   [Dora metrics Github workflow](https://github.com/department-of-veterans-affairs/cds-gha-workflows/blob/main/docs/dora.md#dora-metrics-workflow)

    *   [Datadog dashboard module](https://github.com/department-of-veterans-affairs/cds-tfm-datadog-dashboard)

    *   [Link to dashboard](https://cpm.ddog-gov.com/dashboard/piz-kbf-554/cdsp-dora-metrics---cds-console?fromUser=false&refresh_mode=sliding&from_ts=1747074931863&to_ts=1749666931863&live=true)

    *   [How to import Datadog dashboard](https://docs.datadoghq.com/dashboards/configure/#copy-import-or-export-dashboard-json)

    *   [Datadog number of deployments API](https://nam12.safelinks.protection.outlook.com/?url=https://docs.datadoghq.com/api/latest/dora-metrics/#send-a-deployment-event-for-dora-metrics&data=05|02|mahmed@ironarchtech.com|696a9470d3704915a05908dda8392876|fa42287cf54e4026abbca2360f356b90|1|0|638851685689083561|Unknown|TWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ==|0|||&sdata=5FS10+l5vx+cdQ9M+2NhDFRD7dkWgewVp800SJO+keg=&reserved=0)

    *   [Datadog number of incidents API](https://nam12.safelinks.protection.outlook.com/?url=https://docs.datadoghq.com/api/latest/dora-metrics/#send-an-incident-event-for-dora-metrics&data=05|02|mahmed@ironarchtech.com|696a9470d3704915a05908dda8392876|fa42287cf54e4026abbca2360f356b90|1|0|638851685689099374|Unknown|TWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ==|0|||&sdata=OOsQlBhPb3+310d1+b6Ex6Fz5gCQe4O2W3VGJVEW0PE=&reserved=0)

    *   Use Datadog to track: Deployment Frequency, Lead Time for Changes, Test Automation Coverage, Deployment Rollback Rate, Change Failure Rate

*   Cycle Time

    *   This is the most involved metric to track

    *   [Properly name GitHub branches/pull requests](https://support.atlassian.com/jira-cloud-administration/docs/use-the-github-for-jira-app/)

    *   There is a [Jira DD integration](https://docs.datadoghq.com/integrations/jira/), but it is for creating tickets based off of alerts.

    *   It might be necessary to call the [Jira API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-changelog-bulkfetch-post) to track issues moving from TODO to Done

*   Create a bi-anual incidence response test

    *   What date will this happen?

    *   What type of incident will it be?

    *   The result of this should be that the engineering team is ready to respond to different types of incidences as outlined in the [Incidence response protocol](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te).

*   Create a document to consolidate all of the dashboards

    *   List each data collection service and what metrics they track and how to get access.

    *   This is to ensure that the metrics are as accessible as possible.

# Metrics

*   Datadog or GitHub

    *   Deployment Frequency

    *   Lead Time for Changes

    *   Test Automation Coverage

    *   Deployment Rollback Rate

    *   Cycle Time

*   Datadog or Sentry

    *   Change Failure Rate

    *   Mean Time to Restore

    *   Error Rates

    *   Incident Frequency and Severity

*   Datadog and Google analytics

    *   Feature Usage

*   Other

    *   Last Incident Response Test Date

*   Not applicable

    *   AI/ML Adoption Metrics

        *   We do not have any AI adaptations and there does not seem to be a reason so far.

    *   Automation Rate. 

        *   We do not have any infrastructure outside of the VAs at the moment.

# Notes

*   The hardest part of calculating these metrics is that the information is spread throughout multiple data sources. Ideally we would set up an aggregator such as Datadog (DD), and display all of the data there. The issue is the VA does not support integrating Google Analytics (GA) with DD or GitHub (GH) with DD. I have received conflicting information about DD integrating with GH. What we can track and how we track it is dependent on if a DD GH integration is supported.

*   We will know the exact metrics to track and where once the investigation tasks are complete.


*    Many teams could benefit from tracking [some of these metrics](https://docs.datadoghq.com/dora_metrics/). Collecting and displaying this information will never be easy, but having infrastructure in place to facilitate it will make a huge difference. I think it would be in the best interest of the VA to implement a DD GH integration. The analytics team is currently working on a GA DD integration.
