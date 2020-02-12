# Documentation Search MVP

**Author(s):** Bill Fienberg <bill.fienberg@oddball.io>

**Last Updated:** 2020-02-11

**Status:** **Draft**

**Approvers:** Andrew G., Megan K., Rian F., Wyatt W.

## Overview

### Objective

Add search functionality to a public documentation landing page.

### Background

The documentation we have is spread across many different locations (public repos, private repos, GitHub pages, handbooks, etc). There currently isn't a way for VFS/VSP users to search multiple documentation sources with a single query.

### High Level Design

We are adding a public landing page that will contain a search input where users can search multiple sources of documentation with one query.

## Specifics

### Detailed Design

For a multi-repo search MVP, we are adding an HTML text input and [Algolia's DocSearch JS snippet](https://github.com/algolia/docsearch) to the [`va.gov-team` GitHub Pages site](https://department-of-veterans-affairs.github.io/va.gov-team/), [Algolia's Search API](https://www.algolia.com/products/search/), and [Algolia's scraper](https://github.com/algolia/docsearch-scraper).

In general, this kind of system requires the following components:

- Page with Input Textbox - We need a public page with a search input where users can input their search term(s).
- Index/Database - We need a place to store the records that will be returned to the user.
- Search API - We need a way to get data out of the index.
- Crawler/Scraper - We need a crawler to scan our documentation sources and push data to our index.
- Pipeline - We need a way to routinely run the crawler

Each one of the above components could be a separate buy-or-build decision.

By leveraging the following existing technologies, we should only need to add the search input to the landing page, configure the scraper, and configure when to run the scraper.

- Algolia's Search API product will satisfy the index and API components.
- Algolia's open source JavaScript snippet will display search results to the user.
- Algolia's open source scraper will crawl and scrape our public documentation sources to push records into our index.

#### Where/when to run the scraper

For the MVP, we will run the crawler in a scheduled job once every 24 hours in Circle CI.

#### Private repos

---

### Code Location

The code will live in a new repo (tentatively titled something like `docs-landing-page`).

### Testing Plan

#### Environments

For an MVP, I'm not certain it's necessary to have different environments for the search input and the scraper.

##### Testing the scraper

###### New records should appear in index after a crawl

1. Search for term that returns zero results
1. Add document that contains term
1. Run crawler
1. Search for recently added term
1. Assert that term is in index

###### Old records should disappear from index after a crawl

1. Search for term that exists in index
1. Remove document that contains term from index
1. Run crawler
1. Search for recently deleted term
1. Assert that term isn't in index

###### Records should reflect edits after a crawl

1. Search for record that exists in index
1. Edit document
1. Run crawler
1. Search for recently edited record
1. Assert that record reflects recent edit

##### Testing the search functionality

Once we have records in our Algolia index and the DocSearch frontend library on a page, we should be able to test the search functionality the same way the end user would use it.

### Logging

Algolia includes analytics, such as ["Most popular searches and results most often returned by the search engine."](https://www.algolia.com/products/analytics/?tab=popular)

### Debugging

The Docker image for the scraper is available on [Docker Hub](https://hub.docker.com/r/algolia/docsearch-scraper). Once we have a config file, we can [run the scraper locally](https://community.algolia.com/docsearch/run-your-own.html#run-the-crawl-from-the-docker-image).

#### Debugging the scraper

#### Debugging the search functionality

We could search for the same term in both the Algolia UI and the landing page to confirm if they both return the same results.

### Caveats

- Access Control: By making the documentation landing page public, it becomes difficult, if not impossible, to allow an unauthenticated user to search documentation from private sources (like a private Github repo). One suggestion is that search results lead to public documentation sources, and we include links to private documentation in the public sources. That way, we can rely on existing access control solutions, while still providing a decent solution. One of the major downsides of that approach is auditing, adding, updating, and maintaining links to/from the public and private sources.

### Security Concerns

If the search input dispatched a request directly to the Algolia API, then there'd be minimal risk of the documentation search negatively affecting other systems. If the request was proxied through our API, then we should be able to rely on any existing DOS protections.

### Privacy Concerns

While there shouldn't be any PII in our public documentation sources, it is possible it exists, and hasn't been discovered yet. Therefore, it is possible that our search results could lead public users to sources that contain PII. If PII is discovered in a repo, we have a [checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/removing-sensitive-data-from-a-repository.md#checklist-for-removing-pii-in-md-file-from-a-documentation-repo) for how to remove it.

#### Removing a record from Algolia

1. Login to Algolia
1. Navigate to the **Indices** page
1. Use the search input to find the sensitive record(s)
1. Click the trash can icon to open the deletion modal
1. Click the delete button

---

### Open Questions and Risks

---

### Work Estimates

1. Provision and configure data store to house records that will be returned from the Search API. - 1 week

- I estimate one week because I suspect we'll either need to get approval to use Algolia's hosted API or get approval to provision a custom data store.

1. Configure crawler to seed the initial data store. - 2 days
1. Run the crawler to populate the data store. - 2 days
1. Build a landing page that will contain a search input that submits requests to the Search API. - 2 days
1. Deploy the landing page to a publicly available location. - 2 days

- I estimate this may take longer if we need to need to coordinate with other teams.

### Alternatives

#### Ready-made alternatives

The recommendation from the discovery sprint is to build a custom documentation landing page that includes multi-repo search functionality, as well as a table of contents for critical documentation. This design doc is focused specifically on the search component. The following alternatives are more robust documentation solutions that include search functionality as part of a larger product.

- [Slab](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/research/discovery-sprint-12-2019/technology-discovery.md#slab) is a full-featured documentation solution that includes search (powered by Algolia). Slab's search feature is able to search across multiple repos. However, there are concerns about requiring users to sign in to a Slab account to browse documentation, which is something that is not part of their current workflow. Additionally, Slab's pricing is non-trivial. Using the number of users in the #general channel of the DSVA Slack workspace, we estimate Slab would cost approximately \$24k per year. And since this design doc is focused on an MVP for documentation searching, Slab is far more than an MVP. Slab is currently being viewed as a post-MVP solution, if the MVP doesn't meet expectations.
- [GitBook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/research/discovery-sprint-12-2019/technology-discovery.md#gitbook) includes a decent search feature, but it unfortunately only searches a single repo at a time. It doesn't support multi-repo/organization search, and didn't appear to be customizable.

#### Open source alternatives

- Open source crawler: https://github.com/internetarchive/heritrix3
- Open source document search engine with automated crawling, OCR, tagging and instant full-text search: https://ambar.cloud/
- Open source search engine: Elasticsearch
  - Configuring/deploying/maintaining our own Elasticsearch instance would likely be more expensive and less robust than using Algolia's Search API

#### Custom alternatives

- Continue iterating on existing [Gatsby site](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/).

### Future Work

- Ability to search private documentation sources

### Revision History

| Date         | Revisions Made         | Author        | Reviewed By |
| ------------ | ---------------------- | ------------- | ----------- |
| Jan 27, 2020 | Initial Draft          | Bill Fienberg |             |
| Feb 10, 2020 | Update Detailed Design | Bill Fienberg |             |
| Feb 11, 2020 | Answer open questions  | Bill Fienberg |             |
