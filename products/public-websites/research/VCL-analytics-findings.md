# VA.gov Veterans Crisis Line Analytics

### Cindy Merrill, VSA Public Websites team, Nov 4, 2021


## Background
The Veterans Crisis Line (VCL) is a special link that's displayed at the top of every modernized VA.gov page, as well as in the footer. See screenshots below with the links circled in pink.

<details>
  <summary>VCL link in the header (Click to show screenshot)</summary>
  
  ![VCL link in the header](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/VCL-link-header.png)
</details>

<details>
  <summary>VCL link in the footer (Click to show screenshot)</summary>
  
  ![VCL link in the footer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/VCL-link-footer.png)
</details>

When a user clicks on one of these links, a modal dialog box opens with various ways to get in touch (see screenshot below). 
<details>
  <summary>VCL modal (Click to show screenshot)</summary>
  
  ![VCL modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/VCL-modal.png)
</details>

## Research Questions
1. What is the current usage of the VCL links?
2. What is the current usage of the links in the VCL modal?
3. How does usage vary depending on the user's device (mobile vs. desktop)?
4. How useful is the modal *vs.* instead taking users to [VeteransCrisisLine.net](https://www.veteranscrisisline.net/)?

## Methodology
Analyze findings from the following Google Analytics reports:
1. [VCL in header clicks](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Navigation%20-%20Jumplink%20Click%20-%20(.*)Veterans%20Crisis%20Line%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
2. [VCL in footer clicks](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Navigation%20-%20Footer%20-%20Veterans%20Crisis%20Line%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
3. [VCL modal > call regular number](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Outbound%20Link%20Clicked:%20tel:18002738255%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
6. [VCL modal > chat](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Outbound%20Link%20Clicked:%20https:~2F~2Fwww.veteranscrisisline.net~2FChatTermsOfService.aspx%3Faccount=Veterans%252520Chat%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
5. [VCL modal > call TTY number (if hearing loss)](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Outbound%20Link%20Clicked:%20tel:+18007994889%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
7. [VCL modal > veteranscrisisline.net](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Outbound%20Link%20Clicked:%20https:~2F~2Fwww.veteranscrisisline.net~2F%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory&explorer-table.rowCount=250/)

Note: There are currently no analytics available for the **VCL modal > text** link, but this is being added by the Analytics team. It will be another month before we'll have collected enough data to compare with the other links in the modal.

In order to consider what might happen if we were take users directly to [VeteransCrisisLine.net](https://www.veteranscrisisline.net/), looking at analytics for this page would be helpful. We would like to see how users interact with [VeteransCrisisLine.net](https://www.veteranscrisisline.net/), especially users who get there in some way that's not our VCL modal. [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) is instrumented for Google Analytics, but since the page isn't part of VA.gov, our Analytics & Insights team doesn't have access to the analytics. Is there someone who works on [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) that we could contact for analytics? 

## Findings
### Usage of VCL links
1. **Most clicks to VCL (94%) are from the red link at the top of VA.gov pages**, and a majority of them (61%) are from mobile.
2. Only 6% of clicks are from the link in the footer, and most of these are from desktop users (because mobile users don't usually scroll down that far on pages). 
The analytics numbers are summarized in the table below.

![clicks-to-VCL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/clicks-to-VCL.png)

### Usage of VCL modal 
1. The most frequently used links in the VCL modal are for chat (45% of all unique events) and phone call (37%). 

show usage #'s on screenshot and summarize

![clicks-in-VCL-modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/clicks-in-VCL-modal.png)


## Recommendations
1. 
