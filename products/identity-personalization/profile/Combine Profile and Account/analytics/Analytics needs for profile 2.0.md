# WIP

-------

# Analytics needs for Profile 2.0

## What we have now

Currently, we have profile analytics in a few of places:

- [This analytics dashboard](https://datastudio.google.com/u/0/reporting/1MEhg3-5vnPBsSc_1wCzh6LByR3RjH92q/page/OoJS?s=vS-iovB_OEo) was created a couple years ago when the 1.0 version of the personlized quite (My VA, Profile, Account) went out. 
- We also have some analytics in GA for [profile submission data](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-transaction/). We may have additional data in GA, but I don't know how to track it down.
- All direct deposit is consolidated [into this analytics dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/T7daIpzoRw2LOg1BVHJ0Dw/a50123418w177519031p187673796/), which has been hugely helpful in the last few months.
- And though it doesn't exist yet, we'll soon have an analytics dashboard for address validation.

## What we'd like

I'd like an analytics dashboard for the whole profile similar to the [direct deposit analytics dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/T7daIpzoRw2LOg1BVHJ0Dw/a50123418w177519031p187673796/). This would be hugely helpful so we can quickly get a high-level view of how the profile is doing as a whole, and so we're having to do less of our own fiddling around in Google Analytics.

### How this Profile dashboard might work

I see the Profile 2.0 dashboard as a dashboard of dashboards. There would be a high level page that would show some high level stats (outlined below), and it would link into more detail stats as needed. 

The dashboard would include stats on:

- Overall stats
- Profile navigation
- Contact information (and then link into a more detailed confirmation information dashboard)
- Direct deposit(and then link into the existing detailed direct deposit dashboard)
- "Your Account" 

### Overall stats

This would include:

- Total profile visits
- (Error info?)

### Profile navigation

- How many page views each section of the profile received
- Stats around the next page viewed following profile (maybe top 5, then link to detailed view)

### Contact information

- Total page views
- Link to detailed view

#### Detailed view for contact information

Mailing Address

- Form views (how many people click Edit)
- Successful form submissions
- Failed form submissions
- Address validation stats

Home Address

- Form views (how many people click Edit)
- Successful form submissions
- Failed form submissions
- Address validation stats

Home phone number

- Form views (how many people click Edit)
- Successful form submissions
- Failed form submissions

Mobile phone number

- Form views (how many people click Edit)
- Successful form submissions
- Failed form submissions
- How many people have opted into health care appointment reminders ("Send me text message (SMS) reminders for my VA health care appointments" checkbox)

Work phone number

- Form views (how many people click Edit)
- Successful form submissions
- Failed form submissions

Fax phone number

- Form views (how many people click Edit)
- Successful form submissions
- Failed form submissions

Email address

- Form views (how many people click Edit)
- Successful form submissions
- Failed form submissions
