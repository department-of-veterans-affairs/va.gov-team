# **Logging Silent Failures**

## **VA Form 21P-0537 - Marital Status Questionnaire for DIC Recipients**

**Date:** October 3, 2025  
**Team:** Benefits Intake Optimization (BIOHEART)

**Summary**

Silent failures are errors that occur in the background without user-facing error messages. These errors can be difficult to detect and troubleshoot, as they may not generate visible symptoms or alerts.

While initial submission of the form is synchronous, after the PDF of the user's submission is generated on the backend it is asynchronously submitted to the Benefits Intake API and a confirmation email is sent to the user.

To ensure no silent failures occur when submitting to the Benefits Intake API form 21p-0537 will make use of the existing silent failure tracking mechanisms in the `simple_forms` API. This ensures that
1. Users are sent an email informing them of a failure if a submission does not reach the Benefits Intake API
2. Any email directed to a user that fails to be enqueued in VA Notify increments the `silent_failure` StatsD tag and includes the form number (e.g., `21P-0537`) and the VA Notify confirmation number.

[This Dashboard](https://vagov.ddog-gov.com/dashboard/xda-7sd-pza/silent-failure-tracker-vff-forms?fromUser=true&refresh_mode=sliding&from_ts=1759439215931&to_ts=1759525615931&live=true) displays silent failure information originating from the Simple Forms API. Silent failures from this form will show up here. Additionally, [the central ZSF dashboard](https://vagov.ddog-gov.com/dashboard/n6c-twn-swr/silent-failure-tracker?fromUser=false&refresh_mode=sliding&from_ts=1750860741547&to_ts=1758813141547&live=true) will display these same form-specific StatsD increments.

**Monitoring**

| Component | Monitoring Approach | Alert Threshold |
|-----------|-------------------|-----------------|
| Benefits Intake Submission Failures | [This monitor](https://vagov.ddog-gov.com/monitors/456190) sends notifications to #bio-heart-notifications in Slack when a submission failes to be ingested to Benefits Intake | All failures |
