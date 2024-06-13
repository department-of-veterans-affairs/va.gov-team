# MPI Errors
[Sentry Query Link](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22MPI%3A%3AErrors%22&statsPeriod=14d)

### Table of contents
  * [Label Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/joeniquette-hackathonwriteup-1/teams/vsp/teams/identity/Sentry%20Hackathon%202020/Error%20Buckets/MPI_Errors.md#label-description)
  * [List error names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/joeniquette-hackathonwriteup-1/teams/vsp/teams/identity/Sentry%20Hackathon%202020/Error%20Buckets/MPI_Errors.md#errors)

## Label Description 
The MPI (also used to be known as MVI) errors occur during the login process when a lookup of the user attributes from the MPI database which is maintained by the VA IAM team. Most often the error is due to a corrupt request sent to MPI.

## Errors
Note: use this template for each error
- [Error Name]()
  - Error Level, criticality, do we need to resolve this within some SLA?
  - Description of error: Related to MVI/MPI DB issues. The errors could be a result of invalid queries being sent by the authentication process OR the MVI/MPI database is down in some way. The MVI database is owned by the IAM team.
  - Other systems/applications involed with this error that have a direct impact on either the error or the system alerting
  - Steps to troubleshoot and resolve errors
  - Contact if/when the error reaches some threshold? What is the threshold?
  - Alert Location (sentry, pagerduty?)
  - Metric Locations: 
    - [Grafana MPI](http://grafana.vfs.va.gov/d/000000062/mvi?orgId=1&from=now-4d&to=now)
    - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+message%3A%22MPI%3A%3AErrors%22&statsPeriod=14d)
  - Source code for error forwading (sentry, pagerduty, etc.)
  - Source code for error generation
  - Any recommended changes to this error, reference current status and tickets if applicable
  
- [MPI::Errors::DuplicateRecords](http://sentry.vfs.va.gov/organizations/vsp/issues/8242/?environment=production&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+message%3A%22MPI%3A%3AErrors%22&statsPeriod=14d)
  - Error Level: Warning
  - Description: 
  - Next steps: 
  
 - [MPI::Errors::InvalidRequestError](http://sentry.vfs.va.gov/organizations/vsp/issues/8554/?environment=production&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+message%3A%22MPI%3A%3AErrors%22&statsPeriod=14d)
   - Error Level: Error
   - Description: 
   - Next steps:
  
 - [MPI::Errors::FailedRequestError](http://sentry.vfs.va.gov/organizations/vsp/issues/8619/?environment=production&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+message%3A%22MPI%3A%3AErrors%22&statsPeriod=14d)
   - Error Level: Error
   - Description: 
   - Next steps:
  
