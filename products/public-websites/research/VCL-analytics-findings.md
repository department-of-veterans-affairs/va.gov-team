# VA.gov Veterans Crisis Line Analytics Findings

### Cindy Merrill, VSA Public Websites team, Nov 5, 2021


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

When a user clicks on one of these links, a modal dialog box opens with links to various ways for a Veteran to get help right away (see screenshot below). 
<details>
  <summary>VCL modal (Click to show screenshot)</summary>
  
  ![VCL modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/VCL-modal.png)
</details>

## Research Questions
1. What is the current usage of the VCL links?
2. What is the current usage of the links in the VCL modal?
3. How does usage vary depending on the user's device (mobile *vs.* desktop)?
4. How useful is the modal *vs.* instead taking users to [VeteransCrisisLine.net](https://www.veteranscrisisline.net/)?

## Methodology
Analyzed findings from the following Google Analytics reports:
1. [VCL in header clicks](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Navigation%20-%20Jumplink%20Click%20-%20(.*)Veterans%20Crisis%20Line%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
2. [VCL in footer clicks](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Navigation%20-%20Footer%20-%20Veterans%20Crisis%20Line%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
3. [VCL modal > call regular number](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Outbound%20Link%20Clicked:%20tel:18002738255%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
6. [VCL modal > chat](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Outbound%20Link%20Clicked:%20https:~2F~2Fwww.veteranscrisisline.net~2FChatTermsOfService.aspx%3Faccount=Veterans%252520Chat%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
5. [VCL modal > call TTY number (if hearing loss)](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Outbound%20Link%20Clicked:%20tel:+18007994889%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory/)
7. [VCL modal > veteranscrisisline.net](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211031&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22EQ%22,%22Outbound%20Link%20Clicked:%20https:~2F~2Fwww.veteranscrisisline.net~2F%22,0%5D%5D&explorer-table.secSegmentId=analytics.deviceCategory&explorer-table.rowCount=250/)
8. [VCL modal > text](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20211001&_u.date01=20211104&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.filter=sms:&explorer-table.secSegmentId=analytics.deviceCategory&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22sms:%22,0%5D%5D/) -- Analytics instrumentation was just added on 11/3/2021, and so not much data has been collected yet; thus, the usage cannot be compared with other links in the modal at this time.

Accessibility specialist Angela Fowler briefly tested all the VCL links in the modal using a screen reader.

## Findings
### Usage of VCL links
1. The **VCL links on VA.gov pages are definitely getting used**, as shown by 8,272 unique user sessions in the past month (Oct 2021).
1. **Most clicks to VCL (94%) are from the red link at the top of VA.gov pages, and a majority of them (61%) are from mobile**.
2. Only 6% of clicks are from the link in the footer, and most of these (86%) are from desktop users--presumably because mobile users don't usually scroll down that far on pages. 

The analytics data are summarized in the table below.

![clicks-to-VCL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/clicks-to-VCL.png)

### Usage of VCL modal 
1. **About half of all visits to the VCL modal result in a link being clicked**. The 50% dropoff rate may be due to desktop users picking up their phone to call or text using the number shown in the modal.  
1. **The most frequently used link in the VCL modal is chat** (45% of all unique events). Chat is clicked from both desktop and mobile, but more from desktop--maybe because it's easier to type on a physical keyboard than on a mobile screen.
2. **The second most frequently used link is phone call (37%)**. 
3. **Only about 14% of users click on VeteransCrisisLine.net** at the bottom of the modal, and it's about evenly split between mobile and desktop users.
4. 5% of users click the TTY phone number.
5. A majority of clicks on both phone number links are from mobile devices, which isn't surprising because most people don't make calls on their computer.
6. Analytics weren't being tracked on the text link but will be soon.

The analytics data are summarized on a screenshot of the modal and in the table below. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/VCL-modal-analytics.png" width="55%" height="55%">

![clicks-in-VCL-modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/clicks-in-VCL-modal.png)

### What if the VCL modal were replaced with a link to VeteransCrisisLine.net?
<details>
  <summary>VeteransCrisisLine page (Click to show screenshots)</summary>
  
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/VeteransCrisisLine-top.png" width="55%" height="55%">
  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/VeteransCrisisLine-scrolled.png" width="55%" height="55%">
</details>


The possibility of replacing the VCL modal with a link directly to [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) was proposed. Here are a few issues with this approach:
1. [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) requires the user to scroll down to see all of the action buttons, which are completely hidden when the page opens due to its layout on both mobile and desktop. **The risk is that a Veteran in crisis won't scroll to see the action buttons and thus not get any help.**
    1. In contrast, the VLC modal with its links displays on mobile and desktop screens without any scrolling needed.
3. How well does the [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) work? Seeing analytics data for the 4 action buttons on the page would be helpful to compare with the data we have on the VCL modal usage; we would want to see a similar pattern of usage for the different ways of getting help. 
4. The TTY phone number that you get to from [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) (711 then 1-800-273-8255) is different from the TTY phone number in the VCL modal (800-799-4889). Which one is correct?
5. Veterans may be concerned about going to a URL that ends in *.net*, especially considering the guidance at the top of all VA.gov pages about *.gov* and *.mil* being trusted:

![Government URL guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/images/govt-URL-extensions.png)

### Accessibility
Accessibility Specialist Angela Fowler tested the VCL modal with a screen reader and found that it works smoothly. In contrast, the [Chat page](https://www.veteranscrisisline.net/get-help/chat) that opens from both the VCL modal and [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) has a few accessibility issues:
1. Focus should be placed on the "Start your confidential chat" button so you don't miss it while scrolling down through the page.
2. The headings on the page aren't nested properly--they go from *h1* to *h4* without *h2* or *h3* in between.

## Recommendations
1. Keep the VCL modal as is because it's (1) being used, (2) accessible, and (3) requires no scrolling. 
1. Don't replace the VCL modal with a link to [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) because it (1) requires scrolling and (2) has accessibility issues. 
    1. If we still want to consider this replacement, learn more about what might happen by looking at analytics for [VeteransCrisisLine.net](https://www.veteranscrisisline.net/). We would want to know if the usage pattern of call/chat/text/TTY is similar to that of the VCL modal. [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) is instrumented for Google Analytics, but since the page isn't part of VA.gov, our Analytics & Insights team doesn't have access to the analytics. To pursue this, we would need to find someone who works on [VeteransCrisisLine.net](https://www.veteranscrisisline.net/) and ask them for analytics.
3. Fix the accessibility issues with the [VeteransCrisisLine Chat page](https://www.veteranscrisisline.net/get-help/chat):
    1. Focus should be placed on the "Start your confidential chat" button so you don't miss it while scrolling down through the page.
    1. Fix the headings so they are sequential without skipping any (e.g., *h1*, *h2*, *h3*).
1. Confirm that the TTY phone number in the VCL modal is correct.

