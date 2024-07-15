
# On-Site Search Product Outline - VA.gov

## Communications
- GitHub Label: search
- Slack channel: [#va-search](https://dsva.slack.com/channels/va-search), or [#sitewide-public-websites](https://dsva.slack.com/channels/sitewide-public-websites)
- Product POCs: 
   - Dave Conlon, @davidconlon 
- Engineering POCs:
   - Fran Cross, Sitewide Public Websites, @FranECross
- Search.gov POC: 
   - Arantxa Pipernova (arantxa.recio@gsa.gov)
   - Dawn McCleskey (Dawn.mccleskey@gsa.gov)
   - Ayush Chakravarty (ayush.chakravarty@gsa.gov)

## North Star
Providing a first-class, modern on-site search tool for Veterans fully aligns with our North Star goals of:
- Increase the use of self-service tools, focusing on services most important to Veterans.
- Decrease the time users spend waiting for an outcome.
- Consistently deliver a satisfying, reliable, and secure online experience.

## User Problem Statement
As a Veteran, I am able to find the information I need to on the VA.gov Website (Desktop and Mobile) as quickly and easily as possible using the search feature.

### User Goals
- As a veteran, I want to easily and quickly find the information I need with few clicks as possible on the VA.gov Website.
- As a veteran, I want to avoid reading long pages of content in order to get to my desired outcome.
- As a veteran, I want to get the most relevant results when I use VA.gov search.
- As a veteran, I want to get the most relevant results even if I am not precise about the information I seek or make a mistake in my search terms.

### Product Goals
- Modernize the on-site search experience on VA.gov with features and functions which enable more directed search (e.g. type-ahead, faceted search, etc.)
- Make VA.gov on-site search results more relevant and reliable
- Measurably improve customer satisfaction with VA.gov on-site search
- Create a cohesive brand across the VA through direct control of the search page layout and look (To be better defined and verified as a goal)
- Provide a more comprehensive sitemap (https://www.va.gov/site_map.htm) so search results are more accurate by allowing searching within a subdomain (To be better defined and verified as a goal)

## Assumptions
- The current VA.gov on-site search experience is not satisfactory to our users
- Most important modern features -- e.g. type ahead, faceted search -- can be leveraged using VA.gov's API-based implementation with Search.gov

# Requirements
## In Scope
- The VA.gov on-site search experience which is used in the modern header of VA properties and powered by Search.gov 

## Out of Scope
- The search experience on any VA-affiliated Websites not using the VA.gov search powered by Search.gov. 

# Discovery
## Market Insights & Trends
- Nielsen Norman Group: Site search suggestions -- e.g., autocomplete or autosuggest https://www.nngroup.com/articles/site-search-suggestions/
- Nielsen Norman Group: The pinball pattern of scanning the modern search results page.   https://www.nngroup.com/articles/pinball-pattern-search-behavior/
## Technical
- Initial technical discovery for improvements (Jan 2020) https://github.com/department-of-veterans-affairs/va.gov-team/issues/5322#issuecomment-580918779
- Search.gov GitHub Repository for VA.gov implementation https://github.com/GSA/search-gov-agency-collaboration
- VA.gov XML Site Map - https://www.va.gov/sitemap.xml
## Product
There are four areas of focus for this initiative:
1. Optimizing site indexing to ensure surfacing of the most relevant results in both on-site and organic search.  Key questions:
- Is the auto-generated site xml map for VA.gov best structured for indexing by both Search.gov and external search engines? (e.g., only canonical versions of URLs, etc.). Note: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/xml-sitemap-guidelines.md
- Have sitemaps been provided for all or the prioritized VA.gov subdomains (site map indexing is preferred to crawling)
2. Implement and/or improve the VA.gov utilization of available Search.gov features, including: 
- Type-ahead - https://github.com/department-of-veterans-affairs/va.gov-team/issues/8896 
- Routed query - https://search.gov/manual/routed-queries.html - API documentation may be available in May 2020
- Event-based analytics (via js code snippet) - API documentation to be available in June 2020
- Enhanced use of Best Bets/Top Recommendations
3. Determine if/when other Search.gov features can be leveraged by VA.gov given the API-based implementation.  These include: 
- Spelling suggestions - https://open.gsa.gov/api/searchgov-suggestions/
- Faceted search via collections - https://search.gov/manual/collections.html
- Images
- Tweets - https://search.gov/manual/twitter.html
- YouTube videos - https://search.gov/manual/youtube.html (if a priority to the business)

4. As part of the Product discovery process, a fresh assessment will be made of broader on-site and organic search trends and features to ensure the most up-to-date best practices are considered.  For example, search engine result page (SERP) features, such as Featured Snippets, People Also Ask, Knowledge Panels (https://www.nngroup.com/articles/key-serp-features/)

## User Insights
- A deep dive review of Search-related data from Google Analytics and Search.gov is underway to determine the effectiveness of on-site search.
- A qualitative study of the effectiveness of VA.gov's search experience may be necessary to derive the insight needed to formulate/validate product hunches.

## Analytics
The Analytics team is conducting a gap research spike (https://github.com/department-of-veterans-affairs/va.gov-team/issues/8572) to determine what GA data is available and what tagging needs to be done to address key upfront questions related to VA.gov on-site search, including:

- How many VA.gov daily visitors use search -- 10% overall, 6% mobile in 2020 (YTD)
- What are the top search terms/queries overall?
- What are the top search terms per benefits hub/site category -- Health Care, Disability, Education & Training?
- How many are searching Top Tasks -- e.g. Check your claim or appeal status, Refill and track your prescription?
- How often do search users click through to the second page?
- Are there any indicators that our search is not fulfilling the users’ needs? 

## Value Propositions
- Reduces confusion for users navigating throughout the site
- Improves brand consistency for the VA
- Expands search results to include new and old pages
- Allows for full stylistic & functional control over the entire page and product

## KPIs
- TBD

## Implementation Info
the search.gov account# for this product is 7378

## Solution Narrative

### Technical Decisions

## Service Level Objectives
These are currently defined as alerts that trigger pagerduty for a product.
- [Search related alerts here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/prometheus/rules/application.rules)

## Testing
The search product can be found in the header of dev, staging, and production environments. Simply type in a word to get results and test the product:
<img width="1680" alt="Screen Shot 2019-04-30 at 3 20 18 PM" src="https://user-images.githubusercontent.com/21130918/56987486-90614300-6b5b-11e9-87d2-8d75f9346b85.png">

## Keywords
- search
- search.gov
- robots.txt
- sitemap
- best bets
- recommended results


## Content Sources 

|**Content Source**         |**Metadata**         |**Additional Details**| 
|-----------------------|------------------------------|------------------------------|
|Drupal (CMS)    "Modernized Content"         |[metatags.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/includes/metatags.drupal.liquid) |Initiated in 2019, Majority of all va.gov content, Slack Channel: #csm-support  |
|Teamsite "Legacy Content"            |[metatags.liquid](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/includes/metatags.liquid) |TBD |
|[GH Content](https://github.com/department-of-veterans-affairs/vagov-content)             |TBD |this template in particular is used to inject meta properties throughout the whole site and injected in the [header.html](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/includes/header.html) 
|Generated During Build (Derived from GH Content or Drupal)             |TBD |ex: sitemap xml, [sign on page](https://www.va.gov/resources/tag/sign-in/), application pages such as [find a location](https://www.va.gov/find-locations), |
|React application - FE Project Vets Website|Detail |Detail |
|Forms API             |TBD |Takes data from the VA forms database and merges it with additional metadata from Drupal (CMS) |



# [Search.Gov Information](https://search.gov/)


 

## Analytics
<img width="2183" alt="Sample Monthly Report" src="https://user-images.githubusercontent.com/72393866/118717844-91be4080-b7f4-11eb-889b-1351d539af1d.png">

*Description of Data elements from Monthly Reports* 
 1. **Queries with No Results:** Queries conducted that month that had zero search results presented to users
 2. **Queries with Low Click Thrus:** Queries conducted that month that did not trigger a user to click on a result; resulting in a low click thru rate 
 3. **Module:**  The modules are the different components of our search experience. Each module loads when there are relevant search results to display. Each module has a code, and you’ll see these codes in the Download Details csv files. - more information on each can be found on our [search.gov](http://search.gov/) site, under the Search Features. [https://search.gov/manual/module-codes.html](https://search.gov/manual/module-codes.html) [https://search.gov/manual/site-launch-guide.html#add-features](https://search.gov/manual/site-launch-guide.html#add-features)
 4. **Impressions:** Search.gov counts an impression anytime that module appears in the returned search results. We are currently only rendering i14y Documents and Best Bets.
 5. **Clicks:** TBD
 6. **Your CTR:** TBD
 7. **Average CTR:** These are system-wide averages across sites that use Search.gov, not metrics for your specific site.
 8. **i14y Documents:** TBD
 9. **Best Bets Text:** TBD
 10. **Video Results (You Tube):** TBD
 11. **Tweets:** TBD
 12. **Health Topics:** TBD
 13. **Jobs:** TBD
 14. **Total:** TBD
 15. **Download Top Queries:** TBD 

## Indexing + Relevance
- [Indexing FAQs](https://search.gov/indexing/indexing-with-searchgov.html)
