### Appointments Monitoring:

- [Appointments Alerts | Datadog](https://vagov.ddog-gov.com/dashboard/7t4-7fw-pgj/vaos-alerts?from_ts=1681935100840&to_ts=1682021500840&live=true)

  This section serves as the central hub for troubleshooting activities. It comprises six panels that provide essential information and alerts. These panels are:

   - `Sum of Vets API Errors`: Displays the total count of errors encountered in the Veterans API.
   - `Sum of VAOS Service Failures`: Shows the sum of failures occurring within the MAP services.
   - `Average VAOS Service Latency`: Indicates the average response time or latency experienced by the MAP services.
   - `Breakers Skipped Alert`: Raises an alert when circuit breakers are skipped, indicating potential issues with external services.
   - `VAOS Service Partials`: Tracks partial responses or incomplete data received from the VAOS service.
   - `Request Rate Alert`: Triggers an alert when the request rate falls below a predetermined threshold.
---

- [Appointment List Logs](https://vagov.ddog-gov.com/logs?query=vaos%20service%20call%20%40payload.url%3A%2A%2Fpatients%2F%2A%2Fappointments%2Aend%3D%2A%20env%3Aeks-prod%20&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=stream&from_ts=1716922611195&to_ts=1717009011195&live=true)

  This page displays the logs of requests for appointment lists, including successful and failed attempts. Since appointment list requests constitute the majority of calls made to the external MAP services, any issues or problems with the backend service will likely manifest themselves in this panel first. Compared to the other graphing panels, this panel offers a more real-time view of the calls, allowing for quicker identification and troubleshooting of potential issues.
---

- [Partial Logs](https://vagov.ddog-gov.com/logs?query=get_appointments%20has%20response%20errors%20env%3Aeks-prod%20&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&view=spans&viz=stream&from_ts=1715098623610&to_ts=1715185023610&live=true)

  This page displays partial responses or incomplete data received from the VAOS service. Additionally, it shows the content of the error message associated with the response. This information helps identify which specific service is encountering an issue, whether it's VSP (VistA sites), Cerner (Oracle Health), or HSRM (Community Care).
---

- [MHV-Appointments APM](https://vagov.ddog-gov.com/apm/services/mhv-appointments/operations/rack.request/resources?dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&env=eks-prod&fromUser=false&fullscreen_end_ts=1716296452334&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_start_ts=1715691652334&graphType=flamegraph&groupMapByOperation=null&isInferred=false&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap75%29%2CtopN%3Aall%29%2Cversion%3A%211%29&s3BucketDetails=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&shouldShowLegend=true&sort=time&spanViewType=metadata&summary=qson%3A%28data%3A%28visible%3A%21t%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21f%29%2Csublayer%3A%28slot%3A%28layers%3Aservice%29%2Cselected%3Apercentage%29%29%2Cversion%3A%211%29&topGraphs=latency%3Alatency%2Chits%3Aversion_count%2Cerrors%3Aversion_count%2CbreakdownAs%3Apercentage&view=spans&start=1717098011667&end=1717184411667&paused=false)

  This page presents Datadog's monitoring for the appointment application. It provides a detailed breakdown of the calls made to the various appointment controllers within Vets API. This granular view is useful for in-depth analysis and troubleshooting of individual requests.
---

- [Forward Proxy](https://vagov.ddog-gov.com/dashboard/ae4-qch-6vw/forward-proxy?tpl_var_proxy%5B0%5D=va_mobile_back&from_ts=1681915247026&to_ts=1682088047026&live=true)

  This page serves as a secondary source to corroborate information gathered from other areas. It displays the results of health check requests made to the MAP services. These results indicate whether the backend services are reachable or not.
----

- [Watch Tower Dashboard](https://vagov.ddog-gov.com/dashboard/hy7-b5t-46u/watch-tower-dashboard?refresh_mode=sliding&view=spans&from_ts=1706716048990&to_ts=1706719648990&live=true)

  This dashboard is monitored by the watch officer. It displays the status of various alerts related to the Vets API, including alerts specific to appointments. Any high-priority (P1) alerts shown on this dashboard require immediate action from the watch officer, potentially involving assistance from the application owners.
---

- [Platform E2E](https://vagov.ddog-gov.com/dashboard/u27-88d-58v/platform---e2e?from_ts=1692556476538&to_ts=1692642876538&live=true)

  This section provides a general overview of the reverse proxy (ingress), Vets API, and the forward proxy (egress). By examining this view, you can determine if there is a broader system failure or issue affecting the entire Vets API system.
---

- [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=team%3A"mhv-appointments"&order=desc)

  This page displays all the monitoring checks related to MHV (My HealtheVet) Appointments. Any monitors that are currently in an alert state will be highlighted in red, enabling easy identification of potential issues.

### Appointment Calls to External MAP Endpoints:
These pages prove useful in diagnosing Vets API to external MAP services requests.

- [Apptointment List VAOS Service](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_d=count&agg_m_e=count&agg_m_source_a=base&agg_m_source_d=base&agg_m_source_e=base&agg_t_a=count&agg_t_d=count&agg_t_e=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cd%2Ce&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%5C%28GET%5C%29%2A%2Fpatients%2F%2A%2Fappointments%2Aend%3D%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_d=vaos%20service%20call%20%40payload.url%3A%5C%28GET%5C%29%2A%2Fpatients%2F%2A%2Fappointments%2Aend%3D%2A%20env%3Aeks-prod%20%40message_content%3A%2AReadTimeout%2A%20&query_e=vaos%20service%20call%20%40payload.url%3A%5C%28GET%5C%29%2A%2Fpatients%2F%2A%2Fappointments%2Aend%3D%2A%20env%3Aeks-prod%20-%40http.status_code%3A2%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

  - request to Vets API: (GET) /v2/appointments?_include&start&end&statuses[]
  - request to VAOS Service: (GET) /vaos/v1/patients/?/appointments
  
- [Apptointment Create VAOS Service](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%5C%28POST%5C%29%2Avaos%2Fv1%2Fpatients%2F%2A%2Fappointments%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%5C%28POST%5C%29%2Avaos%2Fv1%2Fpatients%2F%2A%2Fappointments%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%5C%28POST%5C%29%2Avaos%2Fv1%2Fpatients%2F%2A%2Fappointments%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

  - request to Vets API: (POST) /v2/appointments
  - request to VAOS Service: (POST) /vaos/v1/patients/?/appointments
  
- [Apptointment Cancel VAOS Service](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%5C%28PUT%5C%29%2Avaos%2Fv1%2Fpatients%2F%2A%2Fappointments%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%5C%28PUT%5C%29%2Avaos%2Fv1%2Fpatients%2F%2A%2Fappointments%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%5C%28PUT%5C%29%2Avaos%2Fv1%2Fpatients%2F%2A%2Fappointments%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

  - request to Vets API: (GET) /v2/appointments/?
  - request to VAOS Service: (GET) /vaos/v1/patients/?/appointments/?
  
- [Facilities MFS](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%2A%2Ffacilities%2Fv2%2Ffacilities%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%2A%2Ffacilities%2Fv2%2Ffacilities%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%2A%2Ffacilities%2Fv2%2Ffacilities%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

  - request to Vets API: (GET) /v2/facilities/?
  - request to Mobile Facility Service: (GET) /facilities/v2/facilities/?
    
- [Clinics VAOS Service](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Flocations%2F%2A%2Fclinics%3FclinicIds%3D%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Flocations%2F%2A%2Fclinics%3FclinicIds%3D%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Flocations%2F%2A%2Fclinics%3FclinicIds%3D%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

  - request to Vets API: (GET) /v2/locations/?/clinics
  - request to VAOS Service: (Get) /vaos/v1/locations/?/clinics
    
- [Slots VAOS Service](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Flocations%2F%2A%2Fclinics%2F%2A%2Fslots%3F%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Flocations%2F%2A%2Fclinics%2F%2A%2Fslots%3F%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Flocations%2F%2A%2Fclinics%2F%2A%2Fslots%3F%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

  - request to Vets API: (GET) /v2/locations/?/clinics/?/slots
  - request to VAOS Service: (GET) /vaos/v1/locations/?/clinics/?/slots
    
- [Scheduling Elig Moible Facitlity Service](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Fpatients%2F%2A%2Feligibility%3F%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Fpatients%2F%2A%2Feligibility%3F%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%2A%2Fvaos%2Fv1%2Fpatients%2F%2A%2Feligibility%3F%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

  - request to Vets API: (GET) /v2/scheduling/configurations
  - request to Mobile Facility Service: (GET) /facilities/v2/scheduling/configurations
    
- [Providers PPMS](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%2A%2Fppms%2Fv1%2Fproviders%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%2A%2Fppms%2Fv1%2Fproviders%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%2A%2Fppms%2Fv1%2Fproviders%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

   - request to PPMS: (GET) /ppms/v1/providers/?
    
- [CC CC Eligibility](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%2A%2Fcce%2Fv1%2Fpatients%2F%2A%2Feligibility%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%2A%2Fcce%2Fv1%2Fpatients%2F%2A%2Feligibility%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%2A%2Fcce%2Fv1%2Fpatients%2F%2A%2Feligibility%2F%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true)

  - request to Vets API: (GET) /v2/community_care/eligibility/?
  - request to CCE Service: (GET) /cce/v1/patients/?/eligibility/?
    
- [Scheduling Configuration Mobile Facility Service](https://vagov.ddog-gov.com/logs?agg_m_a=count&agg_m_b=count&agg_m_c=count&agg_m_source_a=base&agg_m_source_b=base&agg_m_source_c=base&agg_t_a=count&agg_t_b=count&agg_t_c=count&cols=host%2Cservice%2C%40payload.status%2C%40duration&ff_display=a%2Cb%2Cc&fromUser=true&messageDisplay=inline&query_a=vaos%20service%20call%20%40payload.url%3A%2A%2Ffacilities%2Fv2%2Fscheduling%2Fconfigurations%2A%20env%3Aeks-prod%20%40http.status_code%3A2%2A%20&query_b=vaos%20service%20call%20%40payload.url%3A%2A%2Ffacilities%2Fv2%2Fscheduling%2Fconfigurations%2A%20env%3Aeks-prod%20%40http.status_code%3A4%2A%20&query_c=vaos%20service%20call%20%40payload.url%3A%2A%2Ffacilities%2Fv2%2Fscheduling%2Fconfigurations%2A%20env%3Aeks-prod%20%40http.status_code%3A5%2A%20&refresh_mode=sliding&storage=online_archives&stream_sort=desc&view=spans&viz=timeseries&from_ts=1712758917107&to_ts=1712845317107&live=true) 

   - request to Vets API: (GET) /v2/scheduling/configurations
   - request to Mobile Facility Service: (GET) /facilities/v2/scheduling/configurations
