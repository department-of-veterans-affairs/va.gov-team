# Search Product Outline

## Communications
- GitHub Label: search
- Slack channel: #dragons-team
- Product POCs: Steve Kovacs & Ben Barone
- Search.gov POC: Dawn McCleskey

## User Problem Statement
Once va.gov relaunches, users need a way to search content across both old and new va.gov properties.

### User Goals
- Find relevant content on the relevant property when performing a search.

### Business Goals
- Create a cohesive brand across the VA through direct control of the search page layout and look.
- Maintain good relations with other VA offices by including their content in the search, and linking off to other relevant searches.


## Assumptions
- the search.gov endpoint will function as well or better than the current search.gov implementation on vets.gov
- users prefer that the content for other the following content on separate search tools:
   1. Look up Board of Veterans' Appeals (BVA) decisions — https://www.index.va.gov/search/va/bva.jsp
   2. Search VA reference materials (WARMS) —https://www.index.va.gov/search/va/va_adv_search.jsp?SQ=www.benefits.va.gov/warms
   3. Find VA forms and publications — https://www.index.va.gov/search/va/va_adv_search.jsp?SQ=www.va.gov/vaforms,www.va.gov/vapubs,www.va.gov/vhapublications,www.vba.va.gov/pubs/forms
   4. Explore and apply for open VA jobs — https://www.vacareers.va.gov/job-search/index.asp


## Requirements
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
- Allows for full stylistic control over the entire page and product

## KPIs
- This product does not yet have KPIs.

---

# Implementation Info

## Status
#### 10.29 
- Search V1 is implemented and accessible on preview.va.gov through the dropdown search and 404 pages
- Search V2 is accesible in staging at https://staging.va.gov/search/?q=health (temporarily down while load testing in progress)
- Search.gov has begun indexing preview.va.gov sitemap (soon to beocome the new www.va.gov sitemap) and is starting on the old va.gov compiled sitemap shortly
- Phase 1 or 2 completed for load testing. Run at 15 requests per second with 0 failures
- Phase 2 of load testing scheduled for 10.30.18 and will perform at 45-50 requests/second

## Technical Decisions
- a new search.gov account was created to separate out the vets.gov search from the new va.gov search
   - va.gov account # is 7378
- search needs to use the i14y endpoint from search.gov. [API instructions here](https://search.usa.gov/sites/6277/api_instructions)

## Team

- VA Digital Strategist(s) *: Steve Kovacs steven.kovacs@va.gov
- Product Manager *: Ben Barone ben.barone@adhocteam.us 
- Design Lead: Samara Strauss samara.strauss@va.gov
- Eng Lead: Ben Shyong ben.shyong@adhocteam.us 
- Engineers:
   - Ben Shyong
   - Harry Levine
   - Keifer Furzland
- Search.gov POC: Dawn McCleskey *: search@support.digitalgov.gov
   
## Screenshots

### Previous www.va.gov
![screen shot 2018-10-29 at 9 31 20 am](https://user-images.githubusercontent.com/21130918/47652844-6ce21f00-db5d-11e8-90dd-080a9c397f0b.png)

#### Preview.va.gov V1 (soon to be deprecated)

![screen shot 2018-10-29 at 9 41 24 am](https://user-images.githubusercontent.com/21130918/47653534-2d1c3700-db5f-11e8-89d4-5182d7743add.png)

#### Preview.va.gov V2 (upcoming www.va.gov relaunch on Nov 7)
