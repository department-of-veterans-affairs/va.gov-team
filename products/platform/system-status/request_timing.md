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


## Assumptions

## Questions
* How can we report on number of users affected?
* Since SLOs are not currently defined for external services, what other metrics can we use to report a red/green status per service? (Possibly use latency averages?)
* Do we currently have Sentry or PagerDuty alerts when request time latency goes above a certain threshold?

## Requirements

### In Scope


### Out of Scope


## Solution Approach


## Value Propositions


## KPIs

# Implementation Info

## Status

## Discovery

### Background
Existing Prometheus metrics supply us with relevant request timing data and averages for vets-api and external service calls. Metrics with a visual representation can be found within our Grafana dashboards (listed below). There are many existing prometheus metrics which can aid in a full picture representation of http requests from vets-api => external services, which can display a detailed breakdown of request timing. Such metrics could assist in the escalation process when getting issues to the responsible teams. 

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

#### WIP Histogram Quantile Graph
* [95% of request times are served within](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?orgId=1)

#### Latency Averages (still need to split up by endpoint)
* [Current Averages/External service](http://grafana.vfs.va.gov/d/Dp_Z5xfWk/backend-service-report-copy-request-timing?orgId=1&from=now-5m&to=now&var-service=EVSS%2FCommon&var-service=EVSS%2FDocuments&var-service=Search%2FResults)
* [Request Time Averages Per External Service and Enpoint](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?orgId=1&fullscreen&panelId=18)


### External Service SLOs for request times (per service)
Pre defined benchmarking for external service request times will need to be specified in order to assess http request timing metrics. The devops repo may have some insight in relation to external service request timing SLOs.

SLOs are currently undefined for external service request times. It was decided that the best approach/ in addition to SLO creation may be to expose current request time averages per external service and endpoint. (A new grafana chart is currently under construction to expose RT averages).

Request Time percentile information will be a useful metric to report on as well. Ex: 90% of request times are below 300ms with 10% being above 300ms 

#### Services
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

### Vets-API SLOs
TODO


### How to Report metrics (ex: Product or Leadership)
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
* ActiveSupport notifications for request time instrumentation 
	* [Faraday request time instrumentation via ActiveSupport Notification subscription](http://dpsk.github.io/blog/2013/10/01/track-request-time-with-the-faraday/)

## Technical Decisions

## Product Decisions

## Team
- VA Digital Strategist(s):
- Product Manager:
- Design Lead:
- Eng Lead:
- Engineers:
- Screenshots

## Before

## After

