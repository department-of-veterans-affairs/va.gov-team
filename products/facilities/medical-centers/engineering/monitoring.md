## VAMC Monitoring

VAMC pages are generated on content-build from drupal data. These pages are changed by editors at different levels, but the resulting content is processed by content-build or next-build. 

# Testing
Testing of these pages is difficult, due to the potentially changing nature of the data. From one day to the next, a facility may be closed and inaccessible, 
and should that happen, testing that may include that site is complicated.

# Datadog Dashboard
 - [Facilities Alerting Dashboard including Facility-Locator API resources](https://vagov.ddog-gov.com/dashboard/3vy-h6h-4ek/sitewide-facilities)

## Monitors
It is not possible to monitor 404s and broken links other than through the content-build process.
It is possible to alert from Sentry on errors encountered on facility pages. 

**[Facilities Notification of error on VAMC pages](https://vagov.ddog-gov.com/monitors/170096)**
A collection of a whole host of possible errors that may come from either a disconnection from the s3-bucket-served data for the web page or 
some component was not built correctly. It is unlikely that we would have a component not built correctly, but should we see an uptick in these errors we can search
for such an error.
