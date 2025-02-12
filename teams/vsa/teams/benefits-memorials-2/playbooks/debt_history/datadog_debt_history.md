# Debts Playbook: Datadog
_last updated: 9/6/24_  

Referenced this template: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/template.md

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
[Here is a link to the dashboard Debts group](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f?fromUser=false&refresh_mode=paused&view=spans&from_ts=1725578349436&to_ts=1725664749436&live=false&tile_focus=7532675980075440). Here you will find widgets pertaining to debts with latency, cache rate, failure/success rate.

# Required access
Access required to complete the steps in this playbook. Intended for readers to review in advance.   

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)

# Steps

- Review the recent list of notifications for this error in the #debt-alerts slack channel
- Look into Datadog and verify the issue is with our 3rd party integration(DMC). You can use this link as a reference: [Debts controller Trace](https://vagov.ddog-gov.com/apm/traces?query=env%3Aeks-prod%20operation_name%3Arails.action_controller%20resource_name%3A%22V0%3A%3ADebtsController%23index%22%20service%3Avets-api&agg_m=count&agg_m_source=base&agg_t=count&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&fromUser=true&graphType=span_list&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=all&storage=hot&view=spans&start=1725642422188&end=1725649398177&paused=true). Make sure you start with a trace and not a span.
  - If the issue persists for more than a few hours, ping the DMC team on VA Teams or VA email. The Debt Resolution team's PO (Denise Coveyduck) can get you in contact with the right people.
- If you determine that the errors are coming from within vets-api, open a tracking issue at [va.gov-teams](https://github.com/department-of-veterans-affairs/va.gov-team/issues)   
- Notify the Debt Resolution team in the #debt-resolution channel on Slack.

