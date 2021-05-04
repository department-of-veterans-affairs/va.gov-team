# Surfacing Other Search Tools Product Outline
---

## Overview
Increasing visibility of other VA search tools after a user conducts a search.  

## Problem Statement
As a user, I do not always find what I am looking for using global search and I am unaware of other search tools offered on VA.gov that may provide me with more targeted results that are better suited to my needs. 

The search results page currently uses the right rail pattern for search tools. The design system council has deprecated the [right rail component](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/160#issuecomment-679126217) because of visibility issues. We need to find a different pattern for surfacing these tools.
 
## Desired User Outcomes

- Users will be able to more easily find the information they need by accessing the variety of targeted VA search tools resulting in less frustration
- Will create more awareness and usage of other search tools that are available to users
- The right rail was hidden for most users (due to media queries pushing it to the bottom of the page on both desktop and mobile) in past user testing, users were not able to locate Find a Form. Users will be more likely to use Find a Form if they are not able to locate a form using global search.
- Veterans, their caregivers, and their advocates are more quickly and easily able to access the content, forms, documents, facilities, or other resources they need.

## Undesired User Outcomes

- Users are confused or frustrated by the multiple search tools available to them.
- Legacy search tools complicate the overall experience for the users as they may have a different look and feel or various navigational elements may differ. 


## Desired Business Outcomes

- Veterans, their caregivers, and their advocates use the search tools more.
- Veterans, their caregivers, and their advocates take advantage of the resources they are searching for.
- Veterans, their caregivers, and their advocates are less likely to call for support.
- Increase in overall use of search tools



## Undesired Business Outcomes

- Veterans and their families lose trust in VA.go search tools when the navigation routes them to various search tools which do not have a consistent look and feel---
## Measuring Success


### 🚩 Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
 
* _What are the most important metrics that track with this product/initiative's success?_
- Decrease Paging (average number of search pages a user viewed)
- Decrease Average Search Depth
- Decreased Search Refinement
- Increase traffic to other search tools
- Users select ‘yes’ on “Were you able to find what you were looking for?” on future Medallia survey

* _Include links to Domo or Google Analytics Dashboards/Reports_


* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

- TBD 

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Increased use of other search tools resulting in increased page views
  - Users are more easily able to find what they searched for (shown through user research and Medallia survey)


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

- Findings from user research are representative of Veterans across the Veteran journey.
- Only 2% of users were clicking on the right rail navigation because for most users(on desktop, tablet, and mobile), media queries forced that section to the bottom of the page.
- The search tools being surfaced are actively maintained by the VA to ensure content is relevant and accurate
- Users value the targeted search tools because they offer a unique experience aligned to their needs. 


## Solution Approach

- *What are you going to build now, and why have you decided to start there?*

A way to increase awareness and access to other VA search tools while using global search. 

- *Why this solution / approach over other solutions / approaches?*

- Users should be offered a singular location for all their search needs where they are able to search broadly for any topic and scoping/refinement of their search should only be applied after the user's initial search. [source](https://www.nngroup.com/articles/scoped-search/?lm=search-no-results-serp&pt=article) For this reason, other search tools should be presented after the initial search has been completed.

- *What have you explicitly decided to not include in this initial set of functionality, and why?*

- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

- The VA search tools chosen will be evaluated on a case by case basis. Usage data has been evaluated (see below) and stakeholders will be consulted to ensure we are presenting veterans with tools that offer value.

## Other search tool links to include

Primary links:
- [Find a Form](https://www.va.gov/find-forms/)
- [Resources and Support](https://www.va.gov/resources/)

Secondary links:
- [Find a VA Location](https://www.va.gov/find-locations/)
- [BVA Appeals](https://www.index.va.gov/search/va/bva.jsp)
- [GI Comparison Tool](https://www.va.gov/gi-bill-comparison-tool/)
- [Yellow Ribbon Schools](https://www.va.gov/education/yellow-ribbon-participating-schools/)
- [VA Jobs](https://www.vacareers.va.gov/job-search/index.asp)

## Usage Data to determine which search tool links should be included (Apr 1, 2020 - Apr 1 2021)

**A.) [Search Tool Comparison - Google Analytics](https://analytics.google.com/analytics/web/?authuser=0#/my-reports/GZ-V2ZRcSl6LWnxJxnr2NQ/a50123418w177519031p176188361/_u.date00=20200401&_u.date01=20210410&1681-table.plotKeys=%5B%5D&1681-table.rowCount=10/)
[GH ticket with clarification](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20168#issuecomment-809722003)**

<img width="717" alt="Screen Shot 2021-04-14 at 2 21 50 PM" src="https://user-images.githubusercontent.com/5553542/115915971-1ad69780-a442-11eb-902b-ecd34962c8c3.png">


**B.) [Current Right Rail Links - Google Analytics](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20200401&_u.date01=20210401&_r.drilldown=analytics.eventCategory:Interactions&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22PT%22,%22Navigation%20-%20Search%20Results%20-%20More%20VA%20Search%20Tools%22,0%5D%5D/)
[[GH ticket with clarification](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20168#issuecomment-805226952)**

<img width="455" alt="Screen Shot 2021-04-14 at 2 22 33 PM" src="https://user-images.githubusercontent.com/5553542/115915991-21fda580-a442-11eb-8298-080bd55f0348.png">


**C.) Pageviews for other search tools**

| Search tool | Page Views | 
|----------|-------------|
| [Find a VA Location](https://www.va.gov/find-locations/)  |     4,456,234        |
| [Find a Form](https://www.va.gov/find-forms/)       |     3,615,141        |
| [GI Comparison Tool](https://www.va.gov/gi-bill-comparison-tool/)  |      2,270,903        |
| [Find Locations](https://www.va.gov/directory/guide/home.asp)   |      1,053,065        |
| [Yellow Ribbon Schools](https://www.va.gov/education/yellow-ribbon-participating-schools/)  |      858,593        |
| [VSO Search](http://www.ebenefits.va.gov/ebenefits/vso-search/)  |      171,121        |
| [Resources and Support](https://www.va.gov/resources/)   |     107,687        |
| [Publications](https://www.va.gov/vapubs/)  |     77,649        |
| [Grave Locator](https://gravelocator.cem.va.gov/)  |     7,422        |
| [BVA Appeals](https://www.index.va.gov/search/va/bva.jsp), [WARMS](https://www.index.va.gov/search/va/va_adv_search.jsp?SQ=www.benefits.va.gov/warms),  [VA Jobs](https://www.vacareers.va.gov/job-search/index.asp)  |     Not being tracked on GA   |


**D.) Search term**

| Contains the word | Total unique searches | 
|----------|-------------|
| Forms   |     493,487        |
| Jobs    |     31,764        |
| Grave  |      15,058        |
| Location   |      14,696    |
| VSO  |      9,436    |
| BVA  |      2,804       |
| Publication    |     1,230      |
| Gi bill comparison   |     879       |
| WARMS  |     669        |
| Yellow ribbon school  |     323   |


## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
 All products currently exist.

- *What marketing, outreach, or communications are necessary for this product to be successful?*
### External Communcation
These changes should be completely seamless to end users. 

### Internal Communication


## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

  - 
---

## 🚩Solution Narrative

### Current Status

### Key Decisions

   
## Screenshots

### Before
#### VA.gov Global Search (results)
![image](https://user-images.githubusercontent.com/73354907/114746181-70fa5b00-9d1d-11eb-9e68-447f28d728d3.png)


### After

---

####🚩 Communications

<details>

- Team Name: Search & Discovery
- GitHub Label: vsa-search-discovery
- Slack Channel: #va-search


</details>

#### Team Members

<details>
 
- DEPO Lead: John Hashimoto
- PM: Denise Coveyduc
- Engineering: Sam Suddath
- Research/Design: Megan Gayle & Cindy Merrill 

</details>


#### 🚩Stakeholders

<details>
 
🚩_What offices/departments are critical to make this initiative successful?_
 
</details>

