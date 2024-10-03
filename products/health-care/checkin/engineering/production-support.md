## Incident Response Plan (Production Support)

Here is the current production support guidance for Check-in Experience team:

### Hours of Support
- CIE Engineers will have a sprint rotation to provide production support
- CIE Engineers will schedule the production support hours to co-incide with their normal work hours depending on the time zone

### Support Tasks
- Proactively monitor the following    
    - PagerDuty
        - We will do 2-week rotations that coincide with our sprint schedule
            - 2 people will be on call from 7 am to 8 pm ET and configured in the PCI API Schedule
                - Primary - is responsible for responding to incidents/issues
                - Secondary - is the next person in line to be Primary and takes over for the Primary if they need to be OOO
            - On call persons will get a call/text if an issue needs to be addressed (depending on your configuration in PagerDuty)
        - Use the [Incident Response Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/cross-team-initiatives/vetext-pci-incident-response/incident-response-playbook.md) to guide incident/issue response
        - In the event that an issue is resulting from something upstream, bring attention to the issue in the following [vettext-production-support channel](https://dsva.slack.com/archives/C052BC1893K) and use the following call-out "@vetext-tier-3-team"
    - Slack channels
        - [#check-in-production-support](https://dsva.slack.com/archives/C02UP02HHGX)
            - Ensure the daily bot is posting check-in and pre-check-in data 
            - Check that the numbers look reasonable
        - [#check-in-monitoring](https://dsva.slack.com/archives/C04G3EY2F5W)
            - for any alerts in #check-in-monitoring channel, perform initial debugging into the Sentry error message and the corresponding downstream error
        - [#check-in-experience-apm](https://dsva.slack.com/archives/C02U11L00TF)        
    - DataDog dashboards         
        - [vets-api](https://vagov.ddog-gov.com/dashboard/zps-5fk-azw/check-in-vets-api)
            - shows numbers for check-ins and pre check-ins as well as other data on various controllers and services calls
        - [CHIP API](https://tevi.ddog-gov.com/dashboard/5jy-mz3-53p/technical-dashboard---chip-prod?from_ts=1685971164731&to_ts=1685985564731&live=true)
        - [vista-api](https://tevi.ddog-gov.com/dashboard/pa4-jzg-492/vista-api?from_ts=1653412462199&to_ts=1653416062199&live=true)
            - Look for REST errors and RPC Socket Timeout and Connection Refused        
- Things to look for
    - Anomalous data (any counts lower than expected, or response measurements higher than normal)
    - Anomalies in stats or error traces 
- Monitor your VA email for notifications for the VAeCheckinVetFacingApps email group
    - If notified by email of a new support ticket in our [SNOW Queue for Assignment Group 'eCheckInVetFacingApps'], investigate the ticket to determine if a fix is needed and how critical the issue is (https://yourit.va.gov/now/nav/ui/classic/params/target/task_list.do%3Fsysparm_view%3Dcatalog%26sysparm_first_row%3D1%26sysparm_query%3Dassignment_group%253D9c50fbc51b4f8d5065965318624bcbbf%255Eactive%253Dtrue%255Estate!%253D6%26sysparm_clear_stack%3Dtrue)
    - If, after investigation, it is determined that the incident needs a fix, create a ticket in our GitHub board using this [template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/check-in-experience-snow-ticket.md) and follow the instructions in the template
    - Once the fix is in production, follow the instructions in the GitHub template and set the SNOW ticket to Resolved

### Other Links

Clinician Workflow Error Traces: 
- [https://tevi.ddog-gov.com/apm/traces?query=env%3Aprod -service%3A(clinician-workflow-defaultdb OR clinician-workflow-cache) -status%3Aok -%40http.path_group%3A("%2Flambda%2Fflush" OR "%2Flambda%2Fhello")&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&historicalData=false&messageDisplay=inline&sort=desc&spanViewType=logs&start=1653333035453&end=1653333935453&paused=false](https://tevi.ddog-gov.com/apm/traces?query=env%3Aprod%20-service%3A%28clinician-workflow-defaultdb%20OR%20clinician-workflow-cache%29%20-status%3Aok%20-%40http.path_group%3A%28%22%2Flambda%2Fflush%22%20OR%20%22%2Flambda%2Fhello%22%29&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&historicalData=false&messageDisplay=inline&sort=desc&spanViewType=logs&start=1653333035453&end=1653333935453&paused=false)
    - ignore the logs from `project-chipapi-cwsacrificiallambda-prod`
    - sometimes, one of the sidekiq job (eg: `PreCacheAppointmentsByClinicJob`) fails due to error with vista-api. It usually is re-queued to run in 2 mins so an error in itself is not cause for concern. But if there are more than a few errors, that should be reported and looked into.


