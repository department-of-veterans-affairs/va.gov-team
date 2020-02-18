# Documentation Search MVP

**Author(s):** Bill Fienberg <bill.fienberg@oddball.io>

**Last Updated:** 2020-02-18

**Status:** **Draft**

**Approvers:** Andrew G., Megan K., Rian F., Wyatt W.

## Overview

### Objective

Sign up for Algolia, add a search input and Algolia's DocSearch JS snippet to the root page of `va.gov-team`'s GitHub Pages site, and configure CircleCI to run's Algolia's scraper to crawl our docs once per day.

### Background

The documentation we have is spread across many different locations (public repos, private repos, GitHub pages, handbooks, etc). There currently isn't a way for VFS/VSP users to search multiple documentation sources with a single query.

### High Level Design

We will use [Algolia's Search API](https://www.algolia.com/products/search/) coupled with [Algolia's DocSearch scraper](https://github.com/algolia/docsearch-scraper) and Algolia's [Dropdown Search-UI](https://docsearch.algolia.com/docs/dropdown) to index and search our public documentation sources.

## Specifics

### Detailed Design

For a multi-repo search MVP, we are adding an HTML text input and [Algolia's DocSearch JS snippet](https://github.com/algolia/docsearch) to the [`va.gov-team` GitHub Pages site](https://department-of-veterans-affairs.github.io/va.gov-team/). This will use [Algolia's Search API](https://www.algolia.com/products/search/) to query Algolia's hosted database (https://www.algolia.com/pricing/), which will be populated by [Algolia's scraper](https://github.com/algolia/docsearch-scraper) using a [configuration we supply](docs/docsearch-scraper-config.json).

In general, this kind of system requires the following components:

- Page with Input Textbox - We need a public page with a search input where users can input their search term(s).
- Index/Database - We need a place to store the records that will be returned to the user.
- Search API - We need a way to get data out of the index.
- Crawler/Scraper - We need a crawler to scan our documentation sources and push data to our index.
- Pipeline - We need a way to routinely run the crawler

By using Algolia's Search API product with their open source Dropdown Search-UI and open source scraper, we can avoid building/maintaining the database, API, UI, and crawler components.

That means we'd be responsible for:

- Converting `va.gov-team`'s `docs/index.md` from markdown to HTML
- Adding a search input to `va.gov-team`'s `docs/index.html`
- Adding the DocSearch `<style>` and `<script>` tags to `va.gov-team`'s `docs/index.html`
- Writing the config file for the scraper
- Adding CircleCI to `va.gov-team`
- Adding a scheduled job to `va.gov-team`'s CircleCI pipeline to run the scraper once every 24 hours
- Manually triggering the initial scraper run to populate our Algolia index

#### Algolia account

##### Usage limits

[Algolia's pricing page](https://www.algolia.com/pricing/) shows three different tiers, in addition to an enterprise plan. The primary differentiator between the tiers is the number of records and the number of operations (read/write/edit/delete) included with each plan.

You can read more about how Algolia counts records and operations in their [FAQ](https://www.algolia.com/doc/faq/accounts-billing/how-algolia-count-records-and-operation/).

You can read more about how Algolia builds a DocSearch index in the [DocSearch docs](https://docsearch.algolia.com/docs/how-do-we-build-an-index).

###### The Community Plan

The free tier, the Community plan, includes up to 10K records and 50K operations (read/write/edit/delete). If we exceed the limits of the free tier, we'd have to upgrade to a paid tier.

###### The Starter Plan

The middle tier, the Starter plan, starts at $29/month, and includes up to 50K records and 250k operations. If we exceed the limits of the Starter plan, it would cost an extra $10/month for every additional 100K operations, and an extra \$10/month for every additional 20K records.

###### The Pro Plan

The upper tier, the Pro plan, starts at $499/month, and includes up to 1M records and 5M operations. If we exceed the limits of the Pro plan, it would cost an extra $5/month for every 100K additional operations, and an extra \$5/month for every additional 20K records.

---

##### Records

Essentially, every line of text (`<p>`, `<li>`, `<h1-6>`, etc) in a markdown file ends up as a separate record in the Algolia index. We have approximately 3K `.md` files in the `va.gov-team` repo. We ran a test crawler on the `va.gov-team` repo to estimate how many elements would match our selectors, and it found almost 150K matching elements, which equates to almost 150K records.

Each crawl deletes and repopulates the index. I have confirmed this by noting how the `objectID` of a record changes after every crawl, even if the rest of the record was unchanged.

On one hand, that is a good thing because it means the index will never have stale records. On the other hand, that is a bad thing because a bug in the crawler config could wipe out some/all of the index, which would degrade the utility of the search feature.

##### Operations

The DocSearch JS snippet doesn't seem to use any debouncing. I noted the number of operations, and then quickly typed `design`. I expected the search request to wait until I was done typing, and the number of operations to only increase by one. However, the number of operations increased by six.

Since each crawl wipes and repopulates the index, that means each crawl will produce a number of operations approximately equal to the previous number of records. The number of operations may be larger due to new lines/files in the repos, and it may be smaller due to deleted lines/files in the repo.

If the `va.gov-team` repo currently produces ~150K records, then crawling `va.gov-team` would produce ~150K operations every time it runs. If the `va.gov-team` repo is crawler once per day, then that would produce ~150K operations every day. At that rate, we'd have approximately ~4.5M operations every month from crawling the `va.gov-team` repo alone.

##### Recommended Plan for Our Usage

If we crawled the `va.gov-team` repo every day, our minimum usage would be ~150K records and ~4.5M operations. Based on that usage, it would be cheaper to use the Pro plan.

###### Starter plan: \$509 per month.

- Base: \$29/month
- Additional records: \$50/month

  - 150k needed - 50k included = 100k additional
  - An additional 20k records is \$10/month
  - 100k / 20k = 5
  - 5 \* \$10/month = \$50/month

- Additional operations: \$430/month

  - 4.5M needed - 250k included = 4.25M additional
  - An additional 100k operations is \$10/month
  - 4.25M / 100k = 42.5, which is 43 when rounded up
  - 43 \* \$10/month = \$430/month

- Total: \$509

###### Pro plan: \$499 per month.

- Base: \$499/month
- Additional records: \$0/month
- Additional operations: \$0/month
- Total: \$499

#### Where/when to run the scraper

We will run the crawler in a scheduled job once every 24 hours in a Circle CI pipeline for the `va.gov-team` repo.

#### Public repos

We will crawl and scrape the following public documentation sources:

- [`va.gov-team` repo](https://github.com/department-of-veterans-affairs/va.gov-team)
- [`veteran-facing-services-tools` repo](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/)
- [`vets-contrib` repo](https://github.com/department-of-veterans-affairs/vets-contrib/)
- [design.va.gov](https://design.va.gov/)
- [developer.va.gov](https://developer.va.gov/)

#### Private repos

For the MVP, we will not be indexing private documentation sources.

---

### Code Location

The search input and DocSearch JS snippet will live in the `docs/index.html` file inside the `va.gov-team` repo.

The config file for the crawler (`config.json`) will also live inside inside the `va.gov-team` repo.

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

We can test the search functionality the following ways:

- [Algolia's Docsearch Preview page](https://community.algolia.com/docsearch-preview/)
- On the actual page where the search input lives

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

The [DocSearch JS snippet](https://docsearch.algolia.com/docs/dropdown) requires four pieces of data; the `appId` (public), search `apiKey` (public), `indexName`, and `inputSelector`.

The `appId` and search `apiKey` are both public. The search `apiKey` only allows read access. There is a separate admin API key that the crawler will use, and that admin API key will need to be configured in an environment variable in CircleCI.

We don't currently have any custom private attributes on the records in our index. If we did, we could configure [`unretrievableAttributes`](https://www.algolia.com/doc/api-reference/api-parameters/unretrievableAttributes/), which is a list of attributes that cannot be retrieved at query time.

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

1. Convert `va.gov-team`'s `docs/index.md` from markdown to HTML - <1 hour
1. Add a search input to `va.gov-team`'s `docs/index.html` - <5 minutes
1. Add the DocSearch `<style>` and `<script>` tags to `va.gov-team`'s `docs/index.html` - <5 minutes
1. Write the config file for the scraper - <1 day
1. Add CircleCI to `va.gov-team` - <1 day
1. Add a scheduled job to run the scraper once every 24 hours in `va.gov-team`'s CircleCI pipeline - <1 day
1. Run the scraper - <1 day

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

| Date         | Revisions Made                                                                | Author        | Reviewed By |
| ------------ | ----------------------------------------------------------------------------- | ------------- | ----------- |
| Jan 27, 2020 | Initial Draft                                                                 | Bill Fienberg |             |
| Feb 10, 2020 | Update Detailed Design                                                        | Bill Fienberg |             |
| Feb 11, 2020 | Answer open questions                                                         | Bill Fienberg |             |
| Feb 12, 2020 | Expand on where/when to run crawler                                           | Bill Fienberg |             |
| Feb 13, 2020 | Add Usage Limits section, and update Code Location & Work Estimate sections   | Bill Fienberg |             |
| Feb 17, 2020 | Add list of public docs, and open question about crawler diffing capabilities | Bill Fienberg |             |
| Feb 18, 2020 | Fix typo, update search testing instructions, exclude private repos           | Bill Fienberg |             |
| Feb 18, 2020 | Add Records section, add Operations section, and plan recommendation          | Bill Fienberg |             |
