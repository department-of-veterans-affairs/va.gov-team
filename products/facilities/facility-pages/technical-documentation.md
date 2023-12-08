# Facility Pages

Facility pages encompass Vet Centers, VAMC Systems and Facilities, VBA, etc., or all facility pages that are generated on content-build from drupal data. 
These pages are changed by editors at different levels, but the resulting content is processed by content-build or next-build. 

# Testing
Testing of these pages is difficult, due to the potentially changing nature of the data. From one day to the next, a facility may be closed and inaccessible, 
and should that happen, testing that may include that site is complicated.

# Alerting and Monitoring
It is not possible to monitor 404s and broken links other than through the content-build process.
It is possible to alert from Sentry on errors encountered on facility pages. I have added two monitors to the Facility dashboard. Those are:

1. [ChunkLoadErrors on Facility Pages](https://vagov.ddog-gov.com/monitors/170096)
2. [Vet Center Loading of non-existent Data](https://vagov.ddog-gov.com/monitors/168205)

Number one above is a collection of a whole host of possible errors that may come from either a disconnection from the s3-bucket-served data for the web page or 
some component was not built correctly. It is unlikely that we would have a component not built correctly, but should we see an uptick in these errors we can search
for such an error.

Number two above is not a critical issue, since no data is supposed to be displayed. However, it does cause a crash in the component. We can use this monitor as 
a basis for other facility pages, should errors like it arise. However, this requires that we know of specific types of errors so that we can catch them on Sentry
and forward them to Datadog. 
