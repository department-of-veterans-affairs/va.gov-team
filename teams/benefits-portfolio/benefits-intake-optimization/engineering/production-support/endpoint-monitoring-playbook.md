_This file was originally located [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/29fa8c94220e4935fb5cbcfb4bff071e115d2c00/teams/benefits-portfolio/benefits-intake-optimization/staging-reviews/21p-0537/endpoint-monitoring-playbook.md)_

# Endpoint Monitoring Playbook
## This document applies to Forms 21P-601 and 21P-0537

**Updated:** December 15, 2025  
**Team:** Benefits Intake Optimization (BIO-HEART)  

Form submissions are sent to the simple forms `/submit` [API endpoint](https://github.com/department-of-veterans-affairs/vets-api/blob/bbeff66780d82901eebfebad04f2ac1ba1b89f23/modules/simple_forms_api/app/controllers/simple_forms_api/v1/uploads_controller.rb#L37).

### Audience

Team members responding to Datadog monitor alerts received in the DSVA [`#bio-heart-notifications`](https://dsva.slack.com/archives/C09J7S337E3) channel.

### Required access

* [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
* [`#bio-heart-notifications`](https://dsva.slack.com/archives/C09J7S337E3) Slack channel
* [Overall submissions dashboard](https://vagov.ddog-gov.com/dashboard/xhy-ewx-dsr?fromUser=false&refresh_mode=sliding&from_ts=1759523984389&to_ts=1759527584389&live=true) (this is a fork of an existing Simple Forms dashboard and includes more information than we need).
* [Benefits Intake Form Submissions dashboard](https://vagov.ddog-gov.com/dashboard/qkv-ywh-98v/bio-heart---benefits-intake-form-submission-tracking-cloned?fromUser=false&refresh_mode=sliding&from_ts=1765230328818&to_ts=1765835128818&live=true) (this is also a fork of an existing Simple Forms dashboard, to include the forms referenced in this doc).
* [Submission to Benefits Intake Failure Monitor](https://vagov.ddog-gov.com/monitors/456190)

### Steps

Once an issue is identified (either due to monitor alerts in Slack or observed anomolies on the [dashboard](https://vagov.ddog-gov.com/dashboard/xhy-ewx-dsr?fromUser=false&refresh_mode=sliding&from_ts=1759523984389&to_ts=1759527584389&live=true)):
1. Check logs in Data Dog and filter for logs related to form `21P-0537` or `21P-601`.
2. If additional followup is required, create a Github ticket to collect artifacts and plan next steps
3. Prioritize actions surrounding this issue
4. Update #bio-heart-notifications Slack channel - comment under the relevant monitor alert in Slack with
    - A link to the issue created (if any)
    - Any relevant details/text that provide context on the issue + aid in future searchability if similar issues arise
