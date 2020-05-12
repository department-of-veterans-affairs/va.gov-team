
# On-Search Product Outline - VA.gov (WIP)

## Communications
- GitHub Label: search
- Slack channel: #va-search
- Product POCs: 
   - John Hashimoto, DSVA @John Hashimoto
   - Steph Orkand, VSA/GCIO @Stephanie Orkand
- Engineering POCs:
   - Nick Sullivan, VSA/AdHoc @Nick Sullivan
- Search.gov POC: 
   - Arantxa Pipernova (arantxa.recio@gsa.gov)
   - Dawn McCleskey (Dawn.mccleskey@gsa.gov)
   - Ayush Chakravarty (ayush.chakravarty@gsa.gov)

## Table of Contents
- [North Star](#north-star)
- [User Problem Statement](#user-problem-statement)
- [Assumptions](#assumptions)
- [Requirements](#requirements)
- [Discovery](#discovery)
- [User Insights](#user-insights)
- [Analytics](#analytics)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)
- [Implementation Info](#implementation-info)
- [Solution Narrative](#solution-narrative)
- [Implementation Info](#implementation-info)
- [Technical Decisions](#technical-decisions)
- [Service Level Objectives](#service-level-objectives)
- [Testing](#testing)
- [Keywords](#keywords)

## North Star
Providing a first-class, modern on-site search tool for Veterans fully aligns with our North Star goals of:
- Increase the use of self-service tools, focusing on services most important to Veterans.
- Decrease the time users spend waiting for an outcome.
- Consistently deliver a satisfying, reliable, and secure online experience.

## User Problem Statement
As a Veteran, I am able to find the information I need to on the VA.gov Website (Desktop and Mobile) as quickly and easily as possible using the search feature.

### User Goals
- As I veteran, I want to easily and quickly find the information I need with few clicks as possible on the VA.gov Website.
- As a veteran, I want to avoid reading long pages of content in order to get to my desired outcome.
- As a veteran, I want to get the most relevant results when I use VA.gov search.
- As a veteran, I want to get the most relevant results even if I am not precise about the information I seek or make a mistake in my search terms.

### Product Goals
- Modernize the on-site search experience on VA.gov with features and functions which enable more directed search (e.g. type-ahead, faceted search, etc.)
- Make VA.gov on-site search results more relevant and reliable
- Measureably improve customer satifisfaction with VA.gov on-site search
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
Initial focus will be given to assessing the current state of the search product, including:
- Is the auto-generated site xml map for VA.gov optimal for indexing by both Search.gov and external search engines? (e.g., only canonical versions of URLs, etc.). 
- Have we provided sitemaps for all or many of the VA.gov subdomains (site map indexing is preferred to crawling)
Then, we will look to implement a series of modern search features, including: 
- Type-ahead - available via Search.gov API
- Highlighting
- Spelling suggestions - https://open.gsa.gov/api/searchgov-suggestions/
- Related searches
- Event-based advanced analytics (via js code snippet)
- Routed queries
- Faceted search via collections
- Improved use of Best Bets
As part of the Product discovery process, we will take a more holistic and expansive look at broader on-site search trends and features to ensure we consider all best practices.  Examples include:
- Search Engine Result Page (SERP) features, such as Featured Snippets, People Also Ask, Knowledge Panels (https://www.nngroup.com/articles/key-serp-features/)
- 

## User Insights
- 
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

# Implementation Info
the search.gov account# for this product is 7378

## Solution Narrative

### Technical Decisions

## Service Level Objectives (SLOs)
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


