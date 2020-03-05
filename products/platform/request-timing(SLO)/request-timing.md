# Platform Request Timing
## Communications
GitHub Label: 

Slack channel: [#vsp-tools-be](https://dsva.slack.com/archives/CQHBJ5U06)

Product POCs: Alex Pappas

Stakeholders:

## The Problem
The complete breakdown on the timing of an http request from vets-api to an external service is currently difficult to determine. Investigation into how we can report and display request time metrics is necessary to expose a more complete breakdown of request times.

A solution is needed in relation to pre-defined request time limits (SLOs or average metric data). If we are able to compare real-time data to benchmark request time expectations, a more definitive answer to whether a service is performing sufficiently can easily be comprehended by product or leadership personnel.

## User Goals
The end user goal is for product personnel to have access to easily identifiable metrics in a less technical way to determine when service request times are performing adequately or inadequately.

## Business Goals
* Support Objective 3 - Stability & Resiliency by providing robust SLO tracking for `vets-api` endpoints

## Assumptions
* We assume that downstream dependencies are not consistent or reliable
* We assume teams with accurate SLO measurements will more easily understand how to prioritize value-add engineering work
* We assume we can gather and present the requisite data in a manner that is useful to our stakeholders

## Questions
* How can we report on number of users affected?
* Since SLOs are not currently defined for external services, what other metrics can we use to report a red/green status per service? (Possibly use latency averages?)
* Do we currently have Sentry or PagerDuty alerts when request time latency goes above a certain threshold?

## Requirements

### In Scope
- Defining and presenting `vets-api` service level indicators (SLIs) and objectives (SLOs)
- Collecting downstream service request metrics as part of risk analysis
- Mapping of `vets-api` endpoints to downstream services

### Out of Scope
- Defining what a "product success tool" looks like
- Defining the pathway for consumption of our SLOs
- Defining client-side (VA.gov) SLOs or SLIs (page load times, etc).

## Solution Approach

[WIP]

## Value Propositions

[WIP]

## KPIs

[WIP]

---

# Implementation Info

## Status

This product is currently in the ideation & discovery phase.

## Discovery

### Background
Existing Prometheus metrics supply us with relevant request timing data and averages for `vets-api` requests as well as downstream service calls. 

Metrics are visually presented in Grafana dashboards (listed below). 

There are many existing Prometheus metrics which can aid in a full picture representation of HTTP requests from `vets-api` => downstream services, which can display a detailed breakdown of request timing. 

Such metrics could assist in the escalation process when getting issues to the responsible teams. 

The [Product Tool Prototype](https://department-of-veterans-affairs.github.io/product-tool/) defines a "Backend Systems" graph which could benefit from current breakers metrics from prometheus which define [30 day average service up times](https://hackmd.io/boftAFDCSNGIJhMYwe5UDQ?both#Breakers-Service-up---30-day-average).

### Existing Metrics - [Dashboard](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?from=now-3h&to=now)

#### Request Timing:
* [Vets-API request duration (by controller/action): Full picture (vets-api => external service) request timing](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?from=now-3h&to=now&fullscreen&edit&panelId=4)
* [External Service Request Timing - Per Service](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?from=now-3h&to=now&fullscreen&edit&panelId=10)

#### Averages:
* [Nginx average latency by status code and application](
http://grafana.vfs.va.gov/d/000000026/application-request-breakdown?orgId=1&fullscreen&edit&panelId=3&var-data_source=Prometheus%20(Production)&var-application=api&var-component=appeals)
* [Average Request Total Failure by Service](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?from=now-3h&to=now&fullscreen&edit&panelId=8)
* [HaProxy HTTP Total Time Average (seconds) per Backend](
http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?from=now-3h&to=now&fullscreen&edit&panelId=12)


#### Breakers (Service up) - 30 day average
* [Service Up (Average)](http://grafana.vfs.va.gov/d/000000022/breakers?orgId=1&fullscreen&panelId=1&from=now-2d&to=now&var-data_source=Prometheus%20(Production)&var-service=All&var-endpoint=All) - This will be useful for the product tool 

#### [WIP] Histogram Quantile Graph
* [95% of request times are served within](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?orgId=1)

#### [WIP] Latency Averages 

- [ ] Split up by endpoint

* [Current Averages/External service](http://grafana.vfs.va.gov/d/Dp_Z5xfWk/backend-service-report-copy-request-timing?orgId=1&from=now-5m&to=now&var-service=EVSS%2FCommon&var-service=EVSS%2FDocuments&var-service=Search%2FResults)
* [Request Time Averages Per External Service and Enpoint](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?orgId=1&fullscreen&panelId=18)

### External Service SLOs for request times (per service)
Pre defined benchmarking for external service request times will need to be specified in order to assess http request timing metrics. The devops repo may have some insight in relation to external service request timing SLOs.

SLOs are currently undefined for external service request times. It was decided that the best approach/ in addition to SLO creation may be to expose current request time averages per external service and endpoint. (A new grafana chart is currently under construction to expose RT averages).

Request Time percentile information will be a useful metric to report on as well. Ex: 90% of request times are below 300ms with 10% being above 300ms 

#### Downstream Service Average HTTP Request Time
Last 7 days (Recorded on 12-27-2019):
* Appeals - 1.4s
* Central Mail - 736ms
* EVSS/Claims - 2.4s
* EVSS/Common - 373ms
* EVSS/Documents - 4.8s
* EVSS/GiBillStatus - 3.5s
* EVSS/Letters - 4.7s
* EVSS/PCIUAddress - 1.7s
* EmisMilitaryInformation - 316ms
* EmisVeteranStatus - 305ms
* GI - 83.8ms
* GIBFT - 0?
* HCA - 3.0s
* MVI - 1.1s
* OKTA - 481ms
* PPMS - 1.8s
* Preneeds - 395ms
* Rx - 1.2s
* Search - 487ms
* Vets360 - 0?
* VHA_Access_PWT - 0?
* Vets360/ContactInformation - 91.3ms

Current SLOs from Prometheus metrics per service/endpoint

| External Service | Endpoint | Average Latency |
| -------- | -------- | -------- |
| AppealsStatus | /api/v2/appeals | 1.153s |
| AppealsStatus | /health-check | 36.140ms |
| BB | No data | No data |
| CentralMail | /VADocument/getStatus | 460.678ms |
| CentralMail | /VADocument/upload | 1.738s |
| EVSS/Claims | /VONAPP2/wss-claims-services-web-3.6/rest/vbaClaimStatusService/getClaimDetailById| 1.010  |
| EVSS/Claims | VONAPP2/wss-claims-services-web-3.6/rest/vbaClaimStatusService/getClaimDetailWithDocsById| 4.698  |
| EVSS/Claims | /VONAPP2/wss-claims-services-web-3.6/rest/vbaClaimStatusService/getClaims| 2.694  |
| EVSS/Claims | /VONAPP2/wss-claims-services-web-3.6/rest/vbaClaimStatusService/set5103Waiver| 3.184  |
| EVSS/Common | VONAPP2/wss-common-services-web-11.6/rest/persistentPropertiesService/11.6/createUserAccount| 445.184 ms |
| EVSS/Common | /VONAPP2/wss-common-services-web-11.6/rest/ratingInfoService/11.6/findRatingInfoPID | 1.000s |
| EVSS/Dependents | No data | No data |
| EVSS/Documents |  | 3.937s|
| EVSS/GiBillStatus |  | 2.508s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1 | 3.564s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/benefit_summary/generate| 2.908s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/benefit_verification| 2.926s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/civil_service|2.080s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/commissary| 1.634s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/letterBeneficiary | 2.097s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/medicare_partd | 2.109s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/minimum_essential_coverage | 2.022s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/proof_of_service | 2.130s |
| EVSS/Letters | /VONAPP2/wss-lettergenerator-services-web/rest/letters/v1/service_verification | 1.773s |
| EVSS/PCIUAddress | /VONAPP2/wss-pciu-services-web/rest/pciuServices/v1/emailAddress| 1.276s |
| EVSS/PCIUAddress | /VONAPP2/wss-pciu-services-web/rest/pciuServices/v1/mailingAddress | 1.522s |
| EVSS/PCIUAddress | /VONAPP2/wss-pciu-services-web/rest/pciuServices/v1/primaryPhoneNumber| 1.238s |
| EmisMilitaryInformation |  | 314.294ms |
| EmisPayment | No data | No data |
| EmisVeteranStatus | nil | 306.324 |
| GI | /gids/v0/calculator/constants| 30.060ms |
| GI | /gids/v0/institution_programs| 48.959ms |
| GI | /gids/v0/institution_programs/autocomplete| 20.257ms |
| GI | gids/v0/institutions| 114.732 m |
| GI | /gids/v0/institutions/autocomplete| 27.919ms |
| GI | /gids/v0/institutions/xxx | 116.994ms |
| GI | /gids/v0/zipcode_rates/xxx | 23.855ms |
| GIBFT |  | 351.698ms |
| HCA |  | 1.682s |
| MHVAcctCreation | No data | No data |
| MVI |  | 806.469ms |
| OKTA | No data | No data |
| PPMS | /v1.0/PlaceOfServiceLocator| 3.255s |
| PPMS | /v1.0/ProviderLocator| 1.888s |
| PPMS | /v1.0/Specialties| 1.912s |
| PPMS | /v1.0/xxx| 1.087s |
| PPMS | /v1.0/xxx/ProviderServices| 1.029s |
| Preneeds |  | 1.690s |
| Rx | /mhv-api/patient/v1/account/register| 3.643 s |
| Rx | /mhv-api/patient/v1/account/upgrade| 1.379 s |
| Rx | /mhv-api/patient/v1/bluebutton/geteligibledataclass| 657.903 ms |
| Rx | /mhv-api/patient/v1/prescription/getactiverx| 3.249s |
| Rx | /mhv-api/patient/v1/session | 922.880ms |
| SM | No data | No data |
| Search/Results | No data | No data |
| VAOS | /appointments/v1/patients/xxx/appointments | 1.553s |
| VAOS | /cdw/v2/facilities/xxx/clinics | No data |
| VAOS | /mvi/v1/patients/session/identifiers.json | 193.145ms |
| VAOS | /users/v2/session | No data |
| VAOS | var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/xxx/appointments | 797.387ms |
| VAOS | var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions | No data |
| VAOS | /var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/parent-sites | 477.130ms |
| VAOS | /var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/ICN/xxx/booked-cc-appointments | No data |
| VAOS | /var/VeteranAppointmentRequestService/v4/rest/facility-service/supported-facilities | 39.131ms |
| VHA_Access_PWT | No data | No data |
| VHA_Access_SHEP | No data | No data |
| VIC2 | No data | No data |
| Vets360/ContactInformation | No data | No data |

### `vets-api` SLOs


### SLO Product/Leadership Reporting
#### Ideas
* [Product Tool Prototype](https://department-of-veterans-affairs.github.io/product-tool/)
    * [Slack Thread](https://dsva.slack.com/archives/CKCRMLGAC/p1576515397005300)

* Exporting Grafana graphs
    * Snapshot Export
    * CSV or other format 
    * It looks like the product tool mock is expecting a Grafana chart
    
* Defining a Histogram with SLO requirements for expected request percentiles: https://prometheus.io/docs/practices/histograms/#apdex-score

* Average Request Times: http://grafana.vfs.va.gov/d/Dp_Z5xfWk/backend-service-report-copy-request-timing?orgId=1&from=now-6h&to=now (Todo: need to report on a per endpoint basis)
    

### Other
* [ZH Ticket](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/4162)
* [Bucket/Histogram Information](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/roles/revproxy-configure/files/prometheus.lua)

#### Todo/Questions
* New Source-App Header may be useful
* Report on % Downtime
* Breakers %
* How to report on number of users affected?
* Do we currently have Sentry or PagerDuty alerts when request time latency goes above a certain threshold? 
* Where are we defining vets-api SLOs as of now?
* Do we have a risk analysis template yet? 

#### End Goals
* The product/leadership audience won't need to know request times exact times
* Ex graph: Need to know if an SLO is green or red (Are request times currently meeting our defined benchmarks?)
* For developers: We could link to a grafana graph

#### Future/Other:
* A reporting tool 
	* 30 day metrics
	* 1 day metrics — more detailed data if SLO objectives were met or not
* Persist metrics for a longer amount of time, aggregate the data (currently 14 days?)
* Possibly report less prometheus metrics (comb through ones that we don’t use)
* Reporting vets-api metrics (external service request time - total request time)
* Answer "is X service healthy right now?" or "is Y product healthy right now?"
* Add SLI templates to the onboarding process/code reviews 
* Add risk analysis process to technical process


## Technical Decisions
* We will update `vets-api` codebase to utilize Faraday ActiveSupport notifications for request time instrumentation 
	* [Faraday request time instrumentation via ActiveSupport Notification subscription](http://dpsk.github.io/blog/2013/10/01/track-request-time-with-the-faraday/)
	
* Dicsussion points:
	* Possibly go with a nosql solution (DynamoDB)
		* We can create tables that are week/monthly based  
		* Table name would be the name of the month
		* Tables needed: Objectives/SLOs, Historical values (week or monthly based)
		* Table foreign keys and relationships aren't necessary
	* Use s3 to store a file in which when accessed, could trigger the curl command to generate a report
	* [Do something similar to the defintions.yml file here from this example](https://github.com/department-of-veterans-affairs/devops/tree/ac6318670a49213c4d01b3d9a4a3c385d099c94e/lighthouse/reporting/monthly_sla/report)

## Product Decisions

## Team
- VA Digital Strategist(s):
- Product Manager: Alex Pappas
- Design Lead:
- Eng Lead:
- Engineers: Bill Ryan, Lindsey Hattamer, Keifer Furzland, Phillip Becker
- Screenshots

## Before

## After

