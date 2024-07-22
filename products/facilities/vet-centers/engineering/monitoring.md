# Vet Center Monitoring

Vet Center pages are generated on content-build from drupal data. These pages are changed by editors at different levels, but the resulting content is processed by content-build or next-build. 

## Datadog Dashboard
 - [Facilities Alerting Dashboard including Facility-Locator API resources](https://vagov.ddog-gov.com/dashboard/3vy-h6h-4ek/sitewide-facilities)

## Monitors
The content-build process identifies 404s and broken links. 
It is possible to alert from Sentry on errors encountered on facility pages. 

### Facilities Notification of error on Vet Center pages
https://vagov.ddog-gov.com/monitors/168205

- Datadog monitor that checks Sentry every 15 mins for any errors on pages with `-vet-center/locations/` in the path. 
- This checks for any possible errors that may come from either a disconnection from the s3-bucket-served data for the web page or some component that was not built correctly. 

This monitor historically has had an issue / throws alerts when Nearby locations tries to load Community Access Points, which are not available from Lighthouse, which causes an error in the component & throws a 500. (Discussion about this [in Slack](https://dsva.slack.com/archives/C05UCL10WH4/p1717608517344489).) In June 2024. the baseline for this monitor was adjust so that it won't alarm for the standard # of 500 errors we get on CAPs, and the alarm is muted until Lighthouse can ingest CAPs.

TODO: Sentry is slated for deprecation from the VA ecosystem. This monitor will need to be revised to stop using Sentry, ticketed in https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18708.
