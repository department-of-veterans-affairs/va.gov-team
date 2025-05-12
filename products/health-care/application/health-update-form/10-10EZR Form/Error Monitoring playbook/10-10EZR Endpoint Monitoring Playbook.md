# 10-10EZR Endpoint Monitoring Playbook 
_last updated: 4/15/2025_  

## Overview
- This document outlines the current monitors in effect for the 10-10EZR to ensure we capture errors, failures and potential patterns of inconsistent activity. Each monitor has the steps listed to follow in addressing, triaging and implementing a solution, as well as notifying all required stakeholders.
- ZSF Dashboard ALEX INSERT LINKS WHEN THIS IS DONE
- [ZSF Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/10-10EZR%20Zero%20Silent%20Failure%20Checklist.MD)

## Audience 
team members responding to Datadog ["Example App errors"](https://vagov.ddog-gov.com/monitors/#####) monitor alerts INSERT LINK

## Monitor: 1010EZ submission job has failed with no retries left
Slack & Email Alert: "Triggered: 1010EZ submission job has failed with no retries left"

- One application has tried to resubmit over the past 25 hours and has exhausted all retries, resulting in a failure.

# Required access
_Access required to complete the steps in this playbook.  Intended for readers to review in advance.  Example:_   
```
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
```   

# Steps
_Diagnosis or action steps to verify the issue, resolve the problem, and/or notify the correct people.  Example:_  
```
- Open a tracking issue at [va.gov-teams](https://github.com/department-of-veterans-affairs/va.gov-team/issues)   
- Review the recent list of notifications for this error either in the #health-tools-1010-apm slack channel
  or on the ["Requests, Errors, and latency dashboard"](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20-status%3Aok%20resource_name%3A%28%22HCA%3A%3ASubmissionJob%22%20OR%20%22HCA%3A%3AEzrSubmissionJob%22%29&agg_m=count&agg_m_source=base&agg_t=count&cols=service%2Cresource_name%2C%40duration%2C%40http.method%2C%40http.status_code%2C%40_span.count%2C%40_duration.by_service&fromUser=false&historicalData=true&query_translation_version=v0&saved-view-id=1736&spanType=service-entry&storage=hot&traceQuery=&view=spans&viz=stream&start=1744649492211&end=1744735892211&paused=false) page for frequency and error count.
- Check the [Sample App Tool](https://vagov.ddog-gov.com/dashboard/[...]/sample-app) Dashboard.  In particular
  check to see what controllers & methods are having errors, what percentage of messages are errors, and if
  there are any other anomalies.
- Check to see if any anomalies relate to a recent release (location for the list TBD), if there is a relation
  between a chance in traffic or errors
  and a release contact the Sample App team at Slack channel [#sample-app-slack-channel](https://dsva.slack.com/archives/########).
  If the issue appears to relate to a specific release you can stop here.  
- v0::thiscontroller and v0::thatcontroller are both related services.  For a recent group of high errors 
  associated with these controllers contact the Backend production support team in the [#example-backend-prod-support] 
  (https://dsva.slack.com/archives/[.....]) channel.  I recommend specifically calling out @Example Administrator
  and @Another Example Administrator specifically.  Tell them what application you support, the issues you are seeing
  Post a link to your question or comment in the [#their-slack-channel](https://dsva.slack.com/archives/[...]) for awareness.
- To drill into details on a specific error at a specific time, click on a bar in the "Click on items to View Related Traces"
  widget at the bottom of the Dashboard.  
```


# Title, including Monitor name if appropriate
_last updated: date_  

## Audience 
_Who this document is written for.  For instance: `team members responding to Datadog ["Example App errors"](https://vagov.ddog-gov.com/monitors/#####) monitor alerts`_  

# Required access
_Access required to complete the steps in this playbook.  Intended for readers to review in advance.  Example:_   
```
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
```   

# Steps
_Diagnosis or action steps to verify the issue, resolve the problem, and/or notify the correct people.  Example:_  
```
- Open a tracking issue at [va.gov-teams](https://github.com/department-of-veterans-affairs/va.gov-team/issues)   
- Review the recent list of notifications for this error either in the #[...] slack channel
  or on the ["Sample App errors"](https://vagov.ddog-gov.com/monitors/####) page for frequency and error count.
- Check the [Sample App Tool](https://vagov.ddog-gov.com/dashboard/[...]/sample-app) Dashboard.  In particular
  check to see what controllers & methods are having errors, what percentage of messages are errors, and if
  there are any other anomalies.
- Check to see if any anomalies relate to a recent release (location for the list TBD), if there is a relation
  between a chance in traffic or errors
  and a release contact the Sample App team at Slack channel [#sample-app-slack-channel](https://dsva.slack.com/archives/########).
  If the issue appears to relate to a specific release you can stop here.  
- v0::thiscontroller and v0::thatcontroller are both related services.  For a recent group of high errors 
  associated with these controllers contact the Backend production support team in the [#example-backend-prod-support] 
  (https://dsva.slack.com/archives/[.....]) channel.  I recommend specifically calling out @Example Administrator
  and @Another Example Administrator specifically.  Tell them what application you support, the issues you are seeing
  Post a link to your question or comment in the [#their-slack-channel](https://dsva.slack.com/archives/[...]) for awareness.
- To drill into details on a specific error at a specific time, click on a bar in the "Click on items to View Related Traces"
  widget at the bottom of the Dashboard.  
```
