# Advanced Search

## Problem statement

Users are accustomed to and expect instant, relevant search results. OOTB Drupal search is slow and is not capable of providing relevant search results when user query consists of more than one keyword. Also, the default search does not search on the full content of the page, only on a minimal set of fields.

As of 1/13/21, the CMS has around 15,000 searchable nodes. This number is expected to grow significantly in the next quarter and on. The more content users add, the slower and less relevant the OOTB search will become.

Search tools within the CMS can benefit from a faceted search UI. While it is possible to add some faceted search functionality based on the OOTB search, we will hit its limits very quickly. Facets based on the default Drupal database search backend fail when the amount of content searched reaches 100,000.

CMS users need to have performant and relevant search in order to find content they are looking for quickly.

## Hypothesis or Bet

* Modern Lucene-based search backend will allow the CMS team to build advanced search features for CMS users.
* Relevant keyword search will allow users to find their content on the first attempt and they will not need to use precise spelling in order to get results. Example: when users enter “healthcare”, results with “health care” should show, but currently they aren’t.
* Faceted search will provide means of enhancing search tools and build dashboard screens that help users find content and accomplish their tasks quickly.

## We will know we're done when... ("Definition of Done")

* The Drupal CMS has a new search backend.
* Advanced search features are designed and usability is validated with users.
* Advanced search features are implemented in the CMS.

## Known Blockers/Dependencies

* none

## Relevant Backlog

[Advanced Search](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3933)



