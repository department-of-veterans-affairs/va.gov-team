
04/18/2022 update:

vista-api application is a J2EE application running on WildFly application server and supports the APIs used by CHIP and Clinician Workflow. It's currently deployed on 2 Linux VMs in Denver data center. Andy/Shane are planning to add 2 more nodes (1 in PHI, 1 in ACC) to support the additional clinics going live this week and will be monitoring resource utilization in datadog.

Overall, there is a plan to have a total of 10 hosts for vista-api deployment.

Next steps:
- determine the estimate load for May rollout to VISN8
- run tests to assess the performance under load