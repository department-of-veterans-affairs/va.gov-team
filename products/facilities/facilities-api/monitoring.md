# Facilities API monitoring


### Vets-API /facilities_api/v2/va (lighthouse v1) controller: rate limit
https://vagov.ddog-gov.com/monitors/161751

Monitors the api rack request from facilities_api/v2/va every minute.
  - Warning currently set at 3500 req/minute and alert at 3900 req/minute
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.
 
 MITIGATION:
  - Flag the increased API traffic in #cms-lighthouse channel so Lighthouse can verify if traffic looks suspicious.
  - If traffic seems valid, follow instructions in [facilities-api docs to request a rate limit increase](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api/README.md#request-api-limit-increase).

More information on rate limits for this API user can be found in [facilities-api docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api/README.md#lighthouse-api-userkey).

### Vets-API VA Facilities Controller (v1 and v2): 500 errors
https://vagov.ddog-gov.com/monitors/164800

Monitors the api rack request from facilities_api/v2/va for 500 errors every minute.
  - This determines if errors on the endpoint are above 5/minute for a warning and 15 for an alert.
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.

500 errors may be due to issues at the vets-api level, with requests not getting through, or at the Lighthouse level, with valid calls returning 500. Check first for [TIC latency events ](https://vagov.ddog-gov.com/dashboard/q5b-hdg-qf6/tic-gateway-status-and-latency?refresh_mode=sliding&view=spans&from_ts=1705434183133&to_ts=1705437783133&live=true) that may mean traffic is stopping at the vets-api and not making it out to LIghthouse.  If no TIC latency, share representative errors with Lighthouse in #cms-lighthouse for further investigation. 

### Vets-API CCP Controller: 5xx errors
https://vagov.ddog-gov.com/monitors/168062

Monitors the api rack request from facilities_api/v1/ccp and facilities_api/v2/ccp for 500 errors every minute.
  - This determines if errors on the endpoint are above 15/minute for a warning and 25 for an alert.
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.

### Monitor for 401s on Vets-API requested by Facilities Source
https://vagov.ddog-gov.com/monitors/174791
- This is the only source of 401s monitored for facilities related data on Vets-API.
- This was added after [a slack thread](https://dsva.slack.com/archives/CJ162GDDJ/p1699018711640869) was monitoring 401s noted several spikes.
- The rollup count per hour is still in flux for alerting because the historical preview is not equal to the alerting real-time values.
- Right now there is a warning level of 105/hour and alert at 115/hour, but this will change.

**Why /v1/facilities/va and not /facilities_api/v1/va**
In Datadog, /facilities_api/v1/va yields the same data /v1/facilities/va does. The endpoint we use in the app is /v1/facilities/va and so for clarity's sake, this metric source was used.
