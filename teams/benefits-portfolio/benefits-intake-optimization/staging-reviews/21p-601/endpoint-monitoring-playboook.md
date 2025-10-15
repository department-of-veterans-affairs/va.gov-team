# Endpoint Monitoring Playbook
## VA Form 21P-601 - Application for Accrued Amounts Due a Deceased Beneficiary

**Date:** October 15, 2025  
**Team:** Benefits Intake Optimization (BIOHEART)  

Form 21P-601 submissions are sent to the simple forms `/submit` API endpoint.

### Audience

Team members responding to VA Form 21P-601 Datadog monitor alerts.

### Required access

* OCTO Datadog instance, read-only access
* #bio-heart-notifications Slack channel
* [Dashboard](https://vagov.ddog-gov.com/dashboard/xhy-ewx-dsr?fromUser=false&refresh_mode=sliding&from_ts=1759523984389&to_ts=1759527584389&live=true)
* [Monitor](https://vagov.ddog-gov.com/monitors/456190)

### Steps

Once an issue is identified (either due to monitor alerts in Slack or observed anomolies on the [dashboard](https://vagov.ddog-gov.com/dashboard/xhy-ewx-dsr?fromUser=false&refresh_mode=sliding&from_ts=1759523984389&to_ts=1759527584389&live=true)):
1. Check logs in Data Dog and filter for logs related to form `21P-601`
2. If additional followup is required, create a Github ticket to collect artifacts and plan next steps
3. Prioritize actions surrounding this issue
4. Update #bio-heart-notifications Slack channel - comment under the relevant monitor alert in Slack with
    - A link to the issue created (if any)
    - Any relevant details/text that provide context on the issue + aid in future searchability if similar issues arise
