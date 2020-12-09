# MVI Errors
[Sentry Query Link](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22MVI%3A%3AErrors%22&statsPeriod=14d)

17 errors related to MVI request problems

**About:** In this about section, describe what the error in this page is about. Each error page should use the following to get started with documenting the errors we encounter.

### Table of contents
  * Label Description
  * [List error names]()

## Label Description 
[Description here]

## Errors
- [Error Name]()
  - Error Level, criticality, do we need to resolve this within some SLA?
  - Description of error: Related to MVI/MPI DB issues. The errors could be a result of invalid queries being sent by the authentication process OR the MVI/MPI database is down in some way. The MVI database is owned by the IAM team.
  - Other systems/applications involed with this error that have a direct impact on either the error or the system alerting
  - Steps to troubleshoot and resolve errors
  - Contact if/when the error reaches some threshold? What is the threshold?
  - Alert Location (sentry, pagerduty?)
  - Metric Locations: 
    - [Grafana MVI](http://grafana.vfs.va.gov/d/000000062/mvi?orgId=1&from=now-4d&to=now)
    - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22MVI%3A%3AErrors%22&statsPeriod=14d)
  - Source code for error forwading (sentry, pagerduty, etc.)
  - Source code for error generation
  - Any recommended changes to this error, reference current status and tickets if applicable
  
- [User attributes contain multiple distinct MHV ID values](http://sentry.vfs.va.gov/organizations/vsp/issues/126/?project=3&referrer=AssignedActivityEmail)
  - Error Level: Warning
  - Description: appears to show that the entity has more than one MHV ID associated with the account. 
  - Next steps: figure out how these are occuring and if its good bad or indifferent. **Look at this during Sentry Error Hackathon Decemeber 2020**
  
