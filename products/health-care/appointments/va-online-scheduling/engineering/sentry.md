# Using Sentry on VAOS

## Intro

Sentry can be found at http://sentry.vfs.va.gov/. You'll need to add yourself to the vfs-vaos team to have full access to everything.

## Front end

Front end issues are on the platform-web project within Sentry. A good general search for issues is to query for VAOS directly:

http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=4&query=is%3Aunresolved+vaos&statsPeriod=14d

This will pull up errors with stack traces that mention VAOS, as well as server errors that we have marked as `vaos_server_error`.

It can be hard to sort through the noise in Sentry. Most errors in the FE code come in as TypeErrors, so pay attention to those.

There's a query called [VAOS FE errors](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?id=7&project=4&statsPeriod=7d) that attempts to filter out some of the noise in Sentry for VAOS. This query looks for errors that occur just on the VAOS urls, and excludes some common errors that we know aren't important. This query is hooked up to an alert that should email the group if it is triggered.

There's also a errors dashboard, with tracking on generic errors as well as submission errors: http://sentry.vfs.va.gov/organizations/vsp/dashboard/3/?project=4&statsPeriod=7d

One other tip: Sentry's grouping can be a challenge. Often there will be error events grouped across apps, which makes it hard to find the error you're interested in. If you want to search through events without the grouping, you can do so here: http://sentry.vfs.va.gov/organizations/vsp/discover/results/?environment=production&field=title&field=event.type&field=project&field=user.display&field=timestamp&name=All+Events&project=4&query=&sort=-timestamp&statsPeriod=24h&widths=-1&widths=-1&widths=-1&widths=-1&widths=-1

This is very useful if you need to narrow down to a specific timestamp, too.


## Back end

Back end errors are most often due to issues with services we depend on, and are raised through Grafana dashboard triggered alerts, so there are fewer alerts and queries set up in the platform-api project for VAOS.
