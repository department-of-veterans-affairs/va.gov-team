Decision-maker: Rachael Roueche

Decision-date: 12/9/2020

## Background
If you go to [Find VA Locations](https://www.va.gov/find-locations), you'll see 3 fields available for you to enter data into. The data from those 3 fields was collected over an approximately 2 month time span and sent to Google Analytics and BigQuery to help the Facility Locator team make product strategy decisions.

The problem is that we can assume sometimes the location data will be their home address they're entering -- which makes the data from that field potential PII.

## Decision
DEPO has decided to scrub the Facility Locator location entries data from Google Analytics and BigQuery, and to remove the Google Tag Manager code collecting that data from the Facility Locator product. Unfortunately, the way Google Analytics scrubs work, Google can't isolate specific event actions to delete. They instead scrub *all* event action data for a given time period. So we'll lose all event action data in Google Analytics from approximately 10/12/2020 - 12/2/2020. We expect that to occur on Friday this week.

All of GA is backfilled in our new data warehouse, BigQuery, and most of our DOMO dashboards are populated from BigQuery, not GA. So the good news is we’re not completely losing the deleted data, (aside from the problematic facility locator data) and DOMO dashboards should largely be unaffected.

### What exactly is being deleted?

“Event actions” from the 10/12/20 - 12/2/20 time period are being deleted from Google Analytics. So, anything that we track with an “event action” like claim details viewed, pdf and letter file names, and scroll % will be lost in GA (but will be backed up in BigQuery). More general things like pageviews, submission counts, and time on page won’t be deleted.

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

Though this will delay our ability to do other analytics-related activities for VFS teams in the short term, Veterans using our site trust us to be responsible with their data and it’s important we do the right thing and prioritize this scrub effort.

If you have questions please let Rachael Roueche know in Slack. The analytics team will publish a post mortem w/more details on takeaways and action items for future prevention as well.

### FAQs

**How will this impact the domo covid-19 dash?**
It shouldn't impact the covid-19 dashboard since that dashboard already pulls from BigQuery, not GA.

**When does the scrubbing start? (i.e., by when do we need to save/export desired event actions data?)**
Scrubbing starts on Friday 12/18

