# Facility Locator monitoring

## Datadog Dashboard
 - [Facilities Alerting Dashboard including Facility-Locator API resources](https://vagov.ddog-gov.com/dashboard/3vy-h6h-4ek/sitewide-facilities)

#### Grafana Dashboards
 - [VSP/Forward Proxy](http://grafana.vfs.va.gov/d/000000032/forward-proxy?orgId=1)
 - [Facility Locator(PPMS)](http://grafana.vfs.va.gov/d/000000048/facility-locator-ppms?orgId=1)

## Monitors for Facility-Locator and Facilities pages

**/v1/facilities/va and /facilities_api/v1/ccp/*** 
- [Joins CCP and Facility lookup because they both use the same consumer](https://vagov.ddog-gov.com/monitors/161751)
  - Warning currently set at 400 req/minute and alert at 450 req/minute
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.
**/v1/facilities/va**
- [Facility lookup 500 Errors](https://vagov.ddog-gov.com/monitors/164800)
  - This determines if errors on the endpoint are above 5/minute for a warning and 15 for an alert.
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.
**/facilities_api/v1/ccp/**
- [CCP lookup 500 Errors](https://vagov.ddog-gov.com/monitors/168062)
  - This determines if errors on the endpoint are above 5/minute for a warning and 15 for an alert.
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.

## Monitor for 401s on Vets-API requested by Facilities Source
[Monitor of 401s](https://vagov.ddog-gov.com/monitors/174791)
- This is the only source of 401s monitored for facilities related data on Vets-API.
- This was added after [a slack thread](https://dsva.slack.com/archives/CJ162GDDJ/p1699018711640869) was monitoring 401s noted several spikes.
- The rollup count per hour is still in flux for alerting because the historical preview is not equal to the alerting real-time values.
- Right now there is a warning level of 105/hour and alert at 115/hour, but this will change.

**Why /v1/facilities/va and not /facilities_api/v1/va**
In Datadog, /facilities_api/v1/va yields the same data /v1/facilities/va does. The endpoint we use in the app is /v1/facilities/va and so for clarity's sake, this metric source was used.
