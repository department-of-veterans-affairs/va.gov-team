# VA.gov Site Search Monitoring

## Table of Contents
1. [DataDog Monitoring](#datadog-monitoring)
   - [Search.gov is Down](#searchgov-is-down) - Monitors critical errors affecting Search.gov, including forward proxy failures and API issues.
   - [VA.gov Might Be Experiencing Abnormal Usage Patterns](#vagov-might-be-experiencing-abnormal-usage-patterns) - Tracks unusually low usage patterns that may indicate underlying system problems.
   - [VA.gov is Experiencing High Error Rates](#vagov-is-experiencing-high-error-rates) - Ensures the operational status of vets-api and the VA.gov user interface, monitoring for high error rates that might indicate outages.
2. [Adrian's Triage Video](#adrians-triage-video) - Provides a video walkthrough for triage processes related to these monitors.

## DataDog Monitoring

### Search.gov is Down
#### Composite Error: Forward Proxy, vets-api '503', or Search.gov Healthcheck
- [View Monitor](https://vagov.ddog-gov.com/monitors/214590)
- Slack Channels: `#public-websites-dd-search`

##### [Synthetics] Search.gov - Healthcheck
- Sends a ping to the Search.gov uptime endpoint every minute. A negative response indicates an outage, and a positive response indicates uptime. Latency up to 7 seconds observed but should not error the monitor.
- [View Monitor](https://vagov.ddog-gov.com/monitors/217076?view=spans)
- [View Synthetics Details](https://vagov.ddog-gov.com/synthetics/details/zs3-wcj-xqy?from_ts=1713444301151&to_ts=1713447901151&live=true)
- Timeframe: 5 min

##### Search.gov - VA Forward Proxy Health Check
- Checks for errors when the VA forward proxy contacts Search.gov.
- [View Monitor](https://vagov.ddog-gov.com/monitors/210512?view=spans)
- Query: `sum(last_5m):sum:haproxy.server.check.failures.total{proxy:search-gov_back}.as_count() > 1`
- Timeframe: 5 mins

##### Search.gov - vets-api Error due to 503 Code returned from search.gov
- Monitors error rates for vets-api related to 503 errors from Search.gov.
- [View Monitor](https://vagov.ddog-gov.com/monitors/210576?view=spans)
- Query: ```logs("service:vets-api @message_content:\"BackendServiceException: {:source=>\"Search::Service\", :code=>\"SEARCH_503\"}"").index("*").rollup("count").last("5m") > 1```
- Timeframe: 5 mins

**Triage:**
- Contact Search.gov if extended outage, update maintenance banner as needed.

### VA.gov Might Be Experiencing Abnormal Usage Patterns
#### VA Search Usage - [composite] - Abnormally Low Usage of VA Search
- [View Monitor](https://vagov.ddog-gov.com/monitors/217086?view=spans)
- Slack Channels: `#public-websites-dd-search`

##### Search Rate Anomaly
- Monitors anomalies in the average search rate success (200 responses) at the `v0/search` API endpoint.
- [View Monitor](https://vagov.ddog-gov.com/monitors/186811)
- Query: ```avg(last_1d):anomalies(avg:vets_api.statsd.api_rack_request{env:eks-prod ,controller:v0/search ,status:200}.as_count().rollup(sum, 300), 'agile', 3, direction='below', interval=300, alert_window='last_1h', seasonality='weekly', timezone='utc', count_default_zero='true') >= 0.51```
- Timeframe: 1 hour

##### VA Search Usage - No Calls to v0/search vets-api
- Alerts if there are no calls to `v0/search` within the last 5 minutes, indicating possible complete downtime of the `vets-api`.
- [View Monitor](https://vagov.ddog-gov.com/monitors/189936?view=spans)
- Query: ```sum(last_5m):sum:vets_api.statsd.api_rack_request{env:eks-prod, controller:v0/search}.as_count() <= 0```
- Timeframe: 5 min

**Triage:**
- Requires investigation.

### VA.gov is Experiencing High Error Rates
#### VA.gov - Search Browser Test
- Simulates user interactions with the VA.gov search feature to check operational status.
- [View Monitor](https://vagov.ddog-gov.com/monitors/88918)
- [View Synthetics Test](https://vagov.ddog-gov.com/synthetics/details/nb3-hf7-68y?from_ts=1713443896069&to_ts=1713447496069&live=true)
- Timeframe: 15 mins
- Slack Channels: `#public-websites-dd-search`

#### VA.gov search - vets-api success rate below threshold
- Ensures the `v0/search` API endpoint returns success (200) responses at an expected rate of 97% or higher.
- [View Monitor](https://vagov.ddog-gov.com/monitors/169139)
- Query: `sum(last_1h):(sum:vets_api.statsd.api_rack_request{env:eks-prod, controller:v0/search, status:200}.as_count().rollup(sum, 3600) / (sum:vets_api.statsd.api_rack_request{env:eks-prod, controller:v0/search, status:200}.as_count().rollup(sum, 3600) + sum:vets_api.statsd.api_rack_request{env:eks-prod, controller:v0/search, !status:200}.as_count().rollup(sum, 3600))) * 100 < 97`
- Alarms if success rates fall below 97%.
- Timeframe: 1 hour
- Slack Channels: `#public-websites-dd-search`

**Triage:**
- Investigate by viewing the relevant timeframe and checking `vets-api` for errors or latency issues. Ensure no UI changes have affected components that impact searches.

## Adrian's Triage Video
[Watch Video](https://us06web.zoom.us/rec/play/1Ea8wq1sRg2QssQox4fJ5TICQZPxBYQq05VncjI0Hyl8-gnao9RbxHQL1rNo1yI9K2yV63MAN9vXVhPh.LOjbjqtrOAjdoQFh?canPlayFromShare=true&from=my_recording&startTime=1698786445000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FE5dbb6Ewhi7ILpS2qMwZ1WmEnRa1caieprd3UEQWmlTVGCSKSKCORZeFrodBHPI.o6MlyTOrLC1En0z1%3FstartTime%3D1698786445000)
- Passcode: 55$kzl1+
- Follow the instructions to analyze and troubleshoot specific monitor alarms effectively.
  - Scroll down to Status & History. Click-drag and highlight the red or orange warn/error timeframe to zoom and highlight it.
  - This will modify the date/timestamp in the "UTC" field right above the toolbar. Click in that field to highlight / copy the timeframe for use on other screens.
  - Go to the [APM Home](https://vagov.ddog-gov.com/apm/home?env=eks-prod), then navigate to `vets-api`, and paste the timeframe to look for any significant errors that might indicate latency issues.
  - Also, go to the [search operations](https://vagov.ddog-gov.com/apm/services/search/operations/rack.request/resources?env=eks-prod&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&view=spans&start=1704213833501&end=1704217433501&paused=false) and paste the timeframe to check for error states, API response errors, or logs.
