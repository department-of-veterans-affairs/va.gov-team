# VA.gov Site Search Monitoring

## How to check Search.gov health

Per Search.gov we have 2 ways to check their status: 
1. https://search.usa.gov/healthcheck - returns `OK` if the API is up
2. https://search.gov/status.html - Infrequently updated, and not typically updated live during an outage


## DataDog Monitoring

### [Synthetics] Search.gov - Healthcheck
- Sends a ping to the Search.gov uptime endpoint every minute. A negative response indicates an outage, and a positive response indicates uptime. Latency up to 7 seconds observed but should not error the monitor.
- [View Monitor](https://vagov.ddog-gov.com/monitors/217076?view=spans)
- [View Synthetics Details](https://vagov.ddog-gov.com/synthetics/details/zs3-wcj-xqy?from_ts=1713444301151&to_ts=1713447901151&live=true)

### Search.gov - vets-api Error due to 503 Code returned from search.gov
- Monitors error rates for vets-api related to 503 errors from Search.gov.
- [View Monitor](https://vagov.ddog-gov.com/monitors/210576?view=spans)

#### Triage
1. Check https://search.gov/status.html for any status updates. (They don't maintain it much, not fully accurate, but good to check just in case)
2. Check if the Search.gov API endpoint is up / responsive by trying to `curl` the endpoint. Access key will be required to get a successful response, but even a validation error of `{"errors":["access_key is invalid"]}%` indicates the endpoint is alive:
   - Existing endpoint: https://search.usa.gov/api/v2/results/i14y
   - New endpoint we'll use after [#18736](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18736) is resolved: https://api.gsa.gov/technology/searchgov/v2/results/i14y
   - Example curl: 
```
curl -G "https://search.usa.gov/api/v2/search/i14y" \
     --data-urlencode "affiliate=va" \
     --data-urlencode "access_key=none" \
     --data-urlencode "query=verteran" \
     --data-urlencode "offset=0" \
     --data-urlencode "limit=10"
```
3. Check Search APM in datadog for the [SearchController resource](https://vagov.ddog-gov.com/apm/resource/search/rack.request/72b7d62abdbc2323?query=env%3Aeks-prod%20operation_name%3Arack.request%20service%3Asearch&env=eks-prod&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3AserviceAndInferred%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1740501980089&end=1740505580089&paused=false). Narrow to the error window, and under "Deployments" check the Error Rate column. If error rate is >40%: 
    - Enable the Search maintenance flipper: https://api.va.gov/flipper/features/search_gov_maintenance
    - Contact Search.gov: search@gsa.gov, cc PO / PM / DM. Include timing when outage started, and ask for any details about Search.gov outage or maintenance that might have led to our outage. 
    

### VA.gov Might Be Experiencing Abnormal Usage Patterns

#### Search Rate Anomaly
- Monitors anomalies in the average search rate success (200 responses) at the `v0/search` API endpoint.
- [View Monitor](https://vagov.ddog-gov.com/monitors/186811)

#### VA Search Usage - No Calls to v0/search vets-api
- Alerts if there are no calls to `v0/search` within the last 5 minutes, indicating possible complete downtime of the `vets-api`.
- [View Monitor](https://vagov.ddog-gov.com/monitors/189936?view=spans)


#### Search.gov - vets-api error due to 429 code returned from search.gov (rate limiting)
- Errors when we receive 1+ rate limit errors (429) from Search.gov [View Monitor](https://vagov.ddog-gov.com/monitors/287522)

Mitigation if warn/error: 
* Enable the Search.gov maintenance Flipper, which will warn Veterans that search may fail: https://api.va.gov/flipper/features/search_gov_maintenance
* Post a note to the #public-websites-dd-search channel so others know you're taking follow up steps
* Email search@gsa.gov immediately to request API rate limit increase, and cc PO / PM / DM

##### Triage
- Requires investigation.

### VA.gov is Experiencing High Error Rates
#### VA.gov - Search Browser Test
- Simulates user interactions with the VA.gov search feature to check operational status.
- [View Monitor](https://vagov.ddog-gov.com/monitors/88918)
- [View Synthetics Test](https://vagov.ddog-gov.com/synthetics/details/nb3-hf7-68y?from_ts=1713443896069&to_ts=1713447496069&live=true)

#### VA.gov search - vets-api success rate below threshold
- Ensures the `v0/search` API endpoint returns success (200) responses at an expected rate of 97% or higher.
- [View Monitor](https://vagov.ddog-gov.com/monitors/169139)

##### Triage
- Investigate by viewing the relevant timeframe and checking `vets-api` for errors or latency issues. Ensure no UI changes have affected components that impact searches.

## Adrian's Triage Video
[Watch Video](https://us06web.zoom.us/rec/play/1Ea8wq1sRg2QssQox4fJ5TICQZPxBYQq05VncjI0Hyl8-gnao9RbxHQL1rNo1yI9K2yV63MAN9vXVhPh.LOjbjqtrOAjdoQFh?canPlayFromShare=true&from=my_recording&startTime=1698786445000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FE5dbb6Ewhi7ILpS2qMwZ1WmEnRa1caieprd3UEQWmlTVGCSKSKCORZeFrodBHPI.o6MlyTOrLC1En0z1%3FstartTime%3D1698786445000)
- Passcode: 55$kzl1+
- Follow the instructions to analyze and troubleshoot specific monitor alarms effectively.
  - Scroll down to Status & History. Click-drag and highlight the red or orange warn/error timeframe to zoom and highlight it.
  - This will modify the date/timestamp in the "UTC" field right above the toolbar. Click in that field to highlight / copy the timeframe for use on other screens.
  - Go to the [APM Home](https://vagov.ddog-gov.com/apm/home?env=eks-prod), then navigate to `vets-api`, and paste the timeframe to look for any significant errors that might indicate latency issues.
  - Also, go to the [search operations](https://vagov.ddog-gov.com/apm/services/search/operations/rack.request/resources?env=eks-prod&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&view=spans&start=1704213833501&end=1704217433501&paused=false) and paste the timeframe to check for error states, API response errors, or logs.
