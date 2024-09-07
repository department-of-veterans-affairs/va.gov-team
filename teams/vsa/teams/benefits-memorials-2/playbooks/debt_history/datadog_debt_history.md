# Debts Playbook: Datadog
_last updated: 9/6/24_  

## Audience 
Debt Resolution team members responding to Debt-related Datadog alerts

## Monitors
### Elevated Debt response
https://vagov.ddog-gov.com/monitors/243358

There is no action needed here. We've been experiencing a higher response time that will trigger errors and we are keeping tabs on them.

### High Error Rate
https://vagov.ddog-gov.com/monitors/170467

There is not much we've been able to do except ping the DMC team on Teams if this monitor stays in error for extended amount of time (2 hours).

## Dashboard
[Here is a link to the Debts group](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f?fromUser=false&refresh_mode=paused&view=spans&from_ts=1725578349436&to_ts=1725664749436&live=false&tile_focus=7532675980075440). Here you will find widgets with latency, cache rate, failure/success rate

# Required access
_Access required to complete the steps in this playbook. Intended for readers to review in advance.  Example:_   

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
   

# Steps
_Diagnosis or action steps to verify the issue, resolve the problem, and/or notify the correct people.  Example:_

- Review the recent list of notifications for this error either in the #debt-alerts slack channel
- Look into Datadog and verify the issue is with our 3rd party integration(DMC). You can use this link as a reference: [Debts controller Trace](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20operation_name%3Arails.action_controller%20resource_name%3A%22V0%3A%3ADebtsController%23index%22%20service%3Avets-api&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=true&graphType=span_list&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=all&storage=hot&view=spans&start=1725642422188&end=1725649398177&paused=true). Make sure you start with a trace and not a span.
  - If the issue persists for more than a few hours, ping the DMC team on VA Teams or VA email. The Debt Resolution team's PO (Denise Coveyduck) she can get you in contact with the right people.
- If you determine that the errors are coming within vets-api, open a tracking issue at [va.gov-teams](https://app.zenhub.com/workspaces/vsa---debt-607736a6c8b7e2001084e3ab/board)   
- Notify the Debt Resolution team in the #debt-resolution team on Slack.
- To drill into details on a specific error at a specific time, click on a bar in the "Click on items to View Related Traces"
  widget at the bottom of the Dashboard.  

  (https://dsva.slack.com/archives/[.....]) channel.  I recommend specifically calling out @Example Administrator
  and @Another Example Administrator specifically.  Tell them what application you support, the issues you are seeing
  Post a link to your question or comment in the [#their-slack-channel](https://dsva.slack.com/archives/[...]) for awareness.

