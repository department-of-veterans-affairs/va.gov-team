## Production Troubleshooting Guide (MHV on VA.gov)  

This guide helps developers and operators quickly diagnose and resolve issues in the application. The following detailed sections are included:

### Secure Messaging  
- Monitoring Tools Overview:
  - [DataDog - MHV Secure Messaging `vets-api` dashboard](https://vagov.ddog-gov.com/dashboard/5r5-ra2-qga/mhv-secure-messaging?fromUser=false&refresh_mode=sliding&from_ts=1739385667928&to_ts=1739558467928&live=true)
  - [DataDog - MHV Secure Messaging Metrics](https://vagov.ddog-gov.com/dashboard/39q-93p-ftw/mhv-secure-messaging-metrics?fromUser=false&refresh_mode=sliding&from_ts=1739554820780&to_ts=1739558420780&live=true)
  - [DataDog - `mhv-messaging` APM service page](https://vagov.ddog-gov.com/apm/entity/service%3Amhv-messaging)
  - [DataDog - MHV Secure Messaging Real User Monitoring](https://vagov.ddog-gov.com/rum/sessions?query=%40application.id%3A02c72297-5059-4ed8-8472-874276f4a9b2%20%40type%3Asession&agg_m=count&agg_m_source=base&agg_t=count&fromUser=false&track=rum&from_ts=1739472236032&to_ts=1739558636032&live=true)
  - [DataDog - MHV Secure Messaging RUM Dashboard](https://vagov.ddog-gov.com/dashboard/vcc-65c-kni/sm-on-vagov-phase-1?fromUser=false&refresh_mode=sliding&from_ts=1739555008971&to_ts=1739558608971&live=true) 
  - [DataDog - MHV Secure Messaging Monitors](https://vagov.ddog-gov.com/monitors/manage?q=team%3Amhv-secure-messaging%20&order=desc)

- Common Triage Tasks:
  - Slack channel [#mhv-secure-messaging-alerts](https://dsva.slack.com/archives/C06RDU675J6) provides a live feed of monitors' updates (warnings, triggers recoveries). 
  - Initial triage
    - [ ] health checks to upstream `mhv-sm-patient-api` service at [DataDog - MHV Secure Messaging `vets-api` dashboard](https://vagov.ddog-gov.com/dashboard/5r5-ra2-qga/mhv-secure-messaging?fromUser=false&refresh_mode=sliding&from_ts=1739385667928&to_ts=1739558467928&live=true)
    - [ ] analyze error traces at [DataDog - `mhv-messaging` APM service page](https://vagov.ddog-gov.com/apm/entity/service%3Amhv-messaging)
    - [ ] `fwdproxy` [logs](https://vagov.ddog-gov.com/logs?query=service%3Afwdproxy%20%22%2Fmhv-sm-api%2Fpatient%22%20env%3Aprod&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1739557984341&to_ts=1739558884341&live=true) 
    - [ ] if any traces lead to issues in upstream service, inquire [`#mhv-sm-backend` Slack channel](https://dsva.slack.com/archives/C05TU9FPZU0)

- Common issues and their typical causes: 
    - authentication service interruptions may prevent access to authenticated service like MHV Secure Messaging, resulting in triggering anomaly monitor
    - issues with MHV services and their gateways may prevent access

- Accessing Logs and Stack Traces:
  - DataDog [logs](https://vagov.ddog-gov.com/logs?query=&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1739467609350&to_ts=1739554009350&live=true) 
  - `fwdproxy` [logs](https://vagov.ddog-gov.com/logs?query=service%3Afwdproxy%20%22%2Fmhv-sm-api%2Fpatient%22%20env%3Aprod&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1739557984341&to_ts=1739558884341&live=true)

- System Health Checks:
  - [`mhv-sm-patient-api` upstream service health checks](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/kub-dzv-hum) 
  - [`mhv-messaging` service state summary on `vets-api`](https://vagov.ddog-gov.com/apm/entity/service%3Amhv-messaging)

- Escalation Process:
  - MHV SM backend team that manages upstream service can be contacted at [`#mhv-sm-backend` Slack channel](https://dsva.slack.com/archives/C05TU9FPZU0)
  - Escalate issues when the following is established: 
    - incident is not related to `va.gov` related services such as authentication, `va.gov` architecture etc
    - errors are traced back to external api requests to `mhv-sm-patient-api` service
    - health check failures


### Medical Records  
- Monitoring Tools Overview:
  - The Datadog [backend dashboard](https://vagov.ddog-gov.com/dashboard/8tk-8fe-cin/mhv-medical-records?fromUser=true&refresh_mode=sliding&from_ts=1739468581433&to_ts=1739554981433&live=true) provides a good overview of essential APIs and connections to upstream MHV services.
  - Backend dashboard widgets include information about success and error rates, as well as latency.
  - The [frontend dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-b6a6fc9245174cad96c353ab45cf2020?fromUser=false&refresh_mode=sliding&from_ts=1736271401949&to_ts=1736357801949&live=true) includes information more focused on user experience.

- Common Triage Tasks:
  - Keep an eye on triggered alerts posted to the [#mhv-medical-records-alerts](https://dsva.slack.com/archives/C08621W3GGJ) Slack channel.
  - When an alert is triggered. Commonly helpful places to look are:
    - Backend dashboard (see above)
    - Logs (see below)
    - [APM Error Traces](https://vagov.ddog-gov.com/apm/traces?query=service%3Amhv-medical-records%20-status%3Aok&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=false&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=all&storage=hot&traceQuery=&view=spans&start=1739467899274&end=1739554299274&paused=false)
    - [Error tracking](https://vagov.ddog-gov.com/error-tracking?query=service%3Amhv-medical-records&fromUser=true&refresh_mode=sliding&source=backend&from_ts=1739467947804&to_ts=1739554347804&live=true)
  - The Fwdproxy HTTP Responses widget at the top of the dashboard is a good way to get a quick sense of when a major error (network connecticity, etc.) occurred and whether it is still ongoing.
  - Current common issues for Medical Records include vets-api API errors (400s, 500s), particularly related to CCD Generation and Imaging endpoints.

- Accessing Logs and Stack Traces:
  - Datadog logs can be viewed [here](https://vagov.ddog-gov.com/logs?query=&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1739467609350&to_ts=1739554009350&live=true).
  - Here are just the [logs for the fwdproxy](https://vagov.ddog-gov.com/logs?query=%40haproxy.backend_name%3Amhv_medical_records_back&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1739467609350&to_ts=1739554009350&live=true).

- System Health Checks:
  - The backend dashboard can give a quick overview of system health. Check that the various APIs are still returning responses, and that the error rate is not above normal.

- Escalation Process:
  - For issues stemming from upstream MHV services, contact MHV platform support via the [#mhv-platform-support](https://dsva.slack.com/archives/C057H6U7R6D) Slack channel.
  - For issues suspected to be VA.gov platform issues unrelated to the specific MHV VA.gov applications, post a `/support` request in the [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) Slack channel.


### Medications 
- Monitoring Tools Overview:
  - List of monitoring tools in use (e.g., Datadog, New Relic, ELK stack).
  - Instructions on how to access and interpret key metrics.

- Common Triage Tasks:
  - Checklist for initial triage (e.g., checking system health, verifying network connectivity).
  - Common issues and their typical causes (e.g., high memory usage, database latency).

- Accessing Logs and Stack Traces:
  - Locations and formats of logs.
  - Steps for retrieving and analyzing stack traces.

- System Health Checks:
  - Procedures for performing health checks on critical services.
  - Steps for verifying API availability and correctness.

- Escalation Process:
  - Contact information for teams responsible for external dependencies.
  - Guidelines on when and how to escalate issues.
