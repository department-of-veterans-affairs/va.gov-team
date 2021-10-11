----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/Form-Events.1840808051.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

## Tracking Form Events
For multi-step veteran forms, VFS teams can implement dataLayer events that will be pushed to Google Analytics based on a set of standard event schema. These events match settings that the Analytics-Insights team has established within Google Tag Manager. 

Before you review this document, please review [Measuring Pageviews and Events.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/build-process-measuring-pageviews-and-events.md)

_Audience for this Resource_: Product Owners and Engineers

### Data Dictionary for Form Events
The dataLayer events listed in the table below should populate the `event` value in the `event-goes-here` example. 

`dataLayer.push({'event': 'event-goes-here'});`

In the table where it lists \<product\>, please reference the Product prefix table in the bottom of the [Measuring Pageviews and Events documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/build-process-measuring-pageviews-and-events.md#event-tracking) and insert your product's prefix. If your Product area is not listed, please reach out to the Analytics-Insights team via the [Analytics-Insights GitHub Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban%2C+bsmartin-ep%2C+jonwehausen&labels=analytics-insights%2C+analytics-request%2C+collaboration-cycle&template=analytics-implementation-and-qa-request-template.md&title=Analytics+Implementation+or+QA+Support+for+%5BProduct%5D) and also within the [#vsp-analytics](https://dsva.slack.com/channels/vsp-analytics) channel for guidance.

Note there is a double dash `--` in submission events.


| Step in Form Process       | Interaction                                                                                 | dataLayer Event                     |
|----------------------------|---------------------------------------------------------------------------------------------|-------------------------------------|
| Form Starts                | Form Start - Starting application without logging in                                        | `no-login-start-form`                 |
| Form Starts                | Form Start - Call-to-action to **Sign In** to start form                                    | `login-link-clicked-cta-form`         |
| Form Starts                | Form Start - Begin form button after successful sign in                                     | `login-successful-start-form`        |
| Form Saves and Submissions | Form Saves - Event is triggered for auto form saves                                         | `<product>-sip-form-saved`          |
| Form Saves and Submissions | Form Prefill Failures - Tracks when form prefill cannot be retrieved                        | `<product>-sip-form-prefill-failed` |
| Form Saves and Submissions | Form Submission - Measure the form submission; Success and failures are measured distinctly | `<product>--submission`             |
| Form Saves and Submissions | Form Submission Successful - Triggered when the form has been successfully submitted        | `<product>--submission-successful`  |
| Form Saves and Submissions | Form Failures - Triggered when the form has failed server-side                    | `<product>--submission-failed`      |
| Form Saves and Submissions | Form Failures - Triggered when the form has failed in the client                            | `<product>--submission-failed-client`|
