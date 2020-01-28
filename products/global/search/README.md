# Deprecated. Updated version available [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/onsite-search/README.md)
## Search Product Outline

## Communications
- GitHub Label: search
- Slack channel: #Public Websites Team
- Product POCs: 
   - Jennifer Lee, DSVA (Jennifer.Lee27@va.gov)
   - Dave Conlon, DEPO (David.Conlon@va.gov)
   - Kara Kemahli, Ad Hoc (kara@adhocteam.us)
- Search.gov POC: 
   - Dawn McCleskey (Dawn.mccleskey@gsa.gov)

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
Onsite search has not been revisited since the rebranding launch and transition from vets.gov to VA.gov. Since then many legacy pages and forms have been redirected to VA.gov., but a number of subdomains still exist and have not been brought in to the new VA.gov site experience. 

### User Goals
- Easily find and get to relevant, related information that helps veterans, caregivers,  find what I am looking for the first time.

### Business Goals
- Create a cohesive brand across the VA through direct control of the search page layout and look
- Maintain good relations with other VA offices by including their content in the search and linking off to other relevant search tools


## Assumptions
- the search.gov endpoint will function as well or better than the current search.gov implementation on vets.gov
- users prefer to find content for the following search tools on separate pages (and not within the search itself):
   1. Look up Board of Veterans' Appeals (BVA) decisions — https://www.index.va.gov/search/va/bva.jsp
   2. Search VA reference materials (WARMS) —https://www.index.va.gov/search/va/va_adv_search.jsp?SQ=www.benefits.va.gov/warms
   3. Find VA forms and publications — https://www.index.va.gov/search/va/va_adv_search.jsp?SQ=www.va.gov/vaforms,www.va.gov/vapubs,www.va.gov/vhapublications,www.vba.va.gov/pubs/forms
   4. Explore and apply for open VA jobs — https://www.vacareers.va.gov/job-search/index.asp


## Scope for Nov 7 launch
- the header / footer must match the header / footer on the new VA.gov to allow user navigation and UX consistency
- the layout of the page must be accessible to changes
- the sidebar must have links to the four tools listed under assumptions above
- search queries must hit a sitemap consisting of both new va.gov property pages and old teamsite hosted pages


## Solution Approach
Two phase implementation
   1. V1 - Implement the externally hosted search.gov results page so that we can have control over what pages we sitemap and index
   2. V2 - Implement a new, built from scratch FE/BE search product that leverages the search.gov API endpoint and allows for full control over the product and page


## Value Propositions
- Reduces confusion for users navigating throughout the site
- Improves brand consistency for the VA
- Expands search results to include new and old pages
- Allows for full stylistic & functional control over the entire page and product

## KPIs
- This product does not yet have KPIs.

---

# Implementation Info
the search.gov account# for this product is 7378

## Status
#### 11.5.18
- Search V2 is now live on preview.va.gov :tada:
- Recommended results live as a post-launch enhancement
- Load testing complete and successful

#### 10.29.18
- Search V1 is implemented and accessible on preview.va.gov through the dropdown search and 404 pages
- Search V2 is accesible in staging at https://staging.va.gov/search/?q=health (temporarily down while load testing in progress)
- Search.gov has begun indexing preview.va.gov sitemap (soon to beocome the new www.va.gov sitemap) and is starting on the old va.gov compiled sitemap shortly
- Phase 1 of 2 completed for load testing. Run at 15 requests per second with 0 failures
- Phase 2 of load testing scheduled for 10.30.18 and will perform at 45-50 requests/second


## Solution Narrative
### Technical Decisions
- a new search.gov account was created to separate out the vets.gov search from the new va.gov search
   - va.gov account # is 7378
- search needs to use the i14y endpoint from search.gov. [API instructions here](https://search.usa.gov/sites/7378/api_instructions)

### Product Decisions
#### 9.18.18:
- Search MVP is in scope for Nov 7 launch (MVP = functioning search feature, replicating Vets.gov functionality, but w/new VA branding on search.gov hosted results page). 
- Search V2 deprioritized as out of scope for Nov 7 to make room for TeamSite header/footer injection work.

#### 10.5.18
- Search v2 reprioritized as in-scope for Nov 7 WBC launch
- Best bets was determined out of scope pre-launch so that we could launch the V2 product on time for Nov 7

## Service Level Objectives (SLOs)
These are currently defined as alerts that trigger pagerduty for a product.
- [Search related alerts here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/prometheus/rules/application.rules)

## Team

- VA Digital Strategist(s): Steve Kovacs
- Product Manager: Ben Barone 
- Design Lead: Samara Strauss 
- Eng Lead: Ben Shyong 
- Engineers:
   - Harry Levine
   - Keifer Furzland
   - Rian Fowler
   - Narin Ratana

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

## Screenshots

### index.va.gov (original VA product)
![screen shot 2018-10-29 at 9 31 20 am](https://user-images.githubusercontent.com/21130918/47652844-6ce21f00-db5d-11e8-90dd-080a9c397f0b.png)

### Search.gov V1 (deprecated)

![screen shot 2018-10-29 at 9 41 24 am](https://user-images.githubusercontent.com/21130918/47653534-2d1c3700-db5f-11e8-89d4-5182d7743add.png)

### Search.gov V2 (live)
![Screen Shot 2018-11-05 at 11.19.32 AM.png](https://images.zenhubusercontent.com/59ee09c5a468affe6df7cd9e/d6f9b4d8-e284-44ff-99ee-4620140e7619)


