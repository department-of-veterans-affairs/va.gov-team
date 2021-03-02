Decision-maker: Rachael Roueche

Decision-date: 12/9/2020

## Background
If you go to [Find VA Locations](https://www.va.gov/find-locations), you'll see 3 fields available for you to enter data into. The data from those 3 fields was collected over an approximately 2 month time span and sent to Google Analytics and BigQuery to help the Facility Locator team make product strategy decisions.

The problem is that we can assume sometimes the location data the user enters will be their home address, -- which makes the data from that field potential PII. We can also assume that the facility type or service type the user selects may be related to their medical needs -- which makes the data from that field potential PHI.

## Decision
DEPO has decided to scrub the Facility Locator location entries data from Google Analytics and BigQuery, and to remove the Google Tag Manager code collecting that data from the Facility Locator product. Unfortunately, the way Google Analytics scrubs work, Google can't isolate specific event actions to delete. They instead scrub *all* event action data for a given time period. So we'll lose all event action data in Google Analytics from approximately 10/12/2020 - 12/2/2020. We expect that to occur as soon as Friday 12/18.

All of GA is backfilled in our new data warehouse, BigQuery, and most of our DOMO dashboards are populated from BigQuery, not GA. So the good news is we’re not completely losing the deleted data, (aside from the problematic facility locator data) and DOMO dashboards should largely be unaffected.

### What exactly is being deleted?

“[Event actions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20201002&_u.date01=20201202&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=250/)” from the 10/12/20 - 12/2/20 time period are being deleted from Google Analytics. So, anything that we track with an “event action” like claim details viewed, pdf and letter file names, and scroll % will be lost in GA (but will be backed up in BigQuery). More general things like pageviews, submission counts, and time on page won’t be deleted. The links below show event actions filterable by product for a more specific look into the impact:

- All Views: 10/11-12/2 https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p1[…]-table.plotKeys=%5B%5D&explorer-table.rowCount=250/
- WBC View: 10/11-12/2 https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p1[…]-table.plotKeys=%5B%5D&explorer-table.rowCount=250/

### How this may impact you:

- Reports in GA will now have missing event action data for that time period.
- The reporting on va.gov/performance-dashboard will have gaps in the data for that time period. We’ll put it on our backlog to reconfigure this page, but it’s not a high priority for us bc this page only gets about 3,300 pageviews per month (for comparison, the FAQs page gets about 75,000 unique pageviews per month.)
- Facility Locator DOMO dashboards will be permanently missing the deleted location entries data. The FL team will need to get a new analytics request in so we can work w/you to re-create the GTM code for the info that’s safe to collect from that product.

### What this should NOT impact:

- Your ability to monitor your VA.gov products in realtime. Event actions will continue to populate normally outside the timeframe that’s getting deleted.
- Most DOMO dashboards. Thanks to BigQuery and recent Analytics team efforts, almost all of our DOMO dashboards now pull from BigQuery and not GA.

### Actions you can take:

- Export GA or Data Studio reports or dashboards prior to Friday
- Notify the Analytics team if you notice anything weird in your DOMO dashboards after Friday, so they can prioritize configuration updates.

## Conclusion

Though this will delay our ability to do other analytics-related activities for VFS teams in the short term, Veterans using our site trust us to be responsible with their data and it’s important we do the right thing and prioritize this scrub effort.

If you have questions please let Rachael Roueche know in Slack. The analytics team has published a [post mortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/12-1-2020-pii-facility-locator-postmortem.md) w/more details on takeaways and action items for future prevention as well.

## FAQs

**How will this impact the domo covid-19 dash?**

Covid Dashboards that won’t be affected:
- COVID-19 digital response (Homepage)
- Content Usage
- Topic Trends
- Tool Usage
- Vaccine Response - Work in Progress
- Exploratory Analytics

Covid Dashboards that will be affected:
- COVID-19 - VA.gov Response (the original dashboard, now archived and no longer maintained, data sources still pull from GA)

**When does the scrubbing start? (i.e., by when do we need to save/export desired event actions data?)**

Scrubbing starts as early as Friday 12/18

**Where can I go to see what’s considered an event action and/or find out if my product has any?**

Event actions are what are used to track clicks and other actions for all VA.gov products, so every VFS team's GA reports will be impacted, though DOMO dashboards shouldn't be. [Please see the description of event actions above for more detail](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/decisions/google_analytics_data_scrub.md#what-exactly-is-being-deleted).

**Can you confirm that this will only affect GA and big query data (DOMO) will remain during the timeframe specified?**

Though all of Google Analytics will be impacted by this, DOMO dashboards will experience little to no impact since they no longer pull from GA but instead pull from our data warehouse, BigQuery. If you do notice anything weird in your DOMO dashboards after Friday, please file a ticket with the Analytics team so they can take a look and reconfigure if needed.
