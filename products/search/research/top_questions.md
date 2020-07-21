# VA.gov Search 2.0 Analytics Review

## Project Overview
To better understand the effectiveness of (WBC) VA.gov's on-site and off-site search as a primary discovery tool, we conducted an analytics review to learn more about the following:

- user behavior
- off-site search positioning and performance (including site optimization, keyword authority, etc.)
- on-site search quality (including search results relevance, etc.) 

For the analysis, the following tools were used:

- For on-site search:
  - Search.gov Analysits
  - Google Analytics
  
- For off-site search:
  - Google Search Console
  - Bing Web Developer Tools
  - SEMRush
  
Source Document for Data: https://docs.google.com/document/d/1CFY2iCZT_92venp8NCgTXjPRS2cI_3OURN6yFJIxhMY/edit

## On-Site Search
### Top Questions/Answers

***1. How important is on-site search as a discoverability tool for VA.gov users?***
- 10.5% of site visitors used site search (Date Range: June 2109-2020 Source: Google Analytics)
- Search is tied for #6 among VA.gov site tasks (Source: Google Analytics [Top Tasks report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/IA-strategy+planning/analytics/top-task-analytics.md))

***2. What are users searching for on VA.gov?***

Users are searching for general health and benefit information, forms, and some specific tasks. (Source: Google Analytics [Logged-in homepage discovery: Analytics review April 2019-April 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md).) 

- "Benefits" (~150K) and "health" (~59K) are the most searched terms. Given how generic these terms are, this may suggest that people are looking for more help and assistance from us on getting started with benefits.
- "Forms" (~24K) is also high on the list, which suggests people want a full list of VA forms.
- Benefits-related terms like "direct deposit" (~13K), "cemetery" (~10K), and "certificate of eligibility" (~8K) are high on the list
- "DD214" (~9K) is high on the list, reflecting users desire to get their military records.

<details>
  <summary><b>Top Search Terms (Modernized site data VA.gov only)</b></summary>

Report Name | Desktop/Tablet/Mobile data
:--- | :---: |
Top Pages on VA.<span></span>gov Modernized | [report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_.useg=builtin1/) | 
Top 25 Pages - Logged-in Sessions | [report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=usersYzZ0EUDT4uJLecPmCwn3Q&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/) | 
Top 25 Pages - Logged-out sessions | [report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.useg=userBgZiUrK9Sieg7jBAnx44OQ&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/) | 
Top 25 Landing Pages | [report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-landing-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25/) | 
Site Search | [report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md#people-are-searching-for-general-health-and-benefit-information-forms-and-some-specific-tasks-we-may-want-to-do-a-better-job-of-elevating) | 
Mobile Usage | | [report](https://analytics.google.com/analytics/web/?authuser=0#/report/visitors-mobile-overview/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.goalOption=ALL/)
Top 25 Before Homepage | [report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.goalOption=ALL&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.rowStart=0&explorer-table.rowCount=25&_r.drilldown=analytics.pagePath:~2Findex.html/) |
Top 25 Interactions on Homepage (Excluding Scrolling) | [report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.goalOption=ALL&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Scroll%20Depth%7CScript%20error.%22,1%5D,%5B0,%22analytics.pagePath%22,%22EQ%22,%22~2Findex.html%22,0%5D%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-segmentExplorer.segmentId=analytics.eventAction/) | 
My VA Previous Page Path | [report](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.filter=my-va&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&explorer-table.secSegmentId=analytics.previousPagePath&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22RE%22,%22my-va%22,0%5D%5D/) | 
My VA Entrances | [report](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&explorer-table.advFilter=%5B%5B1,%22analytics.entrances%22,%22GT%22,%220%22,0%5D,%5B0,%22analytics.pagePath%22,%22PT%22,%22my-va%22,0%5D%5D/) | 
Top Events on My VA Pages | [report](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22my-va%22,0%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22Script%20error.%22,1%5D%5D&explorer-table.rowCount=25/) | table.rowCount=25&_.useg=builtin11/)
| Homepage vs. My VA user 3-month report | [report](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p184624291/_u.date00=20200101&_u.date01=20200402&_.useg=builtin1,userDatUa-iUR--ymOCPRsvErg,userTBuj9_dPSF-sBQQO9Srv-g&overview-graphOptions.primaryConcept=analytics.totalVisitors/)|

</details>

***3. How effective is VA.gov's search tool at providing the information users/veterans are seeking?***

- While click-through tracking has not been available as part of VA.gov's implementation of the Search.gov utility, there are indicators that site search is not as effective as it needs to be.  Cases in points:
  - The percentage of Search exits is nearly 50%

## Off-Site Search*
https://searchengineland.com/12-most-important-seo-metrics-to-monitor-285190
