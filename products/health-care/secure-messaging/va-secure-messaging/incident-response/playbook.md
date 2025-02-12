# Secure Messaging Incident response

## What this means

When this alert is trigger, the number of non-200 for the SM web API above tolerance.

This could mean (but not limited to)

- Vet-api is having issues
- SM Patient API is having issues

## Audience

Team members responding to [Secure Messaging Monitors](https://vagov.ddog-gov.com/monitors/manage?q=MHV%20Secure%20Messag&order=desc) monitor alerts.  

## Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
- [DSVA Pager Duty](https://dsva.pagerduty.com/)
- MS Teams access

## Dashboards

- Datadog : [Web](https://vagov.ddog-gov.com/dashboard/5r5-ra2-qga/mhv-secure-messaging) and [Overall](https://vagov.ddog-gov.com/dashboard/39q-93p-ftw/mhv-secure-messaging-metrics)
- [AppDyanmics](https://appdynprd.aac.va.gov/)

## PagerDuty

[SM in Pager Duty](https://dsva.pagerduty.com/service-directory/P7LKM9I)

## Steps

1. React/comment on the monitor alert in Slack to let the team know you are aware and there to help work through the issue
1. Review a list of recent monitor alerts, including other related platforms such as downstream services, va.gov platform issues, login.gov, etc.
1. Check out the Dashboards for [Web](https://vagov.ddog-gov.com/dashboard/5r5-ra2-qga/mhv-secure-messaging) and [Overall](https://vagov.ddog-gov.com/dashboard/39q-93p-ftw/mhv-secure-messaging-metrics)  
1. Reach out to the OCTO stakeholders
1. Begin to troubleshoot the error and root cause
  a. If needed, begin coordination with the downstream API team
1. Follow the rollback process below if needed

## Contacts

>NOTE: some team members outside of va.gov might respond faster on MS Teams instead of slack.

OCTO Health team

SM on va.gov team

MHV SM PATIENT API team

## Rollback process

### If a critical severity issue

1. SM on va.gov will be put in a disabled state for all users
2. Debugging will start immediately
3. The fix will be tested and deployed through normal CI/CD practices
4. SM on va.gov will be brought back online and monitored

### If a low-severity issue

1. A fix will be prioritized and worked on
1. The fix will be tested and deployed through normal CI/CD practices, with no interruption to feature uptime.
