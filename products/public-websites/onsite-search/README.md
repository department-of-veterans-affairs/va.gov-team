
# Search Product Outline - VA.gov  

## Communications
- GitHub Label: search
- Slack channel: #va-search
- Product POCs: 
   - Jennifer Lee, DSVA @Jen Lee
   - John Hashimoto, DSVA @John Hashimoto
   - Steph Orkand @Stephanie Orkand
- Search.gov POC: 
   - Arantxa Pipernova (arantxa.recio@gsa.gov)
   - Dawn McCleskey (Dawn.mccleskey@gsa.gov)
   - Ayush Chakravarty (ayush.chakravarty@gsa.gov)

## Table of Contents
- [User Problem Statement](#user-problem-statement)
- [Assumptions](#assumptions)
- [Limitations](#limitations)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Service Level Objective](#service-level-objective)
- [Testing](#testing)
- [Keywords](#keywords)

## User Problem Statement
As a Veteran, I am able to find the information I need to on the VA.gov Website (Desktop and Mobile) as quickly and easily as possible using the search feature.

### User Goals
- Veterans want to easily and quickly find the information they need -- with few clicks as possible -- on the VA.gov Website.
- Veterans want to skip/avoid reading long pages of content in order to get to their desired outcome.
- Veterans want to get the most relevant results when they use VA.gov search.

### Business Goals
- Create a cohesive brand across the VA through direct control of the search page layout and look
- Provide a more comprehensive sitemap (https://www.va.gov/site_map.htm) so search results are more accurate by allowing searching within a subdomain

## Assumptions
- Capturing click events and sending them back to search.gov will help prioritize indexing

## Scope 

## Solution Approach & Considerations
- On-site Search - Initial technical discovery for improvements (Jan 2020) https://github.com/department-of-veterans-affairs/va.gov-team/issues/5322#issuecomment-580918779
   

## Value Propositions
- Reduces confusion for users navigating throughout the site
- Improves brand consistency for the VA
- Expands search results to include new and old pages
- Allows for full stylistic & functional control over the entire page and product

## KPIs
---

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


