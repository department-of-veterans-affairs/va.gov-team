# Endpoint Monitoring Playbook
## VA Form 21-8416 Medical Expense Report & 534EZ Application for Surviving Spouse/DIC Benefits

**Date:** October 20, 2025  
**Team:** BIO Huntridge 

Form 21-8416 and 534EZ submissions are sent to the simple forms `/submit` API endpoint.

The same playbook is followed for both forms.

### Audience

Team members responding to VA Form 21-8416 Datadog monitor alerts.

### Required access

* OCTO Datadog instance, read-only access
* #bio-huntridge-notifications Slack channel
* [Dashboard](https://vagov.ddog-gov.com/dashboard/)
* [Monitor](https://vagov.ddog-gov.com/monitors/)

### Steps

Once an issue is identified (either due to monitor alerts in Slack or observed anomolies on the [dashboard](https://vagov.ddog-gov.com/dashboard/)):
1. Check logs in Data Dog and filter for logs related to form `21-8416` or `21P-534EZ`
2. If additional follow up is required, create a Github ticket to document the issue, gather artifacts, and plan next steps
3. Establish priority for actions and resolution for each issue based on impact.
4. Update #bio-huntridge-notifications Slack channel - comment under the relevant monitor alert in Slack with
    - A link to the issue created (as applicable)

    - Any relevant details / background that provide context on the issue and/or aid in future searchability if similar issues arise
