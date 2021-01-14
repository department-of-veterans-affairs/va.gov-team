### Background

VA.gov search is powered by Search.gov, a service of the General Services Administration, supporting the search boxes on over 2,000 websites, across 30% of federal domains.  The technology core of Search.gov's engine is [Elasticsearch](https://www.elastic.co/elasticsearch/).   VA.gov is utilizing Search.gov's API in order to more fully customize the look and feel of the search results pages in harmony with the site's brand design pattern.


## Ranking Factors

Per the [Search.gov help manual](https://search.gov/manual/ranking-factors.html), each of the following ranking factors is calculated separately, and then multiplied together to create the final ranking score of a given item for a given search.

- **File Type**

We prefer HTML documents over other file types. Non-HTML results are demoted significantly, to prevent, for instance, PDF files from crowding out their respective
landing pages.

- **Freshness**

We prefer documents that are fresh. Anything published or updated in the past 30 days is considered fresh. After that, we use a Gaussian decay function to demote documents, so that the older a document is, the more it is demoted. When documents are 5 years old or older, we consider them to be equally old and do not demote further. We use either the article:modified_time on an individual page, or that page’s <lastmod> date from the sitemap, whichever is more recent. If there is only an article:published_time for a given page, we use that date.



### Open Questions

- Is it possible to fine-tune VA.gov users' search experience with boosts, weights, and synonyms?
