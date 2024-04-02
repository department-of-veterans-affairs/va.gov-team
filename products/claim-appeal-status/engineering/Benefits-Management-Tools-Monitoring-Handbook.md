## Benefits Management Tools Monitoring Handbook

## Monitoring

The enumerated monitors below (see “Monitors” sections below) are configured to send alerts to the #benefits-alerts-notifications and #benefits-management-tools-notifications channels in VA’s Slack.  The former channel contains alerts from all benefits teams, including our own.  The latter channel contains alerts from our Benefits Management Tools apps only.  We have a rotating Monitor Triage Duty role (see “Monitor Triage Duty” below) to monitor this latter channel.

### Monitor Triage Duty

Every sprint, at least one engineer is assigned to monitor the #benefits-decision-reviews-notifications channel and triage any alerts that pop up during the sprint.  That engineer’s monitor triage work is represented by a ticket like [this one](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77054).  Please note the description in the linked ticket.  The goal of monitor triage is _not_ to immediately resolve any bugs that arise.  Rather, the goal is to conduct a preliminary investigation to determine whether no follow up is necessary, or if follow up is necessary, to draft a ticket to be discussed and prioritized at the next standup (see “Creating a Bug Ticket” below).  Traditionally, we have assigned 2 points to this ticket.

During that duty, it is important to respond promptly to any alerts and keep VA stakeholders informed of our investigations.  To indicate that you are looking into an alert, react to the alert with an 👀 emoji.  If the alert was a false alarm, or otherwise resolved, react to the alert with an ✅ emoji, and leave an explanatory comment.  Here is [an example](https://dsva.slack.com/archives/C05UPRR0HK3/p1710712459247059).  If you end up creating a follow-up ticket, post a link to the ticket in the alert’s thread, and leave any other notes you think our VA stakeholders may find helpful.

Towards the end of an engineer’s monitor triage duty, they should create a triage duty ticket for the next sprint if one hasn’t already been created.  Ideally, a different engineer should be assigned to the next triage duty.

### Types of Alerts

We have two types of alerts:  traffic anomaly alerts and error alerts.  

There are two types of traffic anomaly alerts:  low traffic alerts, and anomaly alerts.  Low traffic alerts are based on a lower threshold.  That lower threshold was originally estimated by looking at historical expected traffic over weekends and other periods of expectedly low traffic.  The anomaly alerts are a bit more complicated, but basically, they ask whether a certain percentage of traffic within a set time period is two standard deviations above or below the volume of traffic during that same time period, on that same day, in previous weeks.

We started out with low traffic alerts and then began trialing anomaly alerts some time ago.  I’ve kept the low traffic alerts around as a check against the anomaly alerts.  There may come a time in the future where we feel confident enough with the anomaly alerts to formally deprecate the low traffic alerts.

Error alerts are triggered when the number of errors related to some kind of action are above a certain threshold.  Usually, that threshold is one.

### How to Triage Alerts

#### Traffic Anomalies

When investigating a traffic anomaly, you should consider the following factors: the time of day, the day of the week, whether it was a holiday or otherwise special day, whether traffic was anomalously high or low, what traffic has looked like on that same day at that same time in previous weeks and months, whether there were any known outages or maintenance windows during that time, whether we recently pushed any code, whether the drop in traffic corresponded with the daily deploy, and the length of the anomaly.  This is a non-exhaustive list.

#### Errors

Every error is different, but here are some general tips for investigating error alerts.  First, use the click and drag function to highlight the narrow time range where the error occurred, and pin that time in DataDog.  Then, go to the dashboard corresponding to the alert and track down relevant charts, and especially any log widgets.

You can oftentimes find the backtrace for an error by clicking on a log’s “trace” tab, clicking “View Trace Details,” and then clicking “Errors.”

Many logs contain a user_uuid that you can use to find related errors in Sentry (via the `user.id` parameter).

Sometimes, 503 and 504 errors are erroneously characterized as 4xx errors.  This problem is ticketed [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66874).

### Google Analytics

We're transitioning to DataDog more and more over Google Analytics, however we still track the types of [downloads](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20240402&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventCategory:Interactions,analytics.eventAction:PDF%20Downloaded%20-%20Download%20Claim%20Letter%20(PDF)/) that occur within the DDL in Google Analytics.

## Claim Status Tool + DDL + Rated Disabilities

### Dashboards

* [Benefits - Claim Status Tool Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits-claim-status-tool-dashboard)
  * This includes DDL
* [Claim Status Tool Statistics](https://vagov.ddog-gov.com/dashboard/p2a-9ii-9hz/claim-status-tool-statistics)

### Monitors

* [Supplementing EVSS headers](https://vagov.ddog-gov.com/monitors/200508?view=spans)
* [Rated Disabilities Discrepancies](https://vagov.ddog-gov.com/monitors/172081?view=spans)
* [EVSS::RequestDecision has exhausted its sidekiq queue](https://vagov.ddog-gov.com/monitors/188768?view=spans)
* [EVSS::DocumentUpload has exhausted its sidekiq queue](https://vagov.ddog-gov.com/monitors/190515?view=spans)
* [[STEM Claims] Low traffic volume](https://vagov.ddog-gov.com/monitors/203865?view=spans)
* [[STEM Claims] Latency](https://vagov.ddog-gov.com/monitors/203859?view=spans)
* [[STEM Claims] High Error Count](https://vagov.ddog-gov.com/monitors/203608?view=spans)
* [[Documents Uploads] Latency](https://vagov.ddog-gov.com/monitors/200796?view=spans)
* [[Documents Uploads] High Error Count](https://vagov.ddog-gov.com/monitors/200793?view=spans)
* [[Documents Uploads] #create Low traffic volume](https://vagov.ddog-gov.com/monitors/200591?view=spans)
* [[DDL] Low traffic volume](https://vagov.ddog-gov.com/monitors/200799?view=spans)
* [[DDL] Latency](https://vagov.ddog-gov.com/monitors/200798?view=spans)
* [[DDL] High Error Count](https://vagov.ddog-gov.com/monitors/200797?view=spans)
* [[Claim Status Tool] [DDL] Decision Letters request volume anomaly](https://vagov.ddog-gov.com/monitors/200399?view=spans)
* [[Claim Status Tool] STEM Claim request volume anomaly](https://vagov.ddog-gov.com/monitors/203619?view=spans)
* [[Claim Status Tool] Lighthouse 504 errors](https://vagov.ddog-gov.com/monitors/160179?view=spans)
* [[Claim Status Tool] Latency is high](https://vagov.ddog-gov.com/monitors/157346?view=spans)
* [[Claim Status Tool] LH Claims latency](https://vagov.ddog-gov.com/monitors/169661?view=spans)
* [[Claim Status Tool] Documents requests errors](https://vagov.ddog-gov.com/monitors/186125?view=spans)
* [[Claim Status Tool] Documents error anomaly check](https://vagov.ddog-gov.com/monitors/187606?view=spans)
* [[Claim Status Tool] Documents Uploads request volume anomaly](https://vagov.ddog-gov.com/monitors/200348?view=spans)
* [[Claim Status Tool] Claims errors anomaly check](https://vagov.ddog-gov.com/monitors/160184?view=spans)
* [[Claim Status Tool] Claim request volume anomaly](https://vagov.ddog-gov.com/monitors/196837?view=spans)
* [[Claim Status Tool] Claim request volume anomaly](https://vagov.ddog-gov.com/monitors/162174?view=spans)
* [[Claim Status Tool] Claim request errors are high](https://vagov.ddog-gov.com/monitors/157719?view=spans)
* [[Claim Status Tool] Claim Letter error anomaly check](https://vagov.ddog-gov.com/monitors/189174?view=spans&from_ts=1711899451121&to_ts=1712072251120&eval_ts=1712072251120)
* [[Claim Status Tool] Appeals request errors](https://vagov.ddog-gov.com/monitors/162361?view=spans)
* [[Claim Status Tool] Appeal request volume anomaly](https://vagov.ddog-gov.com/monitors/162360?view=spans)
* [[Benefits Claims] High Error Count](https://vagov.ddog-gov.com/monitors/200411?view=spans)
* [[Benefits Claims] #submit5103 Latency](https://vagov.ddog-gov.com/monitors/200408?view=spans)
* [[Benefits Claims] #show Latency](https://vagov.ddog-gov.com/monitors/200407?view=spans)
* [[Benefits Claims] #index Low traffic volume](https://vagov.ddog-gov.com/monitors/200585?view=spans)
* [[Benefits Claims] #index Latency](https://vagov.ddog-gov.com/monitors/199721?view=spans)
* [[Appeals] High Error Count](https://vagov.ddog-gov.com/monitors/200592?view=spans)
* [[Appeals] #index Low traffic volume](https://vagov.ddog-gov.com/monitors/200587?view=spans)
* [[Appeals] #index Latency](https://vagov.ddog-gov.com/monitors/200794?view=spans)

### Google Analytics

* [DDL PDF Download Metrics]([downloads](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20240402&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventCategory:Interactions,analytics.eventAction:PDF%20Downloaded%20-%20Download%20Claim%20Letter%20(PDF)/))

## Letters Generator

### Dashboards

* [Benefits - Management Tools - Letters](https://vagov.ddog-gov.com/dashboard/86n-b39-hhn/benefits-management-tools-letters)

### Monitors

* [Letters - Lighthouse downloads errors are high](https://vagov.ddog-gov.com/monitors/137721?view=spans)
* [Letters - Lighthouse Letters downloads no requests received](https://vagov.ddog-gov.com/monitors/138567?view=spans)
* [[Lighthouse] Letters Generator Latency](https://vagov.ddog-gov.com/monitors/193367?view=spans)
* [[Lighthouse] #index Letters Latency](https://vagov.ddog-gov.com/monitors/193401?view=spans)
* [[Lighthouse] #download Letters Latency](https://vagov.ddog-gov.com/monitors/194137?view=spans)
* [[Lighthouse] #beneficiary Letters Latency](https://vagov.ddog-gov.com/monitors/194141?view=spans)
* [[Lighthouse + EVSS] Letters Traffic Anomalies](https://vagov.ddog-gov.com/monitors/193827?view=spans)
* [[Lighthouse + EVSS] #index Letters Traffic Anomalies](https://vagov.ddog-gov.com/monitors/193400?view=spans)
* [[Lighthouse + EVSS] #download Letters Traffic Anomalies](https://vagov.ddog-gov.com/monitors/194138?view=spans)
* [[Lighthouse + EVSS] #beneficiary Letters Traffic Anomalies](https://vagov.ddog-gov.com/monitors/194143?view=spans)
* [[Letters] Low traffic volume on #index](https://vagov.ddog-gov.com/monitors/194126?view=spans)
* [[Letters] Low traffic volume on #download](https://vagov.ddog-gov.com/monitors/194139?view=spans)
* [[Letters] Low traffic volume on #beneficiary](https://vagov.ddog-gov.com/monitors/194144?view=spans)
* [[Letters] High error count on #index](https://vagov.ddog-gov.com/monitors/194127?view=spans)
* [[Letters] High error count on #download](https://vagov.ddog-gov.com/monitors/194128?view=spans)
* [[Letters] High error count on #beneficiary](https://vagov.ddog-gov.com/monitors/194129?view=spans)
* [[EVSS] Letters Latency](https://vagov.ddog-gov.com/monitors/193373?view=spans)
* [[EVSS] #index Letters Latency](https://vagov.ddog-gov.com/monitors/193822?view=spans)
* [[EVSS] #download Letters Latency](https://vagov.ddog-gov.com/monitors/194140?view=spans)
* [[EVSS] #beneficiary Letters Latency](https://vagov.ddog-gov.com/monitors/194142?view=spans)
