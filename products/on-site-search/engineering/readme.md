## VA.gov On Site Search Engineering README

See [the Search playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/search-playbook.md) for access, tooling and support specifics.

### Search.gov Integration & Background

VA.gov search is powered by Search.gov, a service of the General Services Administration, supporting the search boxes on over 2,000 websites, across 30% of federal domains.  

The technology core of Search.gov's engine is [Elasticsearch](https://www.elastic.co/elasticsearch/).   

VA.gov is utilizing Search.gov's API in order to more fully customize the look and feel of the search results pages in harmony with the site's brand design pattern.

[See docs here](https://search.gov/indexing/what-searchgov-indexes.html) for specifics on how Search.gov crafts search results.

[Here are the developer docs](https://search.gov/developer/) for APIs and source code.

### Search.gov Rate-Limiting

Search.gov uses "standard tools" for rate-limiting (per their support team), and has allow-listed specific VA IP addresses. The support team can provide that allow-list, if asked.

Slack threads regarding `v0/search_click_tracking` and rate-limiting issues and other error codes received from Search.gov (through `vets-api`):

- https://dsva.slack.com/archives/CBU0KDSB1/p1692975025227259
- https://dsva.slack.com/archives/D05PCPLM4QN/p1692974698675269
- https://dsva.slack.com/archives/C52CL1PKQ/p1692883308106199
- https://dsva.slack.com/archives/CBU0KDSB1/p1690239844318679

Related Github issues:
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/16367
- https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14819

## Ranking Factors

Per the [Search.gov help manual](https://search.gov/manual/ranking-factors.html), each of the following ranking factors is calculated separately, and then multiplied together to create the final ranking score of a given item for a given search.

- **File Type**

Preference is given to HTML documents over other file types. Non-HTML results are demoted significantly, to prevent, for instance, PDF files from crowding out their respective
landing pages.

- **Freshness**

Preference is given to documents that are fresh. Anything published or updated in the past 30 days is considered fresh. After that, we use a Gaussian decay function to demote documents, so that the older a document is, the more it is demoted. When documents are 5 years old or older, we consider them to be equally old and do not demote further. We use either the article:modified_time on an individual page, or that page’s <lastmod> date from the sitemap, whichever is more recent. If there is only an article:published_time for a given page, we use that date.

- **Page Popularity**

Preference is given to pages that users interact with more.


## Architecture scribbling (TODO: make this formal)

TODO: Find a way to get an architecture diagram long the lines of [the Forms one](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/engineering/engineering.md)

* Search calls come in from veterans
* We send this out to search.gov, via fwdproxy
* Responses from Search.gov come back to the fwdproxy. At this stage, if Search.gov returns a 503, sometimes the errors aren't fully parsible or structured enough. So we don't always know exactly what happened between the Search.gov response and our backend API (vets-api / fwdproxy).
    * There are different types of 503 errors. Right now (March 2024) we can't differentiate the flavors of 503s we get from Search.gov at the fwdproxy level. But also: Search.gov shouldn't be returning 503s. 
    * Getting a more structured error response at the fwdproxy layer would be a Platform / vets-api structural ask, we think.

### Open Questions

- Is it possible to fine-tune VA.gov users' search experience with boosts, weights, and synonyms?
