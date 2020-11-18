# Non-errors

[Sentry Query Link](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+%21level%3Aerror&statsPeriod=14d) 

15 warning/info issues relalted to known error cases. For example the user's MVI record may be in a state that needs resolution and we opt not to log the user in until their MVI record has been fixed.

**About:** In this about section, describe what the error in this page is about. Each error page should use the following to get started with documenting the errors we encounter.

## Table of Contents

  * Label Description
  * [List error names]()


## Label Description 
[Description here]

## Errors
- [Error Name]()
  - Error Level, criticality, do we need to resolve this within some SLA?
  - Description of error: Likely dont need to do anything with these errors, they are more for documentation purposes.
   - This is bad when:
    - When `User attributes is missing an ID.me UUID` happens during outbound authentication. Could add code to try and determine if this is happening on inbound or outbound.
  - Other systems/applications involed with this error that have a direct impact on either the error or the system alerting
  - Steps to troubleshoot and resolve errors
  - Contact if/when the error reaches some threshold? What is the threshold?
  - Alert Location (sentry, pagerduty?)
  - Source code for error forwading (sentry, pagerduty, etc.)
  - Source code for error generation
  - Any recommended changes to this error, reference current status and tickets if applicable
