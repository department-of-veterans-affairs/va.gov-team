# To Be Resolved Errors

[Sentry Query Link](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+%21message%3A%22SSOe+error%3A%22+%21message%3A%22MVI%3A%3AErrors%22&statsPeriod=14d)

These 8 errors don't fall into any of the above buckets and need to be resolved individually.

**About:** In this about section, describe what the error in this page is about. Each error page should use the following to get started with documenting the errors we encounter.

Table of Contents
=================

  * Label Description
  * [List error names]()


## Label Description 
[Description here]

## Errors
- [Error Name]()
  - Error Level, criticality, do we need to resolve this within some SLA?
  - Description of error
  - Other systems/applications involed with this error that have a direct impact on either the error or the system alerting
  - Steps to troubleshoot and resolve errors
  - Contact if/when the error reaches some threshold? What is the threshold?
  - Alert Location (sentry, pagerduty?)
  - Source code for error forwading (sentry, pagerduty, etc.)
  - Source code for error generation
  - Any recommended changes to this error, reference current status and tickets if applicable
  
- [User attributes contain multiple distinct MHV ID values](http://sentry.vfs.va.gov/organizations/vsp/issues/126/?project=3&referrer=AssignedActivityEmail)
  - Error Level: Warning
  - Description: appears to show that the entity has more than one MHV ID associated with the account. 
  - Next steps: figure out how these are occuring and if its good bad or indifferent. **Look at this during Sentry Error Hackathon Decemeber 2020**
