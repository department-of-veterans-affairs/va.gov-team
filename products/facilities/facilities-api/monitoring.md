# Facilities API monitoring


### Vets-API /facilities_api/v2/va (lighthouse v1) controller: rate limit
https://vagov.ddog-gov.com/monitors/161751

More information on rate limits for this API user can be found in [facilities-api docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api/README.md#lighthouse-api-userkey).

Monitors the api rack request from facilities_api/v2/va to Lighthouse every minute.
  - Warning currently set at 3500 req/minute and alert at 3900 req/minute
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack
 
 MITIGATION:
  - Flag the increased API traffic in #cms-lighthouse channel so Lighthouse can verify if traffic looks suspicious.
  - If traffic seems valid, follow instructions in [facilities-api docs to request a rate limit increase](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facilities-api/README.md#request-api-limit-increase).


### Vets-API VA Facilities Controller v2: 500 errors
https://vagov.ddog-gov.com/monitors/164800

Monitors the api rack request from facilities_api/v2/va for 500 errors every minute. 500 errors may be due to issues at the vets-api level, with requests not getting through, or at the Lighthouse level, with valid calls returning 500. 
  - This determines if errors on the endpoint are above 200/minute for a warning and 400/min for an alert.
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.

MITIGATION: 
* Check first for [TIC latency events ](https://vagov.ddog-gov.com/dashboard/q5b-hdg-qf6/tic-gateway-status-and-latency?refresh_mode=sliding&view=spans&from_ts=1705434183133&to_ts=1705437783133&live=true) that may mean traffic is stopping at the vets-api and not making it out to Lighthouse.
* If no TIC latency, share representative errors with Lighthouse in #cms-lighthouse for further investigation. 

### Vets-API CCP Controller (V1 and V2): 5xx errors
https://vagov.ddog-gov.com/monitors/168062

Monitors the api rack request from facilities_api/v1/ccp and facilities_api/v2/ccp for 500 errors every minute. 500 errors may be due to issues at the vets-api level, with requests not getting through, or at the PPMS level, with valid calls returning 500. 
  - This determines if errors on the endpoint are above 15/minute for a warning and 25 for an alert.
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.

MITIGATION: 
* Check first for [TIC latency events ](https://vagov.ddog-gov.com/dashboard/q5b-hdg-qf6/tic-gateway-status-and-latency?refresh_mode=sliding&view=spans&from_ts=1705434183133&to_ts=1705437783133&live=true) that may mean traffic is stopping at the vets-api and not making it out to PPMS.
* If no TIC latency, share representative errors with PPMS support further investigation. **TODO**: Add info on how to file PPMS SNOW ticket.

### 4xx response on facilities_api/v2/va by status
https://vagov.ddog-gov.com/monitors/235360?view=spans

Monitors the api rack request from facilities_api/v1/va every 5 minutes for 400 errors. 
  - This determines if errors on the endpoint are above 100 for a warning and 150 for an alert.
  - Warnings and Alerts sent to #facilities-monitoring on DSVA slack.

MITIGATION: 
1. Check status level and referrer in datadog (inspect traces, click log, check referrer)
    - If 403 check type in Sentry (CSRF, api_session token, etc)
    - If 429 check whether single source
2. Identify who responsible party for traffic is and whether it is a result of recent changes from a Facilities product
3. If it is a Facilities product, see if rollback or OOB is necessary @slack-Digital_Service__VA-facilities-monitoring

### Monitor for 401s on Vets-API requested by Facilities Source = DEPRECATED
https://vagov.ddog-gov.com/monitors/174791
- This is the only source of 401s monitored for facilities related data on Vets-API.
- This was added after [a slack thread](https://dsva.slack.com/archives/CJ162GDDJ/p1699018711640869) was monitoring 401s noted several spikes.
- The rollup count per hour is still in flux for alerting because the historical preview is not equal to the alerting real-time values.
- Right now there is a warning level of 105/hour and alert at 115/hour, but this will change.

This was removed in https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17791 but may need to be reinstated in https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18179

### Platform monitors
The Platform team also maintains a series of monitors for the Facilities-api controller: 
* [[Synthetics] GET vets-api /facilities_api/v2/va/:id (prod)](https://vagov.ddog-gov.com/monitors/91142?view=spans)
* [[Synthetics] GET vets-api /facilities_api/v2/va/:id (staging)](https://vagov.ddog-gov.com/monitors/91141)
* [[Synthetics] GET vets-api /facilities_api/v2/va/:id (dev)](https://vagov.ddog-gov.com/monitors/91136?view=spans)
* [[Synthetics] GET vets-api /facilities_api/v2/va/:id (sandbox)](https://vagov.ddog-gov.com/monitors/91140?view=spans)
* [[Synthetics] POST vets-api /facilities_api/v2/va (prod)](https://vagov.ddog-gov.com/monitors/91138?view=spans)
* [[Synthetics] POST vets-api /facilities_api/v2/va (dev)](https://vagov.ddog-gov.com/monitors/91139?view=spans)
* [[Synthetics] POST vets-api /facilities_api/v2/va (staging)](https://vagov.ddog-gov.com/monitors/91143?view=spans)
* [[Synthetics] POST vets-api /facilities_api/v2/va (sandbox)](https://vagov.ddog-gov.com/monitors/91137?view=spans)
