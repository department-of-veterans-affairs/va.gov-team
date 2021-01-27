## Frequently Asked Questions

## Overview
 - This document intends to serve as a reference to common Google Analytics / insight-related questions our team receives
 - This list will continue to be updated / refined moving forward to include new questions and/or replace with newer answers

 ## All Questions
  - [What is a "dimension" in Google Analytics?](#what-is-a-dimension-in-google-analytics)
  - [What is a "metric" in Google Analytics?](#what-is-a-metric-in-google-analytics)
  - [What is a "custom dimension" in Google Analytics?](#what-is-a-custom-dimension-in-google-analytics)
  - [What is a "custom metric" in Google Analytics?](#what-is-custom-metrics-in-google-analytics)
  - [What is a "view" in Google Analytics?](#what-is-a-view-in-google-analytics)
  - [What is a "custom report" in Google Analytics?](#what-is-a-custom-report-in-google-analytics)
  - [Why are my pageviews different in the overview?](#why-are-my-pageviews-different-in-the-overview)
  - [Why aren't my user totals adding up?](#why-arent-my-user-totals-adding-up)
  - [When should I use pageviews vs sessions vs users?](#when-should-i-use-pageviews-vs-sessions-vs-users)
  - [What are the big amount of '(other)' pageviews in the All Website data view?](#what-are-the-big-amount-of-other-pageviews-in-the-all-website-data-view)
  - [What’s wrong with my goal funnel visualization report? Why is my conversion rate so low?](#whats-wrong-with-my-goal-funnel-visualization-report-why-is-my-conversion-rate-so-low)
  - [Why do total submission events not match the backend?](#why-do-total-submission-events-not-match-the-backend)
  - [Why do my goal completions not match total submission events?](#why-do-my-goal-completions-not-match-total-submission-events)
  - [Does being on a VPN affect opt-out functionality?](#does-being-on-a-vpn-affect-opt-out-functionality)
  - [Does being on a VPN affect my data in Google Analytics?](#does-being-on-a-vpn-affect-my-data-in-google-analytics)
  - [Why do I not have the same tracking on eBenefits or MHV?](#why-do-i-not-have-the-same-tracking-on-ebenefits-or-mhv)
  - [What is DOMO?](#what-is-domo)
  - [How do we get a product success tool built for our team?](#how-do-we-get-a-product-success-tool-built-for-our-team) 
  - [What time frame is data from the Benefit Hubs and Products content groupings available?](#what-time-frame-is-data-from-the-benefit-hubs-and-products-content-groupings-available) 
  - [Why is the data for the Benefit Hubs content grouping different than the data in the Products content grouping?](#why-is-the-data-for-the-benefit-hubs-content-grouping-different-than-the-data-in-the-products-content-grouping) 
 
## General Google Analytics Questions
  - [What is a "dimension" in Google Analytics?](#what-is-a-dimension-in-google-analytics)
  - [What is a "metric" in Google Analytics?](#what-is-a-metric-in-google-analytics)
  - [What is a "custom dimension" in Google Analytics?](#what-are-custom-dimensions-in-google-analytics)
  - [What is a "custom metric" in Google Analytics?](#what-are-custom-metrics-in-google-analytics)
  - [What is a "view" in Google Analytics?](#what-is-a-view-in-google-analytics)
  - [What is a "custom report" in Google Analytics?](#what-is-a-custom-report-in-google-analytics)
  - [Why aren't my user totals adding up?](#why-arent-my-user-totals-adding-up)
  - [When should I use pageviews vs sessions vs users?](#when-should-i-use-pageviews-vs-sessions-vs-users)
  - [How can I have more than zero total events, but zero unique events?](#how-can-have-more-than-zero-total-events-but-zero-unique-events)

## VA.gov-Specific Questions
  - [When should I use pageviews vs sessions vs users?](#when-should-i-use-pageviews-vs-sessions-vs-users)
  - [What are the big amount of '(other)' pageviews in the All Website data view?](#what-are-the-big-amount-of-other-pageviews-in-the-all-website-data-view)
  - [What’s wrong with my goal funnel visualization report? Why is my conversion rate so low?](#whats-wrong-with-my-goal-funnel-visualization-report-why-is-my-conversion-rate-so-low)
  - [Why do total submission events not match the backend?](#why-do-total-submission-events-not-match-the-backend)
  - [Why do my goal completions not match total submission events?](#why-do-my-goal-completions-not-match-total-submission-events)
  - [Does being on a VPN affect opt-out functionality?](#does-being-on-a-vpn-affect-opt-out-functionality)
  - [Does being on a VPN affect my data in Google Analytics?](#does-being-on-a-vpn-affect-my-data-in-google-analytics)
  - [Why do I not have the same tracking on eBenefits or MHV?](#why-do-i-not-have-the-same-tracking-on-ebenefits-or-mhv)
  - [What is DOMO?](#what-is-domo)
  - [How do we get a product success tool built for our team?](#how-do-we-get-a-product-success-tool-built-for-our-team) 

### What is a "dimension" in Google Analytics? 
A dimension is the attribute of visitation to VA.gov. The dimension chosen is what ultimately gives proper context to the metric chosen. Each row of a Google Analytics report will more often than not include at least 1 dimension. 

### What is a "metric" in Google Analytics? 
A metric is a number used to measure one or more of the characteristics of a dimension. A dimension can have one or more characteristics. 

### What is a "custom dimension" in Google Analytics? 
A custom dimension is a dimension that Google Analytics does not capture by default (out-of-box). Custom dimensions require "custom" work to be collected and measured. Custom Dimensions are often configured by the Analytics & Insights team as part of our build process to contextual data and improve decision-making/insights. LOA Level is an example custom dimension within the VA.gov production property. 

### What is a "custom metric" in Google Analytics? 
A custom metric is a metric that Google Analytics does not capture by default (out-of-box). Custom metrics require "custom" work to collect and measure relevant quantitative values. Custom metrics are often configured by the Analytics & Insights team as part of our build process to give additional context numerically. Address Validation Needed is an example custom metric within the VA.gov production property. 

### What is a "view" in Google Analytics? 
A "view" is a subset of a Google Analytics property that can have its own unique configuration settings. Each view will contain specific filters + configurations that clean and transform to organize collection. 

### What is a "custom report" in Google Analytics? 
A custom report is a report not pre-built within Google Analytics. Custom reports require manual configuration of dimensions & metrics to produce report. Custom reports are extremely valuable because they allow for tailoring reports to the specific dimensions & metrics necessary to answer more specific analytics questions. The Analytics & Insights team can assist in developing custom report to answer your necessary questions. 

When creating a custom report, the Analytics & Insights team will often share a "template" custom report link. This template link will contain the dimensions, metrics, and filters to generate the report. However, "template" links will require you as the recipient of the custom report to tell Google Analytics which "view" (see above question) to generate the report. Once created, the custom report will live in your "Custom Reports" section for that specific view until manually deleted. The Insights team will direct you to which view should be used to construct your report -- that said, most often we will direct you to the "modernized" view that represents your product. 

### Why are my pageviews different in the overview? 
You may notice a difference in total pageviews between overview and full reports. Google Analytics has a [1 million row limit](https://support.google.com/analytics/answer/1009671?hl=en&ref_topic=2601030) on reports. A high cardinality dimension like Page URL on a comprehensive view like "All VA.gov Website Data" can reach this limit within a timeframe of only a few months. The total pageviews in the Overview is a more accurate number than the total pageviews in a row-limited report.

If you need to work around this limit in a full report, you can shorten your timeframe, select a more filtered view, or export an unsampled report.

### Why aren't my user totals adding up? 
You may notice the user count at the top of the report does not equal the summation of the rows:

![Image of Totals not adding up](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/totals-not-adding-up-example.PNG)

Why aren't both of these numbers 2,701,980 or 2,797,253?  This is because a user can be counted in more than one dimension row.  In this particular report, a user can access a VA site from more than one state and therefore increment the users metric in multiple rows.

The top number isn't a summation of the report rows. It is a count of unique Users without row filters and will usually be lower than the summation.

More information:  https://help.analyticsedge.com/article/misunderstood-metrics-users/

### When should I use pageviews vs sessions vs users? 
Pageviews, sessions, and users each play an important role in analysis and all have sligthly different meanings. The decision of whether to leverage pageviews, sessions, and/or users is one to give considerable thought with each Google Analytics report generation/analysis.  Please see our [Google Analytics cheat sheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/google-analytics-cheat-sheet.md) for a quick definition of each. Also, please keep in mind each reporting scenario is slightly different and therefore may require only 1 or multiple of these metrics used together for analysis purposes. 

**Pageviews** should be used when we are mostly concerned with traffic _volume_. In other words, pageviews are most useful when we don't  care about who the user is, whether theyve been to the site before, etc. The question to ask yourself when deciding to use pageviews is "do we care about repeat users" and/or "do we care about repeat (duplicate) visits to the same page". If the answer to both of those questions is no, pageviews is the metric to use. Unique Pageviews (sister to pageviews) are a great metric to use when our answer to "do we need to consider repeat (duplicate) visits within a session?" is no. 

**Sessions** should be used when the scope of analysis is interpreted with the context of the life of a specific visit. Sessions are most useful when assessing traffic attribution. When used with source, medium, and/or campaign, sessions are a great way to accurately reflect how traffic is originating on the site. 

**Users** should be used when the scope of analysis is needing to be understood in the context of unique visitors. In other words, when we are solely concerned with understanding how _individual vistors_ are behaving. It is important to note a "user" can span multiple sessions -- therefore users are best when we are not concerned directly with "did the user leave the site before completing the action". Users is best when there is a need to understand how many specific people performed an action. 


### What are the big amount of ‘(other)’ pageviews in the All Website data view?

**From Google's documentation:**

> _Dimensions with a large number of possible values are known as high-cardinality dimensions. Reports containing high-cardinality dimensions may be affected by Analytics system limits, resulting in the creation of a rolled-up (other) entry in the report to contain the data that exceeds these limits._

In the case of VA.gov, MHV creates an extremely large amount of unique Page URLs due to unique query parameters.  Even a single month of Page URLs in the All Website view can exceed GA's report limits.

This can be mitigated by:

Switching from Page to another lower-cardinality dimension like Page Title.
Using a short time frame like a week.  In the past, we have built Excel / Google Sheets to load and merge multiple weeks worth of data.
Using a different view.

### What's wrong with my goal funnel visualization report? Why is my conversion rate so low? 

Many goals currently configured on product views are showing extremely high abandonment rates on the first step - Authentication.  This is due to the modernized apps redirecting to the same URL after login, which Google Analytics reports as an exit. We are researching a solution to address this problem.

At this moment, we have an outstanding bug to correct and improve our funnel/conversion reporting across VA.gov. For funneling, the best solution at this moment is to build a custom funnel (in a Custom Report for instance) that uses a combination of Page URL destinations and login events to track goal steps.

### Why do total submission events not match the backend?

There are several reasons why the total submission events in Google Analytics may not match your numbers in the backend.

-   In cases when veterans can submit multiple applications on the website, GA does not dedupe submissions by veteran ID like the backend might.
-   Google Analytics can be blocked by browser ad blockers, other extensions, or network policies.


### Why do my goal completions not match total submission events.

Goals are pre-configured in Google Analytics to count conversions only once per user per session (visit).

Form submission events however will be counted under Total Events each and every time they are received by Google Analytics.

### Does being on a VPN affect opt-out functionality?

A VPN itself will most likely not affect the analytics opt-out.  The opt-out works by setting a user-level value in your Google Analytics profile.  As long as Google Analytics identifies you as the same user who opted out - by reading a cookie on your system - you will be opted out of tracking.  Removing this cookie, using a new browser, or using a new device will cause Google Analytics to create a new user profile and you will need to opt out again.

### Does being on a VPN affect my data in Google Analytics?

While a VPN itself will probably not affect our analytics opt-out or modify the cookies we use to identify you, a VPN may affect the data we record in Google Analytics. Specifically, location or geo data can be inaccurate and constantly changing. 

Please note that some VPN software includes additional browser extensions that may clear or block cookies.

### Why do I not have the same tracking on eBenefits or MHV?

Analytics-Insights did not configure tracking to capture logins for users authenticating on MHV or eBenefits; we could review the unique pageviews to the authenticated dashboard to approximate logins.

### What is DOMO?
DOMO is a business intelligence tool purchased by the Analytics & Insights team early 2020. DOMO is where we produce our Product Success Tool and several other routine monthly reports. 

### How do we get a Product Success Tool built for our team? 
Please submit a request for the Product Success tool [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/product-success-tool-request.md). Before submitting, we please ask to have your teams KPIs established and close-to final product. Our team is here to assist with any questions you may have around KPI setting. 

### What time frame is data from the Benefit Hubs and Products content groupings available? 
Content groupings can only be used once they are created. They cannot be retroactively applied to look at historical data. The conent groupings are only available in Google Analytics from July 20th (Benefit Hubs content grouping) and July 30th (Products content grouping).

### Why is the data for the Benefit Hubs content grouping different than the data in the Products content grouping?
The two content groupings were built using different rules for grouping the content. The Benefit Hubs content grouping groups data into buckets based on the domain of each Benefit Hub and the Products content grouping groups data into buckets based on the products in the Benefit Hubs. 

### How can I have more than zero total events, but zero unique events? 
To understand this in detail - we must first understand unique events are counted only in seperate sessions (site visits), while total events are counted each time the event occurs. More specifically, Unique Events counts the number of events with _distinct event attributes (event category, action, label)_ that occur within a single user session. 
This means GA will increment the count of Unique Events by 1 for each unique combination of event category/action/label collected _the very first time we see them within a session_, and ignore future events with the same category/action/label when computing unique event counts. Total Events will count each event regardless of the uniqueness of the category/action/labels therein. In google's terms, this is designed to make the analysis of specific unique events to be straight forward. 

When constructing and/or interpreting reports, it is important to keep this in mind when you are mixing a session-scoped metric such as unique events, with a page hit scope dimension such as page. If you are seeing 0 unique events, it is because that precise event taxonomy of event category/action/label has already occured earlier in the user's session. 

In the common case of wanting to analyze the unique number of times an event-page combination occured, we recommend using unique dimension combinations or users. You can use this metric with any combination of dimensions, and analyze different combinations of dimension values.
