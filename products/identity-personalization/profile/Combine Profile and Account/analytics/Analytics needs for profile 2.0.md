# WIP

-------

# Analytics needs for Profile 2.0

## What we have now

Currently, we have profile analytics in a few of places:

- [This analytics dashboard](https://datastudio.google.com/u/0/reporting/1MEhg3-5vnPBsSc_1wCzh6LByR3RjH92q/page/OoJS?s=vS-iovB_OEo) was created a couple years ago when the 1.0 version of the personlized quite (My VA, Profile, Account) went out. 
- We also have some analytics in GA for [profile submission data](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.drilldown=analytics.eventLabel:profile-transaction/). We may have additional data in GA, but I don't know how to track it down.
- [Direct deposit dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/T7daIpzoRw2LOg1BVHJ0Dw/a50123418w177519031p187673796/)
- [Address validation dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/arWBC7_-SkK3WHQuJQHQoQ/a50123418w177519031p176188361/)

## What need

- High level profile stats
- A dashboard for of the following:
  - Contact information
  - (Maybe) A small update to the address validation dashboard
  - A small update to the direct deposit dashboard
  - Account security
  - Connected apps

### High level stats

This would include:

- Total profile visits
- Profile navigation clicks
- Stats around the next page viewed following profile (maybe top 5, then link to detailed view)
- Error info (need to define this)

### Contact information dashboard

We are likely capturing this email in analytics already, but I would love to have this info in a consolidated dashboard so it's easier to track than it is now. I would like to see:

#### Mailing address
 
- Successful form submissions (Already have on the address validation dashboard)
- Failed form submissions (Already have on the address validation dashboard)

#### Home address

- Successful form submissions (Already have on the address validation dashboard)
- Failed form submissions (Already have on the address validation dashboard)

#### Home phone number

- Successful form submissions 
- Failed form submissions

#### Mobile phone number

- Successful form submissions 
- Failed form submissions
- How many people have opted into health care appointment reminders ("Send me text message (SMS) reminders for my VA health care appointments" checkbox)

#### Work phone number

- Successful form submissions 
- Failed form submissions

#### Fax phone number

- Successful form submissions 
- Failed form submissions

#### Email address

- Successful form submissions 
- Failed form submissions

### Address validation dashboard

- Would it be possible to click into the data on this dashboard so we could see full reports?
- Otherwise, we're good to go.

### Direct deposit dashboard

- Would need to add tracking for the "View payment history" link. 
- Otherwise, we're good to go.

### Account security

- Clicks of Verify your identity
- Clicks of Set up 2-factor authentication
- Clicks of Go to the terms and conditions for health tools

### Connected apps

- How many users have apps connected
- How many users disconnect apps from here
- Clicks of "Go to connected accounts FAQ"
- Clicks of "Full list of possible applications"
