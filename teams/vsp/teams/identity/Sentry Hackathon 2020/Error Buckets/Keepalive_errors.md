# Keepalive Errors

14 errors related to making https://eauth.va.gov/keepalive calls

About: In this about section, describe what the error in this page is about. Each error page should use the following to get started with documenting the errors we encounter.

Table of Contents
=================

  * Label Description
  * [List error names]()


## Label Description 
[Description here]

## Errors
- [Error Name]()
  - Error Level, criticality, do we need to resolve this within some SLA?
  - Description of error: This error is related to the interaction with the keepalive endpoint. Reference the "fetch" library [here](https://github.com/department-of-veterans-affairs/vets-website/blob/7581fd3928c70a379abcd703b6bbbe5db761bdb1/src/platform/utilities/sso/keepAliveSSO.js#L15) for more details about the library. We could see this error pop if during the keepalive fetch command, the user clicks on another link within the page which then kills the fetch request by the browser.
  - Other systems/applications involed with this error that have a direct impact on either the error or the system alerting
  - Steps to troubleshoot and resolve errors
  - Contact if/when the error reaches some threshold? What is the threshold?
  - Alert Location (sentry, pagerduty?)
  - Source code for error forwading (sentry, pagerduty, etc.)
  - [Source code for error generation](https://github.com/department-of-veterans-affairs/vets-website/search?q=%22SSOe+error%3A%22)
  - Any recommended changes to this error, reference current status and tickets if applicable
  - Notes:
   - [Fetch library](https://github.com/department-of-veterans-affairs/vets-website/blob/7581fd3928c70a379abcd703b6bbbe5db761bdb1/src/platform/utilities/sso/keepAliveSSO.js#L15)
   - Do some cleanup of lines through 36-41 [in](https://github.com/department-of-veterans-affairs/vets-website/search?q=%22SSOe+error%3A%22)
