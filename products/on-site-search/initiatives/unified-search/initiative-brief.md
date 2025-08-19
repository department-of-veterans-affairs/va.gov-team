# Initiative brief: Unified search - Manage search POC

## Outcome Summary
Site visitors can utilize a single search experience to find the information they need regardless of where the information is stored - general web content, facility location data, forms database, authenticated or personal information.   

**Related/Associated product(s)**
- [On-site search product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/unified-search-product-outline.md)

## Problem
We currently have multiple search solutions in place across various experiences on VA.gov. These independent solutions not only require visitors to know where to go on the site to search for specific types of information, they also are not meeting expectations in relevancy of results returned. Examples of documented issues include:
- Irrelvant, and sometimes inaccurate, search results returned in sitewide search
- R&S search doesn't return results for core information that lives outside of R&S, such as benefit eligibility
- Forms do not appear in sitewide search results unless an "About form" pages is published for the form
- Legacy and subdomain content is often not returned in sitewide search results
- Sitewide search matches exact words and doesn't return relevant results for natural language searches


## Desired User Outcomes
- Creates a unified search that allows site visitors to execute a search for any type of information - facility locations, authenticated information, forms, general information, etc. - from a single search experience
- Improved findability of content currently not served up in global search
- Improved relevancy and accuracy of results

## Desired Business Outcomes

- Reduce development and maintenance overhead due to multiple search code bases and experiences
- Mitigates risks from dependency on other government agencies with unknown priorities


---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

**Search relevancy**
1. Improve "no results" queries without use of manually entered recommendations (i.e. Best Bets)  
    - [Top no results queries](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/2025.md#top-queries-with-no-results)

2. Improve CTR of top queries
    - [Top queries and CTR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/2025.md#top-queries)

3. Improve accuracy of results
    - [List of current inaccurate or misleading search scenarios](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md)

**Search performance**
1. Improve response time
    - [Current response times]
2. Indexing - # of pages indexed, time to index new or updated content
    - Search.gov indexing
      - 1.8 million URLs including PDF, TXT, and other docs
          - Search.gov pauses for up to 5 seconds for a page that includes React and 1 second between other pages
      - Process
        - Search.gov pings the sitemaps mutiple times a day to pick up any entries that are new or updated since the last time checked and updates those items in the index
        - Every 30 days it checks all URLs in the index to find updates not noted in the sitemaps - i.e. 404s, redircts, etc
        - Search.gov cannot reindex VA.gov more frequently because of the sitemap_bva.xml file containing 1.6 million of the total 1.8 million VA URLs indexed primarily for https://search.usa.gov/search?affiliate=bvadecisions
        - Indexing rules and timing are managed at the domain level - Search.gov cannot manage indexing or priority mgmt at a more granular level, such as for bva.va.gov
       
**Reliability**


## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### Supporting research

**Previous research supporting effort**

- [01/2021 VA.gov search research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/research-study-jan-2021/research-findings.md)
- [09/2021 Search design concepts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/2021-Aug-research-study/research-findings.md#3-using-different-search-tools-on-different-pages-is-confusing-ie-vagov-site-search-find-a-va-form-resources-and-support)
    - 

### What're you building?

> *What's in scope for you to build with this initiative? Describe key features/flows.*
- Stand up a POC search experience for Resources and support using Amazon Kendra
  - return relevant results for simple queries and more complex natural language queries
  - allow for filtering of results based on facets/tagging system created in Drupal
  - display results within a custom front-end experience
- Stand up POC within Find a form experience 
  - connect to additional data source other than an xml sitemap and serve both results that may or may not include a web page link
  - display results within a custom front-end experience
- Stand up POC for sitewide search
  - return relevant results for simple queries and more complex natural language queries
  - allow switching to scoped search to provide targeted results from find a form
  - display results within a custom front-end experience 

 
> *What have you explicitly decided to **not** include and why?*
- Searching for "near me"

> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*
- Before building a search experience to meet the authentiated experience needs, we need an integrated search engine that can search across various data sources and experiences on VA.gov.  Once proven out and implemented, future iterations will move towards search authenticated content and information. 

> *How does this solution address your Assumptions & Risks?*

#### Go-to-market 

> *What marketing, outreach, or communications are necessary for this product to be successful?*

> *Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116570)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Onsite search
- GitHub Label(s): search
- Slack channel: #onsite-search 
- Product POCs: Mikki Northuis, Jennifer Kramer, Megan Siddle

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:  Office of the CTO
- Contact(s): Chris Johnston
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
