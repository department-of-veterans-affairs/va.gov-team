## Production Support

1. Clinician Workflow Stats: [https://tevi.ddog-gov.com/dashboard/zix-s83-2u8/cw-stats?from_ts=1653411458112&to_ts=1653415058112&live=true](https://tevi.ddog-gov.com/dashboard/zix-s83-2u8/cw-stats?from_ts=1653411458112&to_ts=1653415058112&live=true)
    - Sidekiq enqueued: shows the jobs currently enqueued in Sidekiq. This can increase if vista-apis start behaving anomalously (slow or erroring out)
    - Puma Backlog: if it starts increasing, puma can’t keep up with the incoming requests
2. Error Traces: [https://tevi.ddog-gov.com/apm/traces?query=env%3Aprod -service%3A(clinician-workflow-defaultdb OR clinician-workflow-cache) -status%3Aok -%40http.path_group%3A("%2Flambda%2Fflush" OR "%2Flambda%2Fhello")&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&historicalData=false&messageDisplay=inline&sort=desc&spanViewType=logs&start=1653333035453&end=1653333935453&paused=false](https://tevi.ddog-gov.com/apm/traces?query=env%3Aprod%20-service%3A%28clinician-workflow-defaultdb%20OR%20clinician-workflow-cache%29%20-status%3Aok%20-%40http.path_group%3A%28%22%2Flambda%2Fflush%22%20OR%20%22%2Flambda%2Fhello%22%29&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&historicalData=false&messageDisplay=inline&sort=desc&spanViewType=logs&start=1653333035453&end=1653333935453&paused=false)
    - ignore the logs from `project-chipapi-cwsacrificiallambda-prod`
    - sometimes, one of the sidekiq job (eg: `PreCacheAppointmentsByClinicJob`) fails due to error with vista-api. It usually is re-queued to run in 2 mins so an error in itself is not cause for concern. But if there are more than a few errors, that should be reported and looked into.
3. vista-api: [https://tevi.ddog-gov.com/dashboard/pa4-jzg-492/vista-api?from_ts=1653412462199&to_ts=1653416062199&live=true](https://tevi.ddog-gov.com/dashboard/pa4-jzg-492/vista-api?from_ts=1653412462199&to_ts=1653416062199&live=true)
    - Look for REST errors and RPC Socket Timeout and Connection Refused
4. vets-api: [https://app.datadoghq.com/dashboard/tmn-f5f-e9r/check-in-vets-api?from_ts=1653401909290&to_ts=1653416309290&live=true](https://app.datadoghq.com/dashboard/tmn-f5f-e9r/check-in-vets-api?from_ts=1653401909290&to_ts=1653416309290&live=true)
    - shows numbers for check-ins and pre check-ins as well as other data on various controllers and services calls
    - look for any anomalous data (any counts lower than expected, or response measurements higher than normal).
5. Other Info:
    - vista-api troubleshooting: see [this](https://dsva.slack.com/archives/C022AC2STBM/p1653417300546239) slack thread for more info
