# Vet Center Monitoring

Vet Center pages are generated on content-build from drupal data. These pages are changed by editors at different levels, but the resulting content is processed by content-build or next-build. 

# Testing
Testing of these pages is difficult, due to the potentially changing nature of the data. From one day to the next, a facility may be closed and inaccessible, 
and should that happen, testing that may include that site is complicated.

# Datadog Dashboard
 - [Facilities Alerting Dashboard including Facility-Locator API resources](https://vagov.ddog-gov.com/dashboard/3vy-h6h-4ek/sitewide-facilities)

## Monitors
It is not possible to monitor 404s and broken links other than through the content-build process.
It is possible to alert from Sentry on errors encountered on facility pages. 

**[Vet Center Loading of non-existent Data](https://vagov.ddog-gov.com/monitors/168205)**
Not a critical issue, since no data is supposed to be displayed. However, it does cause a crash in the component. We can use this monitor as 
a basis for other facility pages, should errors like it arise. However, this requires that we know of specific types of errors so that we can catch them on Sentry
and forward them to Datadog. 
