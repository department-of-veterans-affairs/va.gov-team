# VA.gov site search monitoring

## Search rate anomaly
https://vagov.ddog-gov.com/monitors/186811

**What is:**
* Monitor that checks for calls to `v0/search` API endpoint every hour for anomalies in average search rate success(200 responses). 
* Alarms if calls fall below threshold of 10% of the average anomaly bounds
* Indicates if the overall volume of searches is down.

**Triage:**
Typically: No op. This is an indicator that Search.gov is returning an increased % of 503s. We can't do anything about that.
HOWEVER: if the outage / downtime is prolonged, we can file a Platform support request to enable a downtime in Pager Duty for the Search service, which will show a downtime notification to Veterans who try to use search.

## VA.gov success rate below threshold
https://vagov.ddog-gov.com/monitors/169139

What is: 
* Monitor that checks for 200 (success) responses from the `v0/search` API endpoint
* Alarms if success rates fall below 97%

[Video](https://us06web.zoom.us/rec/play/1Ea8wq1sRg2QssQox4fJ5TICQZPxBYQq05VncjI0Hyl8-gnao9RbxHQL1rNo1yI9K2yV63MAN9vXVhPh.LOjbjqtrOAjdoQFh?canPlayFromShare=true&from=my_recording&startTime=1698786445000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FE5dbb6Ewhi7ILpS2qMwZ1WmEnRa1caieprd3UEQWmlTVGCSKSKCORZeFrodBHPI.o6MlyTOrLC1En0z1%3FstartTime%3D1698786445000) where Adrian Rollett steps through some triage for this monitor
Passcode: 55$kzl1+

* Scroll down to Status & History. Click-drag and highlight the red or orange warn/error timeframe, to zoom/highlight it
* This will modify the date/timestamp in the "UTC" field right above the toolbar. Click in that field to highlight / copy the timeframe for use on other screens. 
* Go to https://vagov.ddog-gov.com/apm/home?env=eks-prod
  * Go to vets-api, paste the timeframe - look for any big picture errors that might indicate vets-api latency is the problem
  * Go to [search](https://vagov.ddog-gov.com/apm/services/search/operations/rack.request/resources?env=eks-prod&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21f%29%2Csublayer%3A%28slot%3A%28layers%3Aservice%29%2Cselected%3Apercentage%29%29%2Cversion%3A%211%29&view=spans&start=1704213833501&end=1704217433501&paused=false), paste the timeframe
* Check for error states / API response errors / logs


## Synthetic test: VA.gov - Search Browser Test
https://vagov.ddog-gov.com/synthetics/details/nb3-hf7-68y

**What is:** Browser test that runs steps:
* Navigates to va.gov
* "Click on button `Search`"
* Type text on input #search-header-dropdown-input
* Click on i "fas fa-solid fa-sm fa-search ..."
* Test text is present on the active page (test text = Results text"

If this test alarms, either Homepage didn't load (in which case Homepage monitors may also go off), or some steps in the search process fail. 

**Triage:**
* Click through to synthetic test, scroll to History, highlight red area that indicates failure timeframe
* Scroll down to Sample Runs, click Failed run to see which events in the test failed
* If Search didn't load / returned errors, check https://search.gov/status.html for Search.gov downtime
* If Search.gov is up, check other search monitors for anomalous traffic and open a Plat support ticket for help as needed

## VA Search Uxage - No calls to v0/search
https://vagov.ddog-gov.com/monitors/189936?view=spans

Metrics monitor that alarms if no calls to v0/search in the last 5 mins.
Should only be going off if vets-api is completely down. 

## Search.gov - [composit-error] forward proxy OR vets-api '503' OR search.gov Healthcheck
https://vagov.ddog-gov.com/monitors/214590

**What is:**
Composite monitor that contains 3 monitors, listed below.

**Triage:**
* If this goes off, it means search is down. We probably need a downtime alert, if search doesn't recover within X time

### Search.gov - Healthcheck 
Sends a ping to Search.gov uptime endpoint every minute (search.usa.gov/healthcheck). Negative response = outage. Positive reponse = Search.gov is up. We don't know how much to trust this uptime report.

### Search.gov - va forward Proxy Health Check
Checks the VA fwd proxy to see if it's up or down. That's the 2nd layer of traffic -- if search.gov is up but the fwdproxy is down, search calls will fail.

### Search.gov - vets-api error due to 503 code returned from search.gov
Checks error rates from vets-api search calls. 
 
## Slack Channels for Alerts
- #public-websites-monitoring
- #devops-alerts
