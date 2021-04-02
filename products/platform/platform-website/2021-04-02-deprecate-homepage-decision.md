# When do we deprecate the Home Page in tandem with building out Platform Website V3?

This doc provides context to make a decison around _if_ we deprecate the Home Page MVP in conjunction with building out Platform Website V3.

_Authors:_ Liani Lye and Gretchen Maciolek, Platform Team: Content/IA

_Decision maker:_ Rachael Roueche, Platform OCTO-DE lead


## Platform Documentation artifacts

- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-website/platform-website-product-outline.md)
- Product iterations
  - [Pre "Platform Website": The old, practice area-based "Home Page MVP"](https://department-of-veterans-affairs.github.io/va.gov-team/)
  - [V1: Backend development documentaton](https://depo-platform-documentation.scrollhelp.site/developer-docs/)
  - [V2: Persona-based landing pages](https://va-platform-docs.scrollhelp.site/getting-started/)
  - [V3: In-progress](https://va-platform-docs.scrollhelp.site/index.html)
- 2021 Q2 "Develop IA" initiative: [Platform Website — Develop IA for Platform Website #22189](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/22189)


## Context

In 2021 Q1, the Content team populated the Platform Website with persona-based landing pages.  In 2021 Q3, we aim to have Platform teams begin populating the Platform Website.  However, we cannot have simultaneously maintain Platform Website and Home Page MVP, as we would then have two sources of truth re: how to build on the VA.gov Platform.  Here are the options we see in deprecating the Home Page MVP.

## Paths forward

All options would be followed by the release plan outlined in [Platform Website — Migrate Homepage MVP documentation to Confluence: Release plan #17376](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/17376).

### Option 1 (recommendedation): Deprecate the Home Page MVP -after- we have created a Platform Website with multiple content sources (by EOD 4/16)

We deprecate the Home Page MVP by mid-April (in two weeks, by EOD 4/16).  _We are assuming that deprecating = adding an alert at the top of the Home Page MVP,_ not _somehow making the page throw a 404._  Deprecating in two weeks allows us to:

- **Write alert verbiage once:**  We hypothesize that putting the whole team's effort into consolidiating product lists (ie, defining the IA) will allow us to come away with an agreed-upon list by the end of next week.
- **Make sure there are no dead ends:**  We hypothesize that leaving the Home Page MVP live until we are able to direct to the Platform Website will minimize the possibility that customers cannot find the information they need.
  - _Background:_ After looking at the Home Page MVP's usage data, we cannot confirm that _no one_ uses the site.
- **We can deliver an equivalent experience to the Home Page:**  We hypothesize that working the Home Page MVP links into an implemented IA will be a better UX.


### Option 2: Deprecate the Home Page MVP, without any redirection to the Platform Website (ASAP)

Again, we assume that deprecating = adding an alert at the top of the Home Page MVP, _not_ somehow making the page throw a 404.

* **We will not be able to spend the next two weeks consolidating an IA:**  We will have a split-team focus.
* **We might have customers who rely upon the Home Page MVP:**  we cannot confirm that _no one_ uses the site, and we want to minimize the possibility that customers cannot find the information they need.

## Decision

 Let’s launch V3 as well as deprecate the Home Page by the end of Sprint 49. 
