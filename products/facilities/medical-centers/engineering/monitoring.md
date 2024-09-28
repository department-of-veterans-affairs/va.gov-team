# VAMC Monitoring

VAMC pages are generated on content-build from drupal data. These pages are changed by editors at different levels, but the resulting content is processed by content-build or next-build. 

## Datadog Dashboard
 - [Facilities Alerting Dashboard including Facility-Locator API resources](https://vagov.ddog-gov.com/dashboard/3vy-h6h-4ek/sitewide-facilities)

## Monitors
The content-build process identifies 404s and broken links. 
It is possible to alert from Sentry on errors encountered on facility pages. 

### Facilities Notification of error on VAMC pages
https://vagov.ddog-gov.com/monitors/170096

- Datadog monitor checks Sentry every 15 mins for any errors on pages with `-health-care` in their path([Sentry Alert](https://sentry.vfs.va.gov/organizations/vsp/alerts/rules/platform-web/39/)). This checks for any possible errors that may come from either a disconnection from the s3-bucket-served data for the web page or some component that was not built correctly.
- Warning > 1, Alert > 3

TODO: Sentry is slated for deprecation from the VA ecosystem. This monitor will need to be revised to stop using Sentry, ticketed in https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18708.
