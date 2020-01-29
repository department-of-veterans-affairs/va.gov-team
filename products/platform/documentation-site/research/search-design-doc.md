# Global Documentation Search

**Author(s):** Bill Fienberg <bill.fienberg@oddball.io>

**Last Updated:** 2020-01-23

**Status:** **Draft**

**Approvers:** Andrew G., Megan K., Rian F., DevOps

## Overview

### Objective

Search multiple documentation sources from a single, public entrypoint.

### Background

The documentation we have is spread across many different locations (public repos, private repos, GitHub pages, handbooks, etc). There currently is not a way for VFS/VSP users to search all of the documentation sources with a single query.

### High Level Design

We are adding a public landing page that will contain a form where users can search multiple, public documentation sources with a single query.

## Specifics

### Detailed Design

We are adding a public landing page (on a custom domain, if possible) that will contain a search input. That search input will query multiple, public documentation sources with one query.

A successful implementation will have these components.

1. Page with Input Textbox - We need a public page with a search input where users can input their search term(s).
1. Index/Database - We need a place to store the records that will be returned to the user.
1. Crawler/Scraper - We need a crawler to frequently scan our documentation sources for additions/deletions/modifications.

We do not currently have an index of our target documentation sources. And we do not currently have infrastructure to crawl our target documentation sources to build said index.

Algolia appears to be the leader when it comes to searching documentation.

### Code Location

_The path of the source code in the repository._

### Testing Plan

_How you will verify the behavior of your system. Once the system is written, this section should be updated to reflect the current state of testing and future aspirations._

#### Testing the search input

#### Testing the crawler

### Logging

By logging the term(s) that users are querying, we could theoretically identify trends to help increase the quality of our search results.

### Debugging

_How users can debug interactions with your system. When designing a system it's important to think about what tools you can provide to make debugging problems easier. Sometimes it's unclear whether the problem is in your system at all, so a mechanism for isolating a particular interaction and examining it to see if your system behaved as expected is very valuable. Once a system is in use, this is a great place to put tips and recipes for debugging. If this section grows too large, the mechanisms can be summarized here and individual tips can be moved to another document._

### Caveats

- Access Control: By making the documentation landing page public, it becomes difficult, if not impossible, to allow an unauthenticated user to search documentation from private sources (like a private Github repo). One suggestion is that search results lead to public documentation sources, and we include links to private documentation in the public sources. That way, we can rely on existing access control solutions, while still providing a decent solution. One of the major downsides of that approach is auditing, adding, updating, and maintaining links to/from the public and private sources.

### Security Concerns

The search input would need to be sanitized.

If the search input dispatched a request directly to the Algolia API, then there'd be minimal risk of the documentation search negatively affecting other systems. If the request was proxied through our API, then we should be able to rely on any existing DOS protections.

### Privacy Concerns

Since the initial implementation will be an unauthenticated landing page, we will have little, if any, data about the user.

While there shouldn't be any PII in our public documentation sources, it is possible it exists, and hasn't been discovered yet. Therefore, it is possible that our search results could lead public users to sources that contain PII.

### Open Questions and Risks

- Should we index private documentation sources? If so, what private documentation sources can we expose to public users, if any?
- Should the landing page be public only, or should it also support authenticated users?
- How often should we reindex our documentation sources? For perspective, Algolia's open source crawler runs every 24 hours.
- What should the URL of the documentation landing page be? Since we have `design.va.gov`, does something like `docs.va.gov` make sense?
- What is the current opportunity cost of building a custom solution? What are we choosing to delay right now by building a custom solution?
- What is the future opportunity cost of maintaining a custom solution? What will we have to delay in the future by maintaining a custom solution?
- What is the key person risk? How disruptive would it be if the author(s) of the custom solution were temporarily/permanently unavailable?
- What is the Not-Invented-Here risk? How likely is that we're reinventing the wheel?
- What is the inexperience risk? Have any of the team members involved ever built/deployed/maintained this type of system before?

### Work Estimates

_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives

#### Ready-made solutions

- Slab
- GitBook

#### Open source solutions

#### Custom solutions

- Continue iterating on existing Gatsby site

### Future Work

- Ability to search private documentation sources

### Revision History

| Date         | Revisions Made | Author        | Reviewed By |
| ------------ | -------------- | ------------- | ----------- |
| Jan 27, 2020 | Initial Draft  | Bill Fienberg |             |
