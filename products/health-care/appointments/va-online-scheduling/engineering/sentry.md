# Using Sentry on VAOS

## General tips

Sentry can be found at http://sentry.vfs.va.gov/. You'll need to add yourself to the vfs-vaos team to have full access to everything.

- Take note of the three dropdowns across the top of the screen: project, environment, and timeframe. Make sure you have it set to what you want, which is likely to be platform-web or platform-api, production, and last 24 hours.
- The [Issues](http://sentry.vfs.va.gov/organizations/vsp/issues) tab is where most people spend their time. You can search for different terms in the search bar and "pin" that search, so that it's the default when you open Sentry.
- The [search syntax](https://docs.sentry.io/product/sentry-basics/search/) is very extensive. There are lots of properties available, so take some time to look through what's there.
- Sentry organizes error events into issues (sometimes called groups). It does this for events that have similar error names and stacktraces, which means that you could have error events from different va.gov applications in the same group. So be aware that if you're searching on the Issues tab, you may see an issue with a lot of error events, but not all of those events are necessarily relevant to you.

## Front end

Front end issues are on the platform-web project within Sentry. A good general search for issues is to query for VAOS directly:

http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=4&query=is%3Aunresolved+vaos&statsPeriod=14d

This will pull up errors with stack traces that mention VAOS, as well as server errors that we have marked as `vaos_server_error`.

It can be hard to sort through the noise in Sentry. Most errors in the FE code come in as TypeErrors, so pay attention to those.

- There's a query called [VAOS FE errors](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?id=7&project=4&statsPeriod=7d) that attempts to filter out some of the noise in Sentry for VAOS. This query looks for errors that occur just on the VAOS urls, and excludes some common errors that we know aren't important. This query is hooked up to an alert that should email the group if it is triggered.
- There's also a errors dashboard, with tracking on generic errors as well as submission errors: http://sentry.vfs.va.gov/organizations/vsp/dashboard/3/?project=4&statsPeriod=7d
- Sentry's grouping can be a challenge. Often there will be error events grouped across apps, which makes it hard to find the error you're interested in. If you want to search through events without the grouping, you can do so here: http://sentry.vfs.va.gov/organizations/vsp/discover/results/?environment=production&field=title&field=event.type&field=project&field=user.display&field=timestamp&name=All+Events&project=4&query=&sort=-timestamp&statsPeriod=24h&widths=-1&widths=-1&widths=-1&widths=-1&widths=-1
  - This is very useful if you need to narrow down to a specific timestamp, too.
- The most important tags you can search by on the front end are url and source. Url is what it sounds like, the url of the page where an event in that error group occurred. Source is the name of the application where the error occurred, which is `vaos` for us. These two tags get you similar results, generally.

## Back end

Back end errors are most often due to issues with services we depend on, and are raised through Grafana dashboard triggered alerts, so there are fewer alerts and queries set up in the platform-api project for VAOS.

- Searching for `vaos` in `platform-api` is still a good [starting search](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=3&query=is%3Aunresolved+vaos&statsPeriod=14d).
- Grouping is even weirder on the backend than the front end, but generally something other than service exceptions or timeouts are important errors to look at.
- One nice thing on the backend is you can search by the `controller_name` tag, so you can narrow down results a bit more, by the Rails controller name.
