# Platform Request Timing
## Communications
GitHub Label:

Slack channel:

Product POCs: Alex Pappas

Stakeholders:

## The Problem

## User Goals


## Business Goals


## Assumptions


## Questions


## Requirements

### In Scope


### Out of Scope


## Solution Approach


## Value Propositions


## KPIs

# Implementation Info

## Status

## Discovery

## Background
Existing Prometheus metrics supply us with relevant request timing data and averages for vets-api and external service calls. Metrics with a visual representation can be found within our Grafana dashboards (listed below). There are many existing prometheus metrics which can aid in a full picture representation of http requests from vets-api => external services, which can display a detailed breakdown of request timing. Such metrics could assist in the escalation process when getting issues to the responsible teams. 

The [Product Tool Prototype](https://department-of-veterans-affairs.github.io/product-tool/) defines a "Backend Systems" graph which could benefit from current breakers metrics from prometheus which define [30 day average service up times](https://hackmd.io/boftAFDCSNGIJhMYwe5UDQ?both#Breakers-Service-up---30-day-average).

## Existing Metrics - [Dashboard](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?from=now-3h&to=now)

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


## External Service SLOs for request times (per service)
Pre defined benchmarking for external service request times will need to be specified in order to assess http request timing metrics. The devops repo may have some insight in relation to external service request timing SLOs.

#### Services
* Appeals
* Central Mail
* EVSS/Claims
* EVSS/Common
* EVSS/Documents
* EVSS/GiBillStatus
* EVSS/Letters
* EVSS/PCIUAddress
* EmisMilitaryInformation
* GI
* GIBFT
* HCA
* MVI
* OKTA
* PPMS
* Preneeds
* Rx
* Search
* Vets360
* VHA_Access_PWT

## Vets-API SLOs
TODO


## How to Report metrics (ex: Product or Leadership)
#### Ideas
* [Product Tool Prototype](https://department-of-veterans-affairs.github.io/product-tool/)
    * [Slack Thread](https://dsva.slack.com/archives/CKCRMLGAC/p1576515397005300)

* Exporting Grafana graphs
    * Snapshot Export
    * CSV or other format 
    * It looks like the product tool mock is expecting a Grafana chart
    

## Other
* [ZH Ticket](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/4162)

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

