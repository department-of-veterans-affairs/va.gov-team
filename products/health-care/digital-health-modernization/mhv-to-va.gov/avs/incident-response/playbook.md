# AVS Incident response

## Audience

Team members responding to [AVS](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%28service%3Aafter-visit-summary%29&order=desc) monitor alerts.  

## Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
- [DSVA Pager Duty](https://dsva.pagerduty.com/)

## Dashboards

- Datadog : [Overall](https://vagov.ddog-gov.com/dashboard/afd-cht-fsb/vagov-after-visit-summary)

## PagerDuty

- [AVS in Pager Duty (prod)](https://dsva.pagerduty.com/service-directory/PO38NG2)
- [AVS in Pager Duty (staging)](https://dsva.pagerduty.com/service-directory/P3643PN)

## Steps

1. React/comment on the monitor alert in Slack to let the team know you are aware and investigating the issue
1. Review a list of recent monitor alerts, including other related platforms such as downstream services, va.gov platform issues, login.gov, etc.
1. Check out the [Dashboard](https://vagov.ddog-gov.com/dashboard/afd-cht-fsb/vagov-after-visit-summary) 
1. Reach out to OCTO stakeholders in the [#after-visit-summary](https://dsva.slack.com/archives/C04UBETRY8N) slack channel
1. Begin to troubleshoot the error and root cause
  a. If needed, begin coordination with the downstream API team in [#vetext-production-support](https://dsva.slack.com/archives/C052BC1893K)

## Contacts

[AVS team members](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs#team-members)
