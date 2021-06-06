
# Initiative Brief: Surfacing Other Search Tools

  

#### Overview
 

## Description

VA.gov does not have a unified search experience.  In particular, a Veteran seeking a VA location, VA form or answers to common questions (as found in Resources and Support)can not easily surface the content within those tools via on-site search because:

- Current limitations of Search.gov -- Collections, a faceted search feature, is not available in the API
- Those VA.gov tools are powered by their own search/look-up utilities

Two recent Veteran-focused user research sessions highlight this discoverability issue.  

- In a [April-May study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/202104-baseline-wayfinding/research-report.md):
   - It was observed that many participants did not notice the Find a Form and Resources & support links in the footer
   - For find VA location, which is prominently displayed in the site header, two participants never found the facility locator and instead used site search. 
- In a [January-February study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/research-study-jan-2021/research-findings.md):
   - Most participants did not see the right rail with "More VA search tools" on the search results page because of browser width/mobile use. 
   - Participants were more likely to see Find a Facility than Find a Form because of its location on the header.

With this initiative, the Search & Discovery team intends to test one or two "bets" with the goal of improving the findability of VA.gov's most popular search tools.

**Related product(s)**

Product: Onsite Search| [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/product-outline.md)

  
## Problem Statement

*Describe the challenge / pain point you seek to address:*
* What is the problem?
* Which Veteran/organizational segments are most affected by the problem?
* Where does this problem affect the Veteran journey?
* Why do you think the problem is occurring? Other reasons why this might be occurring?
* How does this outcome help achieve a prioritized Crew Objective and further DE's mission and goals?


As a user, I do not always find what I am looking for using global search and I am unaware of other search tools offered on VA.gov that may provide me with more targeted results that are better suited to my needs. This problem persists for all VA.gov users especially those using a mobile device (details below).

The search results page currently uses the right rail pattern for search tools. The design system council has deprecated the [right rail component](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/160#issuecomment-679126217) because of visibility issues. We need to find a different pattern for surfacing these tools.

  

## Evidence of the problem

*Describe the qualitative and quantitative data to support this problem.*

  

## Outcomes

### Desired User Outcomes

  

- Users will be able to more easily find the information they need by accessing the variety of targeted VA search tools resulting in less frustration

- Will create more awareness and usage of other search tools that are available to users

- The right rail was hidden for most users (due to media queries pushing it to the bottom of the page on both desktop and mobile) in past user testing, users were not able to locate Find a Form. Users will be more likely to use Find a Form if they are not able to locate a form using global search.

- Veterans, their caregivers, and their advocates are more quickly and easily able to access the content, forms, documents, facilities, or other resources they need.

  

### Undesired User Outcomes

  

- Users are confused or frustrated by the multiple search tools available to them.

- Legacy search tools complicate the overall experience for the users as they may have a different look and feel or various navigational elements may differ.

  
  

### Desired Business Outcomes

  

- Veterans, their caregivers, and their advocates use the search tools more which causes an Increase in overall use of search tools

- Veterans, their caregivers, and their advocates take advantage of the resources they are searching for.



  
  
  

### Undesired Business Outcomes

  
- Veterans and their families lose trust in VA.go search tools when the navigation routes them to various search tools which do not have a consistent look and feel---

  
  

## Measuring Success

  
  

### Key Performance Indicators (KPIs)

*Which of your product's existing KPIs will you look at to understand if your solution is meeting your desired user and business outcomes, and not bringing about undesired outcome? Include links to Domo or Google Analytics Dashboards/Reports?*

  

KPI | Target | Link to data source
|----------|-------------|--------------------|
| Search Exits (Bounce Rate) |TBD | Onsite Search Domo Dashboard Coming Soon |
| Refinement Rate |TBD |Onsite Search Domo Dashboard Coming Soon  |
| Average Search Depth| TBD| Onsite Search Domo Dashboard Coming Soon   |
| Conversion Rate for search users |TBD |Onsite Search Domo Dashboard Coming Soon   |

  **Other Metrics: Not part of Onsite Search KPIs**
  - Increase traffic to other search tools
  - Users select ‘yes’ on “Were you able to find what you were looking for?” on future Medallia survey

#### Baseline KPI Values

 _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._
- TBD Awaiting on Domo Dashboard for Onsite Search expected late June/early July.
-  Current Right Rail Links - Google Analytics [GH ticket with clarification]



  

### Objectives and Key results (OKRs)

_What are the measurable targets you're aiming for that delivers value for Veterans?_

  

Objective:

- Increased use of other search tools resulting in increased page views

- Users are more easily able to find what they searched for (shown through user research and Medallia survey)

  
  
  
  

## Assumptions/ Risks

*Your Discovery (next section) should describe how you'll validate these items. Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints.*

- Usability:
  - Findings from user research are representative of Veterans across the Veteran journey.
  - Only 2% of users were clicking on the right rail navigation because for most users(on desktop, tablet, and mobile), media queries forced that section to the bottom of the page, even on desktop.
- Value:
    - Users value the targeted search tools because they offer a unique experience aligned to their needs.*
- Feasibility:
  - List of search tools is manageable and targeted
- Viability:
   - The search tools being surfaced are actively maintained by the VA to ensure content is relevant and accurate
 

  






---
  

## Discovery + Approach

*Describe the experiments, prototypes, etc. you'll develop to efficiently validate your assumptions.*

  
  
  

*What are you going to build now, and why have you decided to start there?*

- A way to increase awareness and access to other VA search tools while using global search.

  

*Why this solution / approach over other solutions / approaches?*

- Users should be offered a singular location for all their search needs where they are able to search broadly for any topic and scoping/refinement of their search should only be applied after the user's initial search [(Source).](https://www.nngroup.com/articles/scoped-search/?lm=search-no-results-serp&pt=article) For this reason, other search tools should be presented after the initial search has been completed.

  

*What have you explicitly decided to not include in this initial set of functionality, and why?*

- We are not making the user filter before they search. Users should be able to conduct a broad search for what they are looking for and then have the ability to refine the search as needed.
  

*How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

 - The VA search tools chosen will be evaluated on a case by case basis. Usage data has been evaluated (see below) and stakeholders will be consulted to ensure we are presenting veterans with tools that offer value.

## Hypotheses/Bets for Consideration

1) Create a left-hand nav for all search tools
-Users will want to enter a search term first, then "filter" results.
-Selecting another search tool is similar to filtering and refining results.
-Utilizes recognized design pattern used elsewhere on VA.gov
2) Expanding Search Input field “Super Search” - Ryan Concept 
-Similar to benefits hub drop down popup
-Could add: Most recent searches if authenticated
-How would that interact with the existing typeahead experience?
3) Typeahead Enhancements “Search Intent” (eg. Routed Query) [Requires exploration]
-Match query to filter by intent and make search recommendation  - i.e. form numbers, location (using db of locations)
-Could be confusing to users if that isn’t what they meant to search for. 



## Other search tool links to include




Primary links:
Primary search tools links were chosen based on strategic direction and anticipated benefit for the users. Each follows the same UI pattern and therefore presents the user with the same navigational experience. 

- [Find a Form](https://www.va.gov/find-forms/)

- [Resources and Support](https://www.va.gov/resources/)

  

Secondary links:
Usage data presents various interpretations and therefore the following links may change after review. 
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

[GH ticket with clarification](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20168#issuecomment-805226952)**

  

<img width="455" alt="Screen Shot 2021-04-14 at 2 22 33 PM" src="https://user-images.githubusercontent.com/5553542/115915991-21fda580-a442-11eb-8298-080bd55f0348.png">

  
  

**C.) Pageviews for other search tools**

  

| Search tool | Page Views |
|----------|-------------|
| [Find a VA Location](https://www.va.gov/find-locations/) | 4,456,234 |
| [Find a Form](https://www.va.gov/find-forms/) | 3,615,141 |
| [GI Comparison Tool](https://www.va.gov/gi-bill-comparison-tool/) | 2,270,903 |
| [Find Locations](https://www.va.gov/directory/guide/home.asp) | 1,053,065 |
| [Yellow Ribbon Schools](https://www.va.gov/education/yellow-ribbon-participating-schools/) | 858,593 |
| [VSO Search](http://www.ebenefits.va.gov/ebenefits/vso-search/) | 171,121 |
| [Resources and Support](https://www.va.gov/resources/) | 107,687 |
| [Publications](https://www.va.gov/vapubs/) | 77,649 |
| [Grave Locator](https://gravelocator.cem.va.gov/) | 7,422 |
| [BVA Appeals](https://www.index.va.gov/search/va/bva.jsp), [WARMS](https://www.index.va.gov/search/va/va_adv_search.jsp?SQ=www.benefits.va.gov/warms), [VA Jobs](https://www.vacareers.va.gov/job-search/index.asp) | Not being tracked on GA |

  
  

**D.) Search term**

  

| Contains the word | Total unique searches |
|----------|-------------|
| Forms | 493,487 |
| Jobs | 31,764 |
| Grave | 15,058 |
| Location | 14,696 |
| VSO | 9,436 |
| BVA | 2,804 |
| Publication | 1,230 |
| Gi bill comparison | 879 |
| WARMS | 669 |
| Yellow ribbon school | 323 |

  
  
  ## Search Tool Usage
As seen in Search usability study in January and February, 2021, we know that:
 - 80% were able to locate Find a Facility
 - 30% were able to locate Find a Form
  
As seen in Wayfinding Baseline usability study conducted in April and May, 2021, we can see that users have an overall low click rate on the search tools when they are located in the footer. We can see on Desktop:
 - 33% Find a Form
 - 22% Resources & Support
 - 11% Find a Facility + (56% on header) = 66% total

<img width="892" alt="Screen Shot 2021-05-24 at 11 56 58 AM" src="https://user-images.githubusercontent.com/72393866/119409144-d9414280-bcb4-11eb-9ffe-a32546237268.png">


A slight increase in usage was seen for Find a Forms but overall the results were confirmed in Google Analytics data from 3/24/2021- 04/24/2021.
We can see:
 - 20K Find a form
 - 4K Resources & Support
 - 3K Find a facility
<img width="908" alt="Screen Shot 2021-05-24 at 5 24 42 PM" src="https://user-images.githubusercontent.com/72393866/119409206-f37b2080-bcb4-11eb-8e48-bf19b9c905dc.png">

## Resources & Support Usage Data
- VA.gov users can be seen navigating to resources and support to look for forms. The following data (screenshot below) shows that the top search term for the month of May 2021 was for form dd214. This further evidence supports the findings that the various search experiences are not easily discovered and users are not sure wehre to go to find what they are looking for. Data captured using [Resources and Support Usage Report](https://analytics.google.com/analytics/web/#/report/content-site-search-search-terms/a50123418w177519031p176188361/_u.date00=20210501&_u.date01=20210531&explorer-table.secSegmentId=analytics.searchStartPage&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.searchStartPage%22,%22PT%22,%22www.va.gov~2Fresources%22,0%5D%5D/) in Google Analytics. 

![image](https://user-images.githubusercontent.com/72393866/120655523-c2d37d80-c450-11eb-98d3-e25e6898b71b.png)



## Prioritization

*Describe and prioritize the competing hypotheses the team develops as a result of discovery accounting for effort, impact, value, confidence.*

  

## Collaboration Cycle

*Use for any Collab Cycle tracking, questions.*

  

- Kickoff ticket

  
  
  
  

## Go-to-market Strategy

- *How are Veterans and others using this product going to know it exists?*

- *What marketing, outreach, or communications are necessary for this product to be successful?*

- List item

  
  

### Timeline

- [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

- Target Launch Date - TBD

- Actual Launch Date - TBD

  
  
  
  

## Solution Narrative

  

### Current Status

  

- List item

  

### Key Decisions

  

- List item

  

## Screenshots

  

### Before

#### VA.gov Global Search (results)

![image](https://user-images.githubusercontent.com/73354907/114746181-70fa5b00-9d1d-11eb-9e68-447f28d728d3.png)

  
  

### After

  
  
  

## Communications

  

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

  
  

#### �Stakeholders

_What offices/departments are critical to make this initiative successful?_

  

<details>

  

- Office/Department:

- Contact(s):

</details>


