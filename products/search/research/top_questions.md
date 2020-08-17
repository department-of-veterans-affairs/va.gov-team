# VA.gov Search 2.0 Analytics Review

Analytics request ticket [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12543).

## Project Overview
To better understand the effectiveness of (WBC) VA.gov's on-site and off-site search as a primary discovery tool, we conducted an analytics review to learn more about the following:

- user behavior
- off-site search positioning and performance (including site optimization, keyword authority, etc.)
- on-site search quality (including search results relevance, etc.) 

For the analysis, the following tools were used:

- For on-site search:
  - Search.gov Analytics
  - Google Analytics
  
- For off-site search:
  - Google Search Console
  - Bing Web Developer Tools
  - SEMRush

## On-Site Search
### Top Questions/Answers

**1. How important is on-site search as a discoverability tool for VA.gov users?  In other words, How often is search used by site visitors?**

- Since the launch of the modernized VA.gov in November 2018, the average number of searches conducted monthly has grown to more than 550,000
  - the average number of searches conducted daily over the past year is about 25,000, with a sharp decline on the weekends.
  - (Question: Has search activity grown or stalled over the past year?)
- 10.5% of site visitors used site search (Date Range: June 2019-2020 Source: Google Analytics)
- Search is tied for #6 among VA.gov site tasks (Source: Google Analytics [Top Tasks report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/IA-strategy+planning/analytics/top-task-analytics.md))
- Notably, search does not appear to be one of the [top interactions on the Home Page](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-events/a50123418w177519031p184624291/_u.date00=20190412&_u.date01=20200412&_.goalOption=ALL&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Scroll%20Depth%7CScript%20error.%22,1%5D,%5B0,%22analytics.pagePath%22,%22EQ%22,%22~2Findex.html%22,0%5D%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-segmentExplorer.segmentId=analytics.eventAction/)

***2. What are users searching for on VA.gov?***

Users are searching for general health and benefit information, forms, and some specific tasks. (Source: Google Analytics [Logged-in homepage discovery: Analytics review April 2019-April 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/analytics/analytics-summary.md).) 

- "Benefits" (~150K) and "health" (~59K) are the most searched terms. Given how generic these terms are, this may suggest that people are looking for more help and assistance from us on getting started with benefits.
- "Forms" (~24K) is also high on the list, which suggests people want a full list of VA forms.
- Benefits-related terms like "direct deposit" (~13K), "cemetery" (~10K), and "certificate of eligibility" (~8K) are high on the list
- "DD214" (~9K) is high on the list, reflecting users desire to get their military records.

<details>
  <summary><b>Top 25 search terms on the modernized VA.gov only (Source: Search.gov Sept. 2018-May 2019)</b></summary>
  
| \(Search Term \- Lowercase\) | Percentage of Searches       |
|------------------------------|------------------------------|
| loans                        | 4.11%                        |
| benefits                     | 3.79%                        |
| pension                      | 3.67%                        |
| burials                      | 3.24%                        |
| health                       | 3.23%                        |
| forms                        | 2.14%                        |
| jobs                         | 1.45%                        |
| dd214                        | 1.22%                        |
| ebenefits                    | 1.15%                        |
| direct deposit               | 1.08%                        |
| certificate of eligibility   | 1.01%                        |
| dental                       | .93%                         |
| aid and attendance           | .81%                         |
| chapter 35                   | .80%                         |
| agent orange                 | .75%                         |
| careers                      | .74%                         |
| coe                          | .74%                         |
| tms                          | .74%                         |
| 22-1995                      | .71%                         |
| champva                      | .69%                         |
| id card                      | .67%                         |
| va forms                     | .62%                        |
| gi bill                      | .62%                         |
| dbq                          | .56%                         |
| suicide                      | .55%                         |

  
</details>

***3. How effective is VA.gov's search tool at providing the information users/veterans are seeking? In other words, how many pages of results does a user view after executing a search? Ideally the result they want is in the first page or two of results.***

- While click-through tracking has not been available as part of VA.gov's implementation of the Search.gov utility, there are indicators that site search is not as effective as it needs to be.  According to [two years of Google Analytics data (July 2018-July 2020)](https://analytics.google.com/analytics/web/#/report/content-site-search-overview/a50123418w177519031p184624291/_u.date00=20180726&_u.date01=20200726):
  - **Exits (Bounces):** The number of exits from VA.gov site that occurred following a result from an internal search: 48% (This is the percent of searches where the user left without clicking through any result.)
  - **Paging:** The average number of pages a user viewed after conducting a search: 3.36 (viewing 1 page is considered optimal)
  - **Average Search Depth** While the average search depth (e.g., The number of pages visitors viewed after getting results for the search term) is 1.50, some of VA.gov's most popular search terms show a far more significant search depth.

| \(Search Term \- Lowercase\) | Average Page Depth           |
|------------------------------|------------------------------|
| benefits                     | 2.28                         |
| ebenefits                    | 3.00                         |
| 22-1995                      | 9.30                         |
| certificate of eligility     | 3.62                         |
| aid and attendance           | 3.00                         |
| chapter 35                   | 7.83                         |
| dd214                        | 2.77                         |
| direct deposit               | 4.00                         |

  
  
***4. How often does a search request end in 0 result?***

(Note: Users have information needs they expect the site to satisfy, yet the site search utility is unable to serve them.  May also indicate misspellings or typos that you’re not handling.)
  
***5. What is the average search depth for VA.gov?***

(Note: The number of pages viewed after performing a search. This is calculated as Sum of all search_depth across all searches / (search_transitions + 1)


***6. What is the average percentage of Search refinements -- e.g., the number of times a user searched again immediately after performing a search -- on VA.gov?***

(Note: Defined as the number of times a user searched again immediately after performing a search. Percentage Search Refinements = The percentage of searches that resulted in a search refinement. Calculated as Search Refinements / Pageviews of search result pages.)

The total number of times a refinement (transition) occurs between internal search keywords within a session is 30.55% 

***7. What is the average amount of time/duration users spend on VA.gov after performing a search.*** 

(Note: This is calculated as Sum of all search_duration across all searches / (search_transitions + 1)***

***8. What is the average number of search exits during a session on VA.gov*** 

(Note: The number of searches made immediately before leaving the site.)

***9. What is the Percentage of Search Exits on VA.gov*** 

(Note: Calculated as Search Exits / Total Unique Searches)


***10. How easy is it to find the Top Tasks via on-site search?***

(Note: This is the Big Question, and we need to align on what are the Top Tasks for VA.gov users -- e.g. the most important thing to a user when they are online and is the task they want to complete.   More about the Top Task framework -- and how to build alignment around it -- [is here](https://medium.com/@gerrymcgovern/identifying-customer-top-tasks-ee228206b6ed).   This framework goes beyond the tasks highlighted in the summary analytics report recently assembled by our [IA team here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/IA-strategy+planning/analytics/top-task-analytics.md). )



## Off-Site Search*


***1. What are the top referrals of off-site/organic Search traffic for VA.gov*** 

- Organic search is the top source of traffic for VA.gov, driving approximately 42% of traffic ([Source: Google Analytics, Jan 2019 - July 2020](https://analytics.google.com/analytics/web/#/report/acquisition-channels/a50123418w177519031p184624291/_u.date00=20190101&_u.date01=20200801/).  By comparison, 39% of traffic is direct (e.g. via URL or bookmark) and 15% is via referral sources (e.g. links from VEText, searchusa.gov, etc.)

  - The top referrers of search traffic are:
 
| Search Engine                | Percentage of Searches       |
|------------------------------|------------------------------|
| Google                       | 48.3%                        |
| Bing                         | 8.00%                        |
| Yahoo                        | 2.34%                        |
| Duckduckgo                   | 0.44%                        |


***2. In percentage terms, how much has organic search traffic grown since the launch of modernized VA.gov in November 2018?***

TBD


***3. What is the average conversion or Click Through Rate (CTR) -- the average percentage of users who click on one of VA links after seeing it in the search results -- for VA.gov?***

According to [Google Search Console, 5.1% (May 2019-August 2020)](https://search.google.com/u/2/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fwww.va.gov%2F&hl=en&start_date=20190402&end_date=20200801&metrics=CLICKS%2CIMPRESSIONS%2CPOSITION).  An average CTR on Google Search Console is about 10 to 20 percent.

***4. What's the bounce rate for VA.gov's landing pages***

According to [Google Analytics/Search Console](https://analytics.google.com/analytics/web/#/report/acquisition-sc-landingpages/a50123418w177519031p184624291/_u.date00=20190101&_u.date01=20200801/), VA.gov landing pages have an average 32% for single page sessions.

***5. What is the average position for VA.gov and its top search terms?***

According to [Google Search Console, 22.8% (May 2019-August 2020)](https://search.google.com/u/2/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fwww.va.gov%2F&hl=en&start_date=20190402&end_date=20200801&metrics=CLICKS%2CIMPRESSIONS%2CPOSITION).

(Explainer: If you're at the top of page two, your position might be 11. “Average position” is an average (the sum of positions divided by the total number of keywords) of your positions for every keyword you rank for. The general report shows the average of your positions for every keyword your entire site ranks for.)

***6. What are engagement metrics for search-referred visitors -- e.g. pages per session, session duration and bounce rate?***


***7. How highly ranked are VA.gov's landing pages (or Top Tasks)?*** 


***8. What are the top exit pages for organic traffic?***

(Explainer: Exit pages are the last pages that people visit before they leave your site. It’s important that you track the top exit pages. Why? Because those pages are probably your “problem children.”  They’re pages that cause people to lose interest in your site and go elsewhere -- or, alternatively -- they are effective at providing the answers that users are seeking.)

***9. How do the top keywords for VA.gov perform via organic search?***



***10. What's the average click through rate for VA.gov's top keywords?***
(Explainer:  This is the average percentage of people who click on one of your links after seeing it in the search results. It’s a stat you should pay attention to because it tells you more than just how well your pages rank in the SERPs. It also tells you how much the content appeals to people.)

  - By Landing Page (Explainer: Examining CTR by landing page will show you your most important pages from an SEO perspective. Those are the pages that get the most attention from the search results. You should also look at the pages with the lowest CTRs and optimize them.)

  - By Top Keywords (Explainer: If you see that a term is getting you a lot of clicks, you should determine which pages are ranking for those keywords and ensure that your page content accurately reflects searcher intent. It might be a good idea to test conversion optimization elements on these pages.)


***11. How highly does VA.gov rank/rate for Domain Authority or Authority Score*** 
(Note: SEMRush describes Authority Score as Authority Score is our compound domain score that grades the overall quality of a website. The higher the score, the more assumed weight a domain’s or webpage’s backlinks could have)



## Background & Resources

**On-Site Search**

**Off-Site Search**
- Article: [The 12 Most Important SEO Metrics to Monitor](https://searchengineland.com/12-most-important-seo-metrics-to-monitor-285190)
