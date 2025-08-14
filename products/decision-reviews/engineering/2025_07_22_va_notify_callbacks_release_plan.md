# Migration to VA Notify-Managed Callbacks Endpoint: Production Release Plan

[Original Canvas link](https://dsva.slack.com/docs/T03FECE8V/F0964UMSYFK)

## Background Context

We currently use and maintain a custom-built API callback endpoint, api.va.gov/v1/nod_callbacks , to track whether email notifications to veterans are successfully delivered. When VA Notify is able to provide a final status on the notification, they send a POST request to this endpoint to notify us. Our endpoint predates work by VA's central notification team (VA Notify) to build a their own standardized callback endpoint api.va.gov/va_notify/callbacks, that they invoke themselves, with support for both default callbacks and custom callback handlers. 

To comply with the latest guidance from OCTO, the previous team began work to deprecate our custom endpoint and migrate to the VA Notify-managed one. The implementation work was completed by the previous team but still needed to be tested in staging ([ticket with details here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/113136)) and enabled in production by toggling the relevant feature flags.  

This release plan does not follow the VA.gov product management [template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) as it does not meet the following requirements:

* Does the feature you are working on moderately or significantly affect the Veteran experience of the product? 
    * No, this is a technical change that tackles some technical debt
* Does the feature you are working on change the structure of the underlying data?
    * No, we are still using the same DecisionReviewNotificationAuditLog table to store records of the status of failure emails sent using the VA Notify service
* Does the feature's backend or downstream interactions change?
    * No, we are still using the VA Notify service to send failure notification emails
* Is this a brand new experience for a Veteran?
    * No, Veterans have already been receiving notification emails when their form or evidence submissions fail.

NOTE: Since VA Notify does not support multiple callback endpoints, a phased rollout won't be possible. We can only switch from one callback endpoint to the other. 

## Step-by-step release plan

The release will basically only involve turning on feature flags in production and monitoring the results of our daily FailureNotificationEmailJob the next day.

* Morning of release (July 22nd): Reach out to VA Notify team so they can update their config to switch us over (they've confirmed that this should be a quick change on their end)
* Validate with VANotify team that config has been updated
* Turn on feature flags in production to swap to using new callbacks before EOD (July 22nd): 
    * `:decision_review_notification_form_callbacks`
    * `:decision_review_notification_evidence_callbacks`
    * `:decision_review_notification_secondary_form_callbacks`


* Since we only send failure notification emails via our daily scheduled Sidekiq job at midnight ET, we'll need to check the Datadog logs next morning (July 23rd)
    * Be on the lookout for any failures 
        * Example Datadog [query](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20DecisionReviews%5C%3A%5C%3AFailureNotificationEmailJob%5C%20%2A%5C%20error&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&link_source=monitor_notif&messageDisplay=inline&refresh_mode=sliding&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1752687017773&to_ts=1752773417773&live=true) for email job failure 
        * Example Datadog [query](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-staging%20%40payload.context.callback_klass%3A%22DecisionReviews%3A%3AFormNotificationCallback%22%20status%3Aerror&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&fromUser=true&graphType=flamegraph&link_source=monitor_notif&messageDisplay=inline&refresh_mode=paused&sort=time&spanID=4048808207350769942&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1752465600000&to_ts=1752638399999&live=false) for form email delivery permanent failures (another one for evidence emails) (update env to eks-prod; these don't exist right now since they're associated with the new callback handler)
* Validate job ran successfully 
    * Look for [log](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20DecisionReviews%5C%3A%5C%3AFailureNotificationEmailJob%5C%20%2A%5C%20email%5C%20queued&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&link_source=monitor_notif&messageDisplay=inline&refresh_mode=sliding&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1752811216000&to_ts=1752811516000&live=false) corresponding to the Sidekiq job in Datadog, and filter by the jid ([example](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40named_tags.jid%3A6c32b729c3bbbb470a2b413a&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&fromUser=true&link_source=monitor_notif&messageDisplay=inline&refresh_mode=sliding&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1752811216000&to_ts=1752811516000&live=false)) 
* Validate callbacks are working correctly via vets-api Rails console queries (look for status: "delivered") :
    * `DecisionReviewNotificationAuditLog.last(10)` 
    * `ids = DecisionReviewNotificationAuditLog.last(10).pluck(:notification_id)`
       `VANotify::Notification.where(notification_id: ids)`
    * Successful Datadog [logs](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-prod%20%40payload.context.callback_klass%3A%22DecisionReviews%3A%3AEvidenceNotificationCallback%22&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&event=AwAAAZg1dM7jNa5w8AAAABhBWmcxZE50akFBQ0M5SG1zY0h5bnJnR0MAAAAkMDE5ODM1NzctMWIxNi00MzI2LWE5ZDktZDc0MWI2MDc4ZGU1AAe7pg&graphType=flamegraph&link_source=monitor_notif&messageDisplay=inline&refresh_mode=sliding&sort=time&spanID=4048808207350769942&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1753190505799&to_ts=1753276905799&live=true) for email job, successful datadog log for [EvidenceNotificationCallback](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20env%3Aeks-prod%20%40payload.context.callback_klass%3A%22DecisionReviews%3A%3AEvidenceNotificationCallback%22&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice&event=AwAAAZg1dM7jNa5w8AAAABhBWmcxZE50akFBQ0M5SG1zY0h5bnJnR0MAAAAkMDE5ODM1NzctMWIxNi00MzI2LWE5ZDktZDc0MWI2MDc4ZGU1AAe7pg&graphType=flamegraph&link_source=monitor_notif&messageDisplay=inline&refresh_mode=sliding&sort=time&spanID=4048808207350769942&storage=flex_tier&stream_sort=desc&viz=stream&from_ts=1753190505799&to_ts=1753276905799&live=true) 

## Contingency/rollback plan 

* Temporarily disable failure notification email job by turning off the following feature flag in Flipper:
    * :decision_review_failure_notification_email_job_enabled 
    * This will accumulate failure notification emails that need to be sent out and give us time to debug 
* Where could things go wrong?
    * Callback is not activated
        * VANotify Service succeeded in initial call to send the email, but we don't see a DecisionReviewNotificationAuditLog record created or VANotify::Notification record update
        * Mitigation strategy: use notification_id from initial logs and work with VA Notify team to identify and resolve issue 
    * VANotify Service fails on initial call to send email and will trigger a silent failure that needs to be investigated
        * The code will not update the failure_notification_sent_at field, and when the job is re-enabled it will try again naturally
        * Mitigation strategy: follow steps from previous example

## Follow-ups

* [Ticket to remove feature flags created](https://github.com/department-of-veterans-affairs/va.gov-team/issues/114752)
* [Unblocks transition of final non-module controller](https://github.com/department-of-veterans-affairs/va.gov-team/issues/104037)


## Approval: 

* Peer-reviewed: @Randi Mays, @Jerry Sea July 18th 
* PO Approval: @Amy Lai, July 18th 
* OCTO Engineering: @Cory Sohrakoff, July 18th 

