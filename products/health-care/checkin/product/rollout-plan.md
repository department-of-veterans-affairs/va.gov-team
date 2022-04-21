# 2022 Production Rollout Support

May 2nd 2022 will begin a staggered production roll out of eCheck-in and VSE-CS. Both products will be released to an average of 7 new VA stations per week, with the last week scheduled for August 22nd 2022. Refer [here](https://github.com/department-of-veterans-affairs/chip/blob/master/docs/2022-production-rollout-support.md#2022-production-rollout-support) for the exact schedule.

A dedicated 'Go Live' Microsoft Teams channel will be available during the first week of production for every new site. After the first week, sites will transition to utilize ServiceNow for all eCheck-in and VSE-CS product support. ServiceNow incidents will be funnelled initially to the Tier 2 queue/group called "Scheduling Support". Incidents will be subsequently routed to the "eCheck-in Vet Facing Apps" queue/group if determined to be issues with the front-end eCheck-in and Pre-Check-in applications or the vets-api API. 

SNOW Group: eCheckin Vet Facing Apps
Email: eCheckinVetFacingApps@va.gov

## Monitoring

A dedicated Engineer (with a backup) will be assigned to monitor all API's and be available to diagnose reported issues during the following hours of operation:

- Monday - Friday 
- 8:00 AM - 4:00 PM EST

Responsibilities include all of the following:

1. Actively monitoring [DataDog Check-in (vets-api) dashboard](https://app.datadoghq.com/dashboard/tmn-f5f-e9r/check-in-vets-api?from_ts=1649964338537&to_ts=1650569138537&live=true) for anomalies, errors, etc. 
2. Actively monitoring and responding to product inquiries received to the 'Go Live' Microsoft Teams channel
3. Actively monitoring and responding to product inquiries received to the DSVA Slack [check-in-go-live channel](https://app.slack.com/client/T03FECE8V/C02UP02HHGX)
4. Actively monitoring and managing the ServiceNow eCheck-in Vet Facing Applications group ticket queue as documented [here](https://github.com/department-of-veterans-affairs/chip/blob/master/docs/2022-production-rollout-support.md#servicenow-process). 
5. Actively communincating with the Product Manager and Delivery Manager to priortize issues, bugs and potential hotfixes 
6. Actively working with devops to monitor infrastructure (containers, database, concurrent lambda limits) for scalability

When the above responsibilities are met and development bandwidth is available, the Engineer will work on minor task or Sprint tickets.
