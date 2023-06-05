## Incident Response Plan (Production Support)

### Summary
Here is the current production support guidance for Check-in Experience team:

#### Hours of Support
- CIE Engineers will have a sprint rotation to provide production support
- CIE Engineers will schedule the production support hours to co-incide with their normal work hours depending on the time zone

#### Support Tasks
- Proactively monitor the datadog dashboards ([Links](#links), [#Check-in-monitoring]() [#check-in-experience-apm](https://dsva.slack.com/archives/C02U11L00TF) and [#check-in-production-support](https://dsva.slack.com/archives/C02UP02HHGX) slack channels.
    - for any alerts in #check-in-experience-apm channel, perform initial debugging into the Sentry error message and the corresponding downstream error. If needed, alert the TEVI team by sending a message in #check-in-experience-engineering slack channel and tagging Charley and/or Michael Kimball
    - for any anomaly in stats or error traces, alert the TEVI team by sending a message in #check-in-experience-engineering slack channel
    - for any questions or issues in #check-in-go-live channel, perform initial debugging to identify/narrow down root cause. If needed, include Shane or Andy (for VistA, vista-api info), Rob Durkin (for VEText info) or Check-in Experience Team's frontend & backend engineers (for CHIP/LoROTA) or TBD (for Clinician Workflow info).
- This data should automatically be posted in the production support channel daily
        ```
        Completed check-ins % : 63.5%
        Completed pre-check-ins % : 41.6%
        Check-ins clicked: 1765
        Check-ins completed: 1121
        Pre-check-ins clicked: 6251
        Pre-check-ins completed: 2602
        ```
- Monitor their VA email for notifications for the VAeCheckinVetFacingApps email group
    - If notified by email of new support tickets in SNOW, investigate the tickets to resolution in our [SNOW queue](it.va.gov/now/nav/ui/classic/params/target/task_list.do%3Fsysparm_view%3Dcatalog%26sysparm_first_row%3D1%26sysparm_query%3Dassignment_group%253D9c50fbc51b4f8d5065965318624bcbbf%255Eactive%253Dtrue%255Estate!%253D6%26sysparm_clear_stack%3Dtrue)

### SNOW Queues
[Assignment Group: eCheckInVetFacingApps](https://yourit.va.gov/now/nav/ui/classic/params/target/task_list.do%3Fsysparm_view%3Dcatalog%26sysparm_first_row%3D1%26sysparm_query%3Dassignment_group%253D9c50fbc51b4f8d5065965318624bcbbf%255Eactive%253Dtrue%255Estate!%253D6%26sysparm_clear_stack%3Dtrue)

 [Assignment Group: eCheck-In API Support](https://yourit.va.gov/now/nav/ui/classic/params/target/task_list.do%3Fsysparm_query%3Dassignment_group%253D2ca35d611b5d01d0d73ccb78624bcb73%255Eactive%253Dtrue%255Estate!%253D6%26sysparm_first_row%3D1%26sysparm_view%3Dcatalog)

### Links

1. [2022 Production Rollout Support](https://github.com/department-of-veterans-affairs/chip/blob/master/docs/2022-production-rollout-support.md)
4. Clinician Workflow Stats: [https://tevi.ddog-gov.com/dashboard/zix-s83-2u8/cw-stats?from_ts=1653411458112&to_ts=1653415058112&live=true](https://tevi.ddog-gov.com/dashboard/zix-s83-2u8/cw-stats?from_ts=1653411458112&to_ts=1653415058112&live=true)
    - Sidekiq enqueued: shows the jobs currently enqueued in Sidekiq. This can increase if vista-apis start behaving anomalously (slow or erroring out)
    - Puma Backlog: if it starts increasing, puma can’t keep up with the incoming requests
5. Error Traces: [https://tevi.ddog-gov.com/apm/traces?query=env%3Aprod -service%3A(clinician-workflow-defaultdb OR clinician-workflow-cache) -status%3Aok -%40http.path_group%3A("%2Flambda%2Fflush" OR "%2Flambda%2Fhello")&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&historicalData=false&messageDisplay=inline&sort=desc&spanViewType=logs&start=1653333035453&end=1653333935453&paused=false](https://tevi.ddog-gov.com/apm/traces?query=env%3Aprod%20-service%3A%28clinician-workflow-defaultdb%20OR%20clinician-workflow-cache%29%20-status%3Aok%20-%40http.path_group%3A%28%22%2Flambda%2Fflush%22%20OR%20%22%2Flambda%2Fhello%22%29&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&historicalData=false&messageDisplay=inline&sort=desc&spanViewType=logs&start=1653333035453&end=1653333935453&paused=false)
    - ignore the logs from `project-chipapi-cwsacrificiallambda-prod`
    - sometimes, one of the sidekiq job (eg: `PreCacheAppointmentsByClinicJob`) fails due to error with vista-api. It usually is re-queued to run in 2 mins so an error in itself is not cause for concern. But if there are more than a few errors, that should be reported and looked into.
6. vista-api: [https://tevi.ddog-gov.com/dashboard/pa4-jzg-492/vista-api?from_ts=1653412462199&to_ts=1653416062199&live=true](https://tevi.ddog-gov.com/dashboard/pa4-jzg-492/vista-api?from_ts=1653412462199&to_ts=1653416062199&live=true)
    - Look for REST errors and RPC Socket Timeout and Connection Refused
7. vets-api: [https://vagov.ddog-gov.com/dashboard/zps-5fk-azw/check-in-vets-api](https://vagov.ddog-gov.com/dashboard/zps-5fk-azw/check-in-vets-api)
    - shows numbers for check-ins and pre check-ins as well as other data on various controllers and services calls
    - look for any anomalous data (any counts lower than expected, or response measurements higher than normal).
8. Other Info:
    - vista-api troubleshooting: see [this](https://dsva.slack.com/archives/C022AC2STBM/p1653417300546239) slack thread for more info
