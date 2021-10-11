----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/Metrics-and-Dimensions.1871282214.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
## Google Analytics Cheat Sheet

Overview: This document's purpose is to serve as a quick reference for commonly used Google Analytics metrics/dimensions and their definitions. 

## Interpreting User Interactions
| Metric | Definition | Example(s) 
| -------------- | --------- | --------- |
Pageviews | Total number of pageviews (includes duplicates) | _Ex1_: Veteran A visits page A 3 times during their visit and page B 2 times during their visit. <br><br> - **Page A = 3 pageviews** <br> - **Page B = 2 pageviews**
Unique Pageviews | The number of sessions where the specific page was viewed at least once (excludes duplicates) | _Ex1_: Veteran A visits page A 3 times during their visit and page B 2 times during their visit. <br><br> - **Page A = 1 unique pageview** <br> - **Page B = 1 unique pageviews**
Sessions | Total number of visits. Sessions records each time someone has started/ended a visit to the site. <br><br> _30 minutes of inactivity will also cause a session to record_| _Ex1:_ A veteran visits the site, looks at a few pages, closes the site. The veteran takes a lunch break and retuns to the site again after their lunch break. <br><br> **Sessions = 2** <br> _Ex2_: A veteran visits the site, has been inactive for 30 minutes while keeping the site open, comes back at minute <br> **Sessions = 2** 
New Sessions | Number of sessions started for users who have never been to the site | <br> _Ex2_: Veteran A starts a session with VA.gov and has not been to the site prior. Veteran B starts a session with VA.gov and has been to the site prior <br><br> **New Sessions = 1**
Users | The total number of users for the requested time period. | _Ex1_: Veteran A who has been to the site before from the same browser visits the site. Veteran B visits who has never been to the site. <br><br> **Users = 2**
New Users | The number of sessions marked as a user's first-time visit (or hasn't been to the site in the last 2 yers). | _Ex1_: Veteran A who has been to the site before from the same browser visits the site. Veteran B visits who has never been to the site. <br><br> **New Users = 1**
Returning Users | The number of sessions marked where the user has been to the site before within the last 2 years | _Ex1_: Veteran A visited the site a week prior <br><br> **Returning Users = 1**
Total Events | Total number of times the interaction was done (includes duplicates, ignores user) | _Ex1_: Veteran A clicks on track claims button, goes to the claims page, circles back and clicks track claims again <br><br> **Total Events = 2**
Unique Events | Number of sessions where the event occurred (excludes duplicates) | _Ex1_: Veteran A clicks on track claims button, goes to the claims page, circles back and clicks track claims again. <br><br> **Unique Events = 1**  


## Engagement & Timing
| Dimension/Metric | Definition | Example(s) 
| -------------- | --------- | --------- |
Bounce Rate | The percentage of times where a visitor does not engage (_most commonly clicks_) with the page (or site) before departing | _Ex1_ Veteran A clicks on a Facebook post that lands him on Page Z of the site. Veteran A does not do anything while on Page Z before closing his browser. Veteran B clicks on a Facebook post that lands him on Page Z and he clicks on a call-to-action <br><br> **Page Z Bounce Rate = 50%** (Veteran A bounce + Veteran B non-bounce)
Exit % | The percentage of time where a visitor exited VA.gov from a specific page. | Veteran A visits /coronavirus-frequently-asked-questions and exits on this page. Veteran B visits /coronavirus-frequently-asked-questions but exits the site on the homepage. <br><br> **Exit % for /coronavirus-frequently-asked-questions = 50%** 
Average Time on Page | The average amount of time users spend on a given page. This metric calculates the simple start/stop average for all users. This metric does **NOT** reflect time the user actually spent engaging with the page. Google Analytics will continue incrementing this metric even if the user has the tab hidden or is not actively engaging. | _Ex1:_ Veteran A visits the homepage of VA.gov and stays on for 30 seconds before going to another page of the site. Veteran B visits the homepage of va.gov and opens a new tab and goes to a different website while keeping the homepage open -- this lasts for 2 mintues. <br><br> **Average Time on Page = 00:01:15**
Average Session Duration | The average amount of time users spend on a session. This metric is similar to average time on page in that it calculates the simple start/stop for all users. This metric does **NOT** reflect time the user actually spent engaging with pages. Google Analytics will continue incrementing this metric even if the user has the tab hidden or is not actively engaging. | _Ex1_: Veteran A spends 5 minutes on VA.gov before exiting. Veteran B spends 10 minutes on VA.gov before exiting. Veteran C spends a total of an hour on VA.gov but much of that time is in a hidden tab and not actively engaging. <br><br> **Average Session Duration = 00:00:25**
Pages / Session | The average amount of pages a user visits per session. | Veteran A visits VA.gov and visits 12 pages during his session. Veteran B visits VA.gov and visits 6 pages. <br><br> **Pages / Sessions = 9**



## Traffic Source Dimensions/Metrics
| Dimension | Definition | Example(s) 
| -------------- | --------- | --------- |
Source | _Where_ the traffic has come from coming from. Commonly grouped with medium, source is designed to be slightly more specific than medium. | _Ex1_: Veteran A clicks on a link within a newsletter that takes him to a specific page of VA.gov. The URL Vet A clicked on in the newsletter is `utm_source=Newsletter`: <br><br> **Source = Newsletter** <br><br>_Ex2_: Veteran A types va.gov directly into their browser URL bar and lands on the site. <br><br> **Source = Direct** 
Medium | _How_ the traffic got there <br> Commonly interpreted as the "more general" category of source. | _Ex1_: Veteran A clicks on a VEText that takes them directly to a page on VA.gov. The URL  of the VEText is `utm_medium=referral`: <br><br> **Medium = referral** <br><br> _Ex2_: Veteran A types va.gov directly into their browser URL bar and lands on the site. <br> **Medium = (none)** <br><br> _Ex3_: Veteran A clicks on a link within an emailed newsletter that lands them on VA.gov with `utm_medium=Email` in the URL  <br><br> **Medium = Email**
Campaign | The marketing campaign being executed to drive users to the site. | _Ex1_: Veteran A clicks on a newsletter link that sends him to a site on VA.gov with `utm_campaign=may-covid19`. <br> **Campaign = may-covid19**
Landing Page | Page where the user began their session, where they entered the site. | _Ex1_: Veteran A clicks on a newsletter link that lands them on the COVID 19 FAQ page. <br><br> **Landing Page = /coronavirus-frequently-asked-questions**
Entrances | Number of times the specific page was the first viewed in the session | _Ex1_: Veteran A, B + C click on a VEText that lands them directly on a Page Z. <br><br> **Page Z Entrances = 3**

## Scroll Depth 
- The Analytics and Insights team currently **does not** track scroll depth of every page of VA.gov. 
- Our team incrementally adds new pages to those capturing scroll tracking via analytics request
- The reason we are not tracking every page to-date is to help manage the hit volume of Google Analytics for these events where scroll tracking may be insignificant
- When looking at scroll depth, its extremely important to make sure the page is identified where you want to see scroll depth - otherwise the metrics will be aggregates of everywhere we are doing scroll tracking
- For pages we do have tracked we hope this helps with interpretation of this interaction. Please feel free to [add this custom report](https://analytics.google.com/analytics/web/#/my-reports/-_9QcMXYSbKX2ufrHoBbNQ/a50123418w177519031p184624291/_u.date00=20200521&_u.date01=20200527/) to the correct production view. 

![Example Scroll Depth Report](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/analytics/google-analytics/example-scroll-depth-report.PNG)

When interpreting this data: 
- You should see the "Event Label" populate with each percentage (25% - 100%). 
- "Total Events" will tell you how many total times a user scrolled to that percentage - including those times where they scrolled up-and-down multiple times to reach those percentages. 
- "Unique Events" will tell you how many total times a user scrolled to that percentage - excluding those times where they scrolled up-and-down multiple times to reach those percentages. 

_When these two numbers (total and unique events) are close to one another, that's a positive inference that users are not needing to excessively scroll to find what theyre looking for...When these numbers are not close to one another, that's a concern users are needing to excessively scroll._ 



