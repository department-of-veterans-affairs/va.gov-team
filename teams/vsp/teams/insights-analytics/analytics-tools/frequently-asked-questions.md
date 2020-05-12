## Frequently Asked Questions

## Overview
 - This document intends to serve as a reference to common Google Analytics / insight-related questions our team receives
 - This list will continue to be updated / refined moving forward to include new questions and/or replace other answers

 ## Table of Contents
  - Why are my pageviews different in the overview? 
  - Why aren't my user totals adding up? 
  - What are the big amoung of '(other)' pageviews in the All Website data view? 
  - What’s wrong with my goal funnel visualization report? Why is my conversion rate so low? 
  - Why do total submission events not match the backend? 
  - Why do my goal completions not match total submission events? 
  - Does being on a VPN affect opt-out functionality? 
  - How does being on a VPN affect my data in Google Analytics? 
  - Why do I not have the same tracking on eBenefits / MHV? 

## Why are my pageviews different in the overview? 
You may notice a difference in total pageviews between overview and full reports. Google Analytics has a [1 million row limit](https://support.google.com/analytics/answer/1009671?hl=en&ref_topic=2601030) on reports. A high cardinality dimension like Page URL on a comprehensive view like "All VA.gov Website Data" can reach this limit within a timeframe of only a few months. The total pageviews in the Overview is a more accurate number than the total pageviews in a row-limited report.

If you need to work around this limit in a full report, you can shorten your timeframe, select a more filtered view, or export an unsampled report.

## Why aren't my user totals adding up? 
You may notice the user count at the top of the report does not equal the summation of the rows:

| Region | Users
| ----------- | ------------| 
 <br> | 2,701,980
Texas | 249,376
California | 247,555

Why aren't both of these numbers 2,701,980 or 2,797,253?  This is because a user can be counted in more than one dimension row.  In this particular report, a user can access a VA site from more than one state and therefore increment the users metric in multiple rows.

The top number isn't a summation of the report rows. It is a count of unique Users without row filters and will usually be lower than the summation.

More information:  https://help.analyticsedge.com/article/misunderstood-metrics-users/

## What are the big amount of ‘(other)’ pageviews in the All Website data view?

**From Google's documentation:**

> _Dimensions with a large number of possible values are known as high-cardinality dimensions. Reports containing high-cardinality dimensions may be affected by Analytics system limits, resulting in the creation of a rolled-up (other) entry in the report to contain the data that exceeds these limits._

In the case of VA.gov, MHV creates an extremely large amount of unique Page URLs due to unique query parameters.  Even a single month of Page URLs in the All Website view can exceed GA's report limits.

This can be mitigated by:

Switching from Page to another lower-cardinality dimension like Page Title.
Using a short time frame like a week.  In the past, we have built Excel / Google Sheets to load and merge multiple weeks worth of data.
Using a different view.

## What's wrong with my goal funnel visualization report? Why is my conversion rate so low? 

Many goals currently configured on product views are showing extremely high abandonment rates on the first step - Authentication.  This is due to the modernized apps redirecting to the same URL after login, which Google Analytics reports as an exit. We are researching a solution to address this problem.

For funneling, the best solution at this moment is to build a custom funnel (in a Custom Report for instance) that uses a combination of Page URL destinations and login events to track goal steps.

## Why do total submission events not match the backend?

There are several reasons why the total submission events in Google Analytics may not match your numbers in the backend.

-   In cases when veterans can submit multiple applications on the website, GA does not dedupe submissions by veteran ID like the backend might.
-   Google Analytics can be blocked by browser ad blockers, other extensions, or network policies.


## Why do my goal completions not match total submission events.

Goals are pre-configured in Google Analytics to count conversions only once per user per session (visit).

Form submission events however will be counted under Total Events each and every time they are received by Google Analytics.

## Does being on a VPN affect opt-out functionality?

A VPN itself will most likely not affect the analytics opt-out.  The opt-out works by setting a user-level value in your Google Analytics profile.  As long as Google Analytics identifies you as the same user who opted out - by reading a cookie on your system - you will be opted out of tracking.  Removing this cookie, using a new browser, or using a new device will cause Google Analytics to create a new user profile and you will need to opt out again.

## Does being on a VPN affect my data in Google Analytics?

While a VPN itself will probably not affect our analytics opt-out or modify the cookies we use to identify you, a VPN may affect the data we record in Google Analytics. Specifically, location or geo data can be inaccurate and constantly changing. 

Please note that some VPN software includes additional browser extensions that may clear or block cookies.
