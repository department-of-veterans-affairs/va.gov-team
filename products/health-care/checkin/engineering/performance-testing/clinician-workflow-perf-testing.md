
## vista-api performance testing

![clinician workflow subsystem](./subsystems/subsystem_clinician-workflow.png "clinician workflow subsystem")

### Test Environment

Clinician Workflow is run in VAEC CMS account on ECS. We'll configure the staging cluster to be a scaled down version of production cluster for both app and sidekiq instances.

### Load Estimates

For Veteran facing check-in and pre check-in scenarios, Clinician Workflow APIs are called by CHIP to get/set patient demographics status, to update check in status of an appointment and to store the appointment summary.

Based on the data on appointments for the week of 4/22, we estimate a load of about 35k check-ins per hour assuming all stations have mobile check-in enabled and all appointments go through mobile check-in. See [Load Estimates](readme.md#load-estimates) for more details.

Based on the outgoing twilio messages and assuming the same load for mobile pre check-in reminders, we have an upper range of about 145k pre check-in hourly reminders.

Currently we don't have an estimates of the load on Clinician Workflow from Clinical Staff facing apps. The goal will be to run the load tests with an increasing load to find the bottlenecks and to find the capacity of the scaled down Staging cluster, which will provide guidance on the size of production cluster.

### Tools
We're currently looking into both [locust](https://locust.io/) and [K6](https://k6.io/open-source) for scripting and load generation. We will finalize the tool based on the ease of script creation, ease of setup/install in VAEC cloud and the ability to generate the desired load profile.

### Load Profile
Based on the current load estimates (see [above](#load-estimates)), here's the combined load profile for Clinician Workflow.

| **endpoint**                 | **requests per min** |
|------------------------------|----------------------|
| /patient_demographics_status | 7839                 |
| /appointments/…/summary      | 588                  |
| /appointments/.../checkins   | 588                  |

### Test Data Generation
Shane has created a node script to generate test appointments in VistA: https://github.com/shanemelliott/createAppts

### Monitoring

We will use DataDog to monitor system performance and resource utilization during the load test execution.

Clinician Workflow: https://tevi.ddog-gov.com/dashboard/bap-942-8fb/technical-dashboard---clinician-workflow
