# 526 Analytics - Calculating Drop-Off Rates

Date: 03/15/2024

Julie Pedtke 
julie.pedtke@coforma.io

## Goal
Our team wants reliable drop-off rates for each page of the 526 form in order to validate usability issues we observe in research sessions, better understand the acuity (does it result in a form exit) and scope (how many users are impacted) of usability issues, and potentially identify new issues over time. 

## Challenge
Because Platform analytics define exit rates as users who did not move on to a defined next step (which doesn’t account for complex forms with branching logic that might result in multiple next steps), the existing metrics in DOMO and GA did not serve our purposes. [See Slack conversation on exit rate definitions.](https://dsva.slack.com/archives/C1Q4294JJ/p1708113211058089?thread_ts=1708103275.754219&cid=C1Q4294JJ)

## Solution
Based on conversations with the Contention Classification team, we arrived at a methodology for inferring drop-offs based on previous page paths. 
- For each page of the form, identify total pageviews (A)
- Identify total pageviews within the form that came from that page as a previous page path (B)
- Subtract (B) from (A) to arrive at presumed drop-offs

The Platform Analytics team created a GA report that provides the total pageviews and previous page paths. We then export the data and use a pivot table to sum previous page views and calculate drop-off rates. 

[GA Report including previous path pages](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240201&_u.date01=20240229&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22BW%22,%22www.va.gov~2Fdisability~2Ffile-disability-claim-form-21-526ez~2F%22,0%5D,%5B0,%22analytics.previousPagePath%22,%22BW%22,%22www.va.gov~2Fdisability~2Ffile-disability-claim-form-21-526ez~2F%22,0%5D%5D&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.rowCount=5000/)

[Our analysis for Feb 2024.](https://docs.google.com/spreadsheets/d/1Ba7fixOCyOqbe0q8_5mh4s0p5hYbpaw2x_KAX-jcoKo/edit#gid=1500622252) This is a living document that we may continue to improve, and use as a template for future analysis. 

## Notes, limitations, and assumptions
- The GA report includes many URLs outside of the 526 form itself, such as the introduction and landing pages. We wanted to consider navigating from a URL inside the form to one of these pages as a form drop-off, in the same way that navigating to an unrelated web page or letting a session time-out would be considered a drop-off. So our first step with the data exported from GA was to split out URLs inside the form and outside the form.
- We’re unable to use unique pageviews based on IP address, because this metric only counts one pageview per session but might count multiple previous page paths for the session if the user navigates back and forth and changes a response to a question. This results in (B) sometimes being a larger number than (A) which breaks our calculation. The implication of this is that our total pageviews include multiple page hits from the same user in the same session, so the numbers are somewhat inflated. Our assumption is that this likely results in more inflation in the total pageviews as compared to drop-offs, so may skew our drop-off rates lower rather than higher. We also assume that the inflation would happen somewhat evenly throughout the form, such that it wouldn’t significantly skew the relative data when comparing pages. 

## Next steps
- Drop-offs only tell part of the story. It might be desirable for some users to take breaks given the complexity of the form and the significance of applying for a long term benefit. What we really care about is if they’re able to successfully complete the form. We don’t yet have a way of measuring form abandonment (users who drop off and do not return to the form within a given amount of time) and think this would be a good next step to focus on.
- We also don’t have a way of following unique users through the flow via Veteran ID. Because our form is an authenticated experience, this should be possible and would reduce the inflation in the pageviews.
- A Sankey diagram would be an ideal way of viewing the complex branching logic of our form and gaining clarity on the number of users following various paths. We think this would be possible in GA but requires some significant setup and customization. 
