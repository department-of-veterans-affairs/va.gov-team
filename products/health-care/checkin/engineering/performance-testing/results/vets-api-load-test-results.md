# vets-api Load Test Results

## Overview

This document summarizes the results of the load testing done for vets-api subsystem as detailed in the performance test strategy outlined [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/performance-testing/website-api-perf-testing.md). The tests were run in vets-api Staging environment at 50% as well as 100% of the peak projected load. We monitored the system performance during the tests, as well as the response times for different endpoints and error rates. In this document, we we provide the analysis as well as the follow up questions to be discussed with platform team and recommendations for next steps.

## Test Scenarios

The Veteran facing Check-in experience includes:

- day-of check-in: Veterans check in to their appointment within a 30 minute window of their appointment time using a mobile device
- pre check-in: Veterans get a reminder link 7 days before their appointment and have an opportunity to confirm their demographics/NOK information

Both of these scenarios are supported by endpoints within vets-api. These endpoints are:

- GET/POST /check_in/v2/sessions: low-risk authentication
- GET/POST /check_in/v2/patient_check_ins: get and update patient check-in data
- GET/POST /check_in/v2/pre_check_ins: get and update pre check-in data
- PATCH /check_in/v2/demographics: confirm demographics data

## Load Profile

The load profile for the load tests was calculated based on appointments data for the week of 4/22/2022 (for check-in), as well as the outgoing text messages for a day in that week (for pre check-in). Based on that data, there was a peak of 35,260 check-ins per hour and 145,000 pre check-ins per hour. This translates to a TPS (transactions per second) load of:

| Scenario | Peak (1x) TPS | 0.5x TPS |
| --- | --- | --- |
| Check-in | 10 | 5 |
| Pre check-in | 40 | 20 |

The table below translates that load to the individual endpoints within vets-api check-in:

| endpoint | Peak (1x) RPS | 0.5x RPS |
| --- | --- | --- |
| GET /sessions | 50 | 25 |
| POST /sessions | 50 | 25 |
| GET /patient_check_ins | 10 | 5 |
| PATCH /demographics | 10 | 5 |
| POST /patient_check_ins | 10 | 5 |
| GET /pre_check_ins | 40 | 20 |
| POST /pre_check_ins | 40 | 20 |
| Total | 210 | 105 |

## Results Summary

We initially ran a test at 0.5x the peak projected load to assess and analyze the system performance before subjecting it to peak load. All tests were run with downstream services (LoROTA/CHIP) responses mocked using Betamocks. For each mocked endpoint, we configured a response delay equal to average response time observed in production for that endpoint. Following that test, we ran another test with 1x the peak load.

### **50% Load Test**

As mentioned above, this test was run at 50% of peak load.

| Scenario     | 0.5x TPS |
| ------------ | -------- |
| Check-in     | 5        |
| Pre check-in | 20       |
- Duration: [60 Minutes](https://grafana.vfs.va.gov/d/000000017/vets-api?orgId=1&var-data_source=Prometheus%20(Staging)&from=1655417700000&to=1655423159000)
- Execution Day/Time: Jun 16, 2022 / 3:29 PM to 4:29 PM

We observed the vets-api system performance in staging during the test. At the time of the test, staging vets-api environment had 6 instances running and each instance experienced an increased CPU usage by ~10-12%. There was a corresponding increase in network throughput and memory utilization of each instance as well. However, the performance during the test was stable and we didn’t notice any consistent degradation.

| ![Vets-api Server CPU](https://user-images.githubusercontent.com/1310524/175836874-5c13af6b-5225-46b1-9ceb-bafe1836b518.png) | ![Vets-api Server Network Throughput](https://user-images.githubusercontent.com/1310524/175837355-1fc6e9ec-8c0c-4cc2-b0b5-e4861131da4e.png) |
|:--:|:--:|
| Vets-api Server CPU | Vets-api Server Network Throughput |

| ![Vets-api Memory Utilization](https://user-images.githubusercontent.com/1310524/175837711-5f00a687-2cde-43a5-bcfe-64682a259634.png) | ![Requests per minute](https://user-images.githubusercontent.com/1310524/175837423-e1a74edf-d695-414c-bf9c-f5134dc607ce.png) |
|:--:|:--:|
| Vets-api Memory Utilization | Requests per minute |

In terms of puma thread pool and backlog, we observed the capacity decrease and stabilize at ~20 available threads with the load (each puma instance is configured with 40 available threads). There were occasional backlog buildup as well (1-3 requests) but overall, the server instances were able to handle the 50% load.

| ![Puma Thread Pool Capacity](https://user-images.githubusercontent.com/1310524/175837790-392003b0-a8c5-43e3-ae91-f425f6bb9963.png) | ![Puma Request Backlog](https://user-images.githubusercontent.com/1310524/175837793-a5778dfe-094d-4470-91c1-fa17aa8803aa.png) |
|:--:|:--:|
| Puma Thread Pool Capacity | Puma Request Backlog |

### **100% Load Test**

This test was run at 100% of peak projected load. We planned to run the test for a duration of 1 hour but saw severe degradation in server performance as soon as the test started, and decided to stop the test within 5 minutes.

| Scenario     | 1x TPS |
| ------------ | ------ |
| Check-in     | 10     |
| Pre check-in | 40     |
- Duration: [5 Minutes](https://grafana.vfs.va.gov/d/000000017/vets-api?orgId=1&var-data_source=Prometheus%20(Staging)&from=1655934300000&to=1655935200000)
- Execution Day/Time: Jun 22,2022 / 2:49 PM to 2:54 PM

In terms of vets-api system performance, we saw an expected increase in server CPU since this test put significant load on the system. For some server instances, the CPU jumped to 60-70%.

| ![Vets-api Server CPU](https://user-images.githubusercontent.com/1310524/175838035-8e8e0be5-8365-4d90-87ae-f4512b33ea79.png) | ![Vets-api Server Network Throughput](https://user-images.githubusercontent.com/1310524/175838033-c2350606-8790-4898-8d86-26e9f7ff0ee9.png) |
|:--:|:--:|
| Vets-api Server CPU | Vets-api Server Network Throughput |

| ![Vets-api Memory Utilization](https://user-images.githubusercontent.com/1310524/175838068-3cbfaf42-e8f6-45aa-ae66-60a4af26edf0.png) | ![Requests per minute](https://user-images.githubusercontent.com/1310524/175838067-de0ebc3f-6109-4239-a423-7cab36ab6621.png) |
|:--:|:--:|
| Vets-api Memory Utilization | Requests per minute |

We observed that Puma ran out of available threads and correspondingly, the request backlog started to increase. **This showed that the system wasn’t able to handle the 1x load.**

The graphs below show the data for an extended period after the load was stopped to provide analysis of recovery after the test was stopped.

| ![Puma Thread Pool Capacity](https://user-images.githubusercontent.com/1310524/175838098-cfbb7352-4a00-42a5-8c6f-e667dbedf37d.png) | ![Puma Request Backlog](https://user-images.githubusercontent.com/1310524/175838097-89149798-f15b-4d37-8a88-963638d34529.png) |
|:--:|:--:|
| Puma Thread Pool Capacity | Puma Request Backlog |

## Assumptions

* We should note that the 1x load used for the tests is the peak projected load when all VISNs are enabled and close to 100% of check-ins and pre check-ins are done through mobile devices. We currently are in the process of enabling mobile check-in and are seeing increased usage but it is still less than 0.5% of the peak projected load (as of 6/26/2022 we have a [peak](https://vagov.ddog-gov.com/dashboard/zps-5fk-azw/check-in-vets-api?from_ts=1654066800000&to_ts=1656282780000&live=false) of about ~1000 check-ins and ~2500 pre check-ins on a given day). We currently don’t have estimates on how quick the actual ramp up of mobile check-ins will be and it’s something we’ll continue to monitor.

    /todo provide link to deployment schedule/status

* We should also note that above load calculations assume that Veterans go through both check-in and pre check-in scenarios to completion. However, in real life we’re seeing some % of scenarios being abandoned within an intermediate step due to various reasons. The impact is that the actual production load on vets-api is going to be somewhat lower than estimated peak.

* A decision we made when running these tests was to exclude any downstream services by mocking the calls, adding an average response delay and isolating these tests to vets-api only. This also let us avoid the complexity of setting up test data in downstream systems like VistA. But it also meant that these tests were run in a simulated ideal scenario, where all downstream services perform well under load. In real world, we see stochastic delays and/or errors due to multiple downstream services/systems involved, which may result in vets-api server threads being held for longer duration, or other issues due to downstream errors.

* Lastly, these results are based on the current check-in functionality. We have plans to add more features to the check-in scenarios (ability to update demographics, BTSSS) and that will create a need to revisit the load tests and the recommendations.

## Follow-ups/Recommendation

These tests were run in Staging environment, and there are some substantial differences in that environment as compared to Prod.

1. Since vets-api serves as a monolith that provides functionality for many applications, Production server instances see a large sustained load. Currently, we see a consistent CPU usage of ~30-40% across all server instances in Production environment.
    
    ![prod_cpu](https://user-images.githubusercontent.com/1310524/175838171-709b1ce9-cf19-4df1-8267-63d29c6341b3.png)
    
2. The number of running server instances in Production is also more. Currently, there are 16 running instances in Production as compared to 6 in Staging. 

Next steps for our team are to share the results with the platform team and discuss the outcomes, and understand what processes they have in place to monitor and handle the production load.

### Questions

- **Puma Server Configuration**
    - How are the number of workers and threads configured for the rails server? Is it the maximum that can be handled by the host?
- **Host Scaling**
    - How are the hosts scaled up to handle the increasing requests? Is it automatic or manual?
    - When does on-call get notified of the increase in traffic and the need for scaling up the fleet?
- **Alerts/Notifications**
    - Does production vets-api have alerts configured to notify appropriate team(s) in case of anomalies (unexpected load spike etc)?
